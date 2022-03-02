import React from "react";
import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import classNames from "classnames";
import Moment from "react-moment";

const VEHICLES_QUERY = gql`
  query RocketQuery($id: String!) {
    rocket(id: $id) {
      id
      name
      type
      first_flight
      active
      description
      cost_per_launch
      flickr_images
      height {
        meters
        feet
      }
      mass {
        kg
        lb
      }
    }
  }
`;

export default function Rocket(props) {
  let id = props.rocket;
  const { loading, error, data } = useQuery(VEHICLES_QUERY, {
    variables: { id },
  });
  if (loading) return <h4>loading...</h4>;
  if (error) console.log(error);

  const {
    name,
    type,
    first_flight,
    active,
    description,
    cost_per_launch,
    flickr_images,
    height,
    mass,
  } = data.rocket;

  const randomNum = Math.floor(Math.random() * flickr_images.length);
  console.log(randomNum);
  return (
    <Fragment>
      <div>
        <h2 className="mb-3">Rocket Details</h2>
        <ul className="list-group h5">
          <li className="list-group-item bg-dark pt-3 ">
            <strong>Name:</strong> {name}
          </li>
          <li className="list-group-item bg-dark">
            <strong>First flight:</strong>{" "}
            <Moment format="YYYY-MM-DD ">{first_flight}</Moment>
          </li>
          <li className="list-group-item bg-dark">
            <strong> Currently Active:</strong>{" "}
            <span
              className={classNames({
                "text-success": active,
                "text-danger": !active,
              })}
            >
              {" "}
              {active ? "YES" : "NO"}
            </span>
          </li>
          <li className="list-group-item bg-dark">
            <strong>Description of the rocket:</strong>{" "}
            {description ? description : "Description not available"}
          </li>
          <li className="list-group-item bg-dark pb-3">
            <strong>Vehicle type:</strong>{" "}
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </li>
          <li className="list-group-item bg-dark pb-3">
            <strong>Vehicle height:</strong> {height.meters} m / {height.feet}{" "}
            ft
          </li>
          <li className="list-group-item bg-dark pb-3">
            <strong>Vehicle weight:</strong> {mass.kg} kg / {mass.lb} lb
          </li>
          <li className="list-group-item bg-dark pb-3">
            <strong>Cost per launch:</strong> {cost_per_launch} $
          </li>
        </ul>
        <hr />
        <img
          className="d-flex mx-auto"
          alt={name}
          src={flickr_images[randomNum]}
          style={{ width: "80vw" }}
        />
        <hr />
      </div>
    </Fragment>
  );
}
