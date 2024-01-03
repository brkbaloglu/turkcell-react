import React, {useState} from 'react'
import PropTypes from "prop-types"
function User({title, data, friends}) {

  const [user, setUser] = useState({name : "Burak", surname : "Baloglu"})

  return (
    <div>


      {user.name} {user.surname}
      <button onClick={() => setUser((prev) => ({...prev, name: "Ahmet"}))}>İsim Degistir</button>
      <button onClick={() => setUser((prev) => ({...prev, surname: "Celik"}))}>Soyisim Degistir</button>

        {/* <div>Title:{title}</div>
        <div>Name:{data.name}</div>
        <div>Age:{data.age}</div>
        <div>City:{data.city}</div>
        <div>Friends : {friends.map((friend, index) => (<div key={index}>{friend}</div>))}</div>
        <hr />
         */}
    </div>
  )
}

// User.propTypes = {
//   title: PropTypes.string,
//   data:PropTypes.exact({
//     name : PropTypes.string,
//   age:PropTypes.number,
//   city:PropTypes.string
//   }),
//   friends : PropTypes.array

// }

// User.defaultProps = {
//   title : "kisi"
// }

export default User