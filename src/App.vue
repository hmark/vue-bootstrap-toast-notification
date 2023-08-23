<template>
  <Toast :notification="notification"></Toast>
  <button @click.prevent="notify">NOTIFY</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Toast from '../lib/Toast.vue'

const notification = ref({})

function notify() {
  notification.value = {
    type: 'success',
    message: 'Success!'
  }
}
</script>

<style>
@import "bootstrap/scss/bootstrap.scss";
</style>