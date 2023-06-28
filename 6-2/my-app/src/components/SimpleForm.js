import React, { useState } from 'react';

export default function SimpleForm() {
  const [nickname, setNickName] = useState('');

  const handleChange = (e) => {
    setNickName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(nickname);
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
      <input type="submit" value="제출" />
    </form>
  );
}
