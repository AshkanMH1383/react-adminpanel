import Sidebar from './components/global/Sidebar';
import Topbar from './components/global/Topbar';
import { Routes , Route } from 'react-router-dom';
import './scss/app.scss';
// import pages
import Dashboard from './components/dashboard';
import Users from './components/users';


const App = () => {
  return (<> 
  <aside className='sidebar box-white col-md-3 me-2'>
      <Sidebar />
  </aside>
  <main className='col-md-9'>
      <Topbar />
      <Routes>
          <Route path='/' element={<Dashboard /> } />
          <Route path='/users' element={<Users /> } />
      </Routes>
  </main>
  </>)
}
export default App;