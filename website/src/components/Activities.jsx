import React from "react";
import Activity from "./Activity";
import activitydata from "../data/activitydata";

export default function Activities(){
    const activityList = activitydata.map(item => <Activity key={item.id} {...item}/>)

    return (
        <div className="sub-component">
            {activityList}
        </div>
    )
}