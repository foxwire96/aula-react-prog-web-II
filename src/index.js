import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Banner from './components/Banner';
import Cards from './components/Cards';
import Container from './components/Container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header> </Header>
  <Banner></Banner>
  <Container></Container>
  <Cards></Cards>
  <Footer></Footer>
  <App />

  </>,
    
);
