# Django Project Template for Automation

1. mkdir myproject && cd myproject
2. pipenv --python 3.6.9
3. pipenv install django django-environ
4. pipenv shell
5. (v)django-admin startproject --template https://github.com/wastemobile/django-project-template/archive/master.zip config .
6. touch config/.env
7. add local development environment setting

## .env sample

Have to learn how to write environment file..., study [django-environ](https://github.com/joke2k/django-environ) first.

```
# local development
DEBUG=True
ALLOWED_HOSTS=.localhost,127.0.0.1
SECRET_KEY=6(35(vn$nka-1g@gc-ke3%4&s=&gui-!31$fn2yj(tq3q+*#&7
DATABASE_URL=sqlite:///db.sqlite3
SECURE_PROXY_SSL_HEADER=()
```