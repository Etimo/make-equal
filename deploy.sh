#!/usr/bin/env sh
yarn install
yarn build

lftp -u "${LFTP_USERNAME}" --env-password "${LFTP_SERVER}" -c "mirror --reverse --delete build public_html"
