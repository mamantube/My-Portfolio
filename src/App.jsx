import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import Dashboard from "./layout/Dashboard";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  Component={Dashboard}>
        <Route path="/" Component={Home} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
