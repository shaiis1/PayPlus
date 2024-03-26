import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/userAPI';

export const Login: React.FC = () => {
  const [userId, setUserId] = useState<number | ''>('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const res = await loginUser(userId, password)
    debugger
    if(res){
        navigate('/home');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>התחבר</h2>
      <div>
        <label>תעודת זהות</label>
        <input placeholder='יש להזין תעודת זהות' type="text" value={userId} onChange={(e) => setUserId(Number(e.target.value))} />
      </div>
      <div>
        <label>סיסמא</label>
        <input placeholder='יש להזין סיסמא' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
      <button type="submit">התחבר למערכת</button>
      </div>
      <div>
      <button type="submit" onClick={() => {navigate('/register')}}>פתח משתמש חדש</button>
      </div>
    </form>
  );
};
