import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Box from './components/Box';

function App() {
  // useSelector는 매개변수 값에 함수값을 받음 !!
  // 또한 store값에 있는 state값을 가져올 때 사용
  const count = useSelector(state=> state.count);
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password);

  // 액션함수 실행을 위한 함수 (useDispatch);
  const dispatch = useDispatch();
  // payload는 함수의 매개변수라 생각
  const increase = () => {
    dispatch({type : "INCREMENT" , payload : {num : 5}});
  }

  const login = () => {
    dispatch({type : "LOGIN", payload : {id : "nuna", password : "123"}})
  }
  const decrease = () => {
    dispatch({type : "DECREMENT", payload : {num : 1}})
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{id}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소</button>
      <Box />
    </div>
  );
}

export default App;
