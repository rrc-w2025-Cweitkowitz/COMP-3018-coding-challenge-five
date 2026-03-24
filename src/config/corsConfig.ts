// Read allowed origins from environment variable

// Parse comma-separated origins into an array
// Allow methods: GET, POST, PUT, DELETE
// Allow headers: Content-Type, Authorization
// Set appropriate maxAge for preflight caching
// Include comments for each configuration choice

// run npm i --save-dev @types/cors

// config/corsConfig.ts
import cors from "cors";

/**
 * CORS configuration for controlled cross-origin access
 * Origins are read from environment variables for flexibility
 */
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

export const corsConfig = cors({
    // Only allow requests from origins specified in environment
    // This prevents unauthorized domains from accessing our API
    origin: allowedOrigins,
    //Only allows these four methods to be executed, prevents arbitrary code from being used 
    methods: ["GET", "POST", "PUT", "DELETE"],
    // by controlling the allowed headers it ensures stricter resource control and untested items being potentially allowed through
    allowedHeaders: ["content-type", "authorization"],

});
