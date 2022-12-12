import React, {useEffect} from "react";
import DonorItem from "./donor-item";
import {useDispatch, useSelector} from "react-redux";
import {findDonorThunk} from "../services/donor-thunks";

const DonorList = ({status}) => {
    const {donors, donorsloading} = useSelector(
        state => state.donorsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findDonorThunk(status))
    }, [dispatch])
    return (
        <>
            <h2>
                Find places with food available
            </h2>
            <div className="container">

                <div className="row">
                    {
                        donorsloading && <div>
                            Loading...
                        </div>
                    }
                    {
                        // donors.map(donor => <div className="col-12 col-md-6 col-xl-4"> <DonorItem key={donor.userName} donor={donor}/></div>)
                        donors.map(donor => <div key={donor._id} className="col-12 col-md-6 col-xl-4"> <DonorItem key={donor._id} donor={donor}/></div>)
                    }
                </div>
            </div>
        </>

    );
};
export default DonorList;