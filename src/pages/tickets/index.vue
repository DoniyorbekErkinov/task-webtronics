<script setup>
import { onMounted } from "vue";
import { useTickets } from "src/stores/tickets";
const ticketStore = useTickets();

function sliceFunc(text) {
  return text.length > 60 ? `${text.substr(0, 60)}...` : text;
}
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
        class="flex flex-col justify-between p-0 border border-slate-200 h-[500px] bg-slate-300 rounded-md shadow-lg"
        v-for="(ticket, i) in ticketStore.ticketsList"
        :key="i"
      >
        <div class="flex flex-col">
          <img class="h-[360px] w-full" :src="ticket.images[0]" />
          <span class="text-xl font-medium mt-4 ml-2 capitalize">{{
            ticket.title
          }}</span>
          <span class="text-base font-light ml-2">{{
            sliceFunc(ticket.description)
          }}</span>
        </div>
        <router-link
          class="text-base mb-2 font-light mt-1 ml-2 text-green-700 underline"
          to="/"
          >Learn more</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
