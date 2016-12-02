import React from 'react'
// import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
// import { browserHistory } from 'react-router'
// import classAutoBind from 'react-helpers/dist/classAutoBind'

class Criteria extends React.Component {
    // constructor(props) {
    //     super(props)
    //     classAutoBind(this)
    //     // this.state = {}
    //     this.state = sharedState()
    // }

    // componentDidMount() {
    //     attachSharedState(this)
    // }
    //
    // componentWillUnmount() {
    //     detachSharedState(this)
    // }
    //
    // getCart() {
    //     fetch('/cart?token=' + sharedState().cartToken, {
    //         method: 'GET'
    //     })
    //     .then(response => response.json())
    //     .then(this.handleCart)
    //
    // }

    render() {
        return <div>
            <div className="row critTopGrad">
                {/* <!-- Top picture --> */}
                <div className="col-sm-9 critImage">
                    <div className="critWhiteAndShadow">
                        <img src="../img/logoTest2.svg" alt="Logo" className="suLogo center-block"/>
                        <h1>Restaurant Randomizer</h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="critWhiteAndShadow">
                        <h3>Here is where the rules will be placed.</h3>
                    </div>
                </div>
                <div className="col-sm-3 critCenter">
                    <h3 className="critWhiteAndShadow">Invite People</h3>
                    <label htmlFor="Email1"></label>
                    <input type="email" className="form-control" id="Email1" placeholder="Email Invite 1" />
                    <label htmlFor="Email1"></label>
                    <input type="email" className="form-control" id="Email2" placeholder="Email Invite 2" />
                    <label htmlFor="Email1"></label>
                    <input type="email" className="form-control" id="Email3" placeholder="Email Invite 3" />
                    <label htmlFor="Email1"></label>
                    <input type="email" className="form-control" id="Email4" placeholder="Email Invite 4" />
                    <label htmlFor="Email1"></label>
                    <input type="email" className="form-control" id="Email5" placeholder="Email Invite 5" />
                </div>
            </div>
            <div className="row critBottomGrad">
                {/* <!-- 3 assets --> */}
                <div className="col-sm-4">
                    <div>
                        <img src="/img/chef2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" id="type" name="type">
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
                       <label htmlFor="cost">Price</label>
                       <input type="range" min="1" max="4" defaultValue="1" className="form-control" id="cost" placeholder="Price you are willing to pay?" />
                     </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/car2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                       <label htmlFor="distance">Miles Away</label>
                       <input type="range" min="1" max="10" defaultValue="1" className="form-control" id="distance" placeholder="How far are YOU willing to go?" />
                     </div>
                </div>
                <button className="btn btn-default center-block" type="submit">Find Food!</button>
            </div>
            {/* <div className="row">
                <div className="col-sm-12">
                    <button className="btn btn-default center-block" type="submit">Find Food!</button>
                </div>
            </div> */}
        </div>
    }
}

export default Criteria
