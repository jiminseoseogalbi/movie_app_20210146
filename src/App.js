import React from 'react';

function Food({name,picture}){
  return(
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  ); 
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.1store.io%2FofficialProductImage%2F1587198787425-0712162682417814.png&f=1&nofb=1'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR800x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Fblog.kakaocdn.net%252Fdn%252FdDyTJN%252FbtqvrVnOCb4%252FVDVFUo7oXVnoFqlVIzH0h0%252Fimg.png&f=1&nofb=1'
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2018%2F10%2F03%2F122c9216ad8548da2c60ca8c8a5f4a1e1.jpg&f=1&nofb=1'
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ft1.daumcdn.net%2Fthumb%2FR1280x0.fjpg%2F%3Ffname%3Dhttp%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F3acD%2Fimage%2FSKsjpw3oIvlW058vB5DOfaeIUOQ.jpg&f=1&nofb=1'
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2018%2F12%2F14%2Ff609b820823418706dca1df13c43def01.jpg&f=1&nofb=1'
  }
];

function renderFood(dish){
  return <Food key={dish.name} name= {dish.name} picture={dish.image} />;
}
function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
