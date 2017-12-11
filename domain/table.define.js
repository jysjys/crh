const Sequelize = require('./promoserver.prepare').Sequelize;
const sequelize = require('./promoserver.prepare').sequelize;


var model = module.exports;

model.DomainAccount = sequelize.define("t_account", {
    phone: {
        type: Sequelize.STRING
    },
    epid: {
        type: Sequelize.STRING
    },
    last_verify_at: {
        type: Sequelize.DATE
    },
    refreshed_at: {
        type: Sequelize.DATE
    },
    ip: {
        type: Sequelize.STRING
    },
    mac: {
        type: Sequelize.STRING
    }
});
sequelize.sync({ force: true }).then(() => {
});


module.exports = Sequelize;
module.exports = sequelize;
