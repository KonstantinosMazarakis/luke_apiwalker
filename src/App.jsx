import './App.css';
import Form from './components/Form';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Api from './components/api';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form></Form>
        <Switch>
          <Route exact path="/:topic/:id">
            <Api>
            </Api>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
