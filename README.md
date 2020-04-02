# Django Project Template for Automation

## 本地開發設定（整合 webpack loader）

1. mkdir myproject && cd myproject
2. pipenv --python 3.6.9 (Ubuntu 18.04 LTS default python version)
3. pipenv install django django-environ django-webpack-loader (or pipenv install -r requirements.txt)
4. pipenv shell
5. (v)django-admin startproject --template https://github.com/wastemobile/django-project-template/archive/master.zip config .
6. (v)cd _proj
7. (v)./gen_local_env.sh config 自動生成本地環境的 `.env`
8. (v)cd ..
9. (v)npm install `安裝 webpack 流程工具以及 bulma 前端設計框架`
10. (v)npm run build `產生本地使用的前端樣式`
11. (v)npm run deploy `產生正式環境使用的前端樣式（簡化並壓縮）`
12. (v)python manage.py migrate
13. (v)python manage.py createsuperuser
12. (v)python manage.py runserver

## Apr 2, 2020 note

- Django 的多環境設置使用 django-environ，也就是讀取 config 目錄下的 `.env`
- 使用 Webpack 處理前端框架與樣式，Django 安裝 django-webpack-loader，讀取每次修改後產生的唯一識別樣式檔（與 JS）。
- 建立 users app 並使用 CustomUser model
- 建立 pages app，除了擺放網站一般的靜態頁面外，也將 webpack 需要讀取的設置、樣式導入等擺在其中；要更單純或許是使用名為 `theme` 的無實際用途應用，但目前先整合在 pages 應用中。

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

> ps. Have to learn how to write environment file..., study [django-environ](https://github.com/joke2k/django-environ) first.