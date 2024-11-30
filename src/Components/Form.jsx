import React from "react";
import "./Form.css";
import AddIcon from '@mui/icons-material/Add';

const Form = () => {
  return (
    <div className="pt-5">
  
  {/* ---------------------------------------------------------------------------------------- */}
   
    <fieldset>
      <legend className="pt-3 text-left font-medium text-2xl underline">Heading</legend>
      <form>
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">
      <label className="mt-3">Name</label>
      <input
          type="text"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="John Doe"
        />

        <label className="mt-3">Job Title</label>
        <input
          type="text"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Software Engineer"
        />

        <label className="mt-3">Email Id</label>
        <input
          type="email"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="johndoe@gmail.com"
        />
        
        <label className="mt-3">Phone Number</label>
        <input
          type="tel"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="1234-567-890"
        />
      </div>
      </form>
    </fieldset>
    <hr/>
  
  {/* ---------------------------------------------------------------------------------------- */}

  <fieldset>
      <legend className="pt-3 text-left font-medium text-2xl underline">Links</legend>
      <form>
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">
      <label className="mt-3">LinkedIn</label>
      <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://www.linkedin.com/in/johndoe/"
        />

        <label className="mt-3">GitHub</label>
        <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://github.com/johndoe"
        />

        <label className="mt-3">Website</label>
        <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="www.johndoe.com"
        />
        
        <label className="mt-3">Behance</label>
        <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://www.behance.net/johndoe"
        />
      </div>
      </form>
    </fieldset>
    <hr/>
  
   {/* ---------------------------------------------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Education</legend>
   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-24">University</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="ABC University"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">
      <label className="mt-3">Degree</label>
      <input
          type="text"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Bachelor of Technology"
        />

        <label className="mt-3">Grade</label>
        <select 
        class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none">
         <option>- Select -</option>
         <option>O</option>
         <option>A</option>
         <option>B</option>
         <option>C</option>
         <option>D</option>
         <option>E</option>
         <option>F</option>
        </select>

        <label className="mt-3">Start-Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
        
        <label className="mt-3">End-Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
      </div>
      </form>
    </fieldset>
    <hr/>

   {/* ---------------------------------------------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Experience</legend>
   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-24">Company</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Amazon"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-28">Job Role</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Software Engineer"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Description</label>
      <textarea
          type="text"
          class="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="ABC University">
        </textarea>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">

        <label className="mt-3">Start-Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
        
        <label className="mt-3">End-Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
      </div>
      </form>
    </fieldset>
    <hr/>

   {/* ---------------------------------------------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Volunteering</legend>
   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Organization </label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Amazon"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-28">Job Role</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Software Engineer"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Description</label>
      <textarea
          type="text"
          class="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="ABC University">
        </textarea>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">

        <label className="mt-3">Start-Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
        
        <label className="mt-3">End-Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
      </div>
      </form>
    </fieldset>
    <hr/>

   {/* ---------------------------------------------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Certifications</legend>
   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-32">Name</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Certification Name"

        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-32">Issuer</label>
      <select 
        class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none">
         <option>- Select -</option>
         <option>Coursera</option>
         <option>Microsoft</option>
         <option>GUVI</option>
         <option>Simplilearn</option>
         <option>Udemy</option>
         <option>Google</option>
         <option>Cisco</option>
        </select>

      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-32">Link</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Certification URL"
        />
      </div>

      </form>
    </fieldset>
    <hr/>


   {/* ---------------------------------------------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Skills and Interest</legend>
   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form>
      <div class="flex flex-col md:flex-row pt-3">
      <input
          type="text"
          class="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Skills and Interest"/>
      </div>
      </form>
    </fieldset>
    <hr/>

  
   {/* ---------------------------------------------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Awards and Highlights</legend>
   <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form>
      <div class="flex flex-col md:flex-row pt-3">
      <input
          type="text"
          class="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Awards and Highlights"/>
      </div>
      </form>
    </fieldset>
    <hr/>

<div className="flex justify-center items-center">
  <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">GENERATE RESUME</button>

</div>


    </div>
  );
};

export default Form;
