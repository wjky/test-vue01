<template>
<div>
    <h1 class="mylogo">
        <router-link to="/home"><img src=".././assets/新闻.png" alt="" width="100px" /></router-link>
    </h1>
    <div class="box">
        <h2>
            <router-link to="/login" class="text-secondary">登录</router-link>
            <span class="text-dark">·</span>
            <router-link to="/register" class="text-secondary">注册</router-link>
        </h2>

        <el-form :model="formData" ref="loginForm" label-width="0px">
            <el-form-item prop="logUsername">
                <el-input v-model="formData.logUsername" placeholder="用户名">
                    <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
                </el-input>
            </el-form-item>
            <el-form-item prop="logPassword">
                <el-input type="password" v-model="formData.logPassword" placeholder="密码">
                    <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmitForm('loginForm')" class="myw" :loading="isLoading">立即登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            formData: {
                logUsername: "",
                logPassword: "",
            },
            rules: {
                // rules里的username和el-form-item的prop值必须一致，而prop值必须和formdata里的username一致
                logUsername: [{
                    required: true,
                    message: "请输入用户名",
                    trigger: "blur"
                }, ],
                logPassword: [{
                    required: true,
                    message: "请输入密码",
                    trigger: "blur"
                }, ],
            },
        };
    },
    methods: {
        onSubmitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.isLoading = true;
                    console.log("submit!");
                    this.axios
                        .post("/login", this.formData)
                        .then((res) => {
                            console.log(res.data);
                            if (res.data.code == 1) {
                                this.$message({
                                    showClose: true,
                                    message: res.data.message,
                                    type: "warning",
                                });
                                return;
                            }
                            if (res.data.code == 2) {
                                this.$message({
                                    showClose: true,
                                    message: res.data.message,
                                    type: "warning",
                                });
                                return;
                            }
                            if (res.data.code == 3) {
                                this.$message({
                                    showClose: true,
                                    message: res.data.message,
                                    type: "warning",
                                });
                                return;
                            }

                            if (res.data.code == 0) {
                                this.isLoading = false;
                                // 存储token
                                localStorage.setItem('mytoken', res.data.token)
                                // elementui消息提示
                                this.$message({
                                    message: res.data.message,
                                    type: "success",
                                });
                                this.$router.push("/home");
                            }
                        })
                        .catch((err) => {
                            console.log('有错误2：');
                            console.error(err);
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
    mounted() {
        document.body.style.backgroundColor = "#eee";
    },
};
</script>

<style scoped>
.mylogo {
    position: absolute;
    top: 50px;
    left: 50px;
}

.box {
    width: 350px;
    padding: 30px 40px 40px 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px #ddd;
    margin: 100px auto 0;
    background-color: #fff;
}

.box h2 {
    margin: 20px 0 40px 0;
    font-size: 20px;
    text-align: center;
}

.box h2 a {
    margin: 0 10px;
    text-decoration: none;
}

.myw {
    width: 100%;
}

.box h2 a.router-link-active {
    color: orangered !important;
    text-decoration: underline;
}

h1 {
    color: red;
}
</style>
