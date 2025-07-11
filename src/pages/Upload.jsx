import { useState } from "react";
import Navbar from "../components/Navbar";

const Upload = () => {
  const [form, setForm] = useState({
    name: "",
    rent: "",
    facilities: "",
    location: "",
    contact: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({ name: "", rent: "", facilities: "", location: "", contact: "" });
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center my-4">Upload Hostel</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Hostel Name" className="border p-2 w-full"/>
        <input name="rent" value={form.rent} onChange={handleChange} placeholder="Rent" className="border p-2 w-full"/>
        <input name="facilities" value={form.facilities} onChange={handleChange} placeholder="Facilities (e.g. WiFi, AC)" className="border p-2 w-full"/>
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full"/>
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" className="border p-2 w-full"/>
        <button type="submit" className="bg-blue-600 text-white p-2 w-full">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
