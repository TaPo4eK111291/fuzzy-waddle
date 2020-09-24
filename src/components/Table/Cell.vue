<template>
  <div class="cell-wrapper">
    <div class="cell" >
      <div
        v-if="cellData.extandable && showExpandIcon"
        class="cell__expand-icon-wrapper"
      >
        <div
          class="cell__expand-icon"
          v-html="expandIcon"
          @click="$emit('toggle-expanded')"
        />
      </div>
      {{ cellData.value }}
    </div>
  </div>
</template>

<script>
import addIcon from 'Icons/ic-add.svg'
import removeIcon from 'Icons/ic-remove.svg'

export default {
  name: 'Cell',
  components: {
    addIcon,
    removeIcon
  },
  props: {
    cellData: {
      type: Object,
      default: () => {}
    },
    showExpandIcon: {
      type: Boolean,
      default: false
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    expandIcon () {
      if (this.expanded) return removeIcon
      else return addIcon
    }
  }
}
</script>

<style scoped>
.cell-wrapper {
  width: 100%;

  margin-right: var(--table-outline-width);
  margin-top: var(--table-outline-width);
}

.cell {
  box-sizing: border-box;

  padding: 5px;

  outline: var(--table-body-outline);
}

.cell__expand-icon-wrapper {
  position: absolute;
}

.cell__expand-icon {
  width: 20px;
  height: 20px;

  cursor: pointer;
}
</style>
