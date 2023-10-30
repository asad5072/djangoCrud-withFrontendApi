<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import useStudent from '../../composables/StudentApi';
const { studentData, error, getAllStudent, destroyStudent } = useStudent();
onMounted(getAllStudent);


const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure ?")) {
    return;
  }
  console.log('deleted', id);
  await destroyStudent(id);
  await getAllStudent();
};
</script>

<template>
  {{studentData}}
  <h1 class="text-3xl font-bold underline text-red-500">List All Page</h1>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div class="flex justify-between items-center gap-4">
        <h2 class="text-2xl font-semibold leading-tight">Student List</h2>
        <router-link :to="{ name: 'add' }">
          <button class="bg-green-200 rounded p-3 mr-3 w-40">Add Student</button>
        </router-link>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <div v-if="error">Oops! something error: {{ error.message }}</div>

          <div>

            <table class="min-w-full leading-normal">

              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Serial No
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody velse-if="studentData && studentData.student">
                <tr v-for="(stu, i) in studentData.student" :key="stu.id">
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div class="flex">
                      <div class="flex-shrink-0 w-10 h-10">
                        <p>{{ ++i }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{{ stu.stuname }}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">{{ stu.email }}</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <router-link :to="{name:'view', params:{id:stu.id} }">
                      <button class="bg-green-200 rounded p-3 mr-3 w-40">View</button>
                    </router-link>
                    <router-link :to="{name:'edit', params:{id:stu.id} }">
                      <button class="bg-green-200 rounded p-3 mr-3 w-40">Edit</button>
                    </router-link>
                    <button class="bg-green-200 rounded p-3 inline-block mr-3 w-20"
                      @click="deleteStudent(stu.id)">Delete</button>

                  </td>

                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>  


<style scoped></style>
