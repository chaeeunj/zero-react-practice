import React from 'react';
import bear from '../images/bear.jpg';

// props 사용 방법 1
export default function Welcome(props) {
  return (
    <>
      {props.withImg && <img src={bear} alt="welcomeBear" height="200" />}
      <div>Hello!</div>
      <div>
        <span>{props.firstName}</span>
        {props.lastName}
      </div>
    </>
  );
}

// props 사용 방법 2
// export default function Welcome({withImg, firstName, lastName}) {
//   return (
//     <>
//       {withImg && <img src={bear} alt="welcomeBear" height="200" />}
//       <div>Hello!</div>
//       <div>
//         <span>{firstName}</span>
//         {lastName}
//       </div>
//     </>
//   );
// }
