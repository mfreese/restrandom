import React from 'react'

const Thankyou = (props) => <div className="container-fluid">
    <div className="row critTopGrad">
        <div className="col-sm-9 decImage">
            <img src="/img/logo1.svg" alt="Logo" className="decLogo center-block"/>
            <h1 className="decWhiteAndShadow decCenter decFont">Restaurant</h1>
            <h1 className="decWhiteAndShadow decCenter decFont">Randomizer...</h1>
            <br/>
            <br/>
            <h1 className="decWhiteAndShadow decCenter">Choice has been made!</h1>
        </div>
        <div className="col-sm-3">
            <h1 className="decWhiteAndShadow decCenter">Decision Made!</h1>
            <br />
            <h3 className="decWhiteAndShadow decCenter">Check your email for which restaurant was picked.</h3>
            <h1 className="decWhiteAndShadow decCenter">Go Eat.</h1>
            <h1 className="decWhiteAndShadow decCenter">Now!</h1>
        </div>
    </div>
</div>



export default Thankyou
