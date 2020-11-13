<template>
<el-form ref="form" :model="editarticleData" label-width="80px">
    <el-form-item label="文章标题">
        <el-input v-model="editarticleData.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
        <el-input type="textarea" v-model="editarticleData.content" autosize></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
    </el-form-item>
</el-form>
</template>

<script>
export default {
    data() {
        return {
            editarticleData: {
                id: '',
                title: '',
                content: ''
            }
        }
    },
    mounted() {
        this.axios.get('/search-artiacle', {
                params: {
                    id: this.$route.params.id
                }
            })
            .then(res => {
                this.editarticleData = res.data.listData[0];
            });
    },
    methods: {
        onSubmit() {
            this.axios.post('/update-dz', this.editarticleData)
                .then(res => {
                    if (res.data.code == 0) {
                        console.log(res.data.msg);
                        this.$router.push('/show-article')
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },

}
</script>
