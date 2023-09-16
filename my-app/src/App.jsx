import "./App.css";
import React from "react";
//import Money from "./component/Money";

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

/**
 * 组件状态和数据传递demo
 */
// class App extends React.Component {
//   state = {
//     dollar: "",
//     rmb: "",
//   };

//   transformToRMB = (value) => {
//     if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
//       this.setState({
//         dollar: value,
//         rmb: value === "" ? "" : (value * 7.28).toFixed(2),
//       });
//     } else {
//       alert("Please enter a number");
//     }
//   };

//   transformToDollar = (value) => {
//     if (parseFloat(value) || value === "" || parseFloat(value) === 0) {
//       this.setState({
//         dollar: value === "" ? "" : (value / 7.28).toFixed(2),
//         rmb: value,
//       });
//     } else {
//       alert("Please enter a number");
//     }
//   };

//   render() {
//     return (
//       <div>
//         <Money
//           text="美元"
//           money={this.state.dollar}
//           transform={this.transformToRMB}
//         />
//         <Money
//           text="人民币"
//           money={this.state.rmb}
//           transform={this.transformToDollar}
//         />
//       </div>
//     );
//   }
// }

// =================================================================================================================

//class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     value: "",
//   };

//   handleChange = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   clickHandle = (e) => {
//     console.log(this.state.value);
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.handleChange}
//         />

//         <button onClick={this.clickHandle}>提交</button>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value1: "",
    value2: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    switch (name) {
      case "one": {
        //用户输入的是第一个输入框
        //只能输入数字
        this.setState({
          value1: e.target.value.toUpperCase(),
        });
        break;
      }
      case "two": {
        //用户输入的是第二个输入框
        //只能输入数字
        const newValue = e.target.value
          .split("")
          .map((item) => {
            if (!isNaN(item)) {
              return item;
            }
          })
          .join("");
        this.setState({
          value2: newValue,
        });
        break;
      }
    }
  };

  clickHandle = (e) => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="one"
          value={this.state.value1}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="two"
          value={this.state.value2}
          onChange={this.handleChange}
        />

        <button onClick={this.clickHandle}>提交</button>
      </div>
    );
  }
}

export default App;
