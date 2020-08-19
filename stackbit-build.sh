#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST __STACKBIT_WEBHOOK_URL__/ssgbuild > /dev/null
next build && next export

# wait for studio-build.js
wait

curl -s -X POST __STACKBIT_WEBHOOK_URL__/publish > /dev/null
echo "stackbit-build.sh: finished build"
