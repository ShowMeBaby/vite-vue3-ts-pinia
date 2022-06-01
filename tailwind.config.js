module.exports = {
  // 所有工具类前缀, 一般在项目开始前定好, 后续改动需全局搜索替换
  prefix: '',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        xy: 'width, height',
        height: 'height',
        width: 'width',
        spacing: 'margin, padding'
      },
      colors: {
        bgcolor: '#edf2f5'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
