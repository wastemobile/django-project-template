# Django Project Template for Automation

## 本地開發設定

1. mkdir myproject && cd myproject
2. pipenv --python 3.6.9 (Ubuntu 18.04 LTS default python version)
3. pipenv install django django-environ
4. pipenv shell
5. (v)django-admin startproject --template https://github.com/wastemobile/django-project-template/archive/master.zip <appname> .
6. cd _proj
7. ./gen_local_env.sh <appname>

> ps. Have to learn how to write environment file..., study [django-environ](https://github.com/joke2k/django-environ) first.

## Reference

```
# local development
DEBUG=True
ALLOWED_HOSTS=.localhost,127.0.0.1
SECRET_KEY=$DJANGO_SECRET_KEY
DATABASE_URL=sqlite:///db.sqlite3
```

```
# production
DEBUG=False
SECRET_KEY=$DJANGO_SECRET_KEY
ALLOWED_HOSTS=.$DOMAINNAME
DATABASE_URL=psql://$APPNAME:$DBPASSWORD@127.0.0.1/$APPNAME
CSRF_COOKIE_SECURE=True
SESSION_COOKIE_SECURE=True
SECURE_PROXY_SSL_HEADER=('HTTP_X_FORWARDED_PROTO', 'https')
```