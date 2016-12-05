import React from 'react'
// import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'
// import { browserHistory } from 'react-router'


class Criteria extends React.Component {
    // constructor(props) {
    //     super(props)
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

    // $(document).ready(function(){
    //
    //   $("input[type='range']").change(function() {
    //     slider = $(this);
    //     value = (slider.val() -1);
    //
    //     $('p.rangeLabel').removeClass('selected');
    //     $('p.rangeLabel:eq(' + value + ')').addClass('selected');
    //
    //   });
    //
    //   $('p.rangeLabel').bind('click', function(){
    //     label = $(this);
    //     value = label.index();
    //     $("input[type='range']").attr('value', value)
    //                             .trigger('change');
    //   });
    //
    // });

    render() {
        return <div>
            <div className="row critTopGrad">
                {/* <!-- Top picture --> */}
                <div className="col-sm-9 critImage">
                    <div className="critWhiteAndShadow">
                        {/* <img src="../img/logoTest2.svg" alt="Logo" className="suLogo center-block"/> */}
                        <img src="../img/logo3.svg" alt="Logo" className="suLogo1"/>
                        {/* <h1>Restaurant Randomizer</h1> */}
                    </div>

                    <div className="critWhiteAndShadow">
                        <h4>Choose type, price and distance and press enter.</h4>
                        <h4>You'll receive an email giving you a random selection.</h4>
                        <h4>You can reject the selection twice, but 3rd time is the charm.</h4>
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
                       <input type="range" min="1" max="4" defaultValue="1" className="form-control" id="cost" />
                       {/* <div class="rangeWrapper">
                            <input id="slide" type="range" min="1" max="4" step="1" value="1"  />
                            <p class="rangeLabel selected">Label A</p>
                            <p class="rangeLabel">Label B</p>
                            <p class="rangeLabel">Label C</p>
                            <p class="rangeLabel">Label D</p>
                        </div> */}
                     </div>
                </div>
                <div className="col-sm-4">
                    <div>
                        <img src="/img/car2.svg" alt="Logo" className="carLogo center-block critMargin" />
                    </div>
                    <div className="form-group critCenter">
                       <label htmlFor="distance">Miles Away</label>
                       <input type="range" min="1" max="15" defaultValue="1" className="form-control" id="distance" />
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
