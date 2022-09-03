import React from "react"







export default function Blog(props){

    return(
        <div className="blog">
            <img src={props.item.imageUrl} />
            <div className="blog--details">
                <div className="upper-details">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="country">{props.item.location}</p>
                    <a href="{props.item.googleMapsUrl}">View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>

        </div>
    )
}