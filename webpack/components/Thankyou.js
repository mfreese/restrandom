import React from 'react'
import Header from './Header'

const Thankyou = (props) => <div>
    <div className="row imageThanks">
        <div className="col-sm-12">
            <Header />
        </div>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <h1 className="fontColorShadowMain fontCenter font100">Thank you!</h1>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <h1 className="fontColorShadowCrit fontCenter">You should probably go eat, you do look hungry.</h1>
    </div>
</div>




export default Thankyou



// const Thankyou = (props) => <div>
//     <div className="row critTopGrad">
//         <div className="col-sm-9 decImage">
//             <img src="/img/logo1.svg" alt="Logo" className="decLogo center-block"/>
//             <h1 className="decWhiteAndShadow decCenter decFont">Restaurant</h1>
//             <h1 className="decWhiteAndShadow decCenter decFont">Randomizer...</h1>
//             <br/>
//             <br/>
//             <h1 className="decWhiteAndShadow decCenter">Your food choice awaits you!</h1>
//         </div>
//         <div className="col-sm-3">
//             <h1 className="decWhiteAndShadow decCenter">Decision Made!</h1>
//             <br />
//             <h3 className="decWhiteAndShadow decCenter">The selection is in your email.  What are you waiting for?</h3>
//             <h1 className="decWhiteAndShadow decCenter">Go Eat.</h1>
//             <h1 className="decWhiteAndShadow decCenter">Now!</h1>
//             <br />
//             <img src="/img/car2.svg" alt="Logo" className="carLogo center-block critMargin" />
//             <br />
//             <form className="button_to" method="post" action="/users/sign_out"><input type="hidden" name="_method" value="delete" /><input className="btn btn-lg btn-danger center-block" type="submit" value="Log Out!" /></form>
//         </div>
//     </div>
// </div>
