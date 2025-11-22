import AppRoutes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Banner from "./components/Banner";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Banner></Banner>
      <Container></Container>
      <AppRoutes />
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;