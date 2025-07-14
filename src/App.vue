<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TButton from './components/TButton.vue'

const numbers = [
  {
    title: "1",
    subtitle: ""
  },
  {
    title: "2",
    subtitle: "abc"
  },
  {
    title: "3",
    subtitle: "def"
  },
  {
    title: "4",
    subtitle: "ghi"
  },
  {
    title: "5",
    subtitle: "jkl"
  },
  {
    title: "6",
    subtitle: "mno"
  },
  {
    title: "7",
    subtitle: "pqrs"
  },
  {
    title: "8",
    subtitle: "tuv"
  },
  {
    title: "9",
    subtitle: "wxyz"
  },
  {
    title: "*",
    subtitle: ""
  },
  {
    title: "0",
    subtitle: ""
  },
  {
    title: "#",
    subtitle: ""
  },
];

</script>

<template>
  <main class="container">
    <div class="mb-5"> 
      <input type="text" name="txt-input" id="txt-input" class="form-control">
      <div class="m-2 d-flex justify-content-center">
        <button class="btn btn-primary mx-1">Process</button>
        <button class="btn btn-outline-info mx-1">Reverse</button>
      </div>
    </div>
    <div class=" row d-flex justify-content-center">
      <t-button v-for="item in numbers" :title="item.title" :subtitle="item.subtitle" />
    </div>
  </main>
</template>

<style scoped>
</style>
