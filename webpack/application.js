import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Criteria from './components/Criteria'
import Thankyou from './components/Thankyou'
import Decision from './components/Decision'
import Reject from './components/Reject'
import Rejecttwo from './components/Rejecttwo'
import Accept from './components/Accept'
import Done from './components/Done'

// Only needed when you load scripts in head tag
document.addEventListener('DOMContentLoaded', function() {

    // Normal React mounting code...
    if (document.getElementById('app') !== null) {
        ReactDOM.render(
            <Router history={browserHistory}>
                <Route path='/criteria' component={Criteria} />
                <Route path='/thankyou' component={Thankyou} />
                <Route path='/decision' component={Decision} />
                <Route path='/reject' component={Reject} />
                <Route path='/rejecttwo' component={Rejecttwo} />
                <Route path='/accept' component={Accept} />
                <Route path='/done' component={Done} />
            </Router>
            ,document.getElementById('app')
        )
    }

})
