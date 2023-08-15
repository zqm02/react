import "./App.css";

function App() {
  // const ele = <div>Hello,React~!!!</div>;

  const name = "Hello,React";
  const idName = "three";
  const styles = {
    fontSize: "24px",
    color: "green",
  };

  const stuInfo = [
    { id: 1, name: "zhangsan", age: 19 },
    { id: 2, name: "lisi", age: 19 },
    { id: 3, name: "wangwu", age: 19 },
  ];

  const arr2 = stuInfo.map((item) => {
    return (
      <div key={item.id}>
        姓名:{item.name} 年龄:{item.age}
      </div>
    );
  });

  console.log(arr2);

  const ele = (
    <>
      <ul>
        <li id="one">1</li>
        <li id="two">2</li>
        <li id={idName}>3</li>
        <li>{20 * 2}</li>
        <li>{name}</li>
      </ul>
      {/* 这是一个注释 */}
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

      {arr2}
    </>
  );
  return ele;
}

export default App;
