import axios from "axios";
const USER_API_URL = 'http://localhost:4000/api/users/638d50de42995dda6660fd94';
const USER_API_URL_UPDATE='http://localhost:4000/api/users/';


export const findUserById = async () => {
    const response = await axios.get(`${USER_API_URL}`)
    const user = response.data
    console.log(user);
    return user
}

export const updateUser = async (userprofile) => {
    const response = await axios
      .put(`${USER_API_URL}`, userprofile);
    return userprofile;
}