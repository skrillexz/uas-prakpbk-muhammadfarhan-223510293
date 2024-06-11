<template>
    <div class="q-pa-md centered-container">
      <q-page>
        <q-card class="weather-card">
          <q-card-section>
            <div class="text-h6">Cuaca</div>
          </q-card-section>
          <q-card-section class="search-section">
            <!-- Mengatur gaya CSS untuk kotak input -->
            <q-input
              v-model="city"
              placeholder="Masukkan Lokasi"
              dense
              outlined
              class="search-input"
            />
            <!-- Mengatur gaya CSS untuk tombol pencarian -->
            <q-btn
              @click="fetchWeather"
              label="Cari"
              dense
              flat
              class="search-button"
            />
          </q-card-section>
          <q-card-section v-if="loading">
            <div>Loading data...</div>
          </q-card-section>
          <q-card-section v-if="weather">
            <div>Location: {{ city }}</div>
            <div>Temperature: {{ weather.main.temp }}°C</div>
            <div>Condition: {{ weather.weather[0].description }}</div>
          </q-card-section>
          <q-card-section v-if="error">
            <div>Error: {{ error }}</div>
          </q-card-section>
        </q-card>
      </q-page>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        city: '',
        weather: null,
        loading: false,
        error: null
      }
    },
    methods: {
      async fetchWeather() {
        this.loading = true
        this.weather = null
        this.error = null
        try {
          const apiKey = '94bf6d59f86ae95e8071e78240546056'
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${apiKey}`
          )
          this.weather = response.data
        } catch (err) {
          this.error = 'Unable to fetch weather data. Please try again.'
        } finally {
          this.loading = false
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .centered-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f4f8; /* Light background color for the whole page */
  }
  
  .weather-card {
    max-width: 400px;
    width: 100%;
    background: white; /* Card background color */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }
  
  .search-section {
    display: flex;
    align-items: center;
  }
  
  .search-input {
    flex-grow: 1;
    margin-right: 10px;
    max-width: 300px; /* Menyesuaikan lebar yang Anda inginkan */
  }
  
  .search-button {
    padding: 5px 15px;
    background-color: #007bff; /* Button color */
    color: white !important; /* Ensure text is white and visible */
  }
  </style>
  