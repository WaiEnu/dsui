<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row class="text-center" justify="start" align="start">
        <v-col cols="12">
          <Table class="pa-0 mx-auto"/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// @ is an alias to /src
import Table from '@/components/Table';

export default {
  name: 'Home',
  components: {
    Table
  },
  data: () => ({
  }),
}
</script>