<template>
<el-container style="height: 100vh">
    <el-header>
        <el-row>
            <el-col :span="6">
                <img src=".././assets/新闻.png" alt="" width="45" class="pt-2" />
                <i></i>
            </el-col>
            <el-col :span="12" class="font-weight-bold text-center font-20">
                新闻系统管理
            </el-col>
            <el-col :span="6" class="text-right">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar class="align-middle mr-2" size="medium" :src="avatar">
                        </el-avatar>
                        <span>{{ loginName }}</span>
                        <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><span @click="logout">退出</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </el-header>

    <el-container style="height: 500px;">
        <el-aside width="230px" style="background-color: rgb(238, 241, 246)">
            <el-menu unique-opened router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:100%" :default-active="$route.path">
                <el-menu-item index="/home">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>

                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-tickets"></i>新闻中心</template>
                    <el-menu-item index="/show-article">新闻列表</el-menu-item>
                    <el-menu-item index="/create-article">创建新闻</el-menu-item>
                </el-submenu>

                <el-menu-item index="/kb-manage">
                    <i class="el-icon-menu"></i>
                    <span slot="title">口碑管理</span>
                </el-menu-item>
                <el-menu-item index="/pub-kb">
                    <i class="el-icon-document"></i>
                    <span slot="title">发布口碑</span>
                </el-menu-item>
                <el-menu-item index="/su-cai">
                    <i class="el-icon-picture-outline"></i>
                    <span slot="title">素材管理</span>
                </el-menu-item>
                <el-menu-item index="/ping-lun">
                    <i class="el-icon-s-comment"></i>
                    <span slot="title">评论管理</span>
                </el-menu-item>
                <el-menu-item index="/echarts-data">
                    <i class="el-icon-s-data"></i>
                    <span slot="title">评论统计</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>

        <el-container>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
    <el-footer style="background-color: #eee; color: gray" class="d-flex justify-content-center align-items-center">版权所有 &copy; 中博科技</el-footer>
</el-container>
</template>

<style>
body {
    margin: 0;
    padding: 0;
}

.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>

<script>
export default {
    data() {
        return {
            loginName: "",
            avatar: "",
        };
    },

    created() {
        //验证token的
        if (!localStorage.getItem("mytoken")) {
            this.$router.push("/login");
        }
        this.axios.get("/home").then((res) => {
            if (res.data.code == "999") {
                this.$router.push("/login");
            } else {
                this.loginName = res.data.user_name;
                this.avatar = res.data.avatar;
            }
        });
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$message.success("退出成功！");
            this.$router.push({
                name: "LoginPage",
            });
        },
    },
    mounted() {
        document.body.style.backgroundColor = "#fff";
    },
};
</script>
