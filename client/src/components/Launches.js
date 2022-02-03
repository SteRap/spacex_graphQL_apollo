import React from "react";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      name
      launch_year
      date_local
      success
    }
  }
`;

function LaunchesQuery() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>loading..</h4>;
  if (error) console.log(error);
  return <h1>test</h1>;
}

export default function Launches() {
  return (
    <div>
      <h1 className="display-4 my-3 mx-5">Launches</h1>
      <LaunchesQuery />
    </div>
  );
}
