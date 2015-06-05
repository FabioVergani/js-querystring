
var querystring=(function(s){
 var f=isDefined, e, O=w.Object, o=O.create(null), p, m=s.split('&');
 while(f(e=m.pop())){
	e=e.split('=');
	p=e[0];
	if(f(p)){o[p]=e[1];};
 };
 return O.keys(o).length!==0?o:null;
})(w.location.search.substring(1));
//console.dir(querystring);
//-
