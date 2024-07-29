import cors from "cors";
import "dotenv/config";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import {
  CriarNovoRegistro,
  DeletarRegistro,
  EditarRegistro,
  ObterRegistroPorId,
  ObterRegistros,
  ObterRegistrosPorStatus,
} from "registro";
import { DatabasePrismaRegistroAdapter } from "./adapters";
import { DatabaseKnexRegistroAdapter } from "./adapters/database";
import {
  CriarNovoRegistroController,
  // AuthMiddleware,
  DeletarRegistroController,
  EditarRegistroController,
  ObterRegistroPorIdController,
  ObterRegistrosController,
  TestController,
} from "./controllers";
import { ObterRegistrosPorStatusController } from "./controllers/ObterRegistrosPorStatusController";

// Configuração Ambiente ----------------------------------------------
const porta = process.env.API_PORT ?? 8000;
const logger = process.env.LOGGER_LEVELINFO ?? "dev";
const environment = process.env.NODE_ENV ?? "";
console.log(`🟢 ENVIRONMENT: ${environment} 🟢`);

// Inicia Servidor Express ------------------------------------------
const app = express();

// Configuração Básica ----------------------------------------------
// cors({
//   origin: process.env.CORS_ORIGIN,
//   optionsSuccessStatus: 200,
// });
app.use(cors());
app.use(morgan(logger));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(porta, () => console.log(`🔥 Server is running on port ${porta}`));

// Configuração Rotas -----------------------------------------------
// prisma
const registrosRouter = express.Router();
app.use("/v1/registros", registrosRouter);
// knex
const registrosRouterKnex = express.Router();
app.use("/v2/registros", registrosRouterKnex);

// ADAPTADORES (faz a conexão com o externo (BD) do meu core ou aplicação)
const bancoDados = new DatabasePrismaRegistroAdapter();
const bancoDadosKnex = new DatabaseKnexRegistroAdapter();

// CASOS DE USO (fluxos do meu core ou aplicação)
// prisma
const getRegistros = new ObterRegistros(bancoDados);
const getRegistrosPorId = new ObterRegistroPorId(bancoDados);
const deleteRegistro = new DeletarRegistro(bancoDados);
const updateRegistro = new EditarRegistro(bancoDados);
const createRegistro = new CriarNovoRegistro(bancoDados);
const getResgistrosPorStatus = new ObterRegistrosPorStatus(bancoDados);

// knex
const getRegistrosKnex = new ObterRegistros(bancoDadosKnex);
const getRegistrosPorIdKnex = new ObterRegistroPorId(bancoDadosKnex);
const deleteRegistroKnex = new DeletarRegistro(bancoDadosKnex);
const updateRegistroKnex = new EditarRegistro(bancoDadosKnex);
const createRegistroKnex = new CriarNovoRegistro(bancoDadosKnex);
const getResgistrosPorStatusKnex = new ObterRegistrosPorStatus(bancoDadosKnex);

// ------------------------------------ ROTAS PRIVADAS
// const authMiddleware = AuthMiddleware();
// new ObterRegistrosController(registrosRouter, getRegistros, authMiddleware);
// CONTROLLERS (entre o mais externo e core fazendo a junção de um com outro)
// prisma
new ObterRegistrosController(registrosRouter, getRegistros);
new ObterRegistroPorIdController(registrosRouter, getRegistrosPorId);
new DeletarRegistroController(registrosRouter, deleteRegistro);
new EditarRegistroController(registrosRouter, updateRegistro);
new CriarNovoRegistroController(registrosRouter, createRegistro);
new ObterRegistrosPorStatusController(registrosRouter, getResgistrosPorStatus);
// knex
new ObterRegistrosController(registrosRouterKnex, getRegistrosKnex);
new ObterRegistroPorIdController(registrosRouterKnex, getRegistrosPorIdKnex);
new DeletarRegistroController(registrosRouterKnex, deleteRegistroKnex);
new EditarRegistroController(registrosRouterKnex, updateRegistroKnex);
new CriarNovoRegistroController(registrosRouterKnex, createRegistroKnex);
new ObterRegistrosPorStatusController(
  registrosRouterKnex,
  getResgistrosPorStatusKnex
);

// ------------------------------------ ROTAS PUBLICAS
new TestController(app);
