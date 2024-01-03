import User from "./components/User";
import Counter from "./components/Counter";
import Colors from "./components/Colors";
import Form from "./components/Form";
import { useState } from "react";
import Users from "./components/Users";

const user = {
  name : "Burak Baloglu",
  city : "Bİlecik",
  age : 22
}

function App() {

  const [isVisible, setIsVisible]= useState(true)

  return (
    <div >
      {/* <User title = "kisi" data={user} friends = {["Ahmet", "Murat", "Ayşe"]} />      
      
      <Colors/> */}
      {/* {isVisible && <Counter/>} */}
      {/* <button onClick={() => setIsVisible(!isVisible)}>Göster/Gizle</button> */}
      {/* <Form/> */}
      <Users/>
    </div>
  );
}

export default App;
