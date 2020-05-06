<template>
    <el-container class="el_container">
       <!-- 头部区域 -->
        <el-header  class="el_header">
            <div class="logo">
            <a href="" >远方 远方</a>
            </div>
            <ul class="menu">
            <li><a href="">首页</a></li>
            <li><a href="">归档</a></li>
            <li><a href="">友情链接</a></li>
            <li><a href="">主题</a></li>
            <li><a href="">关于我</a></li>
            </ul>
            <a href="">
            <span class="iconfont icon-ziyuan"></span>
            </a>
        </el-header>
        <!-- 主体内容区域 -->
        <el-container class="el_body">
            <!-- 左侧侧边栏 -->
            <el-aside class="el_aside">
                  <!-- 用户头像区域 -->
                <div class="user">
                    <div class="avatar">
                        <img src="../assets/1.jpg" alt="">
                    </div>
                    <p class="username">@小螺号</p>
                    <div class="article">
                        <ul>
                        <li>
                            <p>文章</p>
                            <p>{{userinfo.articleNum}}</p>
                        </li>
                        <li>
                            <p>说说</p>
                            <p>{{userinfo.articleNum}}</p>
                        </li>
                        <li>
                            <p>评论</p>
                            <p>{{userinfo.commentsNum}}</p>
                        </li>
                        </ul>
                    </div>
                </div>
                 <!-- 用户账户信息区域 -->
                <div class="userinfo">
                    <span class="row">
                          <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-youxiang"></use>
                        </svg>
                        {{useraccount.email}}
                    </span>
                    <el-divider class="el_divider"></el-divider>
                    <div class="row">
                        <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-QQ"></use>
                    </svg>
                     {{useraccount.qq}}
                    </div>
                    <el-divider class="el_divider"></el-divider>
                    <div class="row">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weibo"></use>
                        </svg>
                         {{useraccount.weibo}}
                    </div>
                    <el-divider class="el_divider"></el-divider>
                    <div class="row">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-GitHub"></use>
                        </svg> 
                         {{useraccount.github}}
                    </div>
                    <el-divider class="el_divider"></el-divider>
                    <p>{{useraccount.signature}}</p>
                </div>
                <!-- 网站搭建时间记录 -->
                <div class="usertime">
                    <div class="myavatar">
                        <img src="../assets/1.jpg" alt="">
                    </div>
                    <span class="date">
                        {{userdate.year}} 年 {{userdate.month}} 月 {{userdate.day}} 天 {{userdate.hour}} 时 {{userdate.min}} 分 {{usertime}} 
                    </span>
                </div>
                <!-- 用户最近评论 -->
                <div class="nearlycomments" >

                    <div class="title">
                        <svg class="icon" aria-hidden="true" font-size="18px">
                            <use xlink:href="#icon-pinglun"></use>
                        </svg>
                        最近评论:
                    </div>
                    <div class="comments" v-for="item in 2" :key="item">
                        <div>
                        <el-avatar class="el_avatar" size="small" :src="circleUrl"></el-avatar>
                        </div>
                        <div>
                            {{comments.CommentsAuthorName}}于{{comments.CommentsDate}}前在{{comments.articleName}}中说:{{comments.commentsContent}}
                            <el-divider></el-divider>
                        </div>
                    </div>
                </div>
            </el-aside>
            <!-- 中间区域内容 -->
            <el-main class="el_main">
                <div class="MainMenu">
                    <el-menu class="el-menu-demo" mode="horizontal" >
                        <el-menu-item index="1" @click="showarticle">文章</el-menu-item>
                        <el-menu-item index="3"  @click="showshuoshuo">说说</el-menu-item>
                        <el-menu-item index="4">其他</el-menu-item>
                    </el-menu>
                </div>
                <router-view></router-view>
            </el-main>
            <!-- 右侧侧边栏 -->
            <el-aside class="el_aside">
                <!-- 喜欢的一段话 -->
                <div class="assey">
                    <p>楼道角落里阳光每天盛开</p>
                    <p>你很久前也在</p>
                    <p>很久前的花肥肥地开在窗外</p>
                    <p>你很久前也毛茸茸地在窗里开</p>
                    <p>它们为什么能长盛不衰</p>
                    <p> 我们为什么屡战屡败</p>
                    <p>——冯唐《记梦》</p>
                </div>
                <!-- 喜欢的一首歌 -->
                <div class="music">
                    <img src="../assets/2.png" alt="">
                    <span>大人中 -卢广仲</span>
                    <audio src="http://mp3.jiuku.9ku.com/mp3/599/598446.mp3" controls ></audio>
                </div>
                <!-- 文章分类 -->
                <div class="tags">
                    <div>
                        <svg class="icon"  aria-hidden="true">
                            <use xlink:href="#icon-biaoqian"></use>
                        </svg>
                        标签云
                    </div>
                    <el-tag>html</el-tag>
                    <el-tag>css</el-tag>
                    <el-tag>javascript</el-tag>
                    <el-tag>webpack</el-tag>
                    <el-tag>node</el-tag>
                    <el-tag>Vue</el-tag>
                </div>
                <!-- 广告 -->
                <div class="adverts">
                    <p>广告</p>
                    <img src="https://shawnzeng.com/wp-content/uploads/2019/01/ad800x400.jpg" alt="">
                </div>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
export default {
    created(){
        this.getUserTime()
    },
    data () {
        return {
            userinfo: {
                articleNum: 123,
                aeticle1Num: 1234,
                commentsNum: 10
            },
            useraccount:{
                email:'836419102@qq.com',
                qq: '836419102',
                weibo:'小螺号',
                github:'xiaoluohao-wd',
                signature:'人活在这个世界上,一定要善良'
            },
            usertime:0,
            userdate:{
                year:0,
                month:0,
                day:0,
                hour:0,
                min:59
            },
            circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            comments:{
                CommentsAuthorName:'xiaoluohao',
                CommentsDate:'4周',
                articleName:'Vue组件',
                commentsContent:'真棒'
            },
            autoplay:true
        }
    },
    methods: {
        getUserTime(){
            const interval= setInterval(function(){
                this.usertime++
                if(this.usertime>=60){
                    this.usertime=0;
                    this.userdate.min++
                    if( this.userdate.min>=60){
                        this.userdate.min=0
                        this.userdate.hour++
                        if(this.userdate.hour>=24){
                            this.userdate.hour=0
                            this.userdate.day++
                            if(this.userdate.day>=30){
                                this.userdate.day=0
                                this.userdate.month++
                                if(this.userdate.month>=12){
                                    this.userdate.month=0
                                    this.userdate.year++
                                }
                            }
                            
                        }
                    }
                }
            }.bind(this),1000)
        },
        showarticle(){
            this.$router.push('/index/article')
        },
        showshuoshuo(){
            this.$router.push('/index/shuoshuo')
        }

    }
}

</script>
<style lang='less' scoped>
.el_container{
    height: 100%;
}
// 头部header样式start
.el_header{
    background-color: #FFF;
    padding-left: 10%;
    padding-right: 10%;
    height: 42px !important;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.logo{
  font-size: 18px;
  font-weight: bold;
}
.menu{
  width: 40%;
  // background-color: pink;
  display: flex;
  flex-direction: row;
  align-content: space-around;
}
li{
  flex-grow: 1;
}
.icon-icon-test{
  font-size: 20px !important;
}
//主体body样式start
.el_body{
    width: 80% !important;
    height: 100%;
    margin: auto;
}
.el_aside{
    // background-color: #ddd;
    height: 100% !important;
    width: 14% !important;
    // background-color: #ddd;
}
//左侧边栏样式start
.user{
  width: 100%;
  height: 150px;
  background-color: #FFF !important;
  background: url('../assets/Christmas_BG.jpg') no-repeat;
  background-size:100% 60px;
  position: relative;
  .username{
    position: absolute;
    top: 30%;
    left: 40%;
  }
  .avatar{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 5%;
    top: 30%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
 .article{
    position: absolute;
    top: 60%;
    font-size: 13px !important;
    color: grey;
   ul{
      display: flex;
      justify-content: space-around;
   }
    p{
      margin:3px !important ;
    }
 }

}
.userinfo{
    margin-top: 5px;
    width: 100%;
    height: 220px;
    background-color: #fff !important;
    .icon{
    font-size:15px !important ;
    }
    .row{
    margin-left:10px;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    }
    .el_divider{
        height: 1px !important;
        margin: 0 !important;
    }
    p{
        font-size: 12px;
        line-height: 10px;
    }
}
.usertime{
    font-size: 12px;
    margin-top:5px;
    width: 100%;
    height: 100px;
    background-color:#fff;
    p{
        margin: 0;
    }
    .date{
        margin-left:3px;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left:30% ;
        margin-top: 10px;
    }
}
.nearlycomments{
    width: 100%;
    background-color: #FFF;
    height: 200px;
    font-size: 12px;
    .title{
        margin-top:5px ;
        margin-bottom: 10px;
        font-size: 15px;
    }
    .comments{
        display: flex;
        justify-self: start;
        margin-top:5px;
        margin-left: 5px;
    }
}
.el_main{
    width: 70%;
    height: 150%;
    margin-left: 10px;
    margin-right: 10px;
    position: relative;
    padding: 0;
}
.MainMenu{
    margin: 0;
    .el-menu-demo{
        width: 100%;
        margin-bottom: 5px;
    }
}

//右侧边栏样式start
.assey{
    padding: 5px;
    font-size: 11px !important;
    background-color: #fff;
}
.music{
    margin-top:5px ;
    background-color: #fff !important;
    width: 100%;
    height: 100px;
    position: relative;
    img{
        width: 50px;
        height: 50px;
    }
    span{
        position: absolute;
        top: 20px;
        left: 60px;
        font-size: 15px;
    }
    audio{
        width: 100%;
        height: 30px;
        background-color: #fff !important;
    }
}
.tags{
    margin-top:5px ;
    background-color: #fff;
    width: 100%;
    height:100px;
}
.adverts{
    background-color:#fff ;
    width: 100%;
    height: 150px;
    img{
        width: 100%;
        height: 100%;
    }
}



</style>
