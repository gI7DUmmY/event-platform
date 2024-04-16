import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
    '/assets/images/dotted-pattern.png',
    '/assets/images/hero.png',
    '/assets/images/logo.svg',
    '/assets/icons/arrow.svg',
    '/assets/icons/calendar.svg',
    '/assets/icons/delete.svg',
    '/assets/icons/edit.svg',
    '/assets/icons/location.svg',
    '/favicon.ico',
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ],
})

export const config = {
  matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
