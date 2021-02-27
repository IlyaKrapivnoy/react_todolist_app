import React, { useState } from 'react'
import { Container, Paper } from '@material-ui/core';
import Header from './components/Header'
import Tasks from './components/Tasks'
import NoTask from './components/NoTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meet Mike',
        day: 'Sep 7th at 3:30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Play the guitar',
        day: 'Sep 8th at 1:20',
        reminder: false,
    },
    {
        id: 3,
        text: 'Code a website',
        day: 'Sep 11th at 7:00',
        reminder: true,
    },
    {
      id: 4,
      text: 'Go to the gym',
      day: 'Sep 12th at 9:30',
      reminder: true,
    },
    {
      id: 5,
      text: 'Running',
      day: 'Sep 13th at 11:20',
      reminder: false,
  },
])

// Delete Task
const deleteTask = id => {
  setTasks(tasks.filter((task) => task.id !== id))
}
// Toggle Reminder
const toggleReminder = id => {
  setTasks(tasks.map((task) => 
  task.id === id 
  ? { ...task, reminder: !task.reminder } 
  : task))
}

  const onClick = () => {
    console.log('Click')
  }
  return (
    <div className="App">
      <div style={{ paddingTop: 50 }}></div>
      <Container maxWidth="sm" >
        <Paper elevation={3}>
          <Header title='To-Do List' buttonName='Add' onClick={onClick} />
          {tasks.length > 0 ? 
          (<Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
            />) 
          : (<NoTask />)}
        </Paper> 
      </Container>
    </div>
  );
}

export default App;
