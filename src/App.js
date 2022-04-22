import { Header } from "./components/header";
import { Content } from "./components/content";
import { Draver } from "./components/draver";

function App() {
  return (
    <div className="wrapper">
      <Draver />
      <Header />
      <Content />
    </div>
  );
}

export default App;
