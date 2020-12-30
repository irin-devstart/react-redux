import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  //ACTION INCREMENT
  //ACTION DECREMENT
  //REDUCER
  //untuk Set State default

  //STORE -> GLOBALIZED STATE

  //display it in the console

  //DISPATCH

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {isLogged ? <h1> Sudah Login</h1> : null}
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
    </div>
  );
}

export default App;
