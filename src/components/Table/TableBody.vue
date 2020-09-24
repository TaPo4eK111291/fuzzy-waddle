<template>
  <div>
    <Row
      v-for="row in tableData"
      :key="row.id"
      :config="config"
      :row-data="row"
    />
  </div>
</template>

<script>
import Row from 'Components/Table/Row'

export default {
  name: 'TableBody',
  components: {
    Row
  },
  props: {
    config: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  }
}
</script>
