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
