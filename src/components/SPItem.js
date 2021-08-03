import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const SPItem = (props) => {

    const { companyName, profileImages } = props.serviceProvider
    const SPimage = profileImages[0];

    return (
        <div className="sp-item-container">
            <div className="sp-item" onClick={() => props.handleSPView(props.serviceProvider)}>
                <div className="sp-img-div">
                    <img className="sp-img" src={`/uploads/${SPimage}`} alt={companyName} />
                </div>
                <div className="dog-info">
                    <h2>{companyName} </h2>
                </div>
                <p>Rate:</p><Rater rating={2} total={5} interactive={false} />
                <div className="clear"></div>
            </div>
        </div>
    )
}

export default SPItem
