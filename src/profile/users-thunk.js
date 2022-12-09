import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./userprofile-service";


export const findUserByIdThunk = createAsyncThunk(
    'userProfile/findUserById',
    async () => await service.findUserById()
)

export const updateUserThunk = createAsyncThunk(
    'updateUser/updateUser',
    async (userprofile) => {
        console.log(userprofile)
         const upuser= await service.updateUser(userprofile) 
         console.log("upuser in thunk: " + JSON.stringify(upuser))
         return upuser

    }  
  
)

// export const updateDonorThunk = createAsyncThunk(
//     'donor/updateDonor', async (donor) =>
//         await service.updateDonor(donor)
// )

// export const findDonorByIdThunk = createAsyncThunk(
//     'donor/findDonorById',
//     async(donorId) => await findDonorById(donorId)
// )



