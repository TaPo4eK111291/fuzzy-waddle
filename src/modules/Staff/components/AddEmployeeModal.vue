<template>
  <Modal
    title="Добавление пользователя"
    v-model="modal"
  >
    <AddEmployeeForm
      v-if="modal"
      :chiefs="chiefs"
      @submit="(value) => $emit('submit', value)"
    />
  </Modal>
</template>

<script>
import Modal from 'Components/Modal'
import AddEmployeeForm from 'Modules/Staff/components/AddEmployeeForm'

export default {
  name: 'AddEmployeeModal',
  components: {
    Modal,
    AddEmployeeForm
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    chiefs: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    modal: {
      get () { return this.value },
      set (val) { this.$emit('input', val) }
    }
  }
}
</script>
