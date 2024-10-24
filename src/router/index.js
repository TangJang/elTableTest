import Vue from "vue";
import  VueRouter  from 'vue-router';

let baseRoute = [
    {
        path: '/views',
        component: (resolve) => require(['../views.vue'], resolve),
        meta: {
        }
    },
    {
        path: '/views2',
        component: (resolve) => require(['../views2.vue'], resolve),
        meta: {
        }
    },
];

Vue.use(VueRouter);

const createRouter = () => new VueRouter({
    mode: 'history',
    routes: [...baseRoute]
});
const router = createRouter();

export function resetRouter() {
    const newRouter = new VueRouter({
        mode: 'history',
        routes: baseRoute
    })
    router.matcher = newRouter.matcher // the relevant part

}

// 解决报错
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch((err) => err)
};
VueRouter.prototype.replace = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
    return originalReplace.call(this, location).catch((err) => err);
}

export default router;

