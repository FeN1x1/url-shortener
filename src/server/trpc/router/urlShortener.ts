import { z } from "zod";

import { router, protectedProcedure, publicProcedure } from "../trpc";

export const urlRouter = router({
  generateUrl: protectedProcedure
    .input(z.object({ url: z.string(), urlToRedirect: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.url.create({
        data: {
          url: input.url,
          urlToRedirect: input.urlToRedirect,
          user: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),
  getAllUserUrls: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.url.findMany({
      where: {
        user: ctx.session.user,
      },
    });
  }),
  deleteUrl: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.url.delete({
        where: {
          id: input.id,
        },
      });
    }),
  getUrlMatch: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.url.findFirst({
        where: {
          urlToRedirect: input.url,
        },
      });
    }),
});
