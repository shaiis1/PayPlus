import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/userAPI';

export const Register: React.FC = () => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userID, setUserID] = useState<number | ''>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
    setError('');

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    registerUser(userID, password, userFirstName, userLastName)

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>פתיחת משתמש חדש</h2>
      <div>
        <label>תעודת זהות</label>
        <input placeholder='יש להזין תעודת זהות' type="text" value={userID} onChange={(e) => setUserID(Number(e.target.value))} />
      </div>
      <div>
        <label>שם פרטי</label>
        <input placeholder='יש להזין שם פרטי' type="text" value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} />
      </div>
      <div>
        <label>שם משפחה</label>
        <input placeholder='יש להזין שם משפחה' type="text" value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
      </div>
      <div>
        <label>סיסמא</label>
        <input placeholder='יש להזין סיסמא' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>אישור סיסמא</label>
        <input placeholder='יש להזין את הסיסמא שוב' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <div>
      <button type="submit">פתיחת משתמש</button>
      </div>
      <div>
      <button type="submit" onClick={() => {navigate('/login')}}>התחבר למשתמש קיים</button>
      </div>
      {error && (<div>{error}</div>)}
    </form>
  );
};
