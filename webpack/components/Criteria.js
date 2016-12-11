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
            price: 1,
            miles: 5
        }
    }

    addEmail(e) {
        let updatedFriends = this.state.friends
        updatedFriends[e.target.getAttribute('data-id')] = e.target.value
        this.setState({friends:updatedFriends})
    }

    sendInvites() {
        // validation goes here
        // check that this.state.friends.length is greater than 0
        // if it is then run fetch, if it is not then show error message alert()

        // var emailVar = document.getElementById('emailNumber0').value

        // if (!this.state.friends.length) {
        //     return (
        //         alert('You need at least 1 email address')
        //     );
        // }

        fetch('/api/search', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(this.state),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => browserHistory.push('/decision'))

    }

    render() {
        return <div>
            <Header />
            <div className="row grad">
                <div className="col-sm-12">
                    <h2 className="fontColorShadowSide">You aren't being judged, pick what you want.</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div>
                        <img src="/img/chef2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                        <label className="fontColorShadowSide" htmlFor="type">Type</label>
                        <select className="form-control fontColorShadowSide" id="type" onChange={(e) => this.setState({type:e.target.value})} value={this.state.type}>
                            <option value="AM">American</option>
                            <option value="PI">Pizza</option>
                            <option value="ME">Mexican</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/dollar4.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                       <label className="fontColorShadowSide" htmlFor="price">Price {this.state.price}</label>
                       <input type="range" min="1" max="4" className="form-control" id="price" onChange={(e) => this.setState({price:e.target.value})} value={this.state.price.length} />
                     </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/car2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                    <label className="fontColorShadowSide" htmlFor="miles">{this.state.miles} Miles Away</label>
                    <input type="range" min="1" max="15" className="form-control" id="miles" onChange={(e) => this.setState({miles:e.target.value})} value={this.state.miles} />
                     </div>
                </div>
            </div>
            <div className="row">
            <hr></hr>
                <h2 className="fontColorShadowSide">Don't be that person, invite your friends.</h2>
                <Friends addEmail={this.addEmail} />
                <button className="btn btn-success btn-lg center-block" type="button" onClick={this.sendInvites}>Send Invites!</button>
            </div>
        </div>
    }
}

export default Criteria
