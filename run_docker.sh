#!/usr/bin/env bash

## Complete the following steps to get Docker running locally

# Step 1:
# Build image and add a descriptive tag
repo_name=devop_app

if [[ $(docker images --format "table {{.Repository}}" | grep devop_app) = $repo_name ]]
then
    # image exists so no need of creating another one
    echo "$repo_name repo found, skipping \"docker build\"\n"
else
    docker build -t $repo_name .
    sleep 10
fi

# Step 2: 
# List docker images
docker images

# Step 3: 
# Run flask app
docker run --rm  -it -p 80:80 --name my_app $repo_name