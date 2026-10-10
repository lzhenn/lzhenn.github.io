---
layout: post
title: "【Cheeky Pint】模型忠诚、产品捆绑与组织文化 | 纳德拉与 John Collison 对谈 | 中英全文（下）"
categories: podcast
tags: [thinking, AI]
author: LZN
description: "本篇是萨提亚·纳德拉（Satya Nadella）接受约翰·科里森（John Collison）的 Cheeky Pint 播客采访实录，原节目于2025年11月18日发布。纳德拉是微软首席执行官，自2014年起执掌微软；科里森是支付平台 Stripe 的联合创始人兼总裁。其采访中涉及用户对模型与品牌的忠诚、token 工厂与智能体工厂、开放平台与产品捆绑的取舍、微软的组织文化与大公司管理、职业经理人与创始人的差异，以及海得拉巴的教育环境与个人成长等话题。初稿采用 Luna 机器翻译，经 DeepSeek 与 Qwen 交叉校审、中英混排，并附必要批注。全文分上、中、下三部分发出，本篇为下篇，以飨诸君。"
---

_书童按：本篇是萨提亚·纳德拉（Satya Nadella）接受约翰·科里森（John Collison）的 [Cheeky Pint 播客采访实录](https://cheekypint.transistor.fm/19)，原节目于2025年11月18日发布。纳德拉是微软首席执行官，自2014年起执掌微软；科里森是支付平台 Stripe 的联合创始人兼总裁。其采访中涉及用户对模型与品牌的忠诚、token 工厂与智能体工厂、开放平台与产品捆绑的取舍、微软的组织文化与大公司管理、职业经理人与创始人的差异，以及海得拉巴的教育环境与个人成长等话题。初稿采用 Luna 机器翻译，经 DeepSeek 与 Qwen 交叉校审、中英混排，并附必要批注。全文分上、中、下三部分发出，本篇为下篇，以飨诸君。_

**本篇目录**

- [人们忠于模型，还是忠于品牌？](#loyalty)
- [token 工厂与智能体工厂](#stack)
- [开放平台与产品捆绑的取舍](#bundling)
- [谁来定义一家公司的文化？](#culture)
- [二十万人公司的管理，以及创始人的工作记忆](#scale)
- [海得拉巴、学校与板球](#school)

---

## 人们忠于模型，还是忠于品牌？ {#loyalty}

*Loyalty to models or brands*

<!-- T100P01 -->
**约翰·科里森（00:53:47）** 也许我们所说的这些分工，其实是软件和组织架构在偶然过程中划出来的一条条泳道。“有人提出非商业性质的问题，就由你们做客户服务。你是销售开发代表。你负责其他事情……”诸如此类。所有这些界线大概都会开始松动。我们聊了很多人们会用的人工智能应用，比如 Copilot、ChatGPT、Gemini 之类的。现在有个争论：模型质量到底有多重要？人们会不会认准一个品牌，比如喝了很多年可口可乐；即使可口可乐……我拿它举例不太恰当，因为当年配方一改就引发了反弹；但就算他们换了配方，人们还是会偏好某个品牌。

**John Collison (00:53:47)** Maybe what we're describing is a bunch of swim lanes have been established by random accidents of software and org charts and everything like that. “You do customer service when people come with a query of a non-commercial nature. You are an SDR. You do whatever…” And all those distinctions are probably going to get going. We're talking a lot about the AI apps that people use and Copilot and ChatGPT and Gemini and all these kinds of things. There's a debate about how much model quality matters and is it the case that people pick a brand and they've been drinking Coke for the longest time and even if Coke… I mean Coke's a bad example, because there was a revolt about the change in the formula, but even if they change the formula people, they still have a preferred brand.

<!-- T100P02 -->
**约翰·科里森（00:53:47）** 我用 o3，我妻子用 GPT 5。我几乎要吓坏了，因为我会想：“你值得用更聪明的模型。除非我死了，否则你别想从我手里拿走 o3。”你怎么看这个问题：人们会忠于某个模型吗？而且他们当初试图撤掉 4.0 时——是 4.0 吧？——也引发了反弹，大家对那个模型感情很深。人们忠于的是某个模型，还是某个人工智能品牌？这会怎样影响你们的业务策略？[^gpt4o]

**John Collison (00:53:47)** I use o3, my wife uses GPT 5. I'm almost horrified because I’m like, “You deserve more intelligence than that and you can take o3 from my cold dead hands.” Where do you stand on the debate of do people have loyalty to—and there was also the revolt when they tried to take away 4.0, was it? And people were really attached to that model. Do people have loyalty to a model or do they have loyalty to an AI brand and how does this affect your business strategy?

<!-- T101P01 -->
**纳德拉（00:54:57）** 我觉得在消费产品领域，这是我们第一次看到换模型会带来不同的变化，并非人人感受都一样。个性就是其中一个维度，还有风格之类的东西。这算是一个新的维度。换句话说，这也说明，哇，这或许成了新的差异化方式。模型有智商这一面，有情商这一面，还有各种风格特点；也许人们会据此引导模型的表现。

**Satya Nadella (00:54:57)** I think that in consumer products, this was the first time we saw that when you changed models, they're not sort of uniform changes and they impact people differently. And personality is one such thing or style or what have you. And so it just sort of is a new dimension. So in other words, it's also an argument that, oh wow, this is a new dimension of perhaps differentiation. There's the IQ side of it, there's the EQ side of it, and then there is all these style points and maybe that's kind of one of the things that people will steer things towards.

<!-- T101P02 -->
**纳德拉（00:54:57）** 但从长远看，我认为模型必须能胜任最难、价值最高的任务。拿到这种能力之后，再针对手头的任务持续优化，对吧？所以作为产品开发者，我们要做的是推出能力最强的模型版本；但在生产环境中，实际运行的是多个模型。比如，GitHub 上我最喜欢的新功能是 Auto。人们显然还是喜欢 Sonnet，想用就继续用；但归根结底，我希望有个模型选择器，而且它不能只是个愚笨的模型路由器。

**Satya Nadella (00:54:57)** But long-term for me, I think you have to kind of make sure that the models are more capable for the hardest high-value tasks. And then you continuously optimize, after you have access to that for what the task at hand is. Right? So as a product builder for us, my thing is to have the model drop, which is the most capable, but then what's in production is multiple models. And my favorite new thing in GitHub for example is Auto. Which is, I want to keep, people still obviously love Sonnet whatever they want to use it, but at the end of the day, I really want the model picker and it just can't be a dumb model router.

<!-- T101P03 -->
**纳德拉（00:54:57）** 它必须有足够的智能，知道这项任务值得投入多少成本、需要哪种智能，也要了解我的代码库有多复杂，或者我的拉取请求任务有多复杂。我认为这才是智能体未来的发展方向。因此，你需要模型；事实上，你需要一个模型组合，再由智能体在这些模型之间协调，让它满足你的需求，之后你也会有自己的偏好。[^cogs]

**Satya Nadella (00:54:57)** It has to basically have the intelligence to know that this task deserves this kind of cogs or this type of intelligence and this is my complexity of my repo or my PR task. That ultimately is where the future of agents would be. And so therefore you want the model. In fact, you want an ensemble of models, then you have agents intermediating that ensemble so that it meets your needs and then you'll have preferences.

<!-- T102P01 -->
**约翰·科里森（00:57:00）** 大家的偏好不都会是越聪明越好吗？我会打开选择器，手动选 o3 来回答“我去哪儿吃冰淇淋”这种问题。我总想用最……

**John Collison (00:57:00)** Will everyone’s preference not just be for more intelligence? I'll go into the picker and manually select o3 for “Where should I go get ice cream” query. I always want the most—

<!-- T103P01 -->
**纳德拉（00:57:10）** 我觉得那是习惯，你不这么认为吗？

**Satya Nadella (00:57:10)** That's habit, don't you think?

<!-- T104P01 -->
**约翰·科里森（00:57:12）** 也许吧，不过这也是经过慎重考虑的重要选择。

**John Collison (00:57:12)** Maybe, but it's also an important considered decision.

<!-- T105P01 -->
**纳德拉（00:57:16）** 确实如此。我是说，我们很难让自己放弃原来的选择……这就是默认选项为什么重要，也是我们为什么喜欢默认选项。我们不喜欢别人动我们的奶酪。连模型选择也是这样：“哇，如果现在把模型选择拿掉，就麻烦了。”所以这得谨慎处理。不过我确实认为，从长远看，如果我能信任某个东西始终替我把事情做好，而且它做选择时还让我觉得很满意，那我就会把事情交给它。

**Satya Nadella (00:57:16)** But it is true. I mean it's very hard for any of us to take our—that's why defaults matter and we love our defaults. We don't love the cheese to be moved. Even the model selection stuff, it's kind of like, “Wow, if you now took away the model selection, it's a problem” and so therefore you got to be careful. But I do think in the long run, if I can trust, that's another one, which is if I can trust something to always do something for me while it's making a selection that somehow is delightful, then that's when I'll hand off.

<!-- T106P01 -->
**约翰·科里森（00:57:49）** 所以你觉得，最终要做到的是让我相信你会选合适的模型？

**John Collison (00:57:49)** And so you think that's what you need to get to is me trusting that you'll pick an appropriate model?

<!-- T107P01 -->
**纳德拉（00:57:55）** 正是如此。

**Satya Nadella (00:57:55)** Exactly.

## token 工厂与智能体工厂 {#stack}

*Token factories and agent factories*

<!-- T108P01 -->
**约翰·科里森（00:57:56）** 是啊。我的理解是，微软在整个技术栈的每一层都有布局：有 Copilot，有你们在 OpenAI 的股权，还有……人工智能的垂直应用我们可以之后再聊；你们有 Azure 这一层，有芯片，还有很多别的东西。这里面有些部分对你来说比其他部分更重要吗？哪些领域是必须赢下来的？你们会做垂直应用吗？

**John Collison (00:57:56)** Yeah. And then I mean my mental model of Microsoft is that you just play at every part of the stack in that there’s the—you have Copilot, you have your stake and OpenAI, you have… Well, we can get to vertical applications in AI, you have the Azure layer, you have chips, everything leaving out a whole bunch of stuff. Are some more important to you than others? What is the must win? Will you do verticals?

<!-- T109P01 -->
**纳德拉（00:58:19）** 是啊。最核心的部分，我会把它概括为我们的基础设施业务。我们必须非常擅长打造我所谓的“token（词元）工厂”，也就是极其高效地做到每瓦、每美元产出更多 token。然后还有另一层，我称之为“智能体工厂”。token 工厂和智能体工厂的区别在于，后者要最高效地使用 token，以实现业务成果或满足消费者偏好，也就是……

**Satya Nadella (00:58:19)** Yeah. Well, at the core, the way I kind of conceptualize it is our infrastructure business. We have to be fantastic at building what I'll call the token factory. This is the tokens per dollar per watt, really being super efficient at that. Then I'll say we have another layer of it, which is the agent factory and the difference between the token factory and the agent factory is use the tokens most efficiently to drive a business outcome or a consumer preference outcome, which is—

<!-- T110P01 -->
**约翰·科里森（00:58:51）** 这说的是每个 token所创造的价值，之类的吧？

**John Collison (00:58:51)** That's about the value per token or something,

<!-- T111P01 -->
**纳德拉（00:58:53）** 每个 token所创造的价值，要由人们关注的特定领域来评估。正如你说的，它周围还有一整套工具。它有一个完整的……可以说是新一代应用层，或者应用服务器。每一代新平台都曾有过这样的东西：有了网络，就有网络服务器。某种意义上，这就是人工智能服务器，或者人工智能云。然后我们肯定也会打造自己的——我会称之为“智能系统”或人工智能系统——也就是 Copilot 系列产品。无论是面向信息工作，还是我们已经用于编程或软件开发的产品。

**Satya Nadella (00:58:53)** The value per token and as evaluated by the specific domain that people care about. And that is to your point, it has tooling around it. It has a whole, it's kind of the new app tier or the app server. Every new platform has always had, there was the web and there was a web server. This is the AI server in some sense or the AI cloud. Then we will definitely want to build our own, I'll call it systems of intelligence or AI systems that is the family of Copilot. Whether it's for information work, that's kind of what we've done for coding or software development.

<!-- T111P02 -->
**纳德拉（00:58:53）** 那就是 GitHub Copilot。安全也是另一个领域，我们肯定会成为其中的主要参与者。这是三个横向领域。我们也会做业务应用。另一个方向是医疗和科学，我们在这方面投入很多。在医疗领域，我们收购了 Nuance，现在有个叫 DAX Copilot 的产品，能为医生记录病历并区分说话者，让医生可以把更多时间花在患者身上，其他事情都交给人工智能处理，从医疗编码到记录病历都包括在内。这是一个例子。

**Satya Nadella (00:58:53)** That's the GitHub Copilot, security’s another domain where we are absolutely going to be a primary. Those would be the three horizontal. We will also have business applications. The other one is we are doing a lot in health and science. So in health we had bought Nuance and now we have something called DAX Copilot, and this is the notetaking diarization for physicians. So their ability to be able to have a doctor spend more time with their patients and then the AI do everything else in terms of everything from coding to taking the notes. So that's one place.

<!-- T111P03 -->
**纳德拉（00:58:53）** 我们和 Epic 有很好的紧密合作关系，相关功能也嵌入了 Epic。这就是我们在医疗领域所做的事。我们也在做面向消费者健康的 Copilot 功能，并与这些服务衔接。另一个方向是科学。结果发现，这个领域非常适合我所谓的“外循环编排”：科学方法在某种意义上要求你提出假设，再通过计算机模拟开展多项实验，回来后修正假设，等等。对我来说，这是另一条工具链。我们有点像是在探索如何把 GitHub Copilot 和 Microsoft 365 Copilot 结合起来。

**Satya Nadella (00:58:53)** We have a great close partnership with Epic. It's an embedded part of Epic. So that's kind of what we are doing in health. And then we are also doing stuff in Copilot for consumer health that sort of docks to it. But the other one is science, and it turns out it's a big domain for what I'll call the outer-loop orchestration, which is the scientific method in some sense requires you to create the hypothesis, then run these multiple experiments in silico, come back, refine and so on. So that to me is another tool chain. It's kind of like we are trying to discover some combination of the GitHub copilot meets Microsoft 365 Copilot.

<!-- T111P04 -->
**纳德拉（00:58:53）** 也就是说，为科学家提供知识工作工具，让他们能够使用权威知识来源，也能调用界面和工具；甚至可以接入湿实验室的 MCP 服务器，和它交互。我该如何编排好这一切，让科学研究的循环加快？

**Satya Nadella (00:58:53)** Knowledge work, if you will, for the scientist where they have the authoritative sources of knowledge. They have the interfaces tools used, could even be, hey, the MCP server for the wet lab, so to speak, can I interface with it? And then how do you orchestrate all of this such that the scientific loop can go faster?

## 开放平台与产品捆绑的取舍 {#bundling}

*Open platforms and product bundling*

<!-- T112P01 -->
**约翰·科里森（01:01:09）** 作为平台公司，你总得决定什么时候该把产品捆绑在一起，什么时候该把它们捆起来并要求用户一起使用，什么时候又不该这么做。不知为什么，大家经常谈到的一个经典例子，其实是件挺小的事：苹果最初只让 iPod 配合 Mac 使用，想借此带动 Mac 销售；后来放弃了这个策略，推出了 Windows 版 iTunes。按我读《苹果在中国》时的了解，这完全是某人有一天偶然作出的一个决定，但人们常把它当成经典案例。

**John Collison (01:01:09)** As a platform company, you always have decisions around when should you try and bundle products together? When should you try and staple them and mandate they be used together and when should you not? And I think the classic example for some reason that everyone talks about despite it being quite minor, is the fact that Apple originally only, let's use an iPod with a Mac and tried to use it to drive Mac sales, and then gave up and shipped out iTunes for Windows. And my understanding reading the Apple in China book is it was a totally random decision that someone just made one day, but it's often held up as one of these examples.

<!-- T112P02 -->
**约翰·科里森（01:01:09）** 显然，微软的整个历史里也充满了有意思的例子。我觉得人们没有意识到，早期微软有多开放。1985年，微软的大部分收入来自 Macintosh 应用；而微软的操作系统上，大部分应用都是第三方软件，比如 Lotus 1-2-3 之类。所以当时采取的是完全开放的策略。后来到了 Windows 时代，Office 和 Windows 紧密捆绑，彼此相互促进。再后来，我的印象是，Azure 和云服务早期的定位是：哦，你可以在这里运行 SQL Server。之后微软又全面拥抱 Linux，等等。

**John Collison (01:01:09)** Obviously Microsoft, the entire history is full of these interesting examples. I don't think people realize how open Microsoft was in the early days where in 1985 most of Microsoft's revenue was from Macintosh applications and then for the Microsoft operating systems, most of the applications were third party like Lotus 1, 2, 3 and things like this. And so it was like a fully open strategy and then you had the Windows era of the tight coupling between Office and Windows and those mutually reinforcing each other. Then early on, I get the sense Azure and Cloud was, oh, it's a place where you can run your SQL server and then fully embracing Linux later on and things like that.

<!-- T112P03 -->
**约翰·科里森（01:01:09）** 我之所以好奇，是因为我们也把自己看成平台公司，最近一直在拥抱更多模块化。比如 Stripe Radar，即使你不用 Stripe 收款，也可以使用它。你一般怎么判断产品应该捆绑销售，还是独立销售？人工智能领域，这个问题又有什么特别之处？

**John Collison (01:01:09)** I'm curious just because again, we think about this as a platform company and we've been of late embracing much more modularity where Stripe Radar, you can use it even if you're not using Stripe for payments and things like that. How do you in general think about your framework for when products should be coupled versus when you sell them independently? And then AI specific versions of that question.

<!-- T113P01 -->
**纳德拉（01:02:50）** 我思考这个问题的一个出发点是，我们经常夸大许多竞争有多么“零和”。你需要敏锐分析的一点，是哪些领域从定义上说就会有多个参与者。云服务就是经典例子。我记得刚入行时，Azure 显然比 AWS 晚很多才起步。人们会问我：“天啊，AWS 领先这么多，市场里还有第二家云服务商的位置吗？”我当时和 Oracle、IBM 在各种中间层服务器上竞争过，所以我觉得，当然有。

**Satya Nadella (01:02:50)** So the way—a reason about it is I think we overstate many times how many of these battles are “zero sum.” So at some level, one of the pieces of analysis that I think that you want to be sharp at is, what are by definition going to be multiplayer? Like cloud is a classic example, which is, I remember even back in the day when I got started, and obviously Azure got started much later than AWS. People would tell me, “Oh God isn't AWS so far ahead? Is there even room for a second cloud?” And having competed against Oracle and IBM on all the middle tier servers and so on, I felt like no.

<!-- T113P02 -->
**纳德拉（01:02:50）** 企业客户和商业客户大体上会要求有多家供应商。这种结构性的认识促使我们投身其中，之后的故事大家都知道了。所以在我看来，如果你把产品捆绑得太过头，可能反而会缩小自己的总潜在市场，失去竞争力。比如 Azure 最初叫 Windows Azure。哦，这就成问题了，因为 Azure 不能只对 Windows 有意义。它必须把 Linux 当作一等公民来支持，也必须把 MySQL 和 Postgres 当作一等公民来支持。

**Satya Nadella (01:02:50)** These enterprise customers and commercial customers by and large are going to demand a sort of multiple. And so that was the structural understanding that drove us to even just be at it and the rest is history. So a little bit of, to me, if you over package things, you might in fact sort reduce your TAM and not compete. For example, Azure was called Windows Azure. Oh wow. That's a problem because Azure makes no sense just for Windows. It's sort of got to support Linux as first class. It's got to support MySQL and Postgres as first class.

<!-- T113P03 -->
**纳德拉（01:02:50）** 因此，我们既要确保 SQL Server 做得非常出色，也要在 Postgres 或 MySQL 上做得和 Amazon 一样好。这主要是因为，嘿，这就是市场规模，也是客户对我们的期待，而我们将面对激烈竞争。所以我就是这样界定模块化的：什么做法能让我的技术栈获得最大的市场空间？当然，我们是一家公司，不是一个多元化企业集团，因此某种程度上应该存在整合收益和平台效应的理论；那么这些收益和效应是什么，我们又该怎样把它们实现好？

**Satya Nadella (01:02:50)** And so that's what allowed us to make sure that you have to actually have to do a great job with SQL Server. But you got to do as bang of a job as Amazon would do with Postgres or MySQL. And so it was driven primarily by hey, that's the TAM, that's what customers expect from us and we are going to have tough competition. So to me that's kind of how I define my modularity. What's the thing that maximizes my stack’s market opportunity? Then yes, we are a firm and the reason we're not a conglomerate and so therefore there should be a theory of some integration benefits and platform effects and so therefore what is that and how do we do a great job of it?

<!-- T113P04 -->
**纳德拉（01:02:50）** 但技术栈的每一层，包括 Azure 的token 工厂，都应该允许客户这样说：“我只想用 Azure 的裸金属服务。我只需要你帮我管理遍布各处的 Kubernetes 集群，软件我自己带来。”完全没问题。这个工作负载我们必须赢下来。也许等到有一天，自己管理多区域数据库变得非常痛苦时，我们才有机会让客户说：“哦，那我来用 Cosmos。”但那是另一个单独的决定。

**Satya Nadella (01:02:50)** But each layer of the stack, even in let's say in Azure, the token factories, somebody should be able to come and say, I just want to use Azure for its bare metal services. I just need Kubernetes clustered all over, but I just need you to do the management part and I'll bring all my software. No problem. We got to win that workload. Maybe then after that we'll at least have a shot someday when it becomes a real pain to manage sort of your multi-region database on your own that you'll say, “Oh, let me just use Cosmos,” But it's a separate decision.

<!-- T114P01 -->
**约翰·科里森（01:05:25）** 人们不总会争论吗？如果 Azure 支持 Linux，我们就能多卖 Azure；但 Windows 团队会说：“对，可你这是在削弱 Windows Server。”有些地方就像你说的那样，微软选择开放；另一些地方则不同。比如 Microsoft Flight Simulator 没有登陆 PlayStation，在 Xbox 上提供，这就说得通，整合在一起也很自然。我不知道这个例子是不是有点牵强，但 Teams Chat 和 Teams Video 没有分开销售，而是作为一个整体提供，这也说得通，能让套件更有吸引力。所以你们是不是总得争论，捆绑销售的成本到底有没有超过它带来的收益？[^flight-simulator]

**John Collison (01:05:25)** Isn't there always a debate between if we have Linux and Azure, we'll sell more Azure, but the Windows people say, “Yeah, but you're hamstringing Windows’ server.” And there are some places like you're describing where Microsoft's open, there are other places, Microsoft Flight Simulator is not available on the PlayStation, it's available on the Xbox, and that makes sense. It feels kind of natural to be integrated that way. I don’t know, this might be a bit of a stretch, but Teams Chat and Teams Video are not sold separately. They're just part of one thing and that makes sense. It makes the bundle more compelling. And so don't you always end up in these debates as to whether the bundling cost outweighs the bundling benefits?

<!-- T115P01 -->
**纳德拉（01:06:01）** 是的。我觉得有些情况，比如 Teams，就是个典型例子。Teams 从一开始就是把那四项功能整合在一起的产品，类似 Outlook。当年先有个人信息管理器，后来才有电子邮件客户端，日历也原本是独立的。Outlook 是第一个搭起框架、把这三样东西放在一起以便完成工作的产品。Teams 也一样，我们把聊天、频道、视频等等整合到了一起。所以某种程度上，捆绑本身就是产品，也是产品的基本框架。之后当然可以说：“嘿，它需要开放的市场，也需要和其他东西集成。”因此，必须在基本功能层面想清楚怎样模块化才合理。

**Satya Nadella (01:06:01)** Yeah, and I think some of those, for example, the Teams thing, is a classic one, which is Teams was born as a product that brought those four things, like Outlook. There was a PIM before there was an email client and a calendar was separate, and Outlook was the first scaffolding that said, “Hey, we bring these three things to get a job done.” And same thing with Teams. We brought chat and channels and video and what have you into one. So the bundling was the product, to some degree. That was the product scaffolding. And so then of course you can then say, “Hey, that needs to have an open marketplace and it needs to integrate with other things or what have you.” So the modularity has to be thought through in ways that make sense at the atomic level.

<!-- T115P02 -->
**纳德拉（01:06:01）** 接下来，你就不能过度纠结协同效应或整合效应，最后反而失去竞争力。一个典型例子是，你打造了一款极其出色的公有云，却只能运行 Windows 或 SQL 工作负载，那它在市场里就只占很小一块。因此，这既符合我们的利益，也能更好满足客户需求。我就是这样看人工智能技术栈如何衔接的：我们有基础设施业务、应用服务器业务和应用业务。这样说只是为了简化问题。

**Satya Nadella (01:06:01)** Then you don't want to overthink about the synergies or integration effects and you're not competitive. A classic thing would be if you built an unbelievable public cloud except it only ran Windows workloads or SQL workloads, that'll be essentially a very small sliver of the market. So it was in our interest and definitely in the interest of meeting the customer needs. And so being able to really click in the AI stack, that's kind of how I look at it. We have an infra business, we have an app server business, and we have an apps business. It's just simplifying.

<!-- T115P03 -->
**纳德拉（01:06:01）** 我希望这三项业务都能凭自身实力站稳脚跟。当然，我们自己希望这三层之间能形成反馈循环，但客户和合作伙伴可以选择从哪个入口进入。

**Satya Nadella (01:06:01)** I want those three things to stand on their own merits. We ourselves of course want to have the feedback loop across these three layers, but customers and partners will choose which door they enter through.

<!-- T116P01 -->
**约翰·科里森（01:07:41）** 我的印象是，你接任微软之后，把公司文化从高度捆绑——你买一台 Windows 电脑，里面运行着 Microsoft Access、SQL Server 等等，一切都被妥善整合在微软的生态里——转向了更加开放、互操作的策略。

**John Collison (01:07:41)** This impression I have is that when you took over Microsoft, you shifted the culture from a highly bundled, you'll buy your Windows machines and they're running Microsoft Access and there are SQL Server and everything is neatly packaged together in this Microsoft life, to moving towards more of an open and interoperable strategy.

<!-- T117P01 -->
**纳德拉（01:08:01）** 我会说，我想做的是回到八十年代的微软。因为后来发生的大多数事情都在九十年代：当时有微软，几乎没有别的公司，所以我们的产品更加彼此整合，无论是在客户端还是服务器端。你说得对，八十年代我们先在 Mac 上开发 Office，Windows 版是后来才有的。事实上，比尔创办微软时的理念是：这是一家软件工厂。我不迷恋某一个类别，只想打造最好的软件工厂，让它源源不断地解决各种问题、产出软件。

**Satya Nadella (01:08:01)** I think that the way I would say is my thing was to go back even to the Microsoft of the eighties perhaps., Because most of what happened was really in the nineties there was Microsoft and there was pretty much nothing else, and so there was sort of a lot more of our things coming together, whether it was on the client or on the server. The eighties, to your point, we built Office on the Mac. Windows came later. In fact, the concept that Bill had when he started Microsoft was it's a software factory, I'm not in love with any one category, I'm just going to build the best software factory and it's going to churn out whatever problem.

<!-- T117P02 -->
**纳德拉（01:08:01）** 比如 Flight Simulator。你想要一个 BASIC 解释器？没问题，我们有。你想要一个操作系统？我们也有。所以某种意义上，这就是当时的想法。后来，我们逐渐受制于其中四五块业务之间的绑定关系，也就是 Windows、Windows NT、客户端—服务器架构等等。等我成为 CEO 时，我意识到这一点；甚至在我负责云业务时，我就意识到，市场即将变得大得多，也会发生变化，而那时我们还没有移动平台。

**Satya Nadella (01:08:01)** Flight i sim. You want a basic interpreter, no problem. We have one. You want an operating system? We have one too. So in some sense, that was the idea and at what point we got into a lock between four or five parts of that that became the Windows and Windows NT and client server and what have you. So I sort of realized that when I became CEO, and even when I was running our cloud business that hey, this is a time where the market's going to be a lot bigger and got different, and we didn't have the mobile platform at that time.

<!-- T117P03 -->
**纳德拉（01:08:01）** 因此，我们真的需要确保，通过以合理的方式组合产品，能在尽可能大的市场中保持相关性。如果这种做法并非公司的核心基因，我不认为我当上 CEO 后只要说一句“我要这么做”，公司就能执行得好。让我们的软件走上每个平台，本来就是公司的核心基因。

**Satya Nadella (01:08:01)** And so therefore we really needed to make sure we would stay relevant in the largest markets that we could address by bringing our products together in configurations that made sense. S I would say if it was not in the core DNA of the company, I don't think just because I showed up as a CEO and I said, “I want to do this,” we would've executed well. It was in the core DNA of the company that we can in fact take our software to every platform.

## 谁来定义一家公司的文化？ {#culture}

*Who defines a company’s culture*

<!-- T118P01 -->
**约翰·科里森（01:09:43）** 说到公司的核心基因，那张微软员工互相举枪相向的著名漫画呢？你在文化上做了多少调整，又是怎么做到的？说到底，你能看到各种漂亮的举措，比如全员大会之类的；但归根结底，文化体现在什么事情你能容忍、什么事情不能容忍，以及决策如何作出等等。

**John Collison (01:09:43)** Yes. Speaking of the core DNA of the company, the famous cartoon of Microsoft with all the guns pointing at each other. How much cultural tweaking did you have to do and how do you actually do that? When you get down to brass tacks, you can see all the nice things, the all hands and things like that, but ultimately culture comes down to what you will and won’t tolerate and how decisions are made and things like that.

<!-- T119P01 -->
**纳德拉（01:10:08）** 我从那整个事件里学到了两件事。我总会说，听着，我是个地地道道的内部人。过去三十五年里，微软好的、坏的事情我都经历过，我也参与其中，所以我没法否认任何一面。我当时觉得，我们有点失去了信念，因为我们失去了自己的叙事。那张漫画就是个很好的例子：别人定义了后来成为公司文化叙事的东西，而那不完全符合现实。

**Satya Nadella (01:10:08)** Yeah, I would say there are two things that I learned from that entire episode. Because I always say, look, I'm a consummate insider. Anything good and bad about Microsoft for the last 35 years, I lived through them all and I'm part of it, so I can't deny any of it. The thing that I felt was a little bit of that was we lost our own belief because we lost the narrative. That cartoon is a great example of someone else defining what became the cultural narrative more so than reality.

<!-- T120P01 -->
**约翰·科里森（01:10:42）** 大家开始觉得，那张漫画画的就是自己。

**John Collison (01:10:42)** People started to identify with the cartoon.

<!-- T121P01 -->
**纳德拉（01:10:43）** 没错。我觉得，今天社交媒体和社会风向的一个根本问题是，你完全可能失去对叙事的掌控。这是个会自我强化的过程。有意思的是，这些东西当然都包含某种信号；这并不是说，哇，我们各个部门都完美无缺、彼此高度和谐。事实并非如此。但某些部门间的张力确实反映了真实问题，张力本身也有必要。让组织内部和谐一致并不是目标，在市场上取胜才是目标。不过在某种程度上，你得协调好这些大型组织。

**Satya Nadella (01:10:43)** That's right. I mean, I think one of the fundamental issues of today's social media and the zeitgeist is you can absolutely lose narrative. It's completely reflexive. So one of the interesting things is, of course, all of these things have signal, so this doesn't mean, oh wow, we were all perfect divisions and we are all sort of in greater harmony. That is not the case, but in some sense, some of these divisional tensions are real issues that need to have tension. We can't have, social cohesion is not a goal. Winning in the marketplace is a goal, but at some level you have to orchestrate these large organizations.

<!-- T121P02 -->
**纳德拉（01:10:43）** 事实上，你甚至可以有意设置两支彼此竞争的团队。可就因为有人说“嘿，我去翻翻《纽约客》，那里会有一幅漫画”……这类事情是我认为领导者需要面对的。还有，在今天这个时代，员工会在外部读到关于你的报道，进而形成对你的看法；该如何沟通，是领导者面临的最大挑战之一：怎样赢得他们的信任？怎样确保他们能感受到现实，也能塑造现实？另一个问题是，大家都觉得问题出在制度上。

**Satya Nadella (01:10:43)** In fact, you may even have two competing teams by design. And just because somebody said, “Hey, I'm going to read The New Yorker and there's going to be a cartoon.” That’s the type of stuff that I think leaders… And how to communicate in today's world where your employees read about you outside and form opinions about you is one of the toughest leadership challenges, I think, which is how do you earn the trust? How do you really make sure that they can in fact feel the reality, shape the reality? The other thing is everybody thinks it's the system.

<!-- T121P03 -->
**纳德拉（01:10:43）** 大家会想：“都是那个高层领导、我的副总裁的问题，他们有全部权力，我一点权力都没有。”但现实是，权力分散得多，也分布得更广。因此，怎样真正帮助大家认识到这一点，尤其是让他们掌握其中的主动权并重新塑造局面？还有句名言是：“我离开的不是公司，而是经理。”我相信这句话。所以公司里会有各种微观文化，而它们可以被塑造。回顾我在微软的职业生涯，我很幸运，遇到了一些在公司里创造出非凡工作环境的人；正因为如此，我留了下来，也才能有所发展。

**Satya Nadella (01:10:43)** It's that guy at the top or my VP and they have all the power and I have none. The reality is the power is a lot more diffused and distributed, and so therefore, how do you really help people? Especially get hold of that and reshape? One of the other famous things people say is, “Hey, I never leave companies. I leave managers.” I believe that, and so it's kind of micro-cultures and they can be shaped. In fact, when I look back at my Microsoft career, I was lucky to fall into these people who created these unbelievable environments in the company, and that's why I stayed and that's how I thrived.

<!-- T121P04 -->
**纳德拉（01:10:43）** 所以某种程度上，我觉得高层尤其需要文化，需要一种自己能身体力行、始终如一的叙事。这也是为什么“成长型思维”或“好学者胜过万事通”这个框架对我们特别有帮助，因为没人会觉得那是我的教条，对吧？谢天谢地，这是儿童心理学里一个大家都熟悉的概念，在工作之外也能引起共鸣。找到这样的框架并身体力行很重要。但我觉得，今天我们共同面临的挑战之一，是别让社交媒体上的梗替我们定义自己。一个组织内部需要有怎样的韧性，才能抵御社交媒体上的流行叙事？我认为这是关键。

**Satya Nadella (01:10:43)** And so to some degree I feel that the more culture you need at the top, a narrative that you have to live and be consistent. So that's where this growth mindset or learn-it-all versus know-it-all has been super helpful for us as just a frame because nobody thinks of it as my dogma, right? Thank God it's a well understood child psychology thing that appeals to people outside of work, and so cracking something like that and then living it, but also somehow, I would say the challenge for all of us in today's world is let the social media memes not define us. What's that inner strength that is there in an organization that can in fact resist the social meme? That I think is the key.

## 二十万人公司的管理，以及创始人的工作记忆 {#scale}

*Managing at scale and a founder’s working memory*

<!-- T122P01 -->
**约翰·科里森（01:13:37）** 微软有多少员工？

**John Collison (01:13:37)** How many people is Microsoft?

<!-- T123P01 -->
**纳德拉（01:13:39）** 我觉得大约二十万人。

**Satya Nadella (01:13:39)** I think around 200,000.

<!-- T124P01 -->
**约翰·科里森（01:13:40）** 好，粗略算来，微软有二十万人。Stripe 有一万人。也许有人正在听，管理着一家五百人左右的公司。我们做的很多事情大概不太受规模影响：比如确保和客户交流、召开领导团队的外出会议。我们在看 2026 年的数据，希望收入再高一点、成本再低一点。公司里有很多活动，不管规模多大，做起来都差不多。

**John Collison (01:13:40)** Okay, so rough number is Microsoft has 200,000 people. Stripe has 10,000 people. Maybe there's someone who's listening to this who runs a company that's 500 people or something like that. A lot of the things that we do are probably fairly scale independent, where you're trying to make sure that you're talking to customers, you're holding a leadership offsite. We're looking at the numbers for ‘26. We want the revenues to be a bit higher and the cost to be a bit lower. There's a lot of activities in companies that are kind of the same, regardless of size.

<!-- T124P02 -->
**约翰·科里森（01:13:40）** 话虽如此，规模达到二十万人、像个城邦一样时，可能也会出现一些只有这么大才有的现象；我在一万人的规模上未必体会得到。公司大到这种程度，才会出现哪些影响？

**John Collison (01:13:40)** That said, there's also probably things that only show up at the 200,000 person city state size that I wouldn't be aware of at the 10,000 person size. What effects only show up when you're that big?

<!-- T125P01 -->
**纳德拉（01:14:27）** 我想说两点。说实话，我只在微软工作过，所以也不敢说自己是专家。但有一点是接替创始人这件事。史蒂夫和比尔建立了公司。保罗和比尔创办了公司，史蒂夫和比尔把公司做大，而我算是第一个“非创始人”CEO。很快我就意识到——实际上，刚接任时我就明白了——我需要一个团队，才能管理这么大的职责范围。还有我们提到过的 A.G. 拉夫利（A.G. Lafley）那套观点，我觉得也很好。

**Satya Nadella (01:14:27)** There are two things I would say. Quite honestly, having only worked at Microsoft, it's not that I'm like an expert, but the one thing I would say taking over for a founder— Steve and Bill built the company. I mean Paul and Bill started it and Steve and Bill scaled it, and I was sort of the first “non-founder” person. The thing I realized quickly, or in fact I got into the job and I realized that I need a team. And just to have the ability to manage the scope, but then that A.G. Lafly thing that we put out there, which I think is a great one.

<!-- T125P02 -->
**纳德拉（01:14:27）** 要清楚 CEO 明确需要做什么：你们从事哪些业务？哪些业务需要你从外部信息中综合判断？要确立标准，尤其是文化标准；还要建立你刚才说的绩效文化，不能说“我只看长期”或“我只看短期”，两边都得交出成果。要真正弄清楚只有你能做的四五件事，然后组建团队。你会说，即便公司只有五百人，你也该这么做；但说实话，那时你还可以把所有事情放在自己的工作记忆里。

**Satya Nadella (01:14:27)** Being clear about what the CEO clearly needs to do, which businesses are you in? Which businesses are you synthesizing from the outside? Having the standards, setting the standards for culture, and then the ability to your point about having that performance culture that you can't say, “Hey, I'm only about the long term, or I'm all over the short term.” You’ve got to deliver both. Getting a real grip of the four or five things that only you can do, and then building the team. You'd say even at 500 people, that's what you do, but quite frankly, you can keep in your working memory.

<!-- T125P03 -->
**纳德拉（01:14:27）** 我从开发者做起时，大家常聊一些事情：你自己记得多少行代码？后来你会说：“哦，那个人熟悉那个模块或那个库。”规模继续扩大，大家起初多少都认识每一行代码。再后来，你就得变成那个说“哦，我认识写那段代码的人”的人。我觉得，这种模块化、团队建设和凝聚力……

**Satya Nadella (01:14:27)** Growing up as a developer, there was a set of things everybody would talk about. How many lines of code do you know personally? At some point you sort of say, “Oh, that's the person who knows that module or that library”. That becomes more. Everybody starts where they know every line of code at some level. Then you have to get to the person who knows, “Oh, I know the person who wrote that,” and I think that that modularity and team building and the cohesiveness is—

<!-- T126P01 -->
**约翰·科里森（01:16:17）** 我理解得对吗？在 Stripe 这样的规模，或者规模更小时，你也许还能把产品当作一个整体来思考，知道自己要发布的每一样东西，知道所有……

**John Collison (01:16:17)** Am I understanding you correctly that maybe it's Stripe scale or at a smaller scale you can still reason about the product as a product and know everything that you're shipping and everything—

<!-- T127P01 -->
**纳德拉（01:16:27）** 我也觉得创始人在这方面很特别。创始人的独特之处就在于，他们从第一天起就伴随着公司一起成长。要把创始人的工作记忆拿过来，再说“让我把它灌输给一位职业 CEO”，这很难做到，也行不通。就连我也是1992年才加入公司，八十年代初我还不在微软。所以某种程度上，那是一段连续成长的历程，只有创始人 CEO 或创始团队能亲眼见证。因此，我认为我们要尊重创始人独有的能力；创始人也要尊重接任的人，明白后来的人不可能照搬自己做过的一切。

**Satya Nadella (01:16:27)** I also think founders are unique in that sense because the founders are, that's kind of what is singular about them because they've grown up with it from day one. See, it's kind of hard to take the working memory of a founder and say, “Oh, let me take it and imprint it”—sort of a professional CEO.” It just doesn't work because even for me, I joined the company in ‘92. I was not there in the early eighties, and so to some degree it was a continuous scale that only the founder CEO or the founders see it. And so that's why I think having respect for what founders can do uniquely.And founders having respect for whoever comes next, that they can't be doing exactly the same thing that they did.

<!-- T127P02 -->
**纳德拉（01:16:27）** 所以我觉得，“创始人模式”这个说法很有意思。创始人的文化和个性显然非常强大，应该善加运用、发挥到极致。像我们这样的职业经理人，也可以采用创始人模式，但别以为自己就是创始人。我觉得这其中的微妙区别很重要。

**Satya Nadella (01:16:27)** So that's why I think this founder mold thing is interesting, which is clearly the culture personality of a founder is unbelievable and you use it, maximize it. Then mental model CEOs like us have to also be, you can sort of be in the founder mold but don't think you're a founder, and that nuance I think is an important one.

## 海得拉巴、学校与板球 {#school}

*Hyderabad, school and cricket*

<!-- T128P01 -->
**约翰·科里森（01:17:43）** 最后一个问题。时间差不多了。我们聊了文化和如何建立文化。海得拉巴的水土到底有什么特别之处？你上过的那所学校，尚塔努也在那里读过，阿贾伊·班加也在那里读过。还有不少优秀棋手来自那里，也有不少人来自印度南部。你对当地人才表现如此出众有什么解释吗？

**John Collison (01:17:43)** Last question. We're running up against time. As we talk about cultures and building them, what's going on in the water in Hyderabad where the school that you went to, also Shantanu went there, Ajay Banga went there. Bunch of good chess players are similarly from there and southern India more broadly and things like that. But do you have any theory on the local outperformance?

<!-- T129P01 -->
**纳德拉（01:18:13）** 是啊。我们读的那所高中——说起来，在英伟达和黄仁勋崛起之前……如今黄仁勋一个人，就把我、阿贾伊和尚塔努都比下去了。事实上，宝洁现任 CEO 也毕业于我的高中。[^pg-ceo]

**Satya Nadella (01:18:13)** Yeah. The high school we went to, in fact until I would say Nvidia and Jensen, because Jensen has it now covered for all of us between me and Ajay and Shantanu. In fact, the CEO of Proctor Gamble today is also from my high school.

<!-- T130P01 -->
**约翰·科里森（01:18:32）** 你看，这就是个小圈子。

**John Collison (01:18:32)** See, it's a cabal.

<!-- T131P01 -->
**纳德拉（01:18:38）** 确实有点像个小圈子。我觉得，在海得拉巴长大、七十年代末和八十年代初去那所偏远的学校读书，有件事很特别。我认为那给了我们更大的空间。看看我们每个人，学业当然重要；但说实话，我们几乎每个人在学业之外都有特别擅长的领域。当时在那个国家，这相当罕见。所以我很大程度上把这归功于我的高中，因为我觉得那里给了我们更多空间，让我们去追随后来真正成为热爱的事物，而且有时间慢慢发现它，而不是觉得“嘿，我必须加入某种竞赛”。

**Satya Nadella (01:18:38)** It's kind of a cabal. I would say one of the fascinating things about growing up in Hyderabad and going to that school in the middle of nowhere at that time in the late seventies and the early eighties. I would say, I think it gave us a lot more space. If you look at even each of us, academics was a thing, but quite frankly, we mostly, all of us had things we excelled at a lot of other things beyond academics, in fact. That was a pretty rare thing at that time in that country, and so I attribute it a lot to my high school because I feel that it is a place where it gave us a lot more space and room to follow what really became your passion, but you were able to take your time to discover it. Versus sort of feeling that, hey, I had to join some kind of a race.

<!-- T132P01 -->
**约翰·科里森（01:19:25）** 当时没有那么早就把人引上预设的升学和职业轨道……

**John Collison (01:19:25)** It wasn't as tracked as—

<!-- T133P01 -->
**纳德拉（01:19:26）** 没错。

**Satya Nadella (01:19:26)** That's right.

<!-- T134P01 -->
**约翰·科里森（01:19:28）** 对。你高中时最热衷的是什么？

**John Collison (01:19:28)** Right. What was your passion in high school?

<!-- T135P01 -->
**纳德拉（01:19:29）** 板球。事实上，就是这个。对了，还有塞缪尔·贝克特。

**Satya Nadella (01:19:29)** Cricket, in fact, this by the way. Yeah, Samuel Beckett.

<!-- T136P01 -->
**约翰·科里森（01:19:34）** 是啊，我想听听这个故事。

**John Collison (01:19:34)** Yeah, so I want to know this story.

<!-- T137P01 -->
**纳德拉（01:19:35）** 好。要问有哪位名人参加过职业体育比赛？我想他曾代表都柏林大学打过一两场比赛，也参加过一流板球赛；所以他是唯一一位打过职业板球、又获得诺贝尔奖的人。[^beckett]

**Satya Nadella (01:19:35)** Sure. If you asked the question, who is the one sports person who played professionally? I guess he played one or two matches for I guess the Dublin University, and he played first-class cricket, and so he's the only person who played professional cricket and won a Nobel Prize.

<!-- T138P01 -->
**约翰·科里森（01:19:53）** 真的？这太有意思了。看来什么都能兼得。瞧，这就是那个时代的国际象棋拳击之类的吧。真棒。你当年也差一点，不过那是另一种人生里的你。

**John Collison (01:19:53)** Really? That's really funny. So you can have it all. There you go. The chess boxing of its day or something. That's awesome. Well, you came close, but another life that could have been you.

<!-- T139P01 -->
**纳德拉（01:20:09）** 非常感谢。今天聊得很愉快。

**Satya Nadella (01:20:09)** Thank you so much. It's such a pleasure.

<!-- T140P01 -->
**约翰·科里森（01:20:10）** 谢谢你，萨提亚。

**John Collison (01:20:10)** Thanks Satya.

---

## 译注 {#notes}

[^gpt4o]: 原稿写作“4.0”，主持人自己也带有疑问语气。结合撤下模型后的用户反应，推测指 GPT-4o；[OpenAI 2025 年 8 月 12 日发布记录](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)记载了 4o 回到付费用户模型选择器。正文保留原稿说法，不把推断写成确定的原话。

[^cogs]: 原稿写作“cogs”。结合为任务自动选择模型、权衡成本与能力的语境，此处按 COGS（提供服务的成本）理解，而不是把它译成认知或推理能力。

[^flight-simulator]: 这是访谈当时的说法，不表示永久的平台独占。《Microsoft Flight Simulator 2024》PS5 版已在 [2025 年 9 月的官方公告](https://blog.playstation.com/2025/09/24/microsoft-flight-simulator-2024-soars-onto-ps5-dec-8/)中宣布，正式发行日为 2025 年 12 月 8 日，晚于本期节目发布日期。

[^pg-ceo]: 此处“现任 CEO”的时间表述不够准确：节目发表于 2025 年 11 月 18 日，Shailesh Jejurikar 当时已获任命，但到 2026 年 1 月才接任宝洁 CEO，参见 [宝洁官方履历](https://us.pg.com/leadership-team/shailesh-jejurikar/)。前半句是在调侃黄仁勋与英伟达的成就，不能理解成黄仁勋也毕业于这所高中。

[^beckett]: 都柏林圣三一学院的 [贝克特生平介绍](https://www.tcd.ie/trinitywriters/writers/samuel-beckett/)确认，他在 1925、1926 年参加过两场 first-class cricket，并称他是唯一收入《威斯登板球年鉴》的诺贝尔奖得主。first-class 是正式赛事等级，本身不等于球员具有职业身份；正文的“职业”保留纳德拉原话。
