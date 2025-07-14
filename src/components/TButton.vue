<script setup>
    import { ref, onMounted } from 'vue'
    const props = defineProps(['title','subtitle']);
</script>
<template>
    <button class="btn btn-primary col-3 m-1 ">
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