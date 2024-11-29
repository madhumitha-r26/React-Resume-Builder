import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="pt-5">
      <h2 className="pt-3 text-left font-medium text-2xl underline">Heading </h2>
      <form className="flex flex-col md:flex-row justify-between pt-3">
        <input
          type="text"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Name"
        />
        <input
          type="text"
          class="w-full md:w-3/6 py-3 px-2 ml-5 xl:block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Job Title"
        />
      </form>

      <form className="flex flex-col md:flex-row justify-between pt-3">
        <input
          type="email"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Email"
        />

        <input
          type="tel"
          class="w-full md:w-3/6 py-3 px-2 ml-5 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Phone"
        />
      </form>

    <br/>
    <hr/>

    <h2 className="pt-3 text-left font-medium text-2xl underline">Links </h2>
      <form className="flex flex-col md:flex-row justify-between pt-3">
        <input
          type="url"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter LinkedIn Url"
        />
        <input
          type="url"
          class="w-full md:w-3/6 py-3 px-2 ml-5 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter GitHub Url"
        />
      </form>

      <form className="flex flex-col md:flex-row justify-between pt-3">
        <input
          type="url"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Website Url"
        />

        <input
          type="url"
          class="w-full md:w-3/6 py-3 px-2 ml-5 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Behance Url"
        />
      </form>
<br/>
      <hr/>

    <h2 className="pt-3 text-left font-medium text-2xl underline">Education </h2>
    <form className="flex flex-col md:flex-row pt-3">
    <input
          type="url"
          class="w-full py-3 px-2 border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter University Name"
        />
    </form>
  

      <form className="flex flex-col md:flex-row justify-between pt-3">
        <input
          type="text"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Degree"
        />

        <input
          type="text"
          class="w-full md:w-3/6 py-3 px-2 ml-5 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter Grade"
        />
      </form>

      <form className="flex flex-col md:flex-row justify-between pt-3">
      <div className="flex flex-col w-full">
      <label>Start Date</label>
        <input
          type="month"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
        </div>
        <div className="flex flex-col w-full">
<label>End Date</label>
        <input
          type="month"
          class="w-full md:w-3/6 py-3 px-2 block border-gray-200 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
        />
        </div>
      </form>

    </div>
  );
};

export default Form;
