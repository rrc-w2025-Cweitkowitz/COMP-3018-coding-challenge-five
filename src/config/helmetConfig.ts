/**
 * HSTS or HTTP strict transport security ensures that whenever the API is loaded
 * that it loads under the secure internet protocol. Not required in production but in live
 * where the attack surface is greater this reduces the chance of compromise
 * */ 
import helmet from "helmet";

export const getHelmetConfig = () => {
    const isDevelopment = process.env.NODE_ENV === "development";

    const baseConfig = {
        // Limits what can be executed or fetched. Since this is a Json api it is not typically able to
        // execute code
        contentSecurityPolicy: false,
        /**
        * This policy is on by default but by manually triggering it we can ensure
        * that it is always true regardless of what changes in the default rules.
        * This hides information about the API that attackers can use against it. 
        */ 
        hidePoweredBy: true, 
    };

    if (isDevelopment) {
        return helmet({
            ...baseConfig,
            hsts: false, // No HTTPS enforcement in development
        });
    }

    // Production gets full security
    return helmet({
        ...baseConfig,
        hsts: {
            maxAge: 31536000,
            includeSubDomains: true,
            preload: true,
        },
        // Frame guard is being denied here. prevents clickjacking attacks
        frameguard: { action: "deny" },
        referrerPolicy: { policy: "no-referrer" },
    });
};



