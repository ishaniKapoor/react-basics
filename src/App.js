import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
function App(props) {
  return (
    <div>
      <Header name="Anna" color="purple"/>
      <Main greet="Howdy"/>
      <Sidebar greet="Hi"/>
    </div>
  );
}

export default App;
