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
    },
    level: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.INTEGER
    },
    trustpilot: {
      type: Sequelize.FLOAT
    }
  }
}
