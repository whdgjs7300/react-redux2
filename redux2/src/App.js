import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from './components/Box';

function App() {
  // useSelector는 매개변수 값에 함수값을 받음 !!
  // 또한 store값에 있는 state값을 가져올 때 사용
  const count = useSelector(state=> state.count);
  // 액션함수 실행을 위한 함수 (useDispatch);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type : "INCREMENT"});
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <Box />
    </div>
  );
}

export default App;
