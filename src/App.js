import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import Task from './components/Task';
import TaskForm from './components/TaskForm';
function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' />
      </div>
      <div className='list-main'>
        <h1>My Tasks</h1>
        <TaskForm />
        <Task text='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
