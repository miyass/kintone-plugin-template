const fs = require("fs");

fs.readdir("dist", (err, files) => {
  if (err) throw err;
  files.forEach((file) => {
    if (file.indexOf(".ppk") !== -1) {
      fs.rename(`dist/${file}`, "dist/private.ppk", (error) => {
        if (error) throw error;
        console.log("ppkファイルをprivate.ppkに変更しました！");
      });
    }
  });
  console.log("プラグイン開発の準備が整いました！");
});
