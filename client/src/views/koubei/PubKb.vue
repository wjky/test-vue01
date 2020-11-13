<template>
<div>
    <el-card class="box-card">
        <div slot="header">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
                <el-breadcrumb-item>发布口碑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-tiptap v-model="content" :extensions="extensions" />
                </el-form-item>
                <el-form-item label="封面">
                    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" multiple :limit="3" :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="来源">
                    <el-select v-model="form.region" placeholder="请选择口碑来源">
                        <el-option label="学员" value="shanghai"></el-option>
                        <el-option label="朋友" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" size="small">立即创建</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</div>
</template>

<script>
import {
    ElementTiptap,
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Underline,
    Italic,
    Strike,
    ListItem,
    BulletList,
    OrderedList,
    Link,
    Image,
    Blockquote,
    HorizontalRule,
    TextColor,
    TextHighlight,
    Preview,
    Fullscreen
} from 'element-tiptap';
export default {
    components: {
        'el-tiptap': ElementTiptap,
    },
    data() {
        return {
            fileList: [{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            extensions: [
                new Doc(),
                new Text(),
                new Paragraph(),
                new Heading({
                    level: 5
                }),
                new Bold({
                    bubble: true
                }), // render command-button in bubble menu.
                new Underline({
                    bubble: true,
                    menubar: false
                }), // render command-button in bubble menu but not in menubar.
                new Italic(),
                new Strike(),
                new ListItem(),
                new BulletList(),
                new OrderedList(),
                new Link(),
                new Image(),
                new Blockquote(),
                new HorizontalRule(),
                new TextColor(),
                new TextHighlight(),
                new Fullscreen(),
                new Preview(),

            ],
            content: `
        <h1>Heading</h1>
        <p>This Editor is awesome!</p>
      `,
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style scoped>

</style>
