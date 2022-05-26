import { Div, FlexDiv } from "./FlexBox"
import {useNavigate} from "react-router"

export const HomeProduct = () => {

    const navigate = useNavigate()

    return(
        <div >
            <FlexDiv className="FlexDiv">
                <Div> <button className="boxes" onClick={  ()=> navigate("/tops")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/10/7/697bb8c0-5c99-4d02-b0f9-d46ca72889db1602086685082-dressberrywomen.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/kurtis")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/middis")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/denims")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c8f8c028-21c6-4b65-9d77-188378312e561598892141092-Cutecumber.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/frocks")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg" alt="" /> </button></Div>
                <Div> <button className="boxes" onClick={  ()=> navigate("/jackets")}><img src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg" alt="" /> </button></Div>   
            </FlexDiv>

            <div className="sales">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/2a0effa7-c662-45c8-8084-96cdea0710c21646911018691-unisex-1499.gif" alt="" height="100%" width="100%" />
            </div>

            <div className="threebox" >
                <div onClick={ () => navigate("/middis")}>
                    <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg" alt="" height="100%" width="100%" />
                </div>
                <div onClick={ () => navigate("/tops")}>
                    <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-A-Women-08April2022.jpg" alt="" height="100%" width="100%"/>
                </div>
                <div onClick={ () => navigate("/denims")}>
                    <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modblock7-oneBythree-B-Women-08April2022.jpg" alt="" height="100%" width="100%"/>
                </div>
            </div>

            <div className="sales2">
                <img src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2022/3/10/a1690ca9-bcec-469d-b15b-991b3dad64bc1646910870888-SS22-StripBanners-UnisexUnder999.gif" alt="" height="100%" width="100%" />
            </div>


            <div className="threebox">
                <div onClick={ () => navigate("/kurtis")}>
                    <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-8modblock-oneBythree-B-Women-04March2022.jpg" alt="" height="100%" width="100%"/>
                </div>
                <div onClick={ () => navigate("/jackets")}>
                    <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Women-01April2022.jpg" alt="" height="100%" width="100%"/>
                </div>
                <div onClick={ () => navigate("/frocks")}>
                    <img src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-Women-04March2022.jpg" alt="" height="100%" width="100%"/>
                </div>
            </div>

            <div className="sales2">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-29April2022.jpg" alt="" height="100%" width="100%" />
            </div>

        </div>
    ) 
}