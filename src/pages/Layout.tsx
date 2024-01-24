import { Outlet } from "react-router";
import BurgerMenu from "../components/BurgerMenu";

export const Layout = () => {
  return (
    <>
      <header>
        <BurgerMenu></BurgerMenu>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
