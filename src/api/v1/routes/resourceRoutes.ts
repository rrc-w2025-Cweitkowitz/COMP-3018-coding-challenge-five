import { Router } from "express";
import { getResources, getResourceById } from "../controllers/resourceController";

const router = Router();

/**
 *  @openapi
 *  /resources:
 *      get:
 *          summary: Retrieves a list of all educational resources
 *          responses:
 *                200:
 *                description: Resources retrieved successfully
 *                content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ItemResourceModel'
 */
router.get("/", getResources);

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
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 count:
 *                   type: number
 *                 data:
 *                   type: array
 */
router.get("/:id", getResourceById);

export default router;