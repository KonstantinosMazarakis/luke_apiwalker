import './App.css';
import Form from './components/Form';
import {BrowserRouter,Link,Route,Switch} from "react-router-dom";
import Api from './components/api';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Form></Form>
      <Switch>
      <Route exact path="/:topic/:id"><Api></Api></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
