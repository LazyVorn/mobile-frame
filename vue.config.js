//启动项目时自动打开浏览器的插件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
//打包前自动清空dist目录的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
//端口号
const theDefaultPort = 4396;
module.exports = {
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部，
    // 比如 https://www.my-app.com/
    // 如果你的应用时部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如，如果你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 `/my-app/`
    baseUrl: '/resources/web/5d/',
  
    // 将构建好的文件输出到哪里
    outputDir: '/dist/vueRouteFrame',
  
    // 是否在保存的时候使用 `eslint-loader` 进行检查。
    // 有效的值：`ture` | `false` | `"error"`
    // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: false,
  
    // 使用带有浏览器内编译器的完整构建版本
    // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
    // compiler: false,
  
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          return {
              plugins:[
                new CleanWebpackPlugin(['dist'])
              ]
          }
        } else {
            return {
                plugins:[
                    new OpenBrowserPlugin({ url: 'http://localhost:'+ theDefaultPort +'/resources/web/5d/index.html#/6068355004487797345/VueRouteFrame'})
                ],
            }
          // 为开发环境修改配置...
        }
      },
    // vue-loader 选项
    // 查阅 https://vue-loader.vuejs.org/zh-cn/options.html
    // vueLoader: {},
  
    // 是否为生产环境构建生成 source map？
    productionSourceMap: false,
  
    // CSS 相关选项
    css: {
      // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
      extract: true,
  
      // 是否开启 CSS source map？
      sourceMap: false,
  
      // 为预处理器的 loader 传递自定义选项。比如传递给
      // sass-loader 时，使用 `{ sass: { ... } }`。
      loaderOptions: {},
  
      // 为所有的 CSS 及其预处理文件开启 CSS Modules。
      // 这个选项不会影响 `*.vue` 文件。
      modules: false
    },
  
    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
    // 在多核机器下会默认开启。
    parallel: require('os').cpus().length > 1,
  
    // 是否使用 `autoDLLPlugin` 分割供应的包？
    // 也可以是一个在 DLL 包中引入的依赖的显性的数组。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#dll-模式
    // dll: false,
  
    // PWA 插件的选项。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli-plugin-pwa/README.md
    pwa: {},
  
    // 配置 webpack-dev-server 行为。
    devServer: {
      open: false,
      host: '0.0.0.0',
      port: theDefaultPort,
      https: false,
      hotOnly: false,
      // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
      proxy: {
        "/api": {
            // target: "http://10.129.27.53/index.php/apiManagementPro/Mock/simple/4BsHmNLac10eca951b0be0844ad9ea9dc4413ed495597b2?uri=",
            target:"http://bim5d-pro-test.glodon.com",
            // target:"http://10.1.92.21:8080",
            //target: "http://localhost:8080",
            // target: "http://bim5d-hunan.glodon.com/",
            changeOrigin: true
        }
      }, // string | Object
      before: app => {}
    },
  
    // 三方插件的选项
    pluginOptions: {
      // ...
    }
  }