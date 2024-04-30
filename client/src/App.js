import "./App.css";
import Features from "./Components/Features";
import FileUploader from "./Components/FileUploader";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FileUploader />
      <Features />
      <Footer/>
    </div>
  );
}

export default App;
