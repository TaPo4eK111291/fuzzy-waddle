<template>
  <div class="table-header">
    <div
      v-for="(element, index) in config"
      :class="getTableHeaderCellClass(element.sortable)"
      :key="index"
      @click="() => sortClickHandler(element)"
    >
      {{ element.title }}
      <div
        v-if="element.sortable && sortDirection && orderBy === element.field"
        v-html="arrowIcon"
        :class="sortIconClass"
      />
    </div>
  </div>
</template>

<script>
import arrowIcon from 'Icons/ic-arrow.svg'

export default {
  name: 'Header',
  props: {
    config: {
      type: Array,
      default: () => []
    },
    orderBy: {
      type: String,
      default: ''
    },
    sortDirection: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    arrowIcon
  }),
  computed: {
    sortIconClass () {
      return ['arrow-icon', {'down': this.sortDirection === 'asc'}, {'up': this.sortDirection === 'desc'}]
    }
  },
  methods: {
    sortClickHandler (element) {
      if (element.sortable) this.$emit('update-sort', element.field)
    },
    getTableHeaderCellClass (sortable) {
      return ['table-header__cell', {'sortable': sortable}]
    }
  }
}
</script>

<style scoped>
.table-header {
  display: flex;

  background-color: var(--table-header-background-color);
}

.table-header__cell {
  width: 100%;
  flex-grow: 1;

  padding: 7px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 600px;

  margin-right: var(--table-outline-width);
  outline: var(--table-header-outline);
}

.table-header__cell.sortable {
  cursor: pointer;
}

.arrow-icon {
  width: 20px;
  height: 20px;

  transition: transform 0.5s;
}

.arrow-icon.up {
  transform: rotate(-90deg);
}

.arrow-icon.down {
  transform: rotate(90deg);
}
</style>
