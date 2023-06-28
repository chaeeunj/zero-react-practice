import React, { useState } from 'react';

export default function SimpleForm() {
  const [nickname, setNickName] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'nickname') return setNickName(e.target.value);
    return setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`nickname : ${nickname}, password : ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 :</label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        value={nickname}
      />
      <br />
      <label>패스워드 :</label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
