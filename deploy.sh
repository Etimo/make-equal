#!/usr/bin/env sh
yarn build
lftp -u "${LFTP_USERNAME}" --env-password "${LFTP_SERVER}" -c "mirror --reverse --delete build public_html"
