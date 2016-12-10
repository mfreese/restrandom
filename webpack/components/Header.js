import React from 'react'

const Header = (props) => <div className="row">
    <div className="col-sm-10 topBar fontColorShadowMain">
            <h1 className="fontHead">Restaurant Randomizer</h1>
    </div>
    <div className="col-sm-2 topBar">
        <form className="button_to" method="post" action="/users/sign_out"><input type="hidden" name="_method" value="delete" /><input className="btn btn-md btn-danger pull-right loMargin" type="submit" value="Log Out!" /></form>
    </div>
</div>

export default Header
