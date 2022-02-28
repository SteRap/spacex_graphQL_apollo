import express from "express";
import { graphql } from "graphql";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema.js";
import cors from "cors";
import path from "path"

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"))
})

//define port to for when it is deployed on Heroku or 5000 for development
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
