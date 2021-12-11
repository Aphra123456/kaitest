import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name:"login",
        component:()=>import("@/components/pages/LogPage.vue")
    },
    {
        path:"/approval",
        name:"approval",
        component:()=>import("@/components/pages/ApprovalPage.vue")
    }
]

const router = createRouter({

 history: createWebHashHistory(),

 routes

});

export default router;
