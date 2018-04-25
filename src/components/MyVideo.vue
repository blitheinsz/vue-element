<template>
  <d-player @play="play" :video="video" :contextmenu="contextmenu"></d-player>
</template>
<script>
import VueDPlayer from 'vue-dplayer'

export default {
    data () {
        return {
            video: {
                url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
            },
            contextmenu: [
                {
                    text: 'GitHub',
                    link: 'https://github.com/MoePlayer/vue-dplayer'
                }
            ]
        }
    },
    methods: {
        play () {
            console.log('play begin1')
        }
    },
    components: {
        'd-player': VueDPlayer
    }
}
</script>
<style> 
  .dplayer {
    width: 800px;
  }
</style>

