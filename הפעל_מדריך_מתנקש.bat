@echo off
chcp 65001 >nul
title מדריך מתנקש - מייפל סטורי
cd /d "%~dp0"

echo ========================================================
echo    הפעלת מדריך מתנקש (Assassin Guide) כתוכנה למחשב
echo ========================================================
echo.

if exist "node_modules\electron\dist\electron.exe" (
    echo מפעיל באמצעות Electron...
    start "" "node_modules\electron\dist\electron.exe" .
) else (
    echo מפעיל במצב חלון עצמאי (Desktop App Mode)...
    start msedge --app="file:///%~dp0dist/index.html" --window-size=1280,860
)

exit
