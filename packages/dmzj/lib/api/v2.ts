/**
 * Created by user on 2019/5/11.
 */

import {
	BaseUrl,
	Body,
	DefaultHeaders,
	DELETE,
	GET,
	HEAD,
	Headers,
	Path,
	POST,
	PUT,
	Query,
	RestClient,
	MockHttpService,
	HttpService,
	HttpRequestOptions,
	NamedValues,
	Observable,
	IAxiosRequestConfig,
	IAxiosObservable, IRestClientOptions, IRestClientAxiosOptions,
	IAxios,
	IBluebird,
	IRequestConfig, resolveObservable, SymbolRequestInterceptor, HttpRequestInterceptor, IHttpRequestOptions,
} from 'ts-rest-client2';
import Bluebird = require('bluebird');
import util = require('util');
import { checkType } from 'ts-check';

util.inspect.defaultOptions = {
	colors: true,
	depth: 3,
};

import { Axios } from 'axios-observable';
import { createAxios, RestClientAxios } from 'ts-rest-client2/lib/axios';
import { standardQueryEncoding, urlResolve } from 'ts-rest-client2/lib/util';

export const enum EnumDmzjCode
{
	"成功" = 0,
}

export const enum EnumDmzjMsg
{
	"成功" = "成功",
}

export const enum EnumDmzjAcgnStatus
{
	"已完结" = "已完结",
	"连载中" = "连载中",
}

export const enum EnumDmzjAcgnStatusID
{
	ALL,
	NOT_DONE,
	DONE,
}

export const enum EnumDmzjAcgnOrderID
{
	/**
	 * 0为人气从高到低
	 */
	HOT,
	/**
	 * 1为更新时间从近到远
	 */
	UPDATE,
}

export const enum EnumDmzjAcgnBigCatID
{
	/**
	 * 0为漫画
	 */
	COMIC,
	/**
	 * 1为轻小说
	 */
	NOVEL,
}

export interface IDmzjJson<T>
{
	code: EnumDmzjCode | number,
	msg: EnumDmzjMsg | string,
	data: T
}

export enum EnumNumberBoolean
{
	FALSE,
	TRUE,
}

/**
 * https://gist.github.com/bluelovers/5e9bfeecdbff431c62d5b50e7bdc3e48
 * https://github.com/guuguo/flutter_dmzj/blob/master/lib/api.dart
 * https://github.com/tkkcc/flutter_dmzj/blob/269cb0d642c710626fe7d755f0b27b12ab477cc6/lib/util/api.dart
 */
@BaseUrl('http://v2.api.dmzj.com')
@DefaultHeaders({
	Accepts: 'application/json',
	Referer: 'http://www.dmzj.com/',
})
export class DmzjApiClientV2 extends RestClientAxios
{

	constructor(opts?: Partial<IRestClientAxiosOptions>)
	{
		super(opts);

		let old: HttpRequestInterceptor<IRestClientAxiosOptions["httpClient"]> = this[SymbolRequestInterceptor];

		if (old)
		{
			let self = this;

			this[SymbolRequestInterceptor] = function (...argv)
			{
				let ret = old.call(self, ...argv);

				return DmzjApiClientV2.appendToParams(ret);
			}
		}
		else
		{
			this[SymbolRequestInterceptor] = DmzjApiClientV2.appendToParams
		}
	}

	static appendToParams(options: IAxiosRequestConfig | HttpRequestOptions | IHttpRequestOptions)
	{
		options = HttpRequestOptions.toValue(options);

		let ps = DmzjApiClientV2.buildVersion();

		options.params['version'] = options.params['version'] || ps.version;
		options.params['channel'] = options.params['channel'] || ps.channel;

		return options;
	}

	static buildVersion()
	{
		return {
			channel: "Android",
			version: "2.7.003"
		}
	}

	protected _handleData(data)
	{
		if (typeof data === 'string')
		{
			return JSON.parse(data)
		}

		return data;
	}

	/**
	 * 推荐列表
	 */
	@GET('article/recommend/header.json')
	articleRecommendHeader(): IAxiosObservable<IDmzjJson<{
		"id": number,
		"title": string,
		"pic_url": string,
		"object_id": number,
		"object_url": string,
	}[]>>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 文章分类
	 */
	@GET('article/category.json')
	articleCategory(): IAxiosObservable<IDmzjJson<{
		"tag_id": number,
		"tag_name": string
	}[]>>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 文章列表
	 */
	@GET('article/list/v2/{tag_id}/2/{page}.json')
	articleList(@Path('tag_id') _tag_id: number, @Path('page', 0) _page?: number): IAxiosObservable<IDmzjJson<{
		title: string;
		from_name: string;
		from_url: string;
		create_time: number;
		is_foreign: number;
		foreign_url: string;
		intro: string;
		author_id: number;
		status: number;
		row_pic_url: string;
		col_pic_url: string;
		article_id: number;
		page_url: string;
		comment_amount: string;
		author_uid: number;
		cover: string;
		nickname: string;
		mood_amount: number;
	}[]>>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 文章列表
	 */
	@GET('article/show/v2/{object_id}.html')
	articleShow(@Path('object_id') object_id: number): IAxiosObservable<IDmzjJson<string>>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 推荐
	 */
	@GET('novel/recommend.json')
	novelRecommend(): IAxiosObservable<{
		category_id: number;
		sort: number;
		title: string | "轮番图" | "最新更新" | "动画进行时" | "即将动画化" | "经典必看";
		data: {
			id: number;
			obj_id: number;
			title: string;
			cover: string;
			url: string;
			type: number;
			sub_title: string;
			status: EnumDmzjAcgnStatus;
		}[];
	}[]>
	{
		return this._handleData(arguments[0]);
	}

	/**
	 * 最近更新
	 */
	@GET('novel/recentUpdate/{page}.json')
	novelRecentUpdate(@Path('page', 0) _page?: number): IAxiosObservable<{
		"id": number;
		"status": EnumDmzjAcgnStatus;
		"name": string;
		"authors": string;
		"cover": string;
		"types": string[];
		"last_update_chapter_id": number;
		"last_update_volume_id": number;
		"last_update_volume_name": string;
		"last_update_chapter_name": string;
		"last_update_time": number;
	}[]>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 小说详情
	 */
	@GET('novel/{id}.json')
	novelInfo(@Path('id') id: number): IAxiosObservable<{
		"id": number;
		"name": string;
		"zone": string | "日本";
		"status": EnumDmzjAcgnStatus;
		"last_update_volume_name": string;
		"last_update_chapter_name": string;
		"last_update_volume_id": number;
		"last_update_chapter_id": number;
		"last_update_time": number;
		"cover": string;
		"hot_hits": number;
		"introduction": string;
		"types": string[];
		"authors": string;
		"subscribe_num": number;
		"volume": {
			"id": number;
			"lnovel_id": number;
			"volume_name": string;
			"volume_order": number;
			"addtime": number;
			"sum_chapters": number;
		}[];
	}>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 小说卷列表
	 */
	@GET('novel/chapter/{id}.json')
	novelChapter(@Path('id') id: number): IAxiosObservable<{
		"volume_id": number;
		"id": number;
		"volume_name": string;
		"volume_order": number;
		"chapters": {
			"chapter_id": number;
			"chapter_name": string;
			"chapter_order": number;
		}[];
	}[]>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 小说章节正文
	 * @example novelDownload(2661, 10099, 95922)
	 */
	@GET('novel/download/{id}_{volume_id}_{chapter_id}.txt')
	novelDownload(@Path('id') id: number,
		@Path('volume_id') volume_id: number,
		@Path('chapter_id') chapter_id: number,
	): IAxiosObservable<string>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 小说分类
	 */
	@GET('1/category.json')
	novelCategory(): IAxiosObservable<{
		"tag_id": number;
		"title": string;
		"cover": string;
	}[]>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 小说筛选条件
	 */
	@GET('novel/filter.json')
	novelFilter(): IAxiosObservable<{
		"title": string;
		"items": {
			"tag_id": number;
			"tag_name": string;
		}[];
	}[]>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 小说列表
	 *
	 * @param {number} cat_id 分类id
	 * @param {EnumDmzjAcgnStatusID} status_id 连载情况
	 * @param {EnumDmzjAcgnOrderID} order_id 排序 0为人气从高到低，1为更新时间从近到远
	 * @param {number} page 页数
	 */
	@GET('novel/{cat_id}/{status_id}/{order_id}/{page}.json')
	novelList(@Path('cat_id') cat_id: number,
		@Path('status_id') status_id: EnumDmzjAcgnStatusID,
		@Path('order_id') order_id: EnumDmzjAcgnOrderID,
		@Path('page', 0) page?: number,
	): IAxiosObservable<{
		"cover": string;
		"name": string;
		"authors": string;
		"id": number;
	}[]>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 搜索
	 *
	 * @param {EnumDmzjAcgnBigCatID} big_cat_id 分类id; 0为漫画, 1为轻小说
	 * @param {string} keywords 关键字
	 * @param {number} page 页数
	 */
	searchShow(big_cat_id: EnumDmzjAcgnBigCatID.NOVEL,
		keywords: string,
		page?: number,
	): IAxiosObservable<{
		"cover": string;
		"name": string;
		"authors": string;
		/**
		 * 小说
		 */
		"id": number;
	}[]>
	/**
	 * 搜索
	 *
	 * @param {EnumDmzjAcgnBigCatID} big_cat_id 分类id; 0为漫画, 1为轻小说
	 * @param {string} keywords 关键字
	 * @param {number} page 页数
	 */
	searchShow(big_cat_id: EnumDmzjAcgnBigCatID.COMIC,
		keywords: string,
		page?: number,
	): IAxiosObservable<{
		/**
		 * 漫画
		 */
		"id": number;
		"status": string | EnumDmzjAcgnStatus;
		"title": string;
		"last_name": string;
		"cover": string;
		"authors": string;
		"types": string;
		"hot_hits": number;
	}[]>
	/**
	 * 搜索
	 *
	 * @param {EnumDmzjAcgnBigCatID} big_cat_id 分类id; 0为漫画, 1为轻小说
	 * @param {string} keywords 关键字
	 * @param {number} page 页数
	 */
	searchShow(big_cat_id: EnumDmzjAcgnBigCatID,
		keywords: string,
		page?: number,
	): IAxiosObservable<{
		"cover": string;
		"name": string;
		"authors": string;
		/**
		 * 小说
		 */
		"id": number;
	}[] | {
		/**
		 * 漫画
		 */
		"id": number;
		"status": string | EnumDmzjAcgnStatus;
		"title": string;
		"last_name": string;
		"cover": string;
		"authors": string;
		"types": string;
		"hot_hits": number;
	}[]>
	@GET('search/show/{big_cat_id}/{keywords}/{page}.json')
	searchShow(@Path('big_cat_id') big_cat_id: EnumDmzjAcgnBigCatID,
		@Path('keywords') keywords: string,
		@Path('page', 0) page?: number,
	): IAxiosObservable<{
		"cover": string;
		"name": string;
		"authors": string;
		/**
		 * 小说
		 */
		"id": number;
	}[] | {
		/**
		 * 漫画
		 */
		"id": number;
		"status": string | EnumDmzjAcgnStatus;
		"title": string;
		"last_name": string;
		"cover": string;
		"authors": string;
		"types": string;
		"hot_hits": number;
	}[]>
	{
		return this._handleData(arguments[0]);
	}

	/**
	 * 漫画 推荐
	 */
	@GET('v3/recommend.json')
	comicRecommend(): IAxiosObservable<({
		"category_id": number;
		"title": string | "大图推荐" | "近期必看" | "火热专题" | "大师级作者怎能不看" | "国漫也精彩" | "美漫大事件" | "热门连载" | "条漫专区";
		"sort": number;
		"data": {
			"cover": string;
			"title": string;
			"sub_title": string;
			"type": number;
			"url": string;
			/**
			 * comic_id
			 */
			"obj_id": number;
			"status": string | '' | EnumDmzjAcgnStatus;
		}[];
	} | {
		"category_id": number;
		"title": string | "最新上架";
		"sort": number;
		"data": {
			/**
			 * comic_id
			 */
			"id": number;
			"title": string;
			"authors": string;
			"status": string | '' | EnumDmzjAcgnStatus;
			"cover": string;
		}[];
	})[]>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 漫画
	 * @example comicDetail(47195)
	 */
	@GET('comic/{comic_id}.json')
	comicDetail(@Path('comic_id') comic_id: number): IAxiosObservable<{
		"id": number;
		"islong": number;
		"direction": number;
		"title": string;
		"is_dmzj": number | EnumNumberBoolean;
		"cover": string;
		"description": string;
		"last_updatetime": number;
		"copyright": number | EnumNumberBoolean;
		"first_letter": string;
		"hot_num": number;
		"hit_num": number;
		"uid": number | null;
		"is_lock": number | EnumNumberBoolean;
		"status": {
			"tag_id": number | EnumDmzjAcgnStatusID;
			"tag_name": string | EnumDmzjAcgnStatus;
		}[];
		"types": {
			"tag_id": number;
			"tag_name": string;
		}[];
		"authors": {
			"tag_id": number;
			"tag_name": string;
		}[];
		"subscribe_num": number;
		"chapters": {
			"title": string;
			"data": {
				"chapter_id": number;
				"chapter_title": string;
				"updatetime": number;
				"filesize": number;
				"chapter_order": number;
			}[];
		}[];
		"comment": {
			"comment_count": number;
			"latest_comment": {
				"comment_id": number;
				"uid": number;
				"content": string;
				"createtime": number;
				"nickname": string;
				"avatar": string;
			}[];
		};
	}>
	{
		//let data = arguments[0];
		return null;
	}

	/**
	 * 漫画
	 * @example comicContent(47195, 85760)
	 */
	@GET('chapter/{comic_id}/{chapter_id}.json')
	comicContent(@Path('comic_id') comic_id: number, @Path('chapter_id') chapter_id: number): IAxiosObservable<{
		"chapter_id": number;
		"comic_id": number;
		"title": string;
		"chapter_order": number;
		"direction": number;
		"page_url": string[];
		"picnum": number;
		"comment_count": number;
	}>
	{
		//let data = arguments[0];
		return null;
	}

	/*
	@GET('users')
	listUsers(@Query('page') _page: number): Observable<User[]>
	{ return null; }

	@POST('users')
	createUser(@Body _userData: CreateUserData): Observable<User>
	{
		return null;
	}

	@PUT('users/{id}')
	updateUser(@Path('id') _id: number, @Body _userData: CreateUserData): Observable<User>
	{ return null; }

	@DELETE('users/{id}')
	deleteUser(@Path('id') _id: number): Observable<void>
	{ return null; }

	@HEAD('test-head')
	@Headers({
		MyHeader: '215',
	})
	testHead(): Observable<void>
	{ return null; }
	*/
}

export default DmzjApiClientV2
