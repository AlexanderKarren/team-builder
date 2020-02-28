import React from 'react';
import { ReactSVG } from 'react-svg';
import './MemberCard.css';

const MemberCard = (props) => {

    const updateMember = () => {
        props.updateMember(props.member)
    }

    return (
        <div className="member-card">
            <div className="avi">
                <ReactSVG src={props.member.svgSrc}/>
            </div>
            <div className="information">
                <h3>{props.member.psuedonym}</h3>
                <div>
                    <span>Specialty:&nbsp;</span>
                    <span>{props.member.specialty}</span>
                </div>
                <div>
                    <span>Joined:&nbsp;</span>
                    <span>{props.member.joined}</span>
                </div>
                <button onClick={updateMember}>Edit</button>
            </div>
        </div>
    )
}

export default MemberCard;