import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import PrivateRoute from './PrivateRoute'
import { useSelector } from 'react-redux'

const App = () => {

  const signedIn = useSelector((state) => state.authedUser.value !== "")
  const user = useSelector((state) => state.authedUser.value)

  console.log(signedIn)
  console.log(user)
  return (
    <Router>
      <>
        <div className='container'>
          <Switch>
            <div>
              <PrivateRoute path='/' exact component={Home} signedin={signedIn} />
              <Route path='/sign-in' exact component={SignIn} />
            </div>
          </Switch>
        </div>
      </>
    </Router>
  )
};

export default App;