var map;
var scale, toolBar, controlBar, overView
var container
var traffic;
var radiusMag;
var dmlist = [];
var geojson_data = `{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "沙湖公园",
                "intro": "沙湖位于武汉市武昌东北部，东邻中北路，南至小龟山，西抵武昌至大冶的铁路线，北达徐东路。清末修筑的粤汉铁路穿湖而过，路西为小沙湖，又名内沙湖，现已近乎湮没；路东为大沙湖，又名外沙湖，即沙湖"
            },
            "geometry": {
                "coordinates": [
                    114.33407109323377,
                    30.565188266834525
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "沙湖运动公园",
                "intro": "沙湖运动公园位于沙湖旁， 是由武汉市体育局和武昌区体育局共同打造的“体育公园”。"
            },
            "geometry": {
                "coordinates": [
                    114.32140529850949,
                    30.570745143724253
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "沙湖生态公园",
                "intro":"这是沙湖生态公园的简介"
            },
            "geometry": {
                "coordinates": [
                    114.31673436472977,
                    30.55971446760026
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "南岸咀",
                "intro": "这是南岸咀的历史沿革以及景点简介。"
            },
            "geometry": {
                "coordinates": [
                    114.28145577196938,
                    30.56335761023503
                ],
                "type": "Point"
            },
            "id": 3
        },
        {
            "type": "Feature",
            "properties": {
                "name": "龟山公园",
                "intro": "这是龟山公园的景点简介。"
            },
            "geometry": {
                "coordinates": [
                    114.270319446526,
                    30.55753894009237
                ],
                "type": "Point"
            },
            "id": 4
        },
        {
            "type": "Feature",
            "properties": {
                "name": "湖北大学",
                "intro":"湖北大学（Hubei University），简称“湖大”，位于湖北省武汉市，是湖北省人民政府与教育部共建的省属重点综合性大学 [60]，位列湖北省“双一流”建设高校，入选国家“中西部高校基础能力建设工程”、“111计划”、湖北省2011计划、国家级大学生创新创业训练计划、国家级新工科研究与实践项目、数据中国“百校工程”，是全国深化创新创业教育改革示范高校、中国政府奖学金来华留学生接收院校、孔子学院奖学金接收院校。"
            },
            "geometry": {
                "coordinates": [
                    114.3284511865291,
                    30.579058373365257
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "龙王庙公园",
                "intro": "这是龙王庙公园的历史沿革"
            },
            "geometry": {
                "coordinates": [
                    114.28585289747485,
                    30.569575682896513
                ],
                "type": "Point"
            },
            "id": 6
        },
        {
            "type": "Feature",
            "properties": {
                "name": "观江台",
                "intro": "这是观江台的景点简介以及历史沿革"
            },
            "geometry": {
                "coordinates": [
                    114.29638084832885,
                    30.584230208279806
                ],
                "type": "Point"
            },
            "id": 7
        }
    ]
}`

var drawMagnify;


function init() {
    // layer = new AMap.createDefaultLayer({
    //     zooms: [3, 20], //可见级别
    //     visible: true, //是否可见
    //     opacity: 1, //透明度
    //     zIndex: 0, //叠加层级
    // });

    container = document.getElementById("container");

    map = new AMap.Map("container", {
        viewMode: '2D', //默认使用 2D 模式
        // zoom: 11, //地图级别
        zoom: 15,
        center: [114.334121, 30.57687],
        keyboardEnable: false,
    });

    AMap.plugin(['AMap.Scale', 'AMap.ToolBar', 'AMap.ControlBar', 'AMap.HawkEye', 'AMap.GeoJSON'], function () {
        scale = new AMap.Scale({
            // visible: false
        })
        toolBar = new AMap.ToolBar({
            // visible: false,
            position: {
                top: '110px',
                right: '40px'
            }
        })
        controlBar = new AMap.ControlBar({
            // visible: false,
            position: {
                top: '10px',
                right: '10px'
            }
        })
        overView = new AMap.HawkEye({
            visible: true
        })
        map.addControl(scale);
        map.addControl(toolBar);
        map.addControl(controlBar);
        map.addControl(overView);

    })

    // var markerlist = []
    // var geojson = JSON.parse(geojson_data);
    // console.log(geojson)

    // geojson.features.forEach(item => {
    //     // console.log(item.geometry.coordinates)
    //     // console.log(item.properties.name)
    //     var lnglat = new AMap.LngLat(item.geometry.coordinates[0],item.geometry.coordinates[1])
    //     // console.log(lnglat)
    //     var marker = new AMap.CircleMarker({
    //         center: lnglat,
    //         radius: 5,
    //         fillColor: '1E90FF',
    //         fillOpacity: 1,
    //         strokeWeight: 1,
    //         strokeOpacity: 0.4,
    //         label:item.properties.name,
    //         extData: {

    //         },
    //     })

    //     markerlist.push(marker);
    // });

    // console.log("markerlist:\n", markerlist);
    var markerList = geoJsonMarker(geojson_data);
    map.add(markerList);
    // console.log(markerList);


    traffic = new AMap.TileLayer.Traffic({
        autoRefresh: true, //是否自动刷新，默认为false
        interval: 180, //刷新间隔，默认180s
    });
    // map.add(traffic); //通过add方法添加图层

    //放大镜画布
    var canvas = document.getElementById('canvas');
    canvas.width = canvas.height = 500;
    var context = canvas.getContext('2d');

    //弹幕图层画布
    var canvasDmk = document.getElementById('canvas_danmaku');
    canvasDmk.width = canvasDmk.height = 500;
    var contextDmk = canvasDmk.getContext('2d');

    // 放大镜半径
    radiusMag = 175;
    document.addEventListener('keydown', evt => {
        //当按↑键时放大圆圈
        if (evt.key === 'ArrowUp') {
            radiusMag = Math.min(radiusMag + 5, 200);
            drawMagnify();
            dmlist.splice(0,dmlist.length);

            canvasDmk.width = canvasDmk.width
            contextDmk.clearRect(0, 0, 500, 500);
            contextDmk.beginPath();
            contextDmk.arc(250, 250, radiusMag, 0, 2 * Math.PI);
            contextDmk.clip();

            // 重新渲染地图并阻止默认事件
            map.render();
            evt.preventDefault();
            // 当按↓键时缩小圆圈    
        } else if (evt.key === 'ArrowDown') {
            radiusMag = Math.max(radiusMag - 5, 150);
            drawMagnify();
            dmlist.splice(0,dmlist.length);


            canvasDmk.width = canvasDmk.width
            contextDmk.clearRect(0, 0, 500, 500);
            contextDmk.beginPath();
            contextDmk.arc(250, 250, radiusMag, 0, 2 * Math.PI);
            contextDmk.clip();

            // 重新渲染地图并阻止默认事件   
            map.render();
            evt.preventDefault();
        }
    })

    let mousePosition = null;
    container.addEventListener("mousemove", event => {
        // console.log("mousemoving")
        //获取鼠标的位置坐标
        mousePosition = [event.pageX, event.pageY]
        // console.log(mousePosition[0], mousePosition[1])
        // 修改canvas的位置使其跟随鼠标移动
        let cvs = document.getElementById('canvas')
        cvs.style.left = event.pageX - 250 + 'px'
        cvs.style.top = event.pageY - 250 + 'px'

        let cvsDmk = document.getElementById('canvas_danmaku')
        cvsDmk.style.left = event.pageX - 250 + 'px'
        cvsDmk.style.top = event.pageY - 250 + 'px'

        // container.addEventListener("click", (e) => {
        //     console.log("page坐标：\n", mousePosition[0], mousePosition[1]);
        // })

        map.render();
    })

    // 鼠标事件，鼠标移出地图时将mousePosition置空
    container.addEventListener("mouseout", () => {
        mousePosition = null;
        map.render();
    });


    var drawMagnify = function () {
        context.clearRect(0, 0, 500, 500)
        context.beginPath();
        context.fillStyle = 'rgb(0,100,255,0.25)';
        context.strokeStyle = 'blue';
        context.arc(250, 250, radiusMag, 0, 2 * Math.PI);
        context.fill()
        context.stroke()
        context.closePath()
    }

    window.setInterval(() => {
        // 把canvas中的像素全部清除  重新绘制
        contextDmk.clearRect(0, 0, 500, 500);
        // 遍历dmlist，在canvas中进行绘制
        dmlist.forEach(item => { //item: 弹幕对象
            contextDmk.fillStyle = "white";
            contextDmk.font = '20px 微软雅黑';
            item.x--;
            contextDmk.fillText(item.content, item.x, item.y);
            // var fontWidth = contextDmk.measureText(item.content).width;
            // // 删除
            // dmlist = dmlist.filter(item => {
            //     return item.x + fontWidth > 0;
            // })
        })

        dmlist = dmlist.filter((danmaku)=>{
            var fontWidth = contextDmk.measureText(danmaku.content).width;
            return danmaku.x + fontWidth > 0
        })
        // console.log(dmlist)
    }, 1000 / 60);
    
    //若鼠标点击，则判断放大镜所包括的poi点，并向列表中添加弹幕
    map.on("click", (e) => {
        contextDmk.beginPath();
        contextDmk.arc(250, 250, radiusMag, 0, 2 * Math.PI);
        contextDmk.clip();

        // console.log("page坐标\n",e.pageX,e.pageY);
        // console.log("map坐标\n", e.pixel);

        var overlays = getCircleMarker();
        console.log('overlays:\n', overlays);

        // console.log("zoom\n",zoom)
        // console.log("mouse",mousePosition);

        var circle = createMagCircle(map, mousePosition, e.lnglat, radiusMag);
        map.add(circle);

        console.log("---------------CIRCLE----------", circle)
        console.log(e)
        // var getCircle = function(){
        //     var circle1
        //     var alloverlay = map.getAllOverlays();
        //     alloverlay.forEach((item)=>{
        //         if (item.className == "Overlay.Circle"){
        //             circle1 = item
        //         }
        //     })
        //     console.log("getcircle:\n",circle1)
        //     return circle1;
        // }
        // var circle_1 = getCircle();
        // var iscontains = circle.contains(hubupoint);
        // console.log(iscontains);
        // console.log(circle);

        // isPOIinCircle(overlays,circle);
        var containedPOI = [];

        setTimeout(function () {
            containedPOI = getPOIinCircle(overlays, circle);
            circle.destroy();

            containedPOI.forEach((item) => {
                // console.log(item.getExtData())
                addDanmaku(item.getExtData().intro)
            })
        }, 50)
        
    });

    map.on("mousemove",()=>{
        dmlist.splice(0,dmlist.length);
    });


    var addDanmaku = function (content) {

        // 封装为dm对象，存入dmlist
        dmlist.push({
            content: content,
            x: 250 + radiusMag + Math.random()*50,
            // y: (Math.floor(Math.random() * 12) + 1) * 30
            y: Math.floor(Math.random()*(radiusMag-20-(-radiusMag+20)+1))+(-radiusMag+20)+250
        });
        console.log("danmakuList:\n",dmlist);
    }

    var magButton = document.getElementById("magButton");
    magButton.addEventListener("click",()=>{
        var btnState = magButton.getAttribute("clickState");
        if(btnState === "true"){
            context.clearRect(0,0,500,500);
            magButton.setAttribute("clickState","false");

            canvasDmk.width = canvasDmk.width
            dmlist.splice(0,dmlist.length)

        }else if(btnState === "false"){
            drawMagnify();
            magButton.setAttribute("clickState","true");
        }
    });

}

function geoJsonMarker(jsonData) {
    var markerlist = []
    var geojson = JSON.parse(jsonData);
    // console.log(geojson)
    var label = new AMap.Marker({ content: ' ', map: map });

    geojson.features.forEach(item => {
        // console.log(item.geometry.coordinates)
        // console.log(item.properties.name)
        var lnglat = new AMap.LngLat(item.geometry.coordinates[0], item.geometry.coordinates[1])
        // console.log(lnglat)

        //圆形标记
        var marker = new AMap.CircleMarker({
            center: lnglat,
            radius: 5,
            fillColor: '1E90FF',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeOpacity: 0.4,
            pname: item.properties.name,
            extData: {
                intro: item.properties.intro
            },
        })

        marker.on("mouseover", (e) => {
            // console.log("e:\n",e);
            label.show();
            label.setPosition(e.target._opts.center);
            label.setLabel({ content: e.target._opts.pname });
        })
        marker.on("mouseout", () => {
            label.hide();
        });

        markerlist.push(marker);
    });
    return markerlist
}

function getCircleMarker() {
    var overlaylist = [];
    map.getAllOverlays().forEach(item => {
        if (item.className == 'Overlay.CircleMarker') {
            overlaylist.push(item);
        }
    })
    return overlaylist;
}

function createMagCircle(map, pixelPosition, mapPosition, magRadius) {
    var pixelPositionRight = [pixelPosition[0] + magRadius, pixelPosition[1]];
    // console.log(pixelPosition)
    // console.log(pixelPositionRight)
    var lnglat1 = map.containerToLngLat(pixelPosition, map.getZoom());
    var lnglat2 = map.containerToLngLat(pixelPositionRight, map.getZoom());


    var mapRadius = Math.round(lnglat1.distance(lnglat2));
    // console.log("mapradius:\n",mapRadius)

    // circle.setCenter(mapPosition);
    // circle.setRadius(mapRadius);

    var circle = new AMap.Circle({
        center: mapPosition,
        radius: mapRadius,
        bubble: "true",
    });
    circle.hide();

    return circle;
}

function getPOIinCircle(overlaylist, Circle) {

    var containList = [];

    overlaylist.forEach(item => {
        var center = item.getCenter();
        // console.log('center:',center)
        var isContains = Circle.contains(center);
        // console.log(item._opts.pname,":\n",item);
        // console.log(isContains)
        if (isContains) {
            containList.push(item);
            // item.setOptions({
            //     fillColor: '#ff0000',

            // })
            // console.log("------------item in circle-----------")
        }
        // console.log("item in overlaylist:\,",item);
    });

    // console.log("---------finish--------")
    return containList
}

function toggleScale(checkbox) {
    if (checkbox.checked) {
        scale.show();
    } else {
        scale.hide();
    }
}
function toggleToolBar(checkbox) {
    if (checkbox.checked) {
        showToolBar();
    } else {
        hideToolBar();
    }
}
function toggleControlBar(checkbox) {
    if (checkbox.checked) {
        document.getElementById('controlBar').checked = true;
        controlBar.show();
    } else {
        document.getElementById('controlBar').checked = false;
        controlBar.hide();
    }
}
function toggleOverViewShow(checkbox) {
    if (checkbox.checked) {
        overView.show();
    } else {
        overView.hide();
    }
}
function showToolBar() {
    document.getElementById('toolbar').checked = true;
    toolBar.show();
}
function hideToolBar() {
    document.getElementById('toolbar').checked = false;
    toolBar.hide();
}


// var drawMagnify = function () {
    
//     context.clearRect(0, 0, 500, 500)
//     context.beginPath();
//     context.fillStyle = 'rgb(0,100,255,0.25)';
//     context.strokeStyle = 'blue';
//     context.arc(250, 250, radiusMag, 0, 2 * Math.PI);
//     context.fill()
//     context.stroke()
//     context.closePath()
// }