import React from 'react'
import { Link } from 'react-router'
import Header from './Header'


class Accept extends React.Component {
    sendInvites() {
        console.log(this.state)
        // fetch('/api/invites', {
        //     method: 'POST',
        //     credentials: 'same-origin',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // })
        // .then(response => response.json())
        // .then(response => browserHistory.push('/thankyou'))

    }

    render() {

        return <div>
            <div className="row critTopGrad">
                <div className="col-sm-12 imageAccept">
                    <Header />
                    <br/> <br/> <br/> <br/>
                    <h1 className="acceptMain">Accepted!</h1>
                    <br/> <br/>
                    <h1 className="acceptBottom">Seriously.  Go Eat.  Now!</h1>
                </div>
            </div>
        </div>
    }
}

export default Accept
