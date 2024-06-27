// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    extends: ['@nuxt/ui-pro'],
    modules: ['@nuxt/ui','@nuxtjs/color-mode'],
    runtimeConfig: {
        public: {
            serverUri: "",
        },
    },
    colorMode: {
        preference: "system",
    },
    router: {
    //@ts-ignore
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return {top: 0};
        }
    }
}
})
