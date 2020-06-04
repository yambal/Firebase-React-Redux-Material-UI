# Build と デプロイ

  ``yarn host``

# メモ
- ``npx create-react-app [my-app] --typescript``
- ``cd [my-app]``
- ``firebase init``...
    - hosting を build に変更
- ``yarn add npm-run-all --dev``
    - ``yarn build`` と ``firebase deploy --only hosting`` をまとめる
    - ``yarn host``
- ``yarn eject``

## React
- ``yarn add react-redux @types/react-redux redux-thunk``

## react-router-dom
- ``yarn add react-router-dom @types/react-router-dom``
