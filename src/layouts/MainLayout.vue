<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
const router = useRouter();
const store = useUserStore();
function getUser() {
  store.getUserData();
}

function ticketsGo() {
  router.push("/tickets");
}

onMounted(async () => {
  if (!store.userData) {
    await getUser();
  }
});
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer class="bg-slate-200" show-if-above side="left" bordered>
      <div
        class="w-full h-auto flex flex-col items-center justify-center mt-12"
      >
        <router-link to="/tickets" class="text-xl font-semibold uppercase"
          >webtronics</router-link
        >
        <div class="w-2/4 mx-auto mt-10">
          <img
            class="w-3/4 mx-auto rounded-full shadow-lg bg-white"
            :src="store.userData?.img"
          />
        </div>
        <div class="mt-4">
          <router-link
            to="/profile"
            class="text-xl font-semibold text-black hover:underline"
            >{{ store.userData?.fullName }}</router-link
          >
        </div>
        <div
          @click="ticketsGo"
          class="w-[80%] mt-10 mx-auto px-4 py-2 rounded-md shadow-md border border-slate-300"
        >
          <span class="text-lg font-medium w-full text-black">Tickets</span>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
