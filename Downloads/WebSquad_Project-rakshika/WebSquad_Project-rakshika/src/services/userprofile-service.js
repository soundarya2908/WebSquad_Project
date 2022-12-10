import axios from "axios";
const USER_API_URL = 'http://localhost:4000/api/customers/6392b4c2fab2c0d239e9559e';



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