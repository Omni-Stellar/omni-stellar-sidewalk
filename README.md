# 🛣️ omni-stellar-omni-stellar-sidewalk

[![CI](https://github.com/MixMatch-Inc/omni-stellar-omni-stellar-sidewalk/actions/workflows/ci.yml/badge.svg)](https://github.com/MixMatch-Inc/omni-stellar-omni-stellar-sidewalk/actions/workflows/ci.yml)

**omni-stellar-omni-stellar-sidewalk** is an open-source, civic reporting and accountability platform that empowers citizens to document local issues, track government response, and ensure follow-through—publicly and transparently.

Citizens can report problems like damaged roads, broken streetlights, flooding, waste issues, or public safety concerns, attach media and location data, and monitor progress from *reported* to *resolved*.

What sets omni-stellar-omni-stellar-sidewalk apart is its **Stellar-powered accountability layer**. By anchoring civic actions on-chain, omni-stellar-omni-stellar-sidewalk turns public complaints into verifiable records that cannot be ignored, altered, or quietly deleted.

> **If it’s on-chain, it can’t be swept under the rug.**

[SIDEWALK FIGMA](https://www.figma.com/design/cH6GFhWhtgxzESR8pedNGl/omni-stellar-omni-stellar-sidewalk?node-id=0-1&t=n3OH48FSO4NjbBf3-1)

---

## 🌍 Why omni-stellar-omni-stellar-sidewalk?

Civic reporting tools already exist—but trust, incentives, and accountability are often missing.

Most platforms are:
* Centralized and opaque
* Easy to manipulate or abandon
* Focused on reporting, not resolution

omni-stellar-omni-stellar-sidewalk is built around a different idea:
**Civic participation should be verifiable, incentivized, and impossible to ignore.**

By combining community reporting with blockchain-backed transparency, omni-stellar-omni-stellar-sidewalk transforms everyday civic complaints into durable public records and measurable performance data.

---

## ✨ Core Capabilities

* **Civic Issue Reporting** – Report infrastructure and public service problems
* **Media & Location Proof** – Photos, videos, timestamps, and geotags
* **Status Tracking** – Follow issues from report → acknowledgement → resolution
* **Public Metrics** – Resolution time and responsiveness are visible to all
* **Mobile-First Design** – Built for fast, on-the-ground reporting

---

## ⭐ The Stellar Advantage

omni-stellar-omni-stellar-sidewalk uses **Stellar** as a trust and coordination layer—not as hype, but as infrastructure.

### 1. Proof & Transparency
Every critical civic action is anchored on-chain:
* Issue creation
* Official acknowledgement
* Resolution confirmation
* Time-to-fix metrics

Each report is associated with a **Stellar transaction hash**, providing immutable, timestamped proof. This ensures that complaints cannot be edited, hidden, or erased after submission.

### 2. Tokenized Civic Accountability
omni-stellar-omni-stellar-sidewalk introduces a **community civic token** on Stellar. Citizens earn tokens for submitting valid reports and verifying others. Tokens can be used to vote on priority issues or access local civic perks.

### 3. Smart Escalation & Deadlines
omni-stellar-omni-stellar-sidewalk enforces accountability through time-bound logic. Missed deadlines trigger automatic escalation, and unresolved issues surface on a public **Hall of Accountability**.

---

## 🧱 Architecture Overview

omni-stellar-omni-stellar-sidewalk is built as a scalable **Monorepo** using `pnpm` workspaces, with a clear separation between the API, mobile experience, and shared services.

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React Native (Expo) |
| **Backend API** | Node.js / Express (Modular Monolith) |
| **Database** | MongoDB |
| **Blockchain** | **Stellar** (via `@omni-stellar-sidewalk/stellar` package) |
| **Tooling** | `pnpm`, TypeScript, `tsx` |

---

## 📦 Monorepo Structure

```text
omni-stellar-sidewalk/
├── apps/
│   ├── api/              # Express backend (Modular Monolith)
│   └── mobile/           # React Native App (Expo)
│
├── packages/
│   └── stellar/          # Shared Stellar Service & SDK
│
├── config/               # Shared configurations
├── package.json          # Root workspace config
└── pnpm-workspace.yaml   # Workspace definitions

```

---

## 🚀 Getting Started

Follow these steps to get the development environment running.

### 1. Prerequisites

* **Node.js** (v18 or higher)
* **pnpm** (Install via `npm install -g pnpm`)
* **MongoDB** (Running locally or via Atlas)
* **Expo Go** app on your phone (optional, for physical device testing)

### 2. Installation

Clone the repo and install dependencies using `pnpm`.

```bash
git clone [https://github.com/your-org/omni-stellar-sidewalk.git](https://github.com/your-org/omni-stellar-sidewalk.git)
cd omni-stellar-sidewalk

# Install all dependencies for all packages
pnpm install

```

### 3. Build Shared Packages

Before running the apps, you must build the shared `@omni-stellar-sidewalk/stellar` package so the API can consume it.

```bash
# Build all packages
pnpm -r build

```

### 4. Configure Environment

Set up the environment variables for the API.

```bash
# Create the .env file in the API folder
cp apps/api/.env.example apps/api/.env

# Update apps/api/.env with your MongoDB URI (defaults to local)
# MONGO_URI=mongodb://localhost:27017/omni-stellar-sidewalk

```

---

## 🏃‍♂️ Running the Project

You will typically run the Backend and the Mobile App in two separate terminal tabs.

### Terminal 1: Backend API

This starts the Express server in watch mode.

```bash
# Run from the root directory
npm run dev:api

```

*You should see: `🚀 Server running on port 5000` and `✨ Stellar Service initialized`.*

### Terminal 2: Mobile App

This starts the Expo development server.

```bash
cd apps/mobile
npx expo start

```

* Press `a` to run on **Android Emulator**.
* Press `i` to run on **iOS Simulator**.
* Scan the QR code to run on your physical device.

---

## ✅ Local Quality Checks

Before submitting a PR, run these checks locally to ensure CI will pass:

```bash
# Install dependencies
pnpm install

# Run all checks for a specific package
pnpm --filter omni-stellar-sidewalk-api lint && pnpm --filter omni-stellar-sidewalk-api typecheck && pnpm --filter omni-stellar-sidewalk-api build
pnpm --filter mobile lint && pnpm --filter mobile typecheck
pnpm --filter @omni-stellar-sidewalk/stellar lint && pnpm --filter @omni-stellar-sidewalk/stellar typecheck && pnpm --filter @omni-stellar-sidewalk/stellar build

# Or run checks individually
pnpm --filter <package-name> lint       # Run ESLint
pnpm --filter <package-name> typecheck  # Run TypeScript type checking
pnpm --filter <package-name> build      # Build the package
```

---

## 🤝 Contributing

omni-stellar-omni-stellar-sidewalk is open-source and built for contributors who care about civic tech, transparency, and real-world impact.

1. Fork the repository
2. Create a branch from `main`
3. Pick an issue or propose one
4. Open a PR with context and screenshots
5. Ensure CI checks pass before requesting review

---

## 💬 Community & Support

👉 Telegram: [https://t.me/+gRA3CdyekZw3MWM0](https://t.me/+gRA3CdyekZw3MWM0)

---

## 📄 License

MIT License

```

```
