import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {

        const loggedInUser = req.user._id;

        const filterUsers = await User.find({_id:{$ne: loggedInUser}}).select("-password")
        

        res.status(200).json(filterUsers);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
