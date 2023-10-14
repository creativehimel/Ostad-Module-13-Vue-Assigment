<script setup>
import { userDetails } from "../stores/userStore";
</script>

<template>
  <form
    class="max-w-3xl mt-10 mx-auto flex flex-col justify-start"
    @submit.prevent="userDetails.update()"
  >
    <div class="flex justify-between">
      <div class="space-y-2">
        <label class="text-left pr-2" for="name">Name:</label>
        <input
          class="border py-1 px-3"
          type="text"
          id="name"
          v-model="userDetails.name"
        />
      </div>
      <div class="space-y-2">
        <label class="text-left pr-2" for="email">Email:</label>
        <input
          class="border py-1 px-3"
          type="email"
          id="email"
          v-model="userDetails.email"
        />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="space-y-2">
        <label class="text-left pr-2" for="designation">Designation:</label>
        <input
          class="border py-1 px-3"
          type="text"
          id="designation"
          v-model="userDetails.designation"
        />
      </div>
      <div class="space-y-2">
        <label class="text-left pr-2" for="phone">Phone:</label>
        <input
          class="border py-1 px-3"
          type="text"
          id="phone"
          v-model="userDetails.phone"
        />
      </div>
    </div>
    <div class="flex justify-between">
      <div class="space-y-2">
        <label class="text-left pr-2" for="address">Address:</label>
        <input
          class="border py-1 px-3"
          type="text"
          id="address"
          v-model="userDetails.address"
        />
      </div>
      <div class="space-y-2">
        <label class="text-left pr-2" for="birthdate">Birthdate:</label>
        <input
          class="border py-1 px-3"
          type="date"
          id="birthdate"
          v-model="userDetails.birthDate"
        />
      </div>
    </div>

    <br />

    <label class="text-left" for="description">Description:</label>
    <textarea id="description" v-model="userDetails.description"></textarea
    ><br />

    <button
      class="bg-blue-600 rounded py-1 text-white font-semibold"
      type="submit"
    >
      Update
    </button>
  </form>
</template>

<style scoped></style>
