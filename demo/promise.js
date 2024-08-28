#!/usr/bin/env node

const fetchData = () =>
    (
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getDate()}&api_key=DEMO_KEY`
    ).then((res) => res.json());



console.log(fetchData.toString())