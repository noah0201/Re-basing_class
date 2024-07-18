// middle上方外部大盒子
export class HighLine{
  constructor(info=[]){
    this.info=info;
  }
  build=()=>{
    // 外层盒子
    this.dom=document.createElement('div')
    this.dom.classList.add('highline')
    this.info.forEach(item=>{
      this.dom.appendChild(new Description(item.title, item.background, item.img_src).build())
    })
    return this.dom;
  }
  
}

// 下方人物元素信息
class Description{
  constructor(title = '', background = '', img_src = ''){
    // 去除highline中的值
    this.title = title;
    this.background = background;
    this.img_src = img_src;
  }

  build=()=>{
    this.dom=document.createElement('div')
    this.dom.classList.add('description')
    this.dom.style.backgroundImage=`url(${this.background})`
    this.dom.innerHTML=`
      <div class="profile-photo">
        <img src="${this.img_src}" alt="profile photo">
      </div>
      <p>${this.title}</p>
    `
    return this.dom;
  }
}