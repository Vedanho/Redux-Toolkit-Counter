import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, rand } from "./features/counter";

function App() {
  const num = useSelector((state) => state.value);

  const dispatch = useDispatch();

  const randomNumber = Math.floor(Math.random() * 100)

  const handleInc = () => {
    dispatch(inc());
  };

  const handleDec = () => {
    dispatch(dec())
  }

  const handleRand = () => {
    dispatch(rand(randomNumber))
  }

  console.log(inc());

  return (
    <>
      <div className="App">{num}</div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleRand}>random</button>
    </>
  );
}

export default App;
