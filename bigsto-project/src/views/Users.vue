<template>
  <div class="container">
    <router-link to="/">
      <button class="btn-link">На главную</button>
    </router-link>
    <div class="navigation">
      <search-bar @search="search = $event" />
      <button class="btn-add" @click="showModal = true">
        Добавить пользователя
      </button>
    </div>
    <modal-user
      :class="{ hide: showModal }"
      :visibility="showModal"
      @click.stop="openHandler"
      @add-user="addUser($event)"
    />
    <user-list :users="paginatedList" @remove-user="deleteUser($event)" />
    <h2 class="empty-list" v-if="this.filteredList.length < 1">{{ text }}</h2>
    <template v-for="(page, idx) of totalPages" class="btns">
      <button
        class="btn-list"
        :class="{ active: page === currentPage }"
        :key="idx + 1"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
    </template>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import axios from "axios";
import ModalUser from "@/components/ModalUser.vue";
import SearchBar from "@/components/SearchBar.vue";

const USER_PER_PAGE = 6;

export default {
  name: "App",
  props: {
    firstname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      users: [],
      pages: [],
      currentPage: 1,
      search: "",
      showModal: false,
      visibility: false,
      text: "Ничего не найдено",
    };
  },
  components: {
    UserList,
    ModalUser,
    SearchBar,
  },
  created() {
    this.getUsers();
  },
  mounted() {
    document.addEventListener("click", this.clickOutsideAdd);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.clickOutsideAdd);
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredList.length / USER_PER_PAGE);
    },
    filteredList: function () {
      const search = this.search.toLowerCase();
      if (!search) return this.users;
      return this.users.filter((user) => {
        return (
          user.first_name.toLowerCase().includes(search) ||
          user.last_name.toLowerCase().includes(search)
        );
      });
    },
    paginatedList() {
      return this.filteredList.slice(
        (this.currentPage - 1) * USER_PER_PAGE,
        this.currentPage * USER_PER_PAGE
      );
    },
  },
  watch: {
    totalPages(total) {
      if (this.currentPage > total) {
        this.currentPage = 1;
      }
    },
  },
  methods: {
    getUsers() {
      axios
        .get(`https://reqres.in/api/users?page=1&per_page=12`)
        .then((response) => {
          this.pages = response.data.page;
          this.users = response.data.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    openHandler() {
      this.showModal = !this.showModal;
    },
    clickOutsideAdd(e) {
      console.log(e.target);
      if (e.target.classList.contains("modal")) this.showModal = false;
    },
    addUser(user) {
      this.showModal = false;
      this.users.unshift(user);
    },
    deleteUser(user) {
      this.users = this.users.filter((_user) => _user !== user);
    },
  },
};
</script>

<style>
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.btn-list {
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 15px 20px;
  border: none;
  border-radius: 25px;
  background: rgb(61, 122, 201);
  color: white;
  font-size: 18px;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.btn-add {
  padding: 20px;
  border-radius: 25px;
  border: none;
  background: rgb(61, 122, 201);
  font-size: 16px;
}

.btn-list:hover:not(.active) {
  background: rgb(98, 191, 207);
  transition: ease-in-out 0.2s;
}

.active {
  background: rgb(207, 94, 14);
  transition: ease-in-out 0.2s;
}

.search {
  display: flex;
  align-items: center;
}

.searchbar {
  outline: none;
  border: none;
  display: block;
  width: 600px;
  padding: 20px;
  border-radius: 25px 0 0 25px;
  box-shadow: -1px 4px 25px 0px rgba(34, 60, 80, 0.3);
  box-sizing: border-box;
}

.search-btn {
  border: none;
  display: block;
  padding: 20px;
  background: rgb(61, 122, 201);
  color: white;
  font-size: 16px;
  border-color: rgb(13, 18, 85);
  border-radius: 0 25px 25px 0;
}
.empty-list {
  text-align: center;
  margin-top: 50px;
}

body > .hide {
  overflow: hidden;
}
</style>
