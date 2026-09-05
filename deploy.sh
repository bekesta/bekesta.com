#!/usr/bin/env bash
set -euo pipefail
npm run build
rsync -avz --delete dist/ chessblog:/var/www/bekesta.com/html/
echo "Deploy successful, $(date)"
