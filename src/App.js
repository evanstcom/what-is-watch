import {Footer} from './Layout/Footer'
import {Main} from './Layout/Main'
import {Header} from "./Layout/Header";
import {Route, Routes} from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
