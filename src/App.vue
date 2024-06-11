<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <!-- Isi judul aplikasi di sini -->
          Tugas prak pbk  
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- Ini adalah tempat di mana konten dari halaman akan dimuat -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
/* Styling khusus untuk komponen ini */
</style>
