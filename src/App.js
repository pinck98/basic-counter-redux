import './App.css';
import Form from './Components/Form/Index';
import Header from './Components/Header/Index';
import Sidebar from './Components/Sidebar/Index';

function App() {
  return (
    <div className="App" style={{height :'100vh'}}>
      <Header/>
      <Sidebar/>
      <Form/>
    </div>
  );
}

export default App;
