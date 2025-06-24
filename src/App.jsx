import React from "react";
import "./App.css"; // Assuming you have some styles in App.css
function App() {
  // This is the main component of the application
  const person = [
    { name: "Jubayer", age: "23", job: "Student" },
    { name: "Jhankar", age: "35", job: "Software Engineer" },
    { name: "Simanth", age: "28", job: "Web Developer" },
  ];
  const weekdays = [
    { day: "Sunday", number: 1 },
    { day: "Monday", number: 2 },
    { day: "Tuesday", number: 3 },
    { day: "Wednesday", number: 4 },
    { day: "Thursday", number: 5 },
    { day: "Friday", number: 6 },
    { day: "Saturday", number: 7 },
  ];
  const product = [
    { name: "Laptop", price: "$1000" },
    { name: "Smartphone", price: "$400" },
    { name: "Shoes", price: "$100" },
    { name: "Bag", price: "$50" },
    { name: "Camera", price: "$150" },
  ];

  return (
    <>
      <div>
        <div>
          <h2 style={{ textAlign: "center", color: "blue" }}> Products List</h2>

          {product.map((pd) => {
            return (
              <Product name={pd.name} price={pd.price} key={pd.name}></Product>
            );
          })}
        </div>
        {/* Product List Practice */}
        <div>
          <h2 style={{ textAlign: "center", color: "blue" }}>Person List</h2>
          {person.map((person) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                job={person.job}
                key={person.name}
              ></Person>
            );
          })}
        </div>
        {/* Person List Practice */}
        <div>
          <h2 style={{ textAlign: "center", color: "blue" }}>Weekdays List</h2>
          {weekdays.map((day) => {
            return (
              <Weekday day={day.day} number={day.number} key={day.number} />
            );
          })}
        </div>
      </div>
    </>
  );
}

function Person(props) {
  const style = {
    backgroundColor: "dodgerblue",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
    color: "white",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.2em",
    border: "1px solid red",
  };
  return (
    <div className="Person" style={style}>
      <h2>Name:{props.name}</h2>
      <p>Age:{props.age}</p>
      <p>Occupation:{props.job}</p>
    </div>
  );
}
function Product(props) {
  const style = {
    backgroundColor: "lightgreen",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
    color: "black",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.2em",
    border: "1px solid green",
    color: "navyblue",
  };
  return (
    <div className="Product" style={style}>
      <h2>Name:{props.name}</h2>
      <p>Price:{props.price}</p>
    </div>
  );
}

function Weekday(props) {
  const style = {
    backgroundColor: "lightcoral",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
    color: "white",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.2em",
    border: "1px solid red",
  };
  return (
    <div className="Weekday" style={style}>
      <h2>Day:{props.day}</h2>
      <p>Number:{props.number}</p>
    </div>
  );
}

export default App;
