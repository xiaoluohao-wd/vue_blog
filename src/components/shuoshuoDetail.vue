<template>
  <div>
     <el-card>
         <div class="articleUser">
            <el-avatar class="el_avatar" :src="circleUrl"></el-avatar>
            <div>
                <p class="articleAuthor">无敌俊朗小螺号</p>
                <p class="articletime">{{ shuoshuo.created|dateFormat }}</p>
            </div>
        </div>
        <div class="articleContent">
                <div v-html="shuoshuo.content"></div>
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
        this.getshuoshuodetail()
    },
    data () {
        return {
            circleUrl:'../assets/1.jpg',
            shuoshuo:{
                created:'',
                content:''
            }
        }
    },

    methods: {
       async  getshuoshuodetail(){
            const  {data:res}=await this.$http.get(`getshuoshuobyid/${this.$route.query.id}`)
            if(res.status!==200){
               return this.$message.error('获取说说失败')
           }
           this.shuoshuo.created=res.data.created
           this.shuoshuo.content=res.data.content
       }
    }
}

</script>
<style lang='less' scoped>
</style>
