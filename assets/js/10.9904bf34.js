(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{756:function(t,s,n){"use strict";n.r(s);var a=n(14),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("斐波那契数列是因"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E6%95%B0%E5%AD%A6%E5%AE%B6/1210991",target:"_blank",rel:"noopener noreferrer"}},[t._v("数学家"),n("OutboundLink")],1),t._v("列昂纳多·斐波那契以兔子繁殖为例子而引入，指的是这样一个数列：1、1、2、3、5、8、13、21、34、……在数学上，斐波那契数列以如下被以"),n("a",{attrs:{href:"https://baike.baidu.com/item/%E9%80%92%E6%8E%A8/1740695",target:"_blank",rel:"noopener noreferrer"}},[t._v("递推"),n("OutboundLink")],1),t._v("的方法定义："),n("em",[t._v("F")]),t._v("(1)=1，"),n("em",[t._v("F")]),t._v("(2)=1, "),n("em",[t._v("F")]),t._v("(n)="),n("em",[t._v("F")]),t._v("(n - 1)+"),n("em",[t._v("F")]),t._v("(n - 2)（"),n("em",[t._v("n")]),t._v(" ≥ 3，"),n("em",[t._v("n")]),t._v(" ∈ N*）斐波那契数列是一个经典的递归分治法解决问题，以下通过各种优化算法进行求解。   ")]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"前言："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言："}},[t._v("#")]),t._v(" 前言：")]),t._v(" "),n("p",[t._v("所谓分治法就是将一个复杂的大的问题解决为若干个较小的子问题，一直不断的递归分解问题，直至问题可直接解决，而后回推求解的过程，该篇文章会结合求解斐波那契数列第n项的问题来使用分治法求解并且列出对该问题的其他优化解法")]),t._v(" "),n("p",[t._v("该篇文章针对于PTA上三道连续的斐波那契数列第n项求解题目")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://pintia.cn/problem-sets/1231397731926429696/problems/1231418066361012224",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("1")]),t._v(" "),n("strong",[t._v("斐波那契数列（I）")]),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://pintia.cn/problem-sets/1231397731926429696/problems/1231418066377789440",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("2")]),t._v(" "),n("strong",[t._v("斐波那契数列（II）")]),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://pintia.cn/problem-sets/1231397731926429696/problems/1231426096062418944",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("3")]),t._v(" "),n("strong",[t._v("斐波那契数列（III）")]),n("OutboundLink")],1)])])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"简单递归求解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单递归求解"}},[t._v("#")]),t._v(" 简单递归求解")]),t._v(" "),n("p",[t._v("即直接使用简单的递推公式进行递归求解，")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scanf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("该算法时间复杂度为O(N"),n("sup",[t._v("2")]),t._v(")，虽同二叉树的结构，但该结构很明显有很多子问题重复计算的过程，而不是只是二叉树的一条路径，它所有的结点都要走一遍，比如我要算f9,然后分为f8和f7，然后f7计算的时候由于函数是分开调用的，因此在这个时候f7就算了两遍，并且继续这样列举还会发现子问题越小，算的次数就越多，因此当斐波那契数列n越大时，该算法效率就越低，具体可参考上述第三题的题述，甚至该种算法还会导致递归调用过多，而函数栈内存有限导致栈溢出即段错误的现象")])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"尾递归优化求解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#尾递归优化求解"}},[t._v("#")]),t._v(" 尾递归优化求解")]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("尾递归")]),t._v("：如果一个函数中所有递归形式的调用都出现在函数的末尾，我们称这个递归函数是尾递归的。当递归调用是整个函数体中最后执行的语句且它的返回值不属于表达式的一部分时，这个递归调用就是尾递归。尾递归函数的特点是在回归过程中不用做任何操作，这个特性很重要，因为大多数现代的编译器会利用这种特点自动生成优化的代码。                                                                                                                    ---"),n("a",{attrs:{href:"%5Bhttps://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92/554682?fr=aladdin%5D(https://baike.baidu.com/item/%E5%B0%BE%E9%80%92%E5%BD%92/554682?fr=aladdin)"}},[t._v("引自百度百科")])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("在这里我们会再递归调用传参的过程进行一项一项地递推加和过程，我们会发现这种递归算法其实对应的就是循环中地三个变量的地推过程，因此将树形的递推转换为了线性的递推，使时间复杂度降为O(N)，从而提高效率，减少一部分递归调用的过程，不存在子问题的重复求解过程，其实也可以发现，当递归结构是线性时，就可以很轻松的和循环（也就是迭代）互换，因为每次只将问题规模减小1 ，但其实这时递归的优点也就没了，递归好多时候都是用空间效率换时间效率，而这时空间使用多了但时间依然未减少，也就是这时根本不需要递归，使用迭代就够了，像这种情况我感觉也根本就不是分治了，因为就没分解问题的过程，单纯就只是把效率搞得迭代转换为了递归而已，因此根本没必要用这个。")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" ll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" first"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" first"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里把3分出来是因为这种递归调用没法把3包含进去")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("first"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在传参时进行加和递推")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scanf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fabonacci")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"迭代法求解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迭代法求解"}},[t._v("#")]),t._v(" 迭代法求解")]),t._v(" "),n("p",[t._v("所谓迭代法就是利用循环递推求解，用一个临时变量来存first的值，然后把second的值赋给first，然后再加和得到second要用的值")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" Mod 998244353")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" ll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tll first"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("temp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scanf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%lld"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//if(n<=2) first=1;  ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里也可以不需要，因为n>=3时计算结构最终值再second内，因此不做处均输出second也可以")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\ttemp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("first"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("Mod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tfirst"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("Mod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tsecond"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("Mod"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//递推过程")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%lld"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("second"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("以上之所以用long long，是因为随着n逐渐增大，会发现long long 可能都不能存放的下结果值了，所以还要取余的方式进行存处理结果，具体可参看第二题题述，需要注意的是，结算结果不能在计算出来再取余，因为在计算过程中就可能已经溢出值从而成为负值了，因此要在计算过程中不断取余。")])]),t._v(" "),n("hr"),t._v(" "),n("blockquote",[n("h2",{attrs:{id:"矩阵快速幂求解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#矩阵快速幂求解"}},[t._v("#")]),t._v(" 矩阵快速幂求解")]),t._v(" "),n("p",[t._v("随着n越来越大，达到long long 的最大值级别时，上述两种方法都无能为力了，因为使用简单递归会导致栈溢出，使用迭代会导致运行超时，这是显然会存在的问题，因此可通过矩阵快速幂的方法从时间和空间上两方面对其进行优化求解。")]),t._v(" "),n("hr"),t._v(" "),n("h3",{attrs:{id:"快速幂："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速幂："}},[t._v("#")]),t._v(" 快速幂：")]),t._v(" "),n("p",[t._v("所谓快速幂即为在求解a"),n("sup",[t._v("b")]),t._v("的过程中不使用最简单的直接累乘，而使用将指数转换为2的幂之和，即该指数的二进制各位，将该幂转换为底数的二的幂之积，从而一定程度减少相乘的过程，比如2"),n("sup",[t._v("3")]),t._v("，将3转换为二进制数11，即1X2"),n("sup",[t._v("1")]),t._v("+1X2"),n("sup",[t._v("0")]),t._v("，故2"),n("sup",[t._v("3")]),t._v("可转换为2"),n("sup",[t._v("2"),n("sup",[t._v("1")])]),t._v("X2"),n("sup",[t._v("2"),n("sup",[t._v("0")])]),t._v("，从而使其相乘的次数减少，这种减少随着幂数增大会越来越明显")]),t._v(" "),n("div",{staticClass:"language-c extra-class"},[n("pre",{pre:!0,attrs:{class:"language-c"}},[n("code",[n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("<math.h>")]),t._v(" ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalpow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v("base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickpow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过把原指数转换为2的幂之和即转换为二进制数，从而形成二叉树的相乘结构，使得时间复杂度为O(log2n) ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个底数幂为2的0次方即为1 ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index为0即为二进制数的各位都已运算完毕 ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v("base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//若该指数的二进制数末尾为1则累乘，否则不乘 ")]),t._v("\n\t\tbase"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v("base"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不断对底数累乘，且是2的指数次的累成，即为形成每个二进制位的指数")]),t._v("\n\t\tindex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//不断为指数右移1即除二，即算有多少位二进制数 ")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//index&1即为判断末尾二进制数是否为1，即为取余2的操作")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%f %d"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("quickpow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"矩阵快速幂"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#矩阵快速幂"}},[t._v("#")]),t._v(" 矩阵快速幂")]),t._v(" "),n("p",[t._v("所谓矩阵快速幂，即为将矩阵乘法应用于快速幂算法中，从而降低矩阵乘法的时间复杂度，将起始的1对应于一个方阵的单位矩阵，将乘应用于矩阵相乘的函数即可。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("typedef long long ll; \nll temp[N][N];  //存矩阵相乘结果的临时矩阵 \nll ans[N][N];  //返回矩阵快速幂结果的结果矩阵 \nint matMulti(ll mat1[][N],ll mat2[][N],int n)  //n为该方阵的行数或列数\n{\n\tint i,j,k;\n\tmemset(temp,0,sizeof temp);  //将temp数组中全部内存空间赋值为0\n\tfor(i=0;i<n;i++)\n\t{\n\t\tfor(j=0;j<n;j++)\n\t\t{\n\t\t\tfor(k=0;k<n;k++)  //矩阵乘法\n\t\t\t{\n\t\t\t\ttemp[i][j]+=(mat1[i][k]*mat2[k][j])%Mod;\n\t\t\t}\n\t\t\ttemp[i][j]%=Mod;\n\t\t}\n\t}\n\tfor(i=0;i<n;i++)  //需复制到mat1中以方便运算\n\t{  //在这里仅是使用普通的数组来简便过程，其实编写为C++的结构体更为通用，因为可用引用变量而不需此处的赋值和临时变量的存在\n\t\tfor(j=0;j<n;j++)\n\t\t{\n\t\t\tmat1[i][j]=temp[i][j];\n\t\t}\n\t}\n } \n //将矩阵的乘法应用于普通整数快速幂的函数中去从而形成矩阵快速幂 \nvoid matQuickPow(ll mat[][N],int m,ll n)  //n为该方阵的幂数，m为矩阵的行数或列数 \n{\n\tint i;\n\tmemset(ans,0,sizeof ans);\n\tfor(i=0;i<m;i++)\n\t\tans[i][i]=1;  //从单位矩阵开始累乘，第一次乘第一位二进制数对应的单位矩阵 \n\twhile(n)\n\t{\n\t\tif(n&1)  matMulti(ans,mat,m);\n\t\tmatMulti(mat,mat,m);\n\t\tn>>=1;\n\t}\t\n} \n")])])]),n("hr"),t._v(" "),n("h3",{attrs:{id:"利用矩阵快速幂求解斐波那契第n项过大取余"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用矩阵快速幂求解斐波那契第n项过大取余"}},[t._v("#")]),t._v(" 利用矩阵快速幂求解斐波那契第n项过大取余")]),t._v(" "),n("p",[t._v("该题对应于上述第三题")]),t._v(" "),n("p",[t._v("将递推关系式用矩阵相乘来表示即为："),n("img",{attrs:{src:"https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/472309f790529822697911f1d1ca7bcb0a46d4bd.jpg",alt:""}})]),t._v(" "),n("p",[t._v("求第n项即为：")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d000baa1cd11728be46ea410cefcc3cec3fd2c44.jpg",alt:""}})]),t._v(" "),n("p",[t._v("此时就把递推过程转换为了先求递推方阵的n-1次幂与初始矩阵相乘的过程")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('// 矩阵快速幂的模板 应用于解决斐波那契数列第n项过大取余后的结果 \n#include<stdio.h>\n#include<string.h>\n#define N 2\n#define Mod 998244353\ntypedef long long ll; \nll temp[N][N];  //存矩阵相乘结果的临时矩阵 \nll ans[N][N];  //返回矩阵快速幂结果的结果矩阵 \nint matMulti(ll mat1[][N],ll mat2[][N],int n)  //n为该方阵的行数或列数\n{\n\tint i,j,k;\n\tmemset(temp,0,sizeof temp);\n\tfor(i=0;i<n;i++)\n\t{\n\t\tfor(j=0;j<n;j++)\n\t\t{\n\t\t\tfor(k=0;k<n;k++)\n\t\t\t{\n\t\t\t\ttemp[i][j]+=(mat1[i][k]*mat2[k][j])%Mod;\n\t\t\t}\n\t\t\ttemp[i][j]%=Mod;\n\t\t}\n\t}\n\tfor(i=0;i<n;i++)\n\t{\n\t\tfor(j=0;j<n;j++)\n\t\t{\n\t\t\tmat1[i][j]=temp[i][j];\n\t\t}\n\t}\n } \n //将矩阵的乘法应用于普通整数快速幂的函数中去从而形成矩阵快速幂 \nvoid matQuickPow(ll mat[][N],int m,ll n)  //n为该方阵的幂数，m为矩阵的行数或列数 \n{\n\tint i;\n\tmemset(ans,0,sizeof ans);\n\tfor(i=0;i<m;i++)\n\t\tans[i][i]=1;  //从单位矩阵开始累乘，第一次乘第一位二进制数对应的单位矩阵 \n\twhile(n)\n\t{\n\t\tif(n&1)  matMulti(ans,mat,m);\n\t\tmatMulti(mat,mat,m);\n\t\tn>>=1;\n\t}\t\n} \nint main(void)  \n//矩阵快速幂对斐波那契额数列第n项过大整数取余结果的计算过程，从而避免递归调用太多次的过程，从而防止栈溢出 \n{\n\tll faboup[2][N]={{1,1},{1,0}};  //生成斐波那契数列递推关系式的幂矩阵,即该矩阵乘初始矩阵n-1次即得到fn\n\tll init[2][N]={{1},{0}},n;  //初始矩阵 \n\tscanf("%lld",&n);\n\tmatQuickPow(faboup,2,n-1);\n\tmatMulti(init,faboup,2);  //初始矩阵与幂矩阵相乘 \n\tprintf("%lld",ans[0][0]);\n\treturn 0;\n} \n\n')])])]),n("p",[t._v("此时就相对于上述迭代算法从时间复杂度上有了优化，空间也不会像简单递归那样导致段错误")])]),t._v(" "),n("hr"),t._v(" "),n("p",[t._v("​          -------------------------------------------------------------"),n("em",[n("strong",[t._v("The End")])]),t._v("----------------------------------------------------------------------")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://www.piedron.cn/images/bg8.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);