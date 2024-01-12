import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "./DisplayEmployee.scss";

function DisplayEmployee() {
  const [randomEmployee, setRandomEmployee] = useState(null);

  const getEmployee = () => {
    axios.get("https://randomuser.me/api?nat=en").then((response) => {
      const newEmployee = response.data.results[0];
      setRandomEmployee(newEmployee);
    });
  };

  return (
    <div className="DisplayEmployee">
      {randomEmployee ? (
        <>
          <div className="imgCard">
            <img
              src={randomEmployee.picture?.medium}
              alt={randomEmployee.name?.first}
            />
          </div>
          <ul>
            <li>Gender: {randomEmployee.gender}</li>
            <li>
              Name: {randomEmployee.name?.title} {randomEmployee.name?.last}{" "}
              {randomEmployee.name?.first}
            </li>
            <li>E-mail: {randomEmployee.email}</li>
            <li>
              Location: {randomEmployee.location?.street?.number}{" "}
              {randomEmployee.location?.street?.name},{" "}
              {randomEmployee.location?.postcode}{" "}
              {randomEmployee.location?.city}
            </li>
          </ul>
        </>
      ) : (
        <p>Click for generate random employee!</p>
      )}

      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

DisplayEmployee.propTypes = {
  employee: PropTypes.shape({
    picture: PropTypes.shape({
      medium: PropTypes.string,
    }),
    gender: PropTypes.string,
    name: PropTypes.shape({
      title: PropTypes.string,
      last: PropTypes.string,
      first: PropTypes.string,
    }),
    email: PropTypes.string,
    location: PropTypes.shape({
      street: PropTypes.shape({
        number: PropTypes.number,
        name: PropTypes.string,
      }),
      postcode: PropTypes.string,
      city: PropTypes.string,
    }),
  }),
};
export default DisplayEmployee;
