import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { ScoreProvider } from './Context/scoreContext';

function App() {
  return (
    <ScoreProvider>
      <Header />
      <Main />
    </ScoreProvider>
  );
}

export default App;
