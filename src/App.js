import { useState, useEffect } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [contacts, setContaacts] = useState([
    { firstname: "kola" },
    { firstname: "deba" },
  ]);

  const [countDisplay, setCountDisplay] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  let timeInterval = null;

  const updateCount = () => {
    if (countDisplay > 0) {
      setCountDisplay(countDisplay - 1);
    } else {
      setCountDisplay(0);
    }
  };

  const startUpdateCount = () => {
    timeInterval = setInterval(updateCount, 1000);
    setIsStarted(true);
  };

  const stopUpdate = () => {
    clearInterval(timeInterval);
    setIsStarted(false);
  };

  const handlePlayPause = () => {
    // if (countDisplay === 0) return console.log("no noo..");
    if (isStarted === true) {
      startUpdateCount();
    } else {
      stopUpdate();
    }
  };

  useEffect(() => {}, [countDisplay, isStarted]);

  const handleInputType = (e) => {
    debugger;
    setCountDisplay(e.target.value);
    debugger;
  };

  useUpdateLogger(name);

  const person = {
    name: "kolawole olaniyi",
    hello: function (thing, secondParam) {
      console.log(this.name, " says hello ", thing);
    },
  };

  const alterName = {
    name: "peter olaniy",
  };

  person.hello.call(alterName, "world..."); // call
  person.hello.apply(alterName, ["world..."]); // apply
  const bindedPerson = person.hello.bind({ name: "Harry Potter" });

  bindedPerson("hogwarts...");

  function sayHello(greetings) {
    return `send my greetings to as ${greetings} to ${this.name}`;
  }

  console.log(
    sayHello.call(
      { name: "stephen Lee" },
      "welcome to another level of coding."
    )
  );

  const addTwo = (val) => {
    return val + 2;
  };

  const subTractFive = (val) => {
    return val - 5;
  };

  const addTen = (val) => {
    return val + 10;
  };

  const compose = (...functions) => {
    return (args) => functions.reduceRight((arg, fn) => fn(arg), args);
  };

  const evaluate = compose(addTwo, subTractFive, addTen);

  console.log(evaluate(5));

  // console.log(sayHello("welcome to another level of coding."));

  // objects

  const value = { number: 10 };

  const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
  };

  multiply();
  multiply();

  const myDeboundFunction = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleTypeEvent = myDeboundFunction((e) => {
    console.log(e.target.value);
  }, 1000);

  const numbers = [10, 20, 30, 40];

  const sum = (...args) => {
    return args.reduce((prev, curr) => prev + curr);
  };

  // 192.64.119.112  ip address for a entry in cloudflare...

  console.log(sum(...numbers), "sum");

  return (
    <div className="App">
      <p>{countDisplay}</p>
      <br />
      <input value={countDisplay} onChange={handleInputType} />

      <button onChange={handlePlayPause}>
        {isStarted === true ? "Pause" : "Start"}
      </button>

      {/* <button onClick={handleCancelClick}>Stop</button> */}

      {/* {contacts.length &&
        contacts.map((contact) => <div>{contact.firstname}</div>)}
      { } */
      /* <input
        style={{
          width: "70%",
          marginTop: "30px",
        }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}
    </div>
  );
}

export default App;
