@echo off
echo ========================================
echo   EUROPA KREDIT BANK - Images Premium
echo ========================================
echo.
echo Installation des images selon specifications:
echo - Header corporate orange #F26A21
echo - Navigation bleue #0C3B66  
echo - Hero avec deux femmes professionnelles
echo - Design bancaire premium
echo.
echo Appuyez sur une touche pour commencer...
pause > nul
echo.

echo [1/4] Telechargement Hero Section...
curl -L -o "public\images\hero-corporate.jpg" "https://images.unsplash.com/photo-1573496359142-b8d87737a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85"
if exist "public\images\hero-corporate.jpg" (
    echo   ✅ Hero section telechargee avec succes
) else (
    echo   ❌ Erreur lors du telechargement
)

echo.
echo [2/4] Telechargement Bank Building...
curl -L -o "public\images\bank-building.jpg" "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
if exist "public\images\bank-building.jpg" (
    echo   ✅ Bank building telecharge avec succes
) else (
    echo   ❌ Erreur lors du telechargement
)

echo.
echo [3/4] Telechargement Tech Devices...
curl -L -o "public\images\tech-devices.jpg" "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85"
if exist "public\images\tech-devices.jpg" (
    echo   ✅ Tech devices telecharge avec succes
) else (
    echo   ❌ Erreur lors du telechargement
)

echo.
echo [4/4] Telechargement Team Meeting...
curl -L -o "public\images\team-meeting.jpg" "https://images.unsplash.com/photo-1573496359142-b8d87737a482?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=85"
if exist "public\images\team-meeting.jpg" (
    echo   ✅ Team meeting telecharge avec succes
) else (
    echo   ❌ Erreur lors du telechargement
)

echo.
echo ========================================
echo           VERIFICATION FINALE
echo ========================================
echo.

if exist "public\images\hero-corporate.jpg" (
    echo   ✅ hero-corporate.jpg - PRET
) else (
    echo   ❌ hero-corporate.jpg - MANQUANT
)

if exist "public\images\bank-building.jpg" (
    echo   ✅ bank-building.jpg - PRET
) else (
    echo   ❌ bank-building.jpg - MANQUANT
)

if exist "public\images\tech-devices.jpg" (
    echo   ✅ tech-devices.jpg - PRET
) else (
    echo   ❌ tech-devices.jpg - MANQUANT
)

if exist "public\images\team-meeting.jpg" (
    echo   ✅ team-meeting.jpg - PRET
) else (
    echo   ❌ team-meeting.jpg - MANQUANT
)

echo.
echo ========================================
echo     INSTALLATION TERMINEE !
echo ========================================
echo.
echo Le site affichera maintenant les vraies images:
echo - Header corporate orange #F26A21
echo - Navigation bleue #0C3B66
echo - Hero avec deux femmes professionnelles
echo - Design bancaire premium moderne
echo.
echo Actualisez votre site web pour voir les images !
echo.
pause
