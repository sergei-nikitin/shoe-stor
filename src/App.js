import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Draver } from "./components/draver/Draver";

function App() {
  return (
    <div className="wrapper">
      <Draver />
      <Header />
      <Content></Content>
    </div>
  );
}

export default App;
