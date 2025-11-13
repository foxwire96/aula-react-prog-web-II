import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from './components/Banner';
import Cards from './components/Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header> </Header>
  <Footer></Footer>
  //<Banner></Banner>
  <Cards></Cards>
  <App />

  </>,
    
);
