import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Caroucel from "./components/caroucel/Caroucel";
import Text from "./components/text/Text";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Caroucel />
      <Text />
      <Footer />
    </>
  );
}

export default App;
