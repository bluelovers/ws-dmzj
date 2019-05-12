/**
 * Created by user on 2019/5/11.
 */
import { HttpRequestOptions, IAxiosRequestConfig, IAxiosObservable, IRestClientAxiosOptions, IHttpRequestOptions } from 'ts-rest-client2';
import { RestClientAxios } from 'ts-rest-client2/lib/axios';
export declare const enum EnumDmzjCode {
    "成功" = 0
}
export declare const enum EnumDmzjMsg {
    "成功" = "\u6210\u529F"
}
export declare const enum EnumDmzjAcgnStatus {
    "已完结" = "\u5DF2\u5B8C\u7ED3",
    "连载中" = "\u8FDE\u8F7D\u4E2D"
}
export declare const enum EnumDmzjAcgnStatusID {
    ALL = 0,
    NOT_DONE = 1,
    DONE = 2
}
export declare const enum EnumDmzjAcgnOrderID {
    /**
     * 0为人气从高到低
     */
    HOT = 0,
    /**
     * 1为更新时间从近到远
     */
    UPDATE = 1
}
export declare const enum EnumDmzjAcgnBigCatID {
    /**
     * 0为漫画
     */
    COMIC = 0,
    /**
     * 1为轻小说
     */
    NOVEL = 1
}
export interface IDmzjJson<T> {
    code: EnumDmzjCode | number;
    msg: EnumDmzjMsg | string;
    data: T;
}
export declare enum EnumNumberBoolean {
    FALSE = 0,
    TRUE = 1
}
/**
 * https://gist.github.com/bluelovers/5e9bfeecdbff431c62d5b50e7bdc3e48
 * https://github.com/guuguo/flutter_dmzj/blob/master/lib/api.dart
 * https://github.com/tkkcc/flutter_dmzj/blob/269cb0d642c710626fe7d755f0b27b12ab477cc6/lib/util/api.dart
 */
export declare class DmzjApiClientV2 extends RestClientAxios {
    constructor(opts?: Partial<IRestClientAxiosOptions>);
    static appendToParams(options: IAxiosRequestConfig | HttpRequestOptions | IHttpRequestOptions): IAxiosRequestConfig | IHttpRequestOptions;
    static buildVersion(): {
        channel: string;
        version: string;
    };
    protected _handleData(data: any): any;
    /**
     * 推荐列表
     */
    articleRecommendHeader(): IAxiosObservable<IDmzjJson<{
        "id": number;
        "title": string;
        "pic_url": string;
        "object_id": number;
        "object_url": string;
    }[]>>;
    /**
     * 文章分类
     */
    articleCategory(): IAxiosObservable<IDmzjJson<{
        "tag_id": number;
        "tag_name": string;
    }[]>>;
    /**
     * 文章列表
     */
    articleList(_tag_id: number, _page?: number): IAxiosObservable<IDmzjJson<{
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
    }[]>>;
    /**
     * 文章列表
     */
    articleShow(object_id: number): IAxiosObservable<IDmzjJson<string>>;
    /**
     * 推荐
     */
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
    }[]>;
    /**
     * 最近更新
     */
    novelRecentUpdate(_page?: number): IAxiosObservable<{
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
    }[]>;
    /**
     * 小说详情
     */
    novelInfo(id: number): IAxiosObservable<{
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
    }>;
    /**
     * 小说卷列表
     */
    novelChapter(id: number): IAxiosObservable<{
        "volume_id": number;
        "id": number;
        "volume_name": string;
        "volume_order": number;
        "chapters": {
            "chapter_id": number;
            "chapter_name": string;
            "chapter_order": number;
        }[];
    }[]>;
    /**
     * 小说章节正文
     * @example novelDownload(2661, 10099, 95922)
     */
    novelDownload(id: number, volume_id: number, chapter_id: number): IAxiosObservable<string>;
    /**
     * 小说分类
     */
    novelCategory(): IAxiosObservable<{
        "tag_id": number;
        "title": string;
        "cover": string;
    }[]>;
    /**
     * 小说筛选条件
     */
    novelFilter(): IAxiosObservable<{
        "title": string;
        "items": {
            "tag_id": number;
            "tag_name": string;
        }[];
    }[]>;
    /**
     * 小说列表
     *
     * @param {number} cat_id 分类id
     * @param {EnumDmzjAcgnStatusID} status_id 连载情况
     * @param {EnumDmzjAcgnOrderID} order_id 排序 0为人气从高到低，1为更新时间从近到远
     * @param {number} page 页数
     */
    novelList(cat_id: number, status_id: EnumDmzjAcgnStatusID, order_id: EnumDmzjAcgnOrderID, page?: number): IAxiosObservable<{
        "cover": string;
        "name": string;
        "authors": string;
        "id": number;
    }[]>;
    /**
     * 搜索
     *
     * @param {EnumDmzjAcgnBigCatID} big_cat_id 分类id; 0为漫画, 1为轻小说
     * @param {string} keywords 关键字
     * @param {number} page 页数
     */
    searchShow(big_cat_id: EnumDmzjAcgnBigCatID.NOVEL, keywords: string, page?: number): IAxiosObservable<{
        "cover": string;
        "name": string;
        "authors": string;
        /**
         * 小说
         */
        "id": number;
    }[]>;
    /**
     * 搜索
     *
     * @param {EnumDmzjAcgnBigCatID} big_cat_id 分类id; 0为漫画, 1为轻小说
     * @param {string} keywords 关键字
     * @param {number} page 页数
     */
    searchShow(big_cat_id: EnumDmzjAcgnBigCatID.COMIC, keywords: string, page?: number): IAxiosObservable<{
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
    }[]>;
    /**
     * 搜索
     *
     * @param {EnumDmzjAcgnBigCatID} big_cat_id 分类id; 0为漫画, 1为轻小说
     * @param {string} keywords 关键字
     * @param {number} page 页数
     */
    searchShow(big_cat_id: EnumDmzjAcgnBigCatID, keywords: string, page?: number): IAxiosObservable<{
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
    }[]>;
    /**
     * 漫画 推荐
     */
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
    })[]>;
    /**
     * 漫画
     * @example comicDetail(47195)
     */
    comicDetail(comic_id: number): IAxiosObservable<{
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
    }>;
    /**
     * 漫画
     * @example comicContent(47195, 85760)
     */
    comicContent(comic_id: number, chapter_id: number): IAxiosObservable<{
        "chapter_id": number;
        "comic_id": number;
        "title": string;
        "chapter_order": number;
        "direction": number;
        "page_url": string[];
        "picnum": number;
        "comment_count": number;
    }>;
}
export default DmzjApiClientV2;
