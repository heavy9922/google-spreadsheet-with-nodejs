const { GoogleSpreadsheet } = require("google-spreadsheet")
const credenciales = require("./json/credenciales.json")

let googleId = "1LA-XXmNJplOHCCX5wRrAKdIzlkV0OHQhxLsOXuZMCUg"

async function accederGoogleSheet() {
  const document = new GoogleSpreadsheet(googleId)
  await document.useServiceAccountAuth(credenciales)
  await document.loadInfo()
  const sheet = document.sheetsByIndex[0]
  
  let register = await sheet.getRows()

  return register
}

async function saveVideo(body){
  // console.log(body)
  const document = new GoogleSpreadsheet(googleId)
  await document.useServiceAccountAuth(credenciales)
  await document.loadInfo()
  const sheet = document.sheetsByIndex[0]

  await sheet.addRow(body)
}

module.exports = {
  accederGoogleSheet,
  saveVideo
}
