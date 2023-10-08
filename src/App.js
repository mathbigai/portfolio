
import './App.css';
import { Banner } from './components/banner';
import { NavegationBar } from './components/navbar';
import { Projects } from './components/projects';
import { Skills } from './components/skills';

function App() {
  return (
    <div className="App">
      <NavegationBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
