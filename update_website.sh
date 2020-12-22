#!/bin/bash

# set -e

cd $REMOTE_DIR

if [ -f $COMPRESS_FILE ]
  then

    echo "Creating temp folder"
    [ -d $TEMP_DIR ] && rm -rf $TEMP_DIR
    mkdir $TEMP_DIR

    files=$(find . \
      -path './"$TEMP_DIR"' -prune -o \
      -path './wp' -prune -o \
      -name .htaccess -prune -o \
      -name .ftpquota -prune -o \
      -name $COMPRESS_FILE -prune  -o \
      -print)

    echo "Moving old files to temp folder"
    for file in $files
      do
        mv $file $TEMP_DIR 2>/dev/null
    done

    echo "Uncompress tar file"
    tar -xzf $COMPRESS_FILE

    echo "Removing unnecessary files"
    rm -rf $TEMP_DIR $COMPRESS_FILE

    echo "Updated website 🛫"

  else
    echo "No tar file was found in directory 💩"

fi