<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "src/stores/user";
const userStore = useUserStore();
const cities = ref(["Namngan", "Andijon", "Farg'ona", "Toshkent", "Moscow"]);
const userCity = ref("Yarmouth");
const userbirthdate = ref("");
onMounted(() => {
  userbirthdate.value = userStore.userData?.birthDate;
  cities.value.push(userStore.userData?.address?.city);
});
</script>
<template>
  <div class="w-full h-full p-16">
    <div
      class="border border-slate-300 bg-slate-100 rounded-md shadow flex items-center p-4"
    >
      <img class="w-1/6 rounded-full bg-white" :src="userStore.userData?.img" />
      <h2 class="ml-8 text-2xl font-medium">
        {{ userStore.userData?.fullName }}
      </h2>
    </div>
    <div
      class="border border-slate-300 bg-slate-100 rounded-md shadow flex items-center justify-between px-4 mt-6"
    >
      <div class="w-full py-2">
        <div
          class="border-b border-b-slate-300 py-2 flex justify-start items-center"
        >
          <h2 class="text-xl font-medium">Имя пользователя:</h2>
          <span class="ml-8 text-lg font-light">{{
            userStore.userData?.username
          }}</span>
        </div>
        <div
          class="border-b border-b-slate-300 py-2 flex justify-start items-center"
        >
          <h2 class="text-xl font-medium">ФИО:</h2>
          <span class="ml-8 text-lg font-light">{{
            userStore.userData?.fullName
          }}</span>
        </div>
        <div
          class="border-b border-b-slate-300 py-2 flex justify-start items-center"
        >
          <h2 class="text-xl font-medium">Дата рождения:</h2>
          <q-input
            filled
            v-model="userbirthdate"
            class="ml-8"
            mask="date"
            :rules="['date']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="userbirthdate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="py-2 text-lg font-medium flex justify-start items-center">
          <h2 class="text-xl font-medium">Город:</h2>
          <q-select
            class="ml-8 w-52"
            outlined
            v-model="userCity"
            :options="cities"
            label="Rounded outlined"
          />
        </div>
      </div>
      <!-- <div class="w-1/2 py-2">
        <div class="border-b border-b-slate-300 pl-2 py-1 text-lg font-light">

        </div>
        <div class="border-b border-b-slate-300 pl-2 py-1 ">

        </div>
        <div class="border-b border-b-slate-300 pl-2 py-1 text-lg font-light">

        </div>
        <div class="pl-2 pt-1 text-lg font-light">34</div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
