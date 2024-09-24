
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // install pacakage from router dom
import './App.css';
import CreateUsers from './Components/CreateUser';
import UpdateUsers from './Components/UpdateUsers';
import Users from './Components/Users';
function App() {


  return (

    // these are the routes for pages 
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/create' element={<CreateUsers />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )

}
export default App
