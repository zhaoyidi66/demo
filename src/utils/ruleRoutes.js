//功能：前后台的路由对比  找到符合规则的路由信息
//参数 webRoutes：前端定义的路由数组  serverRoutes后台返回的动态路由数组

export function ruleRoutes(webRoutes,serverRoutes){
    //对比 定义符合规则的数据
    let menuList = []
    webRoutes.forEach(item => {
        serverRoutes.forEach(ele=>{
            if(item.meta.name === ele.name){
                if(ele.children && ele.children.length>0){
                    item.children = ruleRoutes(item.children,ele.children)
                }
                menuList.push(item)
            }
        })
    });
    return menuList
}

