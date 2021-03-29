//=== UqApp builder created on Mon Mar 29 2021 14:34:07 GMT+0800 (China Standard Time) ===//
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IDXValue, Uq, UqTuid, UqAction, UqBook, UqQuery, UqMap, UqHistory } from "tonva-react";


//===============================
//======= UQ 百灵威系统工程部/webBuilder ========
//===============================

export interface Tuid$user {
	name: string;
	nick: string;
	icon: string;
	assigned: string;
	poke: number;
}

export interface TuidTag {
	name: string;
	description: string;
	createtTime: any;
	creator: number;
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

export interface TuidTemplate {
	caption: string;
	author: number;
	content: string;
	contentModule: string;
}

export interface TuidContent {
	name: string;
	content: string;
	template: number;
	creator: number;
}

export interface TuidPOST {
	caption: string;
	discription: string;
	image: number;
	author: number;
	businessScope: number;
	language: number;
	template: number;
	content: string;
	emphasis: number;
	isValid: number;
}

export interface TuidIMAGE {
	caption: string;
	path: string;
	author: number;
	isValid: number;
	types: number;
}

export interface TuidBRANCH {
	content: string;
	author: number;
	branchType: number;
}

export interface TuidWebPage {
	name: string;
	titel: string;
	template: number;
	discription: string;
	author: number;
}

export interface TuidIp {
	ip: string;
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

export interface TuidProductCategory {
	no: number;
	parent: number;
	isLeaf: number;
	orderWithinParent: number;
}

export interface TuidSubject {
	name: string;
	parent: number;
	isValid: number;
}

export interface TuidIMGCat {
	parent: number;
	name: string;
	isValid: number;
}

export interface TuidBusinessScope {
	name: string;
}

export interface TuidClassroomType {
	name: string;
}

export interface TuidDomain {
	name: string;
	parent: number;
}

export interface TuidWebsite {
	name: string;
	url: string;
}

export interface TuidMadiaType {
	name: string;
}

export interface ParamTest {
	a1: number;
	a2: number;
}
interface ResultTest {
}

export interface ParamPublishPost {
	_post: number;
	_startDate: any;
	_endDate: any;
	tags: {
		tagName: number;
	}[];

}
interface ResultPublishPost {
}

export interface ParamAddBrowsingHistory {
	object: number;
	objectType: string;
	ipAddress: string;
}
interface ResultAddBrowsingHistory {
}

export interface ParamHit {
	oneHit: {
		tick: number;
		ip: string;
		post: number;
		sales: number;
		source: number;
	}[];

}
interface ResultHit {
}

export interface ParamCalcHot {
}
interface ResultCalcHot {
}

export interface ParamPublishPostForProduct {
	_post: number;
	_product: number;
}
interface ResultPublishPostForProduct {
}

export interface ParamAddPostEvaluate {
	_post: number;
	_ip: string;
	_grade: string;
}
interface ResultAddPostEvaluate {
}

export interface ParamAddPostResearchField {
	_post: number;
	_tag: string;
}
interface ResultAddPostResearchField {
}

export interface ParamAddPost {
	_id: number;
	_caption: string;
	_discription: string;
	_image: number;
	_template: number;
	_content: string;
	_emphasis: number;
	_language: number;
}
interface ReturnAddPostRet {
	id: number;
	$id: number;
}
interface ResultAddPost {
	ret: ReturnAddPostRet[];
}

export interface ParamAddPostProductCatalog {
	_post: number;
	_productCategory: number;
	_name: string;
}
interface ResultAddPostProductCatalog {
}

export interface ParamAddPostSubject {
	_post: number;
	_subject: number;
}
interface ResultAddPostSubject {
}

export interface ParamAddPostProductCatalogExplain {
	_post: number;
	_productCategory: number;
	_name: string;
}
interface ResultAddPostProductCatalogExplain {
}

export interface ParamTransmitPost {
	_post: number;
}
interface ResultTransmitPost {
}

export interface ParamUpdateSlideShow {
	image: number;
	types: number;
	caption: string;
	description: string;
	src: string;
	sort: number;
}
interface ResultUpdateSlideShow {
}

export interface ParamDeleteSlideShow {
	_image: number;
}
interface ResultDeleteSlideShow {
}

export interface ParamAddPostDomain {
	_post: number;
	_domain: number;
}
interface ResultAddPostDomain {
}

export interface ParamAddInformationPost {
	_post: number;
	_sort: number;
}
interface ResultAddInformationPost {
}

export interface ParamDelPostSubject {
	_post: number;
	_subject: number;
}
interface ResultDelPostSubject {
}

export interface ParamHitOfManual {
	post: number;
	source: number;
	hit: number;
	hitdate: any;
}
interface ResultHitOfManual {
}

export interface ParamDelSubjectDefault {
	_subject: number;
}
interface ResultDelSubjectDefault {
}

export interface ParamSearchPost {
	key: string;
	author: number;
	businessScope: number;
	status: number;
}
interface ReturnSearchPost$page {
	id: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	template: number;
	$update: any;
	$create: any;
	isValid: number;
	emphasis: number;
	language: number;
	hits: number;
	sumHits: number;
	web: number;
	agent: number;
	assist: number;
	openweb: number;
	bvweb: number;
	$id: number;
}
interface ResultSearchPost {
	$page: ReturnSearchPost$page[];
}

export interface ParamSearchTemplate {
	key: string;
}
interface ReturnSearchTemplate$page {
	id: number;
	caption: string;
	author: number;
	content: string;
	contentModule: string;
	$id: number;
}
interface ResultSearchTemplate {
	$page: ReturnSearchTemplate$page[];
}

export interface ParamSearchImage {
	key: string;
	types: number;
}
interface ReturnSearchImage$page {
	id: number;
	caption: string;
	path: string;
	author: number;
	isValid: number;
	types: number;
	$id: number;
}
interface ResultSearchImage {
	$page: ReturnSearchImage$page[];
}

export interface ParamSearchWebPage {
	key: string;
	author: number;
}
interface ReturnSearchWebPage$page {
	id: number;
	name: string;
	discription: string;
	titel: string;
	author: number;
	$update: any;
	$create: any;
	$id: number;
}
interface ResultSearchWebPage {
	$page: ReturnSearchWebPage$page[];
}

export interface ParamSearchBranch {
	key: string;
}
interface ReturnSearchBranch$page {
	id: number;
	author: number;
	content: string;
	branchType: number;
	$id: number;
}
interface ResultSearchBranch {
	$page: ReturnSearchBranch$page[];
}

export interface ParamSearchPrivateBranch {
	_page: number;
}
interface ReturnSearchPrivateBranchRet {
	id: number;
	content: string;
	branchType: number;
	author: number;
	sort: number;
	$id: number;
}
interface ResultSearchPrivateBranch {
	ret: ReturnSearchPrivateBranchRet[];
}

export interface ParamSearchTotalBrowsing {
}
interface ReturnSearchTotalBrowsingRet {
	user: number;
	PostTotal: number;
	PageTotal: number;
	$id: number;
}
interface ResultSearchTotalBrowsing {
	ret: ReturnSearchTotalBrowsingRet[];
}

export interface ParamHotPosts {
}
interface ReturnHotPostsRet {
	hits: number;
	post: number;
	caption: string;
	discription: string;
	image: number;
	imagePath: string;
	author: number;
	create: number;
	update: number;
	$id: number;
}
interface ResultHotPosts {
	ret: ReturnHotPostsRet[];
}

export interface ParamSearchPostPublish {
	key: string;
	domain: number;
	publish: number;
	language: number;
}
interface ReturnSearchPostPublish$page {
	id: number;
	post: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	template: number;
	$update: any;
	$create: any;
	publishdate: any;
	isValid: number;
	emphasis: number;
	language: number;
	hits: number;
	sumHits: number;
	$id: number;
}
interface ResultSearchPostPublish {
	$page: ReturnSearchPostPublish$page[];
}

export interface ParamSearchPostPublishForProduct {
	_post: number;
}
interface ReturnSearchPostPublishForProductRet {
	product: number;
	post: number;
	operator: number;
	update: any;
	$id: number;
}
interface ResultSearchPostPublishForProduct {
	ret: ReturnSearchPostPublishForProductRet[];
}

export interface ParamSearchPostEvaluate {
	_post: number;
}
interface ReturnSearchPostEvaluateRet {
	post: number;
	GradeA: number;
	GradeB: number;
	GradeC: number;
	GradeD: number;
	GradeE: number;
	$id: number;
}
interface ResultSearchPostEvaluate {
	ret: ReturnSearchPostEvaluateRet[];
}

export interface ParamSearchPostResearchField {
	_post: number;
}
interface ReturnSearchPostResearchFieldRet {
	value: number;
	$id: number;
}
interface ResultSearchPostResearchField {
	ret: ReturnSearchPostResearchFieldRet[];
}

export interface ParamSearchAchievement {
	_type: string;
	_year: number;
}
interface ReturnSearchAchievementRet {
	yeara: string;
	montha: string;
	postPubSum: number;
	postTranSum: number;
	postHitSum: number;
	$id: number;
}
interface ResultSearchAchievement {
	ret: ReturnSearchAchievementRet[];
}

export interface ParamSearchProductCategoryPost {
	author: number;
	productCategory: number;
	publish: number;
}
interface ReturnSearchProductCategoryPost$page {
	id: number;
	post: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	template: number;
	$update: any;
	$create: any;
	publishdate: any;
	isValid: number;
	emphasis: number;
	language: number;
	hits: number;
	sumHits: number;
	web: number;
	agent: number;
	assist: number;
	openweb: number;
	bvweb: number;
	$id: number;
}
interface ResultSearchProductCategoryPost {
	$page: ReturnSearchProductCategoryPost$page[];
}

export interface ParamSearchSubject {
	_parent: number;
}
interface ReturnSearchSubject$page {
	id: number;
	name: string;
	counts: number;
	child: number;
	$id: number;
}
interface ResultSearchSubject {
	$page: ReturnSearchSubject$page[];
}

export interface ParamSearchSubjectPost {
	author: number;
	subject: number;
	publish: number;
}
interface ReturnSearchSubjectPost$page {
	id: number;
	post: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	template: number;
	$update: any;
	$create: any;
	publishdate: any;
	isValid: number;
	emphasis: number;
	language: number;
	hits: number;
	sumHits: number;
	web: number;
	agent: number;
	assist: number;
	openweb: number;
	bvweb: number;
	$id: number;
}
interface ResultSearchSubjectPost {
	$page: ReturnSearchSubjectPost$page[];
}

export interface ParamSearchPostSubject {
	_post: number;
}
interface ReturnSearchPostSubjectRet {
	subject: number;
	name: string;
	$id: number;
}
interface ResultSearchPostSubject {
	ret: ReturnSearchPostSubjectRet[];
}

export interface ParamSearchPostCatalog {
	_post: number;
}
interface ReturnSearchPostCatalogRet {
	post: number;
	productCategory: number;
	name: string;
	$id: number;
}
interface ResultSearchPostCatalog {
	ret: ReturnSearchPostCatalogRet[];
}

export interface ParamSearchPostCatalogExplain {
	_post: number;
}
interface ReturnSearchPostCatalogExplainRet {
	post: number;
	productCategory: number;
	name: string;
	$id: number;
}
interface ResultSearchPostCatalogExplain {
	ret: ReturnSearchPostCatalogExplainRet[];
}

export interface ParamSearchAchievementOfTeamDetail {
	_manage: number;
	_type: string;
	_year: string;
	_month: string;
}
interface ReturnSearchAchievementOfTeamDetailRet {
	year: string;
	month: string;
	day: string;
	author: number;
	postPubSum: number;
	postTranSum: number;
	postHitSum: number;
	percent: number;
	hitWeb: number;
	hitAgent: number;
	hitAssist: number;
	hitEmail: number;
	hitOther: number;
	$id: number;
}
interface ResultSearchAchievementOfTeamDetail {
	ret: ReturnSearchAchievementOfTeamDetailRet[];
}

export interface ParamSearchAchievementOfTeam {
	_manage: number;
	_year: number;
	_type: string;
}
interface ReturnSearchAchievementOfTeamRet {
	yeara: string;
	montha: string;
	daya: string;
	postPubSum: number;
	postTranSum: number;
	postHitSum: number;
	percent: number;
	hitWeb: number;
	hitAgent: number;
	hitAssist: number;
	hitEmail: number;
	hitOther: number;
	$id: number;
}
interface ResultSearchAchievementOfTeam {
	ret: ReturnSearchAchievementOfTeamRet[];
}

export interface ParamSearchCat {
	parent: number;
}
interface ReturnSearchCat$page {
	id: number;
	parent: number;
	name: string;
	$id: number;
}
interface ResultSearchCat {
	$page: ReturnSearchCat$page[];
}

export interface ParamSearchCatImage {
	key: string;
	cat: number;
}
interface ReturnSearchCatImage$page {
	id: number;
	caption: string;
	path: string;
	author: number;
	isValid: number;
	$id: number;
}
interface ResultSearchCatImage {
	$page: ReturnSearchCatImage$page[];
}

export interface ParamSearchImageCat {
	image: number;
}
interface ReturnSearchImageCat$page {
	id: number;
	name: string;
	$id: number;
}
interface ResultSearchImageCat {
	$page: ReturnSearchImageCat$page[];
}

export interface ParamSearchSlideShow {
}
interface ReturnSearchSlideShow$page {
	id: number;
	caption: string;
	description: string;
	image: number;
	path: string;
	author: number;
	src: string;
	sort: number;
	types: number;
	$id: number;
}
interface ResultSearchSlideShow {
	$page: ReturnSearchSlideShow$page[];
}

export interface ParamGetSlideShow {
}
interface ReturnGetSlideShowRet {
	image: number;
	caption: string;
	path: string;
	author: number;
	description: string;
	src: string;
	sort: number;
	types: number;
	$id: number;
}
interface ResultGetSlideShow {
	ret: ReturnGetSlideShowRet[];
}

export interface ParamSearchBusinessScope {
}
interface ReturnSearchBusinessScopeRet {
	webuser: number;
	businessScope: number;
	$id: number;
}
interface ResultSearchBusinessScope {
	ret: ReturnSearchBusinessScopeRet[];
}

export interface ParamSearchClassRoomPost {
	classroomType: number;
}
interface ReturnSearchClassRoomPost$page {
	id: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	template: number;
	$update: any;
	$create: any;
	isValid: number;
	hits: number;
	sumHits: number;
	web: number;
	agent: number;
	assist: number;
	openweb: number;
	$id: number;
}
interface ResultSearchClassRoomPost {
	$page: ReturnSearchClassRoomPost$page[];
}

export interface ParamSearchPostDomain {
	_post: number;
}
interface ReturnSearchPostDomainRet {
	post: number;
	domain: number;
	$id: number;
}
interface ResultSearchPostDomain {
	ret: ReturnSearchPostDomainRet[];
}

export interface Param$poked {
}
interface Return$pokedRet {
	poke: number;
	$id: number;
}
interface Result$poked {
	ret: Return$pokedRet[];
}

export interface ParamSearchDomainPost {
	key: string;
	author: number;
	domain: number;
	publish: number;
}
interface ReturnSearchDomainPost$page {
	id: number;
	post: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	template: number;
	$update: any;
	$create: any;
	publishdate: any;
	isValid: number;
	emphasis: number;
	language: number;
	hits: number;
	sumHits: number;
	web: number;
	agent: number;
	assist: number;
	openweb: number;
	bvweb: number;
	$id: number;
}
interface ResultSearchDomainPost {
	$page: ReturnSearchDomainPost$page[];
}

export interface ParamSearchInformationPost {
}
interface ReturnSearchInformationPost$page {
	id: number;
	post: number;
	caption: string;
	discription: string;
	image: number;
	author: number;
	$update: any;
	$create: any;
	publishdate: any;
	isValid: number;
	emphasis: number;
	language: number;
	web: number;
	agent: number;
	assist: number;
	openweb: number;
	bvweb: number;
	sort: number;
	$id: number;
}
interface ResultSearchInformationPost {
	$page: ReturnSearchInformationPost$page[];
}

export interface ParamSearchProductCategoryPostCount {
	productCategory: number;
}
interface ReturnSearchProductCategoryPostCountRet {
	postcounts: number;
	$id: number;
}
interface ResultSearchProductCategoryPostCount {
	ret: ReturnSearchProductCategoryPostCountRet[];
}

export interface ParamSearchDomainPostCount {
	domain: number;
}
interface ReturnSearchDomainPostCountRet {
	postcounts: number;
	$id: number;
}
interface ResultSearchDomainPostCount {
	ret: ReturnSearchDomainPostCountRet[];
}

export interface ParamSearchPostProduct {
	_post: number;
}
interface ReturnSearchPostProductRet {
	post: number;
	product: number;
	$id: number;
}
interface ResultSearchPostProduct {
	ret: ReturnSearchPostProductRet[];
}

export interface ParamSearchAchievementOfTeamNew {
	_manage: number;
	_year: number;
	_type: string;
}
interface ReturnSearchAchievementOfTeamNewRet {
	year: string;
	month: string;
	day: string;
	postPubSum: number;
	postTranSum: number;
	postHitSum: number;
	percent: number;
	hitWeb: number;
	hitAgent: number;
	hitAssist: number;
	hitEmail: number;
	hitOther: number;
	$id: number;
}
interface ResultSearchAchievementOfTeamNew {
	ret: ReturnSearchAchievementOfTeamNewRet[];
}

export interface ParamSearchRecommendProduct {
	post: number;
}
interface ReturnSearchRecommendProductRet {
	id: number;
	no: string;
	brand: number;
	origin: string;
	description: string;
	descriptionc: string;
	imageurl: string;
	chemical: string;
	cas: string;
	purity: string;
	brandname: string;
	$id: number;
}
interface ResultSearchRecommendProduct {
	ret: ReturnSearchRecommendProductRet[];
}

export interface ParamSearchSubjectDefault {
	_businessScope: number;
}
interface ReturnSearchSubjectDefaultRet {
	subject: number;
	$id: number;
}
interface ResultSearchSubjectDefault {
	ret: ReturnSearchSubjectDefaultRet[];
}

export interface ParamPostBrowsing {
}
interface ReturnPostBrowsing$page {
	id: number;
	totalBrowsing: number;
}
interface ResultPostBrowsing {
	$page: ReturnPostBrowsing$page[];
}

export interface ParamPageBrowsing {
}
interface ReturnPageBrowsing$page {
	id: number;
	totalBrowsing: number;
}
interface ResultPageBrowsing {
	$page: ReturnPageBrowsing$page[];
}

export interface ParamTotalBrowsing {
}
interface ReturnTotalBrowsing$page {
	user: number;
	PostTotal: number;
	PageTotal: number;
}
interface ResultTotalBrowsing {
	$page: ReturnTotalBrowsing$page[];
}

export interface ParamHot {
}
interface ReturnHot$page {
	post: number;
	hits: number;
	sumHits: number;
}
interface ResultHot {
	$page: ReturnHot$page[];
}

export interface ParamPostEvaluate {
}
interface ReturnPostEvaluate$page {
	post: number;
	GradeA: number;
	GradeB: number;
	GradeC: number;
	GradeD: number;
	GradeE: number;
}
interface ResultPostEvaluate {
	$page: ReturnPostEvaluate$page[];
}

export interface ParamAchievement {
	date: any;
	manage: number;
}
interface ReturnAchievement$page {
	user: number;
	year: number;
	month: number;
	postPubSum: number;
	postTranSum: number;
	postHitSum: number;
	hitWeb: number;
	hitAgent: number;
	hitAssist: number;
	hitEmail: number;
	hitOther: number;
}
interface ResultAchievement {
	$page: ReturnAchievement$page[];
}

export interface ParamWebPageHistory {
	webPage: number;
	object: number;
	objectType: string;
	description: string;
}
interface ReturnWebPageHistory$page {
	date: any;
	webPage: number;
	object: number;
	objectType: string;
	description: string;
}
interface ResultWebPageHistory {
	$page: ReturnWebPageHistory$page[];
}

export interface ParamPostBrowsingHistory {
	POST: number;
	ipAddress: string;
}
interface ReturnPostBrowsingHistory$page {
	date: any;
	POST: number;
	ipAddress: string;
}
interface ResultPostBrowsingHistory {
	$page: ReturnPostBrowsingHistory$page[];
}

export interface ParamPageBrowsingHistory {
	WebPage: number;
	ipAddress: string;
}
interface ReturnPageBrowsingHistory$page {
	date: any;
	WebPage: number;
	ipAddress: string;
}
interface ResultPageBrowsingHistory {
	$page: ReturnPageBrowsingHistory$page[];
}

export interface ParamHits {
	ip: number;
	post: number;
	sales: number;
	source: number;
	hit: number;
}
interface ReturnHits$page {
	date: any;
	ip: number;
	post: number;
	sales: number;
	source: number;
	hit: number;
}
interface ResultHits {
	$page: ReturnHits$page[];
}

export interface ParamPostEvaluateRecord {
	post: number;
	ip: number;
	grade: number;
}
interface ReturnPostEvaluateRecord$page {
	date: any;
	post: number;
	ip: number;
	grade: number;
}
interface ResultPostEvaluateRecord {
	$page: ReturnPostEvaluateRecord$page[];
}

export interface ParamActs {
}


export interface UqExt extends Uq {
	Acts(param:ParamActs): Promise<any>;

	$user: UqTuid<Tuid$user>;
	Tag: UqTuid<TuidTag>;
	$sheet: UqTuid<Tuid$sheet>;
	Template: UqTuid<TuidTemplate>;
	Content: UqTuid<TuidContent>;
	POST: UqTuid<TuidPOST>;
	IMAGE: UqTuid<TuidIMAGE>;
	BRANCH: UqTuid<TuidBRANCH>;
	WebPage: UqTuid<TuidWebPage>;
	Ip: UqTuid<TuidIp>;
	Brand: UqTuid<TuidBrand>;
	ProductX: UqTuid<TuidProductX>;
	ProductCategory: UqTuid<TuidProductCategory>;
	Subject: UqTuid<TuidSubject>;
	IMGCat: UqTuid<TuidIMGCat>;
	BusinessScope: UqTuid<TuidBusinessScope>;
	ClassroomType: UqTuid<TuidClassroomType>;
	Domain: UqTuid<TuidDomain>;
	Website: UqTuid<TuidWebsite>;
	MadiaType: UqTuid<TuidMadiaType>;
	Test: UqAction<ParamTest, ResultTest>;
	PublishPost: UqAction<ParamPublishPost, ResultPublishPost>;
	AddBrowsingHistory: UqAction<ParamAddBrowsingHistory, ResultAddBrowsingHistory>;
	Hit: UqAction<ParamHit, ResultHit>;
	CalcHot: UqAction<ParamCalcHot, ResultCalcHot>;
	PublishPostForProduct: UqAction<ParamPublishPostForProduct, ResultPublishPostForProduct>;
	AddPostEvaluate: UqAction<ParamAddPostEvaluate, ResultAddPostEvaluate>;
	AddPostResearchField: UqAction<ParamAddPostResearchField, ResultAddPostResearchField>;
	AddPost: UqAction<ParamAddPost, ResultAddPost>;
	AddPostProductCatalog: UqAction<ParamAddPostProductCatalog, ResultAddPostProductCatalog>;
	AddPostSubject: UqAction<ParamAddPostSubject, ResultAddPostSubject>;
	AddPostProductCatalogExplain: UqAction<ParamAddPostProductCatalogExplain, ResultAddPostProductCatalogExplain>;
	TransmitPost: UqAction<ParamTransmitPost, ResultTransmitPost>;
	UpdateSlideShow: UqAction<ParamUpdateSlideShow, ResultUpdateSlideShow>;
	DeleteSlideShow: UqAction<ParamDeleteSlideShow, ResultDeleteSlideShow>;
	AddPostDomain: UqAction<ParamAddPostDomain, ResultAddPostDomain>;
	AddInformationPost: UqAction<ParamAddInformationPost, ResultAddInformationPost>;
	DelPostSubject: UqAction<ParamDelPostSubject, ResultDelPostSubject>;
	HitOfManual: UqAction<ParamHitOfManual, ResultHitOfManual>;
	DelSubjectDefault: UqAction<ParamDelSubjectDefault, ResultDelSubjectDefault>;
	PostBrowsing: UqBook<ParamPostBrowsing, ResultPostBrowsing>;
	PageBrowsing: UqBook<ParamPageBrowsing, ResultPageBrowsing>;
	TotalBrowsing: UqBook<ParamTotalBrowsing, ResultTotalBrowsing>;
	Hot: UqBook<ParamHot, ResultHot>;
	PostEvaluate: UqBook<ParamPostEvaluate, ResultPostEvaluate>;
	Achievement: UqBook<ParamAchievement, ResultAchievement>;
	SearchPost: UqQuery<ParamSearchPost, ResultSearchPost>;
	SearchTemplate: UqQuery<ParamSearchTemplate, ResultSearchTemplate>;
	SearchImage: UqQuery<ParamSearchImage, ResultSearchImage>;
	SearchWebPage: UqQuery<ParamSearchWebPage, ResultSearchWebPage>;
	SearchBranch: UqQuery<ParamSearchBranch, ResultSearchBranch>;
	SearchPrivateBranch: UqQuery<ParamSearchPrivateBranch, ResultSearchPrivateBranch>;
	SearchTotalBrowsing: UqQuery<ParamSearchTotalBrowsing, ResultSearchTotalBrowsing>;
	HotPosts: UqQuery<ParamHotPosts, ResultHotPosts>;
	SearchPostPublish: UqQuery<ParamSearchPostPublish, ResultSearchPostPublish>;
	SearchPostPublishForProduct: UqQuery<ParamSearchPostPublishForProduct, ResultSearchPostPublishForProduct>;
	SearchPostEvaluate: UqQuery<ParamSearchPostEvaluate, ResultSearchPostEvaluate>;
	SearchPostResearchField: UqQuery<ParamSearchPostResearchField, ResultSearchPostResearchField>;
	SearchAchievement: UqQuery<ParamSearchAchievement, ResultSearchAchievement>;
	SearchProductCategoryPost: UqQuery<ParamSearchProductCategoryPost, ResultSearchProductCategoryPost>;
	SearchSubject: UqQuery<ParamSearchSubject, ResultSearchSubject>;
	SearchSubjectPost: UqQuery<ParamSearchSubjectPost, ResultSearchSubjectPost>;
	SearchPostSubject: UqQuery<ParamSearchPostSubject, ResultSearchPostSubject>;
	SearchPostCatalog: UqQuery<ParamSearchPostCatalog, ResultSearchPostCatalog>;
	SearchPostCatalogExplain: UqQuery<ParamSearchPostCatalogExplain, ResultSearchPostCatalogExplain>;
	SearchAchievementOfTeamDetail: UqQuery<ParamSearchAchievementOfTeamDetail, ResultSearchAchievementOfTeamDetail>;
	SearchAchievementOfTeam: UqQuery<ParamSearchAchievementOfTeam, ResultSearchAchievementOfTeam>;
	SearchCat: UqQuery<ParamSearchCat, ResultSearchCat>;
	SearchCatImage: UqQuery<ParamSearchCatImage, ResultSearchCatImage>;
	SearchImageCat: UqQuery<ParamSearchImageCat, ResultSearchImageCat>;
	SearchSlideShow: UqQuery<ParamSearchSlideShow, ResultSearchSlideShow>;
	GetSlideShow: UqQuery<ParamGetSlideShow, ResultGetSlideShow>;
	SearchBusinessScope: UqQuery<ParamSearchBusinessScope, ResultSearchBusinessScope>;
	SearchClassRoomPost: UqQuery<ParamSearchClassRoomPost, ResultSearchClassRoomPost>;
	SearchPostDomain: UqQuery<ParamSearchPostDomain, ResultSearchPostDomain>;
	$poked: UqQuery<Param$poked, Result$poked>;
	SearchDomainPost: UqQuery<ParamSearchDomainPost, ResultSearchDomainPost>;
	SearchInformationPost: UqQuery<ParamSearchInformationPost, ResultSearchInformationPost>;
	SearchProductCategoryPostCount: UqQuery<ParamSearchProductCategoryPostCount, ResultSearchProductCategoryPostCount>;
	SearchDomainPostCount: UqQuery<ParamSearchDomainPostCount, ResultSearchDomainPostCount>;
	SearchPostProduct: UqQuery<ParamSearchPostProduct, ResultSearchPostProduct>;
	SearchAchievementOfTeamNew: UqQuery<ParamSearchAchievementOfTeamNew, ResultSearchAchievementOfTeamNew>;
	SearchRecommendProduct: UqQuery<ParamSearchRecommendProduct, ResultSearchRecommendProduct>;
	SearchSubjectDefault: UqQuery<ParamSearchSubjectDefault, ResultSearchSubjectDefault>;
	ContentTag: UqMap;
	WebPageBranch: UqMap;
	Hitted: UqMap;
	PostPublish: UqMap;
	PostPublishProduct: UqMap;
	PostResearchField: UqMap;
	PostProductCatalog: UqMap;
	PostSubject: UqMap;
	PostProductCatalogExplain: UqMap;
	ImageCat: UqMap;
	SlideShow: UqMap;
	WebUserBusinessScope: UqMap;
	PostClassroomType: UqMap;
	PostDomain: UqMap;
	WebPageWebsite: UqMap;
	InformationPost: UqMap;
	PostProduct: UqMap;
	SubjectDefault: UqMap;
	PostStatus: UqMap;
	PostPage: UqMap;
	WebPageHistory: UqHistory<ParamWebPageHistory, ResultWebPageHistory>;
	PostBrowsingHistory: UqHistory<ParamPostBrowsingHistory, ResultPostBrowsingHistory>;
	PageBrowsingHistory: UqHistory<ParamPageBrowsingHistory, ResultPageBrowsingHistory>;
	Hits: UqHistory<ParamHits, ResultHits>;
	PostEvaluateRecord: UqHistory<ParamPostEvaluateRecord, ResultPostEvaluateRecord>;
}
