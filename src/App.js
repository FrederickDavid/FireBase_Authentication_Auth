import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./Header/Header";
import AddScreen from "./Home/AddScreen";
import EditScreen from "./Home/EditScreen";
import ViewScreen from "./Home/ViewScreen";
import Register from "./Home/Register";
import Login from "./Home/Login";

function App() {
  const [search,setSearch] = React.useState("")
  return (
    <div>
      <Router>
        <Header search={search} setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={<ViewScreen search={search} setSearch={setSearch}/>}/>
          <Route path='/addScreen' element={<AddScreen />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/addScreen/:id' element={<EditScreen />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
