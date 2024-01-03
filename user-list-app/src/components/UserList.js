import React, {useEffect, useState} from 'react'
import axios from 'axios'
function UserList({setActiveUserId}) {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .finally(()=> setLoading(false))
    }, [])

  return (
    <div>
        <h2>Users</h2>

        {
            loading && <div>Yükleniyor...</div>
        }

        <ul className='userlist'>
            {
                users.map((user) => (<li onClick={() => setActiveUserId(user.id)} key={user.id}>{user.name}</li>))
            }
        </ul>

    </div>
  )
}

export default UserList