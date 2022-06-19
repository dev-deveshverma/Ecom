import axios from "axios";

export const GETMIDDISDATA = "GETMIDDISDATA";

export const MiddisData = (payload) => ({

    type : GETMIDDISDATA,
    payload : payload
})

export const getMiddisData = () => (dispatch) => {

    axios.get("http://localhost:3002/middis").then((res) => {
        dispatch(MiddisData(res.data))
    })
}
