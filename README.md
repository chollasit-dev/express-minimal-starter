# Express Minimal Starter

My Express starter template repository with minimal dependencies essential to
start writing an Express app. This app came with a placeholders of database for
both LibSQL (SQLite forked, via Turso) and MongoDB.

## Features

- **Error Handling**: Centralized error management for better debugging.
- **Environment Management**: Dynamic environment variable loading for flexible
  configuration.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [pnpm](https://pnpm.io/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/chollasit-dev/express-minimal-starter.git
cd express-minimal-starter
pnpm install
```

### Environment Setup

1. create `.env` to define an initial variable for loading environment
   dynamically when developing:

```sh
NODE_ENV=development

# Or for production (testing)
NODE_ENV=production
```

2. Copy the example environment file:

```sh
#
cp .env.example .env.local

# Or for production (testing)
cp .env.example .env.production
```

3. Edit either `.env.local` or `.env.production` and fill in your actual
   configuration values:

### Start the development server

```sh
pnpm dev
```

### Run the production server

```sh
pnpm start
```

## Testing

```sh
pnpm test
```

Or if you want it to watch for changes:

```sh
pnpm test:watch
```
