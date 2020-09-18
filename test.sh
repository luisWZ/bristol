#!/bin/bash

set -e

cd $REMOTE_DIR

if [ -f $COMPRESS_FILE ]
  then

    echo "Creating $TEMP_DIR folder"
    [ -d $TEMP_DIR ] && rm -rf $TEMP_DIR
    mkdir $TEMP_DIR
    cd $TEMP_DIR
    touch test.bak

  else
    echo "No tar file was found in directory 💩"

fi