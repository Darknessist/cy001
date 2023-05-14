//对整个项目api的管理,总开关
import request from "./request"
export default{
 //home 组件左侧标个数据获取
 getTableData(params){
    return request({
        url:'/home/getTableData',
        method:'get',
        data:params,
        mock:true, 
    })
 },
 getCountData(){
    return request({
        url:'/home/getCountData',
        method:'get',
        mock:true
    })
 },
 getChartData(){
    return request({
        url:'/home/getChartData',
        method:'get',
        mock:true
    })
 },
 getUserData(params){
     return request({
        url:'user/getUser',
        method:'get',
        //这个mock如果是true他用的就是线上地址
        mock:false,
        data:params,
        
     })
 },
 addUser(params){
    return request({
        url:'user/add',
        method:'post',
        //这个mock如果是true他用的就是线上地址
        mock:false,
        data:params,
        
     })
 },
 editUser(params){
    return request({
        url:'user/edit',
        method:'post',
        //这个mock如果是true他用的就是线上地址
        mock:false,
        data:params,
        
     })
 },
 deleteUser(params){
    return request({
        url:'user/delete',
        method:'get',
        //这个mock如果是true他用的就是线上地址
        mock:false,
        data:params,
    })
 },
 //根据用户名不同，返回不一样 的菜单
 getMenu(params){
    return request({
        url:'/permission/getMenu',
        method:'post',
        //这个mock如果是true他用的就是线上地址
        mock:false,
        data:params,
    })
 }
}