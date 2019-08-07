import {ProRouteConfig} from '@/model/project/route/route.model'
import Main from '@/modules/main/Main.vue'
import MainHome from '@/modules/main/MainHome.vue'
import demoRouter from '@/demo/router/router'
import systemRouter from '@/modules/system/router/router'
import systemaaaRouter from '@/modules/systemaaa/router/router'
import systemaabRouter from '@/modules/systemaab/router/router'
import systemaacRouter from '@/modules/systemaac/router/router'
import systemaadRouter from '@/modules/systemaad/router/router'
import systemaaeRouter from '@/modules/systemaae/router/router'
import systemaafRouter from '@/modules/systemaaf/router/router'
import systemaagRouter from '@/modules/systemaag/router/router'
import systemaahRouter from '@/modules/systemaah/router/router'
import systemaaiRouter from '@/modules/systemaai/router/router'
import systemaajRouter from '@/modules/systemaaj/router/router'
import systemaakRouter from '@/modules/systemaak/router/router'
import systemaalRouter from '@/modules/systemaal/router/router'
import systemaamRouter from '@/modules/systemaam/router/router'
import systemaanRouter from '@/modules/systemaan/router/router'
import systemaaoRouter from '@/modules/systemaao/router/router'
import systemaapRouter from '@/modules/systemaap/router/router'
import systemaaqRouter from '@/modules/systemaaq/router/router'
import systemaarRouter from '@/modules/systemaar/router/router'
import systemaasRouter from '@/modules/systemaas/router/router'
import systemaatRouter from '@/modules/systemaat/router/router'
import systemaauRouter from '@/modules/systemaau/router/router'
import systemaavRouter from '@/modules/systemaav/router/router'
import systemaawRouter from '@/modules/systemaaw/router/router'
import systemaaxRouter from '@/modules/systemaax/router/router'
import systemaayRouter from '@/modules/systemaay/router/router'
import systemaazRouter from '@/modules/systemaaz/router/router'
import systemabaRouter from '@/modules/systemaba/router/router'
import systemabbRouter from '@/modules/systemabb/router/router'
import systemabcRouter from '@/modules/systemabc/router/router'
import systemabdRouter from '@/modules/systemabd/router/router'
import systemabeRouter from '@/modules/systemabe/router/router'
import systemabfRouter from '@/modules/systemabf/router/router'
import systemabgRouter from '@/modules/systemabg/router/router'
import systemabhRouter from '@/modules/systemabh/router/router'
import systemabiRouter from '@/modules/systemabi/router/router'
import systemabjRouter from '@/modules/systemabj/router/router'
import systemabkRouter from '@/modules/systemabk/router/router'
import systemablRouter from '@/modules/systemabl/router/router'
import systemabmRouter from '@/modules/systemabm/router/router'
import systemabnRouter from '@/modules/systemabn/router/router'
import systemaboRouter from '@/modules/systemabo/router/router'
import systemabpRouter from '@/modules/systemabp/router/router'
import systemabqRouter from '@/modules/systemabq/router/router'
import systemabrRouter from '@/modules/systemabr/router/router'
import systemabsRouter from '@/modules/systemabs/router/router'
import systemabtRouter from '@/modules/systemabt/router/router'
import systemabuRouter from '@/modules/systemabu/router/router'
import systemabvRouter from '@/modules/systemabv/router/router'
import systemabwRouter from '@/modules/systemabw/router/router'
import systemabxRouter from '@/modules/systemabx/router/router'


export const mainRoute: ProRouteConfig = {
  path: '/main',
  name: 'main',
  redirect: {name: 'home'},
  component: Main,
  children: [
    {
      path: '',
      name: 'home',
      component: MainHome,
      meta: {
        title: 'Home',
        hideBread: true,
      },
    },
    demoRouter,
    systemRouter,
    systemaaaRouter,
    systemaabRouter,
    systemaacRouter,
    systemaadRouter,
    systemaaeRouter,
    systemaafRouter,
    systemaagRouter,
    systemaahRouter,
    systemaaiRouter,
    systemaajRouter,
    systemaakRouter,
    systemaalRouter,
    systemaamRouter,
    systemaanRouter,
    systemaaoRouter,
    systemaapRouter,
    systemaaqRouter,
    systemaarRouter,
    systemaasRouter,
    systemaatRouter,
    systemaauRouter,
    systemaavRouter,
    systemaawRouter,
    systemaaxRouter,
    systemaayRouter,
    systemaazRouter,
    systemabaRouter,
    systemabbRouter,
    systemabcRouter,
    systemabdRouter,
    systemabeRouter,
    systemabfRouter,
    systemabgRouter,
    systemabhRouter,
    systemabiRouter,
    systemabjRouter,
    systemabkRouter,
    systemablRouter,
    systemabmRouter,
    systemabnRouter,
    systemaboRouter,
    systemabpRouter,
    systemabqRouter,
    systemabrRouter,
    systemabsRouter,
    systemabtRouter,
    systemabuRouter,
    systemabvRouter,
    systemabwRouter,
    systemabxRouter,

  ],
  meta: {
    title: 'main',
  },
}
