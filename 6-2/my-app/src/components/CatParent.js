import React, { useRef, useState } from 'react';
import Cat from './Cat';

export default function CatParent() {
  const catRef = useRef();

  console.log('부모 컴포넌트 CatParent');
  console.log(catRef);

  const ageRef = useRef(1);
  const [state, setState] = useState(1);

  console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catRef} />
        <h3>나이 : {ageRef.current}살</h3>
        <h4>상태값 : {state}</h4>
        <button onClick={() => alert(catRef.current.height)}>
          이미지의 사이즈를 알고싶어
        </button>
        <button onClick={() => (ageRef.current = ageRef.current + 1)}>
          새해
        </button>
        <button onClick={() => setState(state + 1)}>테스트</button>
      </div>
    </div>
  );
}
