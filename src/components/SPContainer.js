import React, { Component } from 'react'
import SPList from '../components/SPList'
import SPViewer from '../components/SPViewer'
export default class SPContainer extends Component {

    state = {
        serviceProviders: [],
        serviceProvider: {},
        isSPViewOn: false,
        sortValue: '',
        inputValue: '',
    }

    componentDidMount() {
        fetch('http://localhost:8080/serviceProviders')
            .then(res => res.json())
            .then(SPsData => {
                this.setState({
                    serviceProviders: SPsData
                })
            })
    }

    SPFilterOnChange = (event) => {
        console.log("hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSortSPs = (event) => {
        this.setState({
            sortValue: event.target.value
        })
    }

    sortSPs = (serviceProviders) => {
        if (this.state.sortValue === "companyName") {
            return [...serviceProviders].sort((a, b) => {
                if (a.companyName > b.companyName) {
                    return 1
                } else if (a.companyName < b.companyName) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        else if (this.state.sortValue === "description") {
            return [...serviceProviders].sort((a, b) => {
                if (a.description > b.description) {
                    return 1
                } else if (a.description < b.description) {
                    return -1
                } else {
                    return 0
                }
            })
        }
        else {
            return serviceProviders
        }
    }

    handleSPView = (SPItem) => {
        this.setState({
            serviceProvider: SPItem,
            isSPViewOn: !this.state.isSPViewOn
        })
    }

    handleSPGoBack = () => {
        this.setState({
            serviceProvider: {},
            isSPViewOn: false
        })
    }

    render() {

        const filteredSPs =
            this.state.serviceProviders.filter(serviceProvider => {
                return serviceProvider.companyName.toLowerCase().includes(this.state.inputValue.toLowerCase())
            })

        return (
            <div className="sp-container">
                <label>Sort Service Providers</label>
                <select name="sortValue" onChange={this.handleSortSPs}>
                    <option value="All">All</option>
                    <option value="companyName">Company Name</option>
                    <option value="description">Description</option>
                </select>
                {
                    this.state.isSPViewOn ?
                        <SPViewer serviceProvider={this.state.serviceProvider}
                            handleSPGoBack={this.handleSPGoBack} />
                        :
                        <SPList serviceProviders={this.sortSPs(filteredSPs)}
                            handleSPView={this.handleSPView}
                            SPFilterOnChange={this.SPFilterOnChange}
                            inputValue={this.state.inputValue} />
                }
            </div>
        )
    }
}