<template>
  <transition name="fade">
    <div
      class="modal"
      v-if="model"
    >
      <Card>
        <div class="modal__header">
          <div
            class="modal__title"
            v-text="title"
          />
          <div
            class="modal__close"
            v-html="closeIcon"
            @click="closeModal"
          />
        </div>
        <slot />
      </Card>
    </div>
  </transition>
</template>

<script>
import closeIcon from 'Icons/ic-close.svg'
import Card from 'Components/Card'

export default {
  components: {
    Card
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    closeIcon
  }),
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    closeModal () {
      this.model = false
    }
  }
}
</script>

<style scoped>
.modal {
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);
}

.modal__header {
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
}

.modal__title {
  font-size: 22px;
  font-weight: 600;
}

.modal__close {
  width: 24px;
  height: 24px;

  cursor: pointer;
}

.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
