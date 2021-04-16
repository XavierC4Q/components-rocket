import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <Router>
      <Route path="/" component={Landing} />
    </Router>
  );
}

export default App;
