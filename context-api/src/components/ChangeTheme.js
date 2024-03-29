import React from 'react'
import {useTheme} from '../contexts/ThemeContext'

function ChangeTheme() {

    const {theme, setTheme} = useTheme()

  return (
    <div>
        <div>Active Theme: {theme}</div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
    </div>
  )
}

export default ChangeTheme