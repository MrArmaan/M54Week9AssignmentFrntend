import { createRoot } from "react-dom/client";
import LogOrSign from "./components/logOrSign/LogOrSign";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <>
      <div className="wrapper">
        <LogOrSign />
      </div>
    </>
  );
}

root.render(<App />);

export default App;
