(function()
{
 var global=this;
 var Serialize,Settings,Web,WebSharper,__5,__6;
 IntelliFactory.WebSharper.Runtime.Declare({IntelliFactory:{WebSharper:{Web:{Settings:{},Serialize:{},Activator:{}}}}});
 Settings=function()
 {
  return IntelliFactory.WebSharper.Web.Settings;
 };
 Web=function()
 {
  return IntelliFactory.WebSharper.Web;
 };
 WebSharper=function()
 {
  return IntelliFactory.WebSharper;
 };
 Serialize=function()
 {
  return IntelliFactory.WebSharper.Web.Serialize;
 };
 (Settings()).WebSharperDataName="websharper-data";
 (Serialize()).DeserializeContent=function(id)
 {
  var _,json,txt;
  _=document;
  txt=_.getElementById(id);
  json=txt.getAttribute("content");
  return(WebSharper()).Remoting.Client.Parse(json);
 };
 __5=function(init)
 {
  var _;
  _=(WebSharper()).Html.Implementation.HtmlProvider;
  return _.OnDocumentReady(init);
 };
 __6=function()
 {
  var _,_1,__1,__2,__3,__4,control,data,enumerator,forLoopVar,id,old,pagelet,x;
  data=(Serialize()).DeserializeContent((Settings()).WebSharperDataName);
  enumerator=data.GetEnumerator();
  try
  {
   while(enumerator.MoveNext())
    {
     forLoopVar=enumerator.get_Current();
     id=forLoopVar[0];
     control=forLoopVar[1];
     _=document;
     old=_.getElementById(id);
     pagelet=control.get_Body();
     __1=old.parentNode;
     __2=pagelet.get_Body();
     __4=__1.replaceChild(__2,old);
     __3=function(value)
     {
      return void value;
     };
     __3(__4);
     pagelet.Render();
    }
  }
  finally
  {
   enumerator.Dispose();
  }
  return _1;
 };
 (Web()).Activator.Activate=__5(__6);
}());
