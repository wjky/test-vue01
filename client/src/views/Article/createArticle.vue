<template>
<el-form ref="form" :model="articleData" label-width="80px">
    <el-form-item label="文章标题">
        <el-input v-model="articleData.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
        <el-input type="textarea" v-model="articleData.content"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            articleData: {
                title: '',
                content: ""
            }
        }
    },
    methods: {
        onSubmit() {
            console.log(this.articleData);
            if (this.articleData.title == '' || this.articleData.content == '') {
                return console.log('标题或内容不能为空');
            } else {
                this.axios.post('/create-article', this.articleData)
                    .then(res => {
                        if (res.data.code == 0) {
                            this.$router.push('/show-article')
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }

        }
    }
}
</script>
