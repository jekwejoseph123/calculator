
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input value={value} type="text"></input>
          </div>
          <div>
            <input onClick={e => setValue('')}  type="button" value="AC"></input>
            <input onClick={e => setValue(value.slice(0, -1))} type="button" value="DE"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="."></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="/"></input>
          </div>

          <div>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="7"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="8"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="9"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="*"></input>
          </div>

          <div>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="4"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="5"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="6"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="+"></input>
          </div>

          <div>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="1"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="2"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="3"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="-"></input>
          </div>

          <div>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="00"></input>
            <input onClick={e => setValue(value + e.target.value)} type="button" value="0"></input>
            <input onClick={e => setValue(eval(value))} type="button" value="=" className='equal'></input>
            
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default App;
