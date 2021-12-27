import axios from 'axios'
import fs from 'fs'

const datacatalogURL = 'https://data.beeldengeluid.nl/id/datacatalog/0001'
const datacatalogPath = 'content/datacatalog0001.json'

axios
  .get(datacatalogURL)
  .then(function (response) {
    fs.writeFile(datacatalogPath, JSON.stringify(response.data), (err) => {
      if (err) throw err
      console.log(`Data written to file: ${datacatalogPath}`)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
