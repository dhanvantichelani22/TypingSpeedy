import { GlobalStyles } from "./Styles/global";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer } from "react-toastify";
import { Routes,Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import 'react-toastify/dist/ReactToastify.css'; // react toastify css link
import UserPage from "./Pages/UserPage";

function App() {
   const {theme} = useTheme();

  return (
    // themeprovider -> pass on theme to style component
    // style component-> global style
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/user' element={<UserPage/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;


