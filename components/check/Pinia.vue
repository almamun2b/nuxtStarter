<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useDefaultStore } from "~/stores/index";

const { increment, setName } = useDefaultStore();
const { count, doubleCount, name } = storeToRefs(useDefaultStore());
const inputName = ref("");
</script>

<template>
  <div>
    <h1>Pinia Test</h1>
    <h1>Name: {{ name }}</h1>
    <p>Counter: {{ count }}</p>
    <p>Double Counter: {{ doubleCount }}</p>

    <input
      v-model="inputName"
      type="text"
      name="name"
      id="name"
      class="border border-gray-800 px-3 py-1.5"
    />

    <button
      @click="setName(inputName)"
      class="px-3 py-1 rounded-sm mx-2 bg-green-400 text-black"
    >
      Set Name
    </button>

    <button
      @click="increment"
      class="px-3 py-1 rounded-sm mr-2 bg-green-400 text-black"
    >
      Increment
    </button>
  </div>
</template>

<style scoped></style>
