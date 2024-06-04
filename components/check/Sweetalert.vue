<script setup lang="ts">
import Swal from "sweetalert2";
// import { type SweetAlertOptions } from "sweetalert2";
// import Swal from "sweetalert2/dist/sweetalert2.js";
// If you don't need the styles, do not connect
// import "sweetalert2/src/sweetalert2.scss";
// import '@sweetalert2/themes/dark/dark.scss';

const Toast = Swal.mixin({
  toast: true,
  position: "top",
  timer: 3000,
  showConfirmButton: true,
  timerProgressBar: true,
  showCloseButton: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
const openAlert = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "success",
    confirmButtonText: "Cool",
  });
};
const openToast = () => {
  Swal.fire({
    toast: true,
    position: "top",
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
    showConfirmButton: false,
    showDenyButton: true,
    showCancelButton: true,
    showCloseButton: true,
    icon: "success",
    title: "Your work has been saved.",
    text: "Do you want to continue",
  });
};
const openToastAgain = () => {
  Swal.fire({
    toast: true,
    position: "top",
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
    showCloseButton: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    icon: "warning",
    title: "Signed in successfully",
  });
};
const openToastMixin = () => {
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });
};
</script>

<template>
  <div class="sweetalert2">
    <h1>sweetalert2 test</h1>
    <div class="space-x-4">
      <button
        @click="openAlert"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Alert
      </button>
      <button
        @click="openToast"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Toast
      </button>
      <button
        @click="openToastAgain()"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Toast 2
      </button>
      <button
        @click="openToastMixin()"
        class="px-3 py-1 rounded-sm bg-green-400 text-gray-900"
      >
        Open Toast Mixin
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import "@sweetalert2/themes/dark/dark.scss";
</style>
