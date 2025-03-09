import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  status: "pending" | "in-progress" | "completed";
  category: string;
}

const TodoListApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    status: "pending",
    category: "",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const addOrEditTask = () => {
    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === newTask.id ? { ...newTask } : task
        )
      );
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...newTask, id: prevTasks.length + 1 },
      ]);
    }

    setNewTask({
      id: 0,
      title: "",
      description: "",
      dueDate: "",
      priority: "low",
      status: "pending",
      category: "",
    });
    setIsEditing(false);
  };

  const toggleStatus = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "pending" ? "in-progress" : "completed",
            }
          : task
      )
    );
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const editTask = (task: Task) => {
    setNewTask(task);
    setIsEditing(true);
  };

  return (
    <div className="todo-app">
      <h1>To-do List Application</h1>

      <div className="form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-item">
              <h2>Title:</h2>
              <input
                type="text"
                name="title"
                placeholder="Name your to-do"
                value={newTask.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <h2>Description:</h2>
              <input
                type="text"
                name="description"
                placeholder="Write description for your to-do"
                value={newTask.description}
                onChange={handleChange}
              />
            </div>
            <div className="form-item">
              <button className="btn-add" type="button" onClick={addOrEditTask}>
                {isEditing ? "Save Changes" : "Add Task"}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div>
                <button
                  onClick={() => toggleStatus(task.id)}
                  className="btn-status"
                >
                  <i
                    className={`fa ${
                      task.status === "pending" ? "fa-play" : "fa-check"
                    }`}
                  ></i>
                </button>

                <button onClick={() => editTask(task)} className="btn-edit">
                  <i className="fa fa-edit"></i>
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn-delete"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoListApp;
