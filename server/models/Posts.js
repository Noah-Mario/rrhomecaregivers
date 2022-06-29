

// const Images = require("../Images")
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
    });

    // Posts.associate = function(models) {
    //     // models.Images = require('./Images');
    //     Posts.hasMany(models.Images, {
    //         foreignKey: "postId",
    //         onDelete: "cascade"
    //     })
    // }

    return Posts;
}

    // Posts.hasMany(Images)
    // Images.belongsTo(Posts)

//
