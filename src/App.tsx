import './App.css';
import Header from './Header/Header';
import { LoadingView } from './LoadingView/LoadingView';

function App() {
  return (
    <div className="App">
      <h1>Pan pa' mi</h1>
      <p>Estamos horneando algo muy especial</p>
      <LoadingView />
      <Header />
    </div>
    
  );
}

export default App;
