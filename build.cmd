@echo Off
pushd %~dp0
setlocal
set pull_request_number=%APPVEYOR_PULL_REQUEST_NUMBER%

:Build
call npm install
if %ERRORLEVEL% neq 0 goto BuildFail

call npm run build
echo "Error level: %ERRORLEVEL%"
if %ERRORLEVEL% neq 0 goto BuildFail

echo "pull_request_number: %pull_request_number%"
if %pull_request_number% gtr 0 (
  echo "In pull request. Not Deploying."
  CALL npm run browser-visual-tests
  if %ERRORLEVEL% neq 0 goto BuildFail
)

goto BuildSuccess

:BuildFail
echo.
echo *** BUILD FAILED ***
goto End

:BuildSuccess
echo.
echo *** BUILD SUCCEEDED ***
goto End

:End
echo.
popd
exit /B %ERRORLEVEL%