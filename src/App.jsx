import "./App.css";
import Navbar from "./components/Navbar";
import Video from "./components/Videos";
import Titular from "./components/Titular";
import Boton from "./components/Colttoaction";
import "bootstrap/dist/css/bootstrap.min.css";
import Descripcion from "./components/Descripcion";
import Tarjeta from "./components/Card";
import { data } from "./components/Card";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Titular></Titular>
      <Video></Video>
      <Boton></Boton>
      <Descripcion></Descripcion>
      <Tarjeta items={data} />
    </>
  );
}

export default App;
