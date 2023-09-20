# JSX 基础语法

在 React 中，使用 JSX 来描述页面。

使用 JSX 来描述页面时，有如下的一些语法规则：

- 根元素只能有一个
- JSX 中使用 JavaScript 表达式。表达式在花括号{}内
- 属性值指定为字符串字面量，或者在属性值插入一个 JavaScript 表达式
- style 对应样式对象，class 要写作 className
- 注释需要写在花括号
- JSX 允许在模板中插入数组，数组会自动展开所有成员。

## createElement 方法

JSX 是一种 JavaScript 的语法扩展，Babel 会把 JSX 转译成名为`React.createElement`函数调用。

```js
    React.createElement(type,[props],[..children]);
```

参数说明:

- type:创建的 React 元素类型(可选的值有：标签名字符串、React 组件)
- props(可选):React 元素的属性
- children(可选):React 元素的子元素

例如，下面两种代码的作用完全是相同的:

```js
const element = <h1 className="title">hello world</h1>;

const element2 = React.createElement(
  "h1",
  { className: "title" },
  "hello world"
);
```

这些对象被称为 "React 元素"。它们描述了你希望在屏幕上看到的内容。

可以看出，JSX 的本质就是 React.createElement 方法的一种语法糖。

---

# 组件与事件绑定

## React 中的组件

在 React 中，可以使用类的方式来声明一个组件。

```js
class 类名 extends React.Component {
  render() {
    return {
      // 一段 JSX
    };
  }
}
```

除了类组件，React 中还支持使用函数来创建组件，同样需要然会一段 JSX，来表示这个组件的 UI 是什么样的。

```js
  function 组件名() {
    return (
      // 一段 JSX
    )
  }
```

早期的函数组件被称为无状态组件，一般仅仅用来做 UI 的展示，里面不会有复杂的逻辑。

但是 React16.8 推出 Hooks 后，现在更多的是使用函数组件了。

这不仅仅是语法的改变，同时也是整个 React 编程思想的一种转变。

## 为组件绑定事件

在 React 中绑定事件的写法：

```javascript
<button onClick={active}>Activate Lasers</button>
```

在 React 中无法通过 return false 来阻止默认行为，所以只有使用 e.preventDefault 的方式来阻止默认行为。

```js
  function Form() {
    function handleSubmit (e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }

    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </from>
    )
   }
```

如果是类组件，那么事件处理函数写作一个类方法。

```js
class Welcome extends React.Component {
  // 事件处理函数

  eventHandler(e) {
    window.alert("hello");
    e.preventDefault();
  }

  render() {
    return (
      <a href="https://www.baidu.com/" onClick={this.eventHandler}>
        this is a test
      </a>
    );
  }
}
```

在 React 的事件处理函数中所传入的事件对象，是一个合成事件对象。

React 也提供了访问原生对象的方式。如下：

```js
  eventHandler (e) {
    e.nativeEvent;  // 原生事件对象
  }
```

## this 指向

由于 js 中 this 的特殊性，事件处理函数中的 this 并不会指向当前的组件，这就需要我们自行对 this 进行指向的修正。

这里介绍 3 种解决方式：

- 将事件处理函数修改为箭头函数
- 将事件绑定修改为箭头函数
- 使用 bind 方法来强制绑定 this 的指向

## 向事件处理程序传参

另外还有一个非常重要的问题，就是如何向事件处理函数传递参数。

如果要传递参数，可以使用下面的两种方式进行传参:

- 通过 bind 方法在绑定 this 指向时向事件处理函数进行传参
- 绑定事件时，通过书写箭头函数的形式来传参

---

# 组件状态和数据传递

## 组件状态

早期类组件被称之为有状态组件，就是因为在类组件能够维护组件数据

```js
  class 类名 extends React.Component{
    constructor() {
      super() {
        //设置组件自身的数据状态
        this.state = {
          xxx:xxx
        }
      }
      render() {
        return (
          //通过 (this.state.xxx) 来获取状态数据
        )
      }
    }
  }
```

不要直接去修改状态值，而是应该通过 setState 方法修改组件中的 state 状态数据

```js
this.setState({
  xxx: 新值,
});
```

setState，它对状态的改变，**可能**是异步的。

> 如果改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步

如果在事件处理函数里面想拿到 setState 执行后的数据，可以提前使用一个变量来存储计算结果，或者使用过 setState 的第二个参数，它是一个函数，这个函数会在 state 更新后被调用。

最佳实践：  
1.把所有的 setState 当作是异步的  
2.永远不要信任 setState 调用之后的状态  
3.如果要使用改变之后的状态，需要使用回调函数(setState 的第二个参数)  
4.如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态(setState 的第一个函数)

> React 会对异步的 setState 进行优化，将多次 setState 进行合并(将多次状态改变完成后，再统一对 State 进行改变，然后触发 render)

## Props

和 Vue 一样,在 React 中组件会存在层级关系，那么自然会涉及到组件之间进行数据的传递。

如果是父组件向子组件传递数据，则使用 props。

如果是函数组件，props 作为函数的一个参数传入:

```js
  function 组件名(props) {
    return {
      // 一段 JSX
      // 通过props.xxx 获取传入的值
      <div>
        <p>姓名:{props.name}</p>
        <p>年龄:{props.age}</p>
        <p>性别:{props.gender}</p>
      </div>
    }
  }
```

如果是类组件，则需要在 constructor 中将 props 通过 super 传递给父类，然后通过 this.props 的方式来获取传入的值:

```js
class 组件名 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // 一段 JSX
      // 通过props.xxx 获取传入的值
      <div>
        <p>姓名:{props.name}</p>
        <p>年龄:{props.age}</p>
        <p>性别:{props.gender}</p>
      </div>
    );
  }
}
```

## 状态提升

在 Vue 中，父传子通过 props，子传父通过触发自定义事件。

在 React 中，如果子组件需要向父组件传递数据，同样是通过触发父组件传递给子组件的事件来进行传递。这在官网称之为"状态提升"

父组件:

```javascript
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
```

子组件:

```js
import React from "react";

function Money(props) {
  function handleChange(e) {
    //在子组件中，将用户输入的值传递给父组件
    //让父组件来进行修改
    props.transform(e.target.value);
  }

  return (
    <div>
      <fieldset>
        <legend>{props.text}</legend>
        <input type="text" value={props.money} onChange={handleChange} />
      </fieldset>
    </div>
  );
}

export default Money;
```

---

# 表单

## 受控组件

无论是学习 Vue，还是 React，最重要的是要转换思想，这一步非常重要，往往也比较困难。

在以前 jQuery 时代，开发人员需要获取到 DOM 节点，然后进行操作，而在现代前端开发中，采用的是 MVVM 的模式，将视图和视图模型进行绑定，视图模型的改变，会自然的带来视图的改变。开发人员需要专注在视图模型上面。

因此，这里所谓的受控组件，本质上其实就是将表单中的控件和视图模型(状态)进行绑定，之后都是针对状态进行操作。

下面，我们来看一些具体的案例：

- 一个基本的受控组件

```js
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  clickHandle = (e) => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <button onClick={this.clickHandle}>提交</button>
      </div>
    );
  }
}

export default App;
```

- 对用户输入的内容进行限制

```js
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
```

- 文本域

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  clickHandle = (e) => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <textarea
          cols="30"
          rows="10"
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.clickHandle}>提交</button>
      </div>
    );
  }
}

export default App;
```

- 单选与多选框

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    checkedBox: [
      { content: "html", checked: false },
      { content: "css", checked: false },
      { content: "js", checked: false },
      { content: "react", checked: false },
    ],
  };

  handleChange = (index) => {
    console.log(index);
    const arr = [...this.state.checkedBox];
    arr[index].checked = !arr[index].checked;
    this.setState({ checkedBox: arr });
  };

  clickHandle = () => {};

  render() {
    return (
      <div>
        <div>
          {this.state.checkedBox.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={item.content}
                checked={item.checked}
                onChange={() => this.handleChange(index)}
              />
              <span>{item.content}</span>
            </div>
          ))}
        </div>
        <button onClick={this.clickHandle}>提交</button>
      </div>
    );
  }
}
```

- 下拉列表

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: "html",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  clickHandle = (e) => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="js">js</option>
        </select>
        <button onClick={this.clickHandle}>提交</button>
      </div>
    );
  }
}
```

## 非受控组件

大多数情况下，在 React 中推荐使用受控组件来对表单进行操作，这样能够对表单控件的数据进行一个统一的管理。

但是在某些特殊，需要使用以前传统的 DOM 方案进行处理，此时替代的方案就是非受控组件。

- 非受控组件基本示例

```javascript
class App extends React.Component {
  constructor() {
    super();
    //创建了一个ref,回头我们可以获取到和该ref绑定了的dom节点
    this.inputCon = React.createRef();
  }

  clickHandle = () => {
    //通过 this.inputCon.current 可以获取到input DOM节点
    console.log(this.inputCon.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputCon} />
        <button onClick={this.clickHandle}>获取用户输入的内容</button>
      </div>
    );
  }
}
```

- 非受控组件的默认值

使用`defaultValue=""`

- 文件上传

```js
class App extends React.Component {
  constructor() {
    super();
    //创建了一个ref,回头我们可以获取到和该ref绑定了的dom节点
    this.uploadRef = React.createRef();
  }

  clickHandle = () => {
    //通过 this.uploadRef.current 可以获取到input DOM节点
    console.log(this.uploadRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="file" ref={this.uploadRef} />
        <button onClick={this.clickHandle}>获取用户输入的内容</button>
      </div>
    );
  }
}
```

# 生命周期

## 什么是生命周期

所谓生命周期，指的是组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。

React 在组件的生命周期提供了一系列的钩子函数(类似于事件)，可以让开发者在函数中注入代码，这些代码会在适当的时候运行。

**生命周期钩子函数是属于类组件所独有的东西。**但是从 React16.8 推出了 Hooks 以来，整体已经开始以函数组件为主，因此这里我们仅介绍一些常用的生命周期钩子函数。

## 常用的生命周期钩子函数

常用的生命周期钩子函数如下：

- constructor
  - 同一个组件对象只会创建一次
  - 不能在第一次挂载到页面之前，调用 setState，为了避免问题，构造函数中严禁使用 setState
- render
  - **render 是整个类组件中，必须要书写的生命周期函数**
  - 返回一个虚拟 dom，会被挂载到虚拟 DOM 树中，最终渲染到页面的真是 DOM 中
  - render 可能不只运行一次，只需要重新渲染，就会重新运行
  - 严禁使用 setState，因为可能会导致无限递归渲染
- componentDidMount
  - 类似于 Vue 中的 mounted
  - 只会执行一次
  - 可以使用 setState
  - 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
- componentWillUnmount
  - 通常在该函数中销毁一些组件依赖的资源，比如计时器

# Hooks

- Hooks 基本介绍
- useState 和 useEffect
- 自定义 Hook

## Hooks 基本介绍

> Hook 是 React16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

Hooks 的出现，首先能解决如下的一些问题：

- 告别令人疑惑的生命周期

```javascript
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    );
  }
}

export default App;
```

- 告别类组件中烦人的 this
  - 在类组件中，会存在 this 的指向问题，例如在事件处理函数中，不能直接通过 this 获取组件示例，需要修正 this 指向
- 告别繁重的类组件，回归前端程序更加熟悉的函数

另外，Hooks 的出现，还有一个更加重要的一个信号，那就是整个 react 思想上的转变，从“面向对象”的思想开始转变为“函数式编程”
的思想。这是编程范式上面的转变。

编程范式：

- 命令式编程：告诉计算机怎么做(How)，我们需要给计算机指明每一条步骤
  - 面向过程
  - 面向对象
- 声明式编程：告诉计算机要什么(What)
  - 函数式编程
  - DSL（领域专用语言，_HTML_，_CSS_，_SQL_）

声明式编程并不是新产物，它是命令式编程同期出现的，但是早期更加流行命令式编程。不过随着近几年项目工程越来越复杂，以前的命令式编程就有点力不从心了，所以现在慢慢开始流行声明式编程。

因此当你学习 Hooks 的时候，会发现突然多了一些以前不熟悉的概念。例如：纯函数、副作用、柯里化、高阶函数等概念。

Hooks 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在**React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用

## useState 和 useEffect

React 内置了一些实用的 Hook，并且随着 React 版本的更新，Hook 的数量还在持续增加中。

useState 包含以下的知识点：

- 基本使用

```javascript
import { useState } from "react";

function App(props) {
  let [count, setCount] = useState(0);

  function clickhandle() {
    setCount(++count);
  }

  return (
    <div>
      <div> {count}</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;
```

- 声明多个 state 状态

```javascript
import { useState } from "react";

function App(props) {
  let [age, setAge] = useState(18);
  let [fruit, setFruit] = useState("banana");
  let [todos, setTodos] = useState([{ text: "学习 Hook" }]);

  function clickhandle() {
    setAge(++age);
    setFruit("apple");
    setTodos([{ text: "休息一下" }]);
  }

  return (
    <div>
      <div>年龄:{age}</div>
      <div>水果:{fruit}</div>
      <div>代办事项:{todos[0].text}</div>
      <button onClick={clickhandle}>+1</button>
    </div>
  );
}

export default App;
```

useEffect 包含以下知识点：

- 副作用的概念
- 基本使用
- 执行清理工作
- 副作用的依赖

## 自定义 Hook

```

```
