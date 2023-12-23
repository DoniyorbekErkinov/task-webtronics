import { defineStore } from "pinia";
import { usePost } from "src/service/ApiService";
import { setItem } from "src/helpers/storage";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userData: null,
    };
  },
  getters: {},
  actions: {
    async login(data) {
      try {
        return await usePost({ url: "auth/login", data }).then((res) => {
          this.userData = {
            id: res.data.id,
            username: res.data.username,
            img: res.data.image,
          };
          setItem("access", res.data.token);
          setItem("id", res.data.id);
          return "success";
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
