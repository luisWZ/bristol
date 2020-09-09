#!/bin/bash

#set -e

DIR=$1
TEMP_DIR=$2
ZIP_FILE=$3

echo $DIR
echo $TEMP_DIR
echo $ZIP_FILE

# cd $DIR

# if [ $DIR == $(pwd) ]
#   then

#     echo "Creating temp folder"
#     [ -d $TEMP_DIR ] && rm -rf $TEMP_DIR
#     mkdir $TEMP_DIR

#     files=$(find . \
#       -path './"$TEMP_DIR"' -prune -o \
#       -path './wp' -prune -o \
#       -name .htaccess -prune -o \
#       -name .ftpquota -prune -o \
#       -name $ZIP_FILE -prune  -o \
#       -print)

#     echo "Moving files"
#     for file in $files
#       do
#         mv $file $TEMP_DIR
#     done

#     echo "Unziping"
#     unzip $ZIP_FILE

#     echo "Removing files"
#     [ -f .DS_Store ] && rm .DS_Store
#     [ -f CNAME ] && rm CNAME
#     rm -rf $TEMP_DIR $ZIP_FILE

#     echo "Files on production 🛫"

#   else
#     echo "You're pointing to an incorrect folder 💩"

# fi