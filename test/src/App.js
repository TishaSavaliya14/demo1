import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Comp/Home";
function App() {
  const [data, setdata] = useState([]);
  const [inputdata, setinputdata] = useState({
    title: "",
  });

  // fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then((res) => res.json())
  //   .then((d) => setdata(d));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((d) => setdata(d.data))
      .catch((err) => console.log(err));
  }, []);

  function handlesubmit() {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: inputdata.title,
      })
      .then((d) => console.log(d.data))
      .catch((err) => console.log(err));
  }

  function handledelelete(id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((d) => {
        console.log(d.data);
        alert("delete successfully");
      })
      .catch((err) => console.log(err));
  }

  function handleupdate(id) {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: inputdata.title,
      })
      .then((d) => {
        console.log(d.data);
        alert("Todo updated successfully!");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <Home/>
      <input
        type="text"
        name="title"
        value={inputdata.title}
        onChange={(e) => setinputdata({ ...inputdata, title: e.target.value })}
      />
      <button type="button" onClick={handlesubmit}>
        submit
      </button>
      <h1>data get</h1>
      {data.map((i) => {
        return (
          <>
            <p>{i.title}</p>
            <button onClick={() => handleupdate(i.id)}>update</button>
            <button onClick={() => handledelelete(i.id)}>delete</button>
          </>
        );
      })}
    </div>
  );
}

export default App;
