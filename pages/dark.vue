<script setup>
const colorMode = useColorMode();
// Force to ColorMode: light
// definePageMeta({
//   colorMode: 'light',
// })
</script>

<template>
  <div>
    <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700 text-black"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="my-sepia">My Sepia</option>
        <option value="mamun">Mamun</option>
      </select>
    </p>
    <ColorScheme placeholder="Detecting Color Mode..." tag="span">
      Color mode: <b>{{ $colorMode.preference }}</b>
      <span v-if="$colorMode.preference === 'system'"
        >(<i>{{ $colorMode.value }}</i> mode detected)</span
      >
    </ColorScheme>
    <NuxtPage class="mx-auto p-4" />
  </div>
</template>

<style>
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
.my-sepia body {
  @apply bg-[#f1e7d0] text-[#433422];
}
.mamun body {
  @apply bg-red-800 text-gray-200;
}
</style>
