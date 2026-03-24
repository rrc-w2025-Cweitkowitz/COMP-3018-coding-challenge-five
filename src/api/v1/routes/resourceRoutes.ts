import { Router } from "express";
import { getResources, getResourceById } from "../controllers/resourceController";

const router = Router();

// Route to get all resources
router.get("/", getResources);

// Route to get a resource by ID
router.get("/:id", getResourceById);

export default router;