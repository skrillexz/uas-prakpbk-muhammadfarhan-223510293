<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-primary text-white" height-hint="98">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            UAS PrakPBK
          </q-toolbar-title>
        </q-toolbar>
  
        <q-tabs align="left">
          <q-route-tab to="/tasks" label="Tugas Farhan" />
        </q-tabs>
      </q-header>
  
      <q-page-container>
        <WeatherPage />
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  import WeatherPage from '../pages/WeatherPage.vue'
  
  export default {
    components: {
      WeatherPage
    }
  }
  </script>
  