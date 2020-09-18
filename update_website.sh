#!/bin/bash

#set -e
shopt -s nullglob

cd $REMOTE_DIR

if [ -f $COMPRESS_FILE ]
  then

    echo "Creating $TEMP_DIR folder"
    [ -d $TEMP_DIR ] && rm -rf $TEMP_DIR
    mkdir $TEMP_DIR

    files=$(find . \
      -path './"$TEMP_DIR"' -prune -o \
      -path './wp' -prune -o \
      -name .htaccess -prune -o \
      -name .ftpquota -prune -o \
      -name $COMPRESS_FILE -prune  -o \
      -print)

    echo "Moving old files to $TEMP_DIR folder"
    shopt -s nullglob
    for file in $files
      do
        mv $file $TEMP_DIR
    done
    shopt -u nullglob

    echo "Uncompress tar file"
    tar -xzf $COMPRESS_FILE

    echo "Removing files"
    rm -rf $TEMP_DIR $COMPRESS_FILE

    echo "Updated website 🛫"

  else
    echo "No tar file was found in directory 💩"

fi