import React from 'react'
import Header from './Header'
import Friends from './Friends'
import { browserHistory } from 'react-router'


class Criteria extends React.Component {
    constructor(props) {
        super(props)
        this.addEmail=this.addEmail.bind(this)
        this.sendInvites=this.sendInvites.bind(this)
        this.state = {
            friends: [],
            type: 'BU',
            price: '$',
            miles: 5
        }
    }

    addEmail(e) {
        let updatedFriends = this.state.friends
        updatedFriends[e.target.getAttribute('data-id')] = e.target.value
        this.setState({friends:updatedFriends})
    }

    sendInvites() {
        fetch('/api/invites', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => browserHistory.push('/thankyou'))

    }

    render() {
        return <div>
            <Header />
            <Friends addEmail={this.addEmail} />
            <div className="row critBottomGrad">
                <div className="col-sm-4">
                    <div>
                        <img src="/img/chef2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" id="type" onChange={(e) => this.setState({type:e.target.value})} value={this.state.type}>
                            <option value="BU">Burgers</option>
                            <option value="PI">Pizza</option>
                            <option value="ME">Mexican</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/dollar2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                       <label htmlFor="price">Price {this.state.price}</label>
                       <input type="range" min="1" max="4" className="form-control" id="price" onChange={(e) => this.setState({price:'$'.repeat(e.target.value)})} value={this.state.price.length} />
                     </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/car2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                    <label htmlFor="miles">{this.state.miles} Miles Away</label>
                    <input type="range" min="1" max="15" className="form-control" id="miles" onChange={(e) => this.setState({miles:e.target.value})} value={this.state.miles} />
                     </div>
                </div>
            </div>
            {/* <br /><br /><br /><br /> */}
            <button className="btn btn-success btn-lg center-block" type="button" onClick={this.sendInvites}>Send Invites!</button>
            {/* <br /><br /><br /><br /> */}
        </div>
    }
}

export default Criteria
