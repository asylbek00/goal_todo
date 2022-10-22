import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";

const Formcontrol = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.isValid ? "grey" : "red")};
  }

  & input {
    display: block;
    width: 100%;
    width: 800px;
    background: ${(props) => (props.isValid ? "rgb(120, 139, 100)" : "red")};

    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  & invalid {
    color: red;
  }

  @media (max-width: 768px) {
    input {
      width: 200px;
    }

  }
`;


const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValed] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValed(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValed(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <Formcontrol isValid={isValid}>
        <label>Мои планы:</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          // style={{backgroundColor: isValid ? "green" : "red"}}
        />
      </Formcontrol>
      {/* <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          style={{backgroundColor: isValid ? "green" : "red"}}
        />
      </div> */}
      <Button type="submit">Добавить план</Button>
      {/* <Button type="submit">Add Goal</Button> */}
    </form>
  );
};

export default CourseInput;
