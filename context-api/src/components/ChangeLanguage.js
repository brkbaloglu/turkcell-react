import {useLanguage} from "../contexts/LanguageContext"

function ChangeLanguage() {
    const {language, setLanguage} = useLanguage()

  return (
    <div>
        <div>Active Language : {language}</div>
        <button onClick={()=>setLanguage("tr")}>TR</button>
        <button onClick={()=>setLanguage("en")}>EN</button>
        <button onClick={()=>setLanguage("de")}>DE</button>
    </div>
  )
}

export default ChangeLanguage