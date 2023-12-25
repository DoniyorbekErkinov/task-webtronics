import { defineStore } from "pinia";
import { usePost, useGet } from "src/service/ApiService";
import { setItem, getItem } from "src/helpers/storage";
export const useTickets = defineStore("tickets", {
  state: () => {
    return {
      ticketsList: [],
      limit: 20,
      page: 0,
    };
  },
  getters: {},
  actions: {
    async getTickets() {
      useGet({
        url: `products?limit=${this.$state.limit}&skip=${
          this.page * this.limit
        }`,
      }).then((res) => {
        this.ticketsList = res.data.products;
      });
    },
  },
});
