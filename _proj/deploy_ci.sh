#!/bin/bash
#
# https://github.com/wastemobile/deploy-django.git
#
source ./bin/activate
cd $APPNAME
git pull
pip install -r requirements.txt
python manage.py migrate
deactivate
sudo /bin/systemctl restart $APPNAME