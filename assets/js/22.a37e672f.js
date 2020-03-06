(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{762:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("图像金字塔：是一系列以金字塔形状排列的分辨率逐步降低或升高的图像集合。可以由一副高分辨率的图像逐渐向下生成一系列低分辨率的图像（像素行数和列数减少即分辨率降低，同时尺寸变小），也可以由低分辨率的图像向上生成一系列的尺寸变大的图像，但分辨率不会增大且会使图像变模糊。即图像先向下后向上生成会使图像原像素损失。")]),t._v(" "),a("h2",{attrs:{id:"_1-原理简述："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-原理简述："}},[t._v("#")]),t._v(" 1.原理简述：")]),t._v(" "),a("p",[t._v("有两类图像金字塔：高斯金字塔和拉普拉斯金字塔。\n高斯金字塔形成：先通过高斯平滑函数将原图像通过高斯核进行平滑模糊即对原图像的周围即上下左右中五个像素点的值进行加权平均，再隔一行各一列分别采样而得，这样操作一次一个MxN的图像就变成了一个M/2xN/2的图像。所以这幅图像的面积就变为原来图像面积的四分之一，连续进行这样的操作我们就会得到一个分辨率不断下降的图像金字塔。")]),t._v(" "),a("p",[t._v("拉普拉斯金字塔：可由高斯金字塔计算而来，计算方法为：原图像与其先向下后向上取样后生成的图像的差，经过几次重复操作后，其中很多像素点的值都会变为0，这种金字塔经常被用在图像压缩中。")]),t._v(" "),a("h2",{attrs:{id:"_2-使用函数介绍："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用函数介绍："}},[t._v("#")]),t._v(" 2.使用函数介绍：")]),t._v(" "),a("p",[t._v("cv2.pyrUp(src[,dst[,dstsize[,borderType]]]) →dst\ncv2.pyrDown(src[,dst[,dstsize[,borderType]]]) →dst\n参数基本上只需用src即原图像，第二个和第三个参数分别代表：目标图像以及其尺寸元组。")]),t._v(" "),a("h2",{attrs:{id:"_3-代码实现："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实现："}},[t._v("#")]),t._v(" 3.代码实现：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\nimg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    /1.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyrDown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#原图像向下取样")]),t._v("\nhigh"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyrUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#向下取样后的图像想上取样")]),t._v("\nlaplacian"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("hign   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用hign和img生成一层拉普拉斯金字塔图像")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"laplacian"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("laplacian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("waitKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destroyAllWindows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190403223343957.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019040322500514.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);