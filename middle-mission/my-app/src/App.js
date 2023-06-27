import React, { useState, useEffect } from 'react';
import datas from './data/datas';
import BusinessCard from './components/BusinessCard';

function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  const draw = () => {
    // 3명이 뽑혔다면 더이상 버튼이 동작하지 않는 조건
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name}, `));
      }, '');
      return alert(`당첨자는 ${names} 입니다.`);
    }

    // 추첨하기 버튼을 누르면 랜덤하게 하나의 명함을 고름
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 당첨된 사람의 명함을 제거(중복 제거)
    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));
    // 당첨자 정보 저장해두기(array) - 관리 목적
    setPickedCards([...pickedCards, randomItem]);
  };

  useEffect(() => {
    setCards(datas);
  }, []);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {/* {pickedCards.length > 0 && (
        <BusinessCard info={pickedCards[pickedCards.length - 1]} />
      )} */}
      {pickedCards.length > 0 &&
        pickedCards.map((pickedCard) => <BusinessCard info={pickedCard} />)}
    </div>
  );
}

export default App;
