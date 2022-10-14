import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

import Layout from "../components/layout"
import Grid from "../components/grid-system"
import Page from "../components/page"

const APOLLO_QUERY = gql`
  {
    launchesPast(find: { mission_name: "starlink" }) {
      id
      mission_name
      launch_date_local
      details
      launch_site {
        site_name_long
      }
      launch_success
      links {
        flickr_images
        mission_patch
      }
    }
    launchesUpcoming(find: { mission_name: "starlink" }) {
      id
      mission_name
      launch_date_local
      details
      is_tentative
    }
  }
`

const IndexPage = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)
  return (
    <Layout title="Home">
      <h1>Next Starlink Launch</h1>
      <div className="text-md">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
        justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id
        nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Donec sed
        odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est
        non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec
        ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat
        porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed
        consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <Grid as="section">
        <div>
          {loading && <p>Loading launches...</p>}
          {error && <p>Error: ${error.message}</p>}
          {data && <Page data={data} />}
        </div>
      </Grid>
    </Layout>
  )
}

export default IndexPage
