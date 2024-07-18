
// 函数实现组件化profile
// function create_sidebar(menuItemList = []){
//   menuItemList=menuItemList
//   // 创建元素
//   const siderbar=document.createElement('div')
//   // 添加类名
//   siderbar.classList.add('sidebar')
//   // 编写html
//   menuItemList.forEach(menuItem => {
//     siderbar.appendChild(create_menu(menuItem.name, menuItem.icon_class_list));
//   });


//   // 返回
//   return siderbar
// }

// function create_menu(name = '', icon_class_list = []){
//   const menu=document.createElement('a')
//   menu.classList.add('menu-item')
//   menu.innerHTML=`
//   <span>
//         <i class="${icon_class_list.join(' ')}"></i>
//       </span>
//       <h2>${name}</h2>
//   `
// return menu
// }

// export {
//   create_siderbar
// }


//class实现
// 菜单栏
class Menu{
  constructor(name='',icon_class_list=[]){
    // 写入数据构造
    this.name=name
    this.icon_class_list=icon_class_list
  }

  // 建立 item是built里的循环个体参数
  build=()=>{
    this.item = document.createElement('a');
    this.item.classList.add('menu-item');
    this.item.innerHTML = `
      <span>
        <i class="${this.icon_class_list.join(' ')}"></i>
      </span>
      <h2>${this.name}</h2>
    `
    return this.item
  }

  
}


// 整个left菜单栏
export class Sidebar {
  constructor(menuItemList=[]){
    this.menuItemList=menuItemList;
  }

  build=()=>{
    //dom是节点意思,自己取名方便理解
    this.dom = document.createElement('div');
    this.dom.classList.add('sidebar');
    // 把db里面的siber数据进行一个遍历进入menu中写出
    this.menuItemList.forEach(menuItem=>{
      this.dom.appendChild(new Menu(menuItem.name,menuItem.icon_class_list).build())
    })
    return this.dom;
  }

}