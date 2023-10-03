import React from "react";
import './CardCSS.css';
import CardHeading from "./CardHeading";
import Image from "./Image";

function Card(props){
    return (
        <>
            <div className="cards">
                <div className="card">
                    {/* <img src={props.src} alt="myPic" height={props.height}
                    width={props.width} className="card_img"/> */}
                    <Image src={props.src} height={props.height} className="card_img"/>
                    <div className="card_info">
                        <span className="card_category">{props.title}</span>
                        {/* <h3 className="card_title">{props.sname}</h3> */}
                        <CardHeading title={props.sname} className="card_title"/>
                        <a href={props.link} target="to_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;