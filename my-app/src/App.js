
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    {/* Using Navbar component */}
      <Navbar title="TextUtils" about="About Us"/>
   
    {/* Using textBox */}
    <div className="container my-3">
      <TextForm heading = "Enter Text Below:"/>
    </div>


    </>
  );
}

export default App;
