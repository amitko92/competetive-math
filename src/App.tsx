import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import MainContent from './components/layout/MainContent';


function App() {


  return (
    <div className='h-[100dvh] bg-stone-50'>
      <Header />
      <div className='min-h-[80dvh] flex'>
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;