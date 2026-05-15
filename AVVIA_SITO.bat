@echo off
TITLE Avvio Hotel Splendid
echo ==========================================
echo    AVVIO SITO HOTEL SPLENDID
echo ==========================================
echo.
echo Controllo installazione Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRORE: Python non e' installato o non e' nel PATH.
    echo Per favore installa Python per avviare il server.
    pause
    exit /b
)

echo Il sito sara' disponibile all'indirizzo: http://localhost:3000
echo.
echo Apertura del browser in corso...
start http://localhost:3000
echo.
echo Per chiudere il server, chiudi questa finestra.
echo.
cd sito_hotel
python -m http.server 3000
pause
