import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin></Admin>}/>
        <Route path="" element />
        <Route path="" element />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
