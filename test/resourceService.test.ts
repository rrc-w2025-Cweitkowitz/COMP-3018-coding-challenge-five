import { getAllRessources, getRessourcesById } from "../src/api/v1/services/resourceService";
import { Resources } from "../src/api/v1/models/resourceModels";

describe("Resource Service", () => {
  describe("getAllRessources", () => {
    it("should return all resources", async () => {
      const resources: Resources[] = await getAllRessources();
      expect(resources).toHaveLength(4); 
      expect(resources[0].title).toBe("Express.js Guide");
    });
  });

  describe("getRessourcesById", () => {
    it("should return the resource with given id", async () => {
      const resource: Resources = await getRessourcesById("2");
      expect(resource.title).toBe("TypeScript Basics");
      expect(resource.id).toBe("2");
    });

    it("should throw an error if resource is not found", async () => {
      await expect(getRessourcesById("999")).rejects.toThrow("Resource not found");
    });
  });
});