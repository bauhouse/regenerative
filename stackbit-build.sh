#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST __STACKBIT_WEBHOOK_URL__/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=__STACKBIT_PULL_API_URL__
curl -s -X POST __STACKBIT_WEBHOOK_URL__/ssgbuild > /dev/null
next build && next export
wait

curl -s -X POST __STACKBIT_WEBHOOK_URL__/publish > /dev/null
echo "Stackbit-build.sh finished build"
