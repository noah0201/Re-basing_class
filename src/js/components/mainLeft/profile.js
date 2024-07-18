
// 函数实现组件化profile
// function create_profile(img_url,name,info){
//   // 创建a元素
//   const profile=document.createElement('a')
//   // 添加类名
//   profile.classList.add('profile')
//   // 编写html
//   profile.innerHTML=`
//       <div class="profile-photo">
//         <img src="${img_url}" alt="profile photo">
//       </div>
//       <!-- 身份信息 -->
//       <div class="profile-description">
//         <h2>${name}</h2>
//         <p>${info}</p>
//       </div>
//   `

//   // 返回
//   return profile
// }

// export {
//   create_profile
// }

// class实现
export class Profile {
  static list = []
  constructor(img_url, name, info) {
    this.img_url = img_url
    this.name = name
    this.info = info
    this.build()
  }

  build = () => {
    const profile = document.createElement('a')
    profile.classList.add('profile')

    profile.innerHTML = `
      <div class="profile-photo">
        <img alt="profile photo" src="${this.img_url}">
      </div>
      <div class="profile-description">
        <h2>${this.name}</h2>
        <p>${this.info}</p>
      </div>
    `
    Profile.list.push(profile)
    this.dom = profile
    return profile
  }
}