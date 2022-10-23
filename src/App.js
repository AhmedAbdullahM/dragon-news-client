import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import {RouterProvider} from 'react-router-dom'
import { routes } from './Routes/Routes/Routes';
function App() {
  return (
    <div >
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
