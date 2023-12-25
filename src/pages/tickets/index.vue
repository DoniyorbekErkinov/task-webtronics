<script setup>
import { onMounted, onBeforeMount, ref } from "vue";
import { useTickets } from "src/stores/tickets";
const ticketStore = useTickets();
const slides = ref(
  Array.from({ length: ticketStore.ticketsList.length }, () => 1)
);
onMounted(async () => {
  await ticketStore.getTickets();
});
</script>
<template>
  <div class="w-full h-full p-16">
    <div
      v-if="ticketStore.$state.ticketsList.length > 0"
      class="grid grid-cols-4 gap-4"
    >
      <div
        class="flex p-0 border border-slate-200 h-[500px] bg-slate-300 rounded-md shadow-lg"
        v-for="(ticket, i) in ticketStore.ticketsList"
        :key="i"
      >
        <q-carousel
          class="h-[360px] p-0 w-full"
          v-if="ticket.images.length > 1"
          animated
          v-model="slides[i + 1]"
          control-color="gray"
          swipeable
          arrows
          navigation
          infinite
        >
          <q-carousel-slide v-for="(img, j) in ticket.images" :key="j" :name="j"
            ><img class="w-full h-full" :src="img" />
          </q-carousel-slide>
        </q-carousel>
        <img v-else class="h-[360px] w-full" :src="ticket.images[0]" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
