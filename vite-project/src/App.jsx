import React, { useReducer, useState, useEffect } from "react";
import "./App.css";
import img from "./images/img.png";

const items = ["First item", "Second item", "Third item"];

const dishObjects = items.map((obj, i) => ({ id: i, title: obj }));

function Header(props) {
  return (
    <header>
      <h1>{ props.name } Header</h1>
    </header>
  );
}

function Main({ dishes, status }) {
  return (
    <>
      <div>
        <h2>Welcome to this project { status }</h2>
      </div>
      <main>
        <img src={ img } height={ 200 } alt="A photo of the twitch banner" />
        <ul>
          { dishes.map((dish) => (
            <li key={ dish.id } style={ { listStyleType: "none" } }>
              { dish.title }
            </li>
          )) }
        </ul>
      </main>
    </>
  );
}

function Footer({ year }) {
  return (
    <footer>
      <p>Copyright { year }</p>
    </footer>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  const [condition, toggleCondition] = useReducer(
    (condition) => !condition,
    true
  );

  useEffect(() => {
    console.log(`The resturant is ${status ? 'Open' : 'Close'}`)
  }, [status])
  // this means that just call this function when the app first renders, this is called Dependency Array!
  return (
    <div>
      <h1>
        The page is currently { status ? "Open" : "Close" } and is it true?{ " " }
        { condition ? "Yes" : "No" }
      </h1>
      <button onClick={ () => setStatus(!status) }>
        { status ? "Close" : "Open" } Page
      </button>
      <button onClick={ toggleCondition }>Yes/No</button>
      <Header name="First" />
      <Main dishes={ dishObjects } status={ status ? "Open" : "Close" } />
      <Footer year={ new Date().getFullYear() } />
    </div>
  );
}

export default App;
