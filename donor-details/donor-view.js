import React, {useState} from "react";
import InventoryItemDonor from "../inventory/inventory-donor-view";
import InventoryItemEdit from "../inventory/inventory-item-edit";
import {useDispatch, useSelector} from "react-redux";

const DonorViewOfDonor = (
    {
      donor = {
          _id: "123",
          userName: "rest1",
          name: "restaurant1",
          location: "boston",
          image: "changing-lifes.jpg",
          dp: "logo.png",
          about : "about the donor1",
          followers: 123,
          following: 234,
          liked: true,
          likes: 14,
          rating: 4.2,
          foodavailable: {
              "apple pie": 2,
              "pasta": 10
          },
          foodavailabilityposts: "array",
          storetimings:"10:00am to 9:00pm",
          rewardpoints: 987,
          foodreviews: {
              "review1": "best place!",
              "review2": "decent place to find food"
          }
      }
  }
) => {
    let [edit, setEdit] = useState(false);

    const editHandler = () => {
        setEdit(!edit);
    }

    return(
        <div className="container ps-5 pe-5">
            <div className="image-container">
                <div className="main_image">
                    <img className="w-100 mt-2 rounded-2" src={`/images/${donor.image}`} alt="landing background"/>
                </div>
                <div className="overlay_image">
                    <img className="w-100 rounded-pill float-start" src={`/images/${donor.dp}`} alt="profile"/>
                </div>
            </div>

            <div className="row d-block text-start">
                <h5>Inventory Available</h5>
                {
                    !edit &&
                    <button onClick={editHandler} className="mt-2 btn rounded-pill float-end border-secondary border-thin fw-bold me-3">
                        edit
                    </button>
                }
                {
                    edit &&
                    <button onClick={editHandler} className="mt-2 btn rounded-pill float-end border-secondary border-thin fw-bold me-3">
                        save
                    </button>
                }
            </div>
            <div className="text-start">
                <div className="row">
                    {
                        !edit &&
                        <InventoryItemDonor key={donor._id} food={donor.foodavailable}/>
                    }
                    {
                        edit &&
                        <InventoryItemEdit key={donor._id} donor={donor}/>
                    }
                </div>
            </div>

        </div>
    )
}
export default DonorViewOfDonor;