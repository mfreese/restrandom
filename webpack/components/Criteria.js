import React from 'react'

class Criteria extends React.Component {
    constructor(props) {
        super(props)
        classAutoBind(this)
        // this.state = {}
        this.state = sharedState()
    }
    
    render() {
        return <div>
            <div className="row critTopGrad">
                {/* <!-- Top picture --> */}
                <div className="col-sm-9 critImage">

                </div>
                <div className="col-sm-3">
                    <h1 className="critWhiteAndShadow critCenter">Past</h1>
                    <h1 className="critWhiteAndShadow critCenter">Places</h1>
                    <br />
                    <button className="btn btn-default center-block" type="submit">The Past!</button>
                </div>
            </div>
            <div className="row critTopGrad">
                {/* <!-- 3 assets --> */}
                <div className="col-sm-4">
                    <div>
                        <img src="/img/chef2.svg" alt="Logo" className="carLogo center-block" />
                    </div>
                    <div className="form-group critCenter">
                         <label htmlFor="place">Place</label>
                         <input type="text" className="form-control" id="place" placeholder="What are you in the mood for?" />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/dollar2.svg" alt="Logo" className="carLogo center-block" />
                    </div>
                    <div className="form-group critCenter">
                       <label htmlFor="cost">Price</label>
                       <input type="text" className="form-control" id="cost" placeholder="Price you are willing to pay?" />
                     </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/car2.svg" alt="Logo" className="carLogo center-block" />
                    </div>
                    <div className="form-group critCenter">
                       <label htmlFor="distance">Distance</label>
                       <input type="range" min="1" max="10" defaultValue="1" className="form-control" id="distance" placeholder="How far are YOU willing to go?" />
                     </div>
                </div>
            </div>
            <div className="row">
                {/* <!-- Button --> */}
                <div className="col-sm-12">
                    <button className="btn btn-default center-block" type="submit">Find Food!</button>
                </div>
            </div>
        </div>
    }
}

export default Criteria
