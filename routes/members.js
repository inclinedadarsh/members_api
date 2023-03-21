// Setting up routers
const express = require("express");
const router = express.Router();

// Importing the schema
const Member = require("../models/member");

// Making a middleware to find a member from the databse
const getMember = async (req, res, next) => {
    let member;

    try {
        member = await Member.findById(req.params.id);

        if (member == null) {
            return res.status(404).send({ message : "Member not found!" });
        }
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }

    res.member = member;
    next();
}

// Getting all
router
	.route("/")
	.get(async (req, res) => {
		try {
			const members = await Member.find();
			res.json(members);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	})
	.post(async (req, res) => {
		const member = new Member({
			name: req.body.name,
			topRole: req.body.topRole,
			otherRoles: req.body.otherRoles,
			joinDate: req.body.joinDate,
		});

		try {
			const newMember = await member.save();
			res.status(201).json(newMember);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	});

router
    .route("/:id")
    .get(getMember, (req, res) => {
        res.send(res.member);
    })
    .delete(getMember, async (req, res) => {
        try {
            // ! .remove() is deprecated
            // await res.member.remove();
            await Member.deleteOne({_id: res.member._id});
            res.json({ message: "Deleted Member!" });
        } catch (error) {
            res.status(500).send({ message: error.message });
        }
    })
    .patch(getMember, async (req, res) => {
        if (req.body.name != null) res.member.name = req.body.name;
        if (req.body.topRole != null) res.member.topRole = req.body.topRole;
        if (req.body.otherRoles != null) res.member.otherRoles = req.body.otherRoles;

        try {
            const updatedMember = await res.member.save();
            res.status(202).json(updatedMember);
        } catch (error) {
            res.status(400).send ({ message: res.message });
        }
    })

// Exporting the router
module.exports = router;
