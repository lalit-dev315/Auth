import ApiError from "./apiError.js";
import mongoose from "mongoose";

const connectionString = process.env.DB_CONNECTION_STRING;

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(connectionString);
        console.log(
            `Voila ! Connected to db at host ${connection.connections[0].host}`,
        );
    } catch (error) {
        throw new ApiError(`Couldn't connect to db`, 500);
    }
};

export default connectToDb;
