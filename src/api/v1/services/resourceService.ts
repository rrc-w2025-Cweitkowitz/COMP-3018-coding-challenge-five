import { Resources } from "../models/resourceModels";

const COLLECTION: Resources[] = [
  {
    id: "1",
    title: "Express.js Guide",
    type: "documentation",
    url: "https://expressjs.com/en/guide",
    description: "Official Express.js documentation",
    createdAt: "2026-03-24T00:00:00.000Z"
  },
  {
    id: "2",
    title: "TypeScript Basics",
    type: "video",
    url: "https://example.com/ts-basics",
    description: "Introduction to TypeScript",
    createdAt: "2026-03-24T00:00:00.000Z"
  },
  {
    id: "3",
    title: "REST API Design",
    type: "article",
    url: "https://example.com/rest-design",
    description: "Best practices for REST API design",
    createdAt: "2026-03-24T00:00:00.000Z"
  },
  {
    id: "4",
    title: "Jest Testing Tutorial",
    type: "tutorial",
    url: "https://example.com/jest-tutorial",
    description: "Complete guide to testing with Jest",
    createdAt: "2026-03-24T00:00:00.000Z"
  }
];

// Retrieve all resources
export const getAllRessources = async (): Promise<Resources[]> => {
  return COLLECTION;
};

// Retrieve a resource by ID
export const getRessourcesById = async (id: string): Promise<Resources> => {
  const resource = COLLECTION.find((r) => r.id === id);

  if (!resource) {
    throw new Error("Resource not found");
  }

  return resource;
};