import { useState, useEffect } from 'react';
const Profile = (props) => {
  const [nationality, setNationality] = useState('');
  useEffect(() => {
    setNationality(props.nationality.toLowerCase());
  });

  return (
    <div className="profile">
      <div className="image-profile">
        <img src={props.image} alt="profile" />
      </div>
      <div className="info">
        <h3>{props.name}</h3>
        <p className="text-secondary">{props.email}</p>
      </div>
      <div className="age">
        <p>{props.age}</p>
      </div>
      <div className="gender">
        <p>{props.gender}</p>
      </div>
      <div className="nationality">
        <img
          src={`https://flagcdn.com/16x12/${nationality}.png`}
          alt={props.nationality}
        />
      </div>
      <div className="address">
        <p>{props.address}</p>
      </div>
    </div>
  );
};

export default Profile;
