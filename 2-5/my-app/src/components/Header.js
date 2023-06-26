import React from 'react';

const Header = () => {
  // const getGreetingMessage = function (name) {
  //   if (name === 'jce') return `Hello, ${name}! Learn React`;
  //   return `Welcome, ${name}! Learn React`;
  // };

  const name = 'jce';
  const count = 0;
  const memo = '';

  return (
    <header className="App-header">
      {name === 'jce'
        ? `Hello, ${name}! Learn React`
        : `Welcome, ${name}! Learn React`}

      <div>{count && <h1>Messages: {count}</h1>}</div>
      {memo && `메모: ${memo}`}
    </header>
  );
};

export default Header;
