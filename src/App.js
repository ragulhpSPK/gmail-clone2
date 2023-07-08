import "./App.css";
import BodySection from "./Components/BodySection";
import Navbar from "./Components/Navbar";
import SideSection from "./Components/SideSection";
import RightSide from "./Components/rightSide";

function App() {
  return (
    <div>
      <div className="h-[10vh] !w-screen">
        <div className="">
          <Navbar />
        </div>
      </div>
      <div className="flex h-screen">
        <div className="w-[15vw]">
          <div className="">
            <SideSection />
          </div>
        </div>
        <div className="w-[82vw]  bg-white rounded-lg">
          <BodySection />
        </div>
        <div className="w-[3vw] flex justify-center">
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
