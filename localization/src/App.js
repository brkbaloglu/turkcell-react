import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import { useEffect, useState } from 'react';
const messages = {
  "tr-TR": {
    title: "Merhaba",
    description : "{count} yeni mesajınız var"
  },
  "en-US": {
    title : "Hello",
    description: "You have {count} new messages"
  }
}

function App() {


  const isLocale = localStorage.getItem("locale")
  const defaultLocale = isLocale ? isLocale : navigator.language
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])


  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id='title' />
        <br />
        <FormattedMessage id='description' values={ {count : 5}}/>
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>

      </IntlProvider>
    </div>
  );
}

export default App;
