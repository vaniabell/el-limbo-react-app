import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/router/AppRouter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Logo />
      <NavBar />
      <Header/>
      <Introduction/>
      <AppRouter/>
      <Footer/>
      <BrowserRouter/>



    </>

  );
}

export default App;
