import axios from "axios";

export const GETMIDDISDATA = "GETMIDDISDATA";

export const MiddisData = (payload) => ({

    type : GETMIDDISDATA,
    payload : payload
})

export const getMiddisData = () => (dispatch) => {

    axios.get("https://backend-ecom123.herokuapp.com/middis").then((res) => {
        dispatch(MiddisData(res.data))
    })
}