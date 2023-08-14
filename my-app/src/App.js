import "./App.css";

function App() {
  // const ele = <div>Hello,React~!!!</div>;

  const name = "Hello,React";
  const idName = "three";
  const styles = {
    fontSize: "24px",
    color: "green",
  };

  const ele = (
    <>
      <ul>
        <li id="one">1</li>
        <li id="two">2</li>
        <li id={idName}>3</li>
        <li>{20 * 2}</li>
        <li>{name}</li>
      </ul>
      <ul>
        <li id="one">1</li>
        <li id="two">2</li>
        <li id={idName}>3</li>
        <li>{20 * 2}</li>
        <li>{name}</li>
      </ul>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li id="one">1</li>
        <li id="two">2</li>
        <li id={idName}>3</li>
        <li style={styles}>{20 * 2}</li>
        <li>{name}</li>
      </ul>
    </>
  );
  return ele;
}

export default App;
