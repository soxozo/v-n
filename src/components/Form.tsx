"use client";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ name: "", age: "", imgUrl: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "imgUrl" && files) {
      setFormData({ ...formData, imgUrl: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("age", formData.age);
    if (formData.imgUrl) {
      formDataToSend.append("imgUrl", formData.imgUrl);
    }

    await fetch("/api/user", { method: "POST", body: formDataToSend });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="text" name="age" placeholder="Age" onChange={handleChange} required />
      <input type="file" name="imgUrl" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
}
