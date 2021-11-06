<template>
  <div>
    <custom-range />
  </div>
</template>

<script>
import CustomRange from "@/components/CustomRange.vue";

export default {
  name: "App",
  data() {
    return {
      users: null,
    };
  },
  components: {
    CustomRange,
  },
};
</script>
