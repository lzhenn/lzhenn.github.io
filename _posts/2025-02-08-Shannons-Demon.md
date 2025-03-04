---
layout: post
title:  "香农的恶魔:你可以通过做多下跌的股票而获利么？"
categories: finance 
tags: thinking
author: LZN
---

“感谢克劳德·香农，这篇文章中的每一比特信息在互联网上的传输，都完全依赖于他的不朽贡献。”——香菇家的小书童


**一**

如果你熟悉通信、计算机科学等相关领域的学科，那么，你一定会知道克劳德·香农。

互联网上，每一比特数据的传输，都依赖于香农信息论作为理论基础。除此之外，现代计算机数字电路设计、密码学、博弈论、机器人学等领域，香农都留下了他重要的贡献。

目前大火的人工智能领域，神经网络模型的可靠训练，无论是损失函数设计，还是数据预处理和生成模型，都离不开香农提出的信息熵（Shannon Entropy）。

而我们今天，不想讨论香农这些光辉甚至传奇的贡献。我们试着像拿到MIT终身教职的香农一样，变得世俗些，聊聊钱。

![](https://i.imgur.com/x3Qdc0r.jpeg)

**二**

1956年，40岁的香农，正面临着幸福的烦恼：麻省理工学院向香农提出一份正式教职。如果香农接受了，那么他将被称作信息科学教授、数学教授，自1957年1月1日起拥有终身教职，年薪17000美元（这相当于2017年的143000美元）。

放到今天，请问每一位理工科的学术苦力们，谁不会把能去MIT任教的聘书，当作此生梦寐以求的荣耀，恨不得第一时间，横跨领英推特直到微信家长群，精心截图，细致裁剪，保证最高清的分辨率，甚至加个红框框，就这么明晃晃地亮出来，恨不得立刻刺瞎每一位观众的双眸？

令香农挣扎的是，他已经在贝尔实验室，渡过了十五年作为研究员和思考者，最高产的时光。它给予香农闻所未闻的研究自由，支持他从事最大胆的研究。贝尔实验室得知香农或许会去MIT任教，于是通过大幅提升香农的薪水来挽留他。

当然，这没有奏效。香农后来写道：“贝尔实验室当然有很多优势，可能其中最重要的是没有教学任务，因而人们有更多时间从事科学研究。”香农也承认，贝尔实验室提供的薪水要高于麻省理工学院：“虽然在我看来，这差别不大，但无论如何，我认为一些其他的问题更加重要。”

聪明的你，应该已经猜到了，加入MIT任教的香农，从此“世俗”了。香农的女儿回忆道：

>家中的大部分对话都是围绕股市进行的，一旦从麻省理工学院回家，我父母的大部分焦点都是股市的变化。他们很早便教我读《华尔街日报》、看股市。坐下来、打开报纸，然后他们便让我将报纸念出来，因为我的视力比他们好。这也是一种让孩子们参与的方式……最终，他们组装了一台小型个人计算机以便在白天记录开价，并在一天结束时再次检查，所以家里到处都是记载股票报价的打印纸。

哈，有意思。

![](https://i.imgur.com/AsYRT3k.png)

__香农传英文原著书名：A Mind At Play__

**三**

《香农传》一书，只有短短一章，是介绍香农在股票投资上的故事，作者似乎有意回避，讨论香农在如此世俗领域的兴趣及卓越成就。

尽管如此，书中有这样一段记载：

>当香农答应在麻省理工学院做一场关于股市的讲座时，讲座内容的火爆程度导致他被迫将讲座地点改到了学校最大的报告厅，他站在了著名的圆顶之下。即使这样，报告厅里仍旧只剩下站立的空间。香农提出了一种理论，它使投资者能够从正在下跌的股票中获利——通过不断交易，投资者可以在价格波动中受益。听众的第一个问题是：“香农博士，你会利用这一理论进行投资吗？”他回答道：“不会，手续费太高了。” 之后，香农似乎被听众对他讲座的关注震惊到了，每当这一话题出现在采访中，他便忍不住乐不可支：

>“我甚至做了一些关于股票和股市的理论研究，记载在我没有发表的论文里。每个人都想知道上面写了些什么！（香农大笑）真的很有趣。大约20年前，我在麻省理工学院做了一次演讲，概述了其中的数学原理，但从未将它作为论文发表，直到今天，人们还在问我这一话题。就在去年，当我们要离开布莱顿的时候，不止一个人走过来对我说：“你好，听说你在麻省理工学院讲过股市！”我很惊讶，竟然还有人记得！”

香农究竟在MIT最大的报告厅，讲了什么呢？

很不幸，我问遍Perplexity、Google和若干LLM，似乎报告的原始内容，已经不再可考。但可以确定的是，正是在这个报告中，香农提出了如何在长期不上涨（甚至下跌）的股票上，还能赚到钱的绝妙技巧。后来，人们称该神奇的投资方法为“香农的恶魔”。

![](https://i.imgur.com/AsYRT3k.png)

**四**

让我们试着来复现香农描述的这个神奇投资技巧。

假设有一支诡异的股票，今天的价格为p，第二天，这支股票的价格，有50%的可能性翻倍，变为2p；但也有50%的可能，不幸腰斩变为0.5p。如果给你初始本金N（本金足够大，可以买很多股），以及足够长的时间，你有办法在这支奇怪的股票上赚到钱吗？

听起来，似乎不太可能。如果这支股票，第二天的价格，要么翻倍，要么腰斩；我们第一天就用全部资金，买入这支股票的话，长期看，似乎只会不赔不赚。是这样吗？

我们不妨假设，N=10000元，第一天的时候，p=10元，我们以x轴为时间（天），y轴为股票价格，绘制这支股票价格100天的时间序列。

让DeepSeek给我写了个python程序，固定了随机种子数，模拟这支奇葩股票100天的价格时间序列。

它可能长成这样（A情况）：
![](https://i.imgur.com/Ip5rGAK.png)

但也可能不幸长成这样（B情况）：
![](https://i.imgur.com/ydy2dN7.png)

可以想象，如果这支股票的价格按上述情况波动，我们在第一天，就把10000元，全部投入到这支股票中的话，结局当然不是直觉上的不赔不赚，而是非常、非常难看嘛！在这个垃圾股上赚钱？做梦吧！

来，下面由天才中的天才香农同志，来告诉我们，如何在这支垃圾股上，赚到难以想象的财富。

很简单，第一天，我们把初始的10000元资金平分，一半去买这支垃圾股，另一半嘛，就拿着现金，完事。第二天呢，这支股票价格，要么翻倍了，而我们的净资产，变为15000元；要么不幸腰斩了，我们的净资产，只剩下7500元。而我们需要做的呢，依然是和第一天一模一样，让净资产的一半是现金，而另一半放股票里。也就是说，翻倍的情况下，就卖出一些，腰斩的情况下就再买点，每天结束的时候，都确保，让现金和股票，这两个杯子里的水，是平衡的，就可以了。

就可以了？这就能赚钱了？

是的。最神奇的地方来了：如此这般，把左右两个杯子里的水，倒来倒去，始终确保它们有相同的水位，两个杯子里的总水量，尽管有波动，但长期来看，却是【不断增加】的，而且更不可思议的是，以指数的形式增加！

![](https://i.imgur.com/vMLwvmr.png)

<center>《赌神数学家》中对香农的恶魔这一投资策略的介绍</center>

怎么可能嘛，这不可能！可不呢，如此好事，谁会信呢。

那咱们就用前面所示的垃圾股的表现情况，让DeepSeek给我们写个程序，模拟下资金曲线，试试看。

（小插曲：因DeepSeek-R1流量过大，无法为我提供服务，不得不使用DeepSeek-V3，最初扔给我的代码，现金和股票仓位的计算，是错误的，Debug了好几处才通过。）

采用香农的策略，与A情况的股价变化相对应的资金曲线，长这样：

![](https://i.imgur.com/PzriJNw.png)

更糟糕的B情况，长这样：

![](https://i.imgur.com/LsUKhcm.png)

这这这，这怎么可能嘛！A情况末期资产翻了上百倍，B情况尤其不可理喻，原始股价，已经从10元一股，最终跌到到了0.00122元一股。如果你知道，港股有“仙股”概念，100港仙等于1港元，这是个0.1仙股。

还是我们大陆人民币的计价体系博大精深，来来来，让我们复习一下人民币计价单位：元、角、分、厘。

1.22厘一股！-99.9999%的跌幅！但是末期资产，却依然翻了数倍！

神奇吧？这种看似“无中生有”的收益现象，被称为“香农的恶魔”。

不过，这究竟是为什么呢。

**五**

我们再复述一下这个过程：

两个杯子，左边的那个，很诡异，每天，其中的水量要么翻倍，要么少一半（股票仓位）；而右边的，不会变化（现金仓位）。如果希望，长期来看，两个杯子里总的水量上升，我们需要做的操作，却仅仅是在左边的杯子发生变化后，根据情况调整下，确保两个杯子中在下一轮变化前，新的水量，始终保持平衡。

下面，我们试着来解释这一策略，为何能够获得反直觉的长期收益。

如果我们能看懂高中数学里，涉及概率与数学期望的内容，那太好了，通过数学计算，可以很好解释这个现象。

假设第n天时，我们的总资产为N，那么第n+1天，我们的总资产可以表示为：

N<sub>n+1</sub>=0.5N+E(X)=0.5N+0.5N*(p*2+0.5*(1-p))

其中E(X)代表第n+1天，股票随机涨跌事件，对该股票仓位资产价格影响的数学期望值。我们知道p=0.5，因此可以求出：

N<sub>n+1</sub>=0.5N+0.625N=1.125N>N

此后每一天都如此，解释完毕。

![](https://i.imgur.com/TBiuZ1J.png)

**六**

可是可是，我们依然不能，从直觉上来理解这个事情，不是么？

我太喜欢[老喻的思考](https://mp.weixin.qq.com/s/FcNcm1PO0-3XkAugtGCk_Q)了。他说：“人是一种空间遍历性的动物，例如我们可以望见、感知到所有目光所及的空间；但人不是一种时间遍历性的动物。我们只能可怜地活在此刻。 ”

但人可以做心理时间旅行，我们可以将未来时间上的延展，平铺到思维空间中，来理解这个反直觉的策略。

每一个时刻，我们都有两杯水。

我们平展开，未来的N个时刻， 到现在这一时刻的空间中。于是，我们现在有了2N个水杯，左侧的N个水杯，代表股票仓位；右侧的N个水杯，现金仓位。

我们假设，右侧N个装现金的水杯中，都装了水量为c的现金，很显然，c大于0。

而左侧的N个水杯，要么是0.5c，要么是2c，如果N足够大的话，差不多各占一半。

现在，把所有的水量，全部加起来吧。清楚了么？

![](https://i.imgur.com/BpeTnC2.png)

**七**

再多讨论点，需要些数学。

这支诡异的股票，一半机会翻倍，一半机会腰斩，我们模拟这一随机游走的时间序列，却依然有各种奇怪的连续涨跌的结构，一如打开真实股票的K线图一般。神奇吧？

先不管像不像真实股票时间序列，现金的时间序列呢？不考虑无风险利息的话，是y=C这样一个常数。

如果我们知道皮尔森相关系数是什么，那么现金与股票价格时间序列的相关系数，当然是0。

如果我们能够找到一些，价格上彼此之间相关系数很低、甚至为负数的资产，构成一个资产组合包，并且按一定的时间间隔，对这个组合包因市场波动而产生的、净值比例上的不平衡，进行重新调整的话，那么这个神奇的组合包，可以提供不错收益，同时有着更低的波动性。

这里当然不对此做数学证明了。这种资产组合-再平衡的做法，完全与“香农的恶魔”基本思想一致；50-60年代，金融行业逐渐发展形成了所谓的现代资产组合理论。

在多说点，按这一理论做资产配置，我最喜欢的部分是，现金（包括存款、票据、短期国债等现金等价物）是这个资产包中，最有趣的成员，没有之一。

现金是什么？刚刚提过，y=C，平平无奇，毫无新意，却重剑无锋，大巧不工。

以目前的市场状况来看，是预期收益为4.3%，零波动的资产；是与一切非现金资产价格的时间序列，相关系数永远为0的神奇标的；是一张不需要花费任何显式权利金（依然是有机会成本的），就可以在任意日期行权的，非现金资产的看涨期权。

哦，这些金融诘屈聱牙的概念，都太繁琐刁钻了。

要我说的话，现金，是压舱石，是避风港，是能立刻上膛的干火药（dry powder），是金融投资宇宙中的，哈勃常数。

![](https://i.imgur.com/Slew6pm.png)

**八**

无论我们怎样高度评价香农在科学上的贡献，都不为过。这里引用《赌神数学家》一书的描述：

>康奈尔大学的托比·伯杰（Toby Berger）指出：“一个人独力开创了一个领域，提出了一切合理问题并一次性证实且回答了其中的大部分问题，这种情况在历史上实属罕见。”

>麻省理工的马文·明斯基（Marvin Minsky）曾说道：“自我见到香农的那一刻起，他便成了我心中科学家的范本。无论遇到什么问题，他都能欣然参与其中，并用一些令人惊讶的手段解决一切麻烦，可能是某种新的技术理念，抑或是某种实质性工具，总之问题总能迎刃而解。”

>在贝尔实验室和麻省理工学院，很多人认为香农的洞察力可以与爱因斯坦相媲美。也有一些人认为如此对比是不公平的，因为香农更胜一筹！爱因斯坦所做的研究对普通人的生活并无实际影响。而早在20世纪50年代，人们就已经切实感受到香农的研究成果所带来的好处。

>在我们当今的数字时代，人们也往往无法用语言来描述香农的成就。南加州大学的索罗门·戈洛姆（Solomon W.Golomb）曾明确表明：“这就像描述字母表的发明者对文学的影响力一样困难。”

等等，我还要继续引用，书中的一些内容：

>1986年，《巴伦周刊》（Barron’s）发布了一篇文章，列出了77位资金经理人的近期表现的排名。文章中虽然没有提到克劳德·香农，但他的表现仅次于3位专业人士。《巴伦周刊》所列的资金经理人大多数都来自规模多达100人的大公司。而香农是和他的妻子合作，还有一台破旧的苹果Ⅱ电脑。

>当沃伦·巴菲特在1965年收购伯克希尔–哈撒韦公司时，其交易价格为18美元/股。到了1995年，每股价值2.4万美元。在30年的时间里，这相当于27%的年收益率。从20世纪50年代到1986年，香农的股票投资组合收益率约为28%。

香农生前曾接受一次采访，讨论香农夫妇的股票投资情况，网上可以找到[视频](https://www.instagram.com/thelocal_network/reel/DFJ_SBBRCEY/)。

记者问道：“信息论（Information Theory）可以应用到股票投资么？”，香农诡秘一笑，意味深长地回答：“内幕消息(Inside Information)。”

**（完）**

![](https://i.imgur.com/CIyVtay.png)


