import React from 'react'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const SPCard = (props) => {

    const { companyName, description } = props.serviceProvider

    return (
        <div className="sp-card-container">
            <div className="sp-card">
                <h2><b>Company Name : </b>{companyName} </h2>
                <p><b>Description : </b>{description} </p>
                <div className="clear"></div>
                <div>
                    <p>Rate:</p><Rater rating={2} total={5} />
                </div>
            </div>
        </div>
    )
}

export default SPCard