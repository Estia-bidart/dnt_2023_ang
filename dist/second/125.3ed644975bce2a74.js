"use strict";(self.webpackChunksecond=self.webpackChunksecond||[]).push([[125],{1125:(L,l,i)=>{i.r(l),i.d(l,{AuthModule:()=>Z});var c=i(9808),g=i(5358),n=i(1223),m=i(2340),p=i(520);let f=(()=>{class t{constructor(e){this.http=e,this.url=m.N.baseURL+"/auth/"}login(e){return this.http.post(this.url+"login",e)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(p.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=i(614),r=i(2382);function v(t,o){1&t&&(n.TgZ(0,"div",12),n._uU(1," Email is required ! "),n.qZA())}function M(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1,"Password is required"),n.qZA())}function C(t,o){1&t&&(n.TgZ(0,"div"),n._uU(1,"Password must be at least de 5 characters"),n.qZA())}function A(t,o){if(1&t&&(n.TgZ(0,"div",12),n.YNc(1,M,2,0,"div",13),n.YNc(2,C,2,0,"div",13),n.qZA()),2&t){n.oxw();const e=n.MAs(13);n.xp6(1),n.Q6J("ngIf",e.errors.required),n.xp6(1),n.Q6J("ngIf",e.errors.minlength)}}const _=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(e,s){this.authService=e,this.tokenService=s,this.credentials={email:"",password:""}}ngOnInit(){}onSubmit(){this.authService.login(this.credentials).subscribe(e=>{this.tokenService.saveToken(e.access_token)},e=>console.log(e))}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(f),n.Y36(h.B))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:18,vars:4,consts:[[1,"form_container"],["name","form",3,"ngSubmit"],["form","ngForm"],[1,"group"],["for","email"],["type","text","name","email","id","email","required","",3,"ngModel","ngModelChange"],["email","ngModel"],["class","form_error",4,"ngIf"],["for","password"],["type","password","name","password","id","password","required","","minlength","5",3,"ngModel","ngModelChange"],["password","ngModel"],["type","submit"],[1,"form_error"],[4,"ngIf"]],template:function(e,s){if(1&e){const u=n.EpF();n.TgZ(0,"div",0)(1,"form",1,2),n.NdJ("ngSubmit",function(){return n.CHM(u),n.MAs(2).form.valid&&s.onSubmit()}),n.TgZ(3,"div",3)(4,"label",4),n._uU(5,"Email"),n.qZA(),n.TgZ(6,"input",5,6),n.NdJ("ngModelChange",function(a){return s.credentials.email=a}),n.qZA()(),n.YNc(8,v,2,0,"div",7),n.TgZ(9,"div",3)(10,"label",8),n._uU(11,"Mot de passe"),n.qZA(),n.TgZ(12,"input",9,10),n.NdJ("ngModelChange",function(a){return s.credentials.password=a}),n.qZA()(),n.YNc(14,A,3,2,"div",7),n.TgZ(15,"div",3)(16,"button",11),n._uU(17,"Connexion"),n.qZA()()()()}if(2&e){const u=n.MAs(2),d=n.MAs(7),a=n.MAs(13);n.xp6(6),n.Q6J("ngModel",s.credentials.email),n.xp6(2),n.Q6J("ngIf",d.errors&&u.submitted),n.xp6(4),n.Q6J("ngModel",s.credentials.password),n.xp6(2),n.Q6J("ngIf",a.errors&&u.submitted)}},directives:[r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On,c.O5,r.wO],styles:[".form_container[_ngcontent-%COMP%]{width:280px;margin:50px auto 0}.group[_ngcontent-%COMP%]{margin-bottom:15px;display:flex;justify-content:space-between}button[_ngcontent-%COMP%]{width:270px;margin:0 auto}.form_error[_ngcontent-%COMP%]{color:red}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.Bz.forChild(_)],g.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,T,r.u5]]}),t})()}}]);