import './App.css';
import "./sb-admin-2.min.css"
import Dashboard from './sb-admin-site/dashboard/Dashboard';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './sb-admin-site/Login';
import Portal from './sb-admin-site/Portal';
import Userlist from './sb-admin-site/dashboard/Userlist';
import UserCreate from './sb-admin-site/dashboard/UserCreate';
import UserView from './sb-admin-site/dashboard/UserView';
import UserEdit from './sb-admin-site/dashboard/UserEdit';






function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/portal" element={<Portal/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="user-list" element={<Userlist/>}/>
      <Route path="user-create" element={<UserCreate/>}/>
      <Route path="user-view/:id" element={<UserView/>}/>
      <Route path="user-edit/:id" element={<UserEdit/>}/>
      </Route> 
    </Routes>
    </BrowserRouter>
 
  );
}

export default App;
