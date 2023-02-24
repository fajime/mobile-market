import { Navigate, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Detail } from "./components/Detail";
import { Carrito } from "./components/Carrito";
function App() {
  return (
    <AppProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
