


module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        imageUrl: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
    });
}