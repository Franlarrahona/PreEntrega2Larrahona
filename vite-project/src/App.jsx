
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const App = () => {
  return(
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:category" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
  )
}