<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  'title': { type: String, required: true },
  'subtitle': { type: String, required: true },
});
</script>
<template>
  <button class="btn btn-outline-secondary col-3 m-1 ">
    {{ title }}
    <br>
    {{ subtitle }}
  </button>
</template>
<style scoped>
button {
  /* padding: 20px 30px; */
}
</style>