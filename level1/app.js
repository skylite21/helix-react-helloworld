
const Dog = (props) => {
  return (
    React.createElement('div', {}, [
      React.createElement('h1', {}, props.name),
      React.createElement('h2', {}, props.breed),
      React.createElement('h2', {}, props.color),
    ])
  )
}


const App = () => {
  return React.createElement(
    "div",
    {},
    [ React.createElement("h1", {id: "brand"}, "My Dogs"),
      React.createElement(Dog, {name: "Rex", breed:"Bulldog", color: "brown"}),
      React.createElement(Dog, {name: "Teddy", breed:"Poodle", color: "black"}),
    ]
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
