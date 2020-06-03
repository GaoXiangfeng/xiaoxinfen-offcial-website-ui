<!-- pinja-service -->
<template>
  <div class="group">
      <img :src="imgSrc">
      <p class="text-number">{{number}}</p>
      <p class="text-title">{{title}}</p>
      <p class="text-content" v-html="content"></p>
  </div>
</template>
<script>
export default {
    props: {
        imgSrc: {
            type: String,
            default: '../assets/1@2px.png'
        },
        number: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
        };
    },

    components: {},

    computed: {},

    mounted () {},

    methods: {}
}
</script>
<style lang='less' scoped>
    .group{
        padding: 25px 0;
        text-align: center;
        height:  100%;
        box-sizing: border-box;
        img{
            width: 144px;
            height: auto;
            margin: 0 auto;
            margin-bottom: 30px;
            display: inline-block;
        }
        .text-number{
            padding: 0 20px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #4C4C4C;
            text-align: left;
        }
        .text-title{
            padding: 0 20px;
            margin-top: 10px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            font-weight: 800;
            color: #000000;
            text-align: left;
            word-break: keep-all;
        }
        .text-content{
            padding: 0 20px;
            margin-top: 10px;
            text-align: justify;
            word-break: keep-all;
            min-height: 150px;
            overflow: hidden;
            font-size:18px;
        }
    }
</style>