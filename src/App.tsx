import { Routes, Route } from "react-router-dom";

import WizardPage from "./pages/Wizard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/wizard" element={<WizardPage />} />
        <Route path="/wizard/:step" element={<WizardPage />} />
      </Routes>
    </div>
  );
}

export default App;
