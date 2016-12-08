import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Criteria from './components/Criteria'
import Thankyou from './components/Thankyou'
import Decision from './components/Decision'

// Only needed when you load scripts in head tag
document.addEventListener('DOMContentLoaded', function() {

    // Normal React mounting code...
    if (document.getElementById('app') !== null) {
        ReactDOM.render(
            <Router history={browserHistory}>
                <Route path='/criteria' component={Criteria} />
                <Route path='/thankyou' component={Thankyou} />
                <Route path='/decision' component={Decision} />
            </Router>
            ,document.getElementById('app')
        )
    }

})
