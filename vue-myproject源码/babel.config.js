//  babel 转换器的 配置文件  处理ES6&ES7语法


module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //vant 按需加载
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
