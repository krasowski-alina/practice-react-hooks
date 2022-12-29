
import { useState } from 'react';
import './App.css';
import { data } from './data';
import Slider from './Slider';

function App() {
  const [item, setItem] = useState(data)
  return (
    <div>
      {item.map((element => {
        const {id, itemName, price, images} = element;
        return(
          <div key={id}>
            <div className='container'>
            <h2>{itemName}</h2>
            </div>
            <div className='container'>
            <h2>{price}</h2>
            </div>
          <Slider/>
          </div>
        )
      }))}


    </div>
  );
}

export default App;
