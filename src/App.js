import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./pages/Main";
import { CardDetail } from "./pages/CardDetail";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/detail/:name" element={<CardDetail /> }/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
