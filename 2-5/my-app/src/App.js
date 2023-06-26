import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header title={'Learn React A'} />
      <Welcome firstName={'j'} lastName={'ce'} withImg={true} />
    </div>
  );
}
export default App;
