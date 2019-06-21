#!/bin/bash
docker run --net=host -ti -e "TERM=xterm-256color" -v $PWD:/tests codeception/codeceptjs codeceptjs "$@"