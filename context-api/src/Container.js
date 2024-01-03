import ChangeTheme from './components/ChangeTheme'
import ChangeLanguage from './components/ChangeLanguage'
import Footer from './components/Footer'
import {useTheme} from './contexts/ThemeContext'

function Container() {

    const {theme} = useTheme()

  return (
    <div className={`container ${theme}`}>
        <ChangeTheme/>
        <hr />
        <ChangeLanguage/>
        <Footer/>
    </div>
  )
}

export default Container