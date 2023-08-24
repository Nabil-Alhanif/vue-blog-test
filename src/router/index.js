import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
    meta: {
      title: "Home",
      requiresAuth: false,
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import('../views/Blogs.vue'),
    meta: {
      title: "Blogs",
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue'),
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/Register.vue'),
    meta: {
      title: "Register",
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import('../views/Profile.vue'),
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import('../views/Admin.vue'),
    meta: {
      title: "Admin",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: () => import('../views/CreatePost.vue'),
    meta: {
      title: "Create Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: () => import('../views/BlogPreview.vue'),
    meta: {
      title: "Preview Blog Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: () => import('../views/ViewBlog.vue'),
    meta: {
      title: "View Blog Post",
      requiresAuth: false,
    },
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: () => import('../views/EditBlog.vue'),
    meta: {
      title: "Edit Blog Post",
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
	routes
})

export default router
