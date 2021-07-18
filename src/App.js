import logo from './logo.svg';
import './App.css';
import Article from './components/Article';
import InputBox from './components/InputBox';
import Counter from './components/Counter';

const App=()=> {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>{alert("OK")}}>
          ボタン
        </button>
        <Article text="石川県総務部" subtext="デジタル推進課" id="de" />
        <Article text="石川県総務部" subtext="管財課" id="ka" />
        <InputBox />
        <Counter text="Up" />
        <Counter text="Down" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
