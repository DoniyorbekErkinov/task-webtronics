import { defineStore } from "pinia";
import ApiService from "src/service/ApiService";
export const useUserStore = defineStore("user", {
  state: () => ({
    token: localStorage.access || null,
    storedUser: localStorage.user || null,
  }),
  getters: {
    userIsAuth: () => false,
    user: (state) => {
      if (!!state.storedUser) {
        return JSON.parse(state.storedUser);
      }
      return state.storedUser;
    },
  },
  actions: {
    async storeLoggedInUser(formData) {},
  },
});
