<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
</script>
