import "./CardList.styles.css";
import UserCard from "../UserCard/UserCard.component";

const CardList = ({user}) => {
    return (
        <div className="CardList-list">
        {
            user.map(user => (
                <div key={user.id}>
                    <UserCard
                        username={user.username}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                    />
                </div>
            ))
        }
        </div>
    );
};

export default CardList;
