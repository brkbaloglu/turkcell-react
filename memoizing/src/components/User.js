import React from 'react'

function User({data}) {
  console.log("User component re-rendered")
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default React.memo(User)