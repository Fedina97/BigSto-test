<template>
  <div class="user-item">
    <router-link :to="{ name: 'user', params: { id: user.id } }">
      <img :src="user.avatar" class="user-item__image" />
    </router-link>
    <p class="firstname">{{ user.first_name }}</p>
    <p class="lastname">{{ user.last_name }}</p>
    <p class="email">{{ user.email }}</p>
    <button class="rm" @click="$emit('remove-user', user)">X</button>
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: ["user"],
};
</script>

<style>
.user-item {
  display: grid;
  grid-template-columns: 200px 150px 150px 250px 30px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 150px;
  color: rgba(59, 59, 129, 0.788);
  box-shadow: -1px 3px 25px 0px rgba(34, 60, 80, 0.2);
  margin: 30px 0 25px 0;
  border-radius: 15px;
}

.user-item:hover {
  background: rgba(243, 131, 50, 0.658);
  color: white;
  transition: ease-in-out 0.3s;
}

.user-item:hover .rm {
  display: block;
  transition: ease-in-out 0.3s;
}

.user-item__image {
  border-radius: 50px;
  width: 128px;
  height: 128px;
  object-fit: cover;
}

.firstname,
.lastname {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
}

.email {
  font-size: 18px;
  font-weight: 600;
  color: rgba(230, 76, 76, 0.76);
}

.rm {
  display: none;
  background: brown;
  border: none;
  padding: 5px;
  font-weight: 600;
  border-radius: 5px;
}

.rm:hover {
  background: red;
  transform: scale(1.04, 1.04);
}
</style>
