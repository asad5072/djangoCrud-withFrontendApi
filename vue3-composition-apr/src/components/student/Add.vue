<script setup>
  import {reactive} from "vue";
  import { RouterLink } from "vue-router";
  import useStudent from '../../composables/StudentApi';
  const {studentData, error, createStudent} = useStudent();
  const formData = reactive({
    stuname: "",
    email: "",
  });
  const handleAddStucentForm = async()=>{
    console.log(formData)
    await createStudent(formData);
    
  }
</script>

<template>
  <div class="flex justify-between items-center gap-4 p-4 shadow-md">
    <h1 class="text-3xl font-bold underline text-red-500">Add student</h1>
    <router-link :to="{name: 'list'}">
      <button class="w-40 py-2 px-4 bg-green-200">All Student</button>
    </router-link>
  </div>
  <form @submit.prevent="handleAddStucentForm" id="addStudentForm">
    <div class="p-6 flex items-center gap-2 w-full">
      <label for="stuname">Name:</label>
      <input type="text" required id="stuname" v-model.trim="formData.stuname" placeholder="Write your name" class="py-2 px-4 border border-gray-200">
    </div>
    <div class="p-6 flex items-center gap-2 w-full">
      <label for="email">Email:</label>
      <input type="email" required id="email" v-model.trim="formData.email" placeholder="Write your email" class="py-2 px-4 border border-gray-200">
    </div>
    <div class="p-6">
      <button type="submit" class="w-40 py-2 px-4 bg-green-200">Add</button>
    </div>
  </form>
</template>  


<style scoped>


</style>
