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

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     value1: "",
//     value2: "",
//   };

//   handleChange = (e) => {
//     const name = e.target.name;
//     switch (name) {
//       case "one": {
//         //用户输入的是第一个输入框
//         //只能输入数字
//         this.setState({
//           value1: e.target.value.toUpperCase(),
//         });
//         break;
//       }
//       case "two": {
//         //用户输入的是第二个输入框
//         //只能输入数字
//         const newValue = e.target.value
//           .split("")
//           .map((item) => {
//             if (!isNaN(item)) {
//               return item;
//             }
//           })
//           .join("");
//         this.setState({
//           value2: newValue,
//         });
//         break;
//       }
//     }
//   };

//   clickHandle = (e) => {
//     console.log(this.state.value);
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           name="one"
//           value={this.state.value1}
//           onChange={this.handleChange}
//         />

//         <input
//           type="text"
//           name="two"
//           value={this.state.value2}
//           onChange={this.handleChange}
//         />

//         <button onClick={this.clickHandle}>提交</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     value: "",
//   };

//   handleChange = (e) => {
//     this.setState({
//       value: e.target.value,
//     });
//   };

//   clickHandle = (e) => {
//     console.log(this.state.value);
//   };

//   render() {
//     return (
//       <div>
//         <textarea
//           cols="30"
//           rows="10"
//           value={this.state.value}
//           onChange={this.handleChange}
//         ></textarea>
//         <button onClick={this.clickHandle}>提交</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     checkedBox: [
//       { content: "html", checked: false },
//       { content: "css", checked: false },
//       { content: "js", checked: false },
//       { content: "react", checked: false },
//     ],
//   };

//   handleChange = (index) => {
//     console.log(index);
//     const arr = [...this.state.checkedBox];
//     arr[index].checked = !arr[index].checked;
//     this.setState({ checkedBox: arr });
//   };

//   clickHandle = () => {};

//   render() {
//     return (
//       <div>
//         <div>
//           {this.state.checkedBox.map((item, index) => (
//             <div key={index}>
//               <input
//                 type="checkbox"
//                 value={item.content}
//                 checked={item.checked}
//                 onChange={() => this.handleChange(index)}
//               />
//               <span>{item.content}</span>
//             </div>
//           ))}
//         </div>
//         <button onClick={this.clickHandle}>提交</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {
//     value: "html",
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
//         <select value={this.state.value} onChange={this.handleChange}>
//           <option value="html">html</option>
//           <option value="css">css</option>
//           <option value="js">js</option>
//         </select>
//         <button onClick={this.clickHandle}>提交</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     //创建了一个ref,回头我们可以获取到和该ref绑定了的dom节点
//     this.inputCon = React.createRef();
//   }

//   clickHandle = () => {
//     //通过 this.inputCon.current 可以获取到input DOM节点
//     console.log(this.inputCon.current.value);
//   };
//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.inputCon} />
//         <button onClick={this.clickHandle}>获取用户输入的内容</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     //创建了一个ref,回头我们可以获取到和该ref绑定了的dom节点
//     this.inputCon = React.createRef();
//   }

//   clickHandle = () => {
//     //通过 this.inputCon.current 可以获取到input DOM节点
//     console.log(this.inputCon.current.value);
//   };
//   render() {
//     return (
//       <div>
//         {/* 一旦你用了value, react会认为你这是一个受控组件 */}
//         {/* 如果想要给默认值，使用defaultValue */}
//         <input type="text" ref={this.inputCon} defaultValue="请输入内容" />
//         <button onClick={this.clickHandle}>获取用户输入的内容</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     //创建了一个ref,回头我们可以获取到和该ref绑定了的dom节点
//     this.uploadRef = React.createRef();
//   }

//   clickHandle = () => {
//     //通过 this.uploadRef.current 可以获取到input DOM节点
//     console.log(this.uploadRef.current.value);
//   };
//   render() {
//     return (
//       <div>
//         <input type="file" ref={this.uploadRef} />
//         <button onClick={this.clickHandle}>获取用户输入的内容</button>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };
//   }
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           click me
//         </button>
//       </div>
//     );
//   }
// }

import { useState } from "react";
import { useEffect } from "react";

// function App(props) {
//   let [count, setCount] = useState(0);

//   function clickhandle() {
//     setCount(++count);
//   }

//   return (
//     <div>
//       <div> {count}</div>
//       <button onClick={clickhandle}>+1</button>
//     </div>
//   );
// }

// function App(props) {
//   let [age, setAge] = useState(18);
//   let [fruit, setFruit] = useState("banana");
//   let [todos, setTodos] = useState([{ text: "学习 Hook" }]);

//   function clickhandle() {
//     setAge(++age);
//     setFruit("apple");
//     setTodos([{ text: "休息一下" }]);
//   }

//   return (
//     <div>
//       <div>年龄:{age}</div>
//       <div>水果:{fruit}</div>
//       <div>代办事项:{todos[0].text}</div>
//       <button onClick={clickhandle}>+1</button>
//     </div>
//   );
// }

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    //书写你要执行的副作用，会在组件渲染完成后执行
    const stopTimer = setInterval(() => {
      console.log("helloWorld");
    }, 1000);

    //在useEffect中可以返回一个函数，该函数我们称之为清理函数(一般就是做一些清理工作)
    //该函数会在下一次渲染之后，但是在执行副作用操作之前执行
    return () => {
      // console.log("清理函数执行了");
      clearInterval(stopTimer);
    };
  });

  function clickhandle() {
    setCount(++count);
  }

  return (
    <div>
      <div>你点击了{count}次</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;
