#!/usr/bin/env bash

exit_code=0

echo "Run prettier"
prettier --write .
exit_code=$((exit_code + $?))

echo "Order words list"
./scripts/order.js
exit_code=$((exit_code + $?))

exit $exit_code
