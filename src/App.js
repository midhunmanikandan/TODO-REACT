import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  const toggleStatus = (id) => {
    const updatedToDos = toDos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setToDos(updatedToDos);
  };

  const editTodo = (id, newText) => {
    const updatedToDos = toDos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setToDos(updatedToDos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Have a great day! 🌞</h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((value) => (
          <div className="todo" key={value.id}>
            <div className="left">
              <input
                type="checkbox"
                name=""
                id=""
                checked={value.status}
                onChange={() => toggleStatus(value.id)}
              />
              <p className={value.status ? 'completed' : ''}>{value.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => deleteTodo(value.id)}
                className="fas fa-times"
              ></i>
              <i
                onClick={() => {
                  const newText = prompt("Edit the task", value.text);
                  if (newText !== null) {
                    editTodo(value.id, newText);
                  }
                }}
                className="fas fa-edit"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
