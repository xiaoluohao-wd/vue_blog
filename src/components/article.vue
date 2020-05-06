<template>
  <div>
    <div class="content">
            <el-card v-for="item in article" :key="item._id">
                <div class="articleUser">
                    <el-avatar class="el_avatar" :src="circleUrl"></el-avatar>
                    <div>
                        <p class="articleAuthor">无敌俊朗小螺号</p>
                        <p class="articletime">{{ item.created|dateFormat }}</p>
                    </div>
                </div>
                <div class="articleContent">
                    <el-card >
                        <h3 class="articleName" @click="gotoArticleDetail(item._id)">{{item.title}}</h3>
                        <div v-html="item.content"></div>
                    </el-card>
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
    <!-- 分页区 -->
    <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="queryinfo.pagenum"
            :page-sizes="[1, 2, 3, 5 , 10, 15, 20]"
            :page-size="queryinfo.pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total" background>
    </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
    created(){
        this.getarticlelist()
    },
    data () {
        return {
           circleUrl:'../assets/1.jpg',
          article:[],
           //文章的数目
            total:0,
            //查询参数对象
            queryinfo:{
            query:'',
            pagenum:1,
            pagesize:3
            },
        }
        
    },

    methods: {
        async getarticlelist(){
            const res=await this.$http.get('articlelist',{params:this.queryinfo})
            console.log(res)
            if(res.status!==200){
                return this.$message.error('获取文章列表失败')
            }
            this.article=res.data.data
            this.total=res.data.total
        },
        gotoArticleDetail(id){
            this.$router.push({path:'/index/articleDetail',query:{id}})
        },
        //监听pagesize改变的函数
        handleSizeChange(newsize){
            this.queryinfo.pagesize=newsize
            this.getarticlelist()
        },
        //监听pagenum改变的方法
        handleCurrentChange(newpage){
            this.queryinfo.pagenum=newpage
            this.getarticlelist()
        },

    }
}

</script>
<style lang='less' scoped>
.articleUser{
    width: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .articletime{
        font-size: 12px;
        color:#99a2aa;
    }
    .articleAuthor:hover{
        color: #00b5e5;
        cursor: pointer;
    }
    .articletime:hover{
        color: #ff85ad;
    }
}
.browser{
    margin-top: 20px;
}
.articleName:hover{
     color: #00b5e5;
        cursor: pointer;
}
</style>
