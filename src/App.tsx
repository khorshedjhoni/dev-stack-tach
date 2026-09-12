import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Technologies from "./Components/Technologies";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import type { TechnologyProps } from "./type/type";

function App() {
  const techPromises = async (): Promise<TechnologyProps[]> => {
    const res = await fetch("/data.json");
    const data:TechnologyProps[] = await res.json();

    return data;
  };

  return (
    <>
      <div className="container mx-auto px-14 mt-2">
        <Navbar></Navbar>
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <Technologies techPromises={techPromises()}></Technologies>
        </Suspense>
        <Footer></Footer>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
