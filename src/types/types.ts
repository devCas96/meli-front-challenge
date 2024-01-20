//local interfaces

export interface IProductsLocal {
  author: IAuthor;
  categories: string[];
  items: IItem[];
}

export interface IAuthor {
  name: string;
  lastname: string;
}

export interface IItem {
  id: string;
  title: string;
  price: IPrice;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface IPrice {
  currency: string;
  amount: number;
  decimals: number;
}

//external API interfaces

export interface IApiData {
  product: IProductServices;
}

export interface IProductServices {
  site_id: SiteID;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: Result[];
  sort: Sort;
  available_sorts: Sort[];
  filters: Filter[];
  available_filters: AvailableFilter[];
  pdp_tracking: PDPTracking;
}

export interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: AvailableFilterValue[];
}

export interface AvailableFilterValue {
  id: string;
  name: string;
  results: number;
}

export interface Sort {
  id: string;
  name: string;
}

export interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

export interface FilterValue {
  id: string;
  name: string;
  path_from_root: Sort[];
}

export interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

export interface PDPTracking {
  group: boolean;
  product_info: ProductInfo[];
}

export interface ProductInfo {
  id: string;
  score: number;
  status: string;
}

export interface Result {
  id: string;
  title: string;
  condition: Condition;
  thumbnail_id: string;
  catalog_product_id: null | string;
  listing_type_id: ListingTypeID;
  permalink: string;
  buying_mode: BuyingMode;
  site_id: SiteID;
  category_id: CategoryID;
  domain_id: DomainID;
  thumbnail: string;
  currency_id: CurrencyID;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: null;
  available_quantity: number;
  official_store_id: null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: [];
  inventory_id: null;
  variation_filters?: string[];
  variations_data?: { [key: string]: VariationsDatum };
  differential_pricing?: DifferentialPricing;
}

export interface Attribute {
  id: ID;
  name: Name;
  value_id: null | string;
  value_name: null | string;
  attribute_group_id: AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  value_struct: Struct | null;
  values: AttributeValue[];
  source: number;
  value_type: ValueType;
}

export enum AttributeGroupID {
  Empty = '',
  Others = 'OTHERS',
}

export enum AttributeGroupName {
  Empty = '',
  Otros = 'Otros',
}

export enum ID {
  AlphanumericModel = 'ALPHANUMERIC_MODEL',
  Brand = 'BRAND',
  CableLength = 'CABLE_LENGTH',
  DetailedModel = 'DETAILED_MODEL',
  ItemCondition = 'ITEM_CONDITION',
  Length = 'LENGTH',
  Line = 'LINE',
  Model = 'MODEL',
  Weight = 'WEIGHT',
}

export enum Name {
  CondiciónDelÍtem = 'Condición del ítem',
  Largo = 'Largo',
  LargoDelCable = 'Largo del cable',
  Línea = 'Línea',
  Marca = 'Marca',
  Modelo = 'Modelo',
  ModeloAlfanumérico = 'Modelo alfanumérico',
  ModeloDetallado = 'Modelo detallado',
  Peso = 'Peso',
}

export interface Struct {
  number: number;
  unit: Unit;
}

export enum Unit {
  CM = 'cm',
  Kg = 'kg',
  LB = 'lb',
}

export enum ValueType {
  List = 'list',
  NumberUnit = 'number_unit',
  String = 'string',
}

export interface AttributeValue {
  id: null | string;
  name: null | string;
  struct: Struct | null;
  source: number;
}

export enum BuyingMode {
  BuyItNow = 'buy_it_now',
}

export enum CategoryID {
  Mla3697 = 'MLA3697',
  Mla431427 = 'MLA431427',
  Mla431483 = 'MLA431483',
  Mla8618 = 'MLA8618',
}

export enum Condition {
  New = 'new',
}

export enum CurrencyID {
  Ars = 'ARS',
}

export interface DifferentialPricing {
  id: number;
}

export enum DomainID {
  MlaDigitalPortableMediaPlayerCasesAndCovers = 'MLA-DIGITAL_PORTABLE_MEDIA_PLAYER_CASES_AND_COVERS',
  MlaHeadphones = 'MLA-HEADPHONES',
  MlaSpeakers = 'MLA-SPEAKERS',
}

export interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: CurrencyID;
}

export enum ListingTypeID {
  GoldPro = 'gold_pro',
  GoldSpecial = 'gold_special',
}

export interface Seller {
  id: number;
  nickname: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode: Mode;
  tags: Tag[];
  benefits: null;
  promise: null;
}

export enum LogisticType {
  CrossDocking = 'cross_docking',
  DropOff = 'drop_off',
  XdDropOff = 'xd_drop_off',
}

export enum Mode {
  Me2 = 'me2',
}

export enum Tag {
  MandatoryFreeShipping = 'mandatory_free_shipping',
  SelfServiceIn = 'self_service_in',
}

export enum SiteID {
  Mla = 'MLA',
}

export interface VariationsDatum {
  thumbnail: string;
  ratio: string;
  name: string;
  pictures_qty: number;
}
