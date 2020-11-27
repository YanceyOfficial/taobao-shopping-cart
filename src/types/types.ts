export interface CommodityBase {
  commodity_id: string
  commodity_name: string
  commodity_img: string
}

export interface Commodity extends CommodityBase {
  sku_id: string
  cur_cart_num: number
  type_union: string[]
  sku_rest_stock: number
  sku_unit_price: number
  is_tmall_wuyou: boolean
  warning_msg: string[]
  purchase_restriction_num: number
}

export interface InvalidCommodity extends CommodityBase {
  pre_hot: boolean
  fail_reason: string
}

export interface ValidCommodity {
  store_id: string
  store_name: string
  store_type: number
  store_promotion: string
  coupon: boolean
  commodity_list: Commodity[]
}

export interface ShoppingCartData {
  total_number: number
  vaild_commodities: ValidCommodity[]
  invaild_commodities: InvalidCommodity[]
}

export interface SelectedCommodity {
  curNum: number
  skuId: string
  unitPrice: number
}

export interface Dict<T> {
  [index: string]: T
}
