import React from "react";

function Form(props) {
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if(name===""){
      alert("不可以输入为空");
    }else{
      props.addTask(name);
      setName(""); // Clear the input field after submission
    }
  }

  return(
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit}>
          Add
      </button>
    </form>
  );
}
export default Form;