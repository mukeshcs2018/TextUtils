import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" About="About me"></Navbar>

      <div className="container my-3">
        <TextForm heading = "Enter your Text to analyze below."></TextForm>
      </div>
    </>
  );
}

export default App;
