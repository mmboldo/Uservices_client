import React from 'react'
import SPItem from './SPItem'

const SPList = (props) => {

    return (
        <>
            <label htmlFor="search">Search by name </label>
            <input type="text" value={props.inputValue} onChange={props.SPFilterOnChange} />
            <div className="dog-list">
                {
                    props.serviceProviders.map(serviceProvider => {
                        return <SPItem serviceProvider={serviceProvider} key={serviceProvider.id} handleSPView={props.handleSPView} />
                    })
                }
            </div>
        </>
    )
}

export default SPList