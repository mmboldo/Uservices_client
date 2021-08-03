import React, { Component } from 'react'
import SPList from '../components/SPList'
import SPViewer from '../components/SPViewer'
// import { serviceProvider } from '../../../Uservices_server/app/models'

export default class SPContainer extends Component {

    // 1st, the state Model of what I need
    state = {
        serviceProviders: [],
        serviceProvider: {},
        isSPViewOn: false,
        sortValue: '',
        inputValue: '',
    } // might need more


    // fetch api to bring the pet list
    componentDidMount() {
        fetch('http://localhost:8080/serviceProviders')
            .then(res => res.json())
            .then(SPsData => {
                //  console.log(SPsData)
                this.setState({
                    serviceProviders: SPsData
                })
            })
    } // OK

    // onChange event for the filter
    SPFilterOnChange = (event) => {
        console.log("hi from onChange", event.target.value)
        this.setState({
            inputValue: event.target.value
        })
    } // OK

    // Optional filter
    handleSortSPs = (event) => {
        //  console.log("sort button", this.state.sortValue)
        this.setState({
            sortValue: event.target.value
        })
    } // OK

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
    } // OK

    // When you click a pet and want to see its info
    handleSPView = (SPItem) => {
        //  console.log("click", petItem)
        this.setState({
            serviceProvider: SPItem,
            isSPViewOn: !this.state.isSPViewOn
        })
    } // OK

    // Back button
    handleSPGoBack = () => {
        this.setState({
            serviceProvider: {},
            isSPViewOn: false
        })
    } // OK

    // Adopt function. Could use it for Hire Service Provider
    // adoptDoggy = (petItem) => {
    //     // console.log("bring doggy", petItem)
    //     this.setState({
    //         pet: petItem

    //     })
    //     fetch("http://localhost:3000/adoptions", {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             "Authorization": localStorage.token
    //         },
    //         body: JSON.stringify({
    //             user_id: localStorage.loggedInUserId,
    //             pet_id: petItem.id
    //         })
    //     })
    //         .then(res => res.json())
    //         .then(adoptedDoggy => {
    //             // console.log(adoptedDoggy)
    //             const updatedPets = this.state.pets.map(pet => {
    //                 return pet.id === adoptedDoggy.id ? adoptedDoggy : pet
    //             })
    //             this.setState({
    //                 pets: updatedPets,
    //                 pet: adoptedDoggy
    //             })
    //         })

    // }

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