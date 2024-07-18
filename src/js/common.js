// 导入组件函数
import {  Profile } from "@/js/components/mainLeft/profile.js";
// import { create_siderbar} from "@/js/components/sidebar";
import { Sidebar } from "@/js/components/mainLeft/sidebar.js";
import { create_post } from "@/js/components/mainLeft/createPost.js";
// middle中的模块
import { HighLine } from "@/js/components/mainMiddle/highline.js";
import { CardList } from "@/js/components/mainMiddle/cardList.js";
// main-right模块
import { create_message } from "./components/mainRight/message.js";
import { FriendList } from "./components/mainRight/friendList.js";
import { RequestList } from "./components/mainRight/requestList.js";

// 引入db数据
import { profile,sidebar,highline, message, request,cards } from "/data/db.json";

/* NavBar */
export const navbar=document.querySelector('nav');
export const navbar_container=navbar.querySelector('.container')
export const navbar_container_logo=navbar_container.querySelector('.logo')

export const navbar_searchBar=navbar_container_logo.querySelector('.search-bar');
export const navbar_container_create=navbar_container.querySelector('.create')
export const navbar_container_create_img=navbar_container.querySelector('img')

/* Main */
export const main=document.querySelector('main')
export const main_container=main.querySelector('.container')

/* Main Left */
export const left=main_container.querySelector('.main-left')
// export const left_profile=left.querySelector('.profile')
// export const left_profile_img=left.querySelector('img')
// export const left_profile_name=left.querySelector('h2')
// export const left_profile_at=left.querySelector('p')
// export const left_profile= create_profile(profile.img_src, profile.name, profile.at);

// 函数写法
// export const left_sidebar= create_siderbar(sidebar);

// class sidebar写法
export const left_sidebar = new Sidebar(sidebar).build();
export const left_profile = new Profile(profile.img_src, profile.name, profile.at).build()
export const left_create_post = create_post()



/* Main Middle */
export const middle = main_container.querySelector('.main-middle')
export const middle_highline = new HighLine(highline).build()
export const middle_card_list = new CardList(cards).build()


/* Create News */


/* Create Profile */


/* Create Picture */


/* Create Control */


/* Create Comment */


/* Main Right */

export const right = main_container.querySelector('.main-right')
export const right_message = create_message()
export const right_friend_list = new FriendList(message).build()
export const right_request_list = new RequestList(request).build()