import React from 'react'
import {Link, useNavigate} from "react-router-dom"
function Menu() {

  const navigate = useNavigate()

  return (
    <div>
        <ul className='menu'>

            <li>
              <a href="/">Anasayfa</a>
            </li>

            <li className=''>
              <Link to="/">Anasayfa</Link>
            </li>
            <li>
              <Link to="users">Kullanıcılar</Link>
            </li>
            <li>
              <Link to="contact">İletişim</Link>
            </li>
            <a href='#/' onClick={()=>navigate(-1)}>Geri</a>
        </ul>
    </div>
  )
}

export default Menu