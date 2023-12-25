<script setup>
import { ref } from "vue";
import { useUserStore } from "src/stores/user";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useUserStore();
const show = ref(true);
const form = ref({
  username: "kminchelle",
  password: "0lelplR",
});
function Login() {
  if (form.value.username && form.value.password) {
    store.login(form.value).then((res) => {
      console.log(res);
      router.push({ path: "/tickets" });
    });
  }
}
</script>
<template>
  <div class="w-full h-screen flex justify-center items-center bg-slate-50">
    <div
      class="w-[450px] h-[450px] border border-slate-200 bg-white rounded-md flex flex-col items-center px-8 py-16"
    >
      <h2 class="text-[40px] font-semibold uppercase">webtronics</h2>
      <h4 class="text-lg font-normal text-gray-600">Sign In</h4>

      <form @submit.prevent="Login" class="mt-10 w-full">
        <div class="relative w-full mt-4">
          <input
            :value="form.username"
            placeholder="Username: kminchelle"
            type="text"
            class="text-md block px-3 py-2 rounded-sm w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
        </div>
        <div class="relative w-full mt-4">
          <input
            :value="form.password"
            placeholder="Password: 0lelplR"
            :type="show ? 'password' : 'text'"
            class="text-md block px-3 py-2 rounded-sm w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
          />
          <div
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="h-6 text-gray-700"
              fill="none"
              @click="show = !show"
              :class="{ hidden: !show, block: show }"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_12379)">
                <path
                  d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_12379">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="24"
              height="24"
              class="h-6 text-gray-700"
              fill="none"
              @click="show = !show"
              :class="{ block: !show, hidden: show }"
              xmlns="http://www.w3.org/2000/svg"
              viewbox="0 0 24 24"
            >
              <g clip-path="url(#clip0_6_12374)">
                <path
                  d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_12374">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <button
          class="bg-blue-400 text-white w-full mt-4 py-2 text-xl"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
