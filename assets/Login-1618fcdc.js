import{_ as u,r as a,o as g,c as m,b as s,d as r,a as n,w as d,f as i,j as c,k as v,t as w,l as f}from"./index-0422b297.js";const h={},k={class:"form-wrap"},y={class:"login"},V={class:"login-register"},B=s("h2",null,"Login to FireBlogs",-1),$={class:"inputs"},b={class:"input"},C={class:"input"},D=s("div",{class:"angle"},null,-1),F=s("div",{class:"background"},null,-1);function I(o,e,L,M,N,S){const l=a("router-link"),p=a("email"),_=a("password");return g(),m("div",k,[s("form",y,[s("p",V,[r(" Don't have an account? "),n(l,{class:"router-link",to:{name:"Register"}},{default:d(()=>[r("Register")]),_:1})]),B,s("div",$,[s("div",b,[i(s("input",{type:"text",placeholder:"Email","onUpdate:modelValue":e[0]||(e[0]=t=>o.email=t)},null,512),[[c,o.email]]),n(p,{class:"icon"})]),s("div",C,[i(s("input",{type:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t)},null,512),[[c,o.password]]),n(_,{class:"icon"})]),i(s("div",{class:"error"},w(this.errorMsg),513),[[v,o.error]])]),n(l,{class:"forgot-password",to:{name:"ForgotPassword"}},{default:d(()=>[r("Forgot your password?")]),_:1}),s("button",{onClick:e[2]||(e[2]=f((...t)=>o.signIn&&o.signIn(...t),["prevent"]))},"Sign In"),D]),F])}const P=u(h,[["render",I]]);export{P as default};