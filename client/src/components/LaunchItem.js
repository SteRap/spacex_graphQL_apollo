import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { id, name, date_local, success },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": success,
                "text-danger": !success,
              })}
            >
              {name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{date_local}</Moment>
          </p>
        </div>
        <div className="col-md-3 position-relative m-auto ">
          <Link
            to={`/launch/${id}`}
            type="button"
            className="btn btn-outline-light "
          >
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
