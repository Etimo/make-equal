#!/usr/bin/env sh
yarn install
yarn build

sudo apt update
sudo apt install lftp
lftp -u "${LFTP_USERNAME}" --env-password "${LFTP_SERVER}" -c "mirror --reverse --delete build public_html"
