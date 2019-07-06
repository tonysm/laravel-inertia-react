import Inertia from 'inertia-vue';
import Vue from 'vue';

Vue.use(Inertia);

const app = document.getElementById('app');

new Vue({
    render: h => h(Inertia, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`@/pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app);
