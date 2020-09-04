<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Maria Szubski Digital's Gatsby Starter
</h1>

Boilerplate for GatsbyJS Projects.

#### Branches

`master` `contentful-cms`

```bash
# clone a specific branch
$ git clone -b contentful-cms --single-branch https://github.com/MariaSzubski/gatsby-starter-mszd.git
```

## Setup & Run

This project uses `yarn` to manage packages.

```bash
# install dependencies
$ yarn install

# run development server
$ gatsby develop -o

# run development server on LAN
$ gatsby developer -H 0.0.0.0

# run storybook
$ yarn storybook

# build for production and launch local production server
$ gatsby build && gatsby serve -o
```

## What's inside?

#### Top-Level Directories

    .
    ├── node_modules
    ├── src
        ├── assets
        └── components
            ├── component (see `.starter` template)
                ├── _story.stories.jsx
                ├── component.js
                └── index.js
        ├── pages
        └── templates
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    └── yarn.lock

#### Default Components

    global
      ├── ref
      ├── styles.js
      └── vars.js
    grid-system
      ├── col
      ├── container
      ├── flex
      └── grid
    layout
      ├── layout
      └── seo
    svg-icons
    utilities
      ├── html
      └── link

#### Default Dependencies

    gatsby-image
    gatsby-plugin-manifest
    gatsby-plugin-offline
    gatsby-plugin-react-helmet
    gatsby-plugin-robots-txt
    gatsby-plugin-sharp
    gatsby-plugin-sitemap
    gatsby-source-filesystem
    gatsby-transformer-remark
    gatsby-transformer-sharp

    gatsby-plugin-catch-links
    gatsby-plugin-google-analytics
    gatsby-plugin-remove-trailing-slashes
    gatsby-plugin-styled-components
    gatsby-plugin-webfonts

    react-inlinesvg
    react-responsive
    styled-components
    @storybook
    prettier
