import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

// make express port
const app = express();
const PORT = 8080;

// set up db username etc from nodemon
const {
  MONGODB_ATLAS_USERNAME,
  MONGODB_ATLAS_PASSWORD,
  MONGODB_ATLAS_DBNAME,
} = process.env;

// uri link from mangoose "connect to your app" then connect it from set up above
const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@clustertodo.chaudrq.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// mencegah server terhalang cors policy
app.use(cors());

// get request and response and make route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// get request and response and make route
app.get("/about", (req: Request, res: Response) => {
  res.send("About this app");
});

mongoose.set("useFindAndModify", true);
// get uri and options above if after ...options) has ; delete or code will get error this use promise if connect/true then open port
mongoose
  .connect(uri, options)
  // get and listen to port
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App is listening at http://localhost:${PORT}`);
    });
  })
  // if error
  .catch((error) => {
    throw error;
  });
