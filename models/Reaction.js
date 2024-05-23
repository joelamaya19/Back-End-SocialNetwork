const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            require: true,
            maxlength: 280
        },
        username: {
            type: String,
            require: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString()
        }
    },
    {
        toJSON: { virtuals: true },
        id: false,
    }
);

module.exports = reactionSchema;