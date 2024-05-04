var map;
var scale, toolBar, controlBar, overView
var container
var radiusMag;
var dmlist = [];
// var geojson_data = `{
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "沙湖公园",
//                 "intro": "沙湖位于武汉市武昌东北部，东邻中北路，南至小龟山，西抵武昌至大冶的铁路线，北达徐东路。清末修筑的粤汉铁路穿湖而过，路西为小沙湖，又名内沙湖，现已近乎湮没；路东为大沙湖，又名外沙湖，即沙湖"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.33407109323377,
//                     30.565188266834525
//                 ],
//                 "type": "Point"
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "沙湖运动公园",
//                 "intro": "沙湖运动公园位于沙湖旁， 是由武汉市体育局和武昌区体育局共同打造的“体育公园”。"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.32140529850949,
//                     30.570745143724253
//                 ],
//                 "type": "Point"
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "沙湖生态公园",
//                 "intro":"这是沙湖生态公园的简介"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.31673436472977,
//                     30.55971446760026
//                 ],
//                 "type": "Point"
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "南岸咀",
//                 "intro": "这是南岸咀的历史沿革以及景点简介。"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.28145577196938,
//                     30.56335761023503
//                 ],
//                 "type": "Point"
//             },
//             "id": 3
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "龟山公园",
//                 "intro": "这是龟山公园的景点简介。"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.270319446526,
//                     30.55753894009237
//                 ],
//                 "type": "Point"
//             },
//             "id": 4
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "湖北大学",
//                 "intro":"湖北大学（Hubei University），简称“湖大”，位于湖北省武汉市，是湖北省人民政府与教育部共建的省属重点综合性大学 [60]，位列湖北省“双一流”建设高校，入选国家“中西部高校基础能力建设工程”、“111计划”、湖北省2011计划、国家级大学生创新创业训练计划、国家级新工科研究与实践项目、数据中国“百校工程”，是全国深化创新创业教育改革示范高校、中国政府奖学金来华留学生接收院校、孔子学院奖学金接收院校。"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.3284511865291,
//                     30.579058373365257
//                 ],
//                 "type": "Point"
//             }
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "龙王庙公园",
//                 "intro": "这是龙王庙公园的历史沿革"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.28585289747485,
//                     30.569575682896513
//                 ],
//                 "type": "Point"
//             },
//             "id": 6
//         },
//         {
//             "type": "Feature",
//             "properties": {
//                 "name": "观江台",
//                 "intro": "这是观江台的景点简介以及历史沿革"
//             },
//             "geometry": {
//                 "coordinates": [
//                     114.29638084832885,
//                     30.584230208279806
//                 ],
//                 "type": "Point"
//             },
//             "id": 7
//         }
//     ]
// }`


var geojson_data = `{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.326351,
                    30.581168
                ]
            },
            "properties": {
                "name": "三板斧烧鸭煲（武昌店）",
                "keyword": "烧鸭煲",
                "rating": 4.6,
                "comment": "常来的馆子，菜很下饭，夏天有捞汁海鲜和冰饮"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.319827,
                    30.575391
                ]
            },
            "properties": {
                "name": "肖记公安牛肉鱼杂馆（三角路店）",
                "keyword": "牛肉三鲜",
                "rating": 4.6,
                "comment": "服务很好～味道也很好～两个人吃完全吃不完～份量超足!!!很下饭"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.321963,
                    30.581763
                ]
            },
            "properties": {
                "name": "18号酒馆·绿地酿造工厂（绿地缤纷城店）",
                "keyword": "爆浆金枪鱼",
                "rating": 4.6,
                "comment": "氛围不错，菜品好吃的，和朋友约会吃的很开心，牛肉和鸡扒都不错，推荐。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.321352,
                    30.585098
                ]
            },
            "properties": {
                "name": "鱼痴渔醉·食鲜集（月亮湾店）",
                "keyword": "红烧鳜鱼",
                "rating": 4.7,
                "comment": "这里的招牌活鱼，真的是量足、味美!红烧肉也是有点甜、软糯香...服务一流，热情周到!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.343396,
                    30.599566
                ]
            },
            "properties": {
                "name": "冯校长老火锅（武汉总店）",
                "keyword": "谷饲原切肥牛",
                "rating": 4.8,
                "comment": "绿茶味道爽口，火锅味道有点辣，但是还好是鸳鸯锅，味道地道，"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.342342,
                    30.595423
                ]
            },
            "properties": {
                "name": "肖婷姐·大铁锅重庆火锅（徐东店）",
                "keyword": "头牌鱼豆花",
                "rating": 4.9,
                "comment": "性价比很高，味道也不错的，棒棒哒"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.345893,
                    30.589453
                ]
            },
            "properties": {
                "name": "彤德捞轻火锅（徐东店）",
                "keyword": "内蒙小肥羊",
                "rating": 4.6,
                "comment": "环境很不错，菜也比较新鲜，还会再来"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.347519,
                    30.584204
                ]
            },
            "properties": {
                "name": "老妈烧菜馆牛板筋大王（徐东店）",
                "keyword": "牛板筋配牛腩",
                "rating": 4.6,
                "comment": "非常好吃，人很多，很划算，五星好评"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.35316,
                    30.579739
                ]
            },
            "properties": {
                "name": "肥仔虾庄·传奇油闷大虾（秦园店）",
                "keyword": "油焖大虾",
                "rating": 4.6,
                "comment": "口感非常好!特别满意!!值得推荐。虾子很饱满"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.33031,
                    30.5791
                ]
            },
            "properties": {
                "name": "酒拾烤肉（湖北大学店）",
                "keyword": "香辣牛肉",
                "rating": 4.8,
                "comment": "味道很不错，环境也很干净卫生，服务也很好，下次还来"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.280603,
                    30.599238
                ]
            },
            "properties": {
                "name": "悦得闲广式点心茶楼（万象城店）",
                "keyword": "金沙海虾红米肠",
                "rating": 4.7,
                "comment": "来了很多次了，乳鸽很好吃，小朋友都吃了半只，儿童套餐的菠萝饭小朋友也超级喜欢，还会再来的。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.288674,
                    30.595517
                ]
            },
            "properties": {
                "name": "龚兴城鱼羊吉·小亮蒸虾·家传湖北菜（苗栗路总店）",
                "keyword": "特色鱼羊吉",
                "rating": 4.8,
                "comment": "服务态度非常好，上午餐速度也很快，他们家的招牌鱼羊吉非常美味，下次还要来"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.294156,
                    30.599001
                ]
            },
            "properties": {
                "name": "皮皮火锅·社区老火锅（苗栗路店）",
                "keyword": "按摩嫩牛肉",
                "rating": 4.8,
                "comment": "非常好吃，份量大，服务好，值得推荐"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.298448,
                    30.594951
                ]
            },
            "properties": {
                "name": "丸美自助料理（中城国际店）",
                "keyword": "甜虾刺身",
                "rating": 4.6,
                "comment": "菜品新鲜，服务热情，体验感满满"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.283392,
                    30.587194
                ]
            },
            "properties": {
                "name": "粗茶淡饭·汉口公馆（循礼门店）",
                "keyword": "小米排骨",
                "rating": 4.6,
                "comment": "很喜欢这家店，菜品不踩雷。。。尤其喜欢麻酱凤尾"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.288772,
                    30.585831
                ]
            },
            "properties": {
                "name": "何师傅美蛙鱼头（南京路店）",
                "keyword": "美蛙鱼头",
                "rating": 4.5,
                "comment": "非常棒，鱼头非常新鲜，肉质饱满，非常大的份量"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.303293,
                    30.588215
                ]
            },
            "properties": {
                "name": "粗茶淡饭·兰亭别院（沿江路店）",
                "keyword": "麻辣凤尾",
                "rating": 4.6,
                "comment": "菜味道很好，位置也很不错，幽静，适合旅游后过来休息尝试一下，服务员服务也很好!非常不错"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.286224,
                    30.583142
                ]
            },
            "properties": {
                "name": "来菜·湖北头牌藕汤（江汉路M+旗舰店）",
                "keyword": "铫子筒骨煨藕汤",
                "rating": 4.5,
                "comment": "藕粉粉糯糯的，虽然排号但非常快，服务也很好"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.291059,
                    30.583915
                ]
            },
            "properties": {
                "name": "融厨湖北菜·铫子排骨藕汤（江汉路一店）",
                "keyword": "融厨招牌焖全牛",
                "rating": 4.5,
                "comment": "菜品口味地道湖北味道，藕汤太好喝，藕粉、汤浓、不油，藕条味道好极了，其他菜味道也不错。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.300571,
                    30.583167
                ]
            },
            "properties": {
                "name": "口口一（创始店）",
                "keyword": "红油冒蟹柳",
                "rating": 4.5,
                "comment": "这家店就在合作路上，鸭掌味道不错，QQ弹弹"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.290831,
                    30.581792
                ]
            },
            "properties": {
                "name": "锅捞大海成都火锅（江汉路步行街店）",
                "keyword": "白玉虾滑",
                "rating": 4.7,
                "comment": "环境不错，服务态度很好，小姐姐很漂亮，菜品很不错，"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.29095,
                    30.578324
                ]
            },
            "properties": {
                "name": "阿卡AK.Lab洋风韩餐（江汉路新佳丽店）",
                "keyword": "辣牛肉部队锅",
                "rating": 4.5,
                "comment": "太好吃啦!环境也不错，服务态度非常OK，这个部队锅很好吃!!五星好评!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.296798,
                    30.576296
                ]
            },
            "properties": {
                "name": "椰乡四季椰子鸡（江汉关店）",
                "keyword": "珍珠马蹄椰子鸡",
                "rating": 4.8,
                "comment": "店内环境大服务热情周到上菜速度快椰子鸡好吃...椰子现开了三个不错很新鲜。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.336444,
                    30.558149
                ]
            },
            "properties": {
                "name": "小龙坎火锅（汉街店）",
                "keyword": "小龙坎毛肚",
                "rating": 4.5,
                "comment": "装修的环境很好，服务也不错，购买的套餐分量也很多，很好吃，下次还来"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.315851,
                    30.551629
                ]
            },
            "properties": {
                "name": "我家小馆（昙华林店）",
                "keyword": "茶树菇碳烤肉",
                "rating": 4.7,
                "comment": "价格优惠，味道不错。还有水果饮料"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.343192,
                    30.555718
                ]
            },
            "properties": {
                "name": "赤牧日式烧肉自助（楚河汉街店）",
                "keyword": "极上牛肋条",
                "rating": 4.6,
                "comment": "太好吃啦，来了好几次了，推荐牛舌，环境和服务都很好"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.304014,
                    30.538945
                ]
            },
            "properties": {
                "name": "陈掌柜·地道湖北菜武昌鱼（黄鹤楼店）",
                "keyword": "陈氏蟹钳面",
                "rating": 4.7,
                "comment": "去黄鹤楼玩儿找到的店，没想到很火爆，幸好去得早，牛蛙和笋衣都好吃。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.317278,
                    30.543741
                ]
            },
            "properties": {
                "name": "小凤庭·地道湖北菜武昌鱼（黄鹤楼店）",
                "keyword": "松滋鸡",
                "rating": 4.7,
                "comment": "菜品色香味俱佳，环境古色古香，服务很好，很赞。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.333902,
                    30.537488
                ]
            },
            "properties": {
                "name": "秀玉coffee＆kitchen（中南星荟城店）",
                "keyword": "谷饲带骨猪扒",
                "rating": 4.5,
                "comment": "装修风格，好进门就有人接待，小哥哥小姐姐服务态度好，味道美极啦，无脑冲就行了。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.342891,
                    30.538463
                ]
            },
            "properties": {
                "name": "湖锦酒楼（八一路店）",
                "keyword": "葱烧武昌鱼",
                "rating": 4.6,
                "comment": "环境超级好，味道很正，在这旅游，在网上直接预约，下次还会过来，体验感非常好"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.339645,
                    30.552401
                ]
            },
            "properties": {
                "name": "楚词·武昌鱼湖北老菜（凯德1818店）",
                "keyword": "脆皮猪手",
                "rating": 4.6,
                "comment": "点心的品种很多，味道也很好，很适合家庭聚餐聊聊天喝喝茶～"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.340167,
                    30.529394
                ]
            },
            "properties": {
                "name": "兰湘子·湘菜小炒（武商梦时代店）",
                "keyword": "酸辣鸡胗",
                "rating": 4.9,
                "comment": "每道菜都特别棒!很好吃，分量也足，不错哦!好评!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.284616,
                    30.555943
                ]
            },
            "properties": {
                "name": "大胤艺术餐厅（晴川店）",
                "keyword": "招牌观音鸭",
                "rating": 4.8,
                "comment": "店内环境不错，节假日人有点多，招牌香酥鸭口感酥脆味道很好，菜品摆盘精致，服务热情"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.276169,
                    30.549954
                ]
            },
            "properties": {
                "name": "福宝漠北·牛羊肉（汉阳店）",
                "keyword": "清炖漠北羊汤",
                "rating": 4.5,
                "comment": "羊肉品质很好，味道好、服务好，家庭聚会订了一个包间，全家都很满意。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.276518,
                    30.541307
                ]
            },
            "properties": {
                "name": "老市井·牛杂专门店（汉阳江滩店）",
                "keyword": "市井牛杂煲",
                "rating": 4.5,
                "comment": "菜品超级棒，挨着江边环境超级好!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.273143,
                    30.537772
                ]
            },
            "properties": {
                "name": "KCOOKING概念韩餐（世贸52+店）",
                "keyword": "辛牛骨火锅",
                "rating": 4.5,
                "comment": "菜品很好，都不踩雷，很好吃，环境很好，会推荐给身边朋友一起来吃"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.264243,
                    30.537463
                ]
            },
            "properties": {
                "name": "雁南春（汉阳店）",
                "keyword": "吊烧琵琶鸭",
                "rating": 4.7,
                "comment": "上菜速度很快，味道不错，有宴席适合家庭"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.259623,
                    30.546559
                ]
            },
            "properties": {
                "name": "归元·禅了食堂（武汉首店）",
                "keyword": "佛陀饭",
                "rating": 4.0,
                "comment": "环境非常的有禅意，环境很好，不仅有精致出品，味道也是稳稳地在线。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.246087,
                    30.531365
                ]
            },
            "properties": {
                "name": "广顺兴（墨水湾店）",
                "keyword": "广顺兴猪肚鸡",
                "rating": 4.7,
                "comment": "真心很不错,色泽比较好,而且价格优惠价格实惠,服务周到,好评!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.267459,
                    30.56849
                ]
            },
            "properties": {
                "name": "布多斯烤肉火锅自助（武胜凯德店）",
                "keyword": "乳山生蚝",
                "rating": 4.6,
                "comment": "店内环境干净整洁，座位宽敞，食材区看着也很卫生"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.278031,
                    30.574421
                ]
            },
            "properties": {
                "name": "深巷佬灶·炭火老火锅（民意四路店）",
                "keyword": "炭火牛油老火锅",
                "rating": 4.5,
                "comment": "整体味道真的非常不错，而且装修很有七八十年代的感觉，绝对可以来一试。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.290246,
                    30.56714
                ]
            },
            "properties": {
                "name": "粤江轩·粤式晚茶（江滩店）",
                "keyword": "粤江轩虾饺皇",
                "rating": 4.3,
                "comment": "就在江边，可以选择在室内或者室外就餐"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.376582,
                    30.626409
                ]
            },
            "properties": {
                "name": "仓桥家·锅物·焗寿司（武汉城市奥莱店）",
                "keyword": "鳗鱼焗卷",
                "rating": 4.6,
                "comment": "店子日式装修风格，整洁而又舒适，味道都不错，都很合我们的口味，下次还会再来。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.361663,
                    30.620347
                ]
            },
            "properties": {
                "name": "胖记烤肉（奥山店）",
                "keyword": "酱香五花肉",
                "rating": 4.6,
                "comment": "朋友推荐的店，装修复古时尚潮流还有氛围感，食材的种类丰富，味道不错。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.363026,
                    30.599588
                ]
            },
            "properties": {
                "name": "左大炮·藕汤印象（铁机新居店）",
                "keyword": "砂锅生态鱼头",
                "rating": 4.9,
                "comment": "藕汤印象，藕汤是他们家的特色菜，每次来都是必点菜之一，莲藕粉糯绵密，入口即化，虾肉新鲜入味，味道超赞。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.366861,
                    30.585946
                ]
            },
            "properties": {
                "name": "皮皮大排档（东沙花园店）",
                "keyword": "猪蹄牛蛙吊锅",
                "rating": 4.7,
                "comment": "大夏天的和朋友聚会的首选，在露天喝啤酒吹风的感觉非常非常棒。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.38674,
                    30.58885
                ]
            },
            "properties": {
                "name": "曼哈顿美式餐吧（东方里华侨城店）",
                "keyword": "西部火焰牛仔腿",
                "rating": 4.7,
                "comment": "很美式的风格，有驻唱感觉挺好，团了一个套餐"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.364177,
                    30.581752
                ]
            },
            "properties": {
                "name": "大可酸菜鱼(岳家嘴店)",
                "keyword": "烧椒酸菜鱼",
                "rating": 4.9,
                "comment": "鲜鱼活杀，有一个特点就是，上菜会稍微慢一点，但食材的口感和质量有保证，酸菜鱼是他家的招牌。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.393051,
                    30.621201
                ]
            },
            "properties": {
                "name": "闲云无敌·锤子老火锅(恩施街店)",
                "keyword": "手打黑虎虾滑",
                "rating": 4.7,
                "comment": "锤子老火锅装修很简单水泥风格，很有90年代的味道，火锅的味道也非常的，是碳火的火源让涮出来的食材非常的香"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.352039,
                    30.598893
                ]
            },
            "properties": {
                "name": "醉东湖精致湖北菜(友谊大道恒庆花园店)",
                "keyword": "江城牛三鲜",
                "rating": 5.0,
                "comment": "干锅手撕鸡好吃，藕汤很鲜很好喝，我们俩给藕汤喝完了都。牛肉饼量很足超级香超级酥脆。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.404978,
                    30.624983
                ]
            },
            "properties": {
                "name": "蒋先生·烧菜馆(工业四路店)",
                "keyword": "客家豆腐煲",
                "rating": 4.8,
                "comment": "价格很实惠，分量特别足，食材新鲜。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.321333,
                    30.525419
                ]
            },
            "properties": {
                "name": "饭橘汉江码头·湖北头牌黄焖鱼(东方雅园店)",
                "keyword": "黄焖黄骨鱼",
                "rating": 4.7,
                "comment": "味道非常不错，份量足，食材都很新鲜，老少皆宜。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.39639,
                    30.632942
                ]
            },
            "properties": {
                "name": "清山小镇那家小馆(烟草店)",
                "keyword": "鱼头泡饭",
                "rating": 4.6,
                "comment": "分量超足，甲鱼焖牛蹄筋软烂可口，藕汤里的藕像板栗软糯香甜。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.425063,
                    30.598239
                ]
            },
            "properties": {
                "name": "东湖印象·花园餐厅",
                "keyword": "意境东坡肉",
                "rating": 4.5,
                "comment": "环境特别好，一进门很好看的樱花还有喷泉，服务人员也很热心。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.420678,
                    30.609326
                ]
            },
            "properties": {
                "name": "汉煨·老手艺煨汤专门店(高铁站店)",
                "keyword": "枣香红烧肉",
                "rating": 4.7,
                "comment": "位置就在车站旁边，整体如果从菜品的评价来说也就藕汤还可以，汤比较鲜美并且排骨软烂、莲藕也是拉丝的。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.40497,
                    30.618722
                ]
            },
            "properties": {
                "name": "味派菜园子(武汉站店)",
                "keyword": "农家土豆仔",
                "rating": 4.5,
                "comment": "食材新鲜，色香味俱全、服务态度极好，性价比非常高"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.354896,
                    30.525284
                ]
            },
            "properties": {
                "name": "南棠馆(群光店)",
                "keyword": "百合酱蒸凤爪",
                "rating": 4.6,
                "comment": "菜品不错，摆盘也挺精致，味道也挺好，"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.363666,
                    30.526562
                ]
            },
            "properties": {
                "name": "rexpizza雷克斯披萨(武大店)",
                "keyword": "玛格丽特披萨",
                "rating": 4.5,
                "comment": "雷克斯披萨不仅环境舒适，服务亲切，更重要的是他们的美食真的太棒了!十分推荐!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.366064,
                    30.508239
                ]
            },
            "properties": {
                "name": "辛香味·砂锅·烧鱼·藕汤(卓刀泉广场店)",
                "keyword": "萝卜炖牛腩",
                "rating": 4.7,
                "comment": "环境很好，味道也非常不错，菜的分量也比较多，强烈推荐"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.372116,
                    30.530983
                ]
            },
            "properties": {
                "name": "辛村洛概念韩餐(八一路东湖村店)",
                "keyword": "四季菜炒年糕",
                "rating": 4.5,
                "comment": "装修整体很暖色调，韩式料理标准小木屋风格，餐品味道不错，完全没有踩雷"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.343527,
                    30.510517
                ]
            },
            "properties": {
                "name": "九龙大酒店·金牌楚菜(雄楚店)",
                "keyword": "蒜茸生焗虾",
                "rating": 4.4,
                "comment": "准荐他家的野生菌菇汤，喝了好几次，汤头鲜美"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.370512,
                    30.498102
                ]
            },
            "properties": {
                "name": "稻中宴·雅致宴请(楚康路店)",
                "keyword": "桂花红烧肉",
                "rating": 4.6,
                "comment": "菜品很精致，摆盘很用心，像艺术品。味道也很不错，买的套餐搭配的很好。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.37959,
                    30.593043
                ]
            },
            "properties": {
                "name": "何师傅美蛙鱼头(东湖城店)",
                "keyword": "花鲢鱼头",
                "rating": 4.7,
                "comment": "蛙的肉质很嫩，小龙虾很入味"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.384956,
                    30.60385
                ]
            },
            "properties": {
                "name": "牛很鲜潮汕牛肉火锅(金地广场店)",
                "keyword": "招牌牛大骨汤锅",
                "rating": 4.7,
                "comment": "牛肉的味道很不错，很鲜美，很嫩，而且很新鲜，水饺的味道也不错"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.371909,
                    30.604749
                ]
            },
            "properties": {
                "name": "东北菜大灶台(青城第一街店)",
                "keyword": "铁锅炖小鸡",
                "rating": 4.6,
                "comment": "东北大拉皮味道超级好，酱汁特别美味，红肠也不错"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.293086,
                    30.542748
                ]
            },
            "properties": {
                "name": "捞旺猪肚鸡(司门口店)",
                "keyword": "胡椒猪肚鸡",
                "rating": 4.6,
                "comment": "猪肚鸡特别鲜美一点不腥，喝了好几碗汤!吃完可以下肉，肉很嫩！"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.295813,
                    30.55107
                ]
            },
            "properties": {
                "name": "楚鲜生湖鱼味道",
                "keyword": "梅干菜蹄花",
                "rating": 4.8,
                "comment": "食材都是现做，鱼市现场宰，非常新鲜。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.297081,
                    30.535317
                ]
            },
            "properties": {
                "name": "双湖园(解放路店)",
                "keyword": "鹅肝酱藕夹",
                "rating": 4.7,
                "comment": "十年老店果然名不虚传，很地道的湖北口味"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.350485,
                    30.563302
                ]
            },
            "properties": {
                "name": "膳顶牛潮汕牛肉火锅(青鱼嘴店)",
                "keyword": "潮汕炸豆皮",
                "rating": 4.6,
                "comment": "很喜欢他们家牛肉，特别新鲜，菜品也特别新鲜，看得到每个出菜口的流程，非常卫生"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.358733,
                    30.56413
                ]
            },
            "properties": {
                "name": "和风雅厨·地道湖北菜(省博物馆店)",
                "keyword": "香汁煎虾仁",
                "rating": 4.5,
                "comment": "服务员很热情周到，环境也很干净安静，菜品味道很好"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.359513,
                    30.573889
                ]
            },
            "properties": {
                "name": "左邻右舍街坊菜馆",
                "keyword": "雪菜小黄鱼",
                "rating": 4.4,
                "comment": "藕汤很好喝，泥蒿也很嫩，总体还是不错的"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.319133,
                    30.500594
                ]
            },
            "properties": {
                "name": "朱光玉火锅馆(南湖店)",
                "keyword": "藤椒牛舌",
                "rating": 4.8,
                "comment": "环境营造很有感觉，有市井气，接地气的风格!肉很嫩，非常新鲜。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.31245,
                    30.488914
                ]
            },
            "properties": {
                "name": "好水鱼·上宴(南湖店)",
                "keyword": "钙骨老豆腐",
                "rating": 4.6,
                "comment": "服务员接待热情，鱼很嫩，味道不错"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.324111,
                    30.496927
                ]
            },
            "properties": {
                "name": "北纬三十七度创意料理(南湖总店)",
                "keyword": "北纬牛舌饭",
                "rating": 4.5,
                "comment": "南湖的一家宝藏日料店，强烈推荐喜欢日料的朋友来试试。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.329962,
                    30.503075
                ]
            },
            "properties": {
                "name": "U你·湖北家宴菜(南湖店)",
                "keyword": "铁板烧汁鲈鱼",
                "rating": 4.6,
                "comment": "体验感很棒的一家店，食物的口感都非常好，服务和环境也非常棒!"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.292589,
                    30.522892
                ]
            },
            "properties": {
                "name": "山农记·寻味家宴(武金堤江景阁店)",
                "keyword": "恩施腊猪脚",
                "rating": 5.0,
                "comment": "性价比高，定位适大众,菜品味道很棒，服务周到"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.295971,
                    30.504254
                ]
            },
            "properties": {
                "name": "菠乐西餐厅(季佳荟店)",
                "keyword": "鲜虾野菌忌廉汤",
                "rating": 4.8,
                "comment": "餐品每一个都没让我们失望，店里环境很不错，性价比超高的西餐，值得推荐给身边的朋友。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.261833,
                    30.601864
                ]
            },
            "properties": {
                "name": "The boots泥靴Get holiday(华发中城商都店)",
                "keyword": "珍品雪花牛小排皇",
                "rating": 4.7,
                "comment": "泥靴西餐厅，环境真好，浪漫的氛围，很适合打卡约会。菜品的味道也很棒，非常好吃。"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.254943,
                    30.587714
                ]
            },
            "properties": {
                "name": "谢氏老金口渔村(王家墩店)",
                "keyword": "柴火豆腐",
                "rating": 4.7,
                "comment": "装修很有氛围，人气很旺，菜品的味道不错，值得推荐"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    114.254943,
                    30.587714
                ]
            },
            "properties": {
                "name": "一家(破)烧烤店(妙墩路店)",
                "keyword": "肥肠炒饭",
                "rating": 4.5,
                "comment": "食材优质，烤制技术也非常精湛，每一道菜品都能感受到店家的用心和诚意。"
            }
        }
    ]
}`

function init() {

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

    // console.log("markerlist:\n", markerlist);
    var markerList = geoJsonMarker(geojson_data);
    map.add(markerList);
    // console.log(markerList);

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
            dmlist.splice(0, dmlist.length);

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
            dmlist.splice(0, dmlist.length);

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

    // 绘制放大镜
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
            contextDmk.fillStyle = item.color;
            contextDmk.font = '20px 微软雅黑';
            item.x--;
            contextDmk.fillText(item.content, item.x, item.y);
            // var fontWidth = contextDmk.measureText(item.content).width;
            // // 删除
            // dmlist = dmlist.filter(item => {
            //     return item.x + fontWidth > 0;
            // })
        })

        dmlist = dmlist.filter((danmaku) => {
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

        //被选中的marker的列表
        var containedPOI = [];

        setTimeout(function () {
            containedPOI = getPOIinCircle(overlays, circle);
            circle.destroy();

            containedPOI.forEach((item) => {
                // console.log(item.getExtData())
                // addDanmaku(item.getExtData().intro)
                var danmaku = item._opts.pname +"："+ item.getExtData().comment;
                var rating = Number(item.getExtData().rating);
                var dmColor;
                if(rating>=4.8){
                    dmColor = "rgb(255,0,0)";
                }else if(rating <4.8 && rating >= 4.5){
                    dmColor = "rgb(0,0,255)";
                }else{
                    dmColor = "rgb(255,255,255)";
                }
                addDanmaku(danmaku,dmColor);
            })
        }, 50)

    });

    map.on("rightclick", (e) => {
        var magButton = document.getElementById("magButton");

        var btnState = magButton.getAttribute("clickState");
        console.log(btnState);
        if (btnState === "true") {
            var overlays = getCircleMarker();

            var circle = createMagCircle(map, mousePosition, e.lnglat, radiusMag);
            map.add(circle);
    
            console.log("map right click");
            //被选中的marker的列表
            var containedPOI = [];
    
            var cloudDiv = createDiv();
            document.body.insertBefore(cloudDiv, canvas);
            cloudDiv.style.left = mousePosition[0] - 250 + "px";
            cloudDiv.style.top = mousePosition[1] - 250 + "px";
    
            
    
            setTimeout(function () {
                containedPOI = getPOIinCircle(overlays, circle);
                circle.destroy();
    
                var keywordslist = createKeyWords(e.lnglat,containedPOI);
                console.log("---------keywordslist:",keywordslist)
                TJ_GJC(keywordslist,radiusMag);
                
            }, 50)
        }


    });

    map.on("mousemove", () => {
        if (dmlist.length > 0) {
            dmlist.splice(0, dmlist.length);
        }

        var wordCloudDiv = document.getElementById("wordCloudDiv");
        if (wordCloudDiv){
            wordCloudDiv.remove();
        }

    });

    //添加弹幕
    var addDanmaku = function (content,dmcolor) {

        // 封装为dm对象，存入dmlist
        dmlist.push({
            content: content,
            x: 250 + radiusMag + Math.random() * 50,
            // y: (Math.floor(Math.random() * 12) + 1) * 30
            y: Math.floor(Math.random() * (radiusMag - 20 - (-radiusMag + 20) + 1)) + (-radiusMag + 20) + 250,
            "color": dmcolor
        });
        console.log("danmakuList:\n", dmlist);
    }

    var magButton = document.getElementById("magButton");
    magButton.addEventListener("click", () => {
        var btnState = magButton.getAttribute("clickState");
        if (btnState === "true") {
            context.clearRect(0, 0, 500, 500);
            magButton.setAttribute("clickState", "false");

            canvasDmk.width = canvasDmk.width
            dmlist.splice(0, dmlist.length)

        } else if (btnState === "false") {
            drawMagnify();
            magButton.setAttribute("clickState", "true");
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
                intro: item.properties.intro,
                rating: item.properties.rating,
                keyword: item.properties.keyword,
                comment: item.properties.comment
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

function createDiv() {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "wordCloudDiv");
    newDiv.style.height = newDiv.style.width = "500px";
    newDiv.style.zIndex = "99";
    newDiv.style.position = "absolute";
    newDiv.style.pointerEvents = "none";

    return newDiv;
}

function createKeyWords(centerLngLat,markerlist) {
    var list = []
    markerlist.forEach((item) => {
        console.log(item._opts.center)
        var distance = Math.round(centerLngLat.distance(item._opts.center))
        var color ='rgb(' + [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
            ].join(',') + ')';

        var i = { 
            "name": item.getExtData().keyword, 
            "value": distance ,
            "textStyle": {
                "color": color
            },
        }
        list.push(i);
    })
    return list;
}

function TJ_GJC(keywords,radius) {
    var myChart = echarts.init(document.getElementById('wordCloudDiv'));
    // console.log(keywords)

    var option = {
        series: [{
            type: 'wordCloud',
            //maskImage: maskImage,
            sizeRange: [15, 30],
            rotationRange: [0, 0],
            rotationStep: 45,
            drawOutOfBound: false,
            shrinkToFit: true,
            gridSize: 8,
            layoutAnimation: true,
            // shape: 'circle',
            width: radius*Math.sqrt(2)+"px",
            height: radius*Math.sqrt(2)+'px',
            textStyle: {
                normal: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'normal'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: keywords
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}