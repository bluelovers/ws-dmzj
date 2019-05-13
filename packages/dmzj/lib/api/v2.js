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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7Ozs7OztBQUVILHFEQXVCeUI7QUFFekIsNkJBQThCO0FBRzlCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHO0lBQzdCLE1BQU0sRUFBRSxJQUFJO0lBQ1osS0FBSyxFQUFFLENBQUM7Q0FDUixDQUFDO0FBR0YscURBQXlFO0FBR3pFLElBQWtCLFlBR2pCO0FBSEQsV0FBa0IsWUFBWTtJQUU3QiwrREFBUSxDQUFBO0FBQ1QsQ0FBQyxFQUhpQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUc3QjtBQUVELElBQWtCLFdBR2pCO0FBSEQsV0FBa0IsV0FBVztJQUU1Qiw0Q0FBVyxDQUFBO0FBQ1osQ0FBQyxFQUhpQixXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUc1QjtBQUVELElBQWtCLGtCQUlqQjtBQUpELFdBQWtCLGtCQUFrQjtJQUVuQywrREFBYSxDQUFBO0lBQ2IsK0RBQWEsQ0FBQTtBQUNkLENBQUMsRUFKaUIsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJbkM7QUFFRCxJQUFrQixvQkFLakI7QUFMRCxXQUFrQixvQkFBb0I7SUFFckMsNkRBQUcsQ0FBQTtJQUNILHVFQUFRLENBQUE7SUFDUiwrREFBSSxDQUFBO0FBQ0wsQ0FBQyxFQUxpQixvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUtyQztBQUVELElBQWtCLG1CQVVqQjtBQVZELFdBQWtCLG1CQUFtQjtJQUVwQzs7T0FFRztJQUNILDJEQUFHLENBQUE7SUFDSDs7T0FFRztJQUNILGlFQUFNLENBQUE7QUFDUCxDQUFDLEVBVmlCLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBVXBDO0FBRUQsSUFBa0Isb0JBVWpCO0FBVkQsV0FBa0Isb0JBQW9CO0lBRXJDOztPQUVHO0lBQ0gsaUVBQUssQ0FBQTtJQUNMOztPQUVHO0lBQ0gsaUVBQUssQ0FBQTtBQUNOLENBQUMsRUFWaUIsb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFVckM7QUFTRCxJQUFrQixpQkFJakI7QUFKRCxXQUFrQixpQkFBaUI7SUFFbEMsMkRBQUssQ0FBQTtJQUNMLHlEQUFJLENBQUE7QUFDTCxDQUFDLEVBSmlCLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSWxDO0FBRUQ7Ozs7R0FJRztBQU1ILElBQWEsZUFBZSx1QkFBNUIsTUFBYSxlQUFnQixTQUFRLHVCQUFlO0lBR25ELFlBQVksSUFBdUM7UUFFbEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVosSUFBSSxHQUFHLEdBQWtFLElBQUksQ0FBQywwQ0FBd0IsQ0FBQyxDQUFDO1FBRXhHLElBQUksR0FBRyxFQUNQO1lBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLElBQUksQ0FBQywwQ0FBd0IsQ0FBQyxHQUFHLFVBQVUsR0FBRyxJQUFJO2dCQUVqRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUVsQyxPQUFPLGlCQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQTtTQUNEO2FBRUQ7WUFDQyxJQUFJLENBQUMsMENBQXdCLENBQUMsR0FBRyxpQkFBZSxDQUFDLGNBQWMsQ0FBQTtTQUMvRDtJQUNGLENBQUM7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQXVFO1FBRTVGLE9BQU8sR0FBRyxvQ0FBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUMsSUFBSSxFQUFFLEdBQUcsaUJBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4QyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNwRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUVwRSxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVk7UUFFbEIsT0FBTztZQUNOLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1NBQ2xCLENBQUE7SUFDRixDQUFDO0lBRVMsV0FBVyxDQUFDLElBQUk7UUFFekIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQzVCO1lBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ3ZCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFFSCxzQkFBc0I7UUFRckIsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBRUgsZUFBZTtRQUtkLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUVILFdBQVcsQ0FBaUIsT0FBZSxFQUFtQixLQUFjO1FBcUIzRSwwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFFSCxXQUFXLENBQW9CLFNBQWlCO1FBRS9DLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUVILGNBQWM7UUFnQmIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUVILGlCQUFpQixDQUFrQixLQUFjO1FBY2hELDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUVILFNBQVMsQ0FBYSxFQUFVO1FBMEIvQiwwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFFSCxZQUFZLENBQWEsRUFBVTtRQVlsQywwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7OztPQUdHO0lBRUgsYUFBYSxDQUFhLEVBQVUsRUFDaEIsU0FBaUIsRUFDaEIsVUFBa0I7UUFHdEMsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBRUgsYUFBYTtRQU1aLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRDs7T0FFRztJQUVILFdBQVc7UUFRViwwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUVILFNBQVMsQ0FBaUIsTUFBYyxFQUNwQixTQUErQixFQUNoQyxRQUE2QixFQUM5QixJQUFhO1FBUTlCLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUE0RUQsVUFBVSxDQUFxQixVQUFnQyxFQUM1QyxRQUFnQixFQUNqQixJQUFhO1FBdUI5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBRUgsY0FBYztRQWdDYiwwQkFBMEI7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7OztPQUdHO0lBRUgsV0FBVyxDQUFtQixRQUFnQjtRQW1EN0MsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7T0FHRztJQUVILFlBQVksQ0FBbUIsUUFBZ0IsRUFBc0IsVUFBa0I7UUFXdEYsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQTRCRCxDQUFBO0FBL2RBO0lBREMscUJBQUcsQ0FBQywrQkFBK0IsQ0FBQzs7Ozs2REFXcEM7QUFNRDtJQURDLHFCQUFHLENBQUMsdUJBQXVCLENBQUM7Ozs7c0RBUTVCO0FBTUQ7SUFEQyxxQkFBRyxDQUFDLHdDQUF3QyxDQUFDO0lBQ2pDLFdBQUEsc0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxFQUFtQixXQUFBLHNCQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O2tEQXVCNUQ7QUFNRDtJQURDLHFCQUFHLENBQUMsa0NBQWtDLENBQUM7SUFDM0IsV0FBQSxzQkFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzs7O2tEQUk3QjtBQU1EO0lBREMscUJBQUcsQ0FBQyxzQkFBc0IsQ0FBQzs7OztxREFrQjNCO0FBTUQ7SUFEQyxxQkFBRyxDQUFDLGdDQUFnQyxDQUFDO0lBQ25CLFdBQUEsc0JBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7Ozs7d0RBZ0JqQztBQU1EO0lBREMscUJBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUNaLFdBQUEsc0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztnREE0QnBCO0FBTUQ7SUFEQyxxQkFBRyxDQUFDLHlCQUF5QixDQUFDO0lBQ2pCLFdBQUEsc0JBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OzttREFjdkI7QUFPRDtJQURDLHFCQUFHLENBQUMsa0RBQWtELENBQUM7SUFDekMsV0FBQSxzQkFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLFdBQUEsc0JBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNqQixXQUFBLHNCQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Ozs7b0RBS25CO0FBTUQ7SUFEQyxxQkFBRyxDQUFDLGlCQUFpQixDQUFDOzs7O29EQVN0QjtBQU1EO0lBREMscUJBQUcsQ0FBQyxtQkFBbUIsQ0FBQzs7OztrREFXeEI7QUFXRDtJQURDLHFCQUFHLENBQUMsbURBQW1ELENBQUM7SUFDOUMsV0FBQSxzQkFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZCLFdBQUEsc0JBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNqQixXQUFBLHNCQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaEIsV0FBQSxzQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTs7OztnREFVaEI7QUE0RUQ7SUFEQyxxQkFBRyxDQUFDLGlEQUFpRCxDQUFDO0lBQzNDLFdBQUEsc0JBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM1QixXQUFBLHNCQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDaEIsV0FBQSxzQkFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTs7OztpREF3QmhCO0FBTUQ7SUFEQyxxQkFBRyxDQUFDLG1CQUFtQixDQUFDOzs7O3FEQW1DeEI7QUFPRDtJQURDLHFCQUFHLENBQUMsdUJBQXVCLENBQUM7SUFDaEIsV0FBQSxzQkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7O2tEQXFENUI7QUFPRDtJQURDLHFCQUFHLENBQUMsc0NBQXNDLENBQUM7SUFDOUIsV0FBQSxzQkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLEVBQW9CLFdBQUEsc0JBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTs7OzttREFhbkU7QUEvZlcsZUFBZTtJQUwzQix5QkFBTyxDQUFDLHdCQUF3QixDQUFDO0lBQ2pDLGdDQUFjLENBQUM7UUFDZixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxzQkFBc0I7S0FDL0IsQ0FBQzs7R0FDVyxlQUFlLENBMmhCM0I7QUEzaEJZLDBDQUFlO0FBNmhCNUIsa0JBQWUsZUFBZSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS81LzExLlxuICovXG5cbmltcG9ydCB7XG5cdEJhc2VVcmwsXG5cdEJvZHksXG5cdERlZmF1bHRIZWFkZXJzLFxuXHRERUxFVEUsXG5cdEdFVCxcblx0SEVBRCxcblx0SGVhZGVycyxcblx0UGF0aCxcblx0UE9TVCxcblx0UFVULFxuXHRRdWVyeSxcblx0UmVzdENsaWVudCxcblx0TW9ja0h0dHBTZXJ2aWNlLFxuXHRIdHRwU2VydmljZSxcblx0SHR0cFJlcXVlc3RPcHRpb25zLFxuXHROYW1lZFZhbHVlcyxcblx0T2JzZXJ2YWJsZSxcblx0SUF4aW9zUmVxdWVzdENvbmZpZyxcblx0SUF4aW9zT2JzZXJ2YWJsZSwgSVJlc3RDbGllbnRPcHRpb25zLCBJUmVzdENsaWVudEF4aW9zT3B0aW9ucyxcblx0SUF4aW9zLFxuXHRJQmx1ZWJpcmQsXG5cdElSZXF1ZXN0Q29uZmlnLCByZXNvbHZlT2JzZXJ2YWJsZSwgU3ltYm9sUmVxdWVzdEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdEludGVyY2VwdG9yLCBJSHR0cFJlcXVlc3RPcHRpb25zLFxufSBmcm9tICd0cy1yZXN0LWNsaWVudDInO1xuaW1wb3J0IEJsdWViaXJkID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbmltcG9ydCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuaW1wb3J0IHsgY2hlY2tUeXBlIH0gZnJvbSAndHMtY2hlY2snO1xuXG51dGlsLmluc3BlY3QuZGVmYXVsdE9wdGlvbnMgPSB7XG5cdGNvbG9yczogdHJ1ZSxcblx0ZGVwdGg6IDMsXG59O1xuXG5pbXBvcnQgeyBBeGlvcyB9IGZyb20gJ2F4aW9zLW9ic2VydmFibGUnO1xuaW1wb3J0IHsgY3JlYXRlQXhpb3MsIFJlc3RDbGllbnRBeGlvcyB9IGZyb20gJ3RzLXJlc3QtY2xpZW50Mi9saWIvYXhpb3MnO1xuaW1wb3J0IHsgc3RhbmRhcmRRdWVyeUVuY29kaW5nLCB1cmxSZXNvbHZlIH0gZnJvbSAndHMtcmVzdC1jbGllbnQyL2xpYi91dGlsJztcblxuZXhwb3J0IGNvbnN0IGVudW0gRW51bURtempDb2RlXG57XG5cdFwi5oiQ5YqfXCIgPSAwLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtRG16ak1zZ1xue1xuXHRcIuaIkOWKn1wiID0gXCLmiJDlip9cIixcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRW51bURtempBY2duU3RhdHVzXG57XG5cdFwi5bey5a6M57uTXCIgPSBcIuW3suWujOe7k1wiLFxuXHRcIui/nui9veS4rVwiID0gXCLov57ovb3kuK1cIixcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRW51bURtempBY2duU3RhdHVzSURcbntcblx0QUxMLFxuXHROT1RfRE9ORSxcblx0RE9ORSxcbn1cblxuZXhwb3J0IGNvbnN0IGVudW0gRW51bURtempBY2duT3JkZXJJRFxue1xuXHQvKipcblx0ICogMOS4uuS6uuawlOS7jumrmOWIsOS9jlxuXHQgKi9cblx0SE9ULFxuXHQvKipcblx0ICogMeS4uuabtOaWsOaXtumXtOS7jui/keWIsOi/nFxuXHQgKi9cblx0VVBEQVRFLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBFbnVtRG16akFjZ25CaWdDYXRJRFxue1xuXHQvKipcblx0ICogMOS4uua8q+eUu1xuXHQgKi9cblx0Q09NSUMsXG5cdC8qKlxuXHQgKiAx5Li66L275bCP6K+0XG5cdCAqL1xuXHROT1ZFTCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRG16akpzb248VD5cbntcblx0Y29kZTogRW51bURtempDb2RlIHwgbnVtYmVyLFxuXHRtc2c6IEVudW1EbXpqTXNnIHwgc3RyaW5nLFxuXHRkYXRhOiBUXG59XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVudW1OdW1iZXJCb29sZWFuXG57XG5cdEZBTFNFLFxuXHRUUlVFLFxufVxuXG4vKipcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2JsdWVsb3ZlcnMvNWU5YmZlZWNkYmZmNDMxYzYyZDViNTBlN2JkYzNlNDhcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ndXVndW8vZmx1dHRlcl9kbXpqL2Jsb2IvbWFzdGVyL2xpYi9hcGkuZGFydFxuICogaHR0cHM6Ly9naXRodWIuY29tL3Rra2NjL2ZsdXR0ZXJfZG16ai9ibG9iLzI2OWNiMGQ2NDJjNzEwNjI2ZmU3ZDc1NWYwYjI3YjEyYWI0NzdjYzYvbGliL3V0aWwvYXBpLmRhcnRcbiAqL1xuQEJhc2VVcmwoJ2h0dHA6Ly92Mi5hcGkuZG16ai5jb20nKVxuQERlZmF1bHRIZWFkZXJzKHtcblx0QWNjZXB0czogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRSZWZlcmVyOiAnaHR0cDovL3d3dy5kbXpqLmNvbS8nLFxufSlcbmV4cG9ydCBjbGFzcyBEbXpqQXBpQ2xpZW50VjIgZXh0ZW5kcyBSZXN0Q2xpZW50QXhpb3NcbntcblxuXHRjb25zdHJ1Y3RvcihvcHRzPzogUGFydGlhbDxJUmVzdENsaWVudEF4aW9zT3B0aW9ucz4pXG5cdHtcblx0XHRzdXBlcihvcHRzKTtcblxuXHRcdGxldCBvbGQ6IEh0dHBSZXF1ZXN0SW50ZXJjZXB0b3I8SVJlc3RDbGllbnRBeGlvc09wdGlvbnNbXCJodHRwQ2xpZW50XCJdPiA9IHRoaXNbU3ltYm9sUmVxdWVzdEludGVyY2VwdG9yXTtcblxuXHRcdGlmIChvbGQpXG5cdFx0e1xuXHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXG5cdFx0XHR0aGlzW1N5bWJvbFJlcXVlc3RJbnRlcmNlcHRvcl0gPSBmdW5jdGlvbiAoLi4uYXJndilcblx0XHRcdHtcblx0XHRcdFx0bGV0IHJldCA9IG9sZC5jYWxsKHNlbGYsIC4uLmFyZ3YpO1xuXG5cdFx0XHRcdHJldHVybiBEbXpqQXBpQ2xpZW50VjIuYXBwZW5kVG9QYXJhbXMocmV0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXNbU3ltYm9sUmVxdWVzdEludGVyY2VwdG9yXSA9IERtempBcGlDbGllbnRWMi5hcHBlbmRUb1BhcmFtc1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBhcHBlbmRUb1BhcmFtcyhvcHRpb25zOiBJQXhpb3NSZXF1ZXN0Q29uZmlnIHwgSHR0cFJlcXVlc3RPcHRpb25zIHwgSUh0dHBSZXF1ZXN0T3B0aW9ucylcblx0e1xuXHRcdG9wdGlvbnMgPSBIdHRwUmVxdWVzdE9wdGlvbnMudG9WYWx1ZShvcHRpb25zKTtcblxuXHRcdGxldCBwcyA9IERtempBcGlDbGllbnRWMi5idWlsZFZlcnNpb24oKTtcblxuXHRcdG9wdGlvbnMucGFyYW1zWyd2ZXJzaW9uJ10gPSBvcHRpb25zLnBhcmFtc1sndmVyc2lvbiddIHx8IHBzLnZlcnNpb247XG5cdFx0b3B0aW9ucy5wYXJhbXNbJ2NoYW5uZWwnXSA9IG9wdGlvbnMucGFyYW1zWydjaGFubmVsJ10gfHwgcHMuY2hhbm5lbDtcblxuXHRcdHJldHVybiBvcHRpb25zO1xuXHR9XG5cblx0c3RhdGljIGJ1aWxkVmVyc2lvbigpXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2hhbm5lbDogXCJBbmRyb2lkXCIsXG5cdFx0XHR2ZXJzaW9uOiBcIjIuNy4wMDNcIlxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBfaGFuZGxlRGF0YShkYXRhKVxuXHR7XG5cdFx0aWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShkYXRhKVxuXHRcdH1cblxuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaOqOiNkOWIl+ihqFxuXHQgKi9cblx0QEdFVCgnYXJ0aWNsZS9yZWNvbW1lbmQvaGVhZGVyLmpzb24nKVxuXHRhcnRpY2xlUmVjb21tZW5kSGVhZGVyKCk6IElBeGlvc09ic2VydmFibGU8SURtempKc29uPHtcblx0XHRcImlkXCI6IG51bWJlcixcblx0XHRcInRpdGxlXCI6IHN0cmluZyxcblx0XHRcInBpY191cmxcIjogc3RyaW5nLFxuXHRcdFwib2JqZWN0X2lkXCI6IG51bWJlcixcblx0XHRcIm9iamVjdF91cmxcIjogc3RyaW5nLFxuXHR9W10+PlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDmlofnq6DliIbnsbtcblx0ICovXG5cdEBHRVQoJ2FydGljbGUvY2F0ZWdvcnkuanNvbicpXG5cdGFydGljbGVDYXRlZ29yeSgpOiBJQXhpb3NPYnNlcnZhYmxlPElEbXpqSnNvbjx7XG5cdFx0XCJ0YWdfaWRcIjogbnVtYmVyLFxuXHRcdFwidGFnX25hbWVcIjogc3RyaW5nXG5cdH1bXT4+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaWh+eroOWIl+ihqFxuXHQgKi9cblx0QEdFVCgnYXJ0aWNsZS9saXN0L3YyL3t0YWdfaWR9LzIve3BhZ2V9Lmpzb24nKVxuXHRhcnRpY2xlTGlzdChAUGF0aCgndGFnX2lkJykgX3RhZ19pZDogbnVtYmVyLCBAUGF0aCgncGFnZScsIDApIF9wYWdlPzogbnVtYmVyKTogSUF4aW9zT2JzZXJ2YWJsZTxJRG16akpzb248e1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0ZnJvbV9uYW1lOiBzdHJpbmc7XG5cdFx0ZnJvbV91cmw6IHN0cmluZztcblx0XHRjcmVhdGVfdGltZTogbnVtYmVyO1xuXHRcdGlzX2ZvcmVpZ246IG51bWJlcjtcblx0XHRmb3JlaWduX3VybDogc3RyaW5nO1xuXHRcdGludHJvOiBzdHJpbmc7XG5cdFx0YXV0aG9yX2lkOiBudW1iZXI7XG5cdFx0c3RhdHVzOiBudW1iZXI7XG5cdFx0cm93X3BpY191cmw6IHN0cmluZztcblx0XHRjb2xfcGljX3VybDogc3RyaW5nO1xuXHRcdGFydGljbGVfaWQ6IG51bWJlcjtcblx0XHRwYWdlX3VybDogc3RyaW5nO1xuXHRcdGNvbW1lbnRfYW1vdW50OiBzdHJpbmc7XG5cdFx0YXV0aG9yX3VpZDogbnVtYmVyO1xuXHRcdGNvdmVyOiBzdHJpbmc7XG5cdFx0bmlja25hbWU6IHN0cmluZztcblx0XHRtb29kX2Ftb3VudDogbnVtYmVyO1xuXHR9W10+PlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDmlofnq6DliJfooahcblx0ICovXG5cdEBHRVQoJ2FydGljbGUvc2hvdy92Mi97b2JqZWN0X2lkfS5odG1sJylcblx0YXJ0aWNsZVNob3coQFBhdGgoJ29iamVjdF9pZCcpIG9iamVjdF9pZDogbnVtYmVyKTogSUF4aW9zT2JzZXJ2YWJsZTxJRG16akpzb248c3RyaW5nPj5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5o6o6I2QXG5cdCAqL1xuXHRAR0VUKCdub3ZlbC9yZWNvbW1lbmQuanNvbicpXG5cdG5vdmVsUmVjb21tZW5kKCk6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdGNhdGVnb3J5X2lkOiBudW1iZXI7XG5cdFx0c29ydDogbnVtYmVyO1xuXHRcdHRpdGxlOiBzdHJpbmcgfCBcIui9rueVquWbvlwiIHwgXCLmnIDmlrDmm7TmlrBcIiB8IFwi5Yqo55S76L+b6KGM5pe2XCIgfCBcIuWNs+WwhuWKqOeUu+WMllwiIHwgXCLnu4/lhbjlv4XnnItcIjtcblx0XHRkYXRhOiB7XG5cdFx0XHRpZDogbnVtYmVyO1xuXHRcdFx0b2JqX2lkOiBudW1iZXI7XG5cdFx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdFx0Y292ZXI6IHN0cmluZztcblx0XHRcdHVybDogc3RyaW5nO1xuXHRcdFx0dHlwZTogbnVtYmVyO1xuXHRcdFx0c3ViX3RpdGxlOiBzdHJpbmc7XG5cdFx0XHRzdGF0dXM6IEVudW1EbXpqQWNnblN0YXR1cztcblx0XHR9W107XG5cdH1bXT5cblx0e1xuXHRcdHJldHVybiB0aGlzLl9oYW5kbGVEYXRhKGFyZ3VtZW50c1swXSk7XG5cdH1cblxuXHQvKipcblx0ICog5pyA6L+R5pu05pawXG5cdCAqL1xuXHRAR0VUKCdub3ZlbC9yZWNlbnRVcGRhdGUve3BhZ2V9Lmpzb24nKVxuXHRub3ZlbFJlY2VudFVwZGF0ZShAUGF0aCgncGFnZScsIDApIF9wYWdlPzogbnVtYmVyKTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XCJzdGF0dXNcIjogRW51bURtempBY2duU3RhdHVzO1xuXHRcdFwibmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJhdXRob3JzXCI6IHN0cmluZztcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcInR5cGVzXCI6IHN0cmluZ1tdO1xuXHRcdFwibGFzdF91cGRhdGVfY2hhcHRlcl9pZFwiOiBudW1iZXI7XG5cdFx0XCJsYXN0X3VwZGF0ZV92b2x1bWVfaWRcIjogbnVtYmVyO1xuXHRcdFwibGFzdF91cGRhdGVfdm9sdW1lX25hbWVcIjogc3RyaW5nO1xuXHRcdFwibGFzdF91cGRhdGVfY2hhcHRlcl9uYW1lXCI6IHN0cmluZztcblx0XHRcImxhc3RfdXBkYXRlX3RpbWVcIjogbnVtYmVyO1xuXHR9W10+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWwj+ivtOivpuaDhVxuXHQgKi9cblx0QEdFVCgnbm92ZWwve2lkfS5qc29uJylcblx0bm92ZWxJbmZvKEBQYXRoKCdpZCcpIGlkOiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcIm5hbWVcIjogc3RyaW5nO1xuXHRcdFwiem9uZVwiOiBzdHJpbmcgfCBcIuaXpeacrFwiO1xuXHRcdFwic3RhdHVzXCI6IEVudW1EbXpqQWNnblN0YXR1cztcblx0XHRcImxhc3RfdXBkYXRlX3ZvbHVtZV9uYW1lXCI6IHN0cmluZztcblx0XHRcImxhc3RfdXBkYXRlX2NoYXB0ZXJfbmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJsYXN0X3VwZGF0ZV92b2x1bWVfaWRcIjogbnVtYmVyO1xuXHRcdFwibGFzdF91cGRhdGVfY2hhcHRlcl9pZFwiOiBudW1iZXI7XG5cdFx0XCJsYXN0X3VwZGF0ZV90aW1lXCI6IG51bWJlcjtcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcImhvdF9oaXRzXCI6IG51bWJlcjtcblx0XHRcImludHJvZHVjdGlvblwiOiBzdHJpbmc7XG5cdFx0XCJ0eXBlc1wiOiBzdHJpbmdbXTtcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdFwic3Vic2NyaWJlX251bVwiOiBudW1iZXI7XG5cdFx0XCJ2b2x1bWVcIjoge1xuXHRcdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XHRcImxub3ZlbF9pZFwiOiBudW1iZXI7XG5cdFx0XHRcInZvbHVtZV9uYW1lXCI6IHN0cmluZztcblx0XHRcdFwidm9sdW1lX29yZGVyXCI6IG51bWJlcjtcblx0XHRcdFwiYWRkdGltZVwiOiBudW1iZXI7XG5cdFx0XHRcInN1bV9jaGFwdGVyc1wiOiBudW1iZXI7XG5cdFx0fVtdO1xuXHR9PlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlsI/or7TljbfliJfooahcblx0ICovXG5cdEBHRVQoJ25vdmVsL2NoYXB0ZXIve2lkfS5qc29uJylcblx0bm92ZWxDaGFwdGVyKEBQYXRoKCdpZCcpIGlkOiBudW1iZXIpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcInZvbHVtZV9pZFwiOiBudW1iZXI7XG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XCJ2b2x1bWVfbmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJ2b2x1bWVfb3JkZXJcIjogbnVtYmVyO1xuXHRcdFwiY2hhcHRlcnNcIjoge1xuXHRcdFx0XCJjaGFwdGVyX2lkXCI6IG51bWJlcjtcblx0XHRcdFwiY2hhcHRlcl9uYW1lXCI6IHN0cmluZztcblx0XHRcdFwiY2hhcHRlcl9vcmRlclwiOiBudW1iZXI7XG5cdFx0fVtdO1xuXHR9W10+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWwj+ivtOeroOiKguato+aWh1xuXHQgKiBAZXhhbXBsZSBub3ZlbERvd25sb2FkKDI2NjEsIDEwMDk5LCA5NTkyMilcblx0ICovXG5cdEBHRVQoJ25vdmVsL2Rvd25sb2FkL3tpZH1fe3ZvbHVtZV9pZH1fe2NoYXB0ZXJfaWR9LnR4dCcpXG5cdG5vdmVsRG93bmxvYWQoQFBhdGgoJ2lkJykgaWQ6IG51bWJlcixcblx0XHRAUGF0aCgndm9sdW1lX2lkJykgdm9sdW1lX2lkOiBudW1iZXIsXG5cdFx0QFBhdGgoJ2NoYXB0ZXJfaWQnKSBjaGFwdGVyX2lkOiBudW1iZXIsXG5cdCk6IElBeGlvc09ic2VydmFibGU8c3RyaW5nPlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlsI/or7TliIbnsbtcblx0ICovXG5cdEBHRVQoJzEvY2F0ZWdvcnkuanNvbicpXG5cdG5vdmVsQ2F0ZWdvcnkoKTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0XCJ0YWdfaWRcIjogbnVtYmVyO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHR9W10+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOWwj+ivtOetm+mAieadoeS7tlxuXHQgKi9cblx0QEdFVCgnbm92ZWwvZmlsdGVyLmpzb24nKVxuXHRub3ZlbEZpbHRlcigpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcInRpdGxlXCI6IHN0cmluZztcblx0XHRcIml0ZW1zXCI6IHtcblx0XHRcdFwidGFnX2lkXCI6IG51bWJlcjtcblx0XHRcdFwidGFnX25hbWVcIjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fVtdPlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDlsI/or7TliJfooahcblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGNhdF9pZCDliIbnsbtpZFxuXHQgKiBAcGFyYW0ge0VudW1EbXpqQWNnblN0YXR1c0lEfSBzdGF0dXNfaWQg6L+e6L295oOF5Ya1XG5cdCAqIEBwYXJhbSB7RW51bURtempBY2duT3JkZXJJRH0gb3JkZXJfaWQg5o6S5bqPIDDkuLrkurrmsJTku47pq5jliLDkvY7vvIwx5Li65pu05paw5pe26Ze05LuO6L+R5Yiw6L+cXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIOmhteaVsFxuXHQgKi9cblx0QEdFVCgnbm92ZWwve2NhdF9pZH0ve3N0YXR1c19pZH0ve29yZGVyX2lkfS97cGFnZX0uanNvbicpXG5cdG5vdmVsTGlzdChAUGF0aCgnY2F0X2lkJykgY2F0X2lkOiBudW1iZXIsXG5cdFx0QFBhdGgoJ3N0YXR1c19pZCcpIHN0YXR1c19pZDogRW51bURtempBY2duU3RhdHVzSUQsXG5cdFx0QFBhdGgoJ29yZGVyX2lkJykgb3JkZXJfaWQ6IEVudW1EbXpqQWNnbk9yZGVySUQsXG5cdFx0QFBhdGgoJ3BhZ2UnLCAwKSBwYWdlPzogbnVtYmVyLFxuXHQpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcIm5hbWVcIjogc3RyaW5nO1xuXHRcdFwiYXV0aG9yc1wiOiBzdHJpbmc7XG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdH1bXT5cblx0e1xuXHRcdC8vbGV0IGRhdGEgPSBhcmd1bWVudHNbMF07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICog5pCc57SiXG5cdCAqXG5cdCAqIEBwYXJhbSB7RW51bURtempBY2duQmlnQ2F0SUR9IGJpZ19jYXRfaWQg5YiG57G7aWQ7IDDkuLrmvKvnlLssIDHkuLrovbvlsI/or7Rcblx0ICogQHBhcmFtIHtzdHJpbmd9IGtleXdvcmRzIOWFs+mUruWtl1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZSDpobXmlbBcblx0ICovXG5cdHNlYXJjaFNob3coYmlnX2NhdF9pZDogRW51bURtempBY2duQmlnQ2F0SUQuTk9WRUwsXG5cdFx0a2V5d29yZHM6IHN0cmluZyxcblx0XHRwYWdlPzogbnVtYmVyLFxuXHQpOiBJQXhpb3NPYnNlcnZhYmxlPHtcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcIm5hbWVcIjogc3RyaW5nO1xuXHRcdFwiYXV0aG9yc1wiOiBzdHJpbmc7XG5cdFx0LyoqXG5cdFx0ICog5bCP6K+0XG5cdFx0ICovXG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdH1bXT5cblx0LyoqXG5cdCAqIOaQnOe0olxuXHQgKlxuXHQgKiBAcGFyYW0ge0VudW1EbXpqQWNnbkJpZ0NhdElEfSBiaWdfY2F0X2lkIOWIhuexu2lkOyAw5Li65ryr55S7LCAx5Li66L275bCP6K+0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXl3b3JkcyDlhbPplK7lrZdcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2Ug6aG15pWwXG5cdCAqL1xuXHRzZWFyY2hTaG93KGJpZ19jYXRfaWQ6IEVudW1EbXpqQWNnbkJpZ0NhdElELkNPTUlDLFxuXHRcdGtleXdvcmRzOiBzdHJpbmcsXG5cdFx0cGFnZT86IG51bWJlcixcblx0KTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0LyoqXG5cdFx0ICog5ryr55S7XG5cdFx0ICovXG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XCJzdGF0dXNcIjogc3RyaW5nIHwgRW51bURtempBY2duU3RhdHVzO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwibGFzdF9uYW1lXCI6IHN0cmluZztcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdFwidHlwZXNcIjogc3RyaW5nO1xuXHRcdFwiaG90X2hpdHNcIjogbnVtYmVyO1xuXHR9W10+XG5cdC8qKlxuXHQgKiDmkJzntKJcblx0ICpcblx0ICogQHBhcmFtIHtFbnVtRG16akFjZ25CaWdDYXRJRH0gYmlnX2NhdF9pZCDliIbnsbtpZDsgMOS4uua8q+eUuywgMeS4uui9u+Wwj+ivtFxuXHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5d29yZHMg5YWz6ZSu5a2XXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIOmhteaVsFxuXHQgKi9cblx0c2VhcmNoU2hvdyhiaWdfY2F0X2lkOiBFbnVtRG16akFjZ25CaWdDYXRJRCxcblx0XHRrZXl3b3Jkczogc3RyaW5nLFxuXHRcdHBhZ2U/OiBudW1iZXIsXG5cdCk6IElBeGlvc09ic2VydmFibGU8e1xuXHRcdFwiY292ZXJcIjogc3RyaW5nO1xuXHRcdFwibmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJhdXRob3JzXCI6IHN0cmluZztcblx0XHQvKipcblx0XHQgKiDlsI/or7Rcblx0XHQgKi9cblx0XHRcImlkXCI6IG51bWJlcjtcblx0fVtdIHwge1xuXHRcdC8qKlxuXHRcdCAqIOa8q+eUu1xuXHRcdCAqL1xuXHRcdFwiaWRcIjogbnVtYmVyO1xuXHRcdFwic3RhdHVzXCI6IHN0cmluZyB8IEVudW1EbXpqQWNnblN0YXR1cztcblx0XHRcInRpdGxlXCI6IHN0cmluZztcblx0XHRcImxhc3RfbmFtZVwiOiBzdHJpbmc7XG5cdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdFx0XCJhdXRob3JzXCI6IHN0cmluZztcblx0XHRcInR5cGVzXCI6IHN0cmluZztcblx0XHRcImhvdF9oaXRzXCI6IG51bWJlcjtcblx0fVtdPlxuXHRAR0VUKCdzZWFyY2gvc2hvdy97YmlnX2NhdF9pZH0ve2tleXdvcmRzfS97cGFnZX0uanNvbicpXG5cdHNlYXJjaFNob3coQFBhdGgoJ2JpZ19jYXRfaWQnKSBiaWdfY2F0X2lkOiBFbnVtRG16akFjZ25CaWdDYXRJRCxcblx0XHRAUGF0aCgna2V5d29yZHMnKSBrZXl3b3Jkczogc3RyaW5nLFxuXHRcdEBQYXRoKCdwYWdlJywgMCkgcGFnZT86IG51bWJlcixcblx0KTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdFx0XCJuYW1lXCI6IHN0cmluZztcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdC8qKlxuXHRcdCAqIOWwj+ivtFxuXHRcdCAqL1xuXHRcdFwiaWRcIjogbnVtYmVyO1xuXHR9W10gfCB7XG5cdFx0LyoqXG5cdFx0ICog5ryr55S7XG5cdFx0ICovXG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XCJzdGF0dXNcIjogc3RyaW5nIHwgRW51bURtempBY2duU3RhdHVzO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFwibGFzdF9uYW1lXCI6IHN0cmluZztcblx0XHRcImNvdmVyXCI6IHN0cmluZztcblx0XHRcImF1dGhvcnNcIjogc3RyaW5nO1xuXHRcdFwidHlwZXNcIjogc3RyaW5nO1xuXHRcdFwiaG90X2hpdHNcIjogbnVtYmVyO1xuXHR9W10+XG5cdHtcblx0XHRyZXR1cm4gdGhpcy5faGFuZGxlRGF0YShhcmd1bWVudHNbMF0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOa8q+eUuyDmjqjojZBcblx0ICovXG5cdEBHRVQoJ3YzL3JlY29tbWVuZC5qc29uJylcblx0Y29taWNSZWNvbW1lbmQoKTogSUF4aW9zT2JzZXJ2YWJsZTwoe1xuXHRcdFwiY2F0ZWdvcnlfaWRcIjogbnVtYmVyO1xuXHRcdFwidGl0bGVcIjogc3RyaW5nIHwgXCLlpKflm77mjqjojZBcIiB8IFwi6L+R5pyf5b+F55yLXCIgfCBcIueBq+eDreS4k+mimFwiIHwgXCLlpKfluIjnuqfkvZzogIXmgI7og73kuI3nnItcIiB8IFwi5Zu95ryr5Lmf57K+5b2pXCIgfCBcIue+jua8q+Wkp+S6i+S7tlwiIHwgXCLng63pl6jov57ovb1cIiB8IFwi5p2h5ryr5LiT5Yy6XCI7XG5cdFx0XCJzb3J0XCI6IG51bWJlcjtcblx0XHRcImRhdGFcIjoge1xuXHRcdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdFx0XHRcInRpdGxlXCI6IHN0cmluZztcblx0XHRcdFwic3ViX3RpdGxlXCI6IHN0cmluZztcblx0XHRcdFwidHlwZVwiOiBudW1iZXI7XG5cdFx0XHRcInVybFwiOiBzdHJpbmc7XG5cdFx0XHQvKipcblx0XHRcdCAqIGNvbWljX2lkXG5cdFx0XHQgKi9cblx0XHRcdFwib2JqX2lkXCI6IG51bWJlcjtcblx0XHRcdFwic3RhdHVzXCI6IHN0cmluZyB8ICcnIHwgRW51bURtempBY2duU3RhdHVzO1xuXHRcdH1bXTtcblx0fSB8IHtcblx0XHRcImNhdGVnb3J5X2lkXCI6IG51bWJlcjtcblx0XHRcInRpdGxlXCI6IHN0cmluZyB8IFwi5pyA5paw5LiK5p62XCI7XG5cdFx0XCJzb3J0XCI6IG51bWJlcjtcblx0XHRcImRhdGFcIjoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBjb21pY19pZFxuXHRcdFx0ICovXG5cdFx0XHRcImlkXCI6IG51bWJlcjtcblx0XHRcdFwidGl0bGVcIjogc3RyaW5nO1xuXHRcdFx0XCJhdXRob3JzXCI6IHN0cmluZztcblx0XHRcdFwic3RhdHVzXCI6IHN0cmluZyB8ICcnIHwgRW51bURtempBY2duU3RhdHVzO1xuXHRcdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9KVtdPlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiDmvKvnlLtcblx0ICogQGV4YW1wbGUgY29taWNEZXRhaWwoNDcxOTUpXG5cdCAqL1xuXHRAR0VUKCdjb21pYy97Y29taWNfaWR9Lmpzb24nKVxuXHRjb21pY0RldGFpbChAUGF0aCgnY29taWNfaWQnKSBjb21pY19pZDogbnVtYmVyKTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0XCJpZFwiOiBudW1iZXI7XG5cdFx0XCJpc2xvbmdcIjogbnVtYmVyO1xuXHRcdFwiZGlyZWN0aW9uXCI6IG51bWJlcjtcblx0XHRcInRpdGxlXCI6IHN0cmluZztcblx0XHRcImlzX2RtempcIjogbnVtYmVyIHwgRW51bU51bWJlckJvb2xlYW47XG5cdFx0XCJjb3ZlclwiOiBzdHJpbmc7XG5cdFx0XCJkZXNjcmlwdGlvblwiOiBzdHJpbmc7XG5cdFx0XCJsYXN0X3VwZGF0ZXRpbWVcIjogbnVtYmVyO1xuXHRcdFwiY29weXJpZ2h0XCI6IG51bWJlciB8IEVudW1OdW1iZXJCb29sZWFuO1xuXHRcdFwiZmlyc3RfbGV0dGVyXCI6IHN0cmluZztcblx0XHRcImhvdF9udW1cIjogbnVtYmVyO1xuXHRcdFwiaGl0X251bVwiOiBudW1iZXI7XG5cdFx0XCJ1aWRcIjogbnVtYmVyIHwgbnVsbDtcblx0XHRcImlzX2xvY2tcIjogbnVtYmVyIHwgRW51bU51bWJlckJvb2xlYW47XG5cdFx0XCJzdGF0dXNcIjoge1xuXHRcdFx0XCJ0YWdfaWRcIjogbnVtYmVyIHwgRW51bURtempBY2duU3RhdHVzSUQ7XG5cdFx0XHRcInRhZ19uYW1lXCI6IHN0cmluZyB8IEVudW1EbXpqQWNnblN0YXR1cztcblx0XHR9W107XG5cdFx0XCJ0eXBlc1wiOiB7XG5cdFx0XHRcInRhZ19pZFwiOiBudW1iZXI7XG5cdFx0XHRcInRhZ19uYW1lXCI6IHN0cmluZztcblx0XHR9W107XG5cdFx0XCJhdXRob3JzXCI6IHtcblx0XHRcdFwidGFnX2lkXCI6IG51bWJlcjtcblx0XHRcdFwidGFnX25hbWVcIjogc3RyaW5nO1xuXHRcdH1bXTtcblx0XHRcInN1YnNjcmliZV9udW1cIjogbnVtYmVyO1xuXHRcdFwiY2hhcHRlcnNcIjoge1xuXHRcdFx0XCJ0aXRsZVwiOiBzdHJpbmc7XG5cdFx0XHRcImRhdGFcIjoge1xuXHRcdFx0XHRcImNoYXB0ZXJfaWRcIjogbnVtYmVyO1xuXHRcdFx0XHRcImNoYXB0ZXJfdGl0bGVcIjogc3RyaW5nO1xuXHRcdFx0XHRcInVwZGF0ZXRpbWVcIjogbnVtYmVyO1xuXHRcdFx0XHRcImZpbGVzaXplXCI6IG51bWJlcjtcblx0XHRcdFx0XCJjaGFwdGVyX29yZGVyXCI6IG51bWJlcjtcblx0XHRcdH1bXTtcblx0XHR9W107XG5cdFx0XCJjb21tZW50XCI6IHtcblx0XHRcdFwiY29tbWVudF9jb3VudFwiOiBudW1iZXI7XG5cdFx0XHRcImxhdGVzdF9jb21tZW50XCI6IHtcblx0XHRcdFx0XCJjb21tZW50X2lkXCI6IG51bWJlcjtcblx0XHRcdFx0XCJ1aWRcIjogbnVtYmVyO1xuXHRcdFx0XHRcImNvbnRlbnRcIjogc3RyaW5nO1xuXHRcdFx0XHRcImNyZWF0ZXRpbWVcIjogbnVtYmVyO1xuXHRcdFx0XHRcIm5pY2tuYW1lXCI6IHN0cmluZztcblx0XHRcdFx0XCJhdmF0YXJcIjogc3RyaW5nO1xuXHRcdFx0fVtdO1xuXHRcdH07XG5cdH0+XG5cdHtcblx0XHQvL2xldCBkYXRhID0gYXJndW1lbnRzWzBdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIOa8q+eUu1xuXHQgKiBAZXhhbXBsZSBjb21pY0NvbnRlbnQoNDcxOTUsIDg1NzYwKVxuXHQgKi9cblx0QEdFVCgnY2hhcHRlci97Y29taWNfaWR9L3tjaGFwdGVyX2lkfS5qc29uJylcblx0Y29taWNDb250ZW50KEBQYXRoKCdjb21pY19pZCcpIGNvbWljX2lkOiBudW1iZXIsIEBQYXRoKCdjaGFwdGVyX2lkJykgY2hhcHRlcl9pZDogbnVtYmVyKTogSUF4aW9zT2JzZXJ2YWJsZTx7XG5cdFx0XCJjaGFwdGVyX2lkXCI6IG51bWJlcjtcblx0XHRcImNvbWljX2lkXCI6IG51bWJlcjtcblx0XHRcInRpdGxlXCI6IHN0cmluZztcblx0XHRcImNoYXB0ZXJfb3JkZXJcIjogbnVtYmVyO1xuXHRcdFwiZGlyZWN0aW9uXCI6IG51bWJlcjtcblx0XHRcInBhZ2VfdXJsXCI6IHN0cmluZ1tdO1xuXHRcdFwicGljbnVtXCI6IG51bWJlcjtcblx0XHRcImNvbW1lbnRfY291bnRcIjogbnVtYmVyO1xuXHR9PlxuXHR7XG5cdFx0Ly9sZXQgZGF0YSA9IGFyZ3VtZW50c1swXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qXG5cdEBHRVQoJ3VzZXJzJylcblx0bGlzdFVzZXJzKEBRdWVyeSgncGFnZScpIF9wYWdlOiBudW1iZXIpOiBPYnNlcnZhYmxlPFVzZXJbXT5cblx0eyByZXR1cm4gbnVsbDsgfVxuXG5cdEBQT1NUKCd1c2VycycpXG5cdGNyZWF0ZVVzZXIoQEJvZHkgX3VzZXJEYXRhOiBDcmVhdGVVc2VyRGF0YSk6IE9ic2VydmFibGU8VXNlcj5cblx0e1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0QFBVVCgndXNlcnMve2lkfScpXG5cdHVwZGF0ZVVzZXIoQFBhdGgoJ2lkJykgX2lkOiBudW1iZXIsIEBCb2R5IF91c2VyRGF0YTogQ3JlYXRlVXNlckRhdGEpOiBPYnNlcnZhYmxlPFVzZXI+XG5cdHsgcmV0dXJuIG51bGw7IH1cblxuXHRAREVMRVRFKCd1c2Vycy97aWR9Jylcblx0ZGVsZXRlVXNlcihAUGF0aCgnaWQnKSBfaWQ6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD5cblx0eyByZXR1cm4gbnVsbDsgfVxuXG5cdEBIRUFEKCd0ZXN0LWhlYWQnKVxuXHRASGVhZGVycyh7XG5cdFx0TXlIZWFkZXI6ICcyMTUnLFxuXHR9KVxuXHR0ZXN0SGVhZCgpOiBPYnNlcnZhYmxlPHZvaWQ+XG5cdHsgcmV0dXJuIG51bGw7IH1cblx0Ki9cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG16akFwaUNsaWVudFYyXG4iXX0=