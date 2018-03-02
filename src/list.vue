<template>
  <b-table :items="items" :fields="fields">
    <template slot="show_details" slot-scope="row">
      <b-button size="sm" @click.stop="details(row, row.detailsShowing ? 'hide' : 'show')" :disabled="row.item.isLoading" class="mr-2">
       {{ row.detailsShowing ? 'Скрыть' : 'Показать'}} подробности
      </b-button>
    </template>
    <template slot="row-details" slot-scope="row">
      <div class="mb-4">
        <b-row class="mb-2">
          <b-col cols="3" class="text-right"><b>Имя:</b></b-col>
          <b-col cols="9">{{ row.item.first_name }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="3" class="text-right"><b>Фамилия:</b></b-col>
          <b-col cols="9">{{ row.item.last_name }}</b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="3" class="text-right"><b>Возраст:</b></b-col>
          <b-col cols="9">{{ row.item.age }}</b-col>
        </b-row>
        <b-row>
          <b-col cols="3" class="text-right"><b>Адрес:</b></b-col>
          <b-col cols="9">{{ row.item.place }}</b-col>
        </b-row>
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [ { key: 'first_name', label: 'Имя' }, { key: 'last_name', label: 'Фамилия' }, { key: 'show_details', label: 'Действие' } ],
      items: [
        { age: null, place: null, first_name: 'Dickerson', last_name: 'Macdonald', isLoading: false },
        { age: null, place: null, first_name: 'Larsen', last_name: 'Shaw', isLoading: false },
        { age: null, place: null, first_name: 'Geneva', last_name: 'Wilson', isLoading: false },
        { age: null, place: null, first_name: 'Jami', last_name: 'Carney', isLoading: false }
      ],
    }
  },
  methods: {
    details(row, type = 'show') {
      //console.log(row.item)
      row.toggleDetails()
      if (type == 'show') {
        row.item.isLoading = true;
        this.loadData(row.index + 1).then((result) => {
          row.item.isLoading = false
          row.item.age = result.age
          row.item.place = result.place
        })
      } else {
        row.item.age = null
        row.item.place = null
      }
    },
    loadData(index) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve({age: index * 10 + Math.round(Math.random() * 9), place: `Улица Московская, д. ${index+Math.round(Math.random() * 9)}`})
        }, Math.round(Math.random() * 20) * 100)
      })
    }
  }
}
</script>

