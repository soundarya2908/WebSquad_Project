import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findDonorByIdThunk, findDonorThunk} from "../services/donor-thunks";
import {json, Link, useLocation} from "react-router-dom";
import "./index.css";
import InventoryItem from "./inventory-item";
import DonorItem from "../donor-list-component/donor-item";

const DonorDetails = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const donorID = parseInt(paths[2]);

    const {donor, loading2} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorThunk)
        dispatch(findDonorByIdThunk(donorID))
    },[dispatch])

    const donorArray = useSelector(
        (state) => state.donorsData);


    // const donor = JSON.parse(donors.find(d => d._id === donorID));
    // console.log(donorID)

       // console.log(donor)
    console.log(typeof (donor.foodavailable))


    return(
        <>
            {
                loading2 && <li className="list-group-item">
                         Loading...
                     </li>

            }

            {
                <div className="container ps-5 pe-5">
                    {/*<img className="w-100 mt-2 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>*/}
                    {/*<div className="d-inline-block w-100 h-25">*/}
                    {/*    <img className="wd-img-overlap w-25 h-25 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>*/}
                    {/*</div>*/}


                    <div className="image-container">
                        <div className="main_image">
                            <img className="w-100 mt-2 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
                        </div>
                        <div className="overlay_image">
                            <img className="w-100 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>
                        </div>
                    </div>

                    <div className="d-inline-block float-start text-start w-100">
                        <h3>Restaurant Name</h3>
                        <div className="row d-block">
                            <span>address</span> . <span>rating</span>
                        </div>
                        <div className="row d-block">
                            <span>Location</span> . <span>Link for maps</span>
                        </div>
                    </div><br/>
                    <div className="row d-block text-start">
                        <h5>Inventory Available</h5>
                    </div>
                    <div className="d-inline text-start">
                        <div className="list-group">

                            <InventoryItem key={donor._id} food={donor.foodavailable}/>

                            {/*<InventoryItem/>*/}
                            {/*<InventoryItem/>*/}
                        </div>
                    </div>

                </div>
            }
        </>
    );
};
export default DonorDetails;