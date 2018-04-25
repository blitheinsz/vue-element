// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
// import './theme/index.css'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLang from './lang/en'
import zhLang from './lang/zh_CN'
import App from './App'
import router from './router'
import {
    Pagination,
    Radio,
    RadioGroup,
    Select,
    Table,
    TableColumn,
    Icon,
    Row,
    Col,
    Menu,
    MenuItem,
    Option,
    Button
} from 'element-ui'

require('es6-promise').polyfill();
Vue.config.productionTip = false
Vue.use(VueI18n)

const messages = {
    en: {
        ...enLang,
        ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
    },
    zh: {
        ...zhLang,
        ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
    }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'zh', // set locale
    messages: messages // set locale messages
})
const i18nObj = {i18n: (key, value) => i18n.vm._t(key, value)}
Vue.use(Pagination, i18nObj)
Vue.use(Radio, i18nObj)
Vue.use(RadioGroup, i18nObj)
Vue.use(Select, i18nObj)
Vue.use(Table, i18nObj)
Vue.use(TableColumn, i18nObj)
Vue.use(Icon, i18nObj)
Vue.use(Row, i18nObj)
Vue.use(Col, i18nObj)
Vue.use(Menu, i18nObj)
Vue.use(MenuItem, i18nObj)
Vue.use(Option, i18nObj)
Vue.use(Button, i18nObj)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: { App }
})
