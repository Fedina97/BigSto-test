<template>
  <div class="range">
    <router-link to="/users">
      <button class="btn-link">К списку пользователей</button>
    </router-link>
    <div class="range-wrapper">
      <h1 class="range-data">{{ currentRange }} %</h1>
      <input
        class="custom-range"
        type="range"
        v-model="currentRange"
        :min="0"
        :max="100"
        :step="0.1"
      />
      <div class="buttons">
        <template v-for="percent of percents">
          <button
            @click="changeValue(percent)"
            class="btn-range"
            :key="percent"
            value="percent"
          >
            {{ percent }}%
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomRange",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 0.1,
    },
  },
  data() {
    return {
      currentRange: 0,
      percents: [25, 50, 75, 100],
    };
  },
  methods: {
    changeValue(percent) {
      this.currentRange = percent;
    },
  },
};
</script>

<style scoped>
.range {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(25, 44, 80);
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
}

.range-wrapper {
  margin: auto;
  width: 410px;
}

.range-data {
  color: white;
  text-align: left;
  margin: 0;
  padding: 20px 0 20px 10px;
}

.buttons {
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
}

.btn-range {
  border: none;
  background: rgb(44, 79, 143);
  border-radius: 20px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
}

.btn-range:hover {
  background: rgb(117, 160, 238);
  color: rgb(8, 35, 85);
  transition: ease-in 0.3s;
}

input[type="range"] {
  overflow: hidden;
  border-radius: 50px;
  width: 400px;
  padding: 0 5px;
  -webkit-appearance: none;
  background: linear-gradient(
    90deg,
    rgb(100, 35, 241) 0%,
    rgba(12, 155, 146, 1) 20%,
    rgba(99, 207, 13, 1) 41%,
    rgba(239, 209, 71, 1) 59%,
    rgba(222, 131, 82, 1) 81%,
    rgba(255, 0, 0, 1) 100%
  );
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 24px;
  -webkit-appearance: none;
  color: #13bba4;
  margin-top: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  width: 20px;
  border-radius: 50px;
  -webkit-appearance: none;
  height: 20px;
  cursor: pointer;
  background: #ffffff;
}
</style>
