const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: "listingimage",
        }
        // default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2Fnature-wallpapers-your-desktop&psig=AOvVaw1VhOXn78ySbxnQvUwErXdQ&ust=1753375417054000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDjkde2044DFQAAAAAdAAAAABAE",
        // type: String,
        // set: (v) => v === "" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwebneel.com%2Fnature-wallpapers-your-desktop&psig=AOvVaw1VhOXn78ySbxnQvUwErXdQ&ust=1753375417054000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDjkde2044DFQAAAAAdAAAAABAE" : v,
    },
    price: Number,
    location: String, 
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;