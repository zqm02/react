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
