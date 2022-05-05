import Analysis from '../components/analysisTask/Analysis.vue'
import WholeKunShan from '../components/kunshan/WholeKunShan.vue'
import Home from '../components/Home.vue'
import Resource from "../components/resource/resource.vue"
import House from "../components/house/House.vue"


/**
 * 路由
 */
class Route {
    /**
     * 路径
     */
    path: string;
    /**
     *路由名
     */
    name: string;
    /**
     * 标题
     */
    title: string;
    /**
     * vue组件
     */
    component: any;
    /**
     * 组件
     */
    children: Array<Route> | undefined

    constructor(path: string, name: string, title: string, component: any, children?: Array<Route>) {
        this.path = path;
        this.name = name;
        this.title = title;
        this.children = children;
        this.component = component
    }
}

const homeRoute = new Route("/", 'home', '首页', Home)
const analysisTaskRoute = new Route("/analysis", 'analysis', '分析任务', Analysis)
const wholeKunShanRoute = new Route("/whaleCity", 'whaleCity', '最全昆山', WholeKunShan)
const resourceManagerRoute = new Route("/resource", 'resource', '资源管理', Resource)
const houseRoute = new Route("/house", 'house', '房势', House)

const routers: Array<Route> = [analysisTaskRoute, wholeKunShanRoute, homeRoute, resourceManagerRoute, houseRoute
]

export default routers;
