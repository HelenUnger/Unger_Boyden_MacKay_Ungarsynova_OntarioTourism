// components will go here
import homeComponent from './components/homeComponent.js';
import registerComponent from './components/registerComponent.js'; 

const routes = [
    { path: '/', name: "home", component: homeComponent },
    { path: "/register", name: "register", component: registerComponent }
];

const router = new VueRouter({
    routes
});

const vm = new Vue({
    data: {
        message: "sup from vue!",
        navTrue: false
    },

    created: function() {
        console.log('parent is live');
    },

    methods: {
        toggleNav(){
            this.navTrue = (!this.navTrue) ? true : false; 
        }
    },

    router: router
    
}).$mount("#app");
