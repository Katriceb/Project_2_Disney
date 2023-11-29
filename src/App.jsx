import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// IMPORT OUR COMPONENTS
import Form from "./Components/Form";
import DisneyList from "./Components/DisneyList";
import Nav from "./Components/Nav"
import Results from "./Components/Results";
import About from "./Page/About";
import Home from "./Page/Home";
import Search from"./Page/Search";

function App() {
  
  const [Disney, setDisney] = useState([]);



  const getDisney = async (searchTerm) => {
    const baseUrl = "https://api.disneyapi.dev/character?name=";
    
    const url = baseUrl  + searchTerm;
    // make fetch request and store response
    try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
      const response = await fetch(url);
      console.log(url);
      const data = await response.json();
      console.log(data);
      setDisney(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const movieArray = ["Olaf", "Stitch", "Elsa"];
    
   
 getDisney(movieArray[Math.floor(Math.random() * movieArray.length)]); 
  }, []);
   
   
  
  return (
    <div className="App">
          <Form disneysearch={getDisney} />
    
      <DisneyList Disney={Disney} />
    </div>
  );
}

export default App;