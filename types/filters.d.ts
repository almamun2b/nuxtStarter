import type { ErrorMessage } from "~/types/toaster";
import type { ToastInterface } from "vue-toastification";

declare module "#app" {
  interface NuxtApp {
    $bdNumberFormat: (value: number) => string;
    $redirectToParentPath: () => void;
    $dateFormat: (date: string) => string;
    bdNumberFormat: (value: number) => string;
    dateFormat: (date: string) => string;
    // $toast: (name: string, value: ErrorMessage) => void;
    $toast: ToastInterface;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $bdNumberFormat: (value: number) => string;
    $redirectToParentPath: () => void;
    $dateFormat: (date: string) => string;
    // $toast: (name: string, value: ErrorMessage) => void;
    bdNumberFormat: (value: number) => string;
    dateFormat: (date: string) => string;
    $toast: ToastInterface;
  }
}

export {};
