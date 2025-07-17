<script setup>
import TButton from './components/TButton.vue'
import { ref } from 'vue'

var textData = ref("");
var isOnPress = false;
var buttonTimer = null;

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

function copyText(){
  navigator.clipboard.writeText(textData.value).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

function resetField() {
  textData.value = "";
}

function addNumber(title) {
  function setTimer (){
    buttonTimer = setInterval(function(){
        console.log("on press done");
        isOnPress = false;

        resetTimer();
      }, 2000);
  }
  function resetTimer(){
    clearInterval(buttonTimer);
  }
  if (title == '1' || title == '*' || title == '#') { return; }

  // check for number or string
  if (parseFloat(textData.value) &&  textData.value != "") { // number
    textData.value = textData.value + title;
  } else { // string
    // swap combination first
    const swapped = {};
    for (const [key, value] of Object.entries(combinations)) {
      swapped[value] = key;
    }

    // Check for timer expired?
    if(!isOnPress){
      // add character
      textData.value += swapped[title];
      // start timer
      isOnPress = true;
      setTimer();
    }
    else{
      // Check if current button is the same with previous char
      const lastChar = textData.value.slice(-1);
      const patternLastChar = combinations[lastChar];

      const isSame = patternLastChar.slice(-1) == title;
      if(isSame){
        var newChar = "";
        console.log("same button");
        // check if added pattern doesnt make sense, return the title
        if(swapped[patternLastChar+title]!=null){
          newChar = swapped[patternLastChar+title];
        }
        else{
          newChar = swapped[title];
        }
        textData.value = textData.value.slice(0,-1) + newChar;
      }
      else{
        console.log("different button");
        resetTimer();
        textData.value += swapped[title];

        isOnPress = true;
        setTimer();
      }
    }
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
        translated += "0 "
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
      <input
        v-model="textData"
        type="text"
        class="form-control"
      >
      <div class="m-2 d-flex justify-content-center">
        <button
          class="btn btn-primary mx-1"
          @click="reverseText"
        >
          Reverse
        </button>
        <button
          class="btn btn-outline-primary mx-1"
          @click="resetField"
        >
          <i class="fa-solid fa-delete-left" />
        </button>
        <button
          class="btn btn-outline-primary mx-1"
          @click="copyText"
        >
          <i class="fa-solid fa-copy" />
        </button>
      </div>
    </div>
    <div class=" row d-flex justify-content-center">
      <t-button
        v-for="item in numbers"
        :key="item.title"
        :title="item.title"
        :subtitle="item.subtitle"
        @click="addNumber(item.title)"
      />
    </div>
  </main>
</template>

<style scoped></style>
