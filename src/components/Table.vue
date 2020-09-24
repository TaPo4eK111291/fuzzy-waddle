<template>
  <div
    v-if="hasElementsInConfig"
    class="table"
  >
    <TableHeader
      :config="tableConfig"
      :order-by="orderBy"
      :sort-direction="sortDirection"
      @update-sort="updateSort"
    />
    <TableBody
      :config="tableConfig"
      :table-data="tableData"
    />
  </div>
</template>

<script>
import TableHeader from 'Components/Table/TableHeader'
import TableBody from 'Components/Table/TableBody'

export default {
  name: 'Table',
  components: {
    TableHeader,
    TableBody
  },
  props: {
    tableConfig: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    orderBy: '',
    sortDirection: ''
  }),
  computed: {
    hasElementsInConfig () {
      return this.tableConfig.length > 0
    }
  },
  methods: {
    updateSort (columnName) {
      if (columnName === this.orderBy) {
        this.toggleSortDirection()
      } else {
        this.orderBy = columnName
        this.sortDirection = 'asc'
      }
      this.$emit('update-sort', {
        orderBy: this.orderBy,
        direction: this.sortDirection
      })
    },
    toggleSortDirection () {
      switch (this.sortDirection) {
        case 'asc':
          this.sortDirection = 'desc'
          break
        case 'desc':
          this.orderBy = ''
          this.sortDirection = ''
          break
        default:
          this.sortDirection = 'asc'
          break
      }
    }
  }
}
</script>
