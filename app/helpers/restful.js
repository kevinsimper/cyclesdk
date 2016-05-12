let restful = (model) => {
  return (req, res) => {
    switch (req.method) {
      case 'GET':
        if(req.path.length > 1) {
          model.findById(req.path.replace('/', '')).then((item) => {
            res.json(item)
          })
        } else {
          model.findAll().then((items) => {
            res.json(items)
          })
        }
        break;
      case 'POST':
        model.create(req.body).then((item) => {
          res.json(item)
        })
        break;
      case 'DELETE':
        model.findById(req.path.replace('/', '')).then((item) => {
          item.destroy().then(() => {
            res.send(200)
          })
        })
        break;
      default:
        res.sendStatus(500)
    }
  }
}

export default restful
