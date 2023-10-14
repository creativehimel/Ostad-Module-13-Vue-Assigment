<script setup>
import { ref, computed, watch } from "vue";
import { userDetails } from "../stores/userStore";
const vote = ref(null);
const birtYear = computed(() => {
  return new Date(userDetails.birthDate).getFullYear();
});

const electionAge = computed(() => {
  const currentYear = new Date().getFullYear();
  let age = currentYear - new Date(userDetails.birthDate).getFullYear();
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
});

watch(
  userDetails,
  () => {
    if (electionAge.value) {
      vote.value = "Eligible for voting";
    } else {
      vote.value = "Not eligible for voting";
    }
  },
  { immediate: true },
  { deep: true }
);
</script>
<template>
  <div class="w-full min-h-screen bg-slate-100 py-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-2">
        <div class="bg-white p-4 col-span-3 rounded shadow space-y-3 py-5">
          <div class="flex justify-center pt-5">
            <img
              class="rounded-full w-36 h-36"
              :src="userDetails.profileImage"
            />
          </div>

          <div class="flex flex-col items-center space-y-2">
            <h1
              class="text-center font-bold text-2xl text-gray-800 tracking-wider"
            >
              {{ userDetails.name }}
            </h1>
            <h3
              class="text-center font-bold text-sm text-gray-500 tracking-widest"
            >
              {{ userDetails.designation }}
            </h3>
            <h5
              class="bg-green-100 w-36 text-xs text-center rounded-full py-1 text-green-700"
            >
              {{ vote }}
            </h5>
          </div>
        </div>
        <div
          class="col-span-9 bg-white rounded shadow-sm p-4 relative overflow-x-auto"
        >
          <table
            class="flex gap-x-4 w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-md text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr class="flex flex-col">
                <th scope="col" class="px-6 py-3">Full Name:</th>
                <th scope="col" class="px-6 py-3">Email:</th>
                <th scope="col" class="px-6 py-3">Designation:</th>
                <th scope="col" class="px-6 py-3">Mobile:</th>
                <th scope="col" class="px-6 py-3">Date Of Birth:</th>
                <th scope="col" class="px-6 py-3">Address:</th>
              </tr>
            </thead>
            <tbody>
              <tr class="flex flex-col">
                <td class="px-6 py-3">{{ userDetails.name }}</td>
                <td class="px-6 py-3">{{ userDetails.email }}</td>
                <td class="px-6 py-3">{{ userDetails.designation }}</td>
                <td class="px-6 py-3">{{ userDetails.phone }}</td>
                <td class="px-6 py-3">{{ userDetails.birthDate }}</td>
                <td class="px-6 py-3">{{ userDetails.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="bg-white p-4 rounded mt-2">
        <h3 class="text-2xl">Bio</h3>
        <p class="text-lg text-justify">{{ userDetails.description }}</p>
      </div>
      <router-link
        class="blockflex-1 text-center text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-4 group"
        to="/user-details"
      >
        <div class="flex items-center justify-center">
          <svg
            class="w-4 h-4 fill-current text-gray-400 group-hover:text-gray-500 flex-shrink-0 mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z"
            />
          </svg>
          <span>Edit Profile</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style></style>
