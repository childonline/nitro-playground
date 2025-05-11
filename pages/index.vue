<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-btn @click="dbMigrate()"> db:migrate </v-btn>
        <v-btn @click="dbSeed()"> db:seed </v-btn>
        <v-btn @click="users()"> /api/users </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const dbMigrate = async (): Promise<void> => {
  const { data, error } = await useFetch('api/private/db/migrate')
  console.log('JSON Response:', data.value, error.value)
}

const dbSeed = async (): Promise<void> => {
  const { data, error } = await useFetch('api/private/db/seed')
  console.log('JSON Response:', data.value, error.value)
}

const users = async (): Promise<void> => {
  const { data, error } = await useFetch('/api/users')
  console.log('JSON Response:', data.value, error.value)
}
</script>
