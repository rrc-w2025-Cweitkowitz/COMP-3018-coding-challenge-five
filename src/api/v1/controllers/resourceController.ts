import { Request, Response } from "express";
import { getAllRessources, getRessourcesById } from "../services/resourceService"; // adjust path if needed

// GET /resources
export const getResources = async (req: Request, res: Response) => {
  try {
    const resources = await getAllRessources();
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resources", error });
  }
};


//Get resource by id
export const getResourceById = async (req: Request, res: Response) => {
  let { id } = req.params;

  if (Array.isArray(id)) {
    id = id[0]; // take the first one
  }


  try {
    const resource = await getRessourcesById(id);
    res.status(200).json(resource);
  } catch (error) {
    res.status(404).json({ message: "Resource not found" });
  }
};