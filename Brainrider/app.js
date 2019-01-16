//Create the Fruits component from the default component class
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>

//The NonCitrus component is rendered within the Fruits component
<NonCitrus/>
<Citrus/>
      </div>
    );
  }
};

//Create the TypesOfFood component from the default component class
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
<Fruits/>
        <Vegetables />
      </div>
    );
  }
};