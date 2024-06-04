<script setup lang="ts">
// import { useToast } from "vue-toastification";
// const toast = useToast();
const { $toast } = useNuxtApp();

const openToastification = () => {
  $toast.clear();
  $toast.success("This is Default Success Toast Notification");
};
const openToastification2 = () => {
  $toast.clear();
  $toast.error("This is Default Error Toast Notification");
};
const openToastification3 = () => {
  $toast("This is Custon BG Color Toast Notification", {
    toastClassName: "toasted-bg-success",
  });
};
</script>
<template>
  <div class="Vue-Toastification">
    <h1>Vue-Toastification</h1>
    <div class="space-x-4">
      <button
        @click="openToastification"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Toastification
      </button>
      <button
        @click="openToastification2"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Toastification 2
      </button>
      <button
        @click="openToastification3"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Toastification 3
      </button>
    </div>
  </div>
</template>

<style>
.toasted-bg-info {
  background-color: #5bc0de !important;
}
.toasted-bg-success {
  background-color: #8db230 !important;
}
.toasted-bg-error {
  background-color: #a22a2a !important;
}
.toasted-bg-warning {
  background-color: #e0ad1f !important;
}
</style>
