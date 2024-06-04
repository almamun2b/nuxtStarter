<script setup></script>

<template>
  <section class="text-black min-h-screen space-y-4">
    <h1 class="font-satoshi text-2xl text-center">Welcome to the homepage</h1>
    <CheckScss />
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-4">
        <CheckUtility />
        <CheckMaska />
        <CheckSweetalert />
        <CheckVueToastification />
        <CheckPinia />
        <CheckFontAwesome />
      </div>
      <div class="space-y-4">
        <CheckVeeValidate />
      </div>
    </div>
  </section>
</template>
