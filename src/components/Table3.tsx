"use client";

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import PreviewComponent from '@/components/preview';
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from "tw-elements-react";
<<<<<<< HEAD
import { FcSalesPerformance, FcWorkflow, FcCancel, FcNext, FcVoicePresentation, FcReading, FcBarChart, FcRating, FcMindMap, FcAudioFile, FcRight } from "react-icons/fc";
=======
import { FcSalesPerformance, FcWorkflow, FcCancel, FcNext, FcVoicePresentation, FcReading, FcBarChart, FcRating, FcMindMap  } from "react-icons/fc";
>>>>>>> 8dd8265e5be77e4ad5879c2bfed2ba2b3bbecf5b
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";

const ToggleEditInputFields = () => {
  // State
  const [isEditMode, setIsEditMode] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);
  const [fields, setFields] = useState<string[]>([""]);
  const [rows, setRows] = useState([{ dropdown: ["1", "2", "3", "4"], input: "" }]);
  const [buttonActive, setButtonActive] = useState("tab1");
  const [layouts, setLayouts] = useState([0]);

  // Handlers for Edit Mode
  const handleToggleChange = () => {
    setIsEditMode((prev) => {
      if (!prev) {
        const alertElement = document.createElement('div');
        alertElement.className = 'p-4 mb-4 text-sm text-white rounded-xl bg-green-500 opacity-90 font-normal fixed top-0 left-1/2 transform -translate-x-1/2';
        alertElement.setAttribute('role', 'alert');
        alertElement.innerHTML = '<span class="font-semibold mr-2">Edit mode: ON</span>';
        
        document.body.appendChild(alertElement);
        setTimeout(() => {
          document.body.removeChild(alertElement);
        }, 2000);
      }
      return !prev;
    });
  };

  // Handlers for Content Visibility
  const handleToggle = () => {
    setContentVisible((prevState) => !prevState);
  };

  // Handlers for Input Fields
  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleRemoveField = (index: number) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleFocusOut = (event: React.FocusEvent<HTMLInputElement>) => {
    if (isEditMode) {
      event.target.readOnly = true;
      setTimeout(() => {
        event.target.readOnly = false;
      }, 0);
    }
  };

  // Handlers for Rows
  const handleAddRow = () => {
    setRows([...rows, { dropdown: ["1", "2", "3", "4"], input: "" }]);
  };

  const handleRemoveRow = () => {
    if (rows.length > 1) {
      setRows(rows.slice(0, -1));
    }
  };

  // Handlers for Layouts
  const addLayout = () => {
    setLayouts([...layouts, layouts.length]);
  };

  const removeLayout = () => {
    if (layouts.length > 1) {
      setLayouts(layouts.slice(0, -1));
    }
  };

  // Years List Generation
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => 2000 + i);

  // Handlers for Button Active State
  const handleButtonClick = (value: string) => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };

// // 
// const ToggleEditInputFields = () => {
//   const [isEditMode, setIsEditMode] = useState(false);

//   const handleToggleChange = () => {
//     setIsEditMode((prev) => {
//       if (!prev) {
//         const alertElement = document.createElement('div');
//         alertElement.className = 'p-4 mb-4 text-sm text-white rounded-xl bg-green-500 opacity-90 font-normal fixed top-0 left-1/2 transform -translate-x-1/2';
//         alertElement.setAttribute('role', 'alert');
//         alertElement.innerHTML = '<span class="font-semibold mr-2">Edit mode: ON</span>'
        
//         document.body.appendChild(alertElement);
//         setTimeout(() => {
//           document.body.removeChild(alertElement);
//         }, 2000);
//       }
//       return !prev;
//     });
//   };

// const [isContentVisible, setContentVisible] = useState(false);

  
//   const handleToggle = () => {
//     setContentVisible(prevState => !prevState);
//   };


//   const [fields, setFields] = useState<string[]>([""]); // เริ่มต้นด้วย input field 1 ช่อง

//   // ฟังก์ชันเพิ่ม input field
//   const handleAddField = () => {
//     setFields([...fields, ""]); // เพิ่มค่าเปล่าเข้าไปใน Array
//   };

//   // ฟังก์ชันลบ input field
//   const handleRemoveField = (index: number) => {
//     setFields(fields.filter((_, i) => i !== index)); // ลบค่าใน index ที่เลือก
//   };

//   const handleFocusOut = (event: React.FocusEvent<HTMLInputElement>) => {
//     if (isEditMode) {
//       event.target.readOnly = true;
//       setTimeout(() => {
//         event.target.readOnly = false;
//       }, 0);
//     }
//   };



//   const [rows, setRows] = useState([
//     { dropdown: ["1", "2", "3", "4"], input: "" },
//   ]);

//   const handleAddRow = () => {
//     setRows([...rows, { dropdown: ["1", "2", "3", "4"], input: "" }]);
//   };

//   const handleRemoveRow = () => {
//     if (rows.length > 1) {
//       setRows(rows.slice(0, -1));
//     }
//   };

 
//     const [buttonActive, setButtonActive] = useState("tab1");
  
//     const handleButtonClick = (value: string) => {
//       if (value === buttonActive) {
//         return;
//       }
//       setButtonActive(value);
//     };


//       const [layouts, setLayouts] = useState([0]); 
    
//       const addLayout = () => {
//         setLayouts([...layouts, layouts.length]); 
//       };
    
//       const removeLayout = () => {
//         if (layouts.length > 1) {
//           setLayouts(layouts.slice(0, -1)); 
//         };
//        }

//        const currentYear = new Date().getFullYear();
//        const years = Array.from({ length: currentYear - 2000 + 1 }, (_, i) => 2000 + i);

      const [layouts, setLayouts] = useState([0]); 
    
      const addLayout = () => {
        setLayouts([...layouts, layouts.length]); 
      };
    
      const removeLayout = () => {
        if (layouts.length > 1) {
          setLayouts(layouts.slice(0, -1)); 
        };
       }


  return (
    <div className="bg-slate-100 w-full">
  <div className="md:flex h-full no-wrap md:-mx-2">
    <div className="md:w-4/12 md:mx-2">
      <div className="bg-white p-2 border-t-8 border-sky-500 rounded-xl shadow-slate-300 shadow-inner">
        <div className="flex flex-col items-center gap-4 image overflow-hidden">

        <p className="text-xl font-bold m-2">
        Prajwal Hallale
    </p>

        <div className="relative my-4">
        <div className="absolute -inset-2">
            <div className="w-30 h-full max-w-sm mx-auto lg:mx-0 opacity-70 blur-lg bg-gradient-to-r from-blue-400 via-sky-300 to-blue-700">
            </div>
        </div>
        <Image
        src='/upload/1730997779759.png'
        alt='imgAddress'
        width={111}
        height={111} 
        className="relative object-cover shrink-0 h-28 w-28 z-10 rounded-xl" />
        </div>


    <div className="text-gray-400 gap-4 mb-2 flex justify-around">
    <button className="bg-slate-100 text-gray-800 text-xs rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md p-2 inline-flex items-center" type="button">
  
    <span className="flex items-center gap-1">
    <FcCancel className="w-5 h-5"/> 
      Delete</span>
    </button>
    <button
      className="bg-slate-100 text-gray-800 text-xs rounded border-b-2 border-green-500 gap-2 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md p-2 inline-flex items-center"
      type="button"
    >
      <span className="flex items-center gap-1">
      Submit
        <FcNext className="w-5 h-5" />
        
      </span>
    </button>
      </div>

    <div className="bg-white p-3 w-full">
    <div className="flex items-center gap-2 text-gray-900 leading-8 font-semibold">
    <FcWorkflow className="w-5 h-5"/>
    <h1 className="tracking-wide">Summary</h1>
    
    </div>
        <div className="shadow-xl">
            <label>
            <textarea
            className="h-32 w-full bg-white text-md rounded-lg border border-none my-2" 
            placeholder="No data of Summary">
            </textarea> 
            </label>
         </div>   
            <div className="flex items-center justify-start rounded-xl border-2 border-inner shadow-gray-199 shadow-inner first-line:border-zine-500" >
             <div className="w-full flex flex-col shadow-slate-100 text-md md:text-sm p-4">
             

            <div className='flex items-center justify-between'>

<span className="text-zine-800 font-semibold">Status</span>
  
  <select className="bg-transparent py-2" name="status" title="status">
    
    <option className="bg-green-500" value="course1">Course title</option>
    <option className="bg-blue-500"value="course2">Course title</option>
    <option className="bg-orange-500" value="course3">Course title</option>
  </select>
</div>


<div className="flex flex-row justify-between w-full py-2">
<span className="text-gray-800 font-semibold">No.</span>
<span className="text-gray-800 bg-transparent border-none rounded-lg">10001</span>
</div>

<div className="flex flex-row justify-between w-full py-2">
<span className="text-gray-800 font-semibold">Update</span>
<span className="text-gray-800 bg-transparent border-none rounded-lg">2024 Nov 12</span>
</div>

</div>
</div>
</div>


           
        </div>
      </div>
      <div className="bg-white mt-2 p-2 border-t-8 -inset-2 border-sky-500 rounded-xl shadow-zine-400 shadow-inner">

   
      <div className="flex items-center gap-2 text-gray-900 leading-8 font-semibold">
      <FcSalesPerformance className="w-5 h-5" />
      <h1 className="tracking-wide">History</h1>

        </div>

        <div className="grid grid-cols-1 bg-slate-50 shadow-inner rounded-xl border-2 border-inner shadow-zinc-500/49 shadow-innermost-line:border-zine-500" >
             <div className="w-full flex flex-col items-start shadow-blue-500/40 text-xs decoration-transparent">


            <div className="flex flex-row items-center w-full justify-between">
  <label htmlFor="status" className="text-gray-800">Status</label>
  
  <select className="bg-transparent">
    <option className="bg-green-500 py-1 px-2" value="course1">Course title</option>
    <option className="bg-blue-500 py-1 px-2 "value="course2">Course title</option>
    <option className="bg-orange-500 py-1 px-2" value="course3">Course title</option>
  </select>
</div>


<div className="flex flex-row items-center w-full">
  <label htmlFor="cvno" className="text-gray-800">CV No</label>
  <input
  title="cvno"
    name="cvno"
    defaultValue={10001}
    className="text-gray-800 bg-transparent text-right border-none rounded-lg px-2 py-1 flex-grow"
  />
</div>


<div className="flex flex-row bg-transparent overflow-hidden w-full">
  <label htmlFor="update" className="text-gray-800">Update</label>
  <input
  title="ีupdate"
    name="update"
    defaultValue={10001}
    className="text-gray-800 text-right border-none rounded-lg px-2 py-1 flex-grow"
  />
  </div>
</div>
  </div>
      </div>
    </div>



   
    <div className="w-full md:w-9/12 mx-2">
 
     
      <div className="bg-white shadow-sm rounded">
    
      <div className="w-full bg-white mx-auto">
  <div className="border-t-8 border-sky-500 rounded-xl shadow-slate-300 shadow-inner">
    <div className="flex flex-wrap">
    <TETabs className="shadow-xl rounded-lg w-full font-semibold bg-slate-100 py-2 mx-2">
        <TETabsItem
          onClick={() => handleButtonClick("tab1")}
          active={buttonActive === "tab1"}
          tag="button"
        >
          PERSONAL
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab2")}
          active={buttonActive === "tab2"}
          tag="button"
        >
          EXPERIENCE
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab3")}
          active={buttonActive === "tab3"}
          tag="button"
        >
          FILE
        </TETabsItem>
        <TETabsItem
          onClick={() => handleButtonClick("tab4")}
          active={buttonActive === "tab4"}
          tag="button"
        >
<<<<<<< HEAD
          EMAIL
=======
          TEST
>>>>>>> 8dd8265e5be77e4ad5879c2bfed2ba2b3bbecf5b
        </TETabsItem>

        

    <ul className="flex items-center ml-auto justify-end space-x-2 sm:justify-around sm:w-full">
    <label className="relative inline-block w-16 h-5 ml-auto text-xs font-thin mt-1">

      
<input
title="toggle"
  type="checkbox"
  id="toggleEdit"
  className="peer"
  onChange={handleToggleChange}
/>

<span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 duration-300 
  before:content-[''] before:absolute before:w-8 before:h-4 before:bottom-0.5 before:left-0.5
  before:bg-white before:duration-300 peer-checked:before:translate-x-7 peer-checked:bg-blue-500 text-right font-semibold p-1 xt-white">Edit</span>
</label>
			<li className="inline-block">
				<a target="_blank" className="hover:text-[#3b5998]" href="#" title="Share to Facebook">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 512 512">
						<path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
						</path>
					</svg>
				</a>
			</li>
			<li className="inline-block">
				<a target="_blank" className="hover:text-[#00acee]" href="#" title="Share to Twitter">
					<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
						</path>
					</svg>
				</a>
			</li>
			<li className="inline-block">
				<a target="_blank" className="hover:text-red-700" href="#" title="Share to Instagram">
					<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z">
						</path>
						<path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z">
						</path>
						<path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z">
						</path>
					</svg>
				</a>
			</li>
		</ul>
    </TETabs>
  </div>
</div>
</div>

<TETabsContent>
<TETabsPane show={buttonActive === "tab1"}>

        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
          <FcVoicePresentation className="w-8 h-8 m-2" />
          </span>
          <span className="tracking-wide">
            Profiles</span>
            </div>

            
   
    
    
  <div className="grid grid-cols-1 md:grid-cols-2 mx-2 font-thin text-md md:text-sm sm:text-md divide-x-2">
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
      <label className="font-thin mx-2">Firstname</label>
        <input
          name="firstname"
          title="firstname"
          className="text-right flex flex-grow focus:outline-none focus:font-semibold"
          defaultValue=""
          readOnly={!isEditMode}
          onBlur={handleFocusOut}
        />
      </div>
      <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
      <label className="font-thin mx-2">Lastname</label>
        <input
          name="  lastname"
          title="lastname"
          className="text-right flex flex-grow focus:outline-none focus:font-semibold"
          defaultValue=""
          readOnly={!isEditMode}
          onBlur={handleFocusOut}
        />
      </div>
      <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
    
      <label className="font-thin mx-2">Position</label>
    <input
      name="position"
      title="position"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
  <label className="font-thin mx-2">CV No.</label>
    <input
      name="cvno"
      title="cvno"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
    
  <label className="font-thin mx-2">Status</label>
    <input
      name="status"
      title="status"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
  <label className="font-thin mx-2">Consent</label>
    <input
      name="consent"
      title="consent"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
    
  <label className="font-thin mx-2">Email</label>
    <input
      name="email"
      title="email"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
  <label className="font-thin mx-2">Age</label>
    <input
      name="age"
      title="age"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
    
  <label className="font-thin mx-2">Salary</label>
    <input
      name="birthdate"
      title="status"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
  <label className="font-thin mx-2">Address</label>
    <input
      name="consent"
      title="consent"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
    
  <label className="font-thin mx-2">Date of birth</label>
    <input
      name="status"
      title="status"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
  <label className="font-thin mx-2">Last Position</label>
    <input
      name="consent"
      title="consent"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>      <div className="flex items-center px-6 py-4 m-2 w-full divide-x">

    
  <label className="font-thin mx-2">Phone</label>
    <input
      name="status"
      title="status"
      className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  <div className="flex items-center px-6 py-4 m-2 w-full divide-x">
  <label className="font-thin mx-2">Noticed Period</label>
    <input
      name="consent"
      title="consent"
     className="text-right flex flex-grow focus:outline-none focus:font-semibold"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
  </div>
  </div>   
  


  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
        <button
          onClick={handleToggle} // Attach the toggle function
          className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
        >
          {isContentVisible ? 'Hide' : 'Show'} Full Information
        </button>
      </div>

      

            {isContentVisible && (
              <>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 rounded-lg border-t-8 border-sky-500" 
            id="profile"
            role="tabpanel" 
            aria-labelledby="profile-tab">
          <span className="text-green-500">
          <FcReading  className="w-8 h-8 m-2" />
          </span>
          <span className="tracking-wide">
          Education</span>
          </div>
        
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 w-full text-md gap-4">
      <div className="col-span-3 mx-2">   
        <label className="text-gray-500 text-xs mx-4">MAJOR</label>
    
      <div className="flex flex-grow justify-end w-full">
      <input
      name="major"
      title="major"
     className="text-right flex flex-grow focus:outline-none"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
      </div>
       </div>

       

       <div className="col-span-1 mx-2">     
        <div>   
        <label className="text-gray-500 text-xs mx-4">GRADUATE YEAR</label>
        </div>
      <div className="flex flex-grow justify-end w-full">
      <input
      name="year"
      title="year"
     className="text-right flex flex-grow focus:outline-none"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
      </div>
      </div>
  



      {/* Row 2 */}
      <div className="col-span-3 mx-2">   
        <div className="">
        <label className="text-xs text-gray-500 mx-4">UNIVERSITY</label>
      </div>
      {/* Row 2: Input Field */}
      <div className="flex flex-grow justify-end w-full">
      <input
      name="university"
      title="university"
     className="text-right flex flex-grow focus:outline-none"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
      </div>
      
      </div>



      <div className="col-span-1 mx-2">        
        <div className="">
        <label className="text-gray-500 text-xs mx-4">GPA</label>
      </div>
      {/* Row 2: Input Field */}
      <div className="flex flex-grow justify-end w-full">
      <input
      name="gpa"
      title="gpa"
     className="text-right flex flex-grow focus:outline-none"
      defaultValue=""
      readOnly={!isEditMode}
      onBlur={handleFocusOut}
    />
      </div>
      </div>
    </div>


      
    <div className="flex items-center font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
          <FcBarChart   className="w-8 h-8 m-2" />
          </span>
          <span className="tracking-wide">
          Skills</span>
          <div className="flex ml-auto mx-9 gap-4">
        <button
          onClick={handleAddRow}
        >
          <BsPlusSquare className='h-5 w-5'/>
        </button>
        <button
          onClick={handleRemoveRow}
          title="Remove Row"
        >
      <BsDashSquare className='h-5 w-5'/>
        </button>
      </div>
</div>
<div className="p-4">
      <div className="grid grid-cols-[1fr_3fr] gap-4">
        {/* Row 1 */}
        <div>
          <select className="w-full p-2 border rounded">
            {rows[0].dropdown.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Input"
          />
        </div>
        {/* Dynamic Rows */}
        {rows.slice(1).map((row, index) => (
          <React.Fragment key={index}>
            <div>
              <select className="w-full p-2 border rounded">
                {row.dropdown.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Input"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
     
      </div>

   
    <div className="flex items-center font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
          <FcRating  className="w-8 h-8 m-2" />
          </span>
          <span className="tracking-wide">
          Certificates</span>
          <div className="flex ml-auto">
                <button
        type="button"
        onClick={handleAddField}
      >
     <BsPlusSquare className='h-5 w-5 mx-14'/>
      </button>
</div>
</div> 

<div className="bg-white rounded-lg shadow-lg w-full mx-auto">
      {fields.map((value, index) => (
        <div key={index} className="flex items-center mb-3">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              const newFields = [...fields];
              newFields[index] = e.target.value;
              setFields(newFields);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={`Input ${index + 1}`}
          />
          <button
          
            type="button"
            onClick={() => handleRemoveField(index)}
          >
        <BsDashSquare className='h-5 w-5 mx-4'/>
          </button>
        </div>
      ))}

</div>
<<<<<<< HEAD
=======

    </>
    
            )
          }
      
      </TETabsPane>
      </TETabsContent> 
            </div>

        
         
   
          <TETabsContent>
<TETabsPane show={buttonActive === "tab2"}>

        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
          <FcMindMap className="w-8 h-8 m-2" />
          </span>
          <span className="tracking-wide">
            Experience</span>
            </div>
         
            <div>
      <div className="mb-4 flex gap-4">
        <button
          onClick={addLayout}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          +
        </button>
        <button
          onClick={removeLayout}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          -
        </button>
      </div>

      {/* Render Layouts */}
      {layouts.map((layout, index) => (
        <div
          key={index}
          className="flex flex-wrap md:flex-nowrap mb-4 border border-gray-300"
        >
          {/* Column ซ้าย */}
          <div className="w-full md:w-1/3 space-y-4">
            <div className="bg-blue-300 p-4">Row 1 (Left Column)</div>
            <div className="bg-blue-400 p-4">Row 2 (Left Column)</div>
            <div className="bg-blue-500 p-4">Row 3 (Left Column)</div>
          </div>
          {/* Column ขวา */}
          <div className="w-full md:w-2/3 bg-red-300 p-4">
            Right Column (Large Row)
          </div>
        </div>
      ))}
    </div>
    </TETabsPane>
    </TETabsContent>    

    </div>
    </div>
    </div>
  
>>>>>>> 8dd8265e5be77e4ad5879c2bfed2ba2b3bbecf5b

    </>
    
            )
          }
      
      </TETabsPane>
      </TETabsContent> 
        

        
         
   


          <TETabsContent>
<TETabsPane show={buttonActive === "tab2"}>



         <div className="flex items-center font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
          <FcMindMap   className="w-8 h-8 m-2" />
          </span>
          <span className="tracking-wide">
          Experience</span>
          <div className="flex ml-auto mx-9 gap-4">
          <button
            title="addexp"
            type="button"
          onClick={addLayout}
        >
          <BsPlusSquare className='h-5 w-5'/>
        </button>
        <button
        title="delexp"
        type="button"
          onClick={removeLayout}
        >
      <BsDashSquare className='h-5 w-5'/>
        </button></div>
      </div>





            <div>


      {/* Render Layouts */}
      {layouts.map((layout, index) => (
        <div
          key={index}
          className="flex flex-wrap md:flex-nowrap"
        >
          {/* Column ซ้าย */}
          <div className="w-full md:w-1/3 space-y-2 shadow-xl m-2 rounded-md">
            <div className="p-2"> 
              
               <label className="text-gray-500 text-xs">COMPANY</label>
    <div className="flex flex-grow justify-end w-full">
    <input
    name="company"
    title="company"
   className="text-right flex flex-grow focus:outline-none"
    defaultValue=""
    readOnly={!isEditMode}
    onBlur={handleFocusOut}
  /></div></div>
            <div className="p-2">  
              
              <label className="text-gray-500 text-xs">POSITION</label>
    <div className="flex flex-grow justify-end w-full">
    <input
    name="position"
    title="position"
   className="text-right flex flex-grow focus:outline-none"
    defaultValue=""
    readOnly={!isEditMode}
    onBlur={handleFocusOut}
  /></div></div>
            <div className="flex flex-row justify-end">

            
            <select name="frommonth"
            title="frommonth"
            className="border border-gray-300 rounded-xl text-gray-700 focus:outline-none">
  <option value="" disabled>
    Month
  </option>            
  <option value="jan">Jan</option>
  <option value="feb">Feb</option>
  <option value="mar">Mar</option>
  <option value="apr">Apr</option>
  <option value="may">May</option>
  <option value="jun">Jun</option>
  <option value="jul">Jul</option>
  <option value="aug">Aug</option>
  <option value="sep">Sep</option>
  <option value="oct">Oct</option>
  <option value="nov">Nov</option>
  <option value="dec">Dec</option>
</select>

<select name="fromyear"
title="fromyear"
className="border border-gray-300 rounded-xl text-gray-700">
  <option value="" disabled>
    Year
  </option>
      {years.map((year) => (
        
        <option key="{year}" value="{year}">
          {year}
        </option>
      ))}
    </select>
            <label className="m-2">-</label>
    <select name="tomonth"
            title="tomonth"
            className="border border-gray-300 rounded-xl text-gray-700">
  <option value="" disabled>
    Month
  </option>            
  <option value="jan">Jan</option>
  <option value="feb">Feb</option>
  <option value="mar">Mar</option>
  <option value="apr">Apr</option>
  <option value="may">May</option>
  <option value="jun">Jun</option>
  <option value="jul">Jul</option>
  <option value="aug">Aug</option>
  <option value="sep">Sep</option>
  <option value="oct">Oct</option>
  <option value="nov">Nov</option>
  <option value="dec">Dec</option>
</select>

<select name="toyear"
title="toyear"
className="border border-gray-300 rounded-xl text-gray-700">
  <option value="" disabled>
    Year
  </option>
      {years.map((year) => (
        
        <option key="{year}" value="{year}">
          {year}
        </option>
      ))}
    </select>

            </div>
          </div>
       
          <div className="w-full md:w-2/3 rounded-xl shadow-xl">
          <label className="text-gray-500 text-xs">
            RESPONDSIBLE
            </label>
            <textarea
            className="h-40 w-full bg-white text-md border border-none p-2" 
            placeholder="No data of Job description">
            </textarea>
       
          </div>
        </div>
      ))} 
    </div>
    </TETabsPane>
    </TETabsContent>    


    <TETabsContent>
    <TETabsPane show={buttonActive === "tab3"}>
    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="text-green-500">
          <FcAudioFile className="w-8 h-8 m-2" />
          </span> 
          <span className="tracking-wide">
            Files</span>

            <button
          onClick={handleAddRow}
        >
          <BsPlusSquare className='h-5 w-5'/>
        </button>
        <button
          onClick={handleRemoveRow}
          title="Remove Row"
        >
      <BsDashSquare className='h-5 w-5'/>
        </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mx-2 font-thin text-md md:text-sm sm:text-md divide-x-2">
            <div>       
            <PreviewComponent/>
            </div>
            <div className="flex items-center px-6 py-4 m-2 w-full divide-x">       

    <label htmlFor="dropzone-file" 
    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div>
</div>
      
  
    </TETabsPane>
    </TETabsContent>



    <TETabsContent>
    <TETabsPane show={buttonActive === "tab4"}>
  <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected={true}>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  
  </TETabsPane>
  </TETabsContent>
    </div>
    </div>
    </div>
    </div>
  );
};

export default ToggleEditInputFields;