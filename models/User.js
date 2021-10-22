const { Schema, model } = require('mongoose');

// function for validating email
const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
};

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Must match a valid email address (look into Mongoose's matching validation)
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'A valid email address is required!']
    },

        //Array of _id values referencing the Thought model
    

        // Array of _id values referencing the User model (self-reference)
    
})

// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const User = model('User', UserSchema);

module.exports = User;