module.exports = {
  printWidth: 180, // 每行代码长度（默认180）
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 使用tab（制表符）缩进而非空格
  semi: false, // 是否在行尾加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 使用单引号代替双引号
  quoteProps: 'as-needed',
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  htmlWhitespaceSensitivity: 'strict', // HTML 文件空格敏感度
  endOfLine: 'auto'
}
