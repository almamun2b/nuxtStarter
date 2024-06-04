import { defineStore } from "pinia";

export const useDefaultStore = defineStore("default", () => {
  // State
  const count = ref<number>(0);
  const name = ref<string>("Mamun");
  // Getters
  const doubleCount = computed(() => count.value * 2);
  // Actions
  const increment = () => {
    count.value++;
  };
  const setName = (payload: string) => {
    name.value = payload;
  };

  return { count, name, setName, doubleCount, increment };
});
