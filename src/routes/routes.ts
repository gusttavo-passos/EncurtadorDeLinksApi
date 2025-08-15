import { Router } from "express";
import LinkController from "../controllers/link.controller";
import LinkService from "../services/link/link.service";
import LinkRepository from "../repositories/link/link.repository";
import UserController from "../controllers/user.controller";
import UserRepository from "../repositories/user/user.repository";
import UserService from "../services/user/user.service";

const router = Router();

//Links Repositories, Services and Controllers
const linkRepository = new LinkRepository();
const linkService = new LinkService(linkRepository)
const linkController = new LinkController(linkService);

// User Repositories, Services and Controllers
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

//Links Routes
router.get("/link", linkController.getLinkById);
router.post("/link", linkController.createLink);

//User Routes
router.get("/user", userController.loginUser);
router.post("/user", userController.createUser);

export default router;