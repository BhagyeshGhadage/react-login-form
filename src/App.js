import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LogIn from './components/LogIn'
import Form from './components/Form'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="form-wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/welcome" component={Welcome} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
