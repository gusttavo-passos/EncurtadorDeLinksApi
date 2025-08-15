import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Encurtador de Links Api",
      version: "1.0.0",
      description: "Documentação da API usando Swagger e TypeScript",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.ts"], // Caminho dos arquivos com comentários JSDoc
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
