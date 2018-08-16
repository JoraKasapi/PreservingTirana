const fs = require('fs')
const fetch = require('node-fetch')

fetch('https://umap.openstreetmap.fr/en/datalayer/608593/')
  .then(response => response.text())
  .then(response => fs.writeFileSync('copyright_action_day_2018.geojson', response))
  .catch(error => console.error(error))
