import SectionComponent from './SectionComponent';
import { useState, useEffect } from 'react';
import userService from './../service/user-service';

const HeaderComponent = () => {
  const [country, setCountry] = useState([]);
  const [mostGender, setMostGender] = useState('');
  const [averageAge, setAverageAge] = useState(0);
  useEffect(() => {
    userService.getNationality().then((nationality) => {
      setCountry(nationality);
    });

    userService.getMostGeder().then((mostGender) => {
      setMostGender(mostGender);
    });

    userService.getAverageAge().then((averageAge) => {
      setAverageAge(averageAge);
    })
  }, []);
  return (
    <header className="App-header">
      <h1>Member Dashboard</h1>

      <div className="row">
        <div className="col">
          <div className="info-title">
            <h2>{mostGender}</h2>
            <p className="text-secondary">Most Gender</p>
          </div>
          <div className="icon-info">
            <i className="fa fa-venus"></i>
          </div>
        </div>
        <div className="col">
          <div className="info-title">
            <h2>~{averageAge}</h2>
            <p className="text-secondary">Average Year</p>
          </div>
          <div className="icon-info">
            <i className="fa fa-male"></i>
          </div>
        </div>
        <div className="col">
          <div className="info-title">
            <h2>10</h2>
            <p className="text-secondary">Average Member</p>
          </div>
          <div className="icon-info">
            <i className="fa fa-users"></i>
          </div>
        </div>
        <SectionComponent
          value={country}
          title="Diferent Nationality"
          icon="fa fa-flag"
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
