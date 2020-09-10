#!/bin/bash

#set -e

cd $WEBSITE_FULL_ROUTE

if [ $WEBSITE_FULL_ROUTE == $(pwd) ]
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

    echo "Moving files"
    for file in $files
      do
        echo "Moving $file"
        mv $file $TEMP_DIR
    done

    # echo "Uncompress tar file"
    # tar -xzvf $COMPRESS_FILE

    # echo "Removing files"
    # [ -f .DS_Store ] && rm .DS_Store
    # [ -f CNAME ] && rm CNAME
    # rm -rf $TEMP_DIR $COMPRESS_FILE

    # echo "Files on production 🛫"
    echo "Done  ¯\_(ツ)_/¯"

  else
    echo "You're pointing to an incorrect folder 💩"

fi