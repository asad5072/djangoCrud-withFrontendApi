import {ref} from 'vue'
import axios from 'axios'

export default function useStudent(){
  console.log('hello')
    const url = 'http://127.0.0.1:8000/api/student/'
    const studentData = ref([])
    const error = ref(null)
    const getAllStudent = async()=>{
      console.log(23123)
        studentData.value = []
        error.value = null
        const res = await axios(url)
          console.log(res.data)
          studentData.value = res.data

        
        // try{
        //     const res = await axios(url)
        //     console.log(res.data)
        //     studentData.value = res.data
        // }catch(err){
        //     error.value = err
        // }
    }

    // get single data
      const getSingleStudent = async (id) => {
        studentData.value = []
        error.value = null
        try {
          const res = await axios(url + id)
          studentData.value = res.data
        } catch (err) {
          error.value = err
        }
      }
    
    //POST/Add student
    const createStudent = async(FormData)=>{
      studentData.value = []
      error.value = null
      try {
        const config= {
          method: 'POST',
          url: 'http://127.0.0.1:8000/api/student/',
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(FormData)
        }
        const res = await axios(config)
        studentData.value = res.data
        console.log(studentData.value, 'sfasdfasdfasd')
      } catch (err) {
        error.value = err
      }
    }

    // update Student
    const updateStudent = async (id, data) => {
      studentData.value = []
      error.value = null
      try {
        const config = {
          method: 'PUT',
          url: 'http://127.0.0.1:8000/api/student/' + id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: JSON.stringify(data)
        }
        const res = await axios(config)
        studentData.value = res.data
        // statusCode.value = res.status
      } catch (err) {
        error.value = err
      }
    }

    //Delete student
    const destroyStudent = async (id) => {
      studentData.value = []
      error.value = null
      try {
        const config = {
          method: 'DELETE',
          url: 'http://127.0.0.1:8000/api/student/' + id,
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const res = await axios(config)
        studentData.value = res.data
        // statusCode.value = res.status
      } catch (err) {
        error.value = err
      }
    }



    return{
        studentData,
        error,
        getAllStudent,
        getSingleStudent,
        createStudent,
        updateStudent,
        destroyStudent
    }
}