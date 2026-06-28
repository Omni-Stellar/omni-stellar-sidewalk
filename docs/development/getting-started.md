# Getting Started with omni-stellar-omni-stellar-sidewalk

## Prerequisites

- Node.js >= 20
- pnpm >= 9

## Bootstrap from the Auth Starter

```bash
# Clone
git clone https://github.com/MixMatch-Inc/omni-stellar-omni-stellar-sidewalk.git
cd omni-stellar-omni-stellar-sidewalk

# Install
pnpm install

# Environment
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

# Database
cd apps/api
pnpm prisma migrate dev
pnpm prisma db seed
cd ../..

# Start
pnpm dev
```

## Check It Works

- API health: http://localhost:3001/health → `{ "status": "ok" }`
- Web app: http://localhost:3000

## Next Steps

- Read `docs/development/adding-modules.md` to add a new feature module.
- Read `docs/development/package-boundaries.md` before importing across packages.
- Run `pnpm test` to confirm all tests pass.
