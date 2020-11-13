import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import showArticle from '../views/Article/showArticle.vue';
import createArticle from '../views/Article/createArticle.vue';
import editArticle from '../views/Article/editArticle.vue';
import homeshow from '../views/Article/HomeShow.vue';
import home from '../views/Home.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'

import KbManage from '../views/koubei/KbManage.vue';
import PubKb from '../views/koubei/PubKb.vue';
import sucai from '../views/Sucai/index.vue';
import pinglun from '../views/Pinglun';
import echartsdata from '../views/myecharts/EchartsData.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect:'/home' },
        { path: '/home', name:'home-page',component:home,children:[
            { path: '/show-article', component: showArticle },
            { path: '/create-article', component: createArticle },
            { path: '/edit-article/:id', component: editArticle },
            { path: '', component: homeshow },
            { path: '/kb-manage', component: KbManage },
            { path: '/pub-kb', component: PubKb },
            { path: '/su-cai', component: sucai },
            { path: '/ping-lun', component: pinglun }, 
            { path: '/echarts-data', component: echartsdata }, 
        ]},
        { path: '/login', name:'LoginPage', component: login },
        {path:'/register',component:register},
      
    ]
});

export default router;