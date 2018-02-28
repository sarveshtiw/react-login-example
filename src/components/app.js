import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'

// Container load
import Login from '../containers/login/Content';
import Dashboard from '../containers/dashboard/Content';

// Auth token
import RequireAuth from '../containers/RequireAuth';

const App = (props) => {
    return (
        <Provider store={props.store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/dashboard" component={RequireAuth(Dashboard)}/>
                    <Route render={() => <h1>Page not found</h1>}/>
                </Switch>
            </Router>
        </Provider>
    );
}
export default App;
