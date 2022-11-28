import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
