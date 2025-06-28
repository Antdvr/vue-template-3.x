import App from './App.vue'
import Message from 'ant-design-vue/es/message'
import Notification from 'ant-design-vue/es/notification'
import MagicModifyPlugin from '@/configure/presetMagicModify'
import DirectivePlugin from '@/configure/presetDirective'
import Antdvr3xPlugin from '@antdvr/library-3.x'
import PiniaterPlugin from '@/plugin/pinia'
import RouterPlugin from '@/router'

import '@/mock'
import '@/main.less'
import '@/permission'

Notification.config({ duration: 1 })
Message.config({ duration: 1 })

createApp(App)
  .use(MagicModifyPlugin)
  .use(DirectivePlugin)
  .use(Antdvr3xPlugin)
  .use(PiniaterPlugin)
  .use(RouterPlugin)
  .mount('#app')
