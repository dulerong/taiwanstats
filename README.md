# 有關於這個SPA的基本構造
Front-end: Vue, Bootstrap-Vue, Vue-Router, Vuex, axios
Back-end: Lumen
Data storage: MySQL
Testing: JEST

# 大綱
我用了台灣政府開放平台 DATA.GOV.TW 的民國108年新北市生育數據API
根據其API的內容，做了一個以新北市12行政區，生育年齡，胎數及性別的數據統計SPA
 
點選區域，母親年齡，胎數及出生性別後，能觀察實際生育數據
其數據以及個人感想comment可儲存至MySQL，之後可至DATA頁面調閱瀏覽

行政區選項: 可單數或複數選取
母親年齡選項: 可單數或複數選取
胎數選項: 只可單選
性別選項: 只可單選

讀取LOAD DATA: 點選後SPA會至DATA.GOV.TW獲取資料
儲存SAVE DATA: 點選後SPA會至MySQL儲存資料
備考欄: 可輸入當下的感想comment，會隨資料一起儲存

儲存資料可至DATA的連結頁面瀏覽
如要刪除過去儲存資料，可以該筆資料的ID，輸入ID即可刪除

原始 API URL
https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-001414-014

## Getting started

### Install dependencies
composer install
npm install

### configure env file
Make a copy of env.example file and make the following changes

DB_DATABASE=yourDatabaseName
DB_USERNAME=yourDatabaseUserName
DB_PASSWORD=yourDatabasePassword

### Run migration 
php artisan migrate

### Start localhost server
php -S localhost:8000 -t public

### Run NPM watch
npm run watch

### Check website in browser
enter localhost:8000 in address, press enter

### Unit Testing:
npm run test
test file: tests/unit/test.spec.js

## Front-End notes

### Root Webpage: resources/views/app.blade.php
Root webpage, contains div element (id = app), to which the SPA will be mounted into

### Main: resources/mains.js
Entry point: vue + bootstrap + vuex-store + vue-router, all installed in this file
App.vue (the main App file), is also mounted in this entry point

### App: resources/App.vue
The main file that display SPA, contains NavBar (navigation bar) and router-view

### Router: resources/router/router.js
Router component that defines path, name and which component to load
Components: Home, Data, About

### Home: resources/views/Home.vue
Sets filters on location, age, birth order, and gender

### Data: resourecs/views/Data.vue
Shows currently saved records, also allows users to delete data

### About: resources/views/About.vue
Brief informational page, showing where I got the data from

### Components: resources/components
All components of this SPA can be found in this folder

### Vuex Store: resources/store/index.js + modules/store.js
Vuex is initialized and installed in index.js
All vuex states, getters, actions, mutations can be found in store.js

## Back-End notes

### Routes:
Route file: routes/web.php

### Migration:
Migration file: database/migrations/2020_06_30_113334_stats_table.php

### Model:
Model file: app/Stat.php

### Controller:
Controller file: app/Http/Controllers/StatController.php


