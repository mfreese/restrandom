import React from 'react'

class Friends extends React.Component {
    render() {
        const emailFields = []

        for (let i = 0; i < 4; i++) {
            emailFields.push(<div className="col-sm-3" key={i}><input type="email" className="form-control" placeholder={"Email Invite " + (i+1)} onChange={this.props.addEmail} data-id={i} id={"emailNumber" + (i)}/></div>)
        }

        return <div className="row critFriendsGrad emailPad">
            <div className="col-sm-12">
                {/* <h3 className="critWhiteAndShadow">Invite People</h3> */}
                <div className="row">
                    {emailFields}
                </div>
                <br /><br />
            </div>
        </div>
    }
}

export default Friends
