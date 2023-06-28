import React, { useRef, useState } from 'react';
import Cat from './Cat';

export default function CatParent() {
  const [height, setHeight] = useState(0);

  const catCallbackRef = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  };

  console.log('부모 컴포넌트 CatParent');

  const ageRef = useRef(1);

  console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catCallbackRef} />
        <h3>나이 : {ageRef.current}살</h3>
        <h4>키 : {height}</h4>
        <button onClick={() => (ageRef.current = ageRef.current + 1)}>
          새해
        </button>
      </div>
    </div>
  );
}
