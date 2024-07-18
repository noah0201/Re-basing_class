export class CardList{
  constructor(cards=[]){
    this.cards=cards
  }
  build=()=>{
    this.dom=document.createElement('div')
    this.dom.classList.add('card')
    this.cards.forEach(item=>{
      // 单份数据
      // const card=new Card(info).build()
      this.dom.appendChild(new Card(item).build())
    })
    return this.dom
  }
}

// 单个card模块
class Card{
  constructor(card={}){
    this.card=card
  }

  // 单个card模块中的元素
  build=()=>{
    const dom=document.createElement('div')
    dom.classList.add('info')
    dom.appendChild(new InfoProfile(this.card.profile).build())
    dom.appendChild(new InfoPicture(this.card.picture).build())
    dom.appendChild(new InfoControl(this.card.control).build())
    dom.appendChild(new InfoComment(this.card.comment).build())
    return dom
  }
}

// 头部用户信息模块
class InfoProfile{
  constructor(info){
    this.info=info
  }

  build=()=>{
    const dom=document.createElement('div')
    dom.classList.add('info-profile')
    dom.innerHTML=`
      <div class="profile">
        <div class="profile-photo">
          <img alt="profile photo" src="${this.info.src}">
        </div>
        <div class="profile-description">
          <h2>${this.info.name}</h2>
          <p>${this.info.position}, ${this.info.time}</p>
        </div>
      </div>
      <!-- profile右边拓展模块 -->
      <i class="uil uil-ellipsis-h"></i>
    `
    return dom
  }
}

// 分享图片模块（这里是前端实现）
class InfoPicture {

  constructor(info) {
    this.info = info
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-picture')
    dom.innerHTML = `
      <img width="100%" src="${this.info.img_src}">
    `
    return dom
  }
}

// 控制模块，点赞那部分
class InfoControl{
  constructor(info) {
    this.info = info
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-control')
    dom.innerHTML = `
      <!--左边控制块 -->
      <div class="main-control">
        <i class="uil uil-heart control_heart"></i>
        <i class="uil uil-comment-dots"></i>
        <i class="uil uil-share-alt"></i>
      </div>
      <!--右边控制块 -->
      <i class="uil uil-bookmark"></i>
    `
    return dom
  }

}



class InfoComment {
  
  constructor(info) {
    this.info = info
    this.dom_profile_photo_list = null
    this.dom_comment_info = null
    this.dom_view_btn = null
  }

  build = () => {
    const dom = document.createElement('div')
    dom.classList.add('info-comment')
    this.createProfilePhotoList()
    this.createCommentInfo()
    this.createViewBtn()
    dom.appendChild(this.dom_profile_photo_list)
    dom.appendChild(this.dom_comment_info)
    dom.appendChild(this.dom_view_btn)
    return dom
  }

  createProfilePhotoList = () => {
    this.dom_profile_photo_list = document.createElement('div')
    this.dom_profile_photo_list.classList.add('profile-photo-list')
    this.createImgList(this.dom_profile_photo_list, this.info.img_src_list)
    this.createLikeInfo(this.dom_profile_photo_list, this.info.first_people_name, this.info.like_peoples_number)

  }

  createImgList = (father, img_src_list) => {
    img_src_list.forEach(img_src => {
      const img = document.createElement('img')
      img.classList.add('profile-photo')
      img.src = img_src
      father.appendChild(img)
    })
  }

  createLikeInfo = (father, first_people_name, like_peoples_number) => {
    const dom = document.createElement('span')
    dom.classList.add('like-info')
    dom.textContent = `Liked by ${first_people_name} and ${like_peoples_number} others`
    father.appendChild(dom)
  }

  createCommentInfo = () => {
    this.dom_comment_info = document.createElement('span')
    this.dom_comment_info.classList.add('comment-info')
    this.dom_comment_info.textContent = this.info.comment_info
  }

  createViewBtn = () => {
    this.dom_view_btn = document.createElement('span')
    this.dom_view_btn.classList.add('view-btn')
    this.dom_view_btn.textContent = `View all ${this.info.view_number} comments`
  }
}