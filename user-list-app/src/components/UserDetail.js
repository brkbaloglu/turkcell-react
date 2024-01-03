import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserDetail({activeUserId}) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
    .then(response => setUser(response.data))
    .finally(() => setLoading(false))
  },[activeUserId])

  return (
    <div>
      <h2>User Details</h2>

      {loading && <div>Yükleniyor...</div>}

      {!loading && <pre>
      {
        JSON.stringify(user, null,2)
      }
      </pre>}

    </div>
  )
}

export default UserDetail