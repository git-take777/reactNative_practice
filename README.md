<h3>UI について</h3>
- View や TEXT などのタグを書いて実装する
  - Stle を直接書く
  - style={{ height: 100,
          width: "100%",
          backgroundColor: "red",
      }}
  - 書くこともできるが、実際は変数にまとめた方が再現性もあり、より良い。
  - ※flexDirection: "row"→ flex のように横並び可能

- source フォルダにある画像を表示する場合

  - source={require('./my-icon.png')}

  - Web 上にある画像を URL で指定する場合;
    source={{uri: 'asset:/app_icon.png'}}
