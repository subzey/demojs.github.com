(function()
{
 var global=this;
 var Append,ArrayModule,Attr,Class,Data,Delay,Demo_1,Enhance,Formlet,Formlet_1,Html,Implementation,Iterate,NewRecord,Obstacle,OfArray,Runtime,SeqModule,Tags,Tupled,__29,abs,addText,cos,drawStr,events,height,numParticles,random,renderTexts,sin,spawnText,width;
 IntelliFactory.WebSharper.Runtime.Declare({Demo:{Demo:{Triangle:{},Obstacle:{},DemoControl:{}}}});
 Demo_1=function()
 {
  return Demo.Demo;
 };
 Class=function()
 {
  return IntelliFactory.WebSharper.Runtime.Class;
 };
 Runtime=function()
 {
  return IntelliFactory.WebSharper.Runtime;
 };
 (function()
 {
  return IntelliFactory.WebSharper;
 });
 OfArray=function()
 {
  return IntelliFactory.WebSharper.Core.ListModule.OfArray;
 };
 (function()
 {
  return IntelliFactory.WebSharper.Core.ListModule;
 });
 (function()
 {
  return IntelliFactory.WebSharper.Core;
 });
 Attr=function()
 {
  return IntelliFactory.WebSharper.Html.Implementation.Attr;
 };
 Implementation=function()
 {
  return IntelliFactory.WebSharper.Html.Implementation;
 };
 Html=function()
 {
  return IntelliFactory.WebSharper.Html;
 };
 Tags=function()
 {
  return IntelliFactory.WebSharper.Html.Implementation.Tags;
 };
 Data=function()
 {
  return IntelliFactory.WebSharper.Formlet.Data;
 };
 Formlet_1=function()
 {
  return IntelliFactory.WebSharper.Formlet;
 };
 Formlet=function()
 {
  return IntelliFactory.WebSharper.Formlet.Formlet;
 };
 Enhance=function()
 {
  return IntelliFactory.WebSharper.Formlet.Enhance;
 };
 ArrayModule=function()
 {
  return IntelliFactory.WebSharper.Core.ArrayModule;
 };
 numParticles=function()
 {
  return Demo.Demo.numParticles;
 };
 random=function()
 {
  return Math.random;
 };
 width=function()
 {
  return Demo.Demo.width;
 };
 NewRecord=function()
 {
  return IntelliFactory.WebSharper.Runtime.NewRecord;
 };
 height=function()
 {
  return Demo.Demo.height;
 };
 events=function()
 {
  return Demo.Demo.events;
 };
 Iterate=function()
 {
  return IntelliFactory.WebSharper.Core.ArrayModule.Iterate;
 };
 cos=function()
 {
  return Math.cos;
 };
 sin=function()
 {
  return Math.sin;
 };
 Obstacle=function()
 {
  return Demo.Demo.Obstacle;
 };
 abs=function()
 {
  return Math.abs;
 };
 Tupled=function()
 {
  return IntelliFactory.WebSharper.Runtime.Tupled;
 };
 SeqModule=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule;
 };
 Delay=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.Delay;
 };
 Append=function()
 {
  return IntelliFactory.WebSharper.Core.SeqModule.Append;
 };
 __29=function(dd)
 {
  var _,__1;
  __1=dd.obstacles;
  _=function(array)
  {
   return IntelliFactory.WebSharper.Core.ArrayModule.Iterate(function(o)
   {
    return o.targetY=-Demo.Demo.height;
   },array);
  };
  return _(__1);
 };
 (function(array)
 {
  return IntelliFactory.WebSharper.Core.ArrayModule.Iterate(function(o)
  {
   return o.targetY=-Demo.Demo.height;
  },array);
 });
 (function(o)
 {
  return o.targetY=-Demo.Demo.height;
 });
 (Demo_1()).DemoControl=(Class())(null,null,{get_Body:function()
 {
  var _this=this;
  var _,__1,__12,__13,__14,__15,__16,__17,__2,__3,__4,__5,__6,__7,__8,container;
  _=Attr();
  __2=(OfArray())([_.NewAttr("id","container")]);
  __1=Tags();
  container=__1.Div(__2);
  __3=function(s)
  {
   return Number(s);
  };
  __6=(Formlet_1()).Controls.Input("1000");
  __4=(Data()).Validator;
  __5=__4.IsInt("Integer value required");
  __8=__5(__6);
  __7=function(formlet)
  {
   return(Enhance()).WithValidationIcon(formlet);
  };
  __13=__7(__8);
  __12=function(formlet)
  {
   return(Enhance()).WithLabel(function()
   {
    var __10,__11,__9;
    __9=Tags();
    __11=(OfArray())([__9.text("Number of particles")]);
    __10=Tags();
    return __10.NewTag("span",__11);
   },formlet);
  };
  __15=(Data()).op_LessMultiplyGreater((Formlet()).Return(__3),__12(__13));
  __14=function(formlet)
  {
   var inputRecord;
   inputRecord=(Enhance()).FormButtonConfiguration.get_Default();
   return(Enhance()).WithCustomSubmitButton({Label:{$:1,$0:"Run!"},Style:inputRecord.Style},formlet);
  };
  __17=__14(__15);
  __16=function(formlet)
  {
   return(Formlet()).Run(function(selected)
   {
    var __9;
    (Demo_1()).numParticles=selected;
    __9=container["HtmlProvider@22"];
    __9.Clear(container.Body);
    return container.AppendI(_this.makeCanvas());
   },formlet);
  };
  container.AppendI(__16(__17));
  return container;
 },makeCanvas:function()
 {
  var _this=this;
  var _,__1,__2,__28,canvas,element;
  __1=(Implementation()).HTML5.Tags;
  _=Attr();
  __2=(OfArray())([_.NewAttr("style","width: 100%; height: 100%; background-color: black;")]);
  element=__1.NewTag("canvas",__2);
  canvas=element.Body;
  __28=function(w_1)
  {
   return(Html()).Operators.OnAfterRender(function()
   {
    var __3,__4,__5,__6,ctx,dd,h,loop,ts,w;
    __3=element.Body;
    __4=jQuery(__3);
    w=__4.width();
    __5=element.Body;
    __6=jQuery(__5);
    h=__6.height();
    canvas.width=w;
    canvas.height=h;
    (Demo_1()).width=Number(w);
    (Demo_1()).height=Number(h);
    ctx=canvas.getContext("2d");
    ts=(ArrayModule()).Initialize(numParticles(),function()
    {
     var __10,__11,__12,__13,__14,__15,__16,__17,__18,__19,__20,__21,__22,__23,__24,__25,__26,__27,__7,__8,__9,a1,a2,a3,color,d1,d2,d3,greyNuance,t;
     __7=Math;
     __9=128*(random()).call(__7);
     __8=Math;
     __10=Math.floor.call(__8,__9);
     greyNuance=__10.toString();
     color="rgb("+greyNuance+","+greyNuance+","+greyNuance+")";
     __11=width();
     __12=0.01-0.0025;
     __13=Math;
     d1=__11*(0.0025+__12*(random()).call(__13));
     __14=3.14159265358979*2/3;
     __15=Math;
     a1=__14*(random()).call(__15);
     __16=width();
     __17=0.01-0.0025;
     __18=Math;
     d2=__16*(0.0025+__17*(random()).call(__18));
     __19=3.14159265358979*2/3;
     __20=3.14159265358979*2/3;
     __21=Math;
     a2=__19+__20*(random()).call(__21);
     __22=width();
     __23=0.01-0.0025;
     __24=Math;
     d3=__22*(0.0025+__23*(random()).call(__24));
     __25=3.14159265358979*2/3;
     __26=3.14159265358979*2/3;
     __27=Math;
     a3=__25-__26*(random()).call(__27);
     t=(NewRecord())((Demo_1()).Triangle,{cx:0,cy:0,d1:d1,a1:a1,d2:d2,a2:a2,d3:d3,a3:a3,vx:0,vy:0,va:0,baseColor:color,color:color});
     t.Reinit();
     return t;
    });
    (Demo_1()).gx=0;
    (Demo_1()).gy=0.5;
    dd={ctx:ctx,obstacles:[]};
    loop=function()
    {
     var __10,__11,__14,__15,__7,__8,__9,numDisplayedParticles;
     __7=width();
     __8=height();
     ctx.clearRect(0,0,__7,__8);
     if((events())[_this.nextEventId].dt===_this.frame-_this.lastEventFrame)
      {
       (events())[_this.nextEventId].a(dd);
       _this.lastEventFrame=_this.frame;
       __9=_this.nextEventId=_this.nextEventId+1;
      }
     __9;
     __10=numParticles();
     __11=42*_this.frame;
     numDisplayedParticles=(__10<__11?__10:__11)-1;
     (Runtime()).Iterate(0,numDisplayedParticles,function(i)
     {
      var __12,__13,t;
      t=ts[i];
      t.Update(ctx);
      __13=dd.obstacles;
      __12=function(array)
      {
       return(Iterate())(function(obstacle)
       {
        return t.IntersectObstacle(obstacle);
       },array);
      };
      __12(__13);
      return t.Draw(ctx);
     });
     __15=dd.obstacles;
     __14=function(array)
     {
      return(Iterate())(function(obstacle)
      {
       obstacle.Update(ctx);
       return obstacle.Draw(ctx);
      },array);
     };
     __14(__15);
     return _this.frame=_this.frame+1;
    };
    return void setInterval(loop,50);
   },w_1);
  };
  __28(element);
  return element;
 }});
 (Demo_1()).Obstacle=(Class())(null,null,{Update:function(ctx)
 {
  var s=this;
  return s.update([s,ctx]);
 },Draw:function(ctx)
 {
  var s=this;
  return s.draw([s,ctx]);
 }});
 (Demo_1()).Triangle=(Class())(null,null,{Reinit:function()
 {
  var t=this;
  var _,__1,__2,__3,__4,__5;
  t.cy=0;
  _=width();
  __1=Math;
  t.cx=_*(random()).call(__1);
  t.vx=0;
  __2=height();
  __3=0.05-0.025;
  __4=Math;
  t.vy=__2*(0.025+__3*(random()).call(__4));
  __5=Math;
  t.va=0.4*(random()).call(__5)-0.2;
  return t.color=t.baseColor;
 },Update:function()
 {
  var t=this;
  var _;
  if(t.cy>height())
   {
    _=t.Reinit();
   }
  else
   {
    t.vx=t.vx+(Demo_1()).gx;
    t.vy=t.vy+(Demo_1()).gy;
    t.cx=t.cx+t.vx;
    _=t.cy=t.cy+t.vy;
   }
  _;
  t.a1=t.a1+t.va;
  t.a2=t.a2+t.va;
  return t.a3=t.a3+t.va;
 },Draw:function(ctx)
 {
  var t=this;
  var _,__1,__10,__11,__12,__13,__14,__15,__16,__17,__18,__19,__2,__20,__21,__22,__23,__24,__25,__3,__4,__5,__6,__7,__8,__9,x1,x2,x3,y1,y2,y3;
  if(t.cy>=0)
   {
    _=t.color;
    ctx.fillStyle=_;
    ctx.beginPath();
    __1=t.d1;
    __3=t.a1;
    __2=Math;
    x1=__1*(cos()).call(__2,__3);
    __4=t.d1;
    __6=t.a1;
    __5=Math;
    y1=__4*(sin()).call(__5,__6);
    __7=t.cx+x1;
    __8=t.cy+y1;
    ctx.moveTo(__7,__8);
    __9=t.d2;
    __11=t.a2;
    __10=Math;
    x2=__9*(cos()).call(__10,__11);
    __12=t.d2;
    __14=t.a2;
    __13=Math;
    y2=__12*(sin()).call(__13,__14);
    __15=t.cx+x2;
    __16=t.cy+y2;
    ctx.lineTo(__15,__16);
    __17=t.d3;
    __19=t.a3;
    __18=Math;
    x3=__17*(cos()).call(__18,__19);
    __20=t.d3;
    __22=t.a3;
    __21=Math;
    y3=__20*(sin()).call(__21,__22);
    __23=t.cx+x3;
    __24=t.cy+y3;
    ctx.lineTo(__23,__24);
    __25=ctx.fill();
   }
  return __25;
 },IntersectObstacle:function(obstacle)
 {
  var t=this;
  var _,__1,__2,__3,__4,__5,__6,__7,__8,r,sign;
  r=(Obstacle()).get_r()*2;
  __1=t.cx-obstacle.x;
  _=Math;
  __2=(abs()).call(_,__1);
  __4=t.cy-obstacle.y;
  __3=Math;
  if(__2+(abs()).call(__3,__4)<r)
   {
    sign=t.cx>obstacle.x?1:-1;
    t.cx=t.cx+sign*20;
    t.va=sign*0.5;
    t.color=obstacle.color;
    __5=t.vx;
    __6=sign*3;
    __7=Math;
    __8=t.vx=__5+__6*(random()).call(__7);
   }
  return __8;
 }});
 (Obstacle()).get_r=function()
 {
  return 100;
 };
 (Obstacle()).SimpleUpdate=function(s)
 {
  var _,__1,dist2,distRatio,dx,dy;
  dx=s.targetX-s.x;
  dy=s.targetY-s.y;
  dist2=dx*dx+dy*dy;
  if(dist2>s.speed*s.speed)
   {
    _=Math;
    distRatio=s.speed/Math.sqrt.call(_,dist2);
    s.x=s.x+distRatio*dx;
    __1=s.y=s.y+distRatio*dy;
   }
  else
   {
    s.x=s.targetX;
    __1=s.y=s.targetY;
   }
  return __1;
 };
 (Demo_1()).width=0;
 (Demo_1()).height=0;
 (Demo_1()).numParticles=2000;
 (Demo_1()).gx=0;
 (Demo_1()).gy=0;
 drawStr=function(str)
 {
  return function(size)
  {
   return(Tupled())(function(tupledArg)
   {
    var _,__1,__2,__3,ctx,s,tm;
    s=tupledArg[0];
    ctx=tupledArg[1];
    _=size.toString()+"pt title";
    ctx.font=_;
    __1=s.color;
    ctx.fillStyle=__1;
    tm=ctx.measureText(str);
    __2=s.x-tm.width/2;
    __3=s.y;
    return ctx.fillText(str,__2,__3);
   });
  };
 };
 renderTexts=function(texts)
 {
  return function(size)
  {
   var _;
   _=function(array)
   {
    return(ArrayModule()).Map((Tupled())(function(tupledArg)
    {
     var color,str,targetX,targetY,update,x,y;
     x=tupledArg[0];
     y=tupledArg[1];
     color=tupledArg[2];
     str=tupledArg[3];
     targetX=width()*x;
     targetY=height()*y;
     update=(Tupled())(function(tupledArg_1)
     {
      var arg00,arg01;
      arg00=tupledArg_1[0];
      arg01=tupledArg_1[1];
      return(Obstacle()).SimpleUpdate(arg00,arg01);
     });
     return(NewRecord())(Obstacle(),{x:width()*x,y:height(),color:color,speed:height()/16,targetX:targetX,targetY:targetY,draw:(drawStr(str))(size),update:update});
    }),array);
   };
   return _(texts);
  };
 };
 spawnText=function(texts)
 {
  return function(dd)
  {
   return dd.obstacles=(renderTexts(texts))(70);
  };
 };
 addText=function(texts)
 {
  return function(size)
  {
   return function(dd)
   {
    var _,__1;
    _=dd.obstacles;
    __1=(renderTexts(texts))(size);
    return dd.obstacles=_.concat(__1);
   };
  };
 };
 (Demo_1()).events=(SeqModule()).ToArray((Delay())(function()
 {
  var _;
  _={dt:40,a:spawnText([[1/6,0.2,"#f53","H"],[2/6,0.2,"#f53","e"],[3/6,0.2,"#f53","l"],[4/6,0.2,"#f53","l"],[5/6,0.2,"#f53","o"],[1/12,0.6,"#58e","d"],[3/12,0.6,"#58e","e"],[5/12,0.6,"#58e","m"],[7/12,0.6,"#58e","o"],[9/12,0.6,"#58e","j"],[11/12,0.6,"#58e","s"]])};
  return(Append())([_],(Delay())(function()
  {
   var __1;
   __1={dt:60,a:__29};
   return(Append())([__1],(Delay())(function()
   {
    var __2;
    __2={dt:20,a:spawnText([[3/14,0.2,"#d07","I"],[5/14,0.2,"#58e","c"],[7/14,0.2,"#58e","a"],[9/14,0.2,"#58e","n"],[11/14,0.2,"#58e","t"],[5/20,0.45,"#1a2","b"],[7/20,0.45,"#1a2","e"],[9/20,0.45,"#d80","h"],[11/20,0.45,"#d80","e"],[13/20,0.45,"#d80","r"],[15/20,0.45,"#d80","e"],[5/22,0.7,"#f53","w"],[7/22,0.7,"#f53","i"],[9/22,0.7,"#f53","t"],[11/22,0.7,"#f53","h"],[13/22,0.7,"#24d","y"],[15/22,0.7,"#24d","o"],[17/22,0.7,"#24d","u"]])};
    return(Append())([__2],(Delay())(function()
    {
     var __3;
     __3={dt:60,a:__29};
     return(Append())([__3],(Delay())(function()
     {
      var __4;
      __4={dt:20,a:spawnText([[5/22,0.2,"#58e","S"],[7/22,0.2,"#58e","o"],[9/22,0.2,"#d07","I"],[11/22,0.2,"#24d","j"],[13/22,0.2,"#24d","u"],[15/22,0.2,"#24d","s"],[17/22,0.2,"#24d","t"],[5/20,0.45,"#f53","w"],[7/20,0.45,"#f53","a"],[9/20,0.45,"#f53","n"],[11/20,0.45,"#f53","t"],[13/20,0.45,"#f53","e"],[15/20,0.45,"#f53","d"],[3/14,0.7,"#1a2","t"],[5/14,0.7,"#1a2","o"],[7/14,0.7,"#d80","s"],[9/14,0.7,"#d80","a"],[11/14,0.7,"#d80","y"]])};
      return(Append())([__4],(Delay())(function()
      {
       var __5;
       __5={dt:60,a:__29};
       return(Append())([__5],(Delay())(function()
       {
        var __6;
        __6={dt:20,a:spawnText([[0.12,0.15,"#444"," "],[0.12,0.25,"#ff0"," "],[0.05,0.25,"#444"," "],[0.25,1.1,"#444"," "],[0.35,0.6,"#ff0"," "],[0.35,0.8,"#ff0"," "],[0.45,1.1,"#444"," "],[0.58,0.25,"#ff0"," "],[0.58,0.15,"#444"," "],[0.58,0.5,"#ff0"," "],[0.58,0.8,"#ff0"," "],[0.71,1.1,"#444"," "],[0.84,0.15,"#444"," "],[0.84,0.25,"#ff0"," "],[0.84,0.8,"#ff0"," "],[0.91,0.25,"#444"," "]])};
        return(Append())([__6],(Delay())(function()
        {
         var __7;
         __7={dt:40,a:(addText([[0.84,0.5,"#ff0",":)"]]))(50)};
         return(Append())([__7],(Delay())(function()
         {
          var __8;
          __8={dt:60,a:(addText([[0.09,0.93,"#ea1","(the end)"]]))(50)};
          return(Append())([__8],(Delay())(function()
          {
           var __9;
           __9={dt:10000,a:function()
           {
            return alert("Hey it's over, what are you still doing here?");
           }};
           return[__9];
          }));
         }));
        }));
       }));
      }));
     }));
    }));
   }));
  }));
 }));
}());
