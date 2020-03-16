import Toast from './Toast.vue';

const obj= {}

//main.js中Vue.use(obj)默认调用obj的install方法 
//默认传入vue对象 无需再import vue 
obj.install= function(Vue){
    //1.创建组件构造器
    const toastConstructor= Vue.extend(Toast)

    //2.创建一个组件对象
    const toast= new toastConstructor()

    //3.将toast手动挂载到div上
    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast= toast
}

export default obj