# Django Project Template for Automation

## 本地開發設定（整合 webpack loader）

1. mkdir myproject && cd myproject
2. pipenv --python 3.6.9 (Ubuntu 18.04 LTS default python version)
3. pipenv install django django-environ
4. pipenv shell
5. (v)django-admin startproject --template https://github.com/wastemobile/django-project-template/archive/master.zip `<appname>` .
6. (v)cd _proj
7. (v)./gen_local_env.sh `<appname>` 自動生成本地環境的 `.env`
8. (v)cd ..
9. (v)npm install `安裝 webpack 流程工具以及 bulma 前端設計框架`
10. (v)npm run build `產生本地使用的前端樣式`
11. (v)npm run deploy `產生正式環境使用的前端樣式（簡化並壓縮）`
12. (v)python manage.py runserver

> I always set `<appname>` to `config`.

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