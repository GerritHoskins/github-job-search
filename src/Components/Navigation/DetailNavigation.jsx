import React from "react";
import LeftArrow from "./../../Static/images/left-arrow.png";
import { useStore } from './../../Store/Store';

const DetailNavigation = () => {
  const store = useStore();

  return (
    <aside className="jobDetail-sideBar">
      <figure className="jobDetail-goBack">
          <img src={LeftArrow} alt="left-arrow" />
          <figcaption>Back to search</figcaption>
      </figure>
      <h3 className="jobDetail-apply__title">How to apply</h3>
      <div
          className="jobDetail-apply__content"
          dangerouslySetInnerHTML={{
              __html: store.job.how_to_apply || "",
          }}
      ></div>
  </aside>
  );
}

export default DetailNavigation;