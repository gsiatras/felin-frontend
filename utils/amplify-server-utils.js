import { authConfig } from "@/config/amplify-cognito-config";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";

export const { runWithAmplifyServerContext } = createServerRunner({
    config: {
        Auth: authConfig,
    },
});