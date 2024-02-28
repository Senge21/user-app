import experess from "express";
import cors from "cors";
import fs from "fs"

const PORT = 3000;
const app = experess();
app.use(cors());

app.use.app.get("/", (request, response) => {
  response.send("wish is success");
});

app.listen(PORT, () => {
  {
    ("express server is working: http: ${PORT} ");
  }
});
