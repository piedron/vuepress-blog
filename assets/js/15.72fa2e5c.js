(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{760:function(t,s,a){"use strict";a.r(s);var n=a(14),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("所谓ROI即为感兴趣区域（range of interest）即从被处理的图像中以方框、圆、椭圆、不规则多边形等方式截取需要处理的区域。这里介绍了简单截取矩形ROI以及不规则图形的ROI并进而进行图像拼接的方法。 ")]),t._v(" "),a("h1",{attrs:{id:"截取规则和不规则roi的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#截取规则和不规则roi的方法"}},[t._v("#")]),t._v(" 截取规则和不规则ROI的方法")]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h1",{attrs:{id:"一、roi简介："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、roi简介："}},[t._v("#")]),t._v(" 一、ROI简介：")]),t._v(" "),a("p",[t._v("所谓ROI即为感兴趣区域（range of interest）即从被处理的图像中以方框、圆、椭圆、不规则多边形等方式截取需要处理的区域。")]),t._v(" "),a("h1",{attrs:{id:"二、截取矩形roi："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、截取矩形roi："}},[t._v("#")]),t._v(" 二、截取矩形ROI：")]),t._v(" "),a("p",[t._v("矩形区域：可用numpy中的数组索引选择像素点的行数列数范围截取相关的指定区域。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("roi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#截取图像img中像素点行数为100到200、列数为200到300即x轴200至300y轴100至200的roi区域")]),t._v("\nroi1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#0，1，2分别对应blue,green,red三个颜色通道")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#截取图像中的blue颜色通道中的全部像素点即整个图像的范围")]),t._v("\n")])])]),a("h1",{attrs:{id:"三、截取不规则roi："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、截取不规则roi："}},[t._v("#")]),t._v(" 三、截取不规则ROI：")]),t._v(" "),a("p",[t._v("需用函数简介：\ncv2.bitwise_and(src1,src2,[,dst[,mask]])  → dst\n对两幅图像进行按位和运算，其中mask为掩码，src和dst分别为原图像和返回图像")]),t._v(" "),a("p",[t._v("cv2.bitwise_not(src,[,dst[,mask]]) → dst\n对一幅图像进行按位非运算，其中mask为掩码")]),t._v(" "),a("p",[t._v("cv2.threshold(src,thresh,maxval,type[,dst]) → dst\n简单阈值函数将原图像二值化，其中各参数分别代表原图像、阈值、二进制值的最大值、阈值处理的方法")]),t._v(" "),a("p",[t._v("cv2.cvtColor(src,code[,dst[,dstCn]])  → dst\n颜色空间转换函数，code为颜色空间转换模式，常用的有cv2.COLOR_BGR2GRAY:将BGR格式的转换为灰度格式的图像\ncv2.COLOR_BGR2HSV:将BGR格式的图像转换为HSV格式的图像")]),t._v(" "),a("p",[t._v("cv2.add(src1,src2[,dst[,mask[,dtype]]]) → dst将两幅源图像进行简单算术加和操作")]),t._v(" "),a("p",[t._v("利用阈值函数来生成掩码，将其分为ROI和背景（可白可黑），然后利用位运算中的反运算来生成掩码的二进制反码、利用和运算来生成ROI。\n如下以将Opencv的logo融合到另一张图中为例来说明其操作：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\nimg1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"……/1.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#logo图像")]),t._v("\nimg2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"……/2.jpg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#要添加logo的图像")]),t._v("\nrows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cols"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#选取ROI所在的矩形区域即为logo的全部区域")]),t._v("\nimg1_gray"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2GRAY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#由于简单阈值函数cv2.threshold()只能接受单通道的图像，因此需要利用颜色空间转换函数cv2.cvtColor()将其转换为灰度图像")]),t._v("\nmask"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("threshold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1_gray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("175")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("THRESH_BINARY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#利用简单阈值函数来生成黑白二进制值的掩码")]),t._v("\nmask_inv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bitwise_not"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#利用位运算的非函数来生成与mask黑白区域对调的掩码")]),t._v("\nroi1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bitwise_and"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("img1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mask_inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#利用和函数来生成ROI1，即在img2中挖出logo的区域，即该区域为黑")]),t._v("\nroi2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bitwise_and"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("img2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#利用和函数生成ROI2，即使logo的背景变黑且使logo变白")]),t._v("\nadd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roi1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("roi2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 利用图像加法来将两个ROI加在一起来完成更好的融合")]),t._v("\nimg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("cols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("add  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将合成后的区域还原到img2上")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可展示出各个中间处理图像，来理解整个过程")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mask"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mask_inv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mask_inv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("add1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("add2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v('img2"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("waitKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destroyAllWindows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("图片示例\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190325230705134.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70",alt:"处理后的图像"}}),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190325230734723.png",alt:"logo"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);