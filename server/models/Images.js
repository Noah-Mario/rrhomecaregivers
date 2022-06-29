


module.exports = (sequelize, DataTypes) => {


    const Images = sequelize.define("Images", {
        url: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
    });

    return Images;
}
