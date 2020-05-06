<template>
  <div>
    <el-card>
         <div class="articleUser">
            <el-avatar class="el_avatar" :src="circleUrl"></el-avatar>
            <div>
                <p class="articleAuthor">无敌俊朗小螺号</p>
                <p class="articletime">{{ articleForm.created|dateFormat }}</p>
            </div>
        </div>
        <div class="articleContent">
                <h3>{{articleForm.title}}</h3>
                <div v-html="articleForm.content"></div>
        </div>
    
        <div class="browser" >
            <svg class="icon"  aria-hidden="true">
                <use xlink:href="#icon-liulan"></use>
            </svg>
                112    -
            <svg class="icon"  aria-hidden="true">
                <use xlink:href="#icon-pinglun"></use>
            </svg>
                112    -
            <svg class="icon"  aria-hidden="true">
                <use xlink:href="#icon-dianzan"></use>
            </svg>
                112    
        </div>  
    </el-card>
  </div>
</template>

<script>
export default {
    created(){
        this.getarticledetail()
    },
    data () {
        return {
            circleUrl:'../assets/1.jpg',
            articleForm:{
                created:'',
                name:'',
                category:'',
                content:''
            },
        }
    },

    methods: {
        async getarticledetail(){
            const {data:res}=await this.$http.get(`getarticlebyid/${this.$route.query.id}`)
             if(res.status!==200){
               return this.$message.error('获取文章失败')
           }
           this.articleForm.created=res.data.created
            this.articleForm.name=res.data.title
            this.articleForm.category=res.data.category
            this.articleForm.content=res.data.content
        }
    }
}

</script>
<style lang='less' scoped>
</style>
