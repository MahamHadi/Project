// TaskApp.js
import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import TaskList from './TaskList';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    const editedTaskText = prompt('Enter the updated task:', taskToEdit?.text);

    if (editedTaskText !== null && editedTaskText !== '') {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, text: editedTaskText } : task
      );
      setTasks(updatedTasks);
    }
  };

  const transitions = useTransition(tasks, (task) => task.id, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 'auto' },
    leave: { opacity: 0, height: 0 },
  });

  return (
    <div>
      <h1>Task App</h1>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <TaskList
            tasks={[item]}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            onEdit={handleEditTask}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default TaskApp;
