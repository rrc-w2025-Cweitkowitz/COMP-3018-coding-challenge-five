import { Router } from "express";
import { getResources, getResourceById } from "../controllers/resourceController";

const router = Router();

/**
 * @openapi
 * /api/v1/resources:
 *   get:
 *     summary: Get all resources
 *     description: Retrieves a list of all educational resources
 *     responses:
 *       200:
 *         description: Resources retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *              $ref: `#/components/schema/ItemResourceModel
 *      400:
 *          description: Failed to 
 */
router.get("/", getResources);

// Route to get a resource by ID
router.get("/:id", getResourceById);

export default router;