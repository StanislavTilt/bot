@echo off

echo Installing/updating bot dependencies.
call npm i --loglevel=warn >NUL
call npm i mongodb
call npm i dotenv
echo.
echo Done installing dependencies. Now run start.bat
timeout 3 > nul

if NOT ["%errorlevel%"]==["0"] (
  pause
  exit /b %errorlevel%
)