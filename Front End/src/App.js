import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Home } from "./Home";
import { Transactionspage } from "./Transactions";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import { BudgetPlanner } from "./BudgetPlanner";
import { IncomePlanner } from "./IncomePlanner";
import { HousingPlanner } from "./HousingPlanner";
import { LivingPlanner } from "./LivingPlanner";
import { TravelPlanner } from "./TravelPlanner";
import { EntertainmentPlanner } from "./EntertainmentPlanner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-sm bg-light navbar-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/transactions"
              >
                Transactions
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/budgetplanner"
              >
                Budget Planner
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactionspage />} />
          <Route path="/budgetplanner/" element={<BudgetPlanner />} />
          <Route path="/incomePlanner" element={<IncomePlanner />} />

          <Route path="/budgetplanner/*" element={<BudgetPlanner />}>
            <Route index element={<Navigate to="income" replace />} />
            <Route path="income" element={<IncomePlanner />} />
            <Route path="housing" element={<HousingPlanner />} />
            <Route path="living" element={<LivingPlanner />} />
            <Route path="travel" element={<TravelPlanner />} />
            <Route path="entertainment" element={<EntertainmentPlanner />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
