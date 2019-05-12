"use strict";
/**
 * Created by user on 2019/5/11.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var DmzjApiClientV2_1;
Object.defineProperty(exports, "__esModule", { value: true });
const ts_rest_client2_1 = require("ts-rest-client2");
const util = require("util");
util.inspect.defaultOptions = {
    colors: true,
    depth: 3,
};
const axios_1 = require("ts-rest-client2/lib/axios");
var EnumDmzjCode;
(function (EnumDmzjCode) {
    EnumDmzjCode[EnumDmzjCode["\u6210\u529F"] = 0] = "\u6210\u529F";
})(EnumDmzjCode = exports.EnumDmzjCode || (exports.EnumDmzjCode = {}));
var EnumDmzjMsg;
(function (EnumDmzjMsg) {
    EnumDmzjMsg["\u6210\u529F"] = "\u6210\u529F";
})(EnumDmzjMsg = exports.EnumDmzjMsg || (exports.EnumDmzjMsg = {}));
var EnumDmzjAcgnStatus;
(function (EnumDmzjAcgnStatus) {
    EnumDmzjAcgnStatus["\u5DF2\u5B8C\u7ED3"] = "\u5DF2\u5B8C\u7ED3";
    EnumDmzjAcgnStatus["\u8FDE\u8F7D\u4E2D"] = "\u8FDE\u8F7D\u4E2D";
})(EnumDmzjAcgnStatus = exports.EnumDmzjAcgnStatus || (exports.EnumDmzjAcgnStatus = {}));
var EnumDmzjAcgnStatusID;
(function (EnumDmzjAcgnStatusID) {
    EnumDmzjAcgnStatusID[EnumDmzjAcgnStatusID["ALL"] = 0] = "ALL";
    EnumDmzjAcgnStatusID[EnumDmzjAcgnStatusID["NOT_DONE"] = 1] = "NOT_DONE";
    EnumDmzjAcgnStatusID[EnumDmzjAcgnStatusID["DONE"] = 2] = "DONE";
})(EnumDmzjAcgnStatusID = exports.EnumDmzjAcgnStatusID || (exports.EnumDmzjAcgnStatusID = {}));
var EnumDmzjAcgnOrderID;
(function (EnumDmzjAcgnOrderID) {
    /**
     * 0为人气从高到低
     */
    EnumDmzjAcgnOrderID[EnumDmzjAcgnOrderID["HOT"] = 0] = "HOT";
    /**
     * 1为更新时间从近到远
     */
    EnumDmzjAcgnOrderID[EnumDmzjAcgnOrderID["UPDATE"] = 1] = "UPDATE";
})(EnumDmzjAcgnOrderID = exports.EnumDmzjAcgnOrderID || (exports.EnumDmzjAcgnOrderID = {}));
var EnumDmzjAcgnBigCatID;
(function (EnumDmzjAcgnBigCatID) {
    /**
     * 0为漫画
     */
    EnumDmzjAcgnBigCatID[EnumDmzjAcgnBigCatID["COMIC"] = 0] = "COMIC";
    /**
     * 1为轻小说
     */
    EnumDmzjAcgnBigCatID[EnumDmzjAcgnBigCatID["NOVEL"] = 1] = "NOVEL";
})(EnumDmzjAcgnBigCatID = exports.EnumDmzjAcgnBigCatID || (exports.EnumDmzjAcgnBigCatID = {}));
var EnumNumberBoolean;
(function (EnumNumberBoolean) {
    EnumNumberBoolean[EnumNumberBoolean["FALSE"] = 0] = "FALSE";
    EnumNumberBoolean[EnumNumberBoolean["TRUE"] = 1] = "TRUE";
})(EnumNumberBoolean = exports.EnumNumberBoolean || (exports.EnumNumberBoolean = {}));
/**
 * https://gist.github.com/bluelovers/5e9bfeecdbff431c62d5b50e7bdc3e48
 * https://github.com/guuguo/flutter_dmzj/blob/master/lib/api.dart
 * https://github.com/tkkcc/flutter_dmzj/blob/269cb0d642c710626fe7d755f0b27b12ab477cc6/lib/util/api.dart
 */
let DmzjApiClientV2 = DmzjApiClientV2_1 = class DmzjApiClientV2 extends axios_1.RestClientAxios {
    constructor(opts) {
        super(opts);
        let old = this[ts_rest_client2_1.SymbolRequestInterceptor];
        if (old) {
            let self = this;
            this[ts_rest_client2_1.SymbolRequestInterceptor] = function (...argv) {
                let ret = old.call(self, ...argv);
                return DmzjApiClientV2_1.appendToParams(ret);
            };
        }
        else {
            this[ts_rest_client2_1.SymbolRequestInterceptor] = DmzjApiClientV2_1.appendToParams;
        }
    }
    static appendToParams(options) {
        options = ts_rest_client2_1.HttpRequestOptions.toValue(options);
        let ps = DmzjApiClientV2_1.buildVersion();
        options.params['version'] = options.params['version'] || ps.version;
        options.params['channel'] = options.params['channel'] || ps.channel;
        return options;
    }
    static buildVersion() {
        return {
            channel: "Android",
            version: "2.7.003"
        };
    }
    _handleData(data) {
        if (typeof data === 'string') {
            return JSON.parse(data);
        }
        return data;
    }
    /**
     * 推荐列表
     */
    articleRecommendHeader() {
        //let data = arguments[0];
        return null;
    }
    /**
     * 文章分类
     */
    articleCategory() {
        //let data = arguments[0];
        return null;
    }
    /**
     * 文章列表
     */
    articleList(_tag_id, _page) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 文章列表
     */
    articleShow(object_id) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 推荐
     */
    novelRecommend() {
        return this._handleData(arguments[0]);
    }
    /**
     * 最近更新
     */
    novelRecentUpdate(_page) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 小说详情
     */
    novelInfo(id) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 小说卷列表
     */
    novelChapter(id) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 小说章节正文
     * @example novelDownload(2661, 10099, 95922)
     */
    novelDownload(id, volume_id, chapter_id) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 小说分类
     */
    novelCategory() {
        //let data = arguments[0];
        return null;
    }
    /**
     * 小说筛选条件
     */
    novelFilter() {
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
    novelList(cat_id, status_id, order_id, page) {
        //let data = arguments[0];
        return null;
    }
    searchShow(big_cat_id, keywords, page) {
        return this._handleData(arguments[0]);
    }
    /**
     * 漫画 推荐
     */
    comicRecommend() {
        //let data = arguments[0];
        return null;
    }
    /**
     * 漫画
     * @example comicDetail(47195)
     */
    comicDetail(comic_id) {
        //let data = arguments[0];
        return null;
    }
    /**
     * 漫画
     * @example comicContent(47195, 85760)
     */
    comicContent(comic_id, chapter_id) {
        //let data = arguments[0];
        return null;
    }
};
__decorate([
    ts_rest_client2_1.GET('article/recommend/header.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "articleRecommendHeader", null);
__decorate([
    ts_rest_client2_1.GET('article/category.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "articleCategory", null);
__decorate([
    ts_rest_client2_1.GET('article/list/v2/{tag_id}/2/{page}.json'),
    __param(0, ts_rest_client2_1.Path('tag_id')), __param(1, ts_rest_client2_1.Path('page', 0)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "articleList", null);
__decorate([
    ts_rest_client2_1.GET('article/show/v2/{object_id}.html'),
    __param(0, ts_rest_client2_1.Path('object_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "articleShow", null);
__decorate([
    ts_rest_client2_1.GET('novel/recommend.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelRecommend", null);
__decorate([
    ts_rest_client2_1.GET('novel/recentUpdate/{page}.json'),
    __param(0, ts_rest_client2_1.Path('page', 0)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelRecentUpdate", null);
__decorate([
    ts_rest_client2_1.GET('novel/{id}.json'),
    __param(0, ts_rest_client2_1.Path('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelInfo", null);
__decorate([
    ts_rest_client2_1.GET('novel/chapter/{id}.json'),
    __param(0, ts_rest_client2_1.Path('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelChapter", null);
__decorate([
    ts_rest_client2_1.GET('novel/download/{id}_{volume_id}_{chapter_id}.txt'),
    __param(0, ts_rest_client2_1.Path('id')),
    __param(1, ts_rest_client2_1.Path('volume_id')),
    __param(2, ts_rest_client2_1.Path('chapter_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelDownload", null);
__decorate([
    ts_rest_client2_1.GET('1/category.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelCategory", null);
__decorate([
    ts_rest_client2_1.GET('novel/filter.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelFilter", null);
__decorate([
    ts_rest_client2_1.GET('novel/{cat_id}/{status_id}/{order_id}/{page}.json'),
    __param(0, ts_rest_client2_1.Path('cat_id')),
    __param(1, ts_rest_client2_1.Path('status_id')),
    __param(2, ts_rest_client2_1.Path('order_id')),
    __param(3, ts_rest_client2_1.Path('page', 0)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "novelList", null);
__decorate([
    ts_rest_client2_1.GET('search/show/{big_cat_id}/{keywords}/{page}.json'),
    __param(0, ts_rest_client2_1.Path('big_cat_id')),
    __param(1, ts_rest_client2_1.Path('keywords')),
    __param(2, ts_rest_client2_1.Path('page', 0)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "searchShow", null);
__decorate([
    ts_rest_client2_1.GET('v3/recommend.json'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "comicRecommend", null);
__decorate([
    ts_rest_client2_1.GET('comic/{comic_id}.json'),
    __param(0, ts_rest_client2_1.Path('comic_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "comicDetail", null);
__decorate([
    ts_rest_client2_1.GET('chapter/{comic_id}/{chapter_id}.json'),
    __param(0, ts_rest_client2_1.Path('comic_id')), __param(1, ts_rest_client2_1.Path('chapter_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], DmzjApiClientV2.prototype, "comicContent", null);
DmzjApiClientV2 = DmzjApiClientV2_1 = __decorate([
    ts_rest_client2_1.BaseUrl('http://v2.api.dmzj.com'),
    ts_rest_client2_1.DefaultHeaders({
        Accepts: 'application/json',
        Referer: 'http://www.dmzj.com/',
    }),
    __metadata("design:paramtypes", [Object])
], DmzjApiClientV2);
exports.DmzjApiClientV2 = DmzjApiClientV2;
exports.default = DmzjApiClientV2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7OztBQUVILHFEQXVCeUI7QUFFekIsNkJBQThCO0FBRzlCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHO0lBQzdCLE1BQU0sRUFBRSxJQUFJO0lBQ1osS0FBSyxFQUFFLENBQUM7Q0FDUixDQUFDO0FBR0YscURBQXlFO0FBR3pFLElBQWtCLFlBR2pCO0FBSEQsV0FBa0IsWUFBWTtJQUU3QiwrREFBUSxDQUFBO0FBQ1QsQ0FBQyxFQUhpQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUc3QjtBQUVELElBQWtCLFdBR2pCO0FBSEQsV0FBa0IsV0FBVztJQUU1Qiw0Q0FBVyxDQUFBO0FBQ1osQ0FBQyxFQUhpQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUc1QjtBQUVELElBQWtCLGtCQUlqQjtBQUpELFdBQWtCLGtCQUFrQjtJQUVuQywrREFBYSxDQUFBO0lBQ2IsK0RBQWEsQ0FBQTtBQUNkLENBQUMsRUFKaUIsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJbkM7QUFFRCxJQUFrQixvQkFLakI7QUFMRCxXQUFrQixvQkFBb0I7SUFFckMsNkRBQUcsQ0FBQTtJQUNILHVFQUFRLENBQUE7SUFDUiwrREFBSSxDQUFBO0FBQ0wsQ0FBQyxFQUxpQixvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUtyQztBQUVELElBQWtCLG1CQVVqQjtBQVZELFdBQWtCLG1CQUFtQjtJQUVwQzs7T0FFRztJQUNILDJEQUFHLENBQUE7SUFDSDs7T0FFRztJQUNILGlFQUFNLENBQUE7QUFDUCxDQUFDLEVBVmlCLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBVXBDO0FBRUQsSUFBa0Isb0JBVWpCO0FBVkQsV0FBa0Isb0JBQW9CO0lBRXJDOztPQUVHO0lBQ0gs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QUMsQ0FBQyxDQUFBOzs7O2dEQVVoQjtBQTRFRDtJQURDLHFCQUFHLENBQUMsaURBQWlELENBQUM7SUFDM0MsV0FBQSxzQkFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzVCLFdBQUEsc0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUNoQixXQUFBLHNCQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O2lEQXdCaEI7QUFNRDtJQURDLHFCQUFHLENBQUMsbUJBQW1CLENBQUM7Ozs7cURBbUN4QjtBQU9EO0lBREMscUJBQUcsQ0FBQyx1QkFBdUIsQ0FBQztJQUNoQixXQUFBLHNCQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Ozs7a0RBcUQ1QjtBQU9EO0lBREMscUJBQUcsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM5QixXQUFBLHNCQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsRUFBb0IsV0FBQSxzQkFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBOzs7O21EQWFuRTtBQS9mVyxlQUFlO0lBTDNCLHlCQUFPLENBQUMsd0JBQXdCLENBQUM7SUFDakMsZ0NBQWMsQ0FBQztRQUNmLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsT0FBTyxFQUFFLHNCQUFzQjtLQUMvQixDQUFDOztHQUNXLGVBQWUsQ0EyaEIzQjtBQTNoQlksMENBQWU7QUE2aEI1QixrQkFBZSxlQUFlLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzUvMTEuXG4gKi9cblxuaW1wb3J0IHtcblx0QmFzZVVybCxcblx0Qm9keSxcblx0RGVmYXVsdEhlYWRlcnMsXG5cdERFTEVURSxcblx0R0VULFxuXHRIRUFELFxuXHRIZWFkZXJzLFxuXHRQYXRoLFxuXHRQT1NULFxuXHRQVVQsXG5cdFF1ZXJ5LFxuXHRSZXN0Q2xpZW50LFxuXHRNb2NrSHR0cFNlcnZpY2UsXG5cdEh0dHBTZXJ2aWNlLFxuXHRIdHRwUmVxdWVzdE9wdGlvbnMsXG5cdE5hbWVkVmFsdWVzLFxuXHRPYnNlcnZhYmxlLFxuXHRJQXhpb3NSZXF1ZXN0Q29uZmlnLFxuXHRJQXhpb3NPYnNlcnZhYmxlLCBJUmVzdENsaWVudE9wdGlvbnMsIElSZXN0Q2xpZW50QXhpb3NPcHRpb25zLFxuXHRJQXhpb3MsXG5cdElCbHVlYmlyZCxcblx0SVJlcXVlc3RDb25maWcsIHJlc29sdmVPYnNlcnZhYmxlLCBTeW1ib2xSZXF1ZXN0SW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0SW50ZXJjZXB0b3IsIElIdHRwUmVxdWVzdE9wdGlvbnMsXG59IGZyb20gJ3RzLXJlc3QtY2xpZW50Mic7XG5pbXBvcnQgQmx1ZWJpcmQgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuaW1wb3J0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5pbXBvcnQgeyBjaGVja1R5cGUgfSBmcm9tICd0cy1jaGVjayc7XG5cbnV0aWwuaW5zcGVjdC5kZWZhdWx0T3B0aW9ucyA9IHtcblx0Y29sb3JzOiB0cnVlLFxuXHRkZXB0aDogMyxcbn07XG5cbmltcG9ydCB7IEF4aW9zIH0gZnJvbSAnYXhpb3Mtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVBeGlvcywgUmVzdENsaWVudEF4aW9zIH0gZnJvbSAndHMtcmVzdC1jbGllbnQyL2xpYi9heGlvcyc7XG5pbXBvcnQgeyBzdGFuZGFyZFF1ZXJ5RW5jb2RpbmcsIHVybFJlc29sdmUgfSBmcm9tICd0cy1yZXN0LWNsaWVudDIvbGliL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtRG16akNvZGVcbntcblx0XCLmiJDlip9cIiA9IDAsXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVudW1EbXpqTXNnXG57XG5cdFwi5oiQ5YqfXCIgPSBcIuaIkOWKn1wiLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtRG16akFjZ25TdGF0dXNcbntcblx0XCLlt7Llroznu5NcIiA9IFwi5bey5a6M57uTXCIsXG5cdFwi6L+e6L295LitXCIgPSBcIui/nui9veS4rVwiLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtRG16akFjZ25TdGF0dXNJRFxue1xuXHRBTEwsXG5cdE5PVF9ET05FLFxuXHRET05FLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtRG16akFjZ25PcmRlcklEXG57XG5cdC8qKlxuXHQgKiAw5Li65Lq65rCU5LuO6auY5Yiw5L2OXG5cdCAqL1xuXHRIT1QsXG5cdC8qKlxuXHQgKiAx5Li65pu05paw5pe26Ze05LuO6L+R5Yiw6L+cXG5cdCAqL1xuXHRVUERBVEUsXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVudW1EbXpqQWNnbkJpZ0NhdElEXG57XG5cdC8qKlxuXHQgKiAw5Li65ryr55S7XG5cdCAqL1xuXHRDT01JQyxcblx0LyoqXG5cdCAqIDHkuLrovbvlsI/or7Rcblx0ICovXG5cdE5PVkVMLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEbXpqSnNvbjxUPlxue1xuXHRjb2RlOiBFbnVtRG16akNvZGUgfCBudW1iZXIsXG5cdG1zZzogRW51bURtempNc2cgfCBzdHJpbmcsXG5cdGRhdGE6IFRcbn1cblxuZXhwb3J0IGVudW0gRW51bU51bWJlckJvb2xlYW5cbntcblx0RkFMU0UsXG5cdFRSVUUsXG59XG5cbi8qKlxuICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYmx1ZWxvdmVycy81ZTliZmVlY2RiZmY0MzFjNjJkNWI1MGU3YmRjM2U0OFxuICogaHR0cHM6Ly9naXRodWIuY29tL2d1dWd1by9mbHV0dGVyX2RtemovYmxvYi9tYXN0ZXIvbGliL2FwaS5kYXJ0XG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGtrY2MvZmx1dHRlcl9kbXpqL2Jsb2IvMjY5Y2IwZDY0MmM3MTA2MjZmZTdkNzU1ZjBiMjdiMTJhYjQ3N2NjNi9saWIvdXRpbC9hcGkuZGFydFxuICovXG5AQmFzZVVybCgnaHR0cDovL3YyLmFwaS5kbXpqLmNvbScpXG5ARGVmYXVsdEhlYWRlcnMoe1xuXHRBY2NlcHRzOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFJlZmVyZXI6ICdodHRwOi8vd3d3LmRtemouY29tLycsXG59KVxuZXhwb3J0IGNsYXNzIERtempBcGlDbGllbnRWMiBleHRlbmRzIFJlc3RDbGllbnRBeGlvc1xue1xuXG5cdGNvbnN0cnVjdG9yKG9wdHM/OiBQYXJ0aWFsPElSZXN0Q2xpZW50QXhpb3NPcHRpb25zPilcblx0e1xuXHRcdHN1cGVyKG9wdHMpO1xuXG5cdFx0bGV0IG9sZDogSHR0cFJlcXVlc3RJbnRlcmNlcHRvcjxJUmVzdENsaWVudEF4aW9zT3B0aW9uc1tcImh0dHBDbGllbnRcIl0+ID0gdGhpc1tTeW1ib2xSZXF1ZXN0SW50ZXJjZXB0b3JdO1xuXG5cdFx0aWYgKG9sZClcblx0XHR7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRcdHRoaXNbU3ltYm9sUmVxdWVzdEludGVyY2VwdG9yXSA9IGZ1bmN0aW9uICguLi5hcmd2KVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgcmV0ID0gb2xkLmNhbGwoc2VsZiwgLi4uYXJndik7XG5cblx0XHRcdFx0cmV0dXJuIERtempBcGlDbGllbnRWMi5hcHBlbmRUb1BhcmFtcyhyZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0dGhpc1tTeW1ib2xSZXF1ZXN0SW50ZXJjZXB0b3JdID0gRG16akFwaUNsaWVudFYyLmFwcGVuZFRvUGFyYW1zXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGFwcGVuZFRvUGFyYW1zKG9wdGlvbnM6IElBeGlvc1JlcXVlc3RDb25maWcgfCBIdHRwUmVxdWVzdE9wdGlvbnMgfCBJSHR0cFJlcXVlc3RPcHRpb25zKVxuXHR7XG5cdFx0b3B0aW9ucyA9IEh0dHBSZXF1ZXN0T3B0aW9ucy50b1ZhbHVlKG9wdGlvbnMpO1xuXG5cdFx0bGV0IHBzID0gRG16akFwaUNsaWVudFYyLmJ1aWxkVmVyc2lvbigpO1xuXG5cdFx0b3B0aW9ucy5wYXJhbXNbJ3ZlcnNpb24nXSA9IG9wdGlvbnMucGFyYW1zWyd2ZXJzaW9uJ10gfHwgcHMudmVyc2lvbjtcblx0XHRvcHRpb25zLnBhcmFtc1snY2hhbm5lbCddID0gb3B0aW9ucy5wYXJhbXNbJ2NoYW5uZWwnXSB8fCBwcy5jaGFubmVsO1xuXG5cdFx0cmV0dXJuIG9wdGlvbnM7XG5cdH1cblxuXHRzdGF0aWMgYnVpbGRWZXJzaW9uKClcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHRjaGFubmVsOiBcIkFuZHJvaWRcIixcblx0XHRcdHZlcnNpb246IFwiMi43LjAwM1wiXG5cdFx0fVxuXHR9XG5cblx0cHJvdGVjdGVkIF9oYW5kbGVEYXRhKGRhdGEpXG5cdHtcblx0XHRpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKVxuXHRcdHtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKGRhdGEpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGE7XG5cdH1cblxuXHQvKipcblx0ICog5o6o6I2Q5YiX6KGoXG5cdCAqL1xuXHRAR0VUKCdhcnRpY2xlL3JlY29tbWVuZC9oZWFkZXIuanNvbicpXG5cdGFydGljbGVSZWNvbW1lbmRIZWFkZXIoKTogSUF4aW9zT2JzZXJ2YWJsZTxJRG16akpzb248e1xuXHRcdFwiaWRcIjogbnVtYmVyLFxuXHRcdFwidGl0bGVcIjogc3RyaW5nLFxuXHRcdFwicGljX3VybFwiOiBzdHJpbmcsXG5cdFx0XCJvYmplY3RfaWRcIjogbnVtYmVyLFxuXHRcdFwib2JqZWN0X3VybFwiOiBzdHJpbmcsXG5cdH1bXT4+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaWh+eroOWIhuexu1xuXHQgKi9cblx0QEdFVCgnYXJ0aWNsZS9jYXRlZ29yeS5qc29uJylcblx0YXJ0aWNsZUNhdGVnb3J5KCk6IElBeGlvc09ic2VydmFibGU8SURtempKc29uPHtcblx0XHRcInRhZ19pZFwiOiBudW1iZXIsXG5cdFx0XCJ0YWdfbmFtZVwiOiBzdHJpbmdcblx0fVtdPj5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5paH56ug5YiX6KGoXG5cdCAqL1xuXHRAR0VUKCdhcnRpY2xlL2xpc3QvdjIve3RhZ19pZH0vMi97cGFnZX0uanNvbicpXG5cdGFydGljbGVMaXN0KEBQYXRoKCd0YWdfaWQnKSBfdGFnX2lkOiBudW1iZXIsIEBQYXRoKCdwYWdlJywgMCkgX3BhZ2U/OiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPElEbXpqSnNvbjx7XG5cdFx0dGl0bGU6IHN0cmluZztcblx0XHRmcm9tX25hbWU6IHN0cmluZztcblx0XHRmcm9tX3VybDogc3RyaW5nO1xuXHRcdGNyZWF0ZV90aW1lOiBudW1iZXI7XG5cdFx0aXNfZm9yZWlnbjogbnVtYmVyO1xuXHRcdGZvcmVpZ25fdXJsOiBzdHJpbmc7XG5cdFx0aW50cm86IHN0cmluZztcblx0XHRhdXRob3JfaWQ6IG51bWJlcjtcblx0XHRzdGF0dXM6IG51bWJlcjtcblx0XHRyb3dfcGljX3VybDogc3RyaW5nO1xuXHRcdGNvbF9waWNfdXJsOiBzdHJpbmc7XG5cdFx0YXJ0aWNsZV9pZDogbnVtYmVyO1xuXHRcdHBhZ2VfdXJsOiBzdHJpbmc7XG5cdFx0Y29tbWVudF9hbW91bnQ6IHN0cmluZztcblx0XHRhdXRob3JfdWlkOiBudW1iZXI7XG5cdFx0Y292ZXI6IHN0cmluZztcblx0XHRuaWNrbmFtZTogc3RyaW5nO1xuXHRcdG1vb2RfYW1vdW50OiBudW1iZXI7XG5cdH1bXT4+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaWh+eroOWIl+ihqFxuXHQgKi9cblx0QEdFVCgnYXJ0aWNsZS9zaG93L3YyL3tvYmplY3RfaWR9Lmh0bWwnKVxuXHRhcnRpY2xlU2hvdyhAUGF0aCgnb2JqZWN0X2lkJykgb2JqZWN0X2lkOiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPElEbXpqSnNvbjxzdHJpbmc+PlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDmjqjojZBcblx0ICovXG5cdEBHRVQoJ25vdmVsL3JlY29tbWVuZC5qc29uJylcblx0bm92ZWxSZWNvbW1lbmQoKTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0Y2F0ZWdvcnlfaWQ6IG51bWJlcjtcblx0XHRzb3J0OiBudW1iZXI7XG5cdFx0dGl0bGU6IHN0cmluZyB8IFwi6L2u55Wq5Zu+XCIgfCBcIuacgOaWsOabtOaWsFwiIHwgXCLliqjnlLvov5vooYzml7ZcIiB8IFwi5Y2z5bCG5Yqo55S75YyWXCIgfCBcIue7j+WFuOW/heeci1wiO1xuXHRcdGRhdGE6IHtcblx0XHRcdGlkOiBudW1iZXI7XG5cdFx0XHRvYmpfaWQ6IG51bWJlcjtcblx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRjb3Zlcjogc3RyaW5nO1xuXHRcdFx0dXJsOiBzdHJpbmc7XG5cdFx0XHR0eXBlOiBudW1iZXI7XG5cdFx0XHRzdWJfdGl0bGU6IHN0cmluZztcblx0XHRcdHN0YXR1czogRW51bURtempBY2duU3RhdHVzO1xuXHRcdH1bXTtcblx0fVtdPlxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2hhbmRsZURhdGEoYXJndW1lbnRzWzBdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmnIDov5Hmm7TmlrBcblx0ICovXG5cdEBHRVQoJ25vdmVsL3JlY2VudFVwZGF0ZS97cGFnZX0uanNvbicpXG5cdG5vdmVsUmVjZW50VXBkYXRlKEBQYXRoKCdwYWdlJywgMCkgX3BhZ2U/OiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcInN0YXR1c1wiOiBFbnVtRG16akFjZ25TdGF0dXM7XG5cdFx0XCJuYW1lXCI6IHN0cmluZztcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwidHlwZXNcIjogc3RyaW5nW107XG5cdFx0XCJsYXN0X3VwZGF0ZV9jaGFwdGVyX2lkXCI6IG51bWJlcjtcblx0XHRcImxhc3RfdXBkYXRlX3ZvbHVtZV9pZFwiOiBudW1iZXI7XG5cdFx0XCJsYXN0X3VwZGF0ZV92b2x1bWVfbmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJsYXN0X3VwZGF0ZV9jaGFwdGVyX25hbWVcIjogc3RyaW5nO1xuXHRcdFwibGFzdF91cGRhdGVfdGltZVwiOiBudW1iZXI7XG5cdH1bXT5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5bCP6K+06K+m5oOFXG5cdCAqL1xuXHRAR0VUKCdub3ZlbC97aWR9Lmpzb24nKVxuXHRub3ZlbEluZm8oQFBhdGgoJ2lkJykgaWQ6IG51bWJlcik6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdFwiaWRcIjogbnVtYmVyO1xuXHRcdFwibmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJ6b25lXCI6IHN0cmluZyB8IFwi5pel5pysXCI7XG5cdFx0XCJzdGF0dXNcIjogRW51bURtempBY2duU3RhdHVzO1xuXHRcdFwibGFzdF91cGRhdGVfdm9sdW1lX25hbWVcIjogc3RyaW5nO1xuXHRcdFwibGFzdF91cGRhdGVfY2hhcHRlcl9uYW1lXCI6IHN0cmluZztcblx0XHRcImxhc3RfdXBkYXRlX3ZvbHVtZV9pZFwiOiBudW1iZXI7XG5cdFx0XCJsYXN0X3VwZGF0ZV9jaGFwdGVyX2lkXCI6IG51bWJlcjtcblx0XHRcImxhc3RfdXBkYXRlX3RpbWVcIjogbnVtYmVyO1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwiaG90X2hpdHNcIjogbnVtYmVyO1xuXHRcdFwiaW50cm9kdWN0aW9uXCI6IHN0cmluZztcblx0XHRcInR5cGVzXCI6IHN0cmluZ1tdO1xuXHRcdFwiYXV0aG9yc1wiOiBzdHJpbmc7XG5cdFx0XCJzdWJzY3JpYmVfbnVtXCI6IG51bWJlcjtcblx0XHRcInZvbHVtZVwiOiB7XG5cdFx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcdFwibG5vdmVsX2lkXCI6IG51bWJlcjtcblx0XHRcdFwidm9sdW1lX25hbWVcIjogc3RyaW5nO1xuXHRcdFx0XCJ2b2x1bWVfb3JkZXJcIjogbnVtYmVyO1xuXHRcdFx0XCJhZGR0aW1lXCI6IG51bWJlcjtcblx0XHRcdFwic3VtX2NoYXB0ZXJzXCI6IG51bWJlcjtcblx0XHR9W107XG5cdH0+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWwj+ivtOWNt+WIl+ihqFxuXHQgKi9cblx0QEdFVCgnbm92ZWwvY2hhcHRlci97aWR9Lmpzb24nKVxuXHRub3ZlbENoYXB0ZXIoQFBhdGgoJ2lkJykgaWQ6IG51bWJlcik6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdFwidm9sdW1lX2lkXCI6IG51bWJlcjtcblx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcInZvbHVtZV9uYW1lXCI6IHN0cmluZztcblx0XHRcInZvbHVtZV9vcmRlclwiOiBudW1iZXI7XG5cdFx0XCJjaGFwdGVyc1wiOiB7XG5cdFx0XHRcImNoYXB0ZXJfaWRcIjogbnVtYmVyO1xuXHRcdFx0XCJjaGFwdGVyX25hbWVcIjogc3RyaW5nO1xuXHRcdFx0XCJjaGFwdGVyX29yZGVyXCI6IG51bWJlcjtcblx0XHR9W107XG5cdH1bXT5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5bCP6K+056ug6IqC5q2j5paHXG5cdCAqIEBleGFtcGxlIG5vdmVsRG93bmxvYWQoMjY2MSwgMTAwOTksIDk1OTIyKVxuXHQgKi9cblx0QEdFVCgnbm92ZWwvZG93bmxvYWQve2lkfV97dm9sdW1lX2lkfV97Y2hhcHRlcl9pZH0udHh0Jylcblx0bm92ZWxEb3dubG9hZChAUGF0aCgnaWQnKSBpZDogbnVtYmVyLFxuXHRcdEBQYXRoKCd2b2x1bWVfaWQnKSB2b2x1bWVfaWQ6IG51bWJlcixcblx0XHRAUGF0aCgnY2hhcHRlcl9pZCcpIGNoYXB0ZXJfaWQ6IG51bWJlcixcblx0KTogSUF4aW9zT2JzZXJ2YWJsZTxzdHJpbmc+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWwj+ivtOWIhuexu1xuXHQgKi9cblx0QEdFVCgnMS9jYXRlZ29yeS5qc29uJylcblx0bm92ZWxDYXRlZ29yeSgpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcInRhZ19pZFwiOiBudW1iZXI7XG5cdFx0XCJ0aXRsZVwiOiBzdHJpbmc7XG5cdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdH1bXT5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5bCP6K+0562b6YCJ5p2h5Lu2XG5cdCAqL1xuXHRAR0VUKCdub3ZlbC9maWx0ZXIuanNvbicpXG5cdG5vdmVsRmlsdGVyKCk6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwiaXRlbXNcIjoge1xuXHRcdFx0XCJ0YWdfaWRcIjogbnVtYmVyO1xuXHRcdFx0XCJ0YWdfbmFtZVwiOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9W10+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWwj+ivtOWIl+ihqFxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY2F0X2lkIOWIhuexu2lkXG5cdCAqIEBwYXJhbSB7RW51bURtempBY2duU3RhdHVzSUR9IHN0YXR1c19pZCDov57ovb3mg4XlhrVcblx0ICogQHBhcmFtIHtFbnVtRG16akFjZ25PcmRlcklEfSBvcmRlcl9pZCDmjpLluo8gMOS4uuS6uuawlOS7jumrmOWIsOS9ju+8jDHkuLrmm7TmlrDml7bpl7Tku47ov5HliLDov5xcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2Ug6aG15pWwXG5cdCAqL1xuXHRAR0VUKCdub3ZlbC97Y2F0X2lkfS97c3RhdHVzX2lkfS97b3JkZXJfaWR9L3twYWdlfS5qc29uJylcblx0bm92ZWxMaXN0KEBQYXRoKCdjYXRfaWQnKSBjYXRfaWQ6IG51bWJlcixcblx0XHRAUGF0aCgnc3RhdHVzX2lkJykgc3RhdHVzX2lkOiBFbnVtRG16akFjZ25TdGF0dXNJRCxcblx0XHRAUGF0aCgnb3JkZXJfaWQnKSBvcmRlcl9pZDogRW51bURtempBY2duT3JkZXJJRCxcblx0XHRAUGF0aCgncGFnZScsIDApIHBhZ2U/OiBudW1iZXIsXG5cdCk6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwibmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJhdXRob3JzXCI6IHN0cmluZztcblx0XHRcImlkXCI6IG51bWJlcjtcblx0fVtdPlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDmkJzntKJcblx0ICpcblx0ICogQHBhcmFtIHtFbnVtRG16akFjZ25CaWdDYXRJRH0gYmlnX2NhdF9pZCDliIbnsbtpZDsgMOS4uua8q+eUuywgMeS4uui9u+Wwj+ivtFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZHMg5YWz6ZSu5a2XXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIOmhteaVsFxuXHQgKi9cblx0c2VhcmNoU2hvdyhiaWdfY2F0X2lkOiBFbnVtRG16akFjZ25CaWdDYXRJRC5OT1ZFTCxcblx0XHRrZXl3b3Jkczogc3RyaW5nLFxuXHRcdHBhZ2U/OiBudW1iZXIsXG5cdCk6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwibmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJhdXRob3JzXCI6IHN0cmluZztcblx0XHQvKipcblx0XHQgKiDlsI/or7Rcblx0XHQgKi9cblx0XHRcImlkXCI6IG51bWJlcjtcblx0fVtdPlxuXHQvKipcblx0ICog5pCc57SiXG5cdCAqXG5cdCAqIEBwYXJhbSB7RW51bURtempBY2duQmlnQ2F0SUR9IGJpZ19jYXRfaWQg5YiG57G7aWQ7IDDkuLrmvKvnlLssIDHkuLrovbvlsI/or7Rcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleXdvcmRzIOWFs+mUruWtl1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZSDpobXmlbBcblx0ICovXG5cdHNlYXJjaFNob3coYmlnX2NhdF9pZDogRW51bURtempBY2duQmlnQ2F0SUQuQ09NSUMsXG5cdFx0a2V5d29yZHM6IHN0cmluZyxcblx0XHRwYWdlPzogbnVtYmVyLFxuXHQpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHQvKipcblx0XHQgKiDmvKvnlLtcblx0XHQgKi9cblx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcInN0YXR1c1wiOiBzdHJpbmcgfCBFbnVtRG16akFjZ25TdGF0dXM7XG5cdFx0XCJ0aXRsZVwiOiBzdHJpbmc7XG5cdFx0XCJsYXN0X25hbWVcIjogc3RyaW5nO1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwiYXV0aG9yc1wiOiBzdHJpbmc7XG5cdFx0XCJ0eXBlc1wiOiBzdHJpbmc7XG5cdFx0XCJob3RfaGl0c1wiOiBudW1iZXI7XG5cdH1bXT5cblx0LyoqXG5cdCAqIOaQnOe0olxuXHQgKlxuXHQgKiBAcGFyYW0ge0VudW1EbXpqQWNnbkJpZ0NhdElEfSBiaWdfY2F0X2lkIOWIhuexu2lkOyAw5Li65ryr55S7LCAx5Li66L275bCP6K+0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkcyDlhbPplK7lrZdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2Ug6aG15pWwXG5cdCAqL1xuXHRzZWFyY2hTaG93KGJpZ19jYXRfaWQ6IEVudW1EbXpqQWNnbkJpZ0NhdElELFxuXHRcdGtleXdvcmRzOiBzdHJpbmcsXG5cdFx0cGFnZT86IG51bWJlcixcblx0KTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdFx0XCJuYW1lXCI6IHN0cmluZztcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIOWwj+ivtFxuXHRcdCAqL1xuXHRcdFwiaWRcIjogbnVtYmVyO1xuXHR9W10gfCB7XG5cdFx0LyoqXG5cdFx0ICog5ryr55S7XG5cdFx0ICovXG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XCJzdGF0dXNcIjogc3RyaW5nIHwgRW51bURtempBY2duU3RhdHVzO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwibGFzdF9uYW1lXCI6IHN0cmluZztcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdFwidHlwZXNcIjogc3RyaW5nO1xuXHRcdFwiaG90X2hpdHNcIjogbnVtYmVyO1xuXHR9W10+XG5cdEBHRVQoJ3NlYXJjaC9zaG93L3tiaWdfY2F0X2lkfS97a2V5d29yZHN9L3twYWdlfS5qc29uJylcblx0c2VhcmNoU2hvdyhAUGF0aCgnYmlnX2NhdF9pZCcpIGJpZ19jYXRfaWQ6IEVudW1EbXpqQWNnbkJpZ0NhdElELFxuXHRcdEBQYXRoKCdrZXl3b3JkcycpIGtleXdvcmRzOiBzdHJpbmcsXG5cdFx0QFBhdGgoJ3BhZ2UnLCAwKSBwYWdlPzogbnVtYmVyLFxuXHQpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcIm5hbWVcIjogc3RyaW5nO1xuXHRcdFwiYXV0aG9yc1wiOiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICog5bCP6K+0XG5cdFx0ICovXG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdH1bXSB8IHtcblx0XHQvKipcblx0XHQgKiDmvKvnlLtcblx0XHQgKi9cblx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcInN0YXR1c1wiOiBzdHJpbmcgfCBFbnVtRG16akFjZ25TdGF0dXM7XG5cdFx0XCJ0aXRsZVwiOiBzdHJpbmc7XG5cdFx0XCJsYXN0X25hbWVcIjogc3RyaW5nO1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwiYXV0aG9yc1wiOiBzdHJpbmc7XG5cdFx0XCJ0eXBlc1wiOiBzdHJpbmc7XG5cdFx0XCJob3RfaGl0c1wiOiBudW1iZXI7XG5cdH1bXT5cblx0e1xuXHRcdHJldHVybiB0aGlzLl9oYW5kbGVEYXRhKGFyZ3VtZW50c1swXSk7XG5cdH1cblxuXHQvKipcblx0ICog5ryr55S7IOaOqOiNkFxuXHQgKi9cblx0QEdFVCgndjMvcmVjb21tZW5kLmpzb24nKVxuXHRjb21pY1JlY29tbWVuZCgpOiBJQXhpb3NPYnNlcnZhYmxlPCh7XG5cdFx0XCJjYXRlZ29yeV9pZFwiOiBudW1iZXI7XG5cdFx0XCJ0aXRsZVwiOiBzdHJpbmcgfCBcIuWkp+WbvuaOqOiNkFwiIHwgXCLov5HmnJ/lv4XnnItcIiB8IFwi54Gr54Ot5LiT6aKYXCIgfCBcIuWkp+W4iOe6p+S9nOiAheaAjuiDveS4jeeci1wiIHwgXCLlm73mvKvkuZ/nsr7lvalcIiB8IFwi576O5ryr5aSn5LqL5Lu2XCIgfCBcIueDremXqOi/nui9vVwiIHwgXCLmnaHmvKvkuJPljLpcIjtcblx0XHRcInNvcnRcIjogbnVtYmVyO1xuXHRcdFwiZGF0YVwiOiB7XG5cdFx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFx0XCJzdWJfdGl0bGVcIjogc3RyaW5nO1xuXHRcdFx0XCJ0eXBlXCI6IG51bWJlcjtcblx0XHRcdFwidXJsXCI6IHN0cmluZztcblx0XHRcdC8qKlxuXHRcdFx0ICogY29taWNfaWRcblx0XHRcdCAqL1xuXHRcdFx0XCJvYmpfaWRcIjogbnVtYmVyO1xuXHRcdFx0XCJzdGF0dXNcIjogc3RyaW5nIHwgJycgfCBFbnVtRG16akFjZ25TdGF0dXM7XG5cdFx0fVtdO1xuXHR9IHwge1xuXHRcdFwiY2F0ZWdvcnlfaWRcIjogbnVtYmVyO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nIHwgXCLmnIDmlrDkuIrmnrZcIjtcblx0XHRcInNvcnRcIjogbnVtYmVyO1xuXHRcdFwiZGF0YVwiOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIGNvbWljX2lkXG5cdFx0XHQgKi9cblx0XHRcdFwiaWRcIjogbnVtYmVyO1xuXHRcdFx0XCJ0aXRsZVwiOiBzdHJpbmc7XG5cdFx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdFx0XCJzdGF0dXNcIjogc3RyaW5nIHwgJycgfCBFbnVtRG16akFjZ25TdGF0dXM7XG5cdFx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHR9W107XG5cdH0pW10+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOa8q+eUu1xuXHQgKiBAZXhhbXBsZSBjb21pY0RldGFpbCg0NzE5NSlcblx0ICovXG5cdEBHRVQoJ2NvbWljL3tjb21pY19pZH0uanNvbicpXG5cdGNvbWljRGV0YWlsKEBQYXRoKCdjb21pY19pZCcpIGNvbWljX2lkOiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcImlzbG9uZ1wiOiBudW1iZXI7XG5cdFx0XCJkaXJlY3Rpb25cIjogbnVtYmVyO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwiaXNfZG16alwiOiBudW1iZXIgfCBFbnVtTnVtYmVyQm9vbGVhbjtcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcImRlc2NyaXB0aW9uXCI6IHN0cmluZztcblx0XHRcImxhc3RfdXBkYXRldGltZVwiOiBudW1iZXI7XG5cdFx0XCJjb3B5cmlnaHRcIjogbnVtYmVyIHwgRW51bU51bWJlckJvb2xlYW47XG5cdFx0XCJmaXJzdF9sZXR0ZXJcIjogc3RyaW5nO1xuXHRcdFwiaG90X251bVwiOiBudW1iZXI7XG5cdFx0XCJoaXRfbnVtXCI6IG51bWJlcjtcblx0XHRcInVpZFwiOiBudW1iZXIgfCBudWxsO1xuXHRcdFwiaXNfbG9ja1wiOiBudW1iZXIgfCBFbnVtTnVtYmVyQm9vbGVhbjtcblx0XHRcInN0YXR1c1wiOiB7XG5cdFx0XHRcInRhZ19pZFwiOiBudW1iZXIgfCBFbnVtRG16akFjZ25TdGF0dXNJRDtcblx0XHRcdFwidGFnX25hbWVcIjogc3RyaW5nIHwgRW51bURtempBY2duU3RhdHVzO1xuXHRcdH1bXTtcblx0XHRcInR5cGVzXCI6IHtcblx0XHRcdFwidGFnX2lkXCI6IG51bWJlcjtcblx0XHRcdFwidGFnX25hbWVcIjogc3RyaW5nO1xuXHRcdH1bXTtcblx0XHRcImF1dGhvcnNcIjoge1xuXHRcdFx0XCJ0YWdfaWRcIjogbnVtYmVyO1xuXHRcdFx0XCJ0YWdfbmFtZVwiOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHRcdFwic3Vic2NyaWJlX251bVwiOiBudW1iZXI7XG5cdFx0XCJjaGFwdGVyc1wiOiB7XG5cdFx0XHRcInRpdGxlXCI6IHN0cmluZztcblx0XHRcdFwiZGF0YVwiOiB7XG5cdFx0XHRcdFwiY2hhcHRlcl9pZFwiOiBudW1iZXI7XG5cdFx0XHRcdFwiY2hhcHRlcl90aXRsZVwiOiBzdHJpbmc7XG5cdFx0XHRcdFwidXBkYXRldGltZVwiOiBudW1iZXI7XG5cdFx0XHRcdFwiZmlsZXNpemVcIjogbnVtYmVyO1xuXHRcdFx0XHRcImNoYXB0ZXJfb3JkZXJcIjogbnVtYmVyO1xuXHRcdFx0fVtdO1xuXHRcdH1bXTtcblx0XHRcImNvbW1lbnRcIjoge1xuXHRcdFx0XCJjb21tZW50X2NvdW50XCI6IG51bWJlcjtcblx0XHRcdFwibGF0ZXN0X2NvbW1lbnRcIjoge1xuXHRcdFx0XHRcImNvbW1lbnRfaWRcIjogbnVtYmVyO1xuXHRcdFx0XHRcInVpZFwiOiBudW1iZXI7XG5cdFx0XHRcdFwiY29udGVudFwiOiBzdHJpbmc7XG5cdFx0XHRcdFwiY3JlYXRldGltZVwiOiBudW1iZXI7XG5cdFx0XHRcdFwibmlja25hbWVcIjogc3RyaW5nO1xuXHRcdFx0XHRcImF2YXRhclwiOiBzdHJpbmc7XG5cdFx0XHR9W107XG5cdFx0fTtcblx0fT5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5ryr55S7XG5cdCAqIEBleGFtcGxlIGNvbWljQ29udGVudCg0NzE5NSwgODU3NjApXG5cdCAqL1xuXHRAR0VUKCdjaGFwdGVyL3tjb21pY19pZH0ve2NoYXB0ZXJfaWR9Lmpzb24nKVxuXHRjb21pY0NvbnRlbnQoQFBhdGgoJ2NvbWljX2lkJykgY29taWNfaWQ6IG51bWJlciwgQFBhdGgoJ2NoYXB0ZXJfaWQnKSBjaGFwdGVyX2lkOiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImNoYXB0ZXJfaWRcIjogbnVtYmVyO1xuXHRcdFwiY29taWNfaWRcIjogbnVtYmVyO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwiY2hhcHRlcl9vcmRlclwiOiBudW1iZXI7XG5cdFx0XCJkaXJlY3Rpb25cIjogbnVtYmVyO1xuXHRcdFwicGFnZV91cmxcIjogc3RyaW5nW107XG5cdFx0XCJwaWNudW1cIjogbnVtYmVyO1xuXHRcdFwiY29tbWVudF9jb3VudFwiOiBudW1iZXI7XG5cdH0+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Lypcblx0QEdFVCgndXNlcnMnKVxuXHRsaXN0VXNlcnMoQFF1ZXJ5KCdwYWdlJykgX3BhZ2U6IG51bWJlcik6IE9ic2VydmFibGU8VXNlcltdPlxuXHR7IHJldHVybiBudWxsOyB9XG5cblx0QFBPU1QoJ3VzZXJzJylcblx0Y3JlYXRlVXNlcihAQm9keSBfdXNlckRhdGE6IENyZWF0ZVVzZXJEYXRhKTogT2JzZXJ2YWJsZTxVc2VyPlxuXHR7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRAUFVUKCd1c2Vycy97aWR9Jylcblx0dXBkYXRlVXNlcihAUGF0aCgnaWQnKSBfaWQ6IG51bWJlciwgQEJvZHkgX3VzZXJEYXRhOiBDcmVhdGVVc2VyRGF0YSk6IE9ic2VydmFibGU8VXNlcj5cblx0eyByZXR1cm4gbnVsbDsgfVxuXG5cdEBERUxFVEUoJ3VzZXJzL3tpZH0nKVxuXHRkZWxldGVVc2VyKEBQYXRoKCdpZCcpIF9pZDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPlxuXHR7IHJldHVybiBudWxsOyB9XG5cblx0QEhFQUQoJ3Rlc3QtaGVhZCcpXG5cdEBIZWFkZXJzKHtcblx0XHRNeUhlYWRlcjogJzIxNScsXG5cdH0pXG5cdHRlc3RIZWFkKCk6IE9ic2VydmFibGU8dm9pZD5cblx0eyByZXR1cm4gbnVsbDsgfVxuXHQqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBEbXpqQXBpQ2xpZW50VjJcbiJdfQ==