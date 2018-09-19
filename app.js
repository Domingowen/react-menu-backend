const Koa = require('koa');
const KoaRouter = require('koa-router');
const axios = require('axios');
const cors = require('koa2-cors');
const app = new Koa();
const Router = new KoaRouter();
const bodyParser = require('koa-bodyparser');
const request = require('superagent');
const jsonp = require('superagent-jsonp');
const jsonp1 = require('jsonp');
const koajson = require('koa-json');
app.use(cors());
app.use(bodyParser());
// app.use(jsonp());
Router.post('/getFoodList', async (ctx, next) => {
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: 1,
			city_id: '',
			class_id: '',
			order: '',
			sear_name: '',
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body = {
		status: 200,
		data: data
	}
});
Router.post('/getPagination', async (ctx, next) => {
	console.log(ctx.request.body);
	let reqData = ctx.request.body;
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: reqData.page,
			city_id: '',
			class_id: reqData.classify,
			order: '',
			sear_name: '',
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/searchFood', async (ctx, next) => {
	let reqData = ctx.request.body;
	// console.log(ctx.res);
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: reqData.page,
			city_id: '',
			class_id: reqData.classify,
			order: '',
			sear_name: '',
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/searchMenu', async (ctx, next) => {
	// console.log(ctx);
	let reqData = ctx.request.body;
	// console.log(reqData);
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
	axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
	let data = await axios({
		method: 'post',
		url: 'https://www.feiducn.com/index.php?s=/wap/Takeout/index1',
		headers: {
			'Host': 'www.feiducn.com',
			'Origin': 'https://www.feiducn.com',
		},
		data: {
			page: reqData.page,
			city_id: '',
			class_id: '',
			order: '',
			sear_name: reqData.search,
			waimai: '',
			lat: '',
			lon: '',
			uid: '',
			sort: '',
		}
	}).then((res) => {
		// console.log(res);
		// console.log(ctx);
		// console.log(1111);
		// console.log(res.data);
		return res.data;
	});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/flw', async (ctx, next) => {
	let reqData = ctx.request.body;
	let data = await request
		.post('http://www.flw.ph//mobcent/app/web/index.php?r=forum/topiclistex')
		.send({
			imsi: 515027422911753,
			latitude: '0.0',
			apphash: '794fd396',
			longitude: '0.0',
			appName: '菲龙网',
			authorId: 0,
			boardId: reqData.boardId,
			egnVersion: 'v2101.5',
			forumKey: 'pamVUXChuxEWW3xrlG',
			forumType: 7,
			imei: 863254010101235,
			packageName: 'com.appbyme.app32067',
			page: reqData.page,
			pageSize: 20,
			platType: 1,
			sdkType: null,
			sdkVersion: '2.5.0.0',
			topicId: '',
			orderby: 'all',
			sortby: 'all',
			isImageList: 1
		})
		.set('Host', 'www.flw.ph')
		.set('Content-Type', 'application/x-www-form-urlencoded')
		.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
		.then((res) => {
			// console.log(res);
			// console.log(JSON.parse(res.text))
			return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/flw/detail', async (ctx, next) => {
    let reqData = ctx.request.body;
    let data = await request
        .post('http://www.flw.ph//mobcent/app/web/index.php?r=forum/postlist')
        .send({
            imsi: 1012344748,
            apphash: 65690465,
            appName: '菲龙网',
            authorId: 0,
            boardId: reqData.boardId,
            egnVersion: 'v2101.5',
            forumKey: 'pamVUXChuxEWW3xrlG',
            forumType: 7,
            imei: '866174010742290',
			accessToken: 'a62f7032ac69163f233db64dd9dcc',
	        accessSecret: 'c676eb525430f6fafa17408d59d51',
            packageName: 'com.appbyme.app32067',
            page: 1,
            pageSize: 10,
            platType: 1,
            sdkType: null,
            sdkVersion: '2.5.0.0',
            topicId: reqData.id
        })
        .set('Host', 'www.flw.ph')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
        .then((res) => {
            return JSON.parse(res.text);
        });
    return ctx.body ={
        status: 200,
        data: data
    }
});
Router.post('/music/list', async (ctx, next) => {
    let reqData = ctx.request.body;
    let data = await request
        .post(`http://search.kuwo.cn/r.s?all=${reqData.searchName}=music&client=kt&cluster=0&rn=10&rformat=json&callback=searchMusicResult&encoding=utf8&vipver=MUSIC_8.0.3.1&`)
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
        .then((res) => {
            console.log(JSON.parse(res.text));
            return JSON.parse(res.text);
        });
    return ctx.body ={
        status: 200,
        data: data
    }
});
Router.post('/music/recommend', async(ctx, next) => {
	let reqData = ctx.request.body;
	// let MusicJsonCallback = (err, data) => {
		// console.log(data);
		// this.setState({
		//     listData: data,
		//     totalMusic: data.TOTAL,
		//     totalPage: Math.ceil(data.TOTAL / 10),
		// });
		// console.log(this.state);
	// };
	// jsonp1('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',{
	// 	param: `callback=MusicJsonCallback`
	// },MusicJsonCallback);
	let data = await request
		.get(`https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg`)
		.set('host', 'c.y.qq.com')
		.set('referer', 'https://y.qq.com')
		// .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
		.then((res) => {
			console.log(res);
			// res.json(res.data)
			// return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/music/recommend/detail', async(ctx, next) => {
	let reqData = ctx.request.body;
	let data = await request
		.get(`https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg`)
		.set('Host', 'c.y.qq.com')
		.set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
		.then((res) => {
			console.log(res);
			// console.log(JSON.parse(res.text));
			// return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/music/search/kw', async (ctx, next) => {
    let reqData = ctx.request.body;
    console.log(reqData.search);
	function searchMusicResult (data) {
		console.log(data);
	}
	let url = null;
	if (reqData.page > 0) {
        url = `http://search.kuwo.cn/r.s?all=${reqData.search}&ft=music&client=kt&cluster=0&pn=${reqData.page}&rn=10&rformat=json&encoding=utf8&vipver=MUSIC_8.0.3.1&callback=searchMusicResult`;
	} else {
        url = `http://search.kuwo.cn/r.s?all=${reqData.search}&ft=music&client=kt&cluster=0&rn=10&rformat=json&encoding=utf8&vipver=MUSIC_8.0.3.1`;
    }
    let data = await request
        .get(url)
        .use(jsonp({
            timeout: 3000,
            // callbackName: 'searchMusicResult'
        }))
        .set('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36')
        .then((res) => {
			// console.log(res);
            // console.log(JSON.parse(res.text));
            // searchMusicResult();
            return res.text;
        });
    return ctx.body ={
        status: 200,
        data: data
    }
});
Router.post('/music/search/qq', async (ctx, next) => {
	let reqData = ctx.request.body;
	console.log(reqData);
	let data = await request
		.post('https://music.2333.me/')
		.set('Host', 'music.2333.me')
		.set('Origin', 'http://music.2333.me')
		.set('Referer', `http://music.2333.me/?name=${encodeURI(reqData.search)}&type=qq`)
		.set('Content-Type', `application/x-www-form-urlencoded`)
		.set('X-Requested-With', `XMLHttpRequest`)
		.send({
			input: reqData.search,
			filter: reqData.filter,
			type: reqData.type,
			page: reqData.page
		})
		.then((res) => {
			// console.log(res);
			// console.log(JSON.parse(res.text));
			// searchMusicResult();
			return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/music/play', async (ctx, next) => {
    let reqData = ctx.request.body;
    let data = await request
        .post('http://music.2333.me/')
	    .set('Host', 'music.2333.me')
	    .set('Origin', 'http://music.2333.me')
	    .set('Referer', `http://music.2333.me/?name=${encodeURI(reqData.search)}&type=qq`)
	    .set('Content-Type', `application/x-www-form-urlencoded`)
	    .set('X-Requested-With', `XMLHttpRequest`)
        .send({
			input: reqData.id,
			filter: reqData.filter,
			type: reqData.type,
			page: reqData.page,
        })
		.then((res) => {
			// console.log(JSON.parse(res.text));
            return JSON.parse(res.text);
        });
    return ctx.body ={
        status: 200,
        data: data
    }
});
// Router.post('/movie/list', async (ctx, next) => {
// 	let reqData = ctx.request.body;
// 	let data = await request
// 		.get('http://android.api.360kan.com/channel/')
// 		.set('Host', 'android.api.360kan.com')
// 		.set('User-Agent', '360 Video App/4.5.3 Android/4.4.2 QIHU')
// 		.query({
// 			cid: 3,
// 			tid: 3,
// 			start: 0,
// 			count: 20,
// 			method: 'channel.datas',
// 			ss: 4,
// 			token: '906159fa9d7a33cf08c3b8819765f24d',
// 			ver: 159,
// 			ch: '360ysg',
// 			sysver: 19,
// 			bpc: 'BfhtBfDiBgeqB2qihbqGBjXNB7ph4yq0d%253Dn7kyncdqnWvv%2526%2526%250A'
// 		})
// 		.then((res) => {
// 			// console.log(ctx.res.json(res.text));
// 			// return res.text;
// 			console.log(JSON.parse(res));
// 		});
// 	return ctx.body ={
// 		status: 200,
// 		data: data
// 	}
// });
Router.post('/movie/list', async (ctx, next) => {
	let reqData = ctx.request.body;
	let data = await request
		.get('http://www.free52.com/api/mainvideo/')
		.set('Host', 'www.free52.com')
		.query({
			type: 'dsj',
			page: 1,
		})
		.then((res) => {
			// console.log(ctx.res.json(res.text));
			// console.log(JSON.parse(res.text));
			return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
Router.post('/fiction/list', async (ctx, next) => {
	let reqData = ctx.request.body;
	let data = await request
		.get('https://shuapi.jiaston.com/v4/google/man.html')
		.set('Host', 'shuapi.jiaston.com')
		.then((res) => {
			// console.log(res);
			// console.log(JSON.parse(res.text));
			return JSON.parse(res.text);
		});
	return ctx.body ={
		status: 200,
		data: data
	}
});
app
	.use(Router.routes())
	.use(Router.allowedMethods());
app.listen('20200', () => {
	console.log('服务器启动成功')
});