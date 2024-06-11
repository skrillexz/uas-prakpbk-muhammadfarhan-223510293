<template>
    <div class="q-pa-md">
      <q-page>
        
        <q-list bordered padding>
          <q-item clickable v-ripple @click="goToTask(1)">Tugas prakpbk 1</q-item>
          <q-item clickable v-ripple @click="goToTask(2)">Tugas prakpbk 2</q-item>
          <q-item clickable v-ripple @click="goToTask(3)">Tugas prakpbk 3</q-item>
          <q-item clickable v-ripple @click="goToTask(4)">Tugas prakpbk 4</q-item>
          <q-item clickable v-ripple @click="goToTask(5)">Tugas prakpbk 5</q-item>
          <q-item clickable v-ripple @click="goToTask(6)">Tugas prakpbk 6</q-item>
          <q-item clickable v-ripple @click="goToTask(7)">Tugas prakpbk 7</q-item>
          
        </q-list>
      </q-page>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToTask(taskNumber) {
        const taskLinks = {
          1: "https://tugas1-pbk-223510293.vercel.app", 
          2: "https://muhammadfarhan-223510293-t2-prakpbk.vercel.app", 
          3: "https://tugas3-pbk-muhammadfarhan-223510293.vercel.app", 
          4: "https://muhammadfarhan-223510293-t4.vercel.app", 
          5: "https://muhammadfarhan-223510293.vercel.app", 
          6: "https://muhammadfarhan-223510293-t6.vercel.app", 
          7: "https://muhammadfarhan-223510293-4-b-t7.vercel.app" 
        
        };
        window.location.href = taskLinks[taskNumber];
      }
    }
  }
  </script>
  