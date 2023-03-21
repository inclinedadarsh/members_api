const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    topRole: {
        type: String,
        default: "member",
        required: true
    },
    otherRoles: {
        type: [String],
        default: ["member"]
    },
    joinDate: {
        type: Date,
        immutable: true,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model("Member", memberSchema);