---
layout: post
title: "【Cheeky Pint】算力瓶颈、企业主权与智能体商务 | 纳德拉与 John Collison 对谈 | 中英全文（中）"
categories: podcast
tags: [thinking, AI]
author: LZN
description: "本篇是萨提亚·纳德拉（Satya Nadella）接受约翰·科里森（John Collison）的 Cheeky Pint 播客采访实录，原节目于2025年11月18日发布。纳德拉是微软首席执行官，自2014年起执掌微软；科里森是支付平台 Stripe 的联合创始人兼总裁。其采访中涉及 AI 投资与互联网泡沫的异同、芯片与电力等算力基础设施瓶颈、数据主权与企业隐性知识、Excel 的生命力，以及智能体如何改变商品发现、交易结算与客户服务等话题。初稿采用 Luna 机器翻译，经 DeepSeek 与 Qwen 交叉校审、中英混排，并附必要批注。全文分上、中、下三部分发出，本篇为中篇，以飨诸君。"
---

_书童按：本篇是萨提亚·纳德拉（Satya Nadella）接受约翰·科里森（John Collison）的 [Cheeky Pint 播客采访实录](https://cheekypint.transistor.fm/19)，原节目于2025年11月18日发布。纳德拉是微软首席执行官，自2014年起执掌微软；科里森是支付平台 Stripe 的联合创始人兼总裁。其采访中涉及 AI 投资与互联网泡沫的异同、芯片与电力等算力基础设施瓶颈、数据主权与企业隐性知识、Excel 的生命力，以及智能体如何改变商品发现、交易结算与客户服务等话题。初稿采用 Luna 机器翻译，经 DeepSeek 与 Qwen 交叉校审、中英混排，并附必要批注。全文分上、中、下三部分发出，本篇为中篇，以飨诸君。_

**本篇目录**

- [AI 热潮与互联网泡沫](#bubble)
- [瓶颈是芯片，还是能通电的机房？](#infrastructure)
- [数据主权与企业的隐性知识](#sovereignty)
- [Excel 为什么如此长寿？](#excel)
- [从云计算到 AI 的需求跃迁](#cloud)
- [商品发现、结账与智能体商务](#commerce)
- [购物与客服的边界正在消失](#convergence)

---

## AI 热潮与互联网泡沫 {#bubble}

*The AI boom and the dot-com bubble*

<!-- T060P01 -->
**约翰·科里森（00:27:03）** 嗯，我想聊聊这个，也想聊聊商务。不过先说说九十年代吧。现在大家都在拿眼下的情况和互联网泡沫作比较，几乎成了陈词滥调。我觉得这个比较其实挺合理，之所以会成为陈词滥调是有原因的：这是一场资本开支极其密集的建设，目标是打造一种新范式；它确实意义重大，但资本开支也着实惊人。你当时在微软，亲历了2000年前后的互联网泡沫。微软股价在九十年代末、两千年初见顶，我记得直到2016年左右才超过那个高点。1999年是什么感觉？尤其是，你当时知道自己身处泡沫之中吗？还是觉得“哦，这是新事物，这次情况不一样”？

**John Collison (00:27:03)** Well, I want to talk about that and I want to talk about commerce. But actually first, while we're still in the nineties, everyone is making comparisons to the dotcom bubble right now. It's almost a cliché, and I think it's actually a reasonable comparison. It is a cliché for a reason, which is it is a very CapEx intensive buildout for a new paradigm that is in fact a big deal, and yet there's an awful lot of CapEx. You were there at Microsoft during the 2000 dotcom bubble, and it really was, Microsoft's share price peaked in the late nineties, early 2000s, and then didn't surpass it until 2016, I want to say. What did it feel like in 1999? In particular, did you know you were in a bubble or was it like, “Oh, this is the new this time it's different.”

<!-- T061P01 -->
**纳德拉（00:27:52）** 这很有意思。是的，我记得我们大概在2000年成了市值最大的公司，超过了通用电气。我记得这件事。那时可以说我们是轻资产公司，对吧？我当时可能更像萨姆·奥尔特曼：花的是别人的钱。说实话，回头看，那时候撇开金融周期不谈，长期趋势是很清楚的，这件事注定会发生——因为当时商业模式也已经开始成形。对微软来说，当时最大的教训是：天啊，我们最先要做的事——得做浏览器，得做网络服务器，到处都得有互联网协议。

**Satya Nadella (00:27:52)** It's interesting. Yeah. In fact, I remember, I think we probably became the largest market cap company in 2000. We crossed GE. I remember that. Yeah, we were capital-light, let's say, right? I guess I was more like Sam at that time, which is somebody else's capital was being spent. It is, quite honestly, when I look back at it, at that time too, the financial cycle aside, it was clear. The secular trend was clear that this is going to—because even by then the business models were also emerging. Even for Microsoft, the biggest lesson at that time was, oh my god, even our first order of play—we’ve got to build a browser, we've got to build a web server, we've got to have internet protocols everywhere.

<!-- T061P02 -->
**纳德拉（00:27:52）** 我们在Office里也有FrontPage这样的网站制作工具。那些显而易见的事我们都做了，但我们意识到，只做显而易见的事不够。我们需要重塑自己正在做的事情，而且新的商业模式是什么，也已经很清楚。所以有意思的是，那一轮周期多少有些突然。我是说，它的起因无非是某种非理性繁荣之类的，但某种程度上，之后的修正把许多东西都冲走了。不过我会说，那些想法留了下来。所以我会由此想到现在发生的事。[^frontpage]

**Satya Nadella (00:27:52)** We had a website builder inside the office with a front page. We did all the obvious things, but we realized that just doing the obvious things didn't make sense. We needed to reinvent what we were doing, plus what are the new business models was clear. So in an interesting way, that cycle kind of came out of nowhere. I mean, it came out of what was just whatever irrational exuberance or what have you, but the correction in some sense washed away a bunch of stuff. But I would say the ideas persisted, right? And so to me, I think about what's happening here.

<!-- T061P03 -->
**纳德拉（00:27:52）** 我觉得有两点。首先，正在铺设的基础设施，其需求来得更直接了。如今不像当年那样，先铺好暗光纤，然后等某家互联网公司发展到十亿用户，再来使用它；那种孕育期已经短得多。

**Satya Nadella (00:27:52)** I mean there are two things. The infrastructure itself that's getting laid out, I think it's got a lot more immediate. It's not like even the gestation period of, okay, I built a dark fiber, which—and some internet company will first scale to a billion users and use.

<!-- T062P01 -->
**约翰·科里森（00:29:44）** 现在买这些东西的人队都排到门外了。

**John Collison (00:29:44)** There are lines out the door to buy this stuff.

<!-- T063P01 -->
**纳德拉（00:29:45）** 没错。所以坦白说，这一轮我们落后了。当时不是那样……如今我看我们的基础设施建设和需求，这正是人们说有泡沫时，我看着财报会想到的事：我上一次像现在这样，连供电就绪机房都严重短缺，是什么时候？[^powered-shells]

**Satya Nadella (00:29:45)** Exactly. And so this time around, quite frankly, we are behind. It was not that… When I look at our infrastructure build and demand today, that's the thing that when people say there's a bubble, when I look at my earnings, I can have… When was the last time I was so supply constrained on PowerShells?

<!-- T064P01 -->
**约翰·科里森（00:30:04）** 我以前没听过这种比较。别忘了，互联网泡沫说到底也是电信泡沫，是很大程度上的光纤泡沫。当年铺的是暗光纤，名字就说明了一切：它是暗的，还没有启用。而现在的情况和暗光纤恰恰相反。

**John Collison (00:30:04)** I haven't heard that comparison before, which is, let's not forget that the dotcom bubble, which again was a telecoms bubble, it was a fiber bubble in a big way. It was dark fiber. The clue is in the name. It was dark. It was not lit up yet. And this is anything but dark fiber.

<!-- T065P01 -->
**纳德拉（00:30:20）** 是啊，现在不会有人坐在那里说：“嘿，我把GPU都接好了，却没人用。”我没有利用率方面的问题。我可能还有电能利用效率（PUE）方面的问题。我希望利用率更高，主要是因为内存瓶颈之类的原因。但我手上的东西全都供不应求。事实上，我的问题是得增加供给；至于能不能恰到好处地匹配需求？没人做得到。没有哪套供应链能让供需完美匹配。不过这一次的建设周期，考虑到漫长的交付周期……

**Satya Nadella (00:30:20)** Yeah, it's not like any one of us is sitting there and saying, “Hey, I have all the GPUs wired up and nobody's using them.” I don't have a utilization problem. I may have a PUE. I want higher utilization, mostly because it's memory bottleneck or what have you. But there is not a thing that I have that's not sold out. In fact, my problem is, I got to bring more supply and in that will we perfectly get it? No one does. There's no supply chain operation that perfectly matches demand and supply. But this time around the buildout, given the long lead.

<!-- T065P02 -->
**纳德拉（00:30:20）** 比如，我们会仔细研究的一件事，是怎么向华尔街说明我们的资本开支。你得记住，有些资产能用二十年，有些东西的寿命只有四五年。对这些东西，做决策的方式也得不同。空着一座尚未配齐供电等设施的机房，并不是什么大不了的事。对，就像一座园区里有五栋楼一样，这不会成为微软资产负债表上的问题。真正的问题会是：没有已经具备供电条件、随时可以启用的机房。

**Satya Nadella (00:30:20)** For example, one of the things we study a lot is even when we talk about our capital, we try to describe it even to the Street. Hey, you got to remember some of these assets are 20 years, some of these things are four years or five years. And in fact, you kind of have to make the decisions on those things differently. Having a cold shell that's unused is nothing. Yeah, it's kind of like having a campus with five buildings. It's not going to be a problem on Microsoft's balance sheet. What our real problem would be, hey, not having warm shells that we can light up.

## 瓶颈是芯片，还是能通电的机房？ {#infrastructure}

*Chips, power and datacenter capacity*

<!-- T066P01 -->
**约翰·科里森（00:31:35）** 如今瓶颈在哪里？是电工、机房，还是涡轮机？

**John Collison (00:31:35)** Where is the bottleneck these days? Is it electricians? Is it shells? Is it turbines?

<!-- T067P01 -->
**纳德拉（00:31:42）** 是啊。眼下的瓶颈，就是能否拿出一批已经接通电力的机房，对吧？如果没有足够多的机房接好电，我就没法把机架搬进去，再把它们部署成可运行的设施。这是交付周期很长的环节：你得及时拿到土地许可、电力许可，把所有事情办妥。还有地点的问题。所以我觉得有一点常被忽略：当然，我们在美国建了很多，但我们必须在全球各地建设，而且各地都有数据监管规定。

**Satya Nadella (00:31:42)** Yeah. The product that is the bottleneck is just a bunch of powered-up shells, right? So if I don't have enough shells that are powered that I can then roll in my racks and then break them operational. And that's the long lead part, which is you kind of have to have the land permits, the power permits, get all that done in time. And by the way, location. So I think one of the things that's glossed over, of course stateside, in the United States, we are building a lot but we have to build all over the world and there are data regulations.

<!-- T067P02 -->
**纳德拉（00:31:42）** 事实上，越来越多的人非常重视主权问题。因此，我们必须确保自己的基础设施资源池是全球化的，能够应对各种工作负载，从训练、数据生成（DataGen）到推理。这是个涉及多个变量的复杂问题。

**Satya Nadella (00:31:42)** In fact, more every day people care about sovereignty in a major, major way. And so therefore for us, we have to make sure that the fleet is a global fleet, a fleet that can deal with all types of workloads training to DataGen, to inference. And so it's a complex, multi-variable thing.

## 数据主权与企业的隐性知识 {#sovereignty}

*Sovereignty and the tacit knowledge of a firm*

<!-- T068P01 -->
**约翰·科里森（00:32:42）** 谁应该在意数据主权？爱尔兰有不少数据中心，但并没有特别执着于数据只能留在爱尔兰。我也不觉得它非得对此特别执着。不过，你们是照各国的要求办，还是会建议他们要不要追求数据主权，以及哪些人应该追求？

**John Collison (00:32:42)** Who should care about data sovereignty? Where Ireland has a bunch of data centers but is not particularly wound up on the idea that data should only be in Ireland. And I don't think it should be super wound up about that fact. But I guess do you guys just go with whatever the country wants or do you try to advise on whether you should want data sovereignty or not and who should?

<!-- T069P01 -->
**纳德拉（00:33:04）** 我觉得这显然是几乎每个国家、每位政策制定者都很关心的议题，而且确实有正当理由。在人工智能时代，我对主权的思考也有些不同了。我的意思是，主权最终关乎的是企业的未来，对吧？如果追问科斯定理的核心，就会发现：哇，等等，如果模型无所不知，那我为什么还需要……按理说，我得有某种隐性知识，才能让组织内部的交易成本低于在市场上进行交易的成本。这些问题很烧脑。[^coase]

**Satya Nadella (00:33:04)** Yeah, so I think it's obviously a topic that's top of mind for pretty much every country, every policymaker, and they care. And there's obviously real legitimate reasons. The thing that I'd say in the AI age, I'm now thinking a little bit differently even about sovereignty. What I mean by that is the ultimate sovereignty question is more of what's the future of a corporation, right? I mean, if you sort of start to go to the core of the Coase theorem, you say, “Wow, what the heck? If the model is the thing that knows everything, why do I even… I'm supposed to have some tacit knowledge that makes the transactional costs inside my organization lower than just being in the marketplace.” So they're a mind bender.

<!-- T069P02 -->
**纳德拉（00:33:04）** 所以我有一种想法：真正重要的主权，是在模型不断学习、并产生规模报酬递增的时代，公司自身的主权。于是我越来越觉得，公司得有自己的智能层——它可以是模型的脚手架，也可以是嵌入模型的权重。这样用的就不是别人的基础模型。关键在于，你对自己的基础模型有没有主权？所以我的新想法是，未来的公司会拥有自己的基础模型，捕捉那些隐性知识；这些知识能让组织内部积累和传播知识的交易成本更低、速度更快。关于主权，我就讲这么一大段。

**Satya Nadella (00:33:04)** So in fact, one of the ways I think is, the sovereignty that matters is your company's sovereignty in an age where there are continual learning increasing returns to a model. So I'm increasingly thinking that hey, the company's ability to have that intelligence layer that's a scaffold or even weights embedded in the model. So it's not somebody else's foundation model. It's about do you have sovereignty in your foundation model? So my new concept is the future of a company is that company has its own foundation model that captures essentially the tacit knowledge that makes the transactional costs of how knowledge gets accrued and diffused inside the organization faster. So that's sort of a long speech on sovereignty.

<!-- T070P01 -->
**约翰·科里森（00:34:35）** 嗯，这里有两个方向……这想法很有意思。人工智能或许会改变公司的性质。你说，有些公司本来就是一组知识产权，对吧？比如迪士尼，或者我们请来过的大卫·里克斯所在的礼来，在很大程度上就是一家知识产权公司。有些公司本来就是知识产权的集合，只是现在这些知识产权散落在邮件、文件里，最重要的是在人们的脑子里；也许随着时间推移，它们会集中到一个模型里。我原本以为你要说的是：人们常指出，现在的公司仍然沿袭制造业公司的模式，比如阿尔弗雷德·斯隆那一套，尽管如今我们做的是知识工作，而不是在一条小型生产线上干活。

**John Collison (00:34:35)** Well, there's two versions… That's very interesting. The idea that AI maybe just changes the nature of companies, and you are saying that if some companies are already collections of IP, right? Disney or we had Dave Ricks from Eli Lilly here, that is an IP company in a big way. And some companies are already collections of IP, but right now that IP is in all the emails and documents and people's heads most importantly, whereas maybe the IP could be in a single model over time. Where I thought you were going to go with that is just maybe the—people point out a lot that current companies are modeled after manufacturing companies and Alfred Sloan type stuff, despite the fact that we're doing knowledge work today and not running a little manufacturing line.

<!-- T070P02 -->
**约翰·科里森（00:34:35）** 公司会不会变得更奇特？会不会出现那种著名的、只有极少数员工却价值十亿美元的公司？会不会有更多高度分布式的互联网公司？会不会出现一些去中心化自治组织？我以为你要说的是这个方向。

**John Collison (00:34:35)** And do you get more just weird-looking companies? Do you get the famous really tiny billion-dollar company? Do you get more highly distributed internet companies? Do you get some DAOs? I thought that's where you're going to go with that.

<!-- T071P01 -->
**纳德拉（00:35:43）** 我觉得这些也都有可能。组织结构本身可能会变化，像那种几个人、甚至一个人就能创办的十亿美元公司，也许会出现；去中心化自治组织也可能出现。但至少对我来说，有意思的问题是：隐性知识存在于哪里？显然，它存在于人的头脑里，那是不断积累、叠加的经典诀窍。我认为，它也会以权重的形式存在并积累于某个低秩适配（LoRA）层里，而且这个层是你们公司独有的。我觉得，未来礼来、微软或 Stripe 的新知识产权，除了员工和我们拥有的其他资料之外，我们也会说：“哦，它们还存在于某种嵌入表示里。”

**Satya Nadella (00:35:43)** I think that those are also possibilities. So the structure itself could change and it's going to be more possible for whatever the few, the one-person billion dollar company, what have you, maybe could happen or DAOs could happen. But the interesting question, at least for me, is where does tacit knowledge reside? Clearly it resides in people's heads and it's the classic know-how that accrues and compounds. I think it'll also reside and compound as weights in some LoRa layer that is unique to your company. I feel like the new intellectual property at Eli Lilly or at Microsoft or at Stripe at some point can be also, besides all the humans, besides all the other artifacts we have, I think we'll also say, “Oh, they are in some embedding.”

<!-- T072P01 -->
**约翰·科里森（00:36:42）** 对，明白。你这么说让我想到 Stripe，这家公司挺有意思。它本身并没有很强的网络效应。我们刚开始做 Stripe 时，它很大程度上是一种单用户 API 体验。我们让大家很容易开始用 Stripe，但最终你根本不会知道还有谁在用它。随着规模扩大，我们建立起了一个信任网络：由于我们见过大多数互联网用户，因此能阻止欺诈。我们知道正常和异常的情况是什么样的；甚至只因为没见过你，就会觉得有点可疑，因为大多数人我们都见过。

**John Collison (00:36:42)** Yes, okay. It's funny you say this because Stripe is interesting. It does not really have strong network effects as a company. When we started building up Stripe, it was very much a single-player API experience. And we make it easy to start using Stripe, but ultimately you'd never know that anyone else was using Stripe. What's happened as we've scaled up is we now just have a trust network where we can prevent fraud by virtue of the fact that we've seen most internet users. And so we have a knowledge for what good and bad looks like, and even the fact that we haven't seen you before is inherently a little bit suspicious because we've seen most people.

<!-- T072P02 -->
**约翰·科里森（00:36:42）** 于是它成了一个声誉网络，有点像谷歌的 reCAPTCHA，后者后来也成了声誉网络。总之，我们现在正在训练一个支付基础模型，用上 Stripe 网络里的所有数据。这样一来，模型的规模和能力都更强，也能把这些因素考虑进去……总之，我们正在做的，正是你所说的那件事。

**John Collison (00:36:42)** And so it becomes a reputation network, kind of like reCAPTCHA for Google, similarly became a reputation network. Anyway, what we're now doing is training a payments foundation model where we're using all the data that we have in the Stripe network and you have a much larger, more capable model taking into account… So anyway, we are trying to do exactly what you're saying.

<!-- T073P01 -->
**纳德拉（00:37:40）** 所以我们所有人都面临一个问题：怎样防止这些知识泄漏到基础模型里？模型是不是只差一步就能获得这项能力，因为它学会了如何识别欺诈？还是说其中还涉及某种多维结构？我认为这是关键问题。我觉得有两种观点。一种观点认为模型会吞噬整个世界。你很容易就会想：没错，说到底万事万物都是模式，我把所有模式都学会就行了，诸如此类。

**Satya Nadella (00:37:40)** And so one of the questions for all of us is how do you protect that from essentially leaking over to the base foundation model? Is it just like one capability hop away because it learned how to even do fraud detection? Is it just some other multidimensional, or not? And that I think is the key question to me. I think there are two arguments. One argument is that argument that the models are going to eat the world. You can kind of easily, oh yeah, after all, everything is just a pattern and I'll learn it all and what have you.

<!-- T073P02 -->
**纳德拉（00:37:40）** 不过，正如你谈到 Stripe 时说的，它可以调用多个模型，构建一个不可思议的、以模型为核心的欺诈检测层。除此之外，还有一套完全属于 Stripe 的记忆、工具使用能力和行动空间。对我来说，这就是企业的未来，无论它是制药公司、支付公司还是软件公司。我认为这正是我们所有人正在做、也将继续做的事。对我来说，这就是主权。

**Satya Nadella (00:37:40)** But then the thing though is, to your point about Stripe, it can take multiple models, build this unbelievable, sort of, I'll call it fraud detection layer that is model-forward. And then there is this memory and tools use and action space that's all unique to Stripe. That to me is the future of a corporation, whether it's a pharma company, a payments company, or a software company. That I think is the work that we all are doing and will do. And I think that to me that is sovereignty.

## Excel 为什么如此长寿？ {#excel}

*Why Excel endures*

<!-- T074P01 -->
**约翰·科里森（00:39:13）** 我还在想我们刚才聊到的、面向非软件工程师的集成开发环境。我觉得未来十年，可能会出现一款面向财务人员的产品；回头看，它的界面显然是正确的，但当初电子表格作为一种界面，也是突然冒出来的东西。当时可能也让人觉得它凭空出现。我对此印象很深。说到电子表格，对一些软件公司来说，挑战 Excel 就像是成人礼；可 Excel 似乎四十年来一直做得很好。它为什么这么经久不衰？

**John Collison (00:39:13)** I'm still thinking about this discussion we're having about the IDE for people who aren't software engineers. And again, I feel like there could be a product in the next 10 years for finance people, where in hindsight it is obviously the correct UI, but just the spreadsheet, it kind of came out of nowhere as a UI. It may feel like it came out of nowhere at that time. I'm really struck by that. Speaking of the spreadsheet, it's like a rite of passage for certain software companies to try to take on Excel and it seems to be doing pretty well 40 years in, or what have you. Why is it so durable?

<!-- T075P01 -->
**纳德拉（00:39:50）** 是啊，真不可思议。某种程度上说，表格这种形式……我觉得关键在于列表和表格的力量，以及软件的可塑性，这两者结合得恰到好处。这就是为什么那块闪烁的空白画布总会存在。我们或许会给它加上许多功能。电子表格也一样。还有一点是，电子表格是图灵完备的，我们没有充分认识到它有多强大。你可以用它做出……

**Satya Nadella (00:39:50)** Yeah, it's unbelievable, right? I mean, at some level the idea that a tabular form… I mean I think it's the power of lists and tables. It's just a perfect—and the malleability of software that was, I think, the combination. That's why a blinking canvas, it's always going to be there. We may add lots of bells and whistles to it. And the same thing with spreadsheets. The other thing about the spreadsheet is it's Turing complete. We don't give it enough credit. It's like I can make it—

<!-- T076P01 -->
**约翰·科里森（00:40:32）** 我觉得它是全世界最容易上手的编程环境。

**John Collison (00:40:32)** I think it is the world's most approachable programming environment.

<!-- T077P01 -->
**纳德拉（00:40:35）** 完全同意。你甚至不会觉得自己在编程，就已经开始用了。这也是它另一个妙处。如今我们还是把人工智能弄得神秘兮兮的。你我之前聊过，天啊，我们需要变革管理。可新一代电子表格出现时，没人谈什么变革管理，大家直接就用起来了。还有件事：有人跟我说，我当时在和忠利集团（Generali）的首席执行官见面。他是在传真机时代加入 Generali 的，当时管理着公司所有保险代理人。他对我说：“我还记得电子邮件和 Excel 刚出现的那一天。整套工作流程彻底被颠覆了，随后从根本上逐步演变、改变。”所以我觉得，这正是你刚才说的：这个时代会出现哪些东西，让我们从根本上重新审视工作本身、工作产物和工作流程？

**Satya Nadella (00:40:35)** One hundred percent. I mean it's like… And you get into it without even thinking you're programming. And that is the other beauty, which is AI still, we’ve mystified it. You and I talked about, oh my God, we need change management. When the next spreadsheets came, nobody talked about change management. They were just using it. And that to me is the other thing, which is—somebody was describing to me, I was meeting the CEO of Generali. He joined Generali during the fax machine era, and he was managing all their insurance agents. And he said to me, “Look, I still remember the day when emails showed up, Excels showed up, and the entire workflow of how things happen completely were upended and it evolved and changed ground up.” So to me, I think that's to your point, what are those things of this era that we'll discover that'll allow the ground-up relitigation of the work, the work artifact and the workflow.

## 从云计算到 AI 的需求跃迁 {#cloud}

*From cloud growth to the AI wave*

<!-- T078P01 -->
**约翰·科里森（00:41:34）** 现在做软件真是个有意思的时代。跟五年或十年前相比，确实有意思多了，你一定也有这种感觉。

**John Collison (00:41:34)** It's such an interesting time to be in software. I mean compared to, you must feel this, it's just a much more interesting time now than five or 10 years ago.

<!-- T079P01 -->
**纳德拉（00:41:42）** 确实很有意思。当年我们满口都是“云、云、云”。如果你问我，2019年最热门的是什么，我会说我们做出了一款很棒的支持多个区域、甚至让用户不必操心区域划分的多格式数据库 Cosmos DB。它基本上是个 JSON 数据库，里面也有 SQL，什么都能装。我们当时谈的就是这种不用操心区域划分的能力，诸如此类。接着疫情来了，云计算又突然加速。谢天谢地，Teams 就此成为了热门产品。这是当时令人兴奋的事。没想到疫情结束后，大家会想：“哦，我以为我们会进入某种稳定状态。”我记得当时还预测过云的需求。我们在想该怎么办：疫情期间建得太多了。之后有整整八个月，我们都在想：“哎，结果现在又来了这么一波。”

**Satya Nadella (00:41:42)** It is interesting, we were like “Cloud, cloud, cloud.” And if you had to ask me what is the hottest thing in 2019, we had built this fantastic multi-region or region-less database that was multi-format. Cosmos DB, which was like we had basically a JSONdatabase. We had a SQL in there. It was the everything database. And we were thinking, it was region less and blah, blah, blah. And then the pandemic happened, and then the cloud went into another hyper drive. I mean, Teams, thank God, just became the thing. So that was the exciting thing, and lo and behold, you come out of it and you sort of say, “Oh, I thought after the pandemic we're going to get to some stable state.” In fact, I remember a forecast of the cloud. We were saying, what do we do? We overbuilt during the pandemic and there was a good eight months where we were like, “Oh, and then this thing now has come too.”

<!-- T080P01 -->
**约翰·科里森（00:42:51）** Stripe 有不少图表能看出这种变化，不知道微软当时是不是也这样。很明显，2020年3月突然跃上了一个台阶，对吧？电商活动大幅增加，我们也看到线上商家创建的速度变快。原本只做线下生意的商家说：“哦，我们得转到线上销售。”这种水平就一直维持在高位；显然之后还继续增长了。人们回到实体办公室后，相关活动也没有相应回落。就像是突然跳上一个台阶，然后一直留在更高的水平。我敢肯定 Azure 也看到了类似情况。

**John Collison (00:42:51)** To, there's a lot of charts of the shape at Stripe. I don't know if it was this way at Microsoft where obviously March 2020, you saw this discontinuity, right? Much more e-commerce activity happening, and we saw the rate of online business creation. You had businesses that were offline only saying, “Oh, we’ve got to switch to selling online.” And it just stayed at that elevated level forever, obviously since it's gone up from there. But there was no matching decline as people went back into physical offices and things like that. It was just a step change and then it stayed at the elevated level forever. I'm sure you saw similar things in Azure.

<!-- T081P01 -->
**纳德拉（00:43:25）** 完全是这样。是啊，需求从来没降下来。

**Satya Nadella (00:43:25)** One hundred percent, yeah. It never came down.

## 商品发现、结账与智能体商务 {#commerce}

*Discovery, checkout and agentic commerce*

<!-- T082P01 -->
**约翰·科里森（00:43:26）** 既然我们在聊商务，那不妨也聊聊我们正在合作做的事。

**John Collison (00:43:26)** We're talking about commerce, so we might as well talk about what we’re working on together.

<!-- T083P01 -->
**纳德拉（00:43:30）** 我们对此非常兴奋。怎样搭建对商家友好的交易基础设施？怎样搭建对消费者友好的交易基础设施？两者能不能完美衔接？这一直是大家在思考的问题。对话式商务也是人们谈了很久的概念。现在有了你们和其他团队的工作，我们终于可以把商家和终端用户连接起来，提供智能体式的体验了。现在还处于早期阶段，体验必须做得得体，也必须赢得用户的信任。所以我非常期待。

**Satya Nadella (00:43:30)** We are very excited about it. I think the idea that has always been there, which is what's the best way for a merchant-friendly set of rails and what is a customer-friendly set of rails? Is there a perfect matching? A conversational sort of commerce is a thing that people have talked about. And now I think with the work you all have done and others have done, we kind of can really bring the merchant and the end user and have this agentic sort of experience. So it's early days, it has to be tastefully done. It has to be done in a way that you earn the user's trust. And so I'm very excited about it.

<!-- T084P01 -->
**约翰·科里森（00:44:12）** 是的，我们看到这里有两点不同。过去有人尝试过在 Twitter、Instagram 等平台上买东西。但现在不一样：第一，有了人工智能，商家的接入要容易得多，比过去尝试这类做法时省力得多。第二，我觉得这种体验对终端用户非常有吸引力。我们从最早的一批客户那里已经看到初步数据。几周前我们也在 ChatGPT 里上线了。这条路肯定行得通。数据已经说明这一点，因为消费者用起来轻松多了。

**John Collison (00:44:12)** Yeah, we see two differences here because there have been previous attempts at buying on Twitter, buying on Instagram and these kinds of things. But what's different here is one, you have AI. So all the integrations for the merchant are much easier. It's much less of a lift than previous times when things like this have been tried. But then secondly, I just think the experience is so compelling as an end user. We're already seeing this in the early data from the super early customers that we have. We launched a few weeks back in ChatGPT as well, that it has to work. And again, the data is already bearing that out because it's so much easier as an end customer.

<!-- T085P01 -->
**纳德拉（00:44:56）** 是啊，我一直在聊这件事。我是个板球迷，总是在找各种东西。问题是，不管用亚马逊、沃尔玛还是别的平台，网站上的搜索体验有时都很费劲。有意思的是，这些聊天式体验一开始就很出色。而且它们会链接回商品目录——目录仍然是核心，但如果我能把结账和商品目录结合起来，我觉得这就是实现无缝体验的关键……

**Satya Nadella (00:44:56)** Yeah, I've been talking about it. I'm a bit of a cricket nut, so I am always searching for something. And the problem is whether it's Amazon or Walmart or what have you, the search experience sometimes is hard on the site. So interestingly enough, these chat experiences first are fantastic. And the fact that they point back to the catalog, I mean the catalog is still king, but now if I can marry the checkout and the catalog, and that to me is where I think the seamlessness—

<!-- T086P01 -->
**约翰·科里森（00:45:25）** 你有没有类似的体验？我发现有些情况下，用人工智能应用研究商品，比基于关键词的搜索好太多了。真不可思议，直到去年我们居然还觉得，用关键词搜索来找东西是可以接受的。

**John Collison (00:45:25)** Do you have any experiences, I've found versions of this. I'm curious if you've had experiences where for product research using an AI app is so much better than keyword-based search. It's amazing that up to last year we thought keyword-based search was an acceptable way to hunt for anything.

<!-- T087P01 -->
**纳德拉（00:45:44）** 是啊。对商家来说，归根结底，这就像是为你量身打造了一份商品目录。它给出的回答不像搜索结果页那样罗列一堆链接。

**Satya Nadella (00:45:44)** Yeah. And the seller, the bottom line is, it's kind of like it is creating a custom catalog for you. I mean, the response is not like a SERP.

<!-- T088P01 -->
**约翰·科里森（00:45:54）** 我们家买家具时会说：“这个位置有这么大一块空间。你觉得放什么家具合适？要尺寸符合这里的条件，摆在这里也好看。”可我们以前居然做不到这些，真不可思议。你懂我的意思吧？现在可以定制得这么细致，还能描述整体感觉和审美，比如“我想找稍微高档一点的，但别太奢华”。以前竟然做不到这一点，真不可思议……

**John Collison (00:45:54)** We were buying furniture in our house and we were just saying, “Oh yeah, we have this much space available in this spot. What do you think is a good piece that would look good in that spot that meets these dimensions and things like that.” But it's crazy that we weren't doing that previously. You know what I mean? And so all this customization, being able to give vibes, general aesthetics, I'm looking for something slightly higher-end, but not super fancy. It's crazy that you weren't able to—

<!-- T089P01 -->
**纳德拉（00:46:23）** 顺便说一句，还有件事也特别不可思议。我妻子是建筑师，她有个 Copilot 笔记本，里面存着很多建筑图片之类的资料。你可以问它一些需要较高层次推理的问题，比如“这里应该放什么”。它能看懂建筑草图和图纸，再结合公开的家具目录，把两者放在一起分析。这类能力真是神奇。

**Satya Nadella (00:46:23)** By the way, that's just the other crazy, crazy thing. My wife's an architect, and so she sort of has this Copilot notebook in which she has all these architectural pictures and so on. And you can ask it quite high-level reasoning questions on what I should put in there. So it's able to take an architectural sketch, a drawing, and then take a public catalog of furniture and put those things together and reason about it. And that type of stuff is pretty magical.

<!-- T090P01 -->
**约翰·科里森（00:46:51）** 在 Stripe，我们对 AI 改变商务这件事深信不疑，也认为会有大量交易转移到这里。我们和商家的交流也印证了这一点。我是这样看的：如果你要开放式地探索——比如“我想为某个场合买套衣服，但还不确定具体想要什么”——人工智能会比现在的体验好得多。现在你得逐一点开搜索结果之类的内容。另一方面，如果你要精准搜索，比如找一件符合特定要求的东西，或者给自行车买某个零件。

**John Collison (00:46:51)** Our view on this, we are as really AI-pilled when it comes to commerce at Stripe, and we think a huge amount will move here. And all the merchant conversations we're having are bearing that out. And the way I think about it is that if you are doing open-ended discovery: “Oh, I'm interested in an outfit to buy for this occasion. I don’t know exactly what I want.” AI will be so much better at helping you with that than the current experiences where you're clicking through a list of search results or something like that, and then if you're doing targeted search where I'm looking for a specific object that meets these needs, I want this component for my bike.

<!-- T090P02 -->
**约翰·科里森（00:46:51）** 在这种情况下，你也可以用人工智能准确描述搜索条件，效果会好得多。你会想：等等，如果无方向的探索都被涵盖了，高度明确的搜索也被涵盖了，那不就是互联网上所有的商务活动吗？我觉得唯一剩下的，是那些定期回购的日用品，比如“我得再订些宠物粮”。这类需求受到的影响可能最小。当然，最初你还是得找到适合的宠物粮品牌。不过，大致上这就是我们的想法。Etsy 是非常棒的首批合作伙伴，因为它的商品都是定制的，对吧？

**John Collison (00:46:51)** Then also being able to specify with AI the exact parameters of the search you have will be much better. You're like, “Wait, if you're taking all of the undirected discovery and if you're also taking all of the highly directed search, isn't that just all commerce that happens on the internet?” I think the only thing that's left that's out of that is like recurring staples. I need to order more pet food. That feels to me like the least affected, though of course, you have to discover the brand of pet food at some point originally, but yeah, that's kind how we're thinking about it and again, Etsy has been an awesome first partner because all the products are custom, right?

<!-- T091P01 -->
**纳德拉（00:48:06）** 是啊，我觉得很有道理。发现商品这一环，Instagram 等平台显然做得很好。所以问题是，发现商品的那一层会是什么？其中一个显而易见的方向，是个性化的商品发现和灵感推荐。Pinterest 做的事就很有意思；把类似的发现层和对话界面结合起来，或许很有潜力。

**Satya Nadella (00:48:06)** Yeah, that makes a ton of sense to me. I mean the discovery part, which obviously people like Instagram and others have done a great job. So the question is, what's the discovery layer? That's one of the obviously personalized discovery layer inspiration for product. What Pinterest has done is interesting, so some layer like that married with this conversational interface.

<!-- T092P01 -->
**约翰·科里森（00:48:32）** 当然，这会是水涨船高、大家都受益的事。我们正在做的一部分工作，是让商家的商品目录、库存等信息能被远程发现，也能远程购买；消费者不一定非得走完商家网站上的整套流程，可以直接在 Copilot 这种挥挥魔杖般的体验里完成。从最基础的技术层面来说，这就是我们在做、在打通的东西。我觉得接下来令人兴奋的是，Pinterest 多年前——可能十年前——就尝试过电商。

**John Collison (00:48:32)** Well, and of course it'll be a rising tide that lifts all boats, where part of what we're doing with this is making merchant's product catalogs remotely discoverable and inventory and everything like that. And then remotely purchasable, where you don't necessarily have to go through the whole flow on their site and everything like that. You can just do it inside the magic wand Copilot experience. And so that is at the raw nuts and bolts level, what we are doing and what we're wiring up. I think then what's exciting is that again, Pinterest played with commerce quite a few years back, maybe 10 years back.

<!-- T092P02 -->
**约翰·科里森（00:48:32）** 它当时没能发展成很大的业务。但如今，如果所有商家都通过这个协议开放自己的商品目录，那么 Pinterest、Instagram 和 Twitter 这样的社交平台就能再试一次这种商务体验，因为商家对它的支持和采用会比上次多得多。

**John Collison (00:48:32)** It hasn't taken off as a huge thing, but now if you have all the merchants who are offering their product catalogs as part of this protocol, then social sites like Pinterest and Instagram and Twitter get another run at this kind of commerce experience because you've way more merchant support and adoption for it than you had the first time around.

<!-- T093P01 -->
**纳德拉（00:49:25）** 我们有个名为 NLWeb 的项目，想做的是让每个商家的每份商品目录都有一个网站式的 NLWeb 界面，让智能体能够与之对话、查询，并进行所谓的深度搜索。因为如今最大的挑战之一，是商品目录的质量，以及能否用推理能力进行深度搜索。如果能解决这个问题，就像你说的，每件商品都能找到对应的搜索请求。[^nlweb]

**Satya Nadella (00:49:25)** And we have a project called the NLWeb, and the idea to really take every catalog of every merchant and give it essentially a website, an NLWeb interface that then an agent can talk to, to be able to interrogate and get the deep search, so to speak. Because today in some sense, one of the biggest challenges is the quality of the catalog and the ability to use reasoning to do a deep search. If you can solve that, then to your point, every product will find its query.

<!-- T094P01 -->
**约翰·科里森（00:49:59）** 是的，我们正在打造智能体商务平台，其中包括一些开源协议，比如我们的智能体商务协议。当然，人们也在使用 Stripe 的常规产品。从支付的角度看，这件事尤其棘手：我们希望人工智能应用能代表用户，在网上各种网站上付款，同时又不必把用户的所有支付信息分享到整个网络。这是个很有意思的支付问题。总之，我们希望打造智能体商务平台。你们显然很有经验。我们在这个还很新兴、但产品与市场契合度已经很明显的领域建设平台业务，你有什么建议？

**John Collison (00:49:59)** Yes, we're building out this platform in agentic commerce where we have some open source protocols like our Agentic Commerce Protocol. We obviously have the regular Stripe products people are using us for. It's particularly kind of tricky from a payments point of view because you're looking to have an AI app do payments on behalf of other people across all these different sites on the web without probably sharing all your payment details all across the web. This is an interesting payment thing that we're doing. Anyway, we're looking to build a platform business in agentic commerce. You guys seem to know a thing or two. What advice would you have for us as we build in this very nascent space, but when there’s clearly product market fit?

<!-- T095P01 -->
**纳德拉（00:50:42）** 我觉得你们已经在做我会建议的事了。要思考的是，对每位商家来说，参与智能体工作流程意味着什么？今后每个商家都得找 Stripe 这样的服务商，说：“嘿，我有商品目录，也有结账功能，帮我用最顺畅的方式对接智能体。”如果这件事做得得体，我觉得商家就会选择 Stripe。我也认为商家入驻会是关键，因为我猜，大量中小商家只要点一下，说“帮我开通智能体商务”，就能推动这项业务发展。

**Satya Nadella (00:50:42)** I mean I think you have done that, which is one of the things that I would think is, what does it mean to participate in this agentic workflow for every merchant? So every merchant now will have to sort of come to someone like Stripe and say, “Hey, I have a catalog, I have a checkout. Please get me to meet agents in the most friction-free way.” And that done tastefully is why I would think I would hire Stripe for. And I think the merchant onboarding, because I'm assuming the long tail of merchants being able to click and say, “Hey, enable me for agentic commerce” is going to be the thing that's going to drive.

<!-- T095P02 -->
**纳德拉（00:50:42）** 好消息是，参与者会有很多。显然 ChatGPT 是其中最大的一个，但 Google 会加入，我们也会加入，Meta、Perplexity 也会加入，竞争者会很多。会有许多入口平台充当聚合方。但更有意思的是，商家自己也会希望在自家网站或手机应用里支持自然语言查询。这些能力都得为他们配齐；或者，让我自己的智能体也能去查询这些东西。

**Satya Nadella (00:50:42)** Because the good news here is there is going to be multiple. I mean obviously ChatGPT is the big one, but there's going to be, I mean Google's going to be there. We are going to be there, Meta will be there, Perplexity, there's going to be a lot of competition. There's going to be a lot of front doors as aggregators, but the more interesting thing is they themselves will, on their website, or on their mobile app, will want to support natural language queries. And so all of that being enabled for or my own agents will go interrogate those things.

<!-- T095P03 -->
**纳德拉（00:50:42）** 所以我觉得，真正需要你们攻克、或者说解决好的，就是这个关键问题。你不能跑去找小商家，说：“嘿，你自己搭个 MCP 服务器，再实现这个协议、那个协议……”到底有没有一个“一键搞定”的办法？

**Satya Nadella (00:50:42)** So I think that that's the key thing to be challenged, or rather really solved well. Because going to a small merchant and saying, “Hey, you go stand up an MCP server, do this protocol, that protocol…” What's the “easy” button?

## 购物与客服的边界正在消失 {#convergence}

*The convergence of shopping and customer service*

<!-- T096P01 -->
**约翰·科里森（00:52:05）** 我觉得我们还会看到另一种趋势——你可能已经看到了——就是各种智能体体验开始涌现。我们在聊智能体商务。我们请过 Intercom 的德斯·特雷纳，他的公司现在用人工智能提供客户服务，正用人工智能取代人工客服。他们显然发现了大量新增需求：用户起初只是为了那类帮助台问题而来，后来就会想，“哇，这其实是浏览网站的好得多的方式”，用起来几乎像命令行。现在它还不能执行那么多操作，但以后会越来越能做。我也在想，这些体验会不会融合：这边是不断发展、不断扩大的购物体验，可能还包括商品发现；那边是客户服务……

**John Collison (00:52:05)** I think the other thing that we're going to see is—you're probably seeing this already—emerging of a bunch of the agentic experiences. So we're talking about agentic commerce here. We had Des Traynor from Intercom. They're now doing customer service AI mediated and just replacing humans doing customer service with AI. But what they're seeing obviously, is a huge amount of induced demand where people initially come for the help desk type queries and then it's like, “Wow, this is honestly a much better way to navigate the website” and it's almost like a command line. Anyway, it can't quite take as much actions now as it will be able to, but I also wonder how much all these experiences merge where we're doing the buying stuff over here that is growing and expanding and maybe there's some discovery and things like that. They're doing the customer service stuff over there—

<!-- T097P01 -->
**纳德拉（00:52:51）** 这会是通用的。

**Satya Nadella (00:52:51)** It's universal.

<!-- T098P01 -->
**约翰·科里森（00:52:52）** 对，说得好。它什么时候会变成命令行应用？我还是觉得时尚领域很有意思。现在很多网站的技术体验糟糕得惊人。人们想买的是很讲究审美、整体感觉的东西，会说“我想找个类似这样的，但再精致一点之类的”，结果网站上还是只有关键词搜索和手动打标签。这样的领域显然很适合做交互式的人工智能体验。就像用 Midjourney 时，你会说：“不，这张图不太对，按这个方向改一下。”把这种方式用到购物上，我觉得会很有意思。

**John Collison (00:52:52)** Yeah, that's a good point. When does it become a command line application? Again, my example of this is, I find the fashion space interesting where how incredibly poor the tech is with a lot of websites out there. Where people are trying to this very aesthetic vibe space, “I'm looking for something like that, but a little more fancy whatever,” and it's all keyword-based search and manual tagging and things like that. And things like that feel to me perfectly set up for having an interactive AI-based experience where again, your Midjourney prompts, you're like, “No, the image wasn't quite right. Change it in this way.” Just doing that with commerce I think will be really interesting.

<!-- T099P01 -->
**纳德拉（00:53:29）** 有道理。我直觉上也觉得，大家都在做远程销售，客户服务也有远程销售的性质。所以这很说得通；在智能体的世界里，你完全可以把这些环节串起来，让它们之间的衔接不像今天这样生硬。

**Satya Nadella (00:53:29)** Makes sense. And I also think intuitively, all of us are inside sales, or other customer service is also inside sales. And so intuitively that makes sense and definitely in the agentic world you can stitch these things together so that the seams are not like what they are today.

---

## 译注 {#notes}

[^frontpage]: 原转录把产品名写成“front page”。结合网站制作工具的语境，中文按 FrontPage 处理。微软资料将其列为可随 Office 提供或单独提供的产品，参见 [微软相关产品说明](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2003/ms03-036)。

[^powered-shells]: 原转录写作“PowerShells”。结合本段机房供给的语境，以及 00:31:42 明确出现的“powered-up shells”，这里按已具备供电条件的数据中心机房理解；与微软的 PowerShell 命令行工具无关。这是上下文推断，英文保留原稿。

[^coase]: 纳德拉原话是“Coase theorem”，故正文译为“科斯定理”；但紧接着谈到的企业内部协调与市场交易的成本比较，更直接对应科斯在《企业的性质》中提出的问题。参见 [科斯的诺贝尔奖演讲](https://www.nobelprize.org/prizes/economic-sciences/1991/coase/lecture/)。

[^nlweb]: NLWeb 是微软于 2025 年 5 月公布的开放项目，旨在让网站提供自然语言交互界面。参见 [微软的项目介绍](https://news.microsoft.com/source/features/company-news/introducing-nlweb-bringing-conversational-interfaces-directly-to-the-web/)。
