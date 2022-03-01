import React, { Component } from "react";
import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Rocket from "./Rocket";
import classNames from "classnames";
import Moment from "react-moment";
import App from "../App";

const LAUNCHES_QUERY = gql`
  query LaunchQuery($id: String!) {
    launch(id: $id) {
      flight_number
      id
      name
      date_local
      success
      details
      rocket
      links {
        article
      }
    }
  }
`;

function LaunchesQuery() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { id },
  });
  if (loading) return <h4>loading...</h4>;
  if (error) console.log(error);
  console.log(data);
  const { flight_number, name, date_local, success, details, rocket, links } =
    data.launch;
  return (
    <Fragment>
      <div>
        <h1 className="display-4 my-3">
          <span className="text-white">Mission: {name}</span>
        </h1>
        <h2 className="mb-3">Launch Details</h2>
        <ul className="list-group h5">
          <li className="list-group-item bg-dark pt-3">
            <strong>Flight Number:</strong> {flight_number}
          </li>
          <li className="list-group-item bg-dark">
            <strong>Launch Year:</strong>{" "}
            <Moment format="YYYY-MM-DD HH:mm">{date_local}</Moment>
          </li>
          <li className="list-group-item bg-dark">
            <strong> Launch Successful:</strong>{" "}
            <span
              className={classNames({
                "text-success": success,
                "text-danger": !success,
              })}
            >
              {" "}
              {success ? "YES" : "NO"}
            </span>
          </li>
          <li className="list-group-item bg-dark">
            <strong>Description of the mission:</strong>{" "}
            {details ? details : "Description not available"}
          </li>
          <li className="list-group-item bg-dark pb-3 ">
            <strong>Read the full article: </strong> Bring me there
            <a className="mx-2 " href={links.article} target="_blank">
              <i className="fas fa-arrow-right "></i>
            </a>
          </li>
        </ul>
        <hr />
        <Rocket rocket={rocket} />
        <Link
          to="/"
          type="button"
          className="btn btn-outline-light"
          element={<App />}
        >
          Go Back
        </Link>
      </div>
    </Fragment>
  );
}

export default function Launch() {
  return <LaunchesQuery />;
}
