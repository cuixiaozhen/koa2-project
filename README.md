# koa2-project

koa2-project项目目录结构

client  —— 前端代码
    static    —— 存放前端代码与静态文件等
        css    —— 样式代码
        img    —— 图片文件
        js     —— 逻辑代码
            store    —— 存放组件与后端交互逻辑，如接口调用等
            view     —— 存放所以组件
    view      —— html文件
        index.html    —— 主页
        
server    ——后端代码，包括与数据库的交互和接口封装等
    code    —— 各模块的错误码文件
    config  —— 配置文件
    controller    —— 控制层
    routes    —— 路由文件
    service   —— 与后端数据交互
    utils    —— 工具包
    
app.js 入口文件
