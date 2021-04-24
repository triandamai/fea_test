import Vue from "vue";
import Router from "vue-router";
import ApiService from "../services/api.service";
import { getUser } from "../services/jwt.service";

// component

Vue.use(Router);

const routes = [
  { path: "", redirect: { name: "dashboard" } },
  {
    path: "/main",
    component: () => import("../components/body"),
    meta: {
      reqiresAuth: true
    },
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../pages/dashboard/dashboard.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      },
      //
      {
        path: "soal",
        name: "soal",
        component: () => import("../pages/soal/soal.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      },
      {
        path: "soal/add",
        name: "addsoal",
        component: () => import("../pages/soal/addsoal.vue"),
        meta: {
          title: "Nasabah | Add",
          reqiresAuth: true
        }
      },
      {
        path: "soal/edit/:id",
        name: "editsoal",
        component: () => import("../pages/soal/addsoal.vue"),
        meta: {
          title: "Nasabah | Add",
          reqiresAuth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/auth/login.vue")
  }
];

const router = new Router({
  routes,
  base: "/",
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;