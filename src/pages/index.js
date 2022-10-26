import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import classNames from "classnames"

import Layout from "../components/layout"
import { Container, Grid, Col } from "../components/grid-system"
import Page from "../components/page"

import * as styles from "./styles.module.scss"

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
      <Container fluid={false}>
        <Grid as="section">
          <Col md={10} lg={8} xl={10} xxl={7} justify="center">
            <h1 className={styles.title}>Next Starlink Launch</h1>
            <div className={classNames(styles.desc, "text-md")}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
              massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Nullam id
              dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed
              consectetur. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet
              non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Duis
              mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
          </Col>
        </Grid>
        <Grid as="section">
          <div>
            {loading && <p>Loading launches...</p>}
            {error && <p>Error: ${error.message}</p>}
            {data && <Page data={data} />}
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage
