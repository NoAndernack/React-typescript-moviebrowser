import React from "react";
import { Link, useParams } from "react-router-dom";
import classes from "../common/MediaItem.module.css";

import { MediaParamTypes } from "../../services/MediaType";
import ScrollerWrapper from "../Layout/ScrollerWrapper";
import CastItem from "./CastItem";

const MediaCast: React.FC<{ medidaType: string; cast: any[] }> = (props) => {
  let cast = props.cast;
  const { mediaId } = useParams();
  let castHeading;
  if (props.medidaType) {
    castHeading =
      props.medidaType === MediaParamTypes.Movie
        ? "Top Billed Cast"
        : "Series Cast";
  }
  const items = cast && cast.slice(0, 10);

  return (
    <div className="grid-container mt-3">
      <h4 className="py-2">{castHeading}</h4>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-start">
        <ScrollerWrapper>
          {items &&
            items.map((c) => (
              <div
                className="col d-flex p-0 mb-3 align-items-stretch"
                key={c.id}
              >
                <CastItem item={c} key={c.id} class="w-150" />
              </div>
            ))}
          {cast && cast.length >= 10 && (
            <div
              className={`col-12 d-flex align-items-center h-100 ${classes.cardBody}`}
              style={{ width: "110px" }}
            >
              <Link
                to={`/${props.medidaType}/${mediaId}/cast`}
                className="text-decoration-none text-dark"
              >
                <h6>
                  View More &nbsp; <i className="fa fa-arrow-right"></i>
                </h6>
              </Link>
            </div>
          )}
        </ScrollerWrapper>
      </div>
    </div>
  );
};

export default React.memo(MediaCast);
