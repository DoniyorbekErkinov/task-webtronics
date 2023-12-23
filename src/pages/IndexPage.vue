<script setup>
import { onMounted } from "vue";
import { useUserStore } from "src/stores/user";
const store = useUserStore();
onMounted(() => {
  console.log(store.userData);
});
</script>
<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>
