let Sequelize = require('sequelize')

export default {
  name: 'subscriber',
  columns: {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  }
}
