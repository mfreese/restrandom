import React from 'react'
import Header from './Header'

const Reject = (props) => <div>
    <div className="row">
        <div className="col-sm-12 imageReject">
            <Header />
            <br/> <br/> <br/> <br/>
            <h1 className="rejectMain">Rejected!</h1>
            <br/> <br/>
            <h1 className="rejectBottom">Someone didn't like that place!</h1>
            <h1 className="rejectBottom">Check your email for another selection.</h1>
        </div>
    </div>
</div>



export default Reject
