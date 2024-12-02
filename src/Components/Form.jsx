import React from "react";
import "./Form.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Delete } from "@mui/icons-material";
import { Close } from "@mui/icons-material";

const Form = () => {
  
  const useFormList = (initialState = [{ id: Date.now() }]) => {
    const [forms, setForms] = useState(initialState);
  
    const addForm = () => {
      setForms([...forms, { id: Date.now() }]);
    };
  
    const removeForm = (id) => {
      setForms(forms.filter((form) => form.id !== id));
    };
  
    return [forms, addForm, removeForm];
  };
  
  const [educationForms, addEducationForm, removeEducationForm] = useFormList();
  const [experienceForms, addExperienceForm, removeExperienceForm] = useFormList();
  const [projectForms, addProjectForm, removeProjectForm] = useFormList();
  const [certificateForms, addCertificateForm, removeCertificateForm] = useFormList();
  const [volunteerForms, addVolunteerForm, removeVolunteerForm] = useFormList();

 
  const [addsivalue,setaddsivalue]=useState("")
  const[sidata,setsidata]=useState([])

  const add_si=()=>{
      setsidata([...sidata,addsivalue]);
      setaddsivalue("");
  }

  function remove_si(e){
    event.target.parentElement.remove();
  }

  const [addahvalue,setaddahvalue]=useState("")
  const[ahdata,setahdata]=useState([])

  const add_ah=()=>{
      setahdata([...ahdata,addahvalue]);
      setaddahvalue("");
  }

  function remove_ah(e){
    event.target.parentElement.remove();
  }

  

  
  return (
    <div className="pt-5">
  
  {/* -------------------------------HEADING--------------------------------------------------------- */}
   
    <fieldset>
      <legend className="pt-3 text-left font-medium text-2xl underline">Heading</legend>
      <form className="heading">
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">
      <label className="mt-3">Name</label>
      <input
          type="text"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Your Name"
        />

        <label className="mt-3">Job Title</label>
        <input
          type="text"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Your Job Title"
        />

        <label className="mt-3">Email Id</label>
        <input
          type="email"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Your Email"
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
  
  {/* -------------------------------LINKS--------------------------------------------------------- */}

  <fieldset>
      <legend className="pt-3 text-left font-medium text-2xl underline">Links</legend>
      <form className="links">
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3 ">
      <label className="mt-3">LinkedIn</label>
      <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://www.linkedin.com/in/"
        />

        <label className="mt-3">GitHub</label>
        <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://github.com/"
        />

        <label className="mt-3">Website</label>
        <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://www.yourwebsite.com/"
        />
        
        <label className="mt-3">Behance</label>
        <input
          type="url"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="https://www.behance.net/"
        />
      </div>
      </form>
    </fieldset>
    <hr/>
  
   {/* ------------------------------------EDUCATION---------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Education</legend>
   <button type="button" 
   onClick={addEducationForm}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>

   </div>
   {educationForms.map((form, index) => (
          <div key={form.id}>
            <form className="education">
            <div className="flex justify-end">
           
            
            {educationForms.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducationForm(form.id)}
                className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500"
              > <Delete></Delete>
                Delete
              </button>
            )}
            </div>
            
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-24">University</label>
                <input
                  type="text"
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter University"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 pt-3">
                <label className="mt-3">Degree</label>
                <input
                  type="text"
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Degree"
                />
                <label className="mt-3">Grade</label>
                <select className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm">
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
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
                <label className="mt-3">End-Date</label>
                <input
                  type="month"
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
              </div>
            </form>
         
          </div>
        ))}

    </fieldset>
    <hr/>

   {/* ------------------------------------EXPERIENCE---------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Experience</legend>
   <button type="button" 
   onClick={addExperienceForm}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

   {experienceForms.map((form, index) => (
          <div key={form.id}>
            <form className="experience">
            <div className="flex justify-end">
            {experienceForms.length > 1 && (
              <button
                type="button"
                onClick={() => removeExperienceForm(form.id)}
                className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500"
              > <Delete></Delete>
                Delete
              </button>
            )}
            </div>
            
            <div class="flex flex-col md:flex-row pt-3">
  <label className="mt-3 mr-24">Company</label>
  <input
      type="text"
      class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
      placeholder="Enter Company Name"
    />
  </div>
  <div class="flex flex-col md:flex-row pt-3">
  <label className="mt-3 mr-28">Job Role</label>
  <input
      type="text"
      class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
      placeholder="Enter Job Role"
    />
  </div>
  <div class="flex flex-col md:flex-row pt-3">
  <label className="mt-3 mr-20">Description</label>
  <textarea
      type="text"
      class="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
      placeholder="Enter Job Description">       
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
         
          </div>
        ))}
      
    </fieldset>
    <hr/>

   {/* ------------------------------------PROJECTS---------------------------------------------------- */}

    <fieldset>
    <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Projects</legend>
   <button type="button" 
   onClick={addProjectForm}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

   {projectForms.map((form, index) => (
    <div key={form.id}>
      <form className="projects">
      <div className="flex justify-end">
            {projectForms.length > 1 && (
              <button
                type="button"
                onClick={() => removeProjectForm(form.id)}
                className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500"
              > <Delete></Delete>
                Delete
              </button>
            )}
            </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Project Title</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Project Title"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Description</label>
      <textarea
          type="text"
          class="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Project Description">
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
      </div>
    ))}
   
    </fieldset>
    <hr/>

   {/* ------------------------------------CERTIFICATIONS---------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Certifications</legend>
   <button type="button" 
   onClick={addCertificateForm}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>
   {certificateForms.map((form, index) => (
    <div key={form.id}>
      <form className="certificate">
      <div className="flex justify-end">
            {certificateForms.length > 1 && (
              <button
                type="button"
                onClick={() => removeCertificateForm(form.id)}
                className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500"
              > <Delete></Delete>
                Delete
              </button>
            )}
            </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20 w-auto">Certificate Name</label>
      <input
          type="text"
          class="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Certificate Name"

        />
      </div>

      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20 w-auto">Certificate Link</label>
      <input
          type="url"
          class="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Certificate Link"

        />
      </div>

      
      
      <div class="grid grid-cols-1 md:grid-cols-4 pt-3">
      <label className="mt-3">Issuer</label>
      <select 
        class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none">
         <option>- Select -</option>
         <option>Coursera</option>
         <option>Microsoft</option>
         <option>GUVI</option>
         <option>Great Learning</option>
         <option>Simplilearn</option>
         <option>Udemy</option>
         <option>Google</option>
         <option>Cisco</option>
         <option>Others</option>
        </select>

        <label className="mt-3">Issued Date</label>
        <input
          type="month"
          class="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
      </div>
      </form>

      </div>
    ))}
    </fieldset>
    <hr/>
   {/* ---------------------------------------VOLUNTEERING------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Volunteering</legend>
   <button type="button" 
   onClick={addVolunteerForm}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

   {volunteerForms.map((form, index) => (
    <div key={form.id}>
      <form className="volunteer">
      <div className="flex justify-end">
            {volunteerForms.length > 1 && (
              <button
                type="button"
                onClick={() => removeVolunteerForm(form.id)}
                className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500"
              > <Delete></Delete>
                Delete
              </button>
            )}
            </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Organization </label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Organization Name"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-28">Job Role</label>
      <input
          type="text"
          class="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Volunteer Role"
        />
      </div>
      <div class="flex flex-col md:flex-row pt-3">
      <label className="mt-3 mr-20">Description</label>
      <textarea
          type="text"
          class="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Volunteering Description">
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
      
      </div>
    ))}
    </fieldset>
    <hr/>

   {/* -----------------------------------SKILLS & INTERESTS----------------------------------------------------- */}

  
   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Skills and Interest</legend>
   <button type="button" 
    onClick={() => add_si()}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form className="skill">
      <div class="flex flex-col md:flex-row pt-3">
      <input
          type="text"
          onChange={(e)=>setaddsivalue(e.target.value)}
          value={addsivalue}
          class="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Skills and Interest"/>
      </div>
      </form>
    </fieldset>

<div id="si-container">
<ul>
        {
          sidata.map((currsi,index)=>{
            return(
              <ul>
                <li>
                  <button type='button' 
                  onClick={() => remove_si()} 
                  className='mt-3 px-2 py-2 rounded-lg border border-gray-500 text-sm text-black-500'>  {currsi} <Close></Close> </button>
                </li>
              </ul>
            )
          })
        }
    </ul>
</div>

    <hr/>

  
   {/* -----------------------------------AWARDS & HIGHLIGHTS----------------------------------------------------- */}

   <fieldset>
   
   <div className="flex justify-between">
   <legend className="pt-3 text-left font-medium text-2xl underline">Awards and Highlights</legend>
   <button type="button" 
   onClick={() => add_ah()}
   class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
 <AddIcon></AddIcon> ADD
</button>
   </div>

      <form className="award">
      <div class="flex flex-col md:flex-row pt-3">
      <input
          type="text"
          onChange={(e)=>setaddahvalue(e.target.value)}
          value={addahvalue}
          class="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Awards and Highlights"/>
      </div>
      </form>
    </fieldset>

    <div id="ah-container">
<ul>
        {
          ahdata.map((currah,index)=>{
            return(
              <ul>
                <li>
                  <button type='button' 
                  onClick={() => remove_ah()} 
                  className='mt-3 px-2 py-2 rounded-lg border border-gray-500 text-sm text-black-500'>  {currah} <Close></Close> </button>
                </li>
              </ul>
            )
          })
        }
    </ul>
</div>

    <hr/>

{/* ---------------------------------GENERATE BUTTON--------------------------------------------------- */}

<div className="flex justify-center items-center">
  <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
    GENERATE RESUME
  </button>
</div>

    </div>
  );
};

export default Form;