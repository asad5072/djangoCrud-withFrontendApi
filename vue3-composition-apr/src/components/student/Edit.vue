<script setup>
  import { onMounted } from "vue";
  import useStudent from "../../composables/StudentApi";
  import { useRoute } from "vue-router";
const { studentData, error, statusCode, getSingleStudent, updateStudent } =
  useStudent();
const { params } = useRoute();
onMounted(() => {
  getSingleStudent(params.id);
});

function handleUpdateStudentForm() {
  updateStudent(params.id, studentData.value);
}

 

</script>

<template>
  <div class="flex justify-between items-center gap-4 p-4 shadow-md">
    <h1 class="text-3xl font-bold underline text-red-500">Edit student</h1>
    <router-link :to="{name: 'list'}">
      <button class="w-40 py-2 px-4 bg-green-200">All Student</button>
    </router-link>
  </div>
  <form @submit.prevent="handleUpdateStudentForm" id="addStudentForm">
    <div class="p-6 flex items-center gap-2 w-full">
      <label for="stuid">ID:</label>
      <input type="text" id="stuid" v-model.trim="studentData.id" class="py-2 px-4 border border-gray-200" readonly disabled>
    </div>
    <div class="p-6 flex items-center gap-2 w-full">
      <label for="stuname">Name:</label>
      <input type="text" required id="stuname" v-model.trim="studentData.stuname" placeholder="Write your name" class="py-2 px-4 border border-gray-200">
    </div>
    <div class="p-6 flex items-center gap-2 w-full">
      <label for="email">Email:</label>
      <input type="email" required id="email" v-model.trim="studentData.email" placeholder="Write your email" class="py-2 px-4 border border-gray-200">
    </div>
    <div class="p-6">
      <button type="submit" class="w-40 py-2 px-4 bg-green-200">Update</button>
    </div>
  </form>
</template>  


<style scoped>


</style>
