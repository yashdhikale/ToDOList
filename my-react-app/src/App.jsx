import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";

function App() {
  const [todoList, setToDOList] = useState([]);
  const addTask = (taskName) => {
    const newTask = { taskName, checked: false };
    setToDOList([...todoList, newTask]);
  };
  function deleteTask(deleteTaskName) {
    setToDOList(todoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDOList((prevTodDoList) =>
      prevTodDoList.map((task) =>
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="container">
        <h1>To DO List</h1>
        <TaskInput addTask={addTask} />
        <div className="toDoList">
          <span> Task's To Do</span>
          <ul className="list-items">
            {todoList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask } 
              toggleCheck={toggleCheck}/>
            ))}
          </ul>
          {todoList.length === 0 ? (
            <p className="notify">You have completed your task</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={todoList}/>
    </>
  );
}

export default App;
