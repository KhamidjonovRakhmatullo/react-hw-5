import React from 'react'
import {Link} from "react-router-dom"
import harbor from "./asserts/harbor.png"

const NavabarComponent = () => {
  return (
    <div>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "33px 120px",
            backgroundColor: "#F9F7F4"
        }}>
            <div style={{ 
                flex: "1",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
            }}>
                <img src={harbor} alt="logo" />
            </div>
            <div style={{
                flex: "2",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "22px",
                color: "#65727B",
            }}>
                {/* <Link to="/home"><p style={{ cursor: "pointer"}}>Home</p></Link> */}
                <p style={{ cursor: "pointer"}}>About</p>
                <p style={{ cursor: "pointer"}}>Know Your Risk</p>
                <p style={{ cursor: "pointer"}}>For Work</p>
                <p style={{ cursor: "pointer"}}>Journal</p>
                <p style={{ cursor: "pointer"}}>Shop</p>
            </div>
        </div>
    </div>
  )
}

export default NavabarComponent