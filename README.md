# HjuletiderV2

This is a travel blog to showcase some of my adventures in life. The project uses NextJS w/ app directory and Tailwind for frontent, and Sanity as CMS and database.

## Run locally

To run locally, one need a local .env file with the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION

NEXT_STRAVA_CLIENT_ID
NEXT_STRAVA_CLIENT_SECRET
NEXT_STRAVA_REFRESH_TOKEN

NEXT_WEATHER_CLIENT_ID
NEXT_WEATHER_CLIENT_SECRET
NEXT_VISUAL_CROSSING_KEY

```

## Weather

The weather is originally fetched from [`visual crossing`](https://www.visualcrossing.com/). However, due to their not-so-generous API quotas, the data is stored locally and read from JSON files.
