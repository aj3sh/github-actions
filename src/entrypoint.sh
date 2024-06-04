#!/bin/sh -l

echo "Welcome $INPUT_NAME"

echo "Event Payload"
cat $GITHUB_EVENT_PATH

echo "status=ok" >>$GITHUB_OUTPUT
