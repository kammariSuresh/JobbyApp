import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './component/Home'
import ProtectedRoute from './component/ProtectedRoute'
import AboutJob from './component/AboutJob'
import AllJobs from './component/AllJobs'
import NotFound from './component/NotFound'
import LoginForm from './component/LoginForm'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJob} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
