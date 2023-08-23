# Vue Bootstrap Toast Notification

> Simple toast notifications for Vue3 & Bootstrap5 project

## Installation

```bash
npm install vue-bootstrap-toast-notification
```

## Usage with Composition API

```vue
<template>
  <Toast :notification="notification"></Toast>
  <button @click.prevent="notify">NOTIFY</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Toast } from 'vue-bootstrap-toast-notification'

const notification = ref({})

function notify() {
  notification.value = {
    type: 'success',
    message: 'Success!'
  }
}
</script>

<style>
@import 'bootstrap/scss/bootstrap.scss';
</style>
```
