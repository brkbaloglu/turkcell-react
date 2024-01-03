import { ThemeContextProvider } from "./contexts/ThemeContext";
import './styles.css'
import { LanguageContextProdiver } from "./contexts/LanguageContext";
import Container from "./Container";
import Footer from "./components/Footer";
function App() {
  return (
      <>
        <LanguageContextProdiver>
        <ThemeContextProvider>
        <Container/>
      </ThemeContextProvider>
      
      </LanguageContextProdiver>
      </>
  
  );
}

export default App;
