import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      id
      name
      date_local
      success
      details
      rocket
    }
  }
`;

function LaunchesQuery() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>loading..</h4>;
  if (error) console.log(error);
  return <Fragment>{data.launches.map((launch) => {})}</Fragment>;
}

export default function Launches() {
  return (
    <Fragment>
      <h1 className="display-4 my-3 ">Launches</h1>
      <MissionKey />
      <LaunchesQuery />
    </Fragment>
  );
}
