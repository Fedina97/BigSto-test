<template>
  <div class="wrapper">
    <div class="user-view">
      <div class="short-info">
        <img class="user-view-image" :src="user.avatar" />
        <div class="text-content">
          <p class="name">{{ user.first_name }} {{ user.last_name }}</p>
          <p class="email">{{ user.email }}</p>
        </div>
      </div>
      <div class="description">
        <p class="desc-info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          voluptas est maxime, ducimus sunt velit atque sequi rerum modi.
          Placeat voluptatibus harum perferendis quidem reiciendis distinctio
          dolore ad accusamus natus, aliquam optio inventore ea alias corrupti
          mollitia, dignissimos, minima maxime.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          possimus ab tempora veritatis veniam voluptate aliquid corrupti
          delectus iure repellat!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewUser",
  props: ["user"],
};
</script>

<style>
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
}
a {
  text-decoration: none;
}

.user-view {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: 0 auto;
  padding: 55px;
  box-shadow: -1px 3px 25px 0px rgba(34, 60, 80, 0.2);
}

.desc-info {
  max-width: 300px;
}

p {
  margin: 0;
}

.user-view-image {
  width: 200px;
}

.short-info {
  padding-bottom: 20px;
}

.text-content {
  text-align: left;
  padding: 20px 0;
}

.name {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
}
</style>
