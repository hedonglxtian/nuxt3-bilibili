// vscode安装json2ts插件，复制json数据，使用json2ts 按住ctrl+alt+v键(mac os的话control+option+v键)自动生成ts类型
export interface Author {
	mid: number;
	name: string;
	face: string;
}

export interface Stat {
	aid: number;
	view: number;
	danmaku: number;
	reply: number;
	favorite: number;
	coin: number;
	share: number;
	now_rank: number;
	his_rank: number;
	like: number;
	dislike: number;
	vt: number;
	vv: number;
}

export interface VideoItem {
	aid: number;
	type_id: number;
	tname: string;
	pic: string;
	title: string;
	pubdate: number;
	ctime: number;
	tags: any[];
	duration: number;
	author: Author;
	stat: Stat;
	hot_desc: string;
	corner_mark: number;
	bvid: string;
	enable_vt: number;
}