import { useTheme } from "@/lib/theme-context";
import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!step === 4) return;

    console.log("formdata", formData);
  };
  return (
    <div>
      <h2>Multistepform</h2>
      <p>
        Current Theme: <b>{theme}</b>
      </p>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white mt-2"
      >
        Toggle Theme
      </button>
      <form
        onSubmit={handleSumbit}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      >
        {/* step leddedr  */}

        <div className="flex justify-between items-center mb-6">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex justify-center items-center text-white font-semibold
                ${
                  step === num
                    ? "bg-blue-500"
                    : step > num
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                {num}
              </div>

              {num !== 4 && (
                <div
                  className={`flex-1 h-1 mx-2 
                  ${step > num ? "bg-green-500" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {step == 1 && (
          <div className="flex flex-col items-center gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter name"
            />

            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step == 2 && (
          <div className="flex flex-col items-center gap-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enter email "
            />

            <div className="border flex flex-row items-center gap-5">
              <button type="button" onClick={prevStep}>
                back
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step == 3 && (
          <div className="flex flex-col items-center gap-5">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="enter address"
            />

            <div className="border flex flex-row items-center gap-5">
              <button type="button" onClick={prevStep}>
                back
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step == 4 && (
          <div className="flex flex-col items-center gap-5">
            <div>
              <h2>summary</h2>
              <p>name: {formData.name}</p>
              <p>email: {formData.email}</p>
              <p>add: {formData.address}</p>
            </div>

            <div className="border flex flex-row items-center gap-5">
              <button type="button" onClick={prevStep}>
                back
              </button>
              <button type="submit">Sumbit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
