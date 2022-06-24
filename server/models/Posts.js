


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

    Posts.associate = (models) => {
        Posts.hasMany(models.Images, {
            onDelete: "cascade"
        })
    }
    return Posts
}