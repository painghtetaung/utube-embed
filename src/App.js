import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//component
import Uembed from "./components/u-embed.js"
import ReactPlayer from "./components/RecPlayer.js"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ReactPlayer/>} / >
          <Route exact path="/react-youtube" element={<Uembed/>} / >

        </Routes>
      </Router>
    </>
  );
}

export default App;
