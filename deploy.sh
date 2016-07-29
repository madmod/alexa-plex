#!/bin/bash          
echo Build started
rm deploy.zip
zip -r deploy.zip . -x "*.git*" "*test*"
echo files are ready
echo uploading zip file, please wait...
aws lambda update-function-code --zip-file fileb://deploy.zip --function-name alexa-plex
echo upload is done, exiting.
