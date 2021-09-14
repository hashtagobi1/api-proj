import express from "express";
const router = express.Router();
// import {getAlbums} from './data'
import {getPerson} from './data'

router.get("/api/person/:id", async (req, res) => {
  console.log("In API");
  try {
    // get data
    const data = await getPerson(1);

    // respond with data
    res.send(data);
    console.log(data)
  } catch (error) {
    res.statusCode = 404;
    console.log(error)
    // res.send(JSON.stringify({ message: error.message }));
  }
});

export = router;
