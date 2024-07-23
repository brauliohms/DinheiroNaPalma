#!/usr/bin/env bash

# Remove Old Image
docker rm -f nginx:braulio

# No Cache Build
docker build --no-cache -t nginx:braulio -f Dockerfile .
