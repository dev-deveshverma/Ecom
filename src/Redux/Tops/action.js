import axios from "axios";

export const GETTOPSDATA = "GETTOPSDATA";

export const TopData = (payload) => ({

    type : GETTOPSDATA,
    payload : payload
})

export const getTopsData = () => (dispatch) => {

    axios.get("https://backend-ecom123.herokuapp.com/tops").then((res) => {
        dispatch(TopData(res.data))
    })
}