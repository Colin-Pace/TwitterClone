import './App.css';
import SidebarLeft from './SidebarLeft';
import Center from './Center';
import SidebarRight from './SidebarRight';

function App() {
  return (
    <div className="App">
      <SidebarLeft/>
      <Center/>
      <SidebarRight/>      
    </div>
  );
}

export default App;
