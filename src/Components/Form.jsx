import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
         <div>
         <label>Name</label>
  <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"/>
        <br/> 
         <label>Job Title</label>
  <input type="text" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"/>
</div>   

    </div>
  )
}

export default Form