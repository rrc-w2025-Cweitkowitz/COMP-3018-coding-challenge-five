/**
 * @openapi
 * components:
 *  schema:
 *      ItemResourceModel:
 *          type: object
 *          required:
 *              - id
 *              - title
 *              - type
 *              - url
 *              - description
 *              - createdAt
 *          properties:
 *              id:
 *                  type: string
 *                  description: gives unique identification to each item
 *                  example: "1"
 *              title:
 *                  type: string
 *                  description: Name of the resource
 *                  example: "Typescript Basics"
 *              type:
 *                  type: string
 *                  description: Resource type (ie: video, document)
 *                  example: "video"
 *              url:
 *                  type: string
 *                  description: link to the resource
 *                  example: "https://example.com/ts-basics"
 *              description:
 *                  type: string
 *                  description: describes the basic info of what the resource is
 *                  example: "Introduction to TypeScript"
 *              createdAt:
 *                  type: string
 *                  format: ISO date
 *                  description: date the resource was created
 *                  example: "2026-03-24T00:00:00.000Z"          
 * */ 