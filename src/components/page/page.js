import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// import { colors, screen } from "../global/vars"

const LaunchCard = styled.li`
  margin-bottom: 2rem;
  list-style-type: none;
  display: flex;

  img {
    width: 14rem;
    height: 14rem;
    object-fit: cover;
    margin-right: 3rem;
  }

  p {
    margin-top: 2rem;
  }
`

const Page = ({ data }) => (
  <>
    <h3>Upcoming Launches</h3>
    <ul>
      {data.launchesUpcoming.length === 0
        ? "There are currently no scheduled launches"
        : data.launchesUpcoming.map(name => (
            <LaunchCard key={name.id}>
              <img
                src={
                  name.links.flickr_images.length > 0
                    ? name.links.flickr_images[0]
                    : name.links.mission_patch
                }
                alt={`${name.mission_name} patch`}
              />
              <div>
                <strong>{name.mission_name}</strong> - {name.launch_date_local}
                <div>
                  <strong>Launch Site:</strong>{" "}
                  {name.launch_site.site_name_long}
                </div>
                <p>{name.details}</p>
              </div>
            </LaunchCard>
          ))}
    </ul>
    <h3>Past Launches</h3>
    <ul>
      {data.launchesPast.map(name => (
        <LaunchCard key={name.id}>
          <img
            src={
              name.links.flickr_images.length > 0
                ? name.links.flickr_images[0]
                : name.links.mission_patch
            }
            alt={`${name.mission_name} patch`}
          />
          <div>
            <strong>{name.mission_name}</strong> - {name.launch_date_local} -{" "}
            {name.launch_success ? "Successful" : "Failed"}
            <div>
              <strong>Launch Site:</strong> {name.launch_site.site_name_long}
            </div>
            <p>{name.details}</p>
          </div>
        </LaunchCard>
      ))}
    </ul>
  </>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page
