import React from 'react'

const SPItem = (props) => {

    const { companyName, profileImages } = props.serviceProvider
    const SPimage = profileImages[0];

    return (
        <div className="dog-item-container">
            <div className="dog-item" onClick={() => props.handleSPView(props.serviceProvider)}>
                <div className="dog-img-div">
                    <img className="dog-img" src={`/uploads/${SPimage}`} alt={companyName} />
                </div>
                <div className="dog-info">
                    <h2>{companyName} </h2>
                    {/* <p> {props.pet.adoption ? 'I am adopted' : "Adopt me"}</p> */}
                </div>
                <div className="clear"></div>
            </div>
        </div>
    )
}


export default SPItem