<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
.card {
  padding: 30px;

  border-radius: 10px;

  background-color: var(--background-light);
}
</style>
