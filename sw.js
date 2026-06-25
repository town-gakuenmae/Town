// サービスワーカーの基本設定（今回はインストールだけを許可する形です）
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('fetch', function(e) {
  // ここに将来的にオフライン用の処理を書くことができます
});