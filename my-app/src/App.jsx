import "./App.css";
import React from "react";
import Money from "./component/Money";

//根组件
// function App() {
//   // const ele = <div>Hello,React~!!!</div>;

//   const name = "Hello,React";
//   const idName = "three";
//   const styles = {
//     fontSize: "24px",
//     color: "green",
//   };

//   const stuInfo = [
//     { id: 1, name: "zhangsan", age: 19 },
//     { id: 2, name: "lisi", age: 19 },
//     { id: 3, name: "wangwu", age: 19 },
//   ];

//   const arr2 = stuInfo.map((item) => {
//     return (
//       <div key={item.id}>
//         姓名:{item.name} 年龄:{item.age}
//       </div>
//     );
//   });

//   console.log(arr2);

//   const element = <h1 className="title">hello world</h1>;
//   // 上面element所写的JSX，最终会被编译调用React.createElement 来创建 js 对象
//   const element2 = React.createElement(
//     "h1",
//     { className: "title" },
//     "hello world"
//   );

//   const ele = (
//     <>
//       <ul>
//         <li id="one">1</li>
//         <li id="two">2</li>
//         <li id={idName}>3</li>
//         <li>{20 * 2}</li>
//         <li>{name}</li>
//       </ul>
//       {/* 这是一个注释 */}
//       <ul
//         style={{
//           listStyle: "none",
//         }}
//       >
//         <li id="one">1</li>
//         <li id="two">2</li>
//         <li id={idName}>3</li>
//         <li style={styles}>{20 * 2}</li>
//         <li>{name}</li>
//       </ul>

//       {arr2}

//       {element}
//       {element2}
//     </>
//   );
//   return ele;
// }

//类组件
// class App extends React.Component {
//   clickHandler() {
//     console.log(this);
//     alert("hello world");
//   }

//   render() {
//     return <button onClick={this.clickHandler}>按钮</button>;
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       Date: "2023 - 08 - 20",
//     };
//   }
//   render() {
//     return <>{this.state.Date}</>;
//   }
// }

// =================================================================================================================

class App extends React.Component {
  state = {
    dollar: "",
    rmb: "",
  };

  transformToRMB = (value) => {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      this.setState({
        dollar: value,
        rmb: value === "" ? "" : (value * 7.28).toFixed(2),
      });
    } else {
      alert("Please enter a number");
    }
  };

  transformToDollar = (value) => {
    if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
      this.setState({
        dollar: value === "" ? "" : (value / 7.28).toFixed(2),
        rmb: value,
      });
    } else {
      alert("Please enter a number");
    }
  };

  render() {
    return (
      <div>
        <Money
          text="美元"
          money={this.state.dollar}
          transform={this.transformToRMB}
        />
        <Money
          text="人民币"
          money={this.state.rmb}
          transform={this.transformToDollar}
        />
      </div>
    );
  }
}

export default App;
