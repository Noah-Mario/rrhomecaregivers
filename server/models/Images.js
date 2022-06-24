
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Images", {
        url: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
    });
}