<template>
  <form class="search" @submit.prevent="emitSearch()">
    <input v-model="search" class="searchbar" type="search" />
    <button class="search-btn">Искать</button>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      name: "",
      search: "",
    };
  },
  methods: {
    emitSearch() {
      const search = this.search.trim();
      this.$emit("search", search);
    },
  },
};
</script>
