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
        // validation goes here
        // check that this.state.friends.length is greater than 0
        // if it is then run fetch, if it is not then show error message alert()

        // var emailVar = document.getElementById('emailNumber0').value

        // if (!this.state.friends.length) {
        //     return (
        //         alert('You need at least 1 email address')
        //     );
        // }
        let state = this.state
        state.price = state.price.length
        fetch('/api/search', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(state),
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
                            <option value="BK">Bakeries</option>
                            <option value="BA">Barbeque</option>
                            <option value="BR">Breakfast</option>
                            <option value="BT">British</option>
                            <option value="BN">Brunch</option>
                            <option value="BU">Burgers</option>
                            <option value="CA">Cafes</option>
                            <option value="CJ">Cajun</option>
                            <option value="CT">Cantonese</option>
                            <option value="CI">Caribbean</option>
                            <option value="CH">Chinese</option>
                            <option value="CR">Creole</option>
                            <option value="CU">Cuban</option>
                            <option value="DE">Delis</option>
                            <option value="DS">Dim Sum</option>
                            <option value="DN">Diners</option>
                            <option value="ET">Ethiopian</option>
                            <option value="FI">Filipino</option>
                            <option value="FO">Food Truck</option>
                            <option value="FR">French</option>
                            <option value="GA">Gastropubs</option>
                            <option value="GE">German</option>
                            <option value="GR">Greek</option>
                            <option value="IN">Indian</option>
                            <option value="IT">Italian</option>
                            <option value="JA">Japanese</option>
                            <option value="MD">Mediterranean</option>
                            <option value="ME">Mexican</option>
                            <option value="PE">Peruvian</option>
                            <option value="PI">Pizza</option>
                            <option value="PU">Pubs</option>
                            <option value="RA">Ramen</option>
                            <option value="SA">Salad</option>
                            <option value="SW">Sandwiches</option>
                            <option value="SE">Seafood</option>
                            <option value="SO">Soup</option>
                            <option value="SH">Southern</option>
                            <option value="ST">Steakhouses</option>
                            <option value="SU">Sushi Bars</option>
                            <option value="SZ">Szechuan</option>
                            <option value="TH">Thai</option>
                            <option value="VG">Vegan</option>
                            <option value="VE">Vegetarian</option>
                            <option value="VI">Vietnamese</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/dollar4.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                       <label className="fontColorShadowSide" htmlFor="price">Price {this.state.price}</label>
                       <input type="range" min="1" max="4" className="form-control" id="price" onChange={(e) => this.setState({price:'$'.repeat(e.target.value)})} value={this.state.price.length} />
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
                <div className="col-sm-12">
                    <hr></hr>
                    <h2 className="fontColorShadowSide">Don't be that person, invite your friends.</h2>
                    <Friends addEmail={this.addEmail} />
                    <button className="btn btn-lg center-block buttonColor" type="button" onClick={this.sendInvites}>Send Invites!</button>
                </div>
            </div>
        </div>
    }
}

export default Criteria
