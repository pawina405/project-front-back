import axios from 'axios';
import { useState } from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // validation
      if (input.password !== input.confirmPassword) {
        return alert('Please check confirm password');
      }
      const response = await axios.post('http://localhost:8881/auth/register', input);
      console.log(response);
      if (response.status === 200) {
        alert('Register Successful');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="p-8 border rounded-lg mx-auto mt-8 max-w-md">
      <div className="text-3xl mb-5 text-center">Register Form</div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="w-full">
          <span className="block mb-1">First Name</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="firstname"
            value={input.firstname}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">Last Name</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="lastname"
            value={input.lastname}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">Phone</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="phone"
            value={input.phone}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">Address</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="address"
            value={input.address}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">E-mail</span>
          <input
            type="email"
            className="input input-bordered w-full"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">Username</span>
          <input
            type="text"
            className="input input-bordered w-full"
            name="username"
            value={input.username}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">Password</span>
          <input
            type="password"
            className="input input-bordered w-full"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
        </label>

        <label className="w-full">
          <span className="block mb-1">Confirm Password</span>
          <input
            type="password"
            className="input input-bordered w-full"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
          />
        </label>

        <div className="flex justify-between">
          <button type="submit" className="btn btn-outline btn-info w-1/2">Submit</button>
          <button type="reset" className="btn btn-outline btn-warning w-1/2">Reset</button>
        </div>
      </form>
    </div>
  );
}
