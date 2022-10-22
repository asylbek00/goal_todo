import React from "react";
import styled from "styled-components";

const Container = styled.main`
  width: 300px;
  height: 500px;
  background: pink;
`;
const Input = styled.input`
  border: 1px solid red;
  width: 200px;
  height: 100px;
`;
const Button = styled.button`
  background-color: ${(props) => (props.color ? '' : 'red')};
`;
function Comment() {
  let isValid = false;
  return (
    <Container>
      <Input />
      <Button color ={isValid}>Click</Button>
    </Container>
  );
}

export default Comment;
