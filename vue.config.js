module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "template",
        appId: "my.app.vt.watanuki.template",
        win: {
          icon: 'src/assets/app.ico',
          target: [
            {
              target: 'zip',
              arch: ['x64']
            }
          ]
        }
      }
    }
  }
}