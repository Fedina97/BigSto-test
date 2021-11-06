import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Users from "@/views/Users";
import PreviewUser from "@/views/PreviewUser";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/users",
      component: Users,
    },
    {
      path: "/user/:id",
      name: "user",
      component: PreviewUser,
    },
  ],
});
