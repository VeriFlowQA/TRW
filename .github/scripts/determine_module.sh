#!/bin/bash

# This script is intended to be used in GitHub Actions workflow.
# It sets environment variables based on the type of event that triggered the workflow - `schedule` or `workflow_dispatch`
# and, in case of scheduled event, based on the current time.
#
# These environment variables control which VeriFlow module is selected for testing.
#
# Workflow Trigger: `schedule`
# - When the workflow is triggered by a scheduled event, the script calculates the current time in UTC,
#   and compares it against predefined time ranges to determine the appropriate VeriFlow module.
#
# Time ranges and associated modules:
# - 08:00 - 08:15 UTC -> VeriFlow_EU - Android UAT
# - 09:00 - 09:15 UTC -> VeriFlow_EU - iOS UAT
# - 19:00 - 19:15 UTC -> VeriFlow_EU - Android QA
# - 16:30 - 16:45 UTC -> VeriFlow_NA - Android UAT
# - 17:30 - 17:45 UTC -> VeriFlow_NA - iOS UAT
#
# Behavior:
# - If the current time falls within one of these ranges, the corresponding module is selected.
# - If the time doesn't match any of these ranges, the script exits with an error message.
#
# Workflow Trigger: `workflow_dispatch`
# - When the workflow is manually triggered using the `workflow_dispatch` event,
#   the script selects a VeriFlow module based on input provided via GitHub Actions.
#
# Input Handling:
# - Single Module: The script uses the input module provided via the workflow dispatch event.
#
# Environment variables set by the script:
# - APP_MODULE: Name of the VeriFlow module selected based on the conditions above.
#
# Example Output:
# - If the script is run at 05:05 UTC due to a `schedule` event:
#   APP_MODULE=VeriFlow_EU
#   Selected VeriFlow module: VeriFlow_EU
#
# - If the script is run due to a `workflow_dispatch` event with input VeriFlow_NA:
#   APP_MODULE=VeriFlow_NA
#   Selected VeriFlow module: VeriFlow_NA
#
# -----------------------------------------------------------------------------

if [[ "$GITHUB_EVENT_NAME" == "schedule" ]]; then
  CURRENT_TIME=$((10#$(date -u +"%H%M")))
  case $CURRENT_TIME in
    # VeriFlow_NA
    43[0-9]|44[0-5]) APP_MODULE="VeriFlow_NA"; DEVICE_PLATFORM="android"; APP_ENVIRONMENT="UAT"; TEST_GROUP="ALL";;
    53[0-9]|54[0-5]) APP_MODULE="VeriFlow_NA"; DEVICE_PLATFORM="ios"  APP_ENVIRONMENT="UAT"; TEST_GROUP="ALL";;
    # VeriFlow_EU
    160[0-9]|161[0-5]) APP_MODULE="VeriFlow_EU"; DEVICE_PLATFORM="android"; APP_ENVIRONMENT="UAT"; TEST_GROUP="ALL";;
    180[0-9]|181[0-5]) APP_MODULE="VeriFlow_EU"; DEVICE_PLATFORM="ios"; APP_ENVIRONMENT="UAT"; TEST_GROUP="ALL";;
    200[0-9]|201[0-5]) APP_MODULE="VeriFlow_EU"; DEVICE_PLATFORM="android"; APP_ENVIRONMENT="QA"; TEST_GROUP="QA" ;;
    *) echo "No matching time found for $CURRENT_TIME. Exiting..."; exit 1 ;;
  esac

elif [[ "$GITHUB_EVENT_NAME" == "workflow_dispatch" ]]; then
  APP_MODULE="$GITHUB_INPUTS_MODULE"
  DEVICE_PLATFORM="$GITHUB_INPUTS_DEVICE_PLATFORM"
  APP_ENVIRONMENT="$GITHUB_INPUTS_APP_ENVIRONMENT"
  TEST_GROUP="$GITHUB_INPUTS_TESTS_GROUP"
else
  echo "This workflow was triggered by an unsupported event. Exiting..."
  exit 1
fi
echo "Selected VeriFlow module: $APP_MODULE"
echo "APP_MODULE=$APP_MODULE" >> "$GITHUB_ENV"
echo "Selected Device Platform: $DEVICE_PLATFORM"
echo "DEVICE_PLATFORM=$DEVICE_PLATFORM" >> "$GITHUB_ENV"
echo "Selected VeriFlow APP environment: $APP_ENVIRONMENT"
echo "APP_ENVIRONMENT=$APP_ENVIRONMENT" >> "$GITHUB_ENV"
echo "Selected VeriFlow TEST group: $TEST_GROUP"
echo "TEST_GROUP=$TEST_GROUP" >> "$GITHUB_ENV"
