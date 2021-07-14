import React, { Component } from "react";
import axios from 'axios';
import AuthService from "../services/auth.service";
import ProfilePic from "../assets/Profile.jpg";

const Category = props => {
    return (<>
        <option value={props.category.name}>{props.category.name}</option>
    </>
    )
}

const currentUser = AuthService.getCurrentUser();
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export default class RegisterServiceProviderProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/auth/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:8080/api/auth/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    categoryList() {
        return this.state.categories.map(function (currentCategory, i) {
            return <Category category={currentCategory} key={i} />;
        });
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
                <div className="w3-container w3-light-grey  w3-padding-32 ">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                    <div className="form-group w3-center">
                        <button className="w3-button w3-gray ">Upload Picture</button>
                    </div>
                    <div className="form-group">
                        <select id="category" className="w3-input w3-border" type="text">
                            <option value="">--Please select a Category--</option>
                            {this.categoryList()}
                        </select>
                    </div>
                    <div className="form-group">
                        <p><input
                            type="text"
                            className="w3-input w3-border"
                            name="subcategory"

                            style={{ width: '100%' }}
                            placeholder="Name a Subcategory for you Service. Ex.: Dog Walker"
                        />
                        </p>
                    </div>
                    <div className="form-group">
                        <p><textarea
                            type="text"
                            className="w3-input w3-border"
                            name="serviceDescription"
                            rows="4"
                            style={{ width: '100%' }}
                            placeholder="Describe your Service"
                        />
                        </p>
                    </div>
                    <div className="form-group" >
                        <input
                            type="text"
                            className="w3-input w3-border"
                            name="price"

                            style={{ width: '25%', display: "inline-block" }}
                            placeholder="Price per hour"
                        />&nbsp;&nbsp;
                        <select id="daysOfTheWeek" className="w3-input w3-border" type="text" style={{ width: '30%', display: "inline-block" }}>
                            <option value="">--Availability--</option>
                            {daysOfWeek.map(day => <option value={day}>{day}</option>)}
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
                        <button className="w3-button w3-red ">Submit</button>
                    </div>
                </div >
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