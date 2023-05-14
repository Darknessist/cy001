// 环境配置文件
// 一般在企业里面有三个环境
// 开发环境
// 测试环境
// 线上环境

// 当前环境
const env=import.meta.env.MODE || 'prod'
const EnvConfig={
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/6914c2acf84255a2f3fbf65eb0c2660e/api'
    },
    test:{
        baseApi:'//test.future.com/api',
        mockApi:'https://www.fastmock.site/mock/6914c2acf84255a2f3fbf65eb0c2660e/api'
    },
    pro:{
        baseApi:'//future.com/api',
        mockApi:'https://www.fastmock.site/mock/6914c2acf84255a2f3fbf65eb0c2660e/api'
    }
}
export default{
    env,
    //mock总开关
    mock:true,
    ...EnvConfig[env]
}
