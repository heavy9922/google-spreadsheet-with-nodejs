let google = require("../spreadsheet")

const getVideos = async (req, res) => {
  let pan = []
  registers = await google.accederGoogleSheet()
  registers.forEach((e) => {
    let body = { Hola: `${e.codigo}, ${e.apellido} ${e.nombre}` }
    pan.push(body)
  })
  res.json(pan)
}

const createVideos = async (req, res)=>{
  google.saveVideo(req.body)

  res.json(req.body)
}

module.exports = {
  getVideos,
  createVideos
}
