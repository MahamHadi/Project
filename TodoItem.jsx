// TaskItem.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const TaskItem = ({ task, onDelete, onToggle, onEdit }) => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div style={animationProps}>
      <div>
        <span
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
          onClick={onToggle}
        >
          {task.text}
        </span>
        <span>Status: {task.completed ? 'Completed' : 'Pending'}</span>
        <button onClick={() => onEdit(task.id)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </animated.div>
  );
};

export default TaskItem;
