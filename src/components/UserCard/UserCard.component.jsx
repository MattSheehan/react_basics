import {Component} from "react";
import "./UserCard.styles.css";

class UserCard extends Component {
    render() {
        const { username, id, name, email, phone } = this.props;
        var cleanPhone = phone;
        for(let i=0; i<cleanPhone.length; i++) {
            if(cleanPhone[i].includes("."))
                cleanPhone = (cleanPhone.replace(cleanPhone[i],"-"));
            if(cleanPhone[i].includes(")"))
                cleanPhone = (cleanPhone.replace(cleanPhone[i],"-"));
            if(cleanPhone[i].includes("("))
                cleanPhone = (cleanPhone.replace(cleanPhone[i],""));
        }
        return (
            <div className="UserCard-container">
                <div className="UserCard-header-container">
                    <p><b className="UserCard-header-text">{username}</b></p>
                </div>
                <div className="UserCard-image-container">
                    <img src={`https://robohash.org/${id}?set=set2&size=240x240`} alt="user-img" />
                </div>
                <div className="UserCard-body-container">
                    <p className="UserCard-body-text"><b>{name}</b></p>
                    <p className="UserCard-body-text"><u className="UserCard-link">{email}</u></p>
                    <p className="UserCard-body-text">{cleanPhone}</p>
                </div>
            </div>
        );
    }
};

export default UserCard;
