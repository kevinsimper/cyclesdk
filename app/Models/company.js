let Sequelize = require('sequelize')

export default {
  name: 'company',
  columns: {
    name: {
      type: Sequelize.STRING
    },
    url: {
      type: Sequelize.STRING
    },
    logo: {
      type: Sequelize.STRING
    },
    slug: {
      type: Sequelize.STRING
    }
  }
}
