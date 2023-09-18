<div align="center">

# Wordpress x micro-cms 検証

</div>

## 開発者情報

### 🏗️環境

- Frontend
  - Node.js v19
  - Next.js(React.js Framework)
- Backend
  - Worpress
- docker

### コマンド

#### 初期化
```bash
yarn install
```

#### 開発モードで起動
```bash
yarn dev
```
- client: [http://localhost:3000]で表示
- wordpress: [http://localhost:8000/wp-admin]で表示
  - ユーザ名: user
  - パスワード: pass

#### コンテナアクセス

- wordpress

```bash
yarn bash-wp
```

- db

```bash
yarn bash-db
# -> passwordには「pass」を入力
```

#### 製品モードでビルド
```build
yarn build
```

