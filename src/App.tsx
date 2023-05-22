import { Home } from "./components/Home";

import "./app.scss";
import BurgerMenu from "./components/BurgerMenu";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

function App() {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <Home></Home>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default App;
