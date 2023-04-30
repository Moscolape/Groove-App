import './App.css';
import BottomNav from './components/bottom-nav/bottom-nav.component';
import MainComponent from './components/main-section/main-section.component';
import SideBarComponent from './components/sidebar/sidebar.component';


function App() {
  return (
    <>    
      <SideBarComponent/>
      <MainComponent/>
      <BottomNav/>
    </>
  );
}

export default App;
