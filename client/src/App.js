import "./App.css";
import Features from "./Components/Features";
import FileUploader from "./Components/FileUploader";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="w-full md:w-10/12 lg:w-8/12 px-4 md:px-8 mx-auto">
        <FileUploader />
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default App;
