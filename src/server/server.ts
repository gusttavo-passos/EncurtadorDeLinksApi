import Express from "express";
import cors from "cors";
import router from "../routes/routes";
// import swaggerUi from "swagger-ui-express";
// import { swaggerSpec } from "../swagger";

const app = Express();
app.use(cors())
app.use(Express.json());
app.use(router);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
  console.log("Swagger rodando em http://localhost:3001/api-docs");
});

export default app