import "./App.css";
import BodySection from "./Components/BodySection";
import Navbar from "./Components/Navbar";
import SideSection from "./Components/SideSection";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex h-screen">
        <div className="w-[15vw]">
          <SideSection />
        </div>
        <div className="w-[80vw] bg-white rounded-lg">
          <BodySection />
        </div>
      </div>
    </div>
  );
}

export default App;
