import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"
// 导入img模块，获取我们存在数据块内的图片
import {profile} from './data/db.json'

// 组件
import{
  // navbar下的logo
  navbar_container_logo,
  // 导入navimg模块
  navbar_container_create_img,
  // main
  // 左边栏传统写法
  // left 
  // left_profile_img,
  // left_profile_name,
  // left_profile_at,
  
  // 函数组件化js传统写法
  left,
  left_profile,
  left_sidebar,
  left_create_post,
  // 中间middle组件
  middle,
  middle_highline,
  middle_card_list,

  // right组件
  right,
  right_message,
  right_friend_list,
  right_request_list

}from "@/js/common"

/* NAV */
navbar_container_logo.textContent="ALLEN WEBSITE"
navbar_container_create_img.src=profile.img_src

/* LEFT */
// 传统写法
// left_profile_img.src=profile.img_src
// left_profile_name.textContent=profile.name
// left_profile_at.textContent=profile.at

//函数写法 利用appendChild追加
left.appendChild(left_profile)
left.appendChild(left_sidebar)
left.appendChild(left_create_post)




/* MIDDLE */
middle.appendChild(middle_highline)
middle.appendChild(middle_card_list)
/* FORM */

/* HIGHLINE */

/* CARD */

/* Message */

/* Request */


right.appendChild(right_message)
right_message.appendChild(right_friend_list)
right.appendChild(right_request_list)