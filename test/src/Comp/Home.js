import React, { useState } from "react";

function Home(props) {
  //   const shoot = () => {
  //     alert("great shoot");
  //   };
  // const shoot = (a) => {
  //     alert(a)
  // }
  const shoot = (a, b) => {
    alert(b.type);
  };
  const [inputvalue, setinputvalue] = useState();
  const handlesubmit = (value, e) => {
    e.preventDefault();
    console.log(value);
    setinputvalue(" ");
  };

  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return (
    <>
      <div>Home</div>
      {/* <h4>{props.date}</h4> */}
      {/* <button onClick={shoot}>click me</button> */}
      {/* <button onClick={() => shoot("goal")}>click me</button> */}
      <button onClick={(event) => shoot("goal", event)}>click me</button>
      <form onSubmit={(e) => handlesubmit(inputvalue, e)}>
        <h4> {Date()}</h4>
        <input
          type="text"
          placeholder="enter name"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />
        <button>click</button>
      </form>
      <h5>{count}</h5>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button> <br></br>
    </>
  );
}

export default Home;
