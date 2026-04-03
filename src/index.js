import "dotenv/config";
import express from "express";
import userRouter from "./auth/routes.js";
import errorHander from "./utils/middlewares/errorHandler.js";
import connectToDb from "./utils/connectDb.js";

const app = express();
const port = process.env.PORT || 8001;

await connectToDb();

app.listen(port, () => {
    console.log(`server up and listening on port : ${port}`);
});

// global middlewares
app.use(express.json());

app.use(userRouter);

// global error handler
app.use(errorHander);
