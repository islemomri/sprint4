"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[233],{233:(F,g,a)=>{a.r(g),a.d(g,{AuthModule:()=>y});var p=a(177),s=a(7681),r=a(9417),t=a(8699),f=a(9454);const d=function(){return["/auth"]};let u=(()=>{class n{constructor(e,o,i){this.service=e,this.fb=o,this.router=i}ngOnInit(){this.loginForm=this.fb.group({email:["",r.k0.required],motDePasse:["",r.k0.required]})}submitForm(){this.service.login(this.loginForm.value).subscribe(e=>{console.log(e),null!=e.jwt&&(localStorage.setItem("role",e.role),localStorage.setItem("username",this.loginForm.value.email),localStorage.setItem("email",this.loginForm.value.email),console.log(e.role),localStorage.setItem("id",e.id),alert("Hello, welcome "),localStorage.setItem("jwt",e.jwt),this.router.navigateByUrl("cours"))},e=>{alert("Email ou mot de passe incorrect ! ")})}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(f.u),t.rXU(r.ok),t.rXU(s.Ix))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-login"]],decls:27,vars:4,consts:[["lang","en"],["charset","UTF-8"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"],["id","container",1,"container"],[1,"form-container","sign-in-container"],[3,"formGroup","ngSubmit"],["type","email","placeholder","Email","formControlName","email"],["type","password","placeholder","Mot de passe","formControlName","motDePasse"],["href","#"],["type","submit",3,"disabled"],[1,"overlay-container"],[1,"overlay"],[1,"overlay-panel","overlay-right"],["id","signIn",1,"ghost",3,"routerLink"]],template:function(o,i){1&o&&(t.j41(0,"html",0)(1,"head"),t.nrm(2,"meta",1),t.j41(3,"title"),t.EFF(4,"Andev Web"),t.k0s(),t.nrm(5,"link",2),t.k0s(),t.j41(6,"body")(7,"div",3)(8,"div",4)(9,"form",5),t.bIt("ngSubmit",function(){return i.submitForm()}),t.j41(10,"h1"),t.EFF(11,"Se Connecter"),t.k0s(),t.nrm(12,"input",6)(13,"input",7),t.j41(14,"a",8),t.EFF(15,"Mot de passe oubli\xe9 ?"),t.k0s(),t.j41(16,"button",9),t.EFF(17,"Se Connecter"),t.k0s()()(),t.j41(18,"div",10)(19,"div",11)(20,"div",12)(21,"h1"),t.EFF(22,"Bienvenue !"),t.k0s(),t.j41(23,"p"),t.EFF(24,"Cr\xe9er un nouveau compte"),t.k0s(),t.j41(25,"button",13),t.EFF(26,"S'inscrir"),t.k0s()()()()()()()),2&o&&(t.R7$(9),t.Y8G("formGroup",i.loginForm),t.R7$(7),t.Y8G("disabled",i.loginForm.invalid),t.R7$(9),t.Y8G("routerLink",t.lJ4(3,d)))},dependencies:[s.Wk,r.qT,r.me,r.BC,r.cb,r.j4,r.JD],styles:['@import"https://fonts.googleapis.com/css?family=Montserrat:400,800";*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{background:#f6f5f7;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:Montserrat,sans-serif;height:100vh;margin:-20px 0 50px}h1[_ngcontent-%COMP%]{font-weight:700;margin:0}h2[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{font-size:14px;font-weight:100;line-height:20px;letter-spacing:.5px;margin:20px 0 30px}span[_ngcontent-%COMP%]{font-size:12px}a[_ngcontent-%COMP%]{color:#333;font-size:14px;text-decoration:none;margin:15px 0}button[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #FF4B2B;background-color:#ff4b2b;color:#fff;font-size:12px;font-weight:700;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in}button[_ngcontent-%COMP%]:active{transform:scale(.95)}button[_ngcontent-%COMP%]:focus{outline:none}button.ghost[_ngcontent-%COMP%]{background-color:transparent;border-color:#fff}form[_ngcontent-%COMP%]{background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 50px;height:100%;text-align:center}input[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;position:relative;overflow:hidden;width:768px;max-width:100%;min-height:480px}.form-container[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;transition:all .6s ease-in-out}.sign-in-container[_ngcontent-%COMP%]{left:0;width:50%;z-index:2}.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%]{transform:translate(100%)}.sign-up-container[_ngcontent-%COMP%]{left:0;width:50%;opacity:0;z-index:1}.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%]{transform:translate(100%);opacity:1;z-index:5;animation:_ngcontent-%COMP%_show .6s}@keyframes _ngcontent-%COMP%_show{0%,49.99%{opacity:0;z-index:1}50%,to{opacity:1;z-index:5}}.overlay-container[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]{transform:translate(-100%)}.overlay[_ngcontent-%COMP%]{background:#FF416C;background:linear-gradient(to right,#FF4B2B,#FF416C);background-repeat:no-repeat;background-size:cover;background-position:0 0;color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translate(0);transition:transform .6s ease-in-out}.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{transform:translate(50%)}.overlay-panel[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;text-align:center;top:0;height:100%;width:50%;transform:translate(0);transition:transform .6s ease-in-out}.overlay-left[_ngcontent-%COMP%]{transform:translate(-20%)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%]{transform:translate(0)}.overlay-right[_ngcontent-%COMP%]{right:0;transform:translate(0)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%]{transform:translate(20%)}.social-container[_ngcontent-%COMP%]{margin:20px 0}.social-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:1px solid #DDDDDD;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px}footer[_ngcontent-%COMP%]{background-color:#222;color:#fff;font-size:14px;bottom:0;position:fixed;left:0;right:0;text-align:center;z-index:999}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:red}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3c97bf;text-decoration:none}']})}return n})();const h=function(){return["/auth","register","enseignant"]};function C(n,c){1&n&&(t.j41(0,"a",18),t.EFF(1,"S'inscrire en tant qu'enseignant"),t.k0s()),2&n&&t.Y8G("routerLink",t.lJ4(1,h))}const x=function(){return["/auth","register","etudiant"]};function b(n,c){1&n&&(t.j41(0,"a",18),t.EFF(1,"S'inscrire en tant qu'\xe9tudiant"),t.k0s()),2&n&&t.Y8G("routerLink",t.lJ4(1,x))}function M(n,c){1&n&&(t.j41(0,"h3"),t.EFF(1,"Espace enseignant"),t.k0s())}function _(n,c){1&n&&(t.j41(0,"h3"),t.EFF(1,"Espace etudiant"),t.k0s())}const P=function(){return["/auth","login"]};let m=(()=>{class n{constructor(e,o,i,l){this.activatedRoute=e,this.service=o,this.fb=i,this.router=l,this.role=this.activatedRoute.snapshot.params.role}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const o=e.get("role");console.log(o),"enseignant"===o?(this.r="ROLE_ENSEIGNANT",this.test=!0):(this.r="ROLE_ETUDIANT",this.test=!1),this.registerForm=this.fb.group({email:["",[r.k0.required]],motDePasse:["",[r.k0.required]],confirmPassword:["",[r.k0.required]],nom:["",[r.k0.required]],prenom:["",[r.k0.required]],role:[this.r,[r.k0.required]]},{validator:this.passwordMathValidator})})}passwordMathValidator(e){const o=e.get("motDePasse")?.value,i=e.get("confirmPassword")?.value;o!=i?e.get("confirmPassword")?.setErrors({passwordMismatch:!0}):e.get("confirmPassword")?.setErrors(null)}submitForm(){console.log(this.registerForm.value),this.service.register(this.registerForm.value).subscribe(e=>{console.log("Response from server: ",e),e&&(alert("Hello "+e.email),this.router.navigateByUrl("auth/login"))})}static#t=this.\u0275fac=function(o){return new(o||n)(t.rXU(s.nX),t.rXU(f.u),t.rXU(r.ok),t.rXU(s.Ix))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-signup"]],decls:32,vars:8,consts:[["lang","en"],["charset","UTF-8"],["rel","stylesheet","href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"],["id","container",1,"container"],[1,"form-container","sign-in-container"],[3,"formGroup","ngSubmit"],["type","text","placeholder","nom","formControlName","nom"],["type","text","placeholder","prenom","formControlName","prenom"],["type","email","placeholder","Email","formControlName","email"],["type","password","placeholder","Mot de passe","formControlName","motDePasse"],["type","password","placeholder","Confirmation","formControlName","confirmPassword"],["href","#",3,"routerLink",4,"ngIf"],["type","submit",3,"disabled"],[1,"overlay-container"],[1,"overlay"],[1,"overlay-panel","overlay-right"],[4,"ngIf"],["id","signUp",1,"ghost",3,"routerLink"],["href","#",3,"routerLink"]],template:function(o,i){1&o&&(t.j41(0,"html",0)(1,"head"),t.nrm(2,"meta",1),t.j41(3,"title"),t.EFF(4,"Andev Web"),t.k0s(),t.nrm(5,"link",2),t.k0s(),t.j41(6,"body")(7,"div",3)(8,"div",4)(9,"form",5),t.bIt("ngSubmit",function(){return i.submitForm()}),t.j41(10,"h1"),t.EFF(11,"S'inscrir"),t.k0s(),t.nrm(12,"input",6)(13,"input",7)(14,"input",8)(15,"input",9)(16,"input",10),t.DNE(17,C,2,2,"a",11),t.DNE(18,b,2,2,"a",11),t.j41(19,"button",12),t.EFF(20,"S'inscrir"),t.k0s()()(),t.j41(21,"div",13)(22,"div",14)(23,"div",15)(24,"h1"),t.EFF(25,"Bienvenue !"),t.k0s(),t.DNE(26,M,2,0,"h3",16),t.DNE(27,_,2,0,"h3",16),t.j41(28,"p"),t.EFF(29,"Vous avez d\xe9j\xe0 un compte ?"),t.k0s(),t.j41(30,"button",17),t.EFF(31,"Se connecter"),t.k0s()()()()()()()),2&o&&(t.R7$(9),t.Y8G("formGroup",i.registerForm),t.R7$(8),t.Y8G("ngIf",!i.test),t.R7$(1),t.Y8G("ngIf",i.test),t.R7$(1),t.Y8G("disabled",i.registerForm.invalid),t.R7$(7),t.Y8G("ngIf",i.test),t.R7$(1),t.Y8G("ngIf",!i.test),t.R7$(3),t.Y8G("routerLink",t.lJ4(7,P)))},dependencies:[p.bT,s.Wk,r.qT,r.me,r.BC,r.cb,r.j4,r.JD],styles:['@import"https://fonts.googleapis.com/css?family=Montserrat:400,800";*[_ngcontent-%COMP%]{box-sizing:border-box}body[_ngcontent-%COMP%]{background:#f6f5f7;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:Montserrat,sans-serif;height:100vh;margin:-20px 0 50px}h1[_ngcontent-%COMP%]{font-weight:700;margin:0}h2[_ngcontent-%COMP%]{text-align:center}p[_ngcontent-%COMP%]{font-size:14px;font-weight:100;line-height:20px;letter-spacing:.5px;margin:20px 0 30px}span[_ngcontent-%COMP%]{font-size:12px}a[_ngcontent-%COMP%]{color:#333;font-size:14px;text-decoration:none;margin:15px 0}button[_ngcontent-%COMP%]{border-radius:20px;border:1px solid #FF4B2B;background-color:#ff4b2b;color:#fff;font-size:12px;font-weight:700;padding:12px 45px;letter-spacing:1px;text-transform:uppercase;transition:transform 80ms ease-in}button[_ngcontent-%COMP%]:active{transform:scale(.95)}button[_ngcontent-%COMP%]:focus{outline:none}button.ghost[_ngcontent-%COMP%]{background-color:transparent;border-color:#fff}form[_ngcontent-%COMP%]{background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 50px;height:100%;text-align:center}input[_ngcontent-%COMP%]{background-color:#eee;border:none;padding:12px 15px;margin:8px 0;width:100%}.container[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 14px 28px #00000040,0 10px 10px #00000038;position:relative;overflow:hidden;width:800px;max-width:100%;min-height:570px}.form-container[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;transition:all .6s ease-in-out}.sign-in-container[_ngcontent-%COMP%]{left:0;width:50%;z-index:2}.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%]{transform:translate(100%)}.sign-up-container[_ngcontent-%COMP%]{left:0;width:50%;opacity:0;z-index:1}.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%]{transform:translate(100%);opacity:1;z-index:5;animation:_ngcontent-%COMP%_show .6s}@keyframes _ngcontent-%COMP%_show{0%,49.99%{opacity:0;z-index:1}50%,to{opacity:1;z-index:5}}.overlay-container[_ngcontent-%COMP%]{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:transform .6s ease-in-out;z-index:100}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%]{transform:translate(-100%)}.overlay[_ngcontent-%COMP%]{background:#FF416C;background:linear-gradient(to right,#FF4B2B,#FF416C);background-repeat:no-repeat;background-size:cover;background-position:0 0;color:#fff;position:relative;left:-100%;height:100%;width:200%;transform:translate(0);transition:transform .6s ease-in-out}.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{transform:translate(50%)}.overlay-panel[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;text-align:center;top:0;height:100%;width:50%;transform:translate(0);transition:transform .6s ease-in-out}.overlay-left[_ngcontent-%COMP%]{transform:translate(-20%)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%]{transform:translate(0)}.overlay-right[_ngcontent-%COMP%]{right:0;transform:translate(0)}.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%]{transform:translate(20%)}.social-container[_ngcontent-%COMP%]{margin:20px 0}.social-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{border:1px solid #DDDDDD;border-radius:50%;display:inline-flex;justify-content:center;align-items:center;margin:0 5px;height:40px;width:40px}footer[_ngcontent-%COMP%]{background-color:#222;color:#fff;font-size:14px;bottom:0;position:fixed;left:0;right:0;text-align:center;z-index:999}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:red}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3c97bf;text-decoration:none}']})}return n})();const v=[{path:"login",component:u},{path:"register/:role",component:m},{path:"",component:m}];let O=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[s.iI.forChild(v),s.iI]})}return n})(),y=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[p.MD,O,r.X1]})}return n})()}}]);