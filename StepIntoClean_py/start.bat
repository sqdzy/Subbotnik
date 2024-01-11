chcp 65001
@echo off
echo Subbotnik by Artemkov, Lopaev
echo ==============================
echo Проверка наличия Django...
python -c "import django" >nul 2>&1
if errorlevel 1 (
    echo Django не найден. Установка...
    pip install django
) else (
    echo Django уже установлен.
)

echo Проверка наличия Pillow...
python -c "import PIL" >nul 2>&1
if errorlevel 1 (
    echo Pillow не найден. Установка...
    pip install pillow
) else (
    echo Pillow уже установлен.
)

echo Запуск сервера Django...
python manage.py runserver