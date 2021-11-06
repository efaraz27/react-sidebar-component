import './index.css';
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom';
import SidebarTailwind from './SidebarTailwind';


function App() {
  return <div className="App">
    <Router>
        <SidebarTailwind />
    </Router>
  </div>;
}

export default App;
