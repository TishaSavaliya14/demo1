import React, { useState } from "react";

function Home() {
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
  return (
    <>
      <div>Home</div>
      {/* <button onClick={shoot}>click me</button> */}
      {/* <button onClick={() => shoot("goal")}>click me</button> */}
      <button onClick={(event) => shoot("goal", event)}>click me</button>

      <form onSubmit={(e) => handlesubmit(inputvalue, e)}>
        <input
          type="text"
          placeholder="enter name"
          value={inputvalue}
          onChange={(e) => setinputvalue(e.target.value)}
        />
        <button>click</button>
      </form>
    </>
  );
}

export default Home;
