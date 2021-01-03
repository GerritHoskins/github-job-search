import React, { useEffect } from "react";
import GlobalIcon from "./../../Static/images/global.png";
import ClockIcon from "./../../Static/images/clock.png";
import { getDaysDiffBetweenDates } from "./../../Utils/Helper";
const Secondary = (props) => {
  const { title, company, company_logo, type, location, created_at, description } = props.job 
  useEffect(() => {}, []);

  return (
    <section className="jobDetail-main">
      <div className="jobDetail__description">
          <h2 className="jobDetail__title"> {title || ""}</h2>
          <p className="jobDetail__type">{type || ""}</p>
      </div>

      <figure className="jobDetail-date">
          <img
              src={ClockIcon}
              alt="clock-icon"
              className="jobDetail-date__icon"
          />
          <figcaption className="jobDetail-date__text">
              {Math.round(
                  getDaysDiffBetweenDates(
                      new Date(created_at),
                      new Date()
                  )
              )}{" "}
              days ago
          </figcaption>
      </figure>

      <figure className="jobDetail-company">
          <img
              src={company_logo}
              alt={title}
              className="jobDetail-company__logo"
          />

          <figcaption>
              <h3 className="jobDetail-company__name">{company}</h3>

              <figure className="jobDetail-company__location">
                  <img src={GlobalIcon} alt="global-icon" />
                  <figcaption>{location || ""}</figcaption>
              </figure>
          </figcaption>
      </figure>

      <div
          className="jobDetail__detail"
          dangerouslySetInnerHTML={{ __html: description }}
      ></div>
  </section>
  );
}

export default Secondary;