export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["180.png","favicon.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"_app/immutable/start-fd8307f5.js","imports":["_app/immutable/start-fd8307f5.js","_app/immutable/chunks/index-d7640e14.js","_app/immutable/chunks/singletons-705c0dc0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
