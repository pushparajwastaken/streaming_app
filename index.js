import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const app = express();

//multer middleware

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); //we have to keep the file in the uploads section
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
  },
});

//multer configuration
const upload = multer({ storage: storage });

app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:5173"], //these websites can access the backend
    credentials: true, //this doesn't affect us now
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //allow only those origins that are in the cors options
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json()); //this allows us to give data in json type
app.use(express.urlencoded({ extended: true })); //this allows us to take data from URL
app.use("/uploads", express.static("Uploads")); //we'll serve our static files from here

app.get("/", function (req, res) {
  res.json({ message: "Hello from Lavaa" }); //Sends a JSON response to the client.
});
app.post("/upload", upload.single("file"), function (req, res) {
  console.log("File Uploaded");
});
app.listen(8000, function () {
  console.log("App is listening at port 3000....");
}); // Prints a message in the terminal to confirm the server is running.
