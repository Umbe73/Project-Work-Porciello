@echo off
TITLE Modalita Sviluppatore - Hotel Splendid
echo ==========================================
echo    MODALITA SVILUPPATORE (Vite + Python)
echo ==========================================
echo.
echo Avvio del sito principale su porta 3000...
start "Server Sito Hotel" cmd /k "cd sito_hotel && python -m http.server 3000"

echo Avvio dell'app prenotazione (Vite) su porta 5173...
start "Server Dev App" cmd /k "cd app_prenotazione && npm run dev"

echo.
echo Sito principale: http://localhost:3000
echo App prenotazione (Dev): http://localhost:5173
echo.
echo Le finestre dei server rimarranno aperte. Chiudile per terminare.
pause
