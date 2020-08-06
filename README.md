# Stackbit Starter Theme

This site was generated by [www.stackbit.com](https://www.stackbit.com) (v0.3.18)
.

The content of this site is managed by Sanity.io. Visit https://__SANITY_PROJECT_NAME__.sanity.studio/ to manage site content

# Developing Site Locally

1. Install [Node.js and npm](https://nodejs.org/en/)

1. Install npm dependencies:

        npm install

1. Get "netlify-api-key" from project menu in [Stackbit dashboard](https://app.stackbit.com/dashboard)

1. Run the following command to assign this key to `STACKBIT_API_KEY` environment variable:

        export STACKBIT_API_KEY={stackbit_netlify_api_key}

1. Run the following command to fetch site contents from Sanity:

        npx @stackbit/stackbit-pull --stackbit-pull-api-url=__STACKBIT_PULL_API_URL__

1. [Optional] Run Sanity Studio locally: install sanity-cli `npm install -g @sanity/cli`, navigate to the `/studio` directory, and run `sanity install` and `sanity start`.
You may be required to login with the Sanity CLI.

1. Start the local development server:

        npm run develop

1. Browse to [http://localhost:3000/](http://localhost:3000/)

# Building Site

Follow the installation steps described in the "Running Your Site Locally".
Then run `npm run export` to build the site. The site will be generated into
the `out` folder.