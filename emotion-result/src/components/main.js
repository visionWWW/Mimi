import React from 'react';
import './main.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
      </Navbar>
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default TodoListTemplate;