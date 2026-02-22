import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.username) newErrors.username = "Username is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      console.log(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Controlled Registration Form</h2>

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="border p-2 w-full mb-1"
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full mb-1"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="border p-2 w-full mb-1"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button className="bg-blue-500 text-white p-2 w-full mt-2">
        Register
      </button>
    </form>
  );
}
