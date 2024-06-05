<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import { vMaska } from "maska";

const { $toast } = useNuxtApp();
const { REGISTER } = useUrls();

const firstName = ref("");
const lastName = ref("");
const userEmail = ref("");
const userPass = ref("");
const userConfPass = ref("");
const userPhone = ref("");
const isProcessing = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const termsAccepted = ref(false);

const handleRegister = async (values: any, { resetForm, setErrors }: any) => {
  isProcessing.value = true;
  $toast.clear();
  if (!termsAccepted.value) {
    $toast.error("terms Not Accepted");
    isProcessing.value = false;
    return;
  } else {
    try {
      const data = await $fetch<any>(REGISTER, {
        method: "POST",
        body: {
          first_name: firstName.value,
          last_name: lastName.value,
          email: userEmail.value,
          password: userPass.value,
          password_confirmation: userConfPass.value,
          phone: userPhone.value.replace(/\s/g, ""),
          is_agree_with_our_policy: 1,
        },
      });
      if (data) {
        $toast.success(data.message);
        resetForm();
      }
    } catch (error: any) {
      if (error.response.status === 422) {
        setErrors(error.data.message);
      } else if (error.response.status === 404) {
        $toast.error(error.data.message);
      } else {
        $toast.error(error.data.message);
      }
    } finally {
      isProcessing.value = false;
    }
  }
};
</script>

<template>
  <div>
    <h1>Check VeeValidate</h1>
    <Form @submit="handleRegister" v-slot="{ meta }">
      <div class="text-gray-900 flex flex-col space-y-6">
        <div
          class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5"
        >
          <div class="w-full">
            <fieldset class="input-wrapper">
              <legend class="legend">First Name</legend>
              <Field
                v-model="firstName"
                name="first_name"
                type="text"
                placeholder="First Name"
                rules="required|minLength:3"
                class="input-field"
              />
            </fieldset>
            <ErrorMessage class="error-message block" name="first_name" />
          </div>
          <div class="w-full">
            <fieldset class="input-wrapper">
              <legend class="legend">Last Name</legend>
              <Field
                v-model="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                rules="required|minLength:3"
                class="input-field"
              />
            </fieldset>
            <ErrorMessage class="error-message block" name="last_name" />
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-5"
        >
          <div class="w-full">
            <fieldset class="input-wrapper">
              <legend class="legend">Email</legend>
              <Field
                v-model="userEmail"
                name="email"
                type="email"
                placeholder="Email"
                rules="required|email"
                class="input-field"
              />
            </fieldset>
            <ErrorMessage class="error-message block" name="email" />
          </div>
          <div class="w-full">
            <fieldset class="input-wrapper">
              <legend class="legend">Phone number</legend>
              <Field
                v-model="userPhone"
                name="phone"
                type="text"
                placeholder="Phone number"
                rules="required|phone"
                v-maska
                data-maska="+### #### #### ####"
                class="input-field"
              />
            </fieldset>
            <ErrorMessage class="error-message block" name="phone" />
          </div>
        </div>
        <div class="w-full">
          <fieldset class="input-wrapper flex items-center">
            <legend class="legend">Password</legend>
            <Field
              v-model="userPass"
              name="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password"
              rules="required|password"
              class="input-field"
            />
            <div class="w-6 flex items-center">
              <IconEye
                :hideEye="showPassword"
                @click="showPassword = !showPassword"
                class="text-gray-primary cursor-pointer w-6"
              />
            </div>
          </fieldset>
          <ErrorMessage class="error-message block" name="password" />
        </div>
        <div class="w-full">
          <fieldset class="input-wrapper flex items-center">
            <legend class="legend">Confirm Password</legend>
            <Field
              v-model="userConfPass"
              name="password_confirmation"
              :type="showConfirmPassword ? 'text' : 'password'"
              placeholder="Confirm Password"
              class="input-field"
              rules="required|confirmed:@password"
            />
            <div class="w-6 flex items-center">
              <IconEye
                :hideEye="showConfirmPassword"
                @click="showConfirmPassword = !showConfirmPassword"
                class="text-gray-primary cursor-pointer w-6"
              />
            </div>
          </fieldset>
          <ErrorMessage
            class="error-message block"
            name="password_confirmation"
          />
        </div>
      </div>
      <div class="flex justify-between items-center pt-6 pb-10">
        <div class="flex justify-start items-center space-x-2">
          <input
            type="checkbox"
            name="is_agree_with_our_policy"
            id="termsAccepted"
            v-model="termsAccepted"
            class="checkbox cursor-pointer"
          />
          <p class="">
            I agree with the
            <NuxtLink to="/" class="text-[#FF8682]">Terms of use</NuxtLink>
            and
            <NuxtLink to="/" class="text-[#FF8682]">Privacy policy</NuxtLink>
          </p>
        </div>
        <div></div>
      </div>
      <button
        type="submit"
        :disabled="!meta.valid || isProcessing"
        class="auth-btn cursor-pointer"
        :class="{
          'opacity-50 cursor-not-allowed': !meta.valid || isProcessing,
        }"
      >
        <span>Create Account</span>
      </button>
    </Form>
  </div>
</template>

<style scoped>
.input-wrapper {
  @apply w-full border border-gray-800 rounded pb-2 px-4;
}
.legend {
  @apply text-sm px-1;
}
.input-field {
  @apply w-full outline-none rounded-md h-8 md:h-10 px-1 text-base;
}
.auth-btn {
  @apply w-full bg-orange-500 h-10 md:h-12 flex justify-center items-center outline-none rounded text-white font-medium text-base;
}
</style>
