import Express from "express";
import cors from "cors";
import router from "../routes/routes";

const app = Express();
app.use(Express.json());
app.use(router);
app.use(cors())

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app