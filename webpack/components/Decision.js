import React from 'react'
import { Link } from 'react-router'

class Decision extends React.Component {
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
                <div className="col-sm-9 desciImage">
                    <img src="/img/logo1.svg" alt="Logo" className="decLogo center-block"/>
                    <h1 className="decWhiteAndShadow decCenter decFont">Restaurant</h1>
                    <h1 className="decWhiteAndShadow decCenter decFont">Randomizer...</h1>
                    <br/>
                    <br/>
                    <h1 className="decWhiteAndShadow decCenter">Emails have been sent!</h1>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <Link to='/thankyou'>
                                <button className="btn btn-success btn-lg center-block" type="button">Accept!</button>
                            </Link>
                        </div>
                        <div className="col-sm-4">
                            <button className="btn btn-danger btn-lg center-block" type="button" onClick={this.sendInvites}>Reject!</button>
                        </div>
                        <div className="col-sm-4">
                            <form className="button_to" method="post" action="/users/sign_out"><input type="hidden" name="_method" value="delete" /><input className="btn btn-lg btn-warning" type="submit" value="Log Out!" /></form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <h1 className="decWhiteAndShadow decCenter">Decision Time!</h1>
                    <br />
                    <h3 className="decWhiteAndShadow decCenter">Check your email for which restaurant was picked.</h3>
                    <h3 className="decWhiteAndShadow decCenter">If the restaurante that was picked is not the liking of someone in your party, never fear. You or someone in your party can reject the choice.</h3>
                    <h3 className="decWhiteAndShadow decCenter">But remember you can only reject the selection twice.  3rd time is the charm.</h3>
                    <img src="/img/chef2.svg" alt="Logo" className="chefLogo center-block critMargin" />
                </div>
            </div>
        </div>
    }
}

export default Decision


{/* <div className="container-fluid">
    <div className="row critTopGrad">
        <div className="col-sm-9 desciImage">
            <img src="/img/logo1.svg" alt="Logo" className="decLogo center-block"/>
            <h1 className="decWhiteAndShadow decCenter decFont">Restaurant</h1>
            <h1 className="decWhiteAndShadow decCenter decFont">Randomizer...</h1>
            <br/>
            <br/>
            <h1 className="decWhiteAndShadow decCenter">Emails have been sent!</h1>
            <br/>
            <div className="row">
                <div className="col-sm-6">
                    <button className="btn btn-success btn-lg center-block" type="button" onClick={this.sendInvites}>Accept!</button>
                </div>
                <div className="col-sm-6">
                    <button className="btn btn-danger btn-lg center-block" type="button" onClick={this.sendInvites}>Reject!</button>
                </div>
            </div>
        </div>
        <div className="col-sm-3">
            <h1 className="decWhiteAndShadow decCenter">Decision Time!</h1>
            <br />
            <h3 className="decWhiteAndShadow decCenter">Check your email for which restaurant was picked.</h3>
            <h3 className="decWhiteAndShadow decCenter">If the restaurante that was picked is not the liking of someone in your party, never fear. You or someone in your party can reject the choice.</h3>
            <h3 className="decWhiteAndShadow decCenter">But remember you can only reject the selection twice.  3rd time is the charm.</h3>
        </div>
    </div>
</div> */}
