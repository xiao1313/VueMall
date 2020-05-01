<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MIU</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login" >登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart" ><span class="icon-cart"></span>购物车</a>
                </div>
            </div>            
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-log">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img v-bind:src="item.h_img">
                                        </div>
                                        <div class="pro-name">{{item.brandno}}</div>
                                        <div class="pro-price">{{item.id}}</div>
                                    </a>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg">
                                        </div>
                                        <div class="pro-name">小米9</div>
                                        <div class="pro-price">3999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg">
                                        </div>
                                        <div class="pro-name">小米9</div>
                                        <div class="pro-price">3999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg">
                                        </div>
                                        <div class="pro-name">小米9</div>
                                        <div class="pro-price">3999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg">
                                        </div>
                                        <div class="pro-name">小米9</div>
                                        <div class="pro-price">3999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg">
                                        </div>
                                        <div class="pro-name">小米9</div>
                                        <div class="pro-price">3999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-imgs">
                                            <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg">
                                        </div>
                                        <div class="pro-name">小米9</div>
                                        <div class="pro-price">3999</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import jsonp from 'jsonp'
export default {
    name:'nav-header',
    data(){
        return{
            username:'Jack',
            phoneList:[]
        }
        
    },
    mounted(){
        this.bookIfo();
    },
    methods:{
        login(){
            this.$router.push('/login');
        },
        bookIfo(){
          // 传入API名以及请求参数对象
          this.jsp('bookIfo',{book:this.current}).then((data)=>{
                var dataobj = JSON.parse(data);
                // this.phoneList = dataobj.returnlist;
                // var dataobj = eval("(" + data + ")"); 
                this.phoneList = dataobj.returnlist.slice(0,6);
                // alert(dataobj.requestdata);
                // alert(dataobj.returnlist[0].brandno);
          }).catch((err)=>{
              console.log(err);
          })
      },
      goToCart(){
          this.$router.push('/cart');
      }
        // getProductList(){
        //     let url ="http://localhost:3747/service/yun.ashx?cataid=22222";
        //     jsonp(url,(res)=>{
        //                 alert(res);
        //                 let result = res;
        //                 this.data = result;
        //     })
        //     // this.axios.get('/products',{
        //     //     params:{
        //     //         categoryId:'100012'
        //     //     }                
        //     // }).then((res)=>{
        //     //     if (res.list>6){
        //     //         this.phoneList = res.list.slice(0,6);
        //     //     }
        //     // })
        // }
    }
}
</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color:#B0B0B0;
            .container{
                @include flex();                           
                a{
                    display: inline-block;
                    color:#B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #f60;
                    text-align: center;
                    color:#fff;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');                        
                        margin-right: 4px;                      
                    }
                }
            }
        }        
        .nav-header{
            .container{
                position: relative;
                height: 112px;
                @include flex(); 
                .header-log{
                    display:inline-block;
                    width: 55px;
                    height: 55px;
                    background-color: #f60;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content: ' ';
                            @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);                           
                            transition:margin .2s;
                        }
                        &:after{
                            content: ' ';
                            @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                        }
                        &:hover::before{
                            margin-left: -55px;
                            transition:margin .2s;
                        }

                    }
                }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left: 209px;
                    .item-menu{
                        display: inline-block;
                        color:#333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 13px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color:$colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position:absolute;
                            top:112px;
                            left: 0px;
                            width:1226px;
                            height: 0;
                            opacity: 0;
                            overflow:hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0 7px 6px 0 rgba(0,0,0,0.11);
                            z-index: 10;
                            transition: all .5s;
                            background-color: #fff;                        
                            .product{
                                position: relative;
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width: 141px;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height: 137px;
                                }    
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color:$colorB;
                                }
                                .pro-price{
                                    color:$colorA;
                                }
                                &:before{
                                    content: ' ';
                                    position: absolute;
                                    top:28px;
                                    right: 0;
                                    border-left:1px solid $colorF;
                                    height:100px;
                                    width:1px;
                                }
                                &:last-child:before{
                                    display: none;
                                }                      
                            }
                        }
                        
                    }
                }
                .header-search{
                    width:319px;
                    .wrapper{
                        height:50px;
                        border:1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            box-sizing: border-box;
                            border-right: 1px solid #B0B0B0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;                            
                        }
                        a{
                            @include bgImg(18px,18px,'/imgs/icon-search.png',contain);                            
                            margin-left: 17px;
                        }

                    }
                }
            }
            
        }
    }
</style>