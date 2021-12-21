import fetch from 'node-fetch'
import fs from 'fs'

const datacatalogURL = 'https://data.beeldengeluid.nl/id/datacatalog/0001'
const datacatalogPath = 'content/datacatalog0001.json'

fetch(datacatalogURL)
  .then((res) => res.json())
  .then((json) => {
    fs.writeFile(datacatalogPath, JSON.stringify(json), (err) => {
      if (err) throw err
      console.log(`Data written to file: ${datacatalogPath}`)
    })
  })
