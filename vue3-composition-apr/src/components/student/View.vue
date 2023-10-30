<script setup>
  import { RouterLink } from 'vue-router';
  import useStudent from '../../composables/StudentApi';
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  const { studentData, error, getSingleStudent } = useStudent();
  const route = useRoute()
  onMounted(()=>{
    getSingleStudent(route.params.id)
  })

</script>

<template>
  <h1 class="text-3xl font-bold underline text-red-500">View Details</h1>
  <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div class="flex justify-between items-center gap-4">
      <h2 class="text-2xl font-semibold leading-tight">Student List</h2>
      <router-link :to="{name:'list'}">
        <button class="bg-green-200 rounded p-3 mr-3 w-40">All Student</button>
      </router-link>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Serial No
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <p>{{ studentData.id }}</p>
                  </div>                  
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{studentData.stuname}}</p>               
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">{{ studentData.email }}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

</template>  


<style scoped>


</style>
