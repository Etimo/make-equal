#!/usr/bin/env sh
set -euo pipefail

yarn install
yarn build

lftp -c "open -u ${LFTP_USERNAME} --env-password ${LFTP_SERVER} && mirror --reverse --delete build public_html"
