import { defineStore } from "pinia";
import { useGet } from "src/service/ApiService";
export const useTickets = defineStore("tickets", {
  state: () => {
    return {
      ticketsList: [],
      viewedTickets: [],
      ticket: {},
      limit: 20,
      page: 0,
      total: 0,
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
        this.total = res.data.total;
      });
    },
    async getTicket(id) {
      console.log(this.viewedTickets);
      let selectedTicket =
        this.viewedTickets.length > 0
          ? this.viewedTickets.filter((el) => el.id == id)[0]
          : false;
      if (selectedTicket) {
        this.ticket = this.viewedTickets.filter((el) => el.id == id)[0];
      } else {
        useGet({
          url: `products/${id}`,
        }).then((res) => {
          this.viewedTickets.push(res.data);
          this.ticket = res.data;
        });
      }
    },
  },
});
