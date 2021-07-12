/** @format */

// import logo from "./logo.svg";
import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";

import Quizzes from "./components/quizzes";
import MainCanvas from "./components/canvas/homeCanvas";

function App() {
  return (
    <div className='App'>
      <header>
        <ul>
          <li>
            <NavLink exact to='/quizzes' activeClassName='activeNavButton'>
              Quizzes
            </NavLink>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path='/quizzes' component={Quizzes} />
      </Switch>
      <MainCanvas />
    </div>
  );
}

export default App;
