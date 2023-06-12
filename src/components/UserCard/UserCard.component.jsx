import "./UserCard.styles.css";

const UserCard = ({ username, id, name, email, phone }) => {
  const picSize = '240x240'
  const imgSrc = `https://robohash.org/${id}?set=set2&size=${picSize}`
  return (
    <div className="UserCard-container">
      <div className="UserCard-header-container">
        <p><b className="UserCard-header-text">{username}</b></p>
      </div>
      <div className="UserCard-image-container">
        <img src={imgSrc} alt="user-img" />
      </div>
      <div className="UserCard-body-container">
        <p className="UserCard-body-text"><b>{name}</b></p>
        <p className="UserCard-body-text"><u className="UserCard-link">{email}</u></p>
        <p className="UserCard-body-text">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
