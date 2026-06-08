# Backend (tour-booking-app)

## Run locally

1. Install dependencies:
   npm install

2. Start dev server:
   npm run dev

3. Prisma:
   npx prisma generate
   npx prisma migrate status
   npx prisma db seed # if seed script exists

## Env

- PORT (default 3001)
- DATABASE_URL (if using Prisma)

## Frontend

Set NEXT_PUBLIC_API_URL=http://localhost:3001 in frontend/.env.local
