<template>
  <div>
       <div class="content">
            <el-card v-for="item in shuoshuolist" :key="item._id">
                <div class="articleUser">
                    <el-avatar class="el_avatar" :src="circleUrl"></el-avatar>
                    <div>
                        <p class="articleAuthor">无敌俊朗小螺号</p>
                        <p class="articletime">{{ item.created|dateFormat }}</p>
                    </div>
                </div>
                <div class="articleContent">
                    <el-card >
                        <p v-html="item.content" @click="gotoShuoshuoDetail(item._id)" class="shuoshuo"></p>
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
        this.getshuoshuolist()
    },
    data () {
        return {
             circleUrl:'../assets/1.jpg',
             //文章列表
            shuoshuolist:[],
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
        //获取文章列表
        async getshuoshuolist(){
            const res=await this.$http.get('/shuosuolist',{params:this.queryinfo})
            if(res.status!==200){
                return this.$message.error('获取说说列表失败')
            }
            this.shuoshuolist=res.data.data
            this.total=res.data.total
        },
        //监听pagesize改变的函数
        handleSizeChange(newsize){
            this.queryinfo.pagesize=newsize
            this.getshuoshuolist()
        },
        //监听pagenum改变的方法
        handleCurrentChange(newpage){
            this.queryinfo.pagenum=newpage
            this.getshuoshuolist()
        },
        //跳转到说说详情页面
        gotoShuoshuoDetail(id){
            this.$router.push({path:'/index/shuoshuoDetail',query:{id}})
        }
    }
}

</script>
<style lang='less' scoped>
.shuoshuo:hover{
    cursor: pointer !important;
    color: #00b5e5;
}
</style>
