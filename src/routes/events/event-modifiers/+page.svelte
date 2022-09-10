<script>
  function handleClick() {
    alert('clicked')
  }
</script>

<button on:click|once={handleClick}>
  Click me
</button>


memo<br>
preventDefault — ハンドラを実行する前に event.preventDefault() を呼び出します。たとえば、クライアントのフォーム処理に役立ちます。<br>
stopPropagation — 次の要素にイベントが伝播しないように event.stopPropagation() を呼び出します。<br>
passive — タッチ/ホイールイベントでスクロールのパフォーマンスを向上させます（Svelte が安全な場所に自動的に追加します）。<br>
nonpassive — passive: false を明示的に設定します。<br>
capture — バブリング フェーズではなく、キャプチャ フェーズ中にハンドラを起動します。(MDN docs)<br>
once — ハンドラを最初に実行した後に削除します。<br>
self — 設定した要素が event.target の場合にのみ、ハンドラをトリガします。<br>
trusted — event.isTrusted が true の場合にのみハンドラをトリガします。つまり、ユーザーのアクションによってイベントがトリガされた場合です。<br>
