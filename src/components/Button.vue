<template>
  <button
    v-on="$listeners"
    ref="btn"
    :class="buttonClasses"
    :type="type"
  >
    <div
      v-if="hasLabel"
      v-text="label"
    />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: ''
    },
    flat: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    hasLabel () {
      return !!this.label
    },
    buttonClasses () {
      return [
        'button',
        {'flat': this.flat},
        {'rounded': this.rounded}
      ]
    }
  }
}
</script>

<style scoped>
.button {
  position: relative;

  min-width: 70px;
  padding: 9px 19px;

  border-radius: 7px;

  border: none;
  outline: none;

  cursor: pointer;

  -webkit-box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.75);
}

.button.flat {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.button.rounded {
  border-radius: 15px;
}
</style>
