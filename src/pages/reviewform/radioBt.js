import React from "react";
import 'antd/dist/antd.css';

const RadioBt = () => (
    <>
        <div style={{textAlign:"center", marginTop:"30px" }}>
            <label>
                1 <input style={{marginTop:"10px"}} type= "radio" value="1" name="re"/>
            </label>

            <label>
                2 <input style={{marginTop:"10px"}} type= "radio" value="2" name="re"/>
            </label>

            <label>
                3 <input style={{marginTop:"10px"}} type= "radio" value="3" name="re"/>
            </label>

            <label>
                4 <input style={{marginTop:"10px"}} type= "radio" value="4" name="re"/>
            </label>

            <label>
                5 <input style={{marginTop:"10px"}} type= "radio" value="5" name="re"/>
            </label>
        </div>
    </>

);

export default RadioBt;