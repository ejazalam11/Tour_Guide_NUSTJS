<script setup>
const emit = defineEmits(['back'])

const goBack = () => {
  emit('back')
}
</script>

<template>
  <div>
    <button @click="goBack">Back to Dashboard</button>
    <!-- District content goes here -->
  </div>
</template>
