//=== UqApp builder created on Mon Mar 29 2021 17:19:11 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqSheet, UqBook, UqQuery, UqMap, UqHistory, UqPending } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/salesTask ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface Tuid$sheet {
	no: string;
	user: number;
	date: any;
	sheet: number;
	version: number;
	flow: number;
	app: number;
	state: number;
	discription: string;
	data: string;
	processing: number;
}

export interface TuidCustomer {
	name: string;
	firstName: string;
	lastName: string;
	xyz: string;
	gender: string;
	salutation: string;
	birthDay: any;
	createTime: any;
	isValid: number;
}

export interface TuidOrganization {
	name: string;
}

export interface TuidEmployee {
	firstName: string;
	lastName: string;
}

export interface TuidBrand {
	name: string;
}

export interface TuidProductX {
	brand: number;
	origin: string;
	description: string;
	descriptionC: string;
}

export interface TuidTask {
	description: string;
	customer: number;
	type: number;
	biz: number;
	priorty: number;
	deadline: any;
	createTime: any;
	sourceID: number;
	sourceType: string;
	sourceNo: string;
}

export interface TuidTaskType {
	name: string;
	description: string;
}

export interface TuidJkTaskType {
	name: string;
	TimeLimit: number;
	no: number;
}

export interface TuidJkTask {
	description: string;
	customer: number;
	jktype: number;
	type: number;
	biz: number;
	employee: number;
	priorty: number;
	deadline: any;
	createTime: any;
	completeTime: any;
	sourceID: number;
	sourceType: string;
	sourceNo: string;
	no: number;
	isValid: number;
}

export interface TuidBizType {
	name: string;
	description: string;
}

export interface TuidField {
	name: string;
	json: string;
}

export interface TuidTaskStatus {
	name: string;
}

export interface TuidProject {
	name: string;
}

export interface TuidMyCustomer {
	unit: number;
	name: string;
	firstName: string;
	lastName: string;
	address: number;
	addressString: string;
	telephone: string;
	mobile: string;
	gender: string;
	birthDay: any;
	email: string;
	wechat: string;
	teacher: string;
	potential: number;
	user: number;
	no: number;
	research: number;
	salutation: string;
	createTime: any;
	isValid: number;
}

export interface TuidMyCustomerUnit {
	name: string;
	user: number;
	no: number;
	createTime: any;
	isValid: number;
}

export interface TuidMessage {
	note: string;
	date: any;
	user: number;
	peer: number;
}

export interface TuidCoupon {
	code: string;
	types: string;
	user: number;
	customer: number;
	validitydate: any;
	discount: number;
	preferential: number;
	createTime: any;
	isValid: number;
}

export interface TuidAddress {
	country: number;
	province: number;
	city: number;
	county: number;
	zip: string;
	description: string;
}

export interface TuidCountry {
	code: string;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidProvince {
	country: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidCity {
	province: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidCounty {
	city: number;
	englishName: string;
	chineseName: string;
	no: string;
}

export interface TuidSalesRegion {
	name: string;
	currency: number;
	no: string;
}

export interface TuidCurrency {
	name: string;
	suffix: string;
}

export interface TuidInvoiceType {
	description: string;
}

export interface TuidWithdrawalState {
	name: string;
}

export interface TuidPOST {
	caption: string;
	discription: string;
}

export interface TuidOfficePost {
	name: string;
	no: string;
	createTime: any;
}

export interface TuidDepartment {
	name: string;
	organization: number;
	no: string;
	createTime: any;
}

export interface TuidResearch {
	name: string;
	no: string;
	createTime: any;
}

export interface TuidVIPCardType {
}

export interface TuidDomain {
	name: string;
	parent: number;
}

export interface ParamCompletionTask {
	taskid: number;
	resultType: string;
	result: string;
	fields: {
		fieldName: string;
		value: string;
	}[];

}
interface ResultCompletionTask {
}

export interface ParamCompletionCustomerInfoTask {
	taskid: number;
	resultType: string;
	result: string;
	fields: {
		fieldName: string;
		value: string;
	}[];

}
interface ResultCompletionCustomerInfoTask {
}

export interface ParamInvalidTask {
	taskid: number;
	resultType: string;
	result: string;
}
interface ResultInvalidTask {
}

export interface ParamExtensionTask {
	taskid: number;
	remindDate: any;
	result: string;
}
interface ResultExtensionTask {
}

export interface ParamAddTask {
	description: string;
	customer: number;
	type: number;
	biz: number;
	sourceID: number;
	sourceType: string;
	sourceNo: string;
	priorty: number;
	deadline: any;
}
interface ReturnAddTaskRet {
	id: number;
}
interface ResultAddTask {
	ret: ReturnAddTaskRet[];
}

export interface ParamImportTask {
	task: number;
	customername: string;
	organization: number;
	organizationName: string;
}
interface ReturnImportTaskRet {
	id: number;
	customer: number;
	description: string;
}
interface ResultImportTask {
	ret: ReturnImportTaskRet[];
}

export interface ParamCreateTaskProduct {
	taskid: number;
	productid: number;
	note: string;
}
interface ResultCreateTaskProduct {
}

export interface ParamCreateTaskProductPack {
	task: number;
	product: number;
	pack: number;
	note: string;
}
interface ResultCreateTaskProductPack {
}

export interface ParamCreateTaskProject {
	taskid: number;
	note: string;
}
interface ResultCreateTaskProject {
}

export interface ParamCreatePosition {
	invitacode: number;
}
interface ReturnCreatePositionRet {
	succeed: number;
	code: number;
}
interface ResultCreatePosition {
	ret: ReturnCreatePositionRet[];
}

export interface ParamCreateMyCustomer {
	unit: number;
	no: number;
	name: string;
	firstName: string;
	lastName: string;
	gender: string;
	salutation: string;
	telephone: string;
	mobile: string;
	newcustomerid: number;
}
interface ReturnCreateMyCustomerRet {
	code: number;
}
interface ResultCreateMyCustomer {
	ret: ReturnCreateMyCustomerRet[];
}

export interface ParamCreateMyCustomerUnit {
	name: string;
}
interface ReturnCreateMyCustomerUnitRet {
	id: number;
}
interface ResultCreateMyCustomerUnit {
	ret: ReturnCreateMyCustomerUnitRet[];
}

export interface ParamSavePeerAssigned {
	peer: number;
	Assigned: string;
}
interface ResultSavePeerAssigned {
}

export interface ParamUpdateNowMessage {
}
interface ResultUpdateNowMessage {
}

export interface ParamCreateCoupon {
	webUser: number;
	validitydate: any;
	discount: number;
	types: string;
}
interface ReturnCreateCouponRet {
	coupon: number;
	code: string;
}
interface ResultCreateCoupon {
	ret: ReturnCreateCouponRet[];
}

export interface ParamIsCanUseCoupon {
	code: string;
	webUser: number;
}
interface ReturnIsCanUseCouponRet {
	result: number;
	id: number;
	code: string;
	user: number;
	webuser: number;
	discount: number;
	preferential: number;
	validitydate: any;
	types: string;
	isValid: number;
}
interface ResultIsCanUseCoupon {
	ret: ReturnIsCanUseCouponRet[];
}

export interface ParamTestBus1 {
}
interface ResultTestBus1 {
}

export interface ParamUpateCustomerMyCustomerMap {
	_mycustomer: number;
	_customer: number;
	_webuser: number;
}
interface ResultUpateCustomerMyCustomerMap {
}

export interface ParamComputeAchievement {
}
interface ReturnComputeAchievementRet {
	oneSaleVolume_1: number;
	oneMaxVolume: number;
	price: number;
	agentprices: number;
	quantity: number;
	oneRate_1: number;
	oneExcess: number;
	oneNotExcess: number;
	oneRate: number;
	result: number;
}
interface ResultComputeAchievement {
	ret: ReturnComputeAchievementRet[];
}

export interface ParamAddWebUserAccountMap {
	webuser: number;
	telephone: string;
	identitycard: string;
	identityicon: string;
	identityname: string;
	subbranchbank: string;
	bankaccountnumber: string;
}
interface ResultAddWebUserAccountMap {
}

export interface ParamComputeBalance {
}
interface ResultComputeBalance {
}

export interface ParamAddMyCustomerPost {
	customer: number;
	post: number;
}
interface ResultAddMyCustomerPost {
}

export interface ParamAddCouponSendHistory {
	code: string;
}
interface ResultAddCouponSendHistory {
}

export interface SheetWithdrawal {
	webUser: number;
	amount: number;
	currency: number;}

export interface ParamSearchTask {
	customer: number;
}
interface ReturnSearchTaskRet {
	id: number;
	description: string;
	customer: number;
	type: number;
	typeName: string;
	biz: number;
	bizName: string;
	sourceID: number;
	sourceType: string;
	sourceNo: string;
	priorty: number;
	deadline: any;
	remindDate: any;
	createTime: any;
}
interface ResultSearchTask {
	ret: ReturnSearchTaskRet[];
}

export interface ParamSearchHistoryTask {
	taskid: number;
}
interface ReturnSearchHistoryTaskRet {
	date: any;
	task: number;
	status: number;
	principal: number;
	resultType: string;
	result: string;
}
interface ResultSearchHistoryTask {
	ret: ReturnSearchHistoryTaskRet[];
}

export interface ParamSearchHistoryTaskByCustomer {
	customerid: number;
	types: number;
}
interface ReturnSearchHistoryTaskByCustomerRet {
	date: any;
	id: number;
	description: string;
	customer: number;
	deadline: any;
	type: number;
	biz: number;
	status: number;
	resultType: string;
	result: string;
}
interface ResultSearchHistoryTaskByCustomer {
	ret: ReturnSearchHistoryTaskByCustomerRet[];
}

export interface ParamSearchHistoryTaskByEmployee {
}
interface ReturnSearchHistoryTaskByEmployee$page {
	id: number;
	description: string;
	customer: number;
	type: number;
	typeName: string;
	biz: number;
	bizName: string;
	sourceID: number;
	sourceType: string;
	sourceNo: string;
	priorty: number;
	deadline: any;
	createTime: any;
}
interface ResultSearchHistoryTaskByEmployee {
	$page: ReturnSearchHistoryTaskByEmployee$page[];
}

export interface ParamSearchTaskCompletion {
	taskid: number;
}
interface ReturnSearchTaskCompletionRet {
	task: number;
	field: string;
	value: number;
	note: string;
	fieldName: string;
}
interface ResultSearchTaskCompletion {
	ret: ReturnSearchTaskCompletionRet[];
}

export interface ParamSearchTaskProduct {
	taskid: number;
}
interface ReturnSearchTaskProductRet {
	task: number;
	product: number;
	note: string;
}
interface ResultSearchTaskProduct {
	ret: ReturnSearchTaskProductRet[];
}

export interface ParamSearchTaskProductPack {
	taskid: number;
}
interface ReturnSearchTaskProductPackRet {
	task: number;
	product: number;
	pack: number;
	note: string;
}
interface ResultSearchTaskProductPack {
	ret: ReturnSearchTaskProductPackRet[];
}

export interface ParamSearchTaskProject {
	taskid: number;
}
interface ReturnSearchTaskProjectRet {
	task: number;
	project: number;
	note: string;
}
interface ResultSearchTaskProject {
	ret: ReturnSearchTaskProjectRet[];
}

export interface ParamSearchPosition {
	position: number;
}
interface ReturnSearchPositionRet {
	user: number;
	post: number;
	code: number;
}
interface ResultSearchPosition {
	ret: ReturnSearchPositionRet[];
}

export interface ParamSearchAchievement {
	user: number;
}
interface ReturnSearchAchievementRet {
	user: number;
	oneSaleVolume: number;
	twoSaleVolume: number;
	threeSaleVolume: number;
	oneAchievement: number;
	twoAchievement: number;
	threeAchievement: number;
	teamCount: number;
	innerteamCount: number;
	customerCount: number;
	activeCustomerCount: number;
	totalOrderCount: number;
	totalReceivableAmount: number;
	totalaWithdrawal: number;
	waitWithdrawal: number;
	level: number;
}
interface ResultSearchAchievement {
	ret: ReturnSearchAchievementRet[];
}

export interface ParamSearchTeam {
}
interface ReturnSearchTeamRet {
	parent: number;
	children: number;
	parentcode: number;
	childrencode: number;
	assigned: string;
	volume: number;
}
interface ResultSearchTeam {
	ret: ReturnSearchTeamRet[];
}

export interface ParamSearchMyCustomer {
	key: string;
}
interface ReturnSearchMyCustomer$page {
	id: number;
	unit: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	telephone: string;
	mobile: string;
	gender: string;
	birthDay: any;
	email: string;
	wechat: string;
	teacher: string;
	potential: number;
	research: number;
	salutation: string;
	createTime: any;
	address: number;
	addressString: string;
	validity: any;
}
interface ResultSearchMyCustomer {
	$page: ReturnSearchMyCustomer$page[];
}

export interface ParamSearchMyCustomerUnit {
	key: string;
}
interface ReturnSearchMyCustomerUnit$page {
	id: number;
	no: string;
	name: string;
	createTime: any;
	isValid: number;
}
interface ResultSearchMyCustomerUnit {
	$page: ReturnSearchMyCustomerUnit$page[];
}

export interface ParamSearchMessage {
}
interface ReturnSearchMessage$page {
	id: number;
	date: any;
	note: string;
	user: number;
	peer: number;
}
interface ResultSearchMessage {
	$page: ReturnSearchMessage$page[];
}

export interface ParamSearchNowMessage {
}
interface ReturnSearchNowMessageRet {
	count: number;
}
interface ResultSearchNowMessage {
	ret: ReturnSearchNowMessageRet[];
}

export interface ParamSearchCoupon {
	key: string;
	types: string;
}
interface ReturnSearchCoupon$page {
	id: number;
	code: number;
	user: number;
	validitydate: any;
	discount: number;
	preferential: number;
	createTime: any;
	isValid: number;
	couponCount: number;
}
interface ResultSearchCoupon {
	$page: ReturnSearchCoupon$page[];
}

export interface ParamSearchJKTask {
	key: string;
}
interface ReturnSearchJKTask$page {
	id: number;
	description: string;
	customer: number;
	type: number;
	biz: number;
	employee: number;
	sourceID: number;
	sourceType: string;
	sourceNo: string;
	priorty: number;
	deadline: any;
	createTime: any;
}
interface ResultSearchJKTask {
	$page: ReturnSearchJKTask$page[];
}

export interface ParamSearchAchievementHistory {
	types: number;
	state: number;
}
interface ReturnSearchAchievementHistoryRet {
	date: any;
	sales: number;
	webuser: number;
	mycustomer: number;
	order: number;
	orderno: string;
	ordertype: string;
	types: number;
	amount: number;
	orderAmount: number;
	state: number;
}
interface ResultSearchAchievementHistory {
	ret: ReturnSearchAchievementHistoryRet[];
}

export interface ParamSearchCustomerMyCustomerMap {
	_mycustomer: number;
}
interface ReturnSearchCustomerMyCustomerMapRet {
	mycustomer: number;
	customer: number;
	webuser: number;
}
interface ResultSearchCustomerMyCustomerMap {
	ret: ReturnSearchCustomerMyCustomerMapRet[];
}

export interface ParamMyCustomerIsOccupy {
	_customer: number;
}
interface ReturnMyCustomerIsOccupyRet {
	code: number;
}
interface ResultMyCustomerIsOccupy {
	ret: ReturnMyCustomerIsOccupyRet[];
}

export interface ParamSearchMyCustomerActive {
	key: string;
	type: number;
}
interface ReturnSearchMyCustomerActive$page {
	id: number;
	unit: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	telephone: string;
	mobile: string;
	gender: string;
	birthDay: any;
	email: string;
	wechat: string;
	teacher: string;
	potential: number;
	research: number;
	salutation: string;
	createTime: any;
	address: number;
	addressString: string;
	validity: any;
	isOccupy: number;
}
interface ResultSearchMyCustomerActive {
	$page: ReturnSearchMyCustomerActive$page[];
}

export interface ParamSearchNewMyCustomer {
}
interface ReturnSearchNewMyCustomerRet {
	sales: number;
	customer: number;
	webuser: number;
	createTime: any;
}
interface ResultSearchNewMyCustomer {
	ret: ReturnSearchNewMyCustomerRet[];
}

export interface ParamSearchBalanceHistory {
	ordertype: string;
}
interface ReturnSearchBalanceHistoryRet {
	date: any;
	sales: number;
	order: number;
	orderNo: number;
	ordertype: string;
	amount: number;
	currency: number;
}
interface ResultSearchBalanceHistory {
	ret: ReturnSearchBalanceHistoryRet[];
}

export interface ParamSearchWithdrawalStateQuery {
	withdrawal: number;
}
interface ReturnSearchWithdrawalStateQueryRet {
	Withdrawal: number;
	state: number;
	comments: string;
	createTime: any;
}
interface ResultSearchWithdrawalStateQuery {
	ret: ReturnSearchWithdrawalStateQueryRet[];
}

export interface ParamSearchMyCustomerByPost {
	key: string;
	post: number;
	domain: number;
}
interface ReturnSearchMyCustomerByPost$page {
	id: number;
	unit: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	telephone: string;
	mobile: string;
	gender: string;
	birthDay: any;
	email: string;
	wechat: string;
	sharingTimes: number;
	sharingCount: number;
}
interface ResultSearchMyCustomerByPost {
	$page: ReturnSearchMyCustomerByPost$page[];
}

export interface ParamSearchSubordinate {
	key: string;
}
interface ReturnSearchSubordinateRet {
	webuser: number;
	employee: number;
	taskcount: number;
}
interface ResultSearchSubordinate {
	ret: ReturnSearchSubordinateRet[];
}

export interface ParamSearchCustomerOrder {
	_mycustomer: number;
	_ordertype: string;
}
interface ReturnSearchCustomerOrderRet {
	customer: number;
	webuser: number;
	order: number;
	orderNo: string;
	date: any;
}
interface ResultSearchCustomerOrder {
	ret: ReturnSearchCustomerOrderRet[];
}

export interface ParamSearchMyCustomerDepartment {
	mycustomer: number;
}
interface ReturnSearchMyCustomerDepartmentRet {
	customer: number;
	department: number;
}
interface ResultSearchMyCustomerDepartment {
	ret: ReturnSearchMyCustomerDepartmentRet[];
}

export interface ParamSearchMyCustomerResearch {
	mycustomer: number;
}
interface ReturnSearchMyCustomerResearchRet {
	customer: number;
	research: number;
}
interface ResultSearchMyCustomerResearch {
	ret: ReturnSearchMyCustomerResearchRet[];
}

export interface ParamSearchMyCustomerOfficePost {
	mycustomer: number;
}
interface ReturnSearchMyCustomerOfficePostRet {
	customer: number;
	officpost: number;
}
interface ResultSearchMyCustomerOfficePost {
	ret: ReturnSearchMyCustomerOfficePostRet[];
}

export interface ParamSearchMyCustomerByUnit {
	_unit: number;
	_key: string;
}
interface ReturnSearchMyCustomerByUnit$page {
	id: number;
	unit: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	telephone: string;
	mobile: string;
	gender: string;
	birthDay: any;
	email: string;
	wechat: string;
	teacher: string;
	potential: number;
	research: number;
	salutation: string;
	createTime: any;
	address: number;
	addressString: string;
	validity: any;
	isOccupy: number;
}
interface ResultSearchMyCustomerByUnit {
	$page: ReturnSearchMyCustomerByUnit$page[];
}

export interface ParamSearchTaskHistoryCount {
	user: number;
}
interface ReturnSearchTaskHistoryCountRet {
	counts: number;
}
interface ResultSearchTaskHistoryCount {
	ret: ReturnSearchTaskHistoryCountRet[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamSearchBottomDiscount {
}
interface ReturnSearchBottomDiscountRet {
	brand: number;
	discount: number;
}
interface ResultSearchBottomDiscount {
	ret: ReturnSearchBottomDiscountRet[];
}

export interface ParamSearchCouponUsed {
	coupon: number;
}
interface ReturnSearchCouponUsedRet {
	order: number;
	webuser: number;
	createDate: any;
}
interface ResultSearchCouponUsed {
	ret: ReturnSearchCouponUsedRet[];
}

export interface ParamSearchMyCustomerByCategory {
	key: string;
	category: number;
}
interface ReturnSearchMyCustomerByCategory$page {
	seq: number;
	id: number;
	unit: number;
	no: string;
	name: string;
	firstName: string;
	lastName: string;
	telephone: string;
	mobile: string;
	gender: string;
	birthDay: any;
	email: string;
	wechat: string;
}
interface ResultSearchMyCustomerByCategory {
	$page: ReturnSearchMyCustomerByCategory$page[];
}

export interface ParamGetPersonMonthlyAchieve {
	user: number;
	year: number;
	month: number;
}
interface ReturnGetPersonMonthlyAchieveRet {
	date: any;
	user: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetPersonMonthlyAchieve {
	ret: ReturnGetPersonMonthlyAchieveRet[];
}

export interface ParamGetPersonDailyAchieve {
	user: number;
	date: string;
}
interface ReturnGetPersonDailyAchieveRet {
	date: any;
	user: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetPersonDailyAchieve {
	ret: ReturnGetPersonDailyAchieveRet[];
}

export interface ParamGetPersonYearlyAchieve {
	user: number;
	year: number;
}
interface ReturnGetPersonYearlyAchieveRet {
	yeara: number;
	montha: number;
	usera: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetPersonYearlyAchieve {
	ret: ReturnGetPersonYearlyAchieveRet[];
}

export interface ParamGetTeamDailyAchieve {
	team: number;
	date: string;
}
interface ReturnGetTeamDailyAchieveRet {
	date: any;
	user: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetTeamDailyAchieve {
	ret: ReturnGetTeamDailyAchieveRet[];
}

export interface ParamGetTeamMonthlyAchieve {
	team: number;
	year: number;
	month: number;
}
interface ReturnGetTeamMonthlyAchieveRet {
	yeara: number;
	montha: number;
	usera: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetTeamMonthlyAchieve {
	ret: ReturnGetTeamMonthlyAchieveRet[];
}

export interface ParamGetTeamYearlyAchieve {
	team: number;
	year: number;
}
interface ReturnGetTeamYearlyAchieveRet {
	yeara: number;
	montha: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetTeamYearlyAchieve {
	ret: ReturnGetTeamYearlyAchieveRet[];
}

export interface ParamGetTeamMemberYearlyAchieve {
	team: number;
	year: number;
}
interface ReturnGetTeamMemberYearlyAchieveRet {
	yeara: number;
	usera: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	creditsCreated: number;
}
interface ResultGetTeamMemberYearlyAchieve {
	ret: ReturnGetTeamMemberYearlyAchieveRet[];
}

export interface ParamTaskBook {
}
interface ReturnTaskBook$page {
	task: number;
	status: number;
	principal: number;
	remindDate: any;
}
interface ResultTaskBook {
	$page: ReturnTaskBook$page[];
}

export interface ParamTaskFieldBook {
	task: number;
}
interface ReturnTaskFieldBook$page {
	field: number;
	value: number;
	note: string;
}
interface ResultTaskFieldBook {
	$page: ReturnTaskFieldBook$page[];
}

export interface ParamTaskProductBook {
	task: number;
}
interface ReturnTaskProductBook$page {
	product: number;
	note: string;
}
interface ResultTaskProductBook {
	$page: ReturnTaskProductBook$page[];
}

export interface ParamTaskProductPackBook {
	task: number;
	product: number;
}
interface ReturnTaskProductPackBook$page {
	pack: number;
	note: string;
}
interface ResultTaskProductPackBook {
	$page: ReturnTaskProductPackBook$page[];
}

export interface ParamTaskProjectBook {
	task: number;
}
interface ReturnTaskProjectBook$page {
	project: number;
	note: string;
}
interface ResultTaskProjectBook {
	$page: ReturnTaskProjectBook$page[];
}

export interface ParamPeerAssignedBook {
	user: number;
}
interface ReturnPeerAssignedBook$page {
	peer: number;
	Assigned: string;
}
interface ResultPeerAssignedBook {
	$page: ReturnPeerAssignedBook$page[];
}

export interface ParamMessageBook {
}
interface ReturnMessageBook$page {
	user: number;
	count: number;
}
interface ResultMessageBook {
	$page: ReturnMessageBook$page[];
}

export interface ParamCustomerNowSalesBOOK {
}
interface ReturnCustomerNowSalesBOOK$page {
	customer: number;
	sales: number;
	webuser: number;
	types: string;
	validity: any;
}
interface ResultCustomerNowSalesBOOK {
	$page: ReturnCustomerNowSalesBOOK$page[];
}

export interface ParamAchievementRuleBook {
	Type: number;
	MinAmount: number;
}
interface ReturnAchievementRuleBook$page {
	MaxAmount: number;
	value: number;
	TeamCount: number;
}
interface ResultAchievementRuleBook {
	$page: ReturnAchievementRuleBook$page[];
}

export interface ParamSalesAchievementBook {
}
interface ReturnSalesAchievementBook$page {
	user: number;
	Level: number;
	oneSaleVolume: number;
	twoSaleVolume: number;
	threeSaleVolume: number;
	oneAchievement: number;
	twoAchievement: number;
	threeAchievement: number;
	totalOrderCount: number;
	totalAchievement: number;
	totalReceivableAmount: number;
	totalaWithdrawal: number;
	waitWithdrawal: number;
}
interface ResultSalesAchievementBook {
	$page: ReturnSalesAchievementBook$page[];
}

export interface ParamNewMyCustomerBook {
	sales: number;
}
interface ReturnNewMyCustomerBook$page {
	customer: number;
	webuser: number;
	createTime: any;
}
interface ResultNewMyCustomerBook {
	$page: ReturnNewMyCustomerBook$page[];
}

export interface ParamWithdrawalStateBook {
}
interface ReturnWithdrawalStateBook$page {
	Withdrawal: number;
	webuser: number;
	amount: number;
	state: number;
	comments: string;
	createTime: any;
}
interface ResultWithdrawalStateBook {
	$page: ReturnWithdrawalStateBook$page[];
}

export interface ParamOrderStateBook {
}
interface ReturnOrderStateBook$page {
	order: number;
	state: number;
	amount: number;
	payAmount: number;
}
interface ResultOrderStateBook {
	$page: ReturnOrderStateBook$page[];
}

export interface ParamSalesTeamBook {
}
interface ReturnSalesTeamBook$page {
	user: number;
	teamCount: number;
	innerTeamCount: number;
}
interface ResultSalesTeamBook {
	$page: ReturnSalesTeamBook$page[];
}

export interface ParamSalesCustomerBook {
}
interface ReturnSalesCustomerBook$page {
	user: number;
	customerCount: number;
	unitCount: number;
}
interface ResultSalesCustomerBook {
	$page: ReturnSalesCustomerBook$page[];
}

export interface ParamAchievement {
	date: any;
	manage: number;
}
interface ReturnAchievement$page {
	user: number;
	year: number;
	month: number;
	endTaskCount: number;
	sendCreditsCount: number;
	sendPostCount: number;
	orderCount: number;
	saleVolume: number;
	couponsCreated: number;
	couponsSended: number;
	couponsUsed: number;
	creditsCreated: number;
	creditsUsed: number;
}
interface ResultAchievement {
	$page: ReturnAchievement$page[];
}

export interface ParamAssistAchievements {
	year: number;
	month: number;
}
interface ReturnAssistAchievements$page {
	sales: number;
	Amount: number;
}
interface ResultAssistAchievements {
	$page: ReturnAssistAchievements$page[];
}

export interface ParamTaskHistory {
	task: number;
	status: number;
	principal: number;
	resultType: string;
	result: string;
}
interface ReturnTaskHistory$page {
	date: any;
	task: number;
	status: number;
	principal: number;
	resultType: string;
	result: string;
}
interface ResultTaskHistory {
	$page: ReturnTaskHistory$page[];
}

export interface ParamAchievementHistory {
	sales: number;
	webuser: number;
	order: number;
	orderNo: string;
	ordertype: string;
	price: number;
	agentprices: number;
	types: number;
	amount: number;
}
interface ReturnAchievementHistory$page {
	date: any;
	sales: number;
	webuser: number;
	order: number;
	orderNo: string;
	ordertype: string;
	price: number;
	agentprices: number;
	types: number;
	amount: number;
}
interface ResultAchievementHistory {
	$page: ReturnAchievementHistory$page[];
}

export interface ParamBalanceHistory {
	sales: number;
	order: number;
	orderNo: string;
	ordertype: string;
	paymentAmount: number;
	amount: number;
	currency: number;
}
interface ReturnBalanceHistory$page {
	date: any;
	sales: number;
	order: number;
	orderNo: string;
	ordertype: string;
	paymentAmount: number;
	amount: number;
	currency: number;
}
interface ResultBalanceHistory {
	$page: ReturnBalanceHistory$page[];
}

export interface ParamWithdrawalStateHistory {
	withdrawal: number;
	state: number;
	comments: string;
}
interface ReturnWithdrawalStateHistory$page {
	date: any;
	withdrawal: number;
	state: number;
	comments: string;
}
interface ResultWithdrawalStateHistory {
	$page: ReturnWithdrawalStateHistory$page[];
}

export interface ParamMyCustomerPostHistory {
	sales: number;
	customer: number;
	post: number;
}
interface ReturnMyCustomerPostHistory$page {
	date: any;
	sales: number;
	customer: number;
	post: number;
}
interface ResultMyCustomerPostHistory {
	$page: ReturnMyCustomerPostHistory$page[];
}

export interface ParamCouponSendHistory {
	coupon: number;
	webuser: number;
}
interface ReturnCouponSendHistory$page {
	date: any;
	coupon: number;
	webuser: number;
}
interface ResultCouponSendHistory {
	$page: ReturnCouponSendHistory$page[];
}

export interface ParamCustomerNowSalesHistory {
	customer: number;
	webuser: number;
	sales: number;
	types: string;
	validity: any;
}
interface ReturnCustomerNowSalesHistory$page {
	date: any;
	customer: number;
	webuser: number;
	sales: number;
	types: string;
	validity: any;
}
interface ResultCustomerNowSalesHistory {
	$page: ReturnCustomerNowSalesHistory$page[];
}

export interface ParamWithdrawalsHistory {
	sales: number;
	order: number;
	orderNo: string;
	amount: number;
	currency: number;
}
interface ReturnWithdrawalsHistory$page {
	date: any;
	sales: number;
	order: number;
	orderNo: string;
	amount: number;
	currency: number;
}
interface ResultWithdrawalsHistory {
	$page: ReturnWithdrawalsHistory$page[];
}

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	$sheet: UqTuid<Tuid$sheet>;
	Customer: UqTuid<TuidCustomer>;
	Organization: UqTuid<TuidOrganization>;
	Employee: UqTuid<TuidEmployee>;
	Brand: UqTuid<TuidBrand>;
	ProductX: UqTuid<TuidProductX>;
	Task: UqTuid<TuidTask>;
	TaskType: UqTuid<TuidTaskType>;
	JkTaskType: UqTuid<TuidJkTaskType>;
	JkTask: UqTuid<TuidJkTask>;
	BizType: UqTuid<TuidBizType>;
	Field: UqTuid<TuidField>;
	TaskStatus: UqTuid<TuidTaskStatus>;
	Project: UqTuid<TuidProject>;
	MyCustomer: UqTuid<TuidMyCustomer>;
	MyCustomerUnit: UqTuid<TuidMyCustomerUnit>;
	Message: UqTuid<TuidMessage>;
	Coupon: UqTuid<TuidCoupon>;
	Address: UqTuid<TuidAddress>;
	Country: UqTuid<TuidCountry>;
	Province: UqTuid<TuidProvince>;
	City: UqTuid<TuidCity>;
	County: UqTuid<TuidCounty>;
	SalesRegion: UqTuid<TuidSalesRegion>;
	Currency: UqTuid<TuidCurrency>;
	InvoiceType: UqTuid<TuidInvoiceType>;
	WithdrawalState: UqTuid<TuidWithdrawalState>;
	POST: UqTuid<TuidPOST>;
	OfficePost: UqTuid<TuidOfficePost>;
	Department: UqTuid<TuidDepartment>;
	Research: UqTuid<TuidResearch>;
	VIPCardType: UqTuid<TuidVIPCardType>;
	Domain: UqTuid<TuidDomain>;
	CompletionTask: UqAction<ParamCompletionTask, ResultCompletionTask>;
	CompletionCustomerInfoTask: UqAction<ParamCompletionCustomerInfoTask, ResultCompletionCustomerInfoTask>;
	InvalidTask: UqAction<ParamInvalidTask, ResultInvalidTask>;
	ExtensionTask: UqAction<ParamExtensionTask, ResultExtensionTask>;
	AddTask: UqAction<ParamAddTask, ResultAddTask>;
	ImportTask: UqAction<ParamImportTask, ResultImportTask>;
	CreateTaskProduct: UqAction<ParamCreateTaskProduct, ResultCreateTaskProduct>;
	CreateTaskProductPack: UqAction<ParamCreateTaskProductPack, ResultCreateTaskProductPack>;
	CreateTaskProject: UqAction<ParamCreateTaskProject, ResultCreateTaskProject>;
	CreatePosition: UqAction<ParamCreatePosition, ResultCreatePosition>;
	CreateMyCustomer: UqAction<ParamCreateMyCustomer, ResultCreateMyCustomer>;
	CreateMyCustomerUnit: UqAction<ParamCreateMyCustomerUnit, ResultCreateMyCustomerUnit>;
	SavePeerAssigned: UqAction<ParamSavePeerAssigned, ResultSavePeerAssigned>;
	UpdateNowMessage: UqAction<ParamUpdateNowMessage, ResultUpdateNowMessage>;
	CreateCoupon: UqAction<ParamCreateCoupon, ResultCreateCoupon>;
	IsCanUseCoupon: UqAction<ParamIsCanUseCoupon, ResultIsCanUseCoupon>;
	TestBus1: UqAction<ParamTestBus1, ResultTestBus1>;
	UpateCustomerMyCustomerMap: UqAction<ParamUpateCustomerMyCustomerMap, ResultUpateCustomerMyCustomerMap>;
	ComputeAchievement: UqAction<ParamComputeAchievement, ResultComputeAchievement>;
	AddWebUserAccountMap: UqAction<ParamAddWebUserAccountMap, ResultAddWebUserAccountMap>;
	ComputeBalance: UqAction<ParamComputeBalance, ResultComputeBalance>;
	AddMyCustomerPost: UqAction<ParamAddMyCustomerPost, ResultAddMyCustomerPost>;
	AddCouponSendHistory: UqAction<ParamAddCouponSendHistory, ResultAddCouponSendHistory>;
	Withdrawal: UqSheet<SheetWithdrawal, any>;
	TaskBook: UqBook<ParamTaskBook, ResultTaskBook>;
	TaskFieldBook: UqBook<ParamTaskFieldBook, ResultTaskFieldBook>;
	TaskProductBook: UqBook<ParamTaskProductBook, ResultTaskProductBook>;
	TaskProductPackBook: UqBook<ParamTaskProductPackBook, ResultTaskProductPackBook>;
	TaskProjectBook: UqBook<ParamTaskProjectBook, ResultTaskProjectBook>;
	PeerAssignedBook: UqBook<ParamPeerAssignedBook, ResultPeerAssignedBook>;
	MessageBook: UqBook<ParamMessageBook, ResultMessageBook>;
	CustomerNowSalesBOOK: UqBook<ParamCustomerNowSalesBOOK, ResultCustomerNowSalesBOOK>;
	AchievementRuleBook: UqBook<ParamAchievementRuleBook, ResultAchievementRuleBook>;
	SalesAchievementBook: UqBook<ParamSalesAchievementBook, ResultSalesAchievementBook>;
	NewMyCustomerBook: UqBook<ParamNewMyCustomerBook, ResultNewMyCustomerBook>;
	WithdrawalStateBook: UqBook<ParamWithdrawalStateBook, ResultWithdrawalStateBook>;
	OrderStateBook: UqBook<ParamOrderStateBook, ResultOrderStateBook>;
	SalesTeamBook: UqBook<ParamSalesTeamBook, ResultSalesTeamBook>;
	SalesCustomerBook: UqBook<ParamSalesCustomerBook, ResultSalesCustomerBook>;
	Achievement: UqBook<ParamAchievement, ResultAchievement>;
	AssistAchievements: UqBook<ParamAssistAchievements, ResultAssistAchievements>;
	SearchTask: UqQuery<ParamSearchTask, ResultSearchTask>;
	SearchHistoryTask: UqQuery<ParamSearchHistoryTask, ResultSearchHistoryTask>;
	SearchHistoryTaskByCustomer: UqQuery<ParamSearchHistoryTaskByCustomer, ResultSearchHistoryTaskByCustomer>;
	SearchHistoryTaskByEmployee: UqQuery<ParamSearchHistoryTaskByEmployee, ResultSearchHistoryTaskByEmployee>;
	SearchTaskCompletion: UqQuery<ParamSearchTaskCompletion, ResultSearchTaskCompletion>;
	SearchTaskProduct: UqQuery<ParamSearchTaskProduct, ResultSearchTaskProduct>;
	SearchTaskProductPack: UqQuery<ParamSearchTaskProductPack, ResultSearchTaskProductPack>;
	SearchTaskProject: UqQuery<ParamSearchTaskProject, ResultSearchTaskProject>;
	SearchPosition: UqQuery<ParamSearchPosition, ResultSearchPosition>;
	SearchAchievement: UqQuery<ParamSearchAchievement, ResultSearchAchievement>;
	SearchTeam: UqQuery<ParamSearchTeam, ResultSearchTeam>;
	SearchMyCustomer: UqQuery<ParamSearchMyCustomer, ResultSearchMyCustomer>;
	SearchMyCustomerUnit: UqQuery<ParamSearchMyCustomerUnit, ResultSearchMyCustomerUnit>;
	SearchMessage: UqQuery<ParamSearchMessage, ResultSearchMessage>;
	SearchNowMessage: UqQuery<ParamSearchNowMessage, ResultSearchNowMessage>;
	SearchCoupon: UqQuery<ParamSearchCoupon, ResultSearchCoupon>;
	SearchJKTask: UqQuery<ParamSearchJKTask, ResultSearchJKTask>;
	SearchAchievementHistory: UqQuery<ParamSearchAchievementHistory, ResultSearchAchievementHistory>;
	SearchCustomerMyCustomerMap: UqQuery<ParamSearchCustomerMyCustomerMap, ResultSearchCustomerMyCustomerMap>;
	MyCustomerIsOccupy: UqQuery<ParamMyCustomerIsOccupy, ResultMyCustomerIsOccupy>;
	SearchMyCustomerActive: UqQuery<ParamSearchMyCustomerActive, ResultSearchMyCustomerActive>;
	SearchNewMyCustomer: UqQuery<ParamSearchNewMyCustomer, ResultSearchNewMyCustomer>;
	SearchBalanceHistory: UqQuery<ParamSearchBalanceHistory, ResultSearchBalanceHistory>;
	SearchWithdrawalStateQuery: UqQuery<ParamSearchWithdrawalStateQuery, ResultSearchWithdrawalStateQuery>;
	SearchMyCustomerByPost: UqQuery<ParamSearchMyCustomerByPost, ResultSearchMyCustomerByPost>;
	SearchSubordinate: UqQuery<ParamSearchSubordinate, ResultSearchSubordinate>;
	SearchCustomerOrder: UqQuery<ParamSearchCustomerOrder, ResultSearchCustomerOrder>;
	SearchMyCustomerDepartment: UqQuery<ParamSearchMyCustomerDepartment, ResultSearchMyCustomerDepartment>;
	SearchMyCustomerResearch: UqQuery<ParamSearchMyCustomerResearch, ResultSearchMyCustomerResearch>;
	SearchMyCustomerOfficePost: UqQuery<ParamSearchMyCustomerOfficePost, ResultSearchMyCustomerOfficePost>;
	SearchMyCustomerByUnit: UqQuery<ParamSearchMyCustomerByUnit, ResultSearchMyCustomerByUnit>;
	SearchTaskHistoryCount: UqQuery<ParamSearchTaskHistoryCount, ResultSearchTaskHistoryCount>;
	$poked: UqQuery<Param$poked, Result$poked>;
	SearchBottomDiscount: UqQuery<ParamSearchBottomDiscount, ResultSearchBottomDiscount>;
	SearchCouponUsed: UqQuery<ParamSearchCouponUsed, ResultSearchCouponUsed>;
	SearchMyCustomerByCategory: UqQuery<ParamSearchMyCustomerByCategory, ResultSearchMyCustomerByCategory>;
	GetPersonMonthlyAchieve: UqQuery<ParamGetPersonMonthlyAchieve, ResultGetPersonMonthlyAchieve>;
	GetPersonDailyAchieve: UqQuery<ParamGetPersonDailyAchieve, ResultGetPersonDailyAchieve>;
	GetPersonYearlyAchieve: UqQuery<ParamGetPersonYearlyAchieve, ResultGetPersonYearlyAchieve>;
	GetTeamDailyAchieve: UqQuery<ParamGetTeamDailyAchieve, ResultGetTeamDailyAchieve>;
	GetTeamMonthlyAchieve: UqQuery<ParamGetTeamMonthlyAchieve, ResultGetTeamMonthlyAchieve>;
	GetTeamYearlyAchieve: UqQuery<ParamGetTeamYearlyAchieve, ResultGetTeamYearlyAchieve>;
	GetTeamMemberYearlyAchieve: UqQuery<ParamGetTeamMemberYearlyAchieve, ResultGetTeamMemberYearlyAchieve>;
	OrganizationCustomer: UqMap;
	TaskBiz: UqMap;
	BizField: UqMap;
	Position: UqMap;
	Relation: UqMap;
	CouponOrderMap: UqMap;
	WebUserEmployeeMap: UqMap;
	TaskBizJKTaskType: UqMap;
	CustomerMyCustomerMap: UqMap;
	ProtectedCustomersMap: UqMap;
	OpenCustomersMap: UqMap;
	WebUserAccountMap: UqMap;
	EmployeeRelation: UqMap;
	WebuserEmployee: UqMap;
	ResearchRelation: UqMap;
	CustomerOfficePost: UqMap;
	OfficePostRelation: UqMap;
	CustomerDepartment: UqMap;
	CustomerResearch: UqMap;
	Importcustomerdata: UqMap;
	TaskOrder: UqMap;
	VIPCardForWebUser: UqMap;
	VIPCardDiscount: UqMap;
	BottomDiscount: UqMap;
	CustomerDomain: UqMap;
	BrandSalesRegion: UqMap;
	TaskHistory: UqHistory<ParamTaskHistory, ResultTaskHistory>;
	AchievementHistory: UqHistory<ParamAchievementHistory, ResultAchievementHistory>;
	BalanceHistory: UqHistory<ParamBalanceHistory, ResultBalanceHistory>;
	WithdrawalStateHistory: UqHistory<ParamWithdrawalStateHistory, ResultWithdrawalStateHistory>;
	MyCustomerPostHistory: UqHistory<ParamMyCustomerPostHistory, ResultMyCustomerPostHistory>;
	CouponSendHistory: UqHistory<ParamCouponSendHistory, ResultCouponSendHistory>;
	CustomerNowSalesHistory: UqHistory<ParamCustomerNowSalesHistory, ResultCustomerNowSalesHistory>;
	WithdrawalsHistory: UqHistory<ParamWithdrawalsHistory, ResultWithdrawalsHistory>;
	CustomerOrderPending: UqPending<any, any>;
	OrderPaymentPending: UqPending<any, any>;
}
