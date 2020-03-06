(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{766:function(t,s,n){"use strict";n.r(s);var a=n(14),p=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("该篇文章主要介绍了如何得到一个图像的若干个近似得到的较少的特征轮廓点以及凸包，找出图像的边界矩形和最小外接圆、椭圆和并对其进行直线拟合，并对相关的API的使用进行了简要介绍，并写出了个人的一些简单操作结果。")]),t._v(" "),n("h1",{attrs:{id:"一、：轮廓近似和凸包、"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、：轮廓近似和凸包、"}},[t._v("#")]),t._v(" 一、：轮廓近似和凸包、")]),t._v(" "),n("h2",{attrs:{id:"_1-需用函数："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-需用函数："}},[t._v("#")]),t._v(" 1.需用函数：")]),t._v(" "),n("p",[t._v("(1). approx=cv2.approxPolyDP(cnt,epsilon,True or False)\n参数为：原轮廓，由原始轮廓到近似轮廓的最大距离即精确度（最大距离越大，点越少），轮廓是否为闭合（True为闭合）\n返回值为：由原轮廓近似得到的由更少点组成的近似轮廓\n用途为：将原轮廓近似为由更少点组成的近似轮廓")]),t._v(" "),t._v("(2). hull=cv2.convexHull(points[,clockwise[,returnPoints]])\n"),n("p",[t._v("参数为：组成轮廓的点，返回凸包的方向（True为顺时针方向），返回凸包上点的位置（True为凸包上所有的点，False为与凸包对应的轮廓上的点）\n返回值为：凸包的点的坐标\n用途为：返回一个轮廓的凸包的点的坐标")]),t._v(" "),n("p",[t._v("(3). cv2.isContourConvex(contour)\n参数为：轮廓\n返回值为：是否具有凸性的布尔值\n用途为：检测一个轮廓是否具有凸性")]),t._v(" "),n("p",[t._v("凸包：包含并接触凸出来的部分的曲线\n凸性缺陷：若有凸出来的部分，则凹下去的部分为凸性缺陷")]),t._v(" "),n("h2",{attrs:{id:"_2-代码实现："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码实现："}},[t._v("#")]),t._v(" 2.代码实现：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np \nimg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#生成一个三通道的512X512的数据类型为unsigned int类型的全黑图像")]),t._v("\n\npts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("175")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("235")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#传入的元组依次为最高维的宽度至最低维的宽度")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对生成的二维numpy数组进行shape属性转换，转换为6 X 1 X 2的三维numpy数组即一个三维数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#组中包含六个二维数组，一个二维数组中包含一个一维数组，一个一维数组中包含两个元素，")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#参数-1代表自动计算该维的宽度值，也可指定")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cv2.polylines(img,[pts],True,(255,255,255))  用polylines()或者fillPoly()来对这几组点进行绘制多边形，前者只绘制曲线，后者绘制填充图形")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillPoly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#其中img为原图像，[pts]为生成的包含相关点信息的三维数组，True为该曲线封闭，后接RGB颜色值")]),t._v("\n\ngray"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2GRAY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将BGR颜色空间转换为灰度空间")]),t._v("\ncontours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hierarchy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findContours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RETR_TREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHAIN_APPROX_SIMPLE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nepsilon"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arcLength"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\napprox"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("approxPolyDP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("epsilon"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("approx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\nhull"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("convexHull"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hull"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isContourConvex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n\n\n")])])]),n("h1",{attrs:{id:"二、：边界矩形和最小外接圆、椭圆和直线拟合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、：边界矩形和最小外接圆、椭圆和直线拟合"}},[t._v("#")]),t._v(" 二、：边界矩形和最小外接圆、椭圆和直线拟合")]),t._v(" "),n("h2",{attrs:{id:"_1-需用函数：-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-需用函数：-2"}},[t._v("#")]),t._v(" 1.需用函数：")]),t._v(" "),n("p",[t._v("(1).x,y,width,height=cv2.boundingRect(cnt)\n参数为：轮廓的一个索引\n返回值为： x,y为矩形左上角顶点的坐标，width,height为矩形的宽度和高度\n用途为：获得一个轮廓的边界直即正矩形\n(2). Box2D=cv2.minAreaRect(cnt)\n参数为：轮廓的一个索引\n返回值为：Box2D结构，包括(x,y),(width,height,theta)\n用途为：获得一个轮廓的边界旋转矩形的相关信息\n(3).(x,y),radius=cv2.minEnclosingCircle(cnt)\n参数为：轮廓的一个索引\n返回值为：该最小外接圆的圆心坐标以及半径\n用途为：找到一个轮廓的最小外接圆\n(4).(x,y),(chan,duan,theta)=cv2.fitEllipse(cnt)\n参数为：轮廓的一个索引\n返回值为：该轮廓拟合椭圆的中点坐标，长轴长，短轴长，顺时针旋转角度\n用途为：找出一个轮廓的拟合椭圆\n(5).line=cv2.fitLine(cnt, distType, param, reps, aeps)")]),t._v(" "),n("h2",{attrs:{id:"_2-代码实现：-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码实现：-2"}},[t._v("#")]),t._v(" 2.代码实现：")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np \nimg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#生成一个三通道的512X512的数据类型为unsigned int类型的全黑图像")]),t._v("\n\npts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("75")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("95")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("175")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("235")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int32"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npts"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#传入的元组依次为最高维的宽度至最低维的宽度")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对生成的二维numpy数组进行shape属性转换，转换为6 X 1 X 2的三维numpy数组即一个三维数")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#组中包含六个二维数组，一个二维数组中包含一个一维数组，一个一维数组中包含两个元素，")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#参数-1代表自动计算该维的宽度值，也可指定")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#cv2.polylines(img,[pts],True,(255,255,255))  用polylines()或者fillPoly()来对这几组点进行绘制多边形，前者只绘制曲线，后者绘制填充图形")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillPoly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#其中img为原图像，[pts]为生成的包含相关点信息的三维数组，True为该曲线封闭，后接RGB颜色值")]),t._v("\n\ngray"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2GRAY"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将BGR颜色空间转换为灰度空间")]),t._v("\ncontours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("hierarchy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("findContours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gray"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RETR_TREE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHAIN_APPROX_SIMPLE"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#检测该图形的轮廓点")]),t._v("\n\nx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boundingRect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#检测出该轮廓的正边缘矩形")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rectangle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#画出边界矩形")]),t._v("\n\nrect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minAreaRect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#检测出该轮廓的旋转边缘矩形,该函数返回值为一个Box2D的结构包含左上角坐标x，y和宽度以及高度和旋转角度")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#绘制该矩形所要的4个角点需要其他函数cv2.boxPoints()来获得")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boxPoints"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \nbox"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("np"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("int0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#因为图像上的每个点的坐标均为正数，因此需要用该函数将计算得到的4个角点的浮点值转换为整数值")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawContours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("radium"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minEnclosingCircle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("radium"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#浮点坐标转换为整型")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("circle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("radium"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nellipse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitEllipse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ellipse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ellipse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cols"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitLine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("contours"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DIST_L2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nleft"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("vy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nright"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cols"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("vy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("line"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cols"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("waitKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destroyAllWindows"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190507222255247.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h6YzEyMzRfXw==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);