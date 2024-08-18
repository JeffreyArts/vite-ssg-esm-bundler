/* eslint-disable @typescript-eslint/no-unused-vars */

import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import Home from "./router/Home.vue"
import Page1 from "./router/Page1.vue"

export const createApp = ViteSSG(
    App,
   {
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/page-1',
            component: Page1,
        }
    ]
},
)