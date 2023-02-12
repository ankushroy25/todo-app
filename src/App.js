import React, { useState, useEffect } from "react";
import "./App.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Todo from "./Todo.jsx";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //create a todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };

  //Reading data from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsubscribe();
  }, []);

  //update Todos in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  //delete Todos in firebase
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="bg bg-gradient-to-b from-[#ada8e6] to-[#de147f]">
      <div className="container text-center">
        <h2 className="heading"> To Do List</h2>
        <form onSubmit={createTodo} className="form">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input w-16 md:w-32 lg:w-48 rounded-full"
            type="text"
            placeholder="  Enter item"
          />
          <button className="button plus-btn text-white">
            <AiOutlinePlusCircle size={40} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length > 0 ? (
          <p className="text-white text-lg">
            {`you have ${todos.length} todos left`}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default App;
