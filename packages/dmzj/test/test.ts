/**
 * Created by user on 2019/5/13.
 */

import Bluebird = require('bluebird');
import DmzjApiClientV2, { EnumDmzjAcgnStatus, EnumDmzjAcgnBigCatID, EnumDmzjAcgnOrderID, EnumDmzjAcgnStatusID, EnumDmzjCode, EnumDmzjMsg } from '../lib/api/v2';
import { resolveObservable } from 'ts-rest-client2';
import util = require('util');
import { getOptionsFromAxiosResponse, infoFromAxiosResponse } from 'ts-rest-client2/lib/axios';

Bluebird.coroutine(function* ()
{
	let usersApi = new DmzjApiClientV2({
		configAxios: {
			cache: true,
		},
	});

	//yield resolveObservable(usersApi.articleRecommendHeader());

	let rq = null
		//|| usersApi.searchShow(EnumDmzjAcgnBigCatID.NOVEL, '神')
		|| usersApi.searchShow(EnumDmzjAcgnBigCatID.COMIC, '神')
		//|| usersApi.v3Recommend()
		//|| usersApi.comicDetail(47195)
		|| usersApi.comicContent(47195, 85760)
		|| null
	;

	yield resolveObservable(rq, {
		next(ret)
		{
			let info = infoFromAxiosResponse(ret);


			console.debug('options: %s', util.inspect(info.options, {
				depth: 1
			}));

			console.debug('path: %s', util.inspect(info.path));
			console.debug('responseUrl: %s', util.inspect(info.responseUrl));
			console.debug('redirects: %s', util.inspect(info.redirects));

			console.debug('status: %s', util.inspect(info.status));
			console.debug('statusText: %s', util.inspect(info.statusText));
			console.debug('headers: %s', util.inspect(info.headers));

			//console.debug('request: %s', util.inspect(ret.request));

			console.debug('Next: %s', util.inspect(ret.data));
		},
	});

})();
