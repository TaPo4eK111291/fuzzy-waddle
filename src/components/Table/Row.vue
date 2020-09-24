<template>
  <div>
    <div class="table-row">
      <Cell
        v-for="(cell, index) in configuredData.rowData"
        :key="index"
        :cell-data="cell"
        :show-expand-icon="hasChildren"
        :expanded="expanded"
        @toggle-expanded="toggleExpand"
      />
    </div>
    <div
      v-if="expanded"
      class="table-row__children"
    >
      <Row
        v-for="(child, index) in configuredData.children"
        :key="index"
        :config="config"
        :row-data="child"
      />
    </div>
  </div>
</template>

<script>
import Cell from 'Components/Table/Cell'

export default {
  name: 'Row',
  components: {
    Cell
  },
  props: {
    config: {
      type: Array,
      default: () => []
    },
    rowData: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    expanded: false
  }),
  computed: {
    configuredData () {
      let configuredRowData = []
      this.config.forEach(configElement => {
        configuredRowData.push({
          value: this.rowData[configElement.field] || '',
          extandable: configElement.extandable
        })
      })

      return {
        rowData: configuredRowData,
        children: this.rowData.children
      }
    },
    hasChildren () {
      return this.rowData.children.length > 0
    }
  },
  methods: {
    toggleExpand () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>
.table-row {
  display: flex;
}

.table-row__children >>> .cell-wrapper:nth-child(1) > .cell {
  margin-left: 10px;
  width: calc(100% - 10px);
}
</style>
