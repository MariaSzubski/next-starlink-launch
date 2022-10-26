import React from "react"
import PropTypes from "prop-types"

import LaunchCard from "../launch-card"

import * as styles from "./styles.module.scss"

const Page = ({ data }) => (
  <>
    <section>
      <h3>Upcoming Launches</h3>
      <ul>
        {data.launchesUpcoming.length === 0 ? (
          <li>There are currently no scheduled launches</li>
        ) : (
          data.launchesUpcoming.map(name => (
            <li>
              <LaunchCard {...name} key={name.id} />
            </li>
          ))
        )}
      </ul>
    </section>
    <section>
      <h3>Past Launches</h3>
      <ul>
        {data.launchesPast.map(name => (
          <li>
            <LaunchCard {...name} key={name.id} />
          </li>
        ))}
      </ul>
    </section>
  </>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page
