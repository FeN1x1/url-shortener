import { router } from "../trpc";
import { authRouter } from "./auth";
import { urlRouter } from "./urlShortener";

export const appRouter = router({
  auth: authRouter,
  urlShortener: urlRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
