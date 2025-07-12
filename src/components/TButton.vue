<script setup>
    import { ref, onMounted } from 'vue'
    const props = defineProps(['title','subtitle']);
</script>
<template>
    <button>
        {{ title }}
        <br>
        {{ subtitle }}
    </button>
</template>
<style scoped>
    button {
        padding: 20px 30px;
    }
</style>