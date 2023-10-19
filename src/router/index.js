import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  { 
    path: '/projects/sentiment-analysis',
    name: 'sentiment-analysis',
    component: () => import(/* webpackChunkName: "sentimentAnalysis" */ '../Projects/sentimentAnalysis.vue'),
    },
  { 
    path: '/projects/comparing-healthy-life',
    name: 'comparing-healthy-life',
    component: () => import(/* webpackChunkName: "comparingHealthyLife" */ '../Projects/comparingHealthyLife.vue'),
    },
  { 
    path: '/projects/social-network-analysis',
    name: 'social-network-analysis',
    component: () => import(/* webpackChunkName: "socialNetworkAnalysis" */ '../Projects/socialNetworkAnalysis.vue'),
    },
    // 
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
  },
  { 
    path: '/posts/ab-testing-with-route53',
    name: 'ab-testing-with-route53',
    component: () => import(/* webpackChunkName: "abTestingUsingRoute53Service" */ '../Posts/abTestingUsingRoute53Service.vue'),
    },
  { 
    path: '/posts/analyzing-R-packages-trends',
    name: 'analyzing-R-packages-trends',
    component: () => import(/* webpackChunkName: "analyzingRPackageTrends" */ '../Posts/analyzingRPackageTrends.vue'),
    },
  { 
    path: '/posts/setting-up-a-fully-managed-site',
    name: 'setting-up-a-fully-managed-site',
    component: () => import(/* webpackChunkName: "settingUpAFullyManagedSite" */ '../Posts/settingUpAFullyManagedSite.vue'),
    },
  { 
    path: '/posts/aws-comparing-distributed-computing',
    name: 'aws-comparing-distributed-computing',
    component: () => import(/* webpackChunkName: "DistributedComputingComparison" */ '../Posts/DistributedComputingComparison.vue'),
    },
    { 
      path: '/posts/kickstarter-launching-new-project-success-rates',
      name: 'kickstarter-dashboard',
      component: () => import(/* webpackChunkName: "kickstarterDashboard" */ '../Posts/kickstarterDashboard.vue'),
      },
    { 
      path: '/posts/Neo4j-pratical-tips',
      name: 'Neo4j-pratical-tips',
      component: () => import(/* webpackChunkName: "neo4jPracticalTips" */ '../Posts/neo4jPracticalTips.vue'),
      },

    { 
      path: '/posts/unwind-r-function',
      name: 'unwind-r-function',
      component: () => import(/* webpackChunkName: "unwindRFunction" */ '../Posts/unwindRFunction.vue'),
      },

// 
    {
      path: '/tools',
      name: 'Tools',
      component: () => import(/* webpackChunkName: "tools" */ '../views/Tools.vue')
    },
    { 
      path: '/tools/time-series-forecasts-calculator',
      name: 'time-series-forecasts-calculator',
      component: () => import(/* webpackChunkName: "timeSeriesCalculator" */ '../Tools/timeSeriesCalculator.vue'),
      },
  // 
      {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
      return { x: 0, y: 0 }
    
  },
  base: process.env.BASE_URL,
  routes,
})

export default router
