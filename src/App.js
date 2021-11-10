import './App.css';
import './components/Input/input.css'
import { Footer } from './components/Footer';
import { RootRouter } from "./router/RootRouter";

function App() {
  return (
    <div className ="app">
    <RootRouter />
    <Footer />
    </div>
  );
}

export default App;
