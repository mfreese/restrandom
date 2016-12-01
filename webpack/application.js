import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Criteria from './components/Criteria'

// Only needed when you load scripts in head tag
document.addEventListener('DOMContentLoaded', function() {

    // Normal React mounting code...
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='/criteria' component={Criteria} />
        </Router>
        ,document.getElementById('app')
    )

})
