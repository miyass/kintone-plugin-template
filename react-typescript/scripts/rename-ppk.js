const fs = require('fs');

fs.readdir('dist', function(err, files){
  if (err) throw err;
  files.forEach(file => {
    if (file.indexOf(".ppk") !== -1) {
      fs.rename(`dist/${file}`, 'dist/private.ppk', err => {
        if (err) throw err;
        console.log('ppkファイルをprivate.ppkに変更しました！');
      });
    }
  });
  console.log('プラグイン開発の準備が整いました！');
});