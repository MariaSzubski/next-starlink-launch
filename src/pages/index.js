import React from "react"

import Layout from "../components/layout"
import Grid from "../components/grid-system"

const IndexPage = () => (
  <Layout title="Home">
    <h1>Welcome</h1>
    <div className="content text-md">
      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
      ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
      mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
      Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.
      Maecenas sed diam eget risus varius blandit sit amet non magna. Duis
      mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
      odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>

    <Grid as="section" className="space-lg">
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
      <div>Content 2</div>
      <div>Content 3</div>
    </Grid>
  </Layout>
)

export default IndexPage
