import './App.css';
import React, {useState} from 'react';
import UserList from './components/UserList'
import UserDetail from './components/UserDetail'
function App() {

  const [activeUserId, setActiveUserId] = useState(null)

  return (
    <div className='App'>
      <div>
        <UserList setActiveUserId = {setActiveUserId}/>
        <hr />
        <div className='active-user-id'>Active User Id: {activeUserId}</div>
      </div>
      {
        activeUserId && <div>
        <UserDetail activeUserId= {activeUserId}/>
      </div>
      }
      

    </div>
  );
}

export default App;
