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
