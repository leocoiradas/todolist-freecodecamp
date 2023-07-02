import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png'
import TaskList from './components/TaskList';
function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img src={freeCodeCampLogo} className='freecodecamp-logo' />
      </div>
      <div className='list-main'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
