<script setup>
import { userDetails } from "../stores/userStore";
</script>

<template>
  <form
    class="w-[240px] mx-auto flex flex-col justify-start"
    @submit.prevent="userDetails.update()"
  >
    <label class="text-left" for="name">Name:</label>
    <input type="text" id="name" v-model="userDetails.name" /><br />

    <label class="text-left" for="birthdate">Birthdate:</label>
    <input type="date" id="birthdate" v-model="userDetails.birthDate" /><br />

    <label class="text-left" for="email">Email:</label>
    <input type="email" id="email" v-model="userDetails.email" /><br />

    <label class="text-left" for="description">Description:</label>
    <textarea id="description" v-model="userDetails.description"></textarea
    ><br />

    <button class="bg-blue-600 round-none" type="submit">Update</button>
  </form>
</template>

<style scoped></style>
