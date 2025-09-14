# To-Doリスト (TypeScript + React + Storybook)

React 18とTypeScript、Atomic Designパターンで構築されたタスク管理アプリケーションです。

## デモプレイ
https://yunbow.github.io/app-todo/demo/

## 主要機能

### タスク管理
- タスクの追加・編集・削除
- タスクの完了/未完了の切り替え
- タスクの永続化（localStorage）
- 作成日時順での並び替え

### フィルタリング
- **すべて**: 全タスクを表示
- **アクティブ**: 未完了タスクのみ表示
- **完了済み**: 完了タスクのみ表示

### 操作方法
- **Enterキー**: 新しいタスクを追加
- **チェックボックス**: タスクの完了状態を切り替え
- **削除ボタン**: タスクを削除
- **フィルタボタン**: 表示するタスクを絞り込み
- **完了済みをクリア**: 完了済みタスクを一括削除

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── components/
│   ├── atoms/          # 基本コンポーネント
│   │   ├── Button/     # ボタンコンポーネント
│   │   ├── Input/      # 入力フィールド
│   │   └── Checkbox/   # チェックボックス
│   ├── molecules/      # 機能単位コンポーネント
│   │   ├── TaskForm/   # タスク入力フォーム
│   │   ├── FilterButtons/ # フィルタボタン群
│   │   ├── TaskItem/   # 個別タスク項目
│   │   └── TaskCounter/ # タスクカウンター
│   └── organisms/      # 画面領域コンポーネント
│       └── TodoApp/    # アプリケーション全体
├── stories/            # Storybook用ストーリー
├── types/              # TypeScript型定義
├── hooks/              # カスタムフック
├── App.tsx             # メインアプリ
└── main.tsx            # エントリーポイント
```

## Atomic Design構成

### Atoms（基本コンポーネント）
- `Button` - 操作ボタン
- `Input` - テキスト入力
- `Checkbox` - チェックボックス

### Molecules（機能単位）
- `TaskForm` - タスク入力フォーム
- `FilterButtons` - フィルタボタン群
- `TaskItem` - 個別タスク項目
- `TaskCounter` - タスクカウンター

### Organisms（画面領域）
- `TodoApp` - アプリケーション全体

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License