import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Blog from "@/components/Blog";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/blogs/:blogId",
      name: "Blog",
      component: Blog
    }
  ]
});
