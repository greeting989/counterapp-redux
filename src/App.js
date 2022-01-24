import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector ,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';


function App() {
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" className='count' value={myState}/>
        </div>
          <div className="counterdiv">
             <button className='btn' onClick={()=>dispatch(decNumber())}>Decrease</button>
             <button className='btn' onClick={()=>dispatch(incNumber())}>Increment</button>
          </div>
      </header>
    </div>
  );
}

export default App;
