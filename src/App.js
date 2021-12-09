import { ToastContainer, toast } from 'react-toastify';
import TopMenu from './components/topMenu/TopMenu';

function App() {

  const notify = () => toast("Wow so easy!");

  return (
    <div className="App">
      <TopMenu />
      <button onClick={notify} >Notify!!!</button>
      <ToastContainer />

    </div>
  );
}

export default App;
