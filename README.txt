Subbotnik Django App
by Artemkov Anton, Lopaev Kirill

Перед началом работы убедитесь, что на вашем устройстве установлен Python версии 3.11 и выше, pip версии 23.1.2 и выше.

Запуск программы может быть осуществлен 2 способами:

1) В директории проекта StepIntoClean_py лежит файл start.bat, в нем написан скрипт установки модулей Django и Pillow, необходимых для работы приложения, и непосредственно запуск самого сервера. После запуска этого файла, вам необходимо перейти на 127.0.0.1:8000 в браузере. (Возможно понадобится запуск от имени администратора)
В случае, если выдает ошибку "Выполнение сценариев отключено в этой системе" необходимо открыть PowerShell от имени администратора и прописать "Set-ExecutionPolicy Unrestricted -Scope CurrentUser"

2) В случае, если установка модулей через bat-script файл не удается на вашем устройстве необходимо установить Django и Pillow через pip. Выполнить "python manage.py runserver" в директории StepIntoClean_py и перейти на 127.0.0.1:8000 в браузере.
В случае, если выдает ошибку "Выполнение сценариев отключено в этой системе" необходимо открыть PowerShell от имени администратора и прописать "Set-ExecutionPolicy Unrestricted -Scope CurrentUser"

requirements:

python==3.11
pip==23.1.2
Django==5.0.1
Pillow==10.1.0
