import { useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  console.log("re-render of count");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCountRenderer />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
    </div>
  );
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "it is even" : null}</div>;
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("rerendered buttons");

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
