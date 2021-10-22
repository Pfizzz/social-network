
const { Schema, model } = require('mongoose');

// Thought

// thoughtText
const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            //Must be between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            default: Date.now
        // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            type: String,
            // Array of nested documents created with the reactionSchema
        }
    }
)

// Schema Settings

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;