import React, { useState } from "react";
import "./Form.css";
import AddIcon from '@mui/icons-material/Add';
import { Delete, Close } from "@mui/icons-material";
import { GitHub, LinkedIn, Public } from "@mui/icons-material";

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

  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    careerObjective: '',
    links: {
      LinkedIn: '',
      Github: '',
      Website: '',
      Other_link: ''
    },
    education: [],
    experience: [],
    projects: [],
    certificates: [],
    volunteering: [],
    skills: [], 
    awards: []  
  });

  const [addsivalue, setaddsivalue] = useState("");
  const [sidata, setsidata] = useState([]);
  const [addahvalue, setaddahvalue] = useState("");
  const [ahdata, setahdata] = useState([]);
  const [generatedResume, setGeneratedResume] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLinkChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      links: {
        ...formData.links,
        [name]: value
      }
    });
  };

  const handleGenerateResume = () => {
    const resume = `
      <b>Name:</b> ${formData.name} <br/> 
      <b>Job Title:</b> ${formData.jobTitle} <br/>
      <b>Email:</b> ${formData.email} <br/>
      <b>Phone:</b> ${formData.phone} <br/>
      <b>Career Objective:</b> ${formData.careerObjective} <br/>
      <b>Links:</b> ${JSON.stringify(formData.links, null, 2)} <br/>
      <b>Education:</b> ${JSON.stringify(formData.education, null, 2)} <br/>
      <b>Experience:</b> ${JSON.stringify(formData.experience, null, 2)} <br/>
      <b>Projects:</b> ${JSON.stringify(formData.projects, null, 2)} <br/>
      <b>Certificates:</b> ${JSON.stringify(formData.certificates, null, 2)} <br/>
      <b>Volunteering:</b> ${JSON.stringify(formData.volunteering, null, 2)} <br/>
      <b>Skills & Interests:</b> ${sidata.join(', ')} <br/>
      <b>Awards & Highlights:</b> ${ahdata.join(', ')}
    `;
    setGeneratedResume(resume);
  };


  const add_si = () => {
    if (addsivalue) {
      setsidata([...sidata, addsivalue]);
      setaddsivalue(""); 
    }
  };
  
  const add_ah = () => {
    if (addahvalue) {
      setahdata([...ahdata, addahvalue]);
      setaddahvalue("");
    }
  };

  const remove_si = (index) => {
    setsidata(sidata.filter((_, i) => i !== index));
  };

  const remove_ah = (index) => {
    setahdata(ahdata.filter((_, i) => i !== index));
  };

  return (
    <div className="pt-5">
      {/* -------------------------------HEADING--------------------------------------------------------- */}
      <fieldset>
        <legend className="pt-3 text-left font-medium text-2xl underline">Heading</legend>
        <form className="heading">
          <div className="grid grid-cols-1 md:grid-cols-4 pt-3 ">
            <label className="mt-3">Name</label>
            <input
              type="text"
              name="name"
              id="hd_name"
              onChange={handleInputChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="Your Name"
            />

            <label className="mt-3">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="hd_jobtitle"
              onChange={handleInputChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="Your Job Title"
            />

            <label className="mt-3">Email Id</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="Your Email"
            />

            <label className="mt-3">Phone Number</label>
            <input
              type="tel"
              name="phone"
              onChange={handleInputChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="1234-567-890"
            />
          </div>

          <div className="flex flex-col md:flex-row pt-3">
            <label className="mt-3 mr-40">Career Objective</label>
            <textarea
              name="careerObjective"
              onChange={handleInputChange}
              className="w-full md:w-9/12 h-24 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="Enter Career Objective"
            ></textarea>
          </div>
        </form>
      </fieldset>
      <hr />

      {/* -------------------------------LINKS--------------------------------------------------------- */}
      <fieldset>
        <legend className="pt-3 text-left font-medium text-2xl underline">Links</legend>
        <form className="links">
          <div className="grid grid-cols-1 md:grid-cols-4 pt-3 ">
            <label className="mt-3">LinkedIn</label>
            <input
              type="url"
              name=""
              onChange={handleLinkChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="https://www.linkedin.com/in/"
            />

            <label className="mt-3">GitHub</label>
            <input
              type="url"
              name="github"
              onChange={handleLinkChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="https://github.com/"
            />

            <label className="mt-3">Website</label>
            <input
              type="url"
              name="website"
              onChange={handleLinkChange}
              className=" w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="https://www.yourwebsite.com/"
            />

            <label className="mt-3">other_link</label>
            <input
              type="url"
              name="other_link"
              onChange={handleLinkChange}
              className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="https://www.other_link.net/"
            />
          </div>
        </form>
      </fieldset>
      <hr />

      {/* ------------------------------------EDUCATION---------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Education</legend>
          <button type="button" onClick={addEducationForm} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
            <AddIcon /> ADD
          </button>
        </div>
        {educationForms.map((form, index) => (
          <div key={form.id}>
            <form className="education">
              <div className="flex justify-end">
                {educationForms.length > 1 && (
                  <button type="button" onClick={() => removeEducationForm(form.id)} className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500">
                    <Delete /> Delete
                  </button>
                )}
              </div>

              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-24">University</label>
                <input
                  type="text"
                  name={`education[${index}].university`}
                  onChange={(e) => {
                    const newEducation = [...formData.education];
                    newEducation[index] = { ...newEducation[index], university: e.target.value };
                    setFormData({ ...formData, education: newEducation });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter University"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 pt-3">
                <label className="mt-3">Degree</label>
                <input
                  type="text"
                  name={`education[${index}].degree`}
                  onChange={(e) => {
                    const newEducation = [...formData.education];
                    newEducation[index] = { ...newEducation[index], degree: e.target.value };
                    setFormData({ ...formData, education: newEducation });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Degree"
                />
                <label className="mt-3">Grade</label>
                <select
                  name={`education[${index}].grade`}
                  onChange={(e) => {
                    const newEducation = [...formData.education];
                    newEducation[index] = { ...newEducation[index], grade: e.target.value };
                    setFormData({ ...formData, education: newEducation });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                >
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
                  name={`education[${index}].startDate`}
                  onChange={(e) => {
                    const newEducation = [...formData.education];
                    newEducation[index] = { ...newEducation[index], startDate: e.target.value };
                    setFormData({ ...formData, education: newEducation });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
                <label className="mt-3">End-Date</label>
                <input
                  type="month"
                  name={`education[${index}].endDate`}
                  onChange={(e) => {
                    const newEducation = [...formData.education];
                    newEducation[index] = { ...newEducation[index], endDate: e.target.value };
                    setFormData({ ...formData, education: newEducation });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
              </div>
            </form>
          </div>
        ))}
      </fieldset>
      <hr />

      {/* ------------------------------------EXPERIENCE---------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Experience</legend>
          <button type="button" onClick={addExperienceForm} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
            <AddIcon /> ADD
          </button>
        </div>

        {experienceForms.map((form, index) => (
          <div key={form.id}>
            <form className="experience">
              <div className="flex justify-end">
                {experienceForms.length > 1 && (
                  <button type="button" onClick={() => removeExperienceForm(form.id)} className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500">
                    <Delete /> Delete
                  </button>
                )}
              </div>

              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-24">Company</label>
                <input
                  type="text"
                  name={`experience[${index}].company`}
                  onChange={(e) => {
                    const newExperience = [...formData.experience];
                    newExperience[index] = { ...newExperience[index], company: e.target.value };
                    setFormData({ ...formData, experience: newExperience });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Company Name"
                />
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-28">Job Role</label>
                <input
                  type="text"
                  name={`experience[${index}].jobRole`}
                  onChange={(e) => {
                    const newExperience = [...formData.experience];
                    newExperience[index] = { ...newExperience[index], jobRole: e.target.value };
                    setFormData({ ...formData, experience: newExperience });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Job Role"
                />
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20">Description</label>
                <textarea
                  type="text"
                  name={`experience[${index}].description`}
                  onChange={(e) => {
                    const newExperience = [...formData.experience];
                    newExperience[index] = { ...newExperience[index], description: e.target.value };
                    setFormData({ ...formData, experience: newExperience });
                  }}
                  className="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Job Description"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 pt-3 ">
                <label className="mt-3">Start-Date</label>
                <input
                  type="month"
                  name={`experience[${index}].startDate`}
                  onChange={(e) => {
                    const newExperience = [...formData.experience];
                    newExperience[index] = { ...newExperience[index], startDate: e.target.value };
                    setFormData({ ...formData, experience: newExperience });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
                <label className="mt-3">End-Date</label>
                <input
                  type="month"
                  name={`experience[${index}].endDate`}
                  onChange={(e) => {
                    const newExperience = [...formData.experience];
                    newExperience [index] = { ...newExperience[index], endDate: e.target.value };
                    setFormData({ ...formData, experience: newExperience });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
              </div>
            </form>
          </div>
        ))}
      </fieldset>
      <hr />

      {/* ------------------------------------PROJECTS---------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Projects</legend>
          <button type="button" onClick={addProjectForm} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
            <AddIcon /> ADD
          </button>
        </div>

        {projectForms.map((form, index) => (
          <div key={form.id}>
            <form className="projects">
              <div className="flex justify-end">
                {projectForms.length > 1 && (
                  <button type="button" onClick={() => removeProjectForm(form.id)} className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500">
                    <Delete /> Delete
                  </button>
                )}
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20">Project Title</label>
                <input
                  type="text"
                  name={`projects[${index}].title`}
                  onChange={(e) => {
                    const newProjects = [...formData.projects];
                    newProjects[index] = { ...newProjects[index], title: e.target.value };
                    setFormData({ ...formData, projects: newProjects });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Project Title"
                />
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20">Description</label>
                <textarea
                  type="text"
                  name={`projects[${index}].description`}
                  onChange={(e) => {
                    const newProjects = [...formData.projects];
                    newProjects[index] = { ...newProjects[index], description: e.target.value };
                    setFormData({ ...formData, projects: newProjects });
                  }}
                  className="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Project Description"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 pt-3 ">
                <label className="mt-3">Start-Date</label>
                <input
                  type="month"
                  name={`projects[${index}].startDate`}
                  onChange={(e) => {
                    const newProjects = [...formData.projects];
                    newProjects[index] = { ...newProjects[index], startDate: e.target.value };
                    setFormData({ ...formData, projects: newProjects });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
                <label className="mt-3">End-Date</label>
                <input
                  type="month"
                  name={`projects[${index}].endDate`}
                  onChange={(e) => {
                    const newProjects = [...formData.projects];
                    newProjects[index] = { ...newProjects[index], endDate: e.target.value };
                    setFormData({ ...formData, projects: newProjects });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
              </div>
            </form>
          </div>
        ))}
      </fieldset>
      <hr />

      {/* ------------------------------------CERTIFICATIONS---------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Certifications</legend>
          <button type="button" onClick={addCertificateForm} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm hover ```javascript
:bg-gray-50">
            <AddIcon /> ADD
          </button>
        </div>
        {certificateForms.map((form, index) => (
          <div key={form.id}>
            <form className="certificate">
              <div className="flex justify-end">
                {certificateForms.length > 1 && (
                  <button type="button" onClick={() => removeCertificateForm(form.id)} className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500">
                    <Delete /> Delete
                  </button>
                )}
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20 w-auto">Certificate Name</label>
                <input
                  type="text"
                  name={`certificates[${index}].name`}
                  onChange={(e) => {
                    const newCertificates = [...formData.certificates];
                    newCertificates[index] = { ...newCertificates[index], name: e.target.value };
                    setFormData({ ...formData, certificates: newCertificates });
                  }}
                  className="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Certificate Name"
                />
              </div>

              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20 w-auto">Certificate Link</label>
                <input
                  type="url"
                  name={`certificates[${index}].link`}
                  onChange={(e) => {
                    const newCertificates = [...formData.certificates];
                    newCertificates[index] = { ...newCertificates[index], link: e.target.value };
                    setFormData({ ...formData, certificates: newCertificates });
                  }}
                  className="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Certificate Link"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 pt-3">
                <label className="mt-3">Issuer</label>
                <select
                  name={`certificates[${index}].issuer`}
                  onChange={(e) => {
                    const newCertificates = [...formData.certificates];
                    newCertificates[index] = { ...newCertificates[index], issuer: e.target.value };
                    setFormData({ ...formData, certificates: newCertificates });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                >
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
                  name={`certificates[${index}].issuedDate`}
                  onChange={(e) => {
                    const newCertificates = [...formData.certificates];
                    newCertificates[index] = { ...newCertificates[index], issuedDate: e.target.value };
                    setFormData({ ...formData, certificates: newCertificates });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
              </div>
            </form>
          </div>
        ))}
      </fieldset>
      <hr />

      {/* ---------------------------------------VOLUNTEERING------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Volunteering</legend>
          <button type="button" onClick={addVolunteerForm} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
            <AddIcon /> ADD
          </button>
        </div>

        {volunteerForms.map((form, index) => (
          <div key={form.id}>
            <form className="volunteer">
              <div className="flex justify-end">
                {volunteerForms.length > 1 && (
                  <button type="button" onClick={() => removeVolunteerForm(form .id)} className="mt-3 px-3 py-3 rounded-lg text-sm text-red-500 border border-red-500">
                    <Delete /> Delete
                  </button>
                )}
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20">Organization</label>
                <input
                  type="text"
                  name={`volunteering[${index}].organization`}
                  onChange={(e) => {
                    const newVolunteering = [...formData.volunteering];
                    newVolunteering[index] = { ...newVolunteering[index], organization: e.target.value };
                    setFormData({ ...formData, volunteering: newVolunteering });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Organization Name"
                />
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-16">Volunteer Role</label>
                <input
                  type="text"
                  name={`volunteering[${index}].jobRole`}
                  onChange={(e) => {
                    const newVolunteering = [...formData.volunteering];
                    newVolunteering[index] = { ...newVolunteering[index], jobRole: e.target.value };
                    setFormData({ ...formData, volunteering: newVolunteering });
                  }}
                  className="w-full md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Volunteer Role"
                />
              </div>
              <div className="flex flex-col md:flex-row pt-3">
                <label className="mt-3 mr-20">Description</label>
                <textarea
                  type="text"
                  name={`volunteering[${index}].description`}
                  onChange={(e) => {
                    const newVolunteering = [...formData.volunteering];
                    newVolunteering[index] = { ...newVolunteering[index], description: e.target.value };
                    setFormData({ ...formData, volunteering: newVolunteering });
                  }}
                  className="w-full h-1/2 md:w-10/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                  placeholder="Enter Volunteering Description"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 pt-3 ">
                <label className="mt-3">Start-Date</label>
                <input
                  type="month"
                  name={`volunteering[${index}].startDate`}
                  onChange={(e) => {
                    const newVolunteering = [...formData.volunteering];
                    newVolunteering[index] = { ...newVolunteering[index], startDate: e.target.value };
                    setFormData({ ...formData, volunteering: newVolunteering });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
                <label className="mt-3">End-Date</label>
                <input
                  type="month"
                  name={`volunteering[${index}].endDate`}
                  onChange={(e) => {
                    const newVolunteering = [...formData.volunteering];
                    newVolunteering[index] = { ...newVolunteering[index], endDate: e.target.value };
                    setFormData({ ...formData, volunteering: newVolunteering });
                  }}
                  className="w-full md:w-11/12 py-3 px-2 mt-3 xl:block border-gray-200 rounded-lg text-sm"
                />
              </div>
            </form>
          </div>
        ))}
      </fieldset>
      <hr />

      {/* ------------------------------------SKILLS & INTERESTS----------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Skills and Interest</legend>
          <button type="button" onClick={add_si} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
            <AddIcon /> ADD
          </button>
        </div>

        <form className="skill">
          <div className="flex flex-col md:flex-row pt-3">
            <input
 type="text"
              onChange={(e) => setaddsivalue(e.target.value)}
              value={addsivalue}
              className="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="Enter Skills and Interest"
            />
          </div>
        </form>
      </fieldset>

      <div id="si-container">
        <ul>
          {sidata.map((currsi, index) => (
            <li key={index}>
              <button type='button' onClick={() => remove_si(index)} className='mt-3 px-2 py-2 rounded-lg border border-gray-500 text-sm text-black-500'>
                {currsi} <Close />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      {/* -----------------------------------AWARDS & HIGHLIGHTS----------------------------------------------------- */}
      <fieldset>
        <div className="flex justify-between">
          <legend className="pt-3 text-left font-medium text-2xl underline">Awards and Highlights</legend>
          <button type="button" onClick={add_ah} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
            <AddIcon /> ADD
          </button>
        </div>

        <form className="award">
          <div className="flex flex-col md:flex-row pt-3">
            <input
              type="text"
              onChange={(e) => setaddahvalue(e.target.value)}
              value={addahvalue}
              className="w-full md:w-full py-3 px-2 mt-3 mr-4 xl:block border-gray-200 rounded-lg text-sm"
              placeholder="Enter Awards and Highlights"
            />
          </div>
        </form>
      </fieldset>

      <div id="ah-container">
        <ul>
          {ahdata.map((currah, index) => (
            <li key={index}>
              <button type='button' onClick={() => remove_ah(index)} className='mt-3 px-2 py-2 rounded-lg border border-gray-500 text-sm text-black-500'>
                {currah} <Close />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr />
      {/* ---------------------------------GENERATE BUTTON--------------------------------------------------- */}

      <div className="flex justify-center items-center">
        <button type="button" 
          onClick={handleGenerateResume}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-black text-white shadow-sm">
          GENERATE RESUME
        </button>
      </div>

      <div className="bg-stone-50 mt-5 p-5" id="my-resume" dangerouslySetInnerHTML={{ __html: generatedResume }}></div>

    </div>
  );
};

export default Form;
