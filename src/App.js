import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';


function App() {
  return (
    <div className="App flex flex-col items-center mt-7 ">
      
      <h1 className=" mb-5 text-xl mt-20 " >Redux-toolkit Todo app</h1>
      <AddTodos/>
      <Todos />
    </div>
  );
}

export default App;
