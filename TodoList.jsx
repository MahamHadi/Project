import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Example of using Google Fonts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif; /* Replace with desired font */
    /* Other styles */
  }
`;

// Include the GlobalStyle component in your app


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInBackground = keyframes`
  from {
    background-color: #f8f9fa;
  }
  to {
    background-color: #e9ecef;
  }
`;

const Navbar = styled.nav`
  background-color: #35e4d3;
  padding: 15px 0;
  margin-left:400px;
  margin-top:0px;
  
  a {
    color: white;
    font-size: 50px; /* Adjust the font size */
    text-align:center;
    
`;

const TodoContainer = styled.div`



   max-width: 600px;
   margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: linear-gradient(45deg, #f8f9fa, #e9ecef); /* Gradient background */
  margin-top: 20px;
  margin-left:400px;
  animation: ${fadeInBackground} 1s ease-in-out;
`;


const TodoItem = styled.li`
  animation: ${fadeIn} 0.5s ease-in-out;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #e9ecef;
  }
`;

const DeleteButton = styled.button`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const EditButton = styled.button`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;



const TodoList = () => {

  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');




  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };



  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput('');
    }
  };

  // const handleEditTask = (taskId) => {
  
  //   console.log('Edit task with ID:', taskId);
  // };

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
  

   const handleDeleteTask = (taskId) => {
     const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
   };

   

  return (
    
    <div>
     
      <Navbar className="navbar navbar-expand-lg navbar-dark">
     
        <div className="container">
          <div className='bounce'>
          
          <a className="navbar-brand" href="/">
            <div className='font'>
            LoomList
            </div>
            
          </a>
        </div>
        </div>
        
      </Navbar>
    
     
    
      <TodoContainer className='scale-up'>
        <h2 className="text-center mb-4">To-Do List</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            className="form-control"
            placeholder="Enter your task"
          />
         
          <button onClick={handleAddTask} className="btn btn-primary ">
         
            <button className='scale-up'>Add Task to List</button>
          </button>

          
         </div>
         
        <ul className="list-group">
          {tasks.map((task) => (
            <TodoItem key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              {task.text}
              <EditButton onClick={() => handleEditTask(task.id)} className="btn btn-info btn-sm mr-2">Edit</EditButton>
              <DeleteButton onClick={() => handleDeleteTask(task.id)} className="btn btn-danger btn-sm">Delete</DeleteButton>
           
              </TodoItem>
          ))}
        </ul>

        
      
      </TodoContainer>
    </div>
    
  );
};

export default TodoList;
