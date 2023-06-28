import React, { useRef } from 'react';
import Cat from './Cat';

export default function CatParent() {
  const catRef = useRef();

  console.log('부모 컴포넌트 CatParent');
  console.log(catRef);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catRef} />
        <button onClick={() => alert(catRef.current.height)}>
          이미지의 사이즈를 알고싶어
        </button>
      </div>
    </div>
  );
}
