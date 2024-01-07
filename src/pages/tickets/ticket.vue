<script setup>
import { onMounted, ref } from "vue";
import { useTickets } from "src/stores/tickets";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useTickets();
const currentImg = ref(0);
onMounted(() => {
  store.getTicket(route.params.id);
});
</script>
<template>
  <div class="py-14 px-10 flex flex-col w-full h-screen overflow-hidden">
    <div class="w-full">
      <q-breadcrumbs gutter="sm" align="left">
        <q-breadcrumbs-el to="/" label="Tickets" />
        <q-breadcrumbs-el :label="store.ticket.category" />
        <q-breadcrumbs-el class="capitalize" :label="store.ticket.title" />
      </q-breadcrumbs>
    </div>
    <div class="w-full mt-8 flex justify-between">
      <div class="w-1/2 h-[500px] flex justify-around">
        <div class="w-[20%] h-[500px]">
          <div
            :class="
              store.ticket.images.length > 0
                ? currentImg == i
                  ? 'my-4 border border-slate-400 rounded-2xl scale-110 shadow-md'
                  : 'flex border border-slate-200 rounded-2xl mb-2 '
                : 'hidden'
            "
            @click="() => (currentImg = i)"
            class="hover:scale-105 cursor-pointer"
            v-for="(img, i) in store.ticket.images"
            :key="i"
          >
            <img :src="img" class="h-full w-full rounded-2xl" />
          </div>
        </div>
        <div class="w-[75%] px-2 border border-slate-300 rounded-2xl shadow-md">
          <img
            class="h-full rounded-2xl"
            :src="store.ticket.images[currentImg]"
          />
        </div>
      </div>
      <div class="w-1/2">
        <q-list bordered separator>
          <q-item clickable v-ripple>
            <q-item-section>Title :</q-item-section>
            <q-item-section>{{ store.ticket.title }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Brand :</q-item-section>
            <q-item-section>{{ store.ticket.brand }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Category :</q-item-section>
            <q-item-section>{{ store.ticket.category }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Rating :</q-item-section>
            <q-item-section>{{ store.ticket.rating }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Price :</q-item-section>
            <q-item-section>{{ store.ticket.price }}</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Description :</q-item-section>
            <q-item-section>{{ store.ticket.description }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
