const data = {
  // 店铺id
  store_id: '5be82ee2dc989f28b3c027eb',
  store_name: '人民教育出版社旗舰店',
  // 显示店铺类型logo tmall | enterprise
  store_type: 'tmall',
  // 满减 | 满赠
  store_promotion: '满100减30',
  // 商品列表
  commodity_list: [{
      // 商品id
      commodity_id: '5be82ee2dc989f28b3c027eb_a',
      // 商品标题
      commodity_name: '现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社',
      // 商品缩略图
      commodity_img: 'https://img.yanceyleo.com/xxx.webp',
      // 当前添加到购物车的数量
      cur_cart_num: 3,
      // 库存总剩余
      rest_stock: 20,
      // 单价
      unit_price: 36.8,
      // 购买上限 0表示无上限
      purchase_restriction_num: 3,
      // 是否属于天猫无忧商品
      is_tmall_wuyou: true,
      attrs: [{
          type: '颜色',
          list: ['高级黑', '东北银', '发条橙', '土豪金', '脑残粉', '茶婊绿', '古德白', '武藤蓝'],
        },
        {
          type: '套餐',
          list: ['亮铂金键盘套装', '灰钴蓝键盘套装', '深酒红键盘套装', '黑色键盘套装', '官方标配'],
        },
        {
          type: '网络类型',
          list: ['WIFI', 'WIFI + 4G', '深酒红键盘套装', '黑色键盘套装', '官方标配'],
        },
        {
          type: '存储容量',
          list: ['64G', '128G', '256G'],
        },
        {
          type: '特色服务',
          list: [{
            item: '全国联保[商家赠送]',
          }, ],
        },
      ],
    },
    {
      commodity_id: '5be82ee2dc989f28b3c027eb_b',
      commodity_name: '【人民出版社】人无远虑，必有近忧——江泽民战略决策研究',
      commodity_img: 'https://gw.alicdn.com/bao/uploaded/i4/TB1J2IOLXXXXXaZaXXXXXXXXXXX_!!0-item_pic.jpg_200x200q50s150.jpg',
      cur_cart_num: 3,
      rest_in_stock: -1,
      unit_price: 45,
      purchase_restriction_num: 0,
      is_tiaomao_wuyou: false,
      sku: [],
    },
    {
      commodity_id: '5be82ee2dc989f28b3c027eb_c',
      commodity_name: '【人民出版社】江泽民文选全三卷（普装）',
      commodity_img: 'https://gw.alicdn.com/bao/uploaded/i2/1642922453/O1CN011TzW1GPCLQtVK7J_!!0-item_pic.jpg_200x200q50s150.jpg',
      cur_cart_num: 3,
      rest_in_stock: -1,
      unit_price: 71.25,
      purchase_restriction_num: 0,
      is_tiaomao_wuyou: false,
      sku: [],
    },
  ],
  fail_commodity: [{
      commodity_id: 'xxx',
      commodity_name: '现货 他改变了中国 江泽民传 [美]罗伯特 劳伦斯 库恩 人物传记 正版图书籍 世纪文景 上海译文出版社',
      commodity_img: 'https://img.yanceyleo.com/xxx.webp',
      fail_reason: '货存不足',
    },
    {
      commodity_id: 'yyy',
      commodity_name: '他又变回去了',
      commodity_img: 'https://img.yanceyleo.com/xxx.webp',
      fail_reason: '河蟹',
    },
  ],
};
