<template>
  <div>
    <router-link to="/users">
      <button class="btn-link">Вернуться к списку</button>
    </router-link>
    <view-user :user="user" />
  </div>
</template>

<script>
import ViewUser from "@/components/ViewUser.vue";
import axios from "axios";
export default {
  components: { ViewUser },
  name: "PreviewUser",
  data() {
    return {
      user: [],
      userId: parseInt(this.$route.params.id),
    };
  },
  mounted() {
    axios
      .get(`https://reqres.in/api/users/${this.userId}`)
      .then((response) => (this.user = response.data.data));
  },
};
</script>

<style>
.btn-link {
  position: absolute;
  left: 30px;
  top: 30px;
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  background: rgb(207, 94, 14);
  cursor: pointer;
  color: white;
}

.btn-link:hover {
  background: rgb(61, 122, 201);
  transition: ease-in-out 0.3s;
}

.user-view {
  width: 700px;
  margin: 20px auto;
}
</style>
