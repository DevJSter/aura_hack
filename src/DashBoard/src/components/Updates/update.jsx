import React from "react";
import "./feedback.css";
import { UpdatesData2 } from "../../Data/Data";


const Updates = () => {
    return (
        <div className="Updates">
            {UpdatesData2.map((update, index) => {
                return (
                    <div className="update">
                    <img src={update.img} alt="profile" />
                    <div className="noti">
                      <div  style={{marginBottom: '0.5rem'}}>
                        <span>{update.college}</span>
                     </div>
                     <div>
                     <a href='https://www.morganstanley.com/'>{update.desc}</a>
                   </div>
                    
                        <span>{update.Post}</span>
                    </div>
                  </div>
                );
            })}
        </div>
    );
};

export default Updates;
