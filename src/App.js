import './App.css';
import Addition from './components/addition';
import MainTodo from './components/todo/main-todo';
function App() {
  return (
    <div className='main-container'>
      <div className='addition'>
        <Addition />
      </div>
      <div className='todo'>
        <MainTodo />
      </div>
    </div>
  );
}

export default App;
