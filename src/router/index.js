import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import MyVideo from '@/components/MyVideo'
import EChart from '@/components/EChart'
import Table from '@/components/Table'
import MPdf from '@/components/MPdf'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Nav',
            component: Nav,
            children: [
                {
                    path: '',
                    component: MyVideo
                },
                {
                    path: 'video',
                    component: MyVideo
                },
                {
                    path: 'chart',
                    component: EChart
                },
                {
                    path: 'pdf',
                    component: MPdf
                },
                {
                    path: 'other',
                    component: Table
                }
            ]
        }
    ]
})
