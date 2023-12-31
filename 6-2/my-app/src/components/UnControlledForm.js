import React, { useRef } from 'react';

// ref 활용 -> 비제어 컴포넌트 방식으로 Form 다뤄보기
export default function UnControlledForm() {
  const inputRef = useRef();
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  console.log(inputRef);
  console.log(inputRef.current);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input
        type="text"
        name="nickname"
        // onChange={handleChange}
        ref={inputRef}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
