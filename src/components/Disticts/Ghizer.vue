<script setup>
const emit = defineEmits(['back'])

const goBack = () => {
  emit('back')
}
</script>

<template>
  <div>
    <button @click="goBack">Back to Dashboard</button>
 <p class="text-center text-2xl font-bold font-sans">District content goes here </p>  
  </div>
</template>
