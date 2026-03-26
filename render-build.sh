#!/usr/bin/env bash
set -euo pipefail

echo "==> Enabling corepack for pnpm..."
corepack enable
corepack prepare pnpm@10.18.0 --activate

echo "==> Installing dependencies..."
pnpm install --frozen-lockfile

echo "==> Building all packages..."
pnpm run build

echo "==> Copying frontend build to api-server dist..."
cp -r artifacts/dream-cars/dist/public/ artifacts/api-server/dist/public/

echo "==> Build complete!"
ls -la artifacts/api-server/dist/
