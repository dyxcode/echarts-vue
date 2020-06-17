# 基于ECharts的疫情大数据可视化平台

## 文件结构划分
* dist : 生成文件目录
* node_modules : npm下载的资源
* public : 静态资源目录
* src : 源文件目录
    * assets : 项目所需的资源文件
    * components : 可复用的组件文件
    * routers : v-router路由设置
    * store : vuex共享数据设置
    * views : 视图组件文件

## 基本代码组织结构说明
views中一共有八个文件夹，分别对应了疫情展板、用户展板以及六个基础图表，其中依赖的组件和资源文件可根据代码来追踪。
    
components中存放了所有可复用组件，最主要的三个是basicaxis、basiconeseries和chart，分别被多维度图表、单维度图表和两个展板依赖。

剩下的js、css、img和一些样式组件不是项目的逻辑重点，所以在此不赘述。

## 访问网址
<http://dyxzs.top>
