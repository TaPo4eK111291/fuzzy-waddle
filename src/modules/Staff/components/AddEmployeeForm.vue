<template>
  <form
    class="add-employee-form"
    @submit.prevent="submitAddEmployeeForm"
  >
    <div class="form-group">
      <div class="form-label">
        Имя*
      </div>
      <div class="form-control">
        <input
          required
          v-model="name"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">
        Телефон*
      </div>
      <div class="form-control">
        <input
          required
          v-model="phone"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">
        Начальник
      </div>
      <div class="form-control">
        <select
          v-model="chief"
        >
          <option
            v-for="(chief, index) in chiefs"
            :key="index"
            :value="chief.id"
            v-text="chief.name"
          />
        </select>
      </div>
    </div>
    <div class="add-employee-form__actions">
      <Button
        flat
        rounded
        type="submit"
        label="Сохранить"
      />
    </div>
  </form>
</template>

<script>
import Button from 'Components/Button'

export default {
  name: 'AddEmployeeForm',
  components: {
    Button
  },
  props: {
    chiefs: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    name: '',
    phone: '',
    chief: ''
  }),
  methods: {
    submitAddEmployeeForm () {
      this.$emit('submit', {
        name: this.name,
        phone: this.phone,
        chief: this.chief
      })
    }
  }
}
</script>

<style scoped>
.add-employee-form {
  min-width: 400px;
}

.add-employee-form__actions {
  display: flex;
}
</style>
