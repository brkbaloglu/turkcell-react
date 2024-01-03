import React from 'react'
import { useContext } from 'react'
import {useTheme} from '../contexts/ThemeContext'
import {useLanguage} from '../contexts/LanguageContext'

function Footer() {

    const {theme, setTheme} = useTheme()
    const {language, setLanguage} = useLanguage()
  return (
    <div>
        <hr />
        <div>Active theme: {theme}</div>
        <button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>Toggle theme</button>
        <hr />
        <div>Active Language: {language}</div>
        <button onClick={() => setLanguage("tr")}>TR</button>
        <button onClick={() => setLanguage("en")}>EN</button>
        <button onClick={() => setLanguage("de")}>DE</button>
    </div>
  )
}

export default Footer