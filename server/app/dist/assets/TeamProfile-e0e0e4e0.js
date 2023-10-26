import{o,c as h,a as l,h as d,t,F as i,r as m,T as c,M as r,N as p,j as g}from"./index-58611c03.js";const T={class:"has-text-centered p-2"},_={class:"title is-size-2 my-5 has-text-white"},y={class:"container"},v={class:"box my-4 has-background-dark"},f=l("div",null,[l("h1",{class:"title is-4 mb-5 has-text-light"}," Tournament Averages ")],-1),A={class:"table-container"},P={class:"table has-background-dark is-bordered is-striped is-hoverable is-fullwidth has-text-white"},b=l("thead",null,[l("tr",{id:"red"},[l("th",null,[l("a",null,"Mode Auto Pickup Pos")]),l("th",null,[l("a",null,"Mode Auto CS")]),l("th",null,[l("a",null,"Avg #Gp Auto ")]),l("th",null,[l("a",null,"Avg #Gp Teleop ")]),l("th",null,[l("a",null,"Avg Points Teleop & Auto Gp")]),l("th",null,[l("a",null,"Favourite Pickup Pos.")]),l("th",null,[l("a",null,"Est. Cycle Time (s)")]),l("th",null,[l("a",null," Avg EG Start Time")]),l("th",null,[l("a",null,"Mode CS")]),l("th",null,[l("a",null,"Defence")]),l("th",null,[l("a",null,"Defence Type")]),l("th",null,[l("a",null,"Winning Record?")])])],-1),S={class:"box my-4 has-background-dark"},k={class:"has-text-centered"},M=l("h1",{class:"title is-4 mb-5 has-text-primary is-centered"}," Matches Played ",-1),C={class:"table is-bordered has-background-dark is-striped is-hoverable is-fullwidth"},G=l("thead",null,[l("tr",{id:"red"},[l("th",null,[l("a",null,"Match #")]),l("th",null,[l("a",null,"Auto Start Pos")]),l("th",null,[l("a",null,"Auto Mobility")]),l("th",null,[l("a",null,"Auto Pickup")]),l("th",null,[l("a",null,"Auto CS")]),l("th",null,[l("a",null,"Auto GP Total")]),l("th",null,[l("a",null,"Auto GP Score")]),l("th",null,[l("a",null,"Auto Score")]),l("th",null,[l("a",null,"Teleop GP Total")]),l("th",null,[l("a",null,"Overall GP Scored")]),l("th",null,[l("a",null,"Pickup Type")]),l("th",null,[l("a",null,"Est. Cycle Time (s)")]),l("th",null,[l("a",null,"EG CS")]),l("th",null,[l("a",null,"Defence")]),l("th",null,[l("a",null,"Defence Type")]),l("th",null,[l("a",null,"Win")])])],-1),N={class:"has-text-white"},w=["onClick"],E={data(){return{team:Object,teamNum:Number,teams:Array,matches:Array,teamMatches:Array}},methods:{toMatchProfile(u){this.$router.push(`/match/${u}`)},displayArray(u){let e={},s=0,n=null;for(let a of u)e[a]?e[a]++:e[a]=1,e[a]>s&&(s=e[a],n=a);return n},getTeam(u){this.teams.forEach(e=>{e.teamNum==u&&(this.team=e)})},getMatches(u){this.matches.forEach(e=>{e.teamNum==u&&this.teamMatches.push(e)})}},mounted(){},async created(){const u=g();this.teamNum=u.params.num,this.teamMatches=[],this.teams=await c.getTeams(),this.matches=await r.getMatches(),await c.getTeams().then(this.getTeam(this.teamNum)),await r.getMatches().then(this.getMatches(this.teamNum))}},j=Object.assign(E,{__name:"TeamProfile",setup(u){return(e,s)=>(o(),h(i,null,[l("nav",null,[d(p)]),l("div",T,[l("h1",_," Team #"+t(e.teamNum),1)]),l("div",y,[l("div",v,[f,l("div",A,[l("table",P,[b,l("tbody",null,[l("td",null,[l("h6",null,t(e.team.modeAutoPickupPos),1)]),l("td",null,[l("h6",null,t(e.team.modeAutoCS),1)]),l("td",null,[l("h6",null,t(e.team.avgGpAutoTotal)+" GP",1)]),l("td",null,[l("h6",null,t(e.team.avgGpTeleopTotal)+" GP",1)]),l("td",null,[l("h6",null,t(e.team.avgGpTotalScore),1)]),l("td",null,[l("h6",null,t(e.team.modePickupType),1)]),l("td",null,[l("h6",null,t(e.team.avgEstCycleTime)+"s",1)]),l("td",null,[l("h6",null,t(e.team.avgEndgameStartTime)+"s",1)]),l("td",null,[l("h6",null,t(e.team.modeEndgameCS),1)]),l("td",null,[l("h6",null,t(e.team.modeDefence),1)]),l("td",null,[l("h6",null,t(e.team.modeDefenceType),1)]),l("td",null,[l("h6",null,t(e.team.modeWin),1)])])])])]),l("div",S,[l("div",k,[M,l("table",C,[G,(o(!0),h(i,null,m(e.teamMatches,n=>(o(),h("tbody",N,[l("td",null,[l("h6",{onClick:a=>e.toMatchProfile(n.matchNum)},t(n.matchNum),9,w)]),l("td",null,[l("h6",null,t(n.autoStartPos),1)]),l("td",null,[l("h6",null,t(n.community),1)]),l("td",null,[l("h6",null,t(n.autoPickupPos.toString()),1)]),l("td",null,[l("h6",null,t(n.autoCS),1)]),l("td",null,[l("h6",null,t(n.gpAutoTotal),1)]),l("td",null,[l("h6",null,t(n.gpAutoScore),1)]),l("td",null,[l("h6",null,t(n.autoScore),1)]),l("td",null,[l("h6",null,t(n.gpTeleopTotal),1)]),l("td",null,[l("h6",null,t(n.gpTotal),1)]),l("td",null,[l("h6",null,t(e.displayArray(n.pickupType)),1)]),l("td",null,[l("h6",null,t(n.estCycleTime),1)]),l("td",null,[l("h6",null,t(n.endgameCS),1)]),l("td",null,[l("h6",null,t(n.defence),1)]),l("td",null,[l("h6",null,t(n.defenceType),1)]),l("td",null,[l("h6",null,t(n.win),1)])]))),256))])])])])],64))}});export{j as default};
