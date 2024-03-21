import axios from 'axios';
import { useState } from "react";
import useAuth from '../hooks/useAuth';

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      // ส่งคำขอเข้าสู่ระบบไปยังเซิร์ฟเวอร์
      const rs = await axios.post('http://localhost:8881/auth/login', input);
      // บันทึก token ใน localStorage
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token);
      // ดึงข้อมูลผู้ใช้ที่ล็อกอินและกำหนดให้กับ context
      const userResponse = await axios.get('http://localhost:8881/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      });
      setUser(userResponse.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="p-8 border w-full max-w-md mx-auto rounded-2xl mt-8">
      <div className="flex flex-col items-center">
        <div className="text-3xl mb-5">Login</div>
        <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-outline btn-info mt-6 w-full">Login</button>
        </form>
      </div>
    </div>
  );
}
