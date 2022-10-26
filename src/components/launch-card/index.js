import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import * as styles from "./styles.module.scss"

const LaunchCard = ({
  links,
  mission_name,
  launch_date_local,
  launch_success,
  launch_site,
  details,
}) => {
  let date = new Date(launch_date_local)
  date = date.toLocaleString("en-us", { dateStyle: "medium", timeStyle: "long" })

  return (
    <section className={styles.launch_card}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <img
            src={links.flickr_images.length > 0 ? links.flickr_images[0] : links.mission_patch}
            alt={`${mission_name} patch`}
          />
        </div>

        <div className={styles.details}>
          <h3>
            <strong>{mission_name}</strong>
          </h3>

          <span className={styles.date}>{date} - </span>
          <span className={classNames(launch_success ? styles.pos : styles.neg)}>
            {launch_success ? "Successful" : "Failed"}
          </span>
          <div>
            <strong>Launch Site:</strong> {launch_site.site_name_long}
          </div>
          <p className={styles.desc}>{details}</p>
        </div>
      </div>
    </section>
  )
}

LaunchCard.propTypes = {
  links: PropTypes.object,
  mission_name: PropTypes.string,
  launch_date_local: PropTypes.string,
  launch_success: PropTypes.bool,
  launch_site: PropTypes.object,
  details: PropTypes.string,
}

export default LaunchCard
