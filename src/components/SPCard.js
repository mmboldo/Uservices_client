import React from 'react'

const SPCard = (props) => {

    const { companyName, description } = props.serviceProvider

    return (
        <div className="sp-card-container">
            <div className="sp-card" onClick={() => props.handleSPGoBack(props.serviceProvider)}>
                {/* <img className="dog-card-img" src={img} alt={companyName} title={companyName}/> */}
                <h2><b>Company Name : </b>{companyName} </h2>
                <p><b>Description : </b>{description} </p>
                <div className="clear"></div>
            </div>
        </div>
    )
}

export default SPCard