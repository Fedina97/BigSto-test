<template>
  <div class="users">
    <user-item
      @remove-user="$emit('remove-user', $event)"
      v-for="user of users"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import UserItem from "@/components/UserItem.vue";
export default {
  components: { UserItem },
  name: "UserList",
  props: ["users"],
};
</script>

<style scoped>
.users {
  width: 1140px;
  margin: 0 auto;
}

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
</style>
