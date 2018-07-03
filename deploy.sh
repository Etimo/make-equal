#!/usr/bin/env bash
set -euo pipefail

yarn install
yarn build

lftp -c "set dns:order 'inet inet6' && open -u '${LFTP_USERNAME},${LFTP_PASSWORD}' ${LFTP_SERVER} && mirror --reverse --delete build public_html"
