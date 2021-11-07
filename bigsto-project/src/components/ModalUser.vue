<template>
  <div class="modal" v-show="visibility">
    <form action="#" @submit.prevent="$emit('add-user', addUser), reset()">
      <div class="form-wrapper">
        <label for="firstname-field">Введите имя</label>
        <input type="text" id="firstname-field" v-model="addUser.first_name" />
        <label for="lastname-field">Введите Фамилию</label>
        <input type="text" id="lastname-field" v-model="addUser.last_name" />
        <label for="email-field">Введите Email</label>
        <input type="email" id="email-field" v-model="addUser.email" />
        <label for="photo-field">Загрузите фото</label>
        <div v-if="!addUser.avatar">
          <input type="file" @change="onFileChange" value="image" />
        </div>
        <div v-else>
          <input type="file" @change="onFileChange" value="image" />
          <img class="user-item__image" :src="addUser.avatar" />
        </div>
        <button type="submit" class="add-user">Добавить</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ModalUser",
  props: ["visibility"],
  data() {
    return {
      addUser: {
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
      },
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(avatar) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.addUser.avatar = e.target.result;
      };
      reader.readAsDataURL(avatar);
    },
    removeImage: function () {
      this.addUser.avatar = "";
    },
  },
};
</script>

<style scoped>
input,
button {
  margin: 10px 0 20px 0;
  display: block;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  border: none;
  box-shadow: -1px 4px 25px 0px rgba(34, 60, 80, 0.2);
}

.info {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
}

.add-user {
  background: burlywood;
  font-size: 18px;
}

label {
  margin-top: 5px;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.modal {
  width: 100%;
  background: rgba(145, 143, 143, 0.548);
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  left: 0;
  bottom: 0;
}

form {
  padding-top: 30px;
  display: block;
  justify-content: center;
  position: absolute;
  border-radius: 25px;
  background: rgb(255, 255, 255);
  width: 600px;
  height: 650px;
  margin: 0 auto;
  box-shadow: -1px 4px 25px 0px rgba(34, 60, 80, 0.3);
}

.user-item__image {
  margin: 10px 0;
}
</style>
