import React, { Component } from "react";
import axios from 'axios';
import AuthService from "../services/auth.service";
import ProfilePic from "../assets/Profile.jpg";
import Categories from "./Categories";


const currentUser = AuthService.getCurrentUser();
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default class RegisterServiceProviderProfile extends Component {

    constructor(props) {
        super(props);

        this.onChangeSubcategory = this.onChangeSubcategory.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            subcategory: '',
            description: '',
            price: '',
            availability: ''
        };
    }

    onChangeSubcategory(e) {
        this.setState({
            subcategory: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }

    onChangeAvailability(e) {
        this.setState({
            availability: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newServiceProviderProfile = {
            subcategory: this.state.subcategory,
            description: this.state.description,
            price: this.state.price,
            availability: this.state.availability
        }

        axios.post('http://localhost:8080/serviceProviderRegister/' + currentUser.id + "/" + "60eba4ef4fd56e33f50c0253", newServiceProviderProfile)
            .then(response => console.log(response.data)
            .catch(error => console.error(error)));

        this.setState({
            subcategory: '',
            description: '',
            price: '',
            availability: ''
        })
    }


    render() {
        return (
            <div>
                <div className="w3-display-container w3-container" >
                    <img src={ProfilePic} alt="LoginPic" style={{ width: '100%' }} />
                </div>
                <br />
                <div className="w3-container w3-black w3-padding-32 ">
                    <h1>
                        {currentUser.firstName}'s Service Provider Registration Page
                    </h1>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="w3-container w3-light-grey  w3-padding-32 ">
                        <img
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-img"
                            className="profile-img-card"
                        />
                        <div className="form-group w3-center">
                            <button className="w3-button w3-gray ">Upload Picture</button>
                        </div>
                        <Categories />
                        <div className="form-group">
                            <p><input
                                type="text"
                                className="w3-input w3-border"
                                name="subcategory"
                                value={this.state.subcategory}
                                onChange={this.onChangeSubcategory}
                                style={{ width: '100%' }}
                                placeholder="Name a Subcategory for you Service. Ex.: Dog Walker"
                            />
                            </p>
                        </div>
                        <div className="form-group">
                            <p><textarea
                                type="text"
                                className="w3-input w3-border"
                                name="description"
                                rows="4"
                                style={{ width: '100%' }}
                                placeholder="Describe your Service"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                            </p>
                        </div>
                        <div className="form-group" >
                            <input
                                type="text"
                                className="w3-input w3-border"
                                name="price"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                style={{ width: '25%', display: "inline-block" }}
                                placeholder="Price per hour"
                            />&nbsp;&nbsp;
                            <select id="availability" onChange={this.onChangeAvailability} value={this.state.availability} className="w3-input w3-border" type="text" style={{ width: '30%', display: "inline-block" }}>
                                <option value="">--Availability--</option>
                                {daysOfWeek.map(day => <option>{day}</option>)}
                            </select> &nbsp;
                            <input
                                type="text"
                                className="w3-input w3-border"
                                name="price"

                                style={{ width: '32%', display: "inline-block" }}
                                placeholder="Upload pictures (up to 3 pictures)"
                            />&nbsp; &nbsp;
                            <button className="w3-button w3-gray " style={{ display: "inline-block" }}>Upload</button>
                        </div>
                        <div className="form-group w3-center">
                            <button type="submit" className="w3-button w3-red ">Submit</button>
                        </div>
                    </div >
                </form>

            </div>
        )
    }
}





// import React from "react";
// import AuthService from "../services/auth.service";
// import ProfilePic from "../assets/Profile.jpg";
// import { Multiselect } from 'multiselect-react-dropdown';

// const RegisterServiceProviderProfile = () => {
//     const currentUser = AuthService.getCurrentUser();
//     const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     const arrayCategories = []
//     const getAllCategories = async () => {
//         const allCategories = await AuthService.getCategories();

//         allCategories.data.map(result => arrayCategories.push(result))
//         return arrayCategories;
//     }

//     getAllCategories();
//     console.log(arrayCategories)

//     return (
//         <div>
//             <div className="w3-display-container w3-container" >
//                 <img src={ProfilePic} alt="LoginPic" style={{ width: '100%' }} />
//             </div>
//             <br />
//             <div className="w3-container w3-black w3-padding-32 ">
//                 <h1>
//                     {currentUser.firstName}'s Service Provider Registration Page
//                 </h1>
//             </div>
//             <div className="w3-container w3-light-grey  w3-padding-32 ">
//                 <img
//                     src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
//                     alt="profile-img"
//                     className="profile-img-card"
//                 />
//                 <div className="form-group w3-center">
//                     <button className="w3-button w3-gray ">Upload Picture</button>
//                 </div>
//                 <div className="form-group">
//                     <select id="category" className="w3-input w3-border" type="text">
//                         <option value="">--Please select a Category--</option>
//                         <option value="Pet">Pet</option>
//                         <option value="Beauty">Beauty</option>
//                         <option value="Health Care">Health Care</option>
//                     </select>
//                 </div>
//                 <div className="form-group">
//                     <p><input
//                         type="text"
//                         className="w3-input w3-border"
//                         name="subcategory"

//                         style={{ width: '100%' }}
//                         placeholder="Name a Subcategory for you Service. Ex.: Dog Walker"
//                     />
//                     </p>
//                 </div>
//                 <div className="form-group">
//                     <p><textarea
//                         type="text"
//                         className="w3-input w3-border"
//                         name="serviceDescription"
//                         rows="4"
//                         style={{ width: '100%' }}
//                         placeholder="Describe your Service"
//                     />
//                     </p>
//                 </div>
//                 <div className="form-group" >
//                     <input
//                         type="text"
//                         className="w3-input w3-border"
//                         name="price"

//                         style={{ width: '25%', display: "inline-block" }}
//                         placeholder="Price per hour"
//                     />&nbsp;&nbsp;
//                     <select id="daysOfTheWeek" className="w3-input w3-border" type="text" style={{ width: '30%', display: "inline-block" }}>
//                         <option value="">--Availability--</option>
//                         {daysOfWeek.map(day => <option value={day}>{day}</option>)}
//                     </select> &nbsp;
//                     <input
//                         type="text"
//                         className="w3-input w3-border"
//                         name="price"

//                         style={{ width: '32%', display: "inline-block" }}
//                         placeholder="Upload pictures (up to 3 pictures)"
//                     />&nbsp; &nbsp;
//                     <button className="w3-button w3-gray " style={{ display: "inline-block" }}>Upload</button>
//                 </div>
//                 <div className="form-group w3-center">
//                     <button className="w3-button w3-red ">Submit</button>
//                 </div>
//             </div >
//         </div >
//     );
// };

// export default RegisterServiceProviderProfile;