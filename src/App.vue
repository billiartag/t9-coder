<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TButton from './components/TButton.vue'
import { ref } from 'vue'

var textData = ref("");

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
    subtitle: "_"
  },
  {
    title: "#",
    subtitle: ""
  },
];

const combinations = {
  ' ': '0',
  a: "2",
  b: "22",
  c: "222",
  d: "3",
  e: "33",
  f: "333",
  g: "4",
  h: "44",
  i: "444",
  j: "5",
  k: "55",
  l: "555",
  m: "6",
  n: "66",
  o: "666",
  p: "7",
  q: "77",
  r: "777",
  s: "7777",
  t: "8",
  u: "88",
  v: "888",
  w: "9",
  x: "99",
  y: "999",
  z: "9999"
};

///
function resetField() {
  textData.value = "";
}

function addNumber(title) {
  // check for number or string
  if (parseFloat(textData.value) || textData.value == "") { // number
    console.log((title == '1' || title == '*' || title == '#'));
    if (title == '1' || title == '*' || title == '#') { return; }
    textData.value = textData.value + title;
  } else { // string

  }
}

function reverseText() {
  var translated = "";

  if (parseFloat(textData.value)) {
    const groups = textData.value.match(/(\d)\1*/g);
    // swap combination first
    const swapped = {};
    for (const [key, value] of Object.entries(combinations)) {
      swapped[value] = key;
    }
    // match 
    groups.forEach(element => {
      if (element == "0") {
        translated += " ";
      }
      else {
        translated += swapped[element];
      }
    });

  } else {
    const groups = textData.value.split("");
    // match
    groups.forEach(element => {
      if (element == " ") {
        translated += "0"
      } else {
        translated += combinations[element] + " ";
      }
    });
  }
  textData.value = translated;
}

</script>

<template>
  <main class="container">
    <div class="mb-5">
      <input type="text" class="form-control" v-model="textData">
      <div class="m-2 d-flex justify-content-center">
        <button class="btn btn-primary mx-1">Process</button>
        <button class="btn btn-outline-primary mx-1" @click="reverseText">Reverse</button>
        <button class="btn btn-outline-primary mx-1" @click="resetField">
          <i class="fa-solid fa-delete-left"></i>
        </button>
        <button class="btn btn-outline-primary mx-1">
          <i class="fa-solid fa-copy"></i>
        </button>
      </div>
    </div>
    <div class=" row d-flex justify-content-center">
      <t-button v-for="item in numbers" :title="item.title" :subtitle="item.subtitle" @click="addNumber(item.title)" />
    </div>
  </main>
</template>

<style scoped></style>
