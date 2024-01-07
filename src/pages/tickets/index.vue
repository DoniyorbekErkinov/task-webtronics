<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useTickets } from "src/stores/tickets";
import { useComposibleTicket } from "src/pages/tickets/index";

const ticketStore = useTickets();
const { columns, visibleColumns } = useComposibleTicket();
const gridToTable = ref(false);
const pagination = ref({
  sortBy: "desc",
  descending: false,
  rowsPerPage: 20,
});
const page = ref(1);
const pagesNumber = computed(() =>
  Math.ceil(ticketStore.total / ticketStore.limit)
);
watch(page, (newVal, oldVal) => {
  ticketStore.page = newVal - 1;
  ticketStore.getTickets();
});
onMounted(async () => {
  await ticketStore.getTickets();
});
</script>
<template>
  <div class="w-full h-full py-16 px-6">
    <q-table
      title="Tickets"
      :rows="ticketStore.ticketsList"
      :columns="columns"
      :visible-columns="visibleColumns"
      row-key="name"
      v-model:pagination="pagination"
      hide-pagination
    >
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <router-link :to="{ name: 'ticket', params: { id: props.row.id } }"
            >Show more</router-link
          >
        </q-td>
      </template>
    </q-table>
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="page"
        color="blue-grey-12"
        :max="pagesNumber"
        size="md"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
