/*zzz*/let f = [];
f['announcement'] = 'announcement/show';
f['attention'] = 'all_category/attention';
f['recommend'] = 'all_category/recommend';
f['hot'] = 'all_category/hot';
f['uclassify'] = 'classify/user';
f['classify'] = 'classify/sys';
f['joke'] = 'category/joke';
f['sport'] = 'category/joke';
f['bike'] = 'category/bike';
f['music'] = 'category/music';
f['video'] = 'category/video';
f['musique'] = 'category/musique';
f['mas'] = 'category/mas';
const aForumApi = f;
f = null;/*zzz*/
/*aaa*/let aForumRequestPage = [];/*aaa*/
/*bbb*/let l = [];
l['announcement'] = 20;
l['attention'] = 1;
l['recommend'] = 1;
l['hot'] = 1;
l['uclassify'] = 1;
l['classify'] = 1;
l['joke'] = 1;
l['sport'] = 1;
l['bike'] = 1;
l['music'] = 1;
l['video'] = 1;
l['musique'] = 1;
l['mas'] = 1;
const aForumRequestPageNum = l; // 请求 每页显示数量
l = null;
let aForumLastResponsePageNum = [];//上次请求返回数据数量/*bbb*/
/*syc*/function forumApiBegin () {
    console.log('forumApiBegin');
}/*syc*/
/*zzz*/forumApiBegin();/*zzz*/
