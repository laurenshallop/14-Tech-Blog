const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    forgeinKey: 'user_id'
});

Post.belongsTo(User, {
    forgeinKey: 'user_id'
})

Comment.belongsTo(User, {
    forgeinKey: 'user_id'
});

User.hasMany(Comment, {
    forgeinKey: 'user_id'
});

Post.hasMany(Comment, {
    forgeinKey: 'post_id'
});

module.exports = { User, Post, Comment };