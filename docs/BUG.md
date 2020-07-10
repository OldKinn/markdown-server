# 污染源图谱功能修复记录

### 2020-06-01
更新流域数据
```
// 此目录basin_1~5 的JSON文件
/home/syyy/tomcat/hnwpfx9010-01/webapps/hnwpfx-ide/static/geojson
```

### 2020-05-26

1.污染源普查大屏显示废水总量

2.增加大屏投屏版本

```
/f/frameset.screen.html
/f/frameset.screenPlay.html
/home/syyy/tomcat/hnwpfx9010-01/webapps/hnwpfx-ide/static/hnwpfxScreen
/home/syyy/tomcat/hnwpfx9010-01/webapps/hnwpfx-ide/static/hnwpfxScreenPlay
```

### 2020-04-20更新内容

1.修复综合查询部分字段显示问题

2.修复污普图册地图超出范围问题

3.修复污普图册地图遮盖部分文字问题
```
form:com.chinacreator.hnwpfx.gis.forms.statistics
/home/syyy/tomcat/hnwpfx9010-01/webapps/hnwpfx-ide/static/map-statistics
/home/syyy/tomcat/hnwpfx9010-01/webapps/hnwpfx-ide/static/stack.map.js
```

### 2020-04-08更新内容

**1.增加下载图片功能**

**2.调整地图大小,占位面积更大**

**3.默认显示行政区划的名称(原来鼠标悬浮显示)**

**4.优化部分区划名称位置显示,防止被堆叠的图表遮盖**

### 2020-04-02更新内容

**1.污染源普查图册图例位置调整到右下角**

**2.重点流域图表模式下禁用行政区划的选择**

### 2020-04-01更新内容

**1.重点流域热力图和堆叠图表实现**
```
var stack = new StackMap(myChart, {
    .......
    // 重点流域编号:1~5，也可以随意组合，比如"1,2,3,4,5"
    basin: '1,2,3,4,5',
    ......
})
```
>![效果](/markdown/images/20200401153441.png)

**2.优化饼状图最小分区的角度，方便鼠标悬浮查看**

**3.优化数据为0的热力图显示（自动计算色重）**

**4.优化地图区域Label显示，防止被堆叠的图表遮盖**

### 2020-03-31更新内容
>重点流域图表图层展示实现

### 2020-03-30更新内容
**1.优化散点"视觉分组"标题文字垂直居中效果，增加自定义效果的图形形状**
```
var stack = new StackMap(myChart, {
    .......
    // 散点图自定义图形，目前支持circle、rect、roundRect
    scatterSymbol: 'roundRect',
    ......
})
```
>效果图

>![标题](/markdown/images/20200330112203.png)

**2.自动处理窗口resize事件**

**3.处理散点图鼠标悬浮提示信息**

### 2020-03-27更新内容
**1.增加"视觉分组"标题显示，初始化参数如下:**
```
var stack = new StackMap(myChart, {
    ......
    // 热力分组名称
    heatVisualText: '测试标题1',
    // 散点分组名称
    scatterVisualText: '消减量(万m³)',
    ......
});
```
>![标题](/markdown/images/20200327112643.png)

**2.散点图的"视觉分组"大小渐变实现**
>![散点图](/markdown/images/20200327173126.png)

### 2020-03-25更新内容
1.优化热力图分组数据显示

2.散点图增加"视觉分组"

>![视觉分组](/markdown/images/20200325173637.png "视觉分组")

### 2020-03-24更新内容

1.优化热力图数据分段的显示效果(组件自动处理,无需更新代码)
> 修改前

>![修改前](/markdown/images/20200324141455.PNG "修改前")

>修改后

>![修改后](/markdown/images/20200324135119.PNG "修改后")

2.给显示的数据添加计量单位

添加热力图和堆叠图的计量单位，代码如下：
```
var stack = new StackMap(myChart, {
    type: 'ring'
    ......
    // 热力图表的计量单位，默认为""，如无单位请忽略此属性，根据实际添加比如"吨"
    heatUnit: '万m³',
    // 堆叠图表的计量单位，默认为""，如无单位请忽略此属性，根据实际添加比如"吨"
    stackUnit: '家',
    ......
});
```

3.修复地图双击到堆叠图表时出现JS错误的BUG
>BUG重现:双击散点图出现下面错误

![BUG](/markdown/images/20200324163512.png "BUG")

### 2020-03-05更新内容

>1.热力图数据为0时，显示热力最淡色值，边框颜色效果设置

>2.处理百分比类型热力数据显示

>3.优化热力图数据分段显示

>4.散点图图标自定义实现，散点图颜色自定义无效问题修复


### BUG和反馈意见

#### 地图区块效果优化
```
// 2020年3月4日 16:37:38
1.优化地图区块边框颜色
2.优化鼠标悬浮模式下效果
```

#### 环状图实现
```
// 2020年3月4日 16:06:31
// 已实现,设置type属性为ring
var stack = new StackMap(myChart, {
    type: 'ring'
    .......
});
```

#### 百分比的数据显示
```
// 2020年3月5日 14:02:00
// 已实现,传递参数heatPercent
var stackMap = new StackMap(mapchart, {
    title: '长株潭及大气传输通道城市污水处理厂（场）污水分类处理情况',
    subTitle: null,
    heatColor: ['#E0E0E0', '#424242'],
    heatPercent: true
});
```

#### 柱状图立体显示效果

```
// TODO 实现方式
```

#### 柱状图最小为零时图表显示
```
// 2020年3月4日 16:07:21
// 已处理，当柱状图统计项数据为零时，显示一个默认最小高度的柱状图
```
