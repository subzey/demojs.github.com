t=Date;
x=b.style;
x.position="absolute";
x.top=x.left=0;
w=b.width=innerWidth;
h=b.height=innerHeight;
g=d();
p=g.createProgram();
function $(i,z){s=g.createShader(i);g.shaderSource(s,z);g.compileShader(s);g.attachShader(p,s)}
$(35633,"attribute vec3 v;void main(){gl_Position=vec4(v,1.);}");
$(35632,"precision highp float;uniform float t;void main(){vec3 col;float l,z=t;for(int i=0;i<3;i++){vec2 uv,r=vec2("+w+".,"+h+".),p=gl_FragCoord.xy/r;uv=p;p-=.5;p.x*=r.x/r.y;z+=.07,l=length(p),uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z*2.)),col[i]=.01/length(abs(mod(uv,1.)-.5));}gl_FragColor=vec4(col/l,t);}");
g.linkProgram(p);
g.useProgram(p);
g.enableVertexAttribArray(v=g.getAttribLocation(p,"v"));
g.bindBuffer(n=34962,g.createBuffer());
g.bufferData(n,new Float32Array([1,1,0,u=-1,1,0,1,u,0,u,u,0]),35044);
s=new t;
setInterval('g.uniform1f(g.getUniformLocation(p,"t"),(new t-s)/1e3);g.vertexAttribPointer(v,3,5126,0,0,0);g.drawArrays(5,0,4)',0)