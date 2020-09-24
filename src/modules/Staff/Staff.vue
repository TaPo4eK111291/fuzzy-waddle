<template>
  <div class="staff">
    <div class="actions">
      <Button
        flat
        rounded
        class="add-button"
        @click="openAddEmployeeModal"
      >
        Добавить
      </Button>
    </div>
    <Table
      :table-config="tableConfig"
      :table-data="staff"
      @update-sort="updateSort"
    />
    <AddEmployeeModal
      v-model="addEmployeeModal"
      :chiefs="chiefs"
      @submit="saveEmployee"
    />
  </div>
</template>

<script>
import Table from 'Components/Table'
import Button from 'Components/Button'
import AddEmployeeModal from 'Modules/Staff/components/AddEmployeeModal'

import api from 'Api/staff'

export default {
  name: 'Staff',
  components: {
    Table,
    Button,
    AddEmployeeModal
  },
  data: () => ({
    addEmployeeModal: false,
    tableConfig: [
      {
        title: 'Имя',
        field: 'name',
        sortable: true,
        extandable: true
      },
      {
        title: 'Телефон',
        field: 'phone',
        sortable: true
      }
    ],
    staff: []
  }),
  computed: {
    chiefs () {
      let result = []

      let stack = this.staff.slice()
      while (stack.length > 0) {
        let current = stack.pop()
        if (current.children.length > 0) stack.push(...current.children)
        result.push(current)
      }

      return result.map(employee => ({
        id: employee.id,
        name: employee.name
      }))
    }
  },
  created () {
    this.getStaff()
  },
  methods: {
    getStaff () {
      this.staff = api.getStaff()
    },
    openAddEmployeeModal () {
      this.addEmployeeModal = true
    },
    saveEmployee (employee) {
      api.saveEmployee(employee)
      this.getStaff()
      this.addEmployeeModal = false
    },
    updateSort (params) {
      this.staff = api.getStaff(params)
    }
  }
}
</script>

<style scoped>
.staff {
  width: 800px;
}

.actions {
  margin-bottom: 20px;

  display: flex;
  flex-direction: row-reverse;
}
</style>
