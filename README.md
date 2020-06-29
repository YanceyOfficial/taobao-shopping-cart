# Vue练手 仿手淘H5购物车

## Screenshot

![仿手淘H5购物车](https://user-gold-cdn.xitu.io/2018/11/23/1673f3a2cecbba26?w=640&h=1138&f=gif&s=5211086)

## Introduction

最近一直在写React，Vue有段时间没写了，所以趁这个时间设计个Vue的小项目练练手。

年轻时在电商的公司实习过，所以还是打算写一个电商相关的小项目，也算是一个总结。
因此这次就拿手淘H5购物车开刀。

数据都是来自手淘的真实数据，也是观测了一段时间才定义好数据结构。
整个项目下来还是有不少收获，坑点慢慢都会总结到[个人博客](https://yanceyleo.com)里。

因为鄙人手底下只有一台6s Plus,所以只是在这台手机的Safari和Chrome下做了测试，如果在其他机子上有
问题欢迎提issue.

[仿手淘H5购物车 手机扫二维码直达️](https://shopping-cart.yancey.app)

![仿手淘H5购物车](https://yancey-assets.oss-cn-beijing.aliyuncs.com/1542942925.png)

## Usage

    ### Project setup
    
    yarn install
    
    ### Compiles and hot-reloads for development
    
    yarn run serve
    
    ### Compiles and minifies for production
    
    yarn run build
    
 
关于测试数据，可以进入`src/assets/mock/data.js`中修改，然后把console的数据复制到
`public/data.json`中即可。但是要保证`storeId`和`skuId`的唯一性。

## Tips

电商有两个概念，一个是SPU(Standard Product Unit)，另一个是SKU(Stock Keeping Unit)。

其中SPU就是一个独立商品，比如iPhone Xs，比如MacBook Pro.

而SKU是一个独立商品的类型组合单元，拿iPhone Xs为例，假设这款手机有两种属性，分别
是`颜色`和`容量存储`，假设有`黑、白、金`三种颜色，`16G 和 64G`两种容量存储，这意味着iPhone Xs
有六种组合方式，这六种组合方式会有`不同的价格`，不同的`货存量`，变态点儿还有不同的`促销方式`。

## License

Shopping-Cart-H5 is [MIT licensed](https://opensource.org/licenses/MIT).
