let google = require("../spreadsheet")

const getVideos = async (req, res) => {
  let pan = []
  registers = await google.accederGoogleSheet()
  registers.forEach((e) => {
    let body = {
      IdOperario: e.IdOperario,
      Cédula: e.Cédula,
      Nombre_y_Apellidos:e.Nombre_y_Apellidos,
      Cargo:e.Cargo,
      Fecha_y_Hora: e.Fecha_y_Hora,
    }
    pan.push(body)
  })
  res.json(pan)
}

const createVideos = async (req, res) => {
  await google.saveVideo(req.body)
  res.json(req.body)
}

module.exports = {
  getVideos,
  createVideos,
}
