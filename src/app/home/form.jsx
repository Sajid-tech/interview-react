import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [showData, setShowData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSumbit = (e) => {
    e.preventDefault();

    console.log("formData", formData);
    setShowData(formData);
  };
  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSumbit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="enter  name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter email"
        />

        <button type="submit">Sumbit</button>
      </form>

      {showData.name}
    </div>
  );
};

export default Form;
