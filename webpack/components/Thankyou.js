import React from 'react'

const Thankyou = (props) => <div class="container-fluid">
    <div class="row critTopGrad">
        <div class="col-sm-9 decImage">
            <img src="/img/logo1.svg" alt="Logo" class="decLogo center-block"/>
            <h1 class="decWhiteAndShadow decCenter decFont">Restaurant</h1>
            <h1 class="decWhiteAndShadow decCenter decFont">Randomizer...</h1>
            <br/>
            <br/>
            <h1 class="decWhiteAndShadow decCenter">Email has been sent!</h1>
        </div>
        <div class="col-sm-3">
            <h1 class="decWhiteAndShadow decCenter">Decision Made!</h1>
            <br />
            <h3 class="decWhiteAndShadow decCenter">Check your email for which restaurant was picked.</h3>
            <h3 class="decWhiteAndShadow decCenter">If the restaurante that was picked is not the liking of someone in your party, never fear. You or someone in your party can reject the choice.</h3>
            <h3 class="decWhiteAndShadow decCenter">But remember you can only reject the selection twice.  3rd time is the charm.</h3>
        </div>
    </div>
</div>



export default Thankyou
