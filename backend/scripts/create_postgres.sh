#!/bin/bash

echo "choose a workspace for your local db:" 
read workspace 

docker run \
-d \
--rm \
-p 5432:5432 \
-e POSTGRES_HOST_AUTH_METHOD=trust \
-e POSTGRES_PASSWORD=notneeded \
-v psql_$workspace:/var/lib/postgresql/data \
--name psql_${workspace} \
postgres

echo "check your psql is connected with the following command:"
echo "psql -h localhost -p 5432 -U postgres"
echo "url for apps:"
echo "psql://postgres@localhost:5432/postgres"