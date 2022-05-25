import MakeToDo from "./components/MakeToDo";
import EditTodos from "./components/EditTodos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MakeToDo />} />
          <Route path="/edit/:id" element={<EditTodos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
