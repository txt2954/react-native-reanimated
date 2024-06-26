#!/bin/bash

FILE=_reanimated_paths.js # File to check
prev_size=-1              # Initializing previous size to an impossible value
COUNTER=0                 # Counter to keep track of how many times the loop has run

touch $FILE

while true; do
  yarn react-native bundle --reset-cache --entry-file index.js --bundle-output bundle.js --dev true --platform ios --minify false #--max-workers 0
  current_size=$(wc -m "$FILE" | awk '{print $1}')                                                                                # Get character count using wc -m ("m" for characters) and use awk to get first column which is count
  if [[ $current_size -eq $prev_size ]]; then                                                                                     # Compare current character count with previous count
    break
  else
    prev_size=$current_size
    ((COUNTER++)) # Increment counter
    echo $COUNTER
    echo $current_size
  fi
done

echo "File $FILE size in characters has stopped growing"
