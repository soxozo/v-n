'use client'

import { useState } from "react";
import Image from "next/image";

const positions = ["Software Engineer", "Data Scientist", "DevOps Engineer", "UI/UX Designer"];
const pic = '/upload/2da6d3dd1a3393995a61c41745b3ad7165aa89b523f56464236c70de1f169602.jpg';

export default function AddCandidate() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
    position: "",
    fileUrl: "",
  });
  const [showBirthdate, setShowBirthdate] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "mobile" ? formatMobile(value) : value.trim(),
    }));
  };

  const handleFirstnameBlur = () => {
    const formattedText = form.firstname
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/^./, form.firstname[0].toUpperCase());
    setForm((prev) => ({ ...prev, firstname: formattedText }));
  };

  const handleLastnameBlur = () => {
    const formattedText = form.lastname
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/^./, form.lastname[0].toUpperCase());
    setForm((prev) => ({ ...prev, lastname: formattedText }));
  };

  const handleMobilePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteText = e.clipboardData.getData("Text");
    const formattedText = formatMobile(pasteText);
    setForm((prev) => ({ ...prev, mobile: formattedText }));
  };

  const formatMobile = (input: string) => {
    let digitsOnly = input.replace(/\D/g, "");
    if (digitsOnly.startsWith("66")) {
      digitsOnly = "0" + digitsOnly.slice(2);
    }
    return digitsOnly;
  };

  const handleBirthdateToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowBirthdate(e.target.checked);
    setForm((prev) => ({ ...prev, age: "", birthdate: "" }));
  };

  const calculateAge = (birthdate: string) => {
    const birth = new Date(birthdate);
    const age = new Date().getFullYear() - birth.getFullYear();
    setForm((prev) => ({ ...prev, age: age.toString() }));
  };


  

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const uploadResponse = await fetch('/api/file', {
          method: 'POST',
          body: formData,
        });

        const uploadData = await uploadResponse.json();
        console.log('Upload success:', uploadData);

        const fileUrl = (uploadData.address.toString());
        console.log(fileUrl);
        const can = { ...form, fileUrl };

        const response = await fetch("/api/addcandidate", {
          method: "POST",
          body: JSON.stringify(can),
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          console.log('Candidate data submitted successfully');
        } else {
          console.error('Error submitting candidate data');
        }
      } catch (error) {
        console.error('Upload or submission error:', error);
      }
    }
  };

  return (


    <><form className="p-4 rounded-3xl shadow-lg border-2 border-indigo-300">
 <div className="col-span-full">
 <div className="mt-2 flex items-center gap-x-3">
            {preview ? (
              <img src={preview} alt="Image Preview" style={{ width: '50px', height: '50px' }} />
            ) : (
              <Image src={pic} alt="alt" width={50} height={50} />
            )}
            <input type="file" accept="image/*" title="change" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onChange={handleFileChange} />
          </div>
     </div>      
     
      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
     <div className="sm:col-span-4">
              <label htmlFor="nameSurname" className="block text-sm font-medium leading-6 text-gray-900">
                <input
                  title="firstname"
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleInputChange}
                  onBlur={handleFirstnameBlur}
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </label>
              <label htmlFor="nameSurname" className="block text-sm font-medium leading-6 text-gray-900">
                <input
                  title="lastname"
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleInputChange}
                  onBlur={handleLastnameBlur}
                  className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </label>
              </div>

              <div className="sm:col-span-2">
          <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Location</label>
          <select
            name="position"
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="TH">TH</option>
            <option value="SG">SG</option>
          </select>
        </div>
       
              <div className="sm:col-span-3">
          <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleInputChange}
            onPaste={handleMobilePaste}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
     
        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <input
            name="email"
            type="email"
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        
        <div className="sm:col-span-2">
        <div className="flex items-center gap-x-2">
    

            <input
              name="gender"
              type="radio"
              value="Male"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">Male</label>
            <input
              name="gender"
              type="radio"
              value="Female"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">Female</label>
            </div>
            </div>   
          
        <div className="sm:col-span-4">
          <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">Position</label>
          <select
            name="position"
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option value="">Select Position</option>
            {positions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>  
     
        <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">Age</label>
        <select
          name="age"
          onChange={handleInputChange}
          value={form.age}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
          <option value="">Select Age</option>
          {[...Array(100).keys()].map((a) => (
            <option key={a + 1} value={a + 1}>{a + 1}</option>
          ))}
        </select>
    
        <label>
          <input type="checkbox" onChange={handleBirthdateToggle} /> Birthdate
        </label>
        </div>
        <div className="sm:col-span-2" >
        {showBirthdate && (
          
          <input type="date" name="birthdate" className="w-full" onChange={(e) => calculateAge(e.target.value)} />
        )}
       </div>  
   
     </div>

     <textarea id="input" classname="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm mb-2" onChange={event => { { handleTextParse; } }} />
          
             <div className="mt-6 flex items-center justify-end gap-x-6">
             <button type="reset" className="rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline">Reset</button>
             <button type="button" className="rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>Save</button>
             </div>

 </form></>




  )
}
