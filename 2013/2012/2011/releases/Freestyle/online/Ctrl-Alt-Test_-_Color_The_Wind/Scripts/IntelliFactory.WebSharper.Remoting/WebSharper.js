(function()
{
 var global=this;
 var Client,Core,Rpc,Runtime,WebSharper,map;
 IntelliFactory.WebSharper.Runtime.Declare({IntelliFactory:{WebSharper:{Remoting:{Client:{}}}}});
 Client=function()
 {
  return IntelliFactory.WebSharper.Remoting.Client;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Remoting;
 });
 WebSharper=function()
 {
  return IntelliFactory.WebSharper;
 };
 Runtime=function()
 {
  return IntelliFactory.WebSharper.Runtime;
 };
 Rpc=function()
 {
  return IntelliFactory.WebSharper.Remoting.Client.Rpc;
 };
 Core=function()
 {
  return IntelliFactory.WebSharper.Core;
 };
 map=function()
 {
  return IntelliFactory.WebSharper.Remoting.Client.map;
 };
 (Client()).Async=function(url,t,m,args)
 {
  var __2,__3;
  __2=function(arg00)
  {
   var _,__1;
   __1=(WebSharper()).Control.Concurrent.FromContinuations(function(x)
   {
    return function(y)
    {
     return arg00([x,y,function(value)
     {
      return void value;
     }]);
    };
   });
   _=function(x)
   {
    return x;
   };
   return _(__1);
  };
  __3=(Runtime()).Tupled(function(tupledArg)
  {
   var onErr,onOk;
   onOk=tupledArg[0];
   onErr=tupledArg[1];
   return(Rpc())(true,t,m,args,{$:1,$0:function(ok)
   {
    return function(obj)
    {
     var _;
     if(ok)
      {
       _=onOk(obj);
      }
     else
      {
       _=onErr(obj);
      }
     return _;
    };
   }});
  });
  return __2(__3);
 };
 (Client()).Rpc=function(async,t,m,args,res)
 {
  var _,__2,__3,__4,xhr;
  xhr=new XMLHttpRequest();
  xhr.open("POST","?",async);
  xhr.setRequestHeader("Content-Type","application/json");
  if(t)
   {
    _=xhr.setRequestHeader("X-WebSharper-Rpc-Handler",t);
   }
  _;
  xhr.setRequestHeader("X-WebSharper-Rpc",m);
  if(res.$==1)
   {
    __2=xhr.onreadystatechange=function()
    {
     var __1;
     if((Core()).Equality.Equals(xhr.readyState,4))
      {
       __1=(res.$0(xhr.status===200))((Client()).Parse(xhr.responseText));
      }
     return __1;
    };
   }
  __2;
  __3=JSON;
  __4=JSON.stringify.call(__3,args);
  return xhr.send(__4);
 };
 (Client()).Call=function(url,t,m,args)
 {
  var _,__1,__2,objRef,okRef;
  _={};
  objRef={contents:_};
  okRef={contents:true};
  (Rpc())(false,t,m,args,{$:1,$0:function(ok)
  {
   return function(obj)
   {
    okRef.contents=ok;
    return objRef.contents=obj;
   };
  }});
  if(okRef.contents)
   {
    __2=objRef.contents;
   }
  else
   {
    __1=objRef.contents;
    throw __1;
   }
  return __2;
 };
 (Client()).Send=function(url,t,m,args)
 {
  return(Rpc())(true,t,m,args,{$:0});
 };
 (Client()).Parse=function(x)
 {
  var _,decode,json,types;
  _=JSON;
  json=JSON.parse.call(_,x);
  types=json.types;
  (Runtime()).Iterate(0,types.length-1,function(i)
  {
   var __1;
   __1=(Client()).lookup(types[i]);
   return types[i]=__1;
  });
  decode=function(x_1)
  {
   var __1,__2,__3,__4,__5,__6,matchValue,matchValue_1,o,t,ti;
   if(x_1==null)
    {
     __6=x_1;
    }
   else
    {
     matchValue=typeof x_1;
     if(matchValue==="object")
      {
       if(!(x_1 instanceof Array))
        {
         o=(map())(decode,x_1.v);
         ti=x_1.t;
         if(typeof ti==="undefined")
          {
           __3=o;
          }
         else
          {
           matchValue_1=types[ti];
           if(matchValue_1.$==0)
            {
             __2=o;
            }
           else
            {
             t=matchValue_1.$0;
             __1=Runtime();
             __2=(Runtime()).Coerce.call(__1,o,t);
            }
           __3=__2;
          }
         __4=__3;
        }
       else
        {
         __4=(map())(decode,x_1);
        }
       __5=__4;
      }
     else
      {
       __5=(map())(decode,x_1);
      }
     __6=__5;
    }
   return __6;
  };
  return decode(json.value);
 };
 (Client()).lookup=function(x)
 {
  var _,__1,i,r;
  r=global;
  i=0;
  if(r)
   {
    _=i<x.length;
   }
  else
   {
    _=false;
   }
  while(_)
   {
    r=r[x[i]];
    i=i+1;
    if(r)
     {
      _=i<x.length;
     }
    else
     {
      _=false;
     }
   }
  if(r)
   {
    __1={$:1,$0:r};
   }
  else
   {
    __1={$:0};
   }
  return __1;
 };
 (Client()).map=function(f,x)
 {
  var _1,__1,__2,matchValue,r;
  if(x instanceof Array)
   {
    __2=(Core()).ArrayModule.Map(f,x);
   }
  else
   {
    matchValue=typeof x;
    if(matchValue==="object")
     {
      r={};
      for(_1 in x)if(function(y)
      {
       var _;
       _=f(x[y]);
       r[y]=_;
       return false;
      }(_1))
       break;
      __1=r;
     }
    else
     {
      __1=x;
     }
    __2=__1;
   }
  return __2;
 };
}());
