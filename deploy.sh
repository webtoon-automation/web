#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset

readonly APP=webtoon-automation-web

heroku container:push --app "${APP}" web   
heroku container:release --app "${APP}" web
