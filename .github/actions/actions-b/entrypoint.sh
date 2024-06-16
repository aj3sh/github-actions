#!/bin/sh

server=$1

echo "Server args: $server"

echo "Name: $INPUT_NAME"
cat $GITHUB_EVENT_PATH
echo "status=docker" >>$GITHUB_OUTPUT
