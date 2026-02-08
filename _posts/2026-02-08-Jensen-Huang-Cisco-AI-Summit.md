---
layout: post
title:  "【酒后真言】AI工厂、物理智能：英伟达CEO黄仁勋与思科CEO Chuck Robbins炉边对话 | 中英文完整版精译"
categories: podcast
tags: thinking
author: LZN
---

_书童按：本篇是英伟达（NVIDIA）CEO黄仁勋（Jensen Huang）于Cisco AI Summit接受思科（Cisco）CEO查克·罗宾斯（Chuck Robbins）炉边对话实录。黄仁勋详细阐述了AI工厂的概念、从显式编程到隐式编程的软件工程范式革命、企业应如何拥抱AI（千花齐放范式）、物理AI的未来、工具使用的重要性、以及为何企业应当建立自己的AI系统以保护最宝贵的IP。对话充满幽默（包括关于COBOL、希伯来语编程和葡萄酒的段子），同时深刻洞察了AI时代的企业战略。Transcript由Youtube通过机器生成，翻译、初稿、校对、排版、审阅均通过Claude Code API实现，文稿质量优秀，信达雅俱备。书童和大家一样，读了一遍，又改动几字，简单标注，仅此而已。特此呈上，以飨诸君。_

![](https://i.imgur.com/T8lX3rQ.png)

**<center>与Jensen Huang的炉边对话</center>**

**<center>Fireside chat with Jensen Huang</center>**

**<center>AI工厂与计算的重塑</center>**

**<center>AI Factories and the Reinvention of Computing</center>**

**[6:14] Chuck Robbins:** [掌声] 我感觉自己像是在上班时间偷喝酒。[笑声] 我们把酒端上来的时候，Jensen提醒我说："你知道这是在直播吧？"[笑声] 嘿，管它呢，反正时间也不早了。好吧，第一原则：不造成伤害。

**[6:14] Chuck Robbins:** [applause] I feel like I'm drinking one's job. [laughter] Jensen reminded me as we brought a glass of wine out here. He said, "You realize you're streaming this, right?" [laughter] Hey, whatever. It's late. Well, so, uh, the first principle is do no harm.

**[6:37] Jensen Huang:** 这怕啥。没错，没错。还要意识到自己有多幸运。对。

**[6:37] Jensen Huang:** Do no harm. Yeah. Yeah. And recognize how blessed you are. Yes.

**[6:42] Chuck Robbins:** 首先，感谢大家坚持到现在，今天真的是超长的一天。我们一大早就开始了，演讲嘉宾一个接一个轮番上阵，中间休息了大约两个半小时，大家又回来了——就为了见他。我从凌晨一点就起来了——而这位先生，[掌声] 这位先生刚结束为期两周的亚洲之行，跑了四五个城市——

**[6:42] Chuck Robbins:** So, uh, first of all, thanks everybody for being here for an incredibly long day. We started this thing early this morning and, uh, we had speaker after speaker after speaker after speaker and then we had about a two and a half hour break and they came back to see you. So, uh, I've been up since 1:00 at— So, this guy, [applause] this guy is on the tail end of a two week trip and four or five different cities in—

**[7:13] Jensen Huang:** 亚洲。一天前还在台湾，昨晚在休斯顿，现在人就在这儿了。[笑声]

**[7:13] Jensen Huang:** Asia. Uh, one day ago was in Taiwan. Last night I was in Houston. Here I am. [laughter]

**[7:18] Chuck Robbins:** 他已经在外面跑了两周，而我们现在[清嗓子]横在他和自家床铺之间——否则他又得睡酒店了。所以呢，我们好好聊一聊，然后——赶紧放他走。你也不需要什么介绍了，感谢你今晚能来，兄弟。我们[清嗓子]真的非常感激。

**[7:18] Chuck Robbins:** But he's been gone two weeks and we're standing [clears throat] between him and his personal bed versus a hotel. So, we're gonna— we're going to have fun and then we're going to— we're going to get him out of here. So, uh, but uh you don't— you don't need much of an introduction, but thank you for being here, man. We [clears throat] really appreciate it.

**[7:36] Jensen Huang:** 感谢我们之间的合作，真的为你们感到骄傲。

**[7:36] Jensen Huang:** Thanks for our partnership and really proud of you guys.

**[7:41] Chuck Robbins:** 好，那我们就从这里聊起。我们已经建立了合作关系，你提出了AI工厂这个完整的概念，我们正在一起推进。虽然在企业端的进展可能不如我们双方所期望的那么快，但能不能先聊聊——在你看来，AI工厂到底是什么？

**[7:41] Chuck Robbins:** So, let's— let's start with uh— let's start with that. We we have had a partnership and you— you introduced this whole concept of AI factories and we're working on this together. It's probably not going as fast as either one of us would like in the enterprise space, but can we start by talking about what— what do you— what is an AI factory to you?

**[8:00] Jensen Huang:** 首先要记住，**我们正在经历六十年来计算领域的首次重塑。**过去是显式编程，对吧？我们编写程序，变量通过API传递，一切都非常明确。而现在，我们正转向隐式编程——你只需告诉计算机你的意图，它就会自行找出解决问题的方法。从显式到隐式，**从通用计算——本质上就是运算——到人工智能，整个计算栈都在被重塑。**人们谈到计算时，会谈到处理层——那正是我们所处的位置。但别忘了计算的完整含义：**有处理，还有存储、网络和安全，所有这些都在被同步重塑。**所以第一点——第一点是我们需要把AI发展到一定水平——这个我们后面会谈到——我们需要把AI发展到真正对人有用的水平。到目前为止，聊天机器人这种东西，你给它一个提示，它想出该告诉你什么，这固然有趣、令人新奇，但谈不上真正有用。

**[8:00] Jensen Huang:** First of all, remember we're reinventing computing for the first time in 60 years. What used to be explicit programming, right? We wrote the programs and the variables that's passed through APIs and are very explicit to implicit programming. You now tell the computer what your intent is and it goes off and it figures out how to solve your problem. So from explicit to implicit, uh, from general purpose computing— basically calculation— to artificial intelligence, the entire computing stack has been reinvented. Now people talk about computing, where the processing layer is, which is where we are, but remember what computing is— there's computing, there's the processing, but there's storage, networking and security. All that is being reinvented as we speak. And so the first part— the first part is we need to develop AI to a level— and we'll talk about that— we need to develop AI to a level that is useful to people. And until now, uh, chatbots, where you give it a prompt and it figures out what to tell you, um, is interesting and curious but not useful.

**[9:24] Chuck Robbins:** 偶尔帮我做完填字游戏倒是挺好使的。

**[9:24] Chuck Robbins:** Helps me finish crossword puzzles sometimes.

**<center>从记忆到推理：智能的演进</center>**

**<center>From Memorization to Reasoning: The Evolution of Intelligence</center>**

**[9:24] Jensen Huang:** 没错。而且只在它已经记住并泛化了的内容上才有用。回到最初——其实也就三年前，ChatGPT横空出世的时候——我们惊叹，天哪，它居然能生成这么多文字，能写出莎士比亚风格的作品。但那一切都基于它所记忆和泛化的内容。然而我们知道，真正的智能在于解决问题。而解决问题，一方面要知道自己不知道什么，另一方面要具备推理能力——如何解决你从未遇到过的问题？**将它拆解成你知道如何轻松解决的基本元素，再通过组合来攻克前所未见的难题；制定一个策略——也就是我们所说的规划——来执行任务；寻求帮助，使用工具，开展研究，诸如此类。这些不正是你们现在在"智能体AI"的语境下频繁听到的核心概念吗？**工具使用、研究、检索增强生成（即基于事实的生成）、记忆——你们在讨论智能体AI时都已经开始接触这些了。但关键是——关键是，要从通用计算的显式编程演进出来——我们过去用Fortran写代码，用C、用C++、用COBOL——

**[9:24] Jensen Huang:** Yes. And, uh, but only only on things that it had memorized and generalized. So if you go back in the beginning of— I mean it's a little— literally only three years ago when ChatGPT emerged, uh, that— that we thought oh my gosh it's able to generate all these words, it's able to create Shakespeare, um, but it's all based on things that it memorized and generalized. And but we know that intelligence is about solving problems and solving problems is partly about knowing what you don't know, uh, partly about reasoning, uh, how to solve a problem you've never seen before. Breaking it down into elements that you know how to solve very easily so that in its composition that you're able to solve problems that you've never seen before, and um, to come up with a strategy— what we call plan— to perform in a task. Ask for help, use tools, do research, so on so forth. These are all fundamental things that now in the phraseology of agentic AI, you've heard, isn't that right? Tool use, research, retrieval augmented generation, which is grounded on facts, memory. These are all things that all of you in the context of talking about agentic AI, uh, you're starting to hear. But the important thing— the important thing is in order to evolve from general purpose computing which is explicit programming— we wrote in Fortran, we wrote in C, we wrote in C++, COBOL—

**[11:12] Chuck Robbins:** 没错，那是好东西。

**[11:12] Chuck Robbins:** That's right, that's good stuff.

**[11:12] Jensen Huang:** 那是好东西，Chuck，那是好东西。

**[11:12] Jensen Huang:** That's good stuff, Chuck, that's good stuff.

**[11:18] Chuck Robbins:** 那是我的后路嘛。

**[11:18] Chuck Robbins:** It's my fallback job.

**[11:18] Jensen Huang:** 确实是好东西。没错，那可是——那可是至今仍然抢手的技能之一。

**[11:18] Jensen Huang:** That's good stuff. Yeah, that's one of those— that's one of those skills that remains valuable.

**[11:25] Chuck Robbins:** 我知道。对，我知道它还很值钱，找上门的offer可不少。

**[11:25] Chuck Robbins:** I know. Yeah, I know that it remains valuable. I've got a lot of offers.

**[11:31] Jensen Huang:** 恐龙嘛，永远有市场。

**[11:31] Jensen Huang:** Dinosaurs are valuable forever.

**[11:36] Chuck Robbins:** 我们刚才不是确认了你比我还老吗。

**[11:36] Chuck Robbins:** We just established that you're older than me.

**[11:36] Jensen Huang:** 我知道。而且我已经是——史前级别的了。[笑声]

**[11:36] Jensen Huang:** I know. And I'm— I'm the prehistoric. [laughter]

**[11:44] Chuck Robbins:** 看着不像，但确实如此。

**[11:44] Chuck Robbins:** It doesn't appear so, but it's true.

**[11:50] Chuck Robbins:** [欢呼与掌声] 好吧，这句相当精彩。

**[11:50] Chuck Robbins:** [cheering and applause] All right, that was pretty good.

**[11:57] Jensen Huang:** 我可能是这个房间里最老的人。

**[11:57] Jensen Huang:** I'm probably the oldest person in this room.

**[12:03] Jensen Huang:** 所以——怎么说——让我们谈一谈——就像当你思考——所以我们在这里。我去找Chuck说，嘿，听着,我们需要重塑计算，Cisco必须成为其中重要的一部分。所以我们有——我们有一个全新的计算堆栈即将推出，Vera Rubin，Cisco将与我们一起推向市场。所以那是计算层，但还有网络层。Cisco将整合我们的AI网络技术，但将其放入Cisco Nexus控制平面，这样——这样从你的角度来看，你将获得AI的所有性能，但在Cisco的可控性、安全性和可管理性中。我们将在安全方面做同样的事情，所以每一个支柱都必须被重塑，以便企业计算可以利用它。但最终——我们会回到这一点，希望如此——你知道，为什么企业AI三年前还没准备好，以及为什么你现在别无选择，只能尽快参与进来。不要落后。我认为——你不必成为第一个利用AI的公司，但不要成为最后一个。

**[12:03] Jensen Huang:** So— how do you— so let's talk a little bit about— like as you— as you think about the— so here we are. I went to Chuck and I say, hey, listen, we need to reinvent computing and Cisco's got to be a big part of it. And so we've got um— we have a whole new computing stack coming out, Vera Rubin, and Cisco is going to be going to market with us on that. And so that— the computing layer, but there's also the networking layer. And Cisco is going to integrate AI networking technology from us but put it into the Cisco Nexus control plane so that— so that from your perspective you're going to get all the performance of AI but in the controllability and security and the manageability of Cisco. We're going to do the same thing with security, and so each one of these pillars has to be reinvented so that enterprise computing could take advantage of it. But ultimately— and we'll come back to this hopefully— you know, why is it that enterprise AI wasn't ready three years ago and why it is that you have no choice but to get engaged as quickly as you can. Don't fall behind. I think— you don't have to be the first company to take advantage of AI but don't be the last.

**<center>千花齐放：企业AI战略</center>**

**<center>Let A Thousand Flowers Bloom: Enterprise AI Strategy</center>**

**[13:17] Chuck Robbins:** 是的。嗯。那么如果你今天是一家企业，你对他们应该采取的第一步、第二步、第三步有什么建议，以开始准备？

**[13:17] Chuck Robbins:** Yeah. Mhm. So if you're an enterprise today, what's your recommendation on the first, second, third step they should take to begin to get ready?

**[13:35] Jensen Huang:** 好吧，我收到像ROI这样的问题——我不会去那里。原因是因为对于所有技术部署，在开始时，很难将新工具、新技术的ROI放入电子表格中。但我会做的是我会去找出什么是最单一的——**我公司的本质是什么？我们公司做的最有影响力的工作是什么？**不要搞乱——不要搞乱外围的东西。我是说，在我们公司，我们就是让千花齐放。我们公司不同AI项目的数量是——它失控了，而且很棒。注意我刚说了什么。它失控了，而且很棒。创新并不总是在控制之中。如果你想要控制，首先，你得去寻求治疗。但其次，这是一种幻觉。你不在控制之中。如果你希望你的公司成功，你不能控制它。你想要影响它，你不能控制它。所以我认为第一，太多公司我听到，他们想要它，他们想要它明确。他们想要具体的。他们想要可证明的ROI。而且，你知道，在开始时展示值得做的事情的价值是困难的。

**[13:35] Jensen Huang:** Well, I get questions like things like ROI and— I wouldn't— I wouldn't go there. And the reason for that is because with all technology deployments in the beginning, it's hard to put into a spreadsheet the ROI of a new tool, a new technology. But what I would do is I would go find out what is the single most— what is the essence of my company? What's the most impactful work that we do in our company? Don't mess around— don't mess around with peripheral stuff. I mean, in our company, we just let a thousand flowers bloom. The number of different AI projects in our company is— it's out of control and it's great. Notice I just said something. It's out of control and it's great. Innovation is not always in control. If you want to be in control, first of all, you got to seek therapy. But second, it's an illusion. You're not in control. If you want your company to succeed, you can't control it. You want to influence it, you can't control it. And so I think number one, too many companies I hear, they want it, they want it explicit. They want it specific. They want demonstrable ROI. And, you know, showing the value of something worth doing in the beginning is hard.

**[15:01] Jensen Huang:** **但我会做的，我会说的是让千花齐放。**让人们实验。让人们安全地实验。我们在公司里实验各种东西。**我们使用Anthropic，我们使用Codex，我们使用Gemini，我们使用一切。当我们的一个团队说我对使用这个AI感兴趣时，我的第一个答案是肯定的。**我问为什么，而不是——为什么然后是。我说是，然后为什么。原因是因为我希望我的公司和我希望我的孩子一样。去探索生活。他们说他们想尝试某事。答案是肯定的。然后他们说为什么？你不会说向我证明。向我证明做这件特定的事情将导致财务成功或某一天的某种幸福。向我证明。在你向我证明之前，我不会让你做。我们在家里从不这样做，但我们在工作中这样做。你知道我在说什么吗？

**[15:01] Jensen Huang:** But what I would do, what I would say is that let a thousand flowers bloom. Let people experiment. Let people experiment safely. And we're experimenting with all kinds of stuff in the company. We use Anthropic, we use Codex, we use Gemini, we use everything. And when one of our group says I'm interested in using this AI, my first answer is yes. And I ask why instead of— why then yes. I say yes, then why. And the reason for that is because I want the same thing for my company that I want for my kids. Go explore life. They say they want to try something. The answer is yes. And then they say how come? You don't go prove it to me. Prove to me that doing this very thing is going to lead to financial success or some happiness someday. Prove to me. And until you prove it to me, I'm not going to let you do it. We never do that at home, but we do it at work. Do you know what I'm saying?

**[16:02] Chuck Robbins:** 是的。

**[16:02] Chuck Robbins:** Yeah.

**[16:02] Jensen Huang:** 这对我来说毫无意义。所以我们对待AI的方式——无论是AI还是之前的互联网或之前的云——就是让千花齐放。然后在某个时刻，你必须用自己的判断来弄清楚何时开始整理花园，因为千花齐放会造成混乱的花园。**但在某个时刻，你必须开始整理以找到最佳方法或最佳平台，这样你就可以把所有的木头放在一支箭后面。**但你不想太早把所有的木头放在一支箭后面。你选错了箭。所以让千花齐放。在某个时刻你整理。所以我还没有开始整理，只是为了说明情况。我到处都有千花齐放。但我鼓励每个人尝试。然而，我确切地知道什么对我们公司最重要。当然我知道。我们公司的本质是什么？我们公司最重要的工作是什么？我确保我有很多专业知识和很多能力专注于使用AI来革新那项工作。

**[16:02] Jensen Huang:** It makes no sense to me. And so the way that we treat AI— and whether it's AI or the internet before or cloud before— just let a thousand flowers bloom. And then at some point, you have to use your own judgment to figure out when to start curating the garden, because a thousand flowers bloom makes for a messy garden. But at some point you have to start curating to find what's the best approach or what's the best platform, so that you could put all your wood behind one arrow. But you don't want to put all your wood behind one arrow too soon. You pick the wrong arrow. So let a thousand flowers bloom. At some point you curate. And so I haven't started curating yet just to put in perspective. I've got a thousand flowers bloom everywhere. But I encourage everybody to try. However, I know exactly what is most important to our company. Of course I do. What is the essence of our company? What are the most important work of our company? And I make sure that I've got a lot of expertise and a lot of capability focused on using AI to revolutionize that work.

**[17:10] Jensen Huang:** 在我们的情况下，**芯片设计、软件工程、系统工程。**注意——你可能注意到我们与Synopsys和Cadence和Siemens合作，今天还有Dassault Systèmes，这样**我们就可以插入我们的技术并注入尽可能多的技术**。无论他们想要什么，无论他们需要什么，我都会提供，这样我就可以革新我们用来设计我们所做的工具。我们到处使用Synopsys。我们到处使用Cadence。我们到处使用Siemens。到处使用Dassault Systèmes。我将确保他们拥有1,000%的任何他们想要的东西，这样我就有必要的工具，这样我就可以创造下一代。所以这告诉你一些关于我对什么对我最重要的态度以及我会做什么来革新我自己的工作。

**[17:10] Jensen Huang:** In our case, chip design, software engineering, system engineering. Notice— you might have noticed that we partnered with Synopsys and Cadence and Siemens and today Dassault Systemes, so that we could insert our technology and infuse as much technology as they want. Whatever they want, whatever they need, I will provide so that I could revolutionize the tools by which we use to design what we do. We use Synopsys everywhere. We use Cadence everywhere. We use Siemens everywhere. Use Dassault Systemes everywhere. I will make sure that they have 1,000% of whatever they want so that I have the tools necessary so I could create the next generation. And so that tells you something about my attitude about what's most important to me and what I would do to revolutionize my own work.

**<center>丰裕世界：从摩尔定律到AI感知</center>**

**<center>The World of Abundance: From Moore's Law to AI Sensibility</center>**

**[18:05] Jensen Huang:** 想想AI做什么。AI降低了智能的成本——或者**创造了智能的丰裕——按数量级计算。**这是另一种说法，我们过去做的需要一个时间单位——现在我们过去需要一年可以现在需要一天。我们过去需要一年可以需要一小时。它可以实时完成。原因是因为我们处在丰裕的世界中。摩尔定律，天哪，那太慢了。那就像蜗牛。记住摩尔定律是每18个月2倍，每5年10倍，每10年100倍。好的。但我们现在在哪里？**每10年一百万倍。**在过去10年中，我们将AI推进得如此之远，以至于工程师说："嘿，你猜怎么着？我们为什么不就在所有世界数据上训练一个AI模型？"他们不是说："让我们只从我的磁盘驱动器收集所有数据。"让我们只是——让我们拉下所有世界数据并让我们训练一个AI模型。这就是丰裕的定义。丰裕的定义是你看一个问题如此之大，你说，你知道什么，我会做这一切。我要治愈每个疾病领域。我不会只做癌症。你在开玩笑吗？那太疯狂了。我们只会做所有人类的痛苦。这就是丰裕。

**[18:05] Jensen Huang:** Think about what AI does. AI reduces the cost of intelligence— or creates the abundance of intelligence— by orders of magnitude. That's another way of saying what we used to do that takes one unit of time— now what we used to take a year could take a day now. What we used to take a year could take an hour. It could be done in real time. And the reason for that is because we are in the world of abundance. Moore's law, goodness gracious, that was slow. That's like snails. Remember Moore's law was two times every 18 months, 10 times every 5 years, 100 times every 10. Okay. But where are we now? A million times every 10 years. In the last 10 years, we advanced AI so far that engineers said, "Hey, guess what? Why don't we just train an AI model on all of the world's data?" They didn't mean, "Let's just collect all the data from my disk drive." Let's just— let's pull down all of the world's data and let's train an AI model. That's the definition of abundance. The definition of abundance is you look at a problem so big and you say, you know what, I'll do it all. I'm going to cure every field of disease. I'm not going to just do cancer. Are you kidding me? That's insane. We'll just do all of human suffering. That's abundance.

**[19:45] Jensen Huang:** **当我现在思考工程，当我思考一个问题时，我只是假设我的技术、我的工具、我的仪器、我的宇宙飞船是无限快的。**我去纽约需要多长时间？我会在一秒钟内到达那里。那么，如果我可以在一秒钟内到达纽约，我会做什么不同的事情？如果过去需要一年的事情现在需要实时，我会做什么不同的事情？如果过去很重的东西现在只是反重力，我会做什么不同的事情？所以，你用这种态度对待一切。**当你用这种态度对待一切时，你正在应用AI感知。**这有意义吗？

**[19:45] Jensen Huang:** When I think about engineering, when I think about a problem these days, I just assume my technology, my tool, my instrument, my spaceship is infinitely fast. How long is it going to take for me to go to New York? I'll be there in a second. So, what would I do different if I can get to New York in a second? What would I do different if something used to take a year and now takes real time? What would I do different if something used to weigh a lot and now it's just anti-gravity? And so, you approach everything with that attitude. When you approach everything with that attitude, you are applying AI sensibility. Does that make sense?

**[20:35] Jensen Huang:** 例如，我们正在与许多公司合作，其中图形分析、依赖关系、关系和依赖关系——你知道这些图形，它们有这么多边，这么多节点和边，数万亿个。在过去，你会处理一个图形，它的小片段。现在，只给我整个图形。它有多大？我不在乎。这种感知正在到处应用。如果速度根本不重要。你在光速。如果质量——你在零重量，零重力。如果你没有应用那种逻辑，如果过去对你来说非常困难的事情你说，"啊，没关系"——**如果你没有应用那种逻辑，你做错了。现在想象你将那种逻辑、那种感知应用到你公司最困难的问题上。这就是你将如何推动指针。**这就是他们所有人的想法。现在那些——如果你没有那样思考，只是——你所要做的就是——只是想象你的竞争对手那样思考。如果你没有那样思考，只是想象一个即将成立的公司那样思考。它改变了一切。所以我会去找你公司最有影响力的工作在哪里。对它应用无穷大。对它应用零。对它应用光速。然后问Chuck如何实现。[笑声]

**[20:35] Jensen Huang:** For example, there are many companies that we're working with where the graph analytics, the dependency, the relationships and dependencies— you know these graphs, they have so many edges, so many nodes and edges, trillions of them. Back in the old days, you would process a graph, small pieces of it. These days, just give me the whole graph. How big is it? I don't care. That sensibility is being applied everywhere. If you're not applying that sensibility, you're doing it wrong. If speed matters, not at all. You're at the speed of light. If mass— you're at zero weight, zero gravity. If you're not applying that logic, if something is not insanely hard to you in the past and you go, "Ah, doesn't matter"— if you're not applying that logic, you're not doing it right. Now imagine you apply that logic, that sensibility to the hardest problems in your company. That's how you're going to move the needle. And that's how they all think. Now the people who are— if you're not thinking that way, just— all you have to do— just imagine your competitors thinking that way. If you're not thinking that way, just imagine a company who is about to get founded is thinking that way. It changes everything. And so I would go find where are the most impactful work in your company. Apply infinity to it. Apply zero to it. Apply the speed of light to it. And then ask Chuck how to make that happen. [laughter]

**<center>从预录到生成：软件的范式转变</center>**

**<center>From Pre-recorded to Generative: The Paradigm Shift in Software</center>**

**[22:10] Chuck Robbins:** 不，让我们谈谈如何实现。所以你有这个类比——

**[22:10] Chuck Robbins:** No, let's talk about how to make that happen. So you have this analogy of—

**[22:10] Jensen Huang:** 就给我打电话。

**[22:10] Jensen Huang:** Just call me.

**[22:10] Chuck Robbins:** 我们会打给你。我们会一起做。

**[22:10] Chuck Robbins:** We'll call you. We'll do it together.

**[22:16] Jensen Huang:** 我们会一起做。

**[22:16] Jensen Huang:** We'll do it together.

**[22:16] Chuck Robbins:** 你有这个类比——这个五层蛋糕——因为每个人都在谈论基础设施、模型、应用程序——我是说，我该如何着手？谈谈这一点。

**[22:16] Chuck Robbins:** You have this analogy— this five layer cake— because everybody's talking about infrastructure, models, apps— I mean, how do I go about it? Talk about that a little bit.

**[22:24] Jensen Huang:** 好吧，成功人士做的事情之一就是他们推理这里正在发生什么。所以大约15年前，一个算法能够——用两个工程师——解决一个计算机视觉问题。计算机视觉基本上是智能的第一部分——感知。**智能是感知、推理、规划。**感知——我是什么？正在发生什么？我的背景是什么？推理——我如何推理——我如何将其与我的目标进行比较？然后第三，想出一个计划来解决那个——来实现那个。所以——你知道，例如，战斗机问题——感知、定位，然后行动。所以智能是关于这三件事。没有感知，你不能有第二和第三部分。没有理解背景，你无法弄清楚该做什么。背景是高度多模态的。有时是PDF，有时是电子表格。有时是信息。有时只是感官和气味。我们在哪里？我们在这里做什么？谁是观众？等等。阅读房间。所以那是关于感知的。

**[22:24] Jensen Huang:** Well, one of the things that successful people do is they reason about what is happening here. So almost 15 years ago, an algorithm was able to— with two engineers— solve a computer vision problem. Computer vision is basically the first part of intelligence— perception. Intelligence is perception, reasoning, planning. Perception— what am I? What's going on? What's my context? Reasoning— how do I reason about— how do I compare this to my goals? And then three, come up with a plan to solve that— to achieve that. And so— you know, for example, the jet fighter problem— perception, localization, and then action. And so intelligence is about those three things. You can't have the second and third part without perception. You can't figure out what to do without understanding context. And context is highly multimodal. Sometimes it's a PDF, sometimes it's a spreadsheet. Sometimes it's information. Sometimes just senses and smells. Where are we? What are we doing here? Who's the audience? So on and so forth. Reading the room. And so that's about perception.

**[28:20] Jensen Huang:** 简单地说，Chuck所说的是我们来自一个一切都是预录的世界。Chuck工作的软件。

**[28:20] Jensen Huang:** Simplistically, what Chuck is saying is that we came from a world where everything was pre-recorded. The software that Chuck worked on.

**[28:36] Chuck Robbins:** 真的很好的东西。

**[28:36] Chuck Robbins:** Really good stuff.

**[28:41] Jensen Huang:** 它运行了很长时间。只是为了记录，它确实是用希伯来语描述的。[笑声]

**[28:41] Jensen Huang:** It ran a very long time. Just for the record, it was indeed described in the Hebrew. [laughter]

**[28:57] Chuck Robbins:** 这是真的。那是另一种技能。我是说，房间里唯一知道希伯来语COBOL的人。

**[28:57] Chuck Robbins:** That is true. That was another skill. I mean, the only person in the room that knows Hebrew COBOL.

**[29:05] Jensen Huang:** [笑声] 总之——那是预录的。我们设计——我们描述我们的算法来描述我们的想法，然后我们放入与之一起的数据。一切都是预录的。过去软件是预录的原因是因为它装在CD-ROM中。不是吗？

**[29:05] Jensen Huang:** [laughter] Anyways— that was pre-recorded. We engineered— we described our algorithms to describe our thoughts and then we put data that goes along with it. Everything is pre-recorded. The reason why software in the past was pre-recorded is because it came in a CD-ROM. Isn't that right?

**[29:24] Chuck Robbins:** 是的。

**[29:24] Chuck Robbins:** Yes.

**[29:24] Jensen Huang:** 它是预录的。好的。现在什么是软件？因为它是上下文的、动态的，每个上下文都不同，每次使用软件的每个人都不同，每个提示都不同，你给它的前导，你给它的先验，上下文都不同。软件的每个单一实例都不同，这就是**为什么过去必要的计算量——这是预录的——称为基于检索。你所要做的就是检查自己。当你使用手机时，你触摸某物，它去并检索一些软件、一些文件、一些图像并将其带给你。在未来，一切都将是生成的，就像现在正在发生的一样。这次对话以前从未发生过。概念以前存在过。先验以前存在过，但这个序列中的每一个词以前从未发生过。**原因显然是我们喝了四杯酒，COBOL和希伯来语从未从——

**[29:24] Jensen Huang:** It was pre-recorded. Okay. What is software now? Because it's contextual, dynamic, and every context is different and every time everybody who uses the software is different and every prompt is different and the precursor you give it, the priors you give it, the context is different. Every single instance of the software is different, which is the reason why the amount of computation necessary in the past— which is pre-recorded— is called retrieval-based. All you have to do is check yourself. When you use your phone you touch something, it went and retrieved some software, some files, some images and brought it to you. In the future, everything is gonna be generative just like is happening right now. This conversation has never happened before. The concepts existed before. The priors existed before, but every single word in this sequence has never happened before. And the reason for that is obviously we're four wines in, COBOL and Hebrew have never come out of the—

**[30:43] Chuck Robbins:** 冷萃咖啡。是的。COBOL，希伯来语。不。谢天谢地这不是在校园或正在流媒体。

**[30:43] Chuck Robbins:** Cold brew. Yes. COBOL, Hebrew. No. Thank goodness this is not on campus or being streamed.

**[30:57] Jensen Huang:** 是的。是的。好吧。让我们——你明白我在说什么吗？所以结果——

**[30:57] Jensen Huang:** Yeah. Yeah. All right. Let's— Do you understand what I'm saying? And so as a result—

**[31:02] Chuck Robbins:** 你明白你在说什么吗？[笑声]

**[31:02] Chuck Robbins:** Do you understand what you're saying? [laughter]

**[31:09] Jensen Huang:** Chuck今天到目前为止喂我的唯一东西是四杯酒。

**[31:09] Jensen Huang:** The only thing that Chuck has fed me today so far is four glasses of wine.

**[31:14] Chuck Robbins:** 公平地说，我只喂了你——我喂了你其中一杯。你从自助餐拿了另外三杯。

**[31:14] Chuck Robbins:** And to be fair, I only fed you— I fed you one of them. You took the other three off the buffet.

**[31:19] Jensen Huang:** 我盯着食物看。我想，"我太饿了。我盯着食物看。"它永远离我大约40英尺。

**[31:19] Jensen Huang:** I was eyeing the food. I was like, "I'm so hungry. I'm eyeing the food." It was forever about 40 feet away from me.

**[31:28] Chuck Robbins:** 那是因为你在拍照。

**[31:28] Chuck Robbins:** It's cuz you were taking photos.

**[31:33] Jensen Huang:** 但它是——我想，它太近了。它太近了。[笑声] 我实际上有一次向食物倾斜，但我又被推回来了。[笑声]

**[31:33] Jensen Huang:** But it was— I was like, it was so close. It was so close. [laughter] And I actually leaned towards the food one time, but I was pushed back again. [laughter]

**[31:39] Chuck Robbins:** 你知道发生了什么吗？你的团队实际上提前告诉我们，**如果你喝了三杯酒，他是最佳状态。如果你喝了第四杯，那将是不可思议的。这是次优的。**

**[31:39] Chuck Robbins:** You know what happened? Your team actually told us ahead of time, if you get three glasses of wine in, he's optimal. If you get the fourth one in, it's going to be incredible. This is suboptimal.

**<center>应用技术：AI的最重要部分</center>**

**<center>Applying Technology: The Most Important Part of AI</center>**

**[31:57] Jensen Huang:** 所以总之，总之，总之，听着，听着，听着，听着。那么什么是AI？

**[31:57] Jensen Huang:** So anyways, anyways, anyways, listen, listen, listen, listen. So what is AI?

**[32:09] Jensen Huang:** 我们必须留下一些智慧。我们能再来一杯酒吗？这不只是Dave Chappelle的东西。

**[32:09] Jensen Huang:** We have to leave some wisdom behind. Can we get another glass of wine, please? This is not just Dave Chappelle stuff.

**[32:21] Chuck Robbins:** 好的，让我们谈谈别的。让我们谈谈另一件事。

**[32:21] Chuck Robbins:** Okay, let's talk about something. Let's talk about one other thing.

**[32:21] Jensen Huang:** 能源。芯片。

**[32:21] Jensen Huang:** Energy. Chips.

**[32:26] Chuck Robbins:** 能源听起来不错。

**[32:26] Chuck Robbins:** Energy sounds good.

**[32:26] Jensen Huang:** 能源、芯片、基础设施，包括硬件和软件。然后是AI模型。但**AI最重要的部分是应用。**每个国家、每个公司，下面的所有层都只是基础设施的东西。你需要做的是应用技术。看在上帝的份上，应用技术。使用AI的公司不会陷入危险。**你不会因为AI失去工作。你会因为使用AI的人失去工作。**所以，开始吧。这是最重要的事情。

**[32:26] Jensen Huang:** Energy, chips, infrastructure, both hardware and software. Then the AI model. But the most important part of AI is applications. Every single country, every single company, all that layer underneath is just infrastructural stuff. What you need to do is apply the technology. For God's sakes, apply the technology. A company that uses AI will not be in peril. You're not going to lose your job to AI. You're going to lose your job to someone who uses AI. So, get to it. That's the most important thing.

**[33:03] Chuck Robbins:** 是的。

**[33:03] Chuck Robbins:** Yeah.

**[33:03] Jensen Huang:** 并尽快打电话给Chuck。

**[33:03] Jensen Huang:** And call Chuck as soon as possible.

**[33:09] Chuck Robbins:** 你打给我,我会打给他。是的。明白了。所以，我们没有很多时间，所以我不确定——

**[33:09] Chuck Robbins:** You call me, I'll call him. Yeah. Got it. So, we don't have a lot of time, so I'm not sure—

**[33:09] Jensen Huang:** 我们有世界上所有的时间。是吗？

**[33:09] Jensen Huang:** We got all the time in the world. Do we?

**[33:15] Chuck Robbins:** 多少？

**[33:15] Chuck Robbins:** How much?

**[33:15] Jensen Huang:** 看，看，Chuck——Chuck，就像他跑。他按时间表建设。我甚至不戴手表。看那个。看那个。Chuck，我把你拿在这里。

**[33:15] Jensen Huang:** Look, look, Chuck— Chuck, like he runs. He builds on the clock. I don't even wear a watch. Look at that. Look at that. Chuck, I got you right here.

**[33:28] Chuck Robbins:** 是的。是的。我们做得很好。

**[33:28] Chuck Robbins:** Yeah. Yeah. We're doing great.

**[33:28] Jensen Huang:** 你按时间表向人们收费。

**[33:28] Jensen Huang:** You build people on the clock.

**[33:33] Chuck Robbins:** 哦，是的。不是我。

**[33:33] Chuck Robbins:** Oh, yeah. Not me.

**[33:33] Jensen Huang:** 在价值交付之前我不会离开。[掌声]

**[33:33] Jensen Huang:** I'm not leaving until value's delivered. [applause]

**[33:42] Chuck Robbins:** 看，如果需要整晚，我不会——嘿，看，我要折磨你们所有人直到Jensen——这就是为什么像我这样的人需要手表。[笑声] 好吧。

**[33:42] Chuck Robbins:** See, if it takes all night, I'm not— Hey, look, I'm going to torture all of you until Jensen— That's why guys like me need a watch. [laughter] All right.

**[33:54] Jensen Huang:** 直到你能说你学到了什么，你将被困在这里。是的。

**[33:54] Jensen Huang:** Until you could say that you learned something, you are going to be trapped in here. Yeah.

**<center>物理AI：工具使用的未来</center>**

**<center>Physical AI: The Future of Tool Use</center>**

**[34:00] Chuck Robbins:** 我们要折磨每个人直到价值被交付。我确实检查了——还有更多酒。嗯，你能给我们你对物理AI的第一想法吗？

**[34:00] Chuck Robbins:** We're going to torture everybody until value is delivered. I did check— there is more wine. Um, can you just give us your top of mind on physical AI?

**[34:13] Jensen Huang:** 记住什么是软件？软件是一个工具。有一种观念认为工具行业正在衰落并将被AI取代。**你可以看出因为有一大堆软件公司的股价承受很大压力，因为不知何故AI将取代它们。这是世界上最不合逻辑的事情，时间会证明自己。**让我们给自己终极思想实验。假设我们是终极AI——人工通用机器人。终极AI——我们的物理版本。你当然可以解决任何问题，因为你是类人的。你可以做事情。如果你是人类机器人，你会使用螺丝刀还是发明新的螺丝刀？我只会使用一个。你会使用锤子还是发明新锤子？你会使用电锯还是发明新电锯？首先，理想情况下他们根本不使用它。但你明白我在说什么吗？**如果你是人类机器人，人工通用机器人，你会使用工具还是重新发明工具？答案显然是使用工具。**

**[34:13] Jensen Huang:** Remember what software is? Software is a tool. There's this notion that the tool industry is in decline and will be replaced by AI. You could tell because there's a whole bunch of software companies whose stock prices are under a lot of pressure because somehow AI is going to replace them. It is the most illogical thing in the world and time will prove itself. Let's give ourselves the ultimate thought experiment. Suppose we are the ultimate AI— artificial general robotics. The ultimate AI— the physical version of us. You could of course solve any problem because you're humanoid. You could do things. If you were a human robot, would you use a screwdriver or invent a new screwdriver? I would just use one. Would you use a hammer or invent a new hammer? Would you use a chainsaw or invent a new chainsaw? First of all, ideally they don't use it at all. But do you understand what I'm saying? If you were a human robot, artificial general robotics, would you use tools or reinvent tools? The answer obviously is to use tools.

**[35:36] Jensen Huang:** 所以现在做数字版本。如果你是人工通用智能，你会使用像ServiceNow和SAP和Cadence和Synopsys这样的工具还是你会重新发明计算器？当然，你只会使用计算器。这就是为什么AI最新突破是什么？工具使用。因为工具被设计为明确的。我们世界中有许多问题，其中F等于MA。请你能不能不要想出另一个版本？[笑声] F=MA不是有点MA。它就是[清嗓子] MA。哦，V等于IR。它不是有点IR。不是大约IR，统计IR——它就是IR。你明白我在说什么吗？所以我认为我们希望人工通用机器人、人工通用智能使用工具。

**[35:36] Jensen Huang:** And so now do the digital version of that. If you were an artificial general intelligence, would you use the tools like ServiceNow and SAP and Cadence and Synopsys or would you reinvent a calculator? Of course, you would just use a calculator. That's the reason why the latest breakthroughs in AI is what? Tool use. Because the tools are designed to be explicit. There are many problems in our world where F equals MA. Please could you please not come up with another version? [laughter] F=MA is not kind of MA. It's just [clears throat] MA. Oh, V equals IR. It's not kind of IR. Not approximately IR, statistically IR— it is IR. Do you understand what I'm saying? And so I think we want the artificial general robotics, artificial general intelligence to use tools.

**[36:47] Jensen Huang:** 好吧，这就是大想法。我认为在下一代物理AI中，我们将拥有理解物理世界、理解因果关系的AI。如果我把这个翻倒，它会把所有那个翻倒。他们理解多米诺骨牌的概念。只是多米诺骨牌的概念——注意，一个孩子理解如果你把那个翻倒——多米诺骨牌的概念是极其深刻。因果关系、接触、重力、质量，所有这些都集成到多米诺骨牌中。翻倒多米诺骨牌。你可以有一个小小的多米诺骨牌，翻倒一个更大的多米诺骨牌，翻倒一个更大的多米诺骨牌，翻倒一个更大的多米诺骨牌，直到另一边有一吨——一个孩子对那个概念没有问题。大型语言模型将完全不知道。所以我们必须教导——我们必须创造一种新型的物理AI。

**[36:47] Jensen Huang:** Well, that's the big idea. I think that in the next generation of physical AI, we're going to have AIs that understand the physical world, understand causality. If I tip this over, it's going to tip all of that over. They understand the concept of a domino. Just the concept of a domino— notice, a child understands if you tip that over— the concept of the domino is extremely— it's like deeply profound. Causality, contact, gravity, mass, all of that is integrated into a domino. Tipping dominoes over. The idea that you could have a little tiny domino, tip a larger domino, tip a larger domino, tip a larger domino to the point where there's a ton on the other side— a child has no trouble with that concept. A large language model will have no idea. And so we have to teach— we have to create a new type of physical AI.

**<center>从工具到劳动：百倍市场机会</center>**

**<center>From Tools to Labor: The 100x Market Opportunity</center>**

**[37:48] Jensen Huang:** 好吧，机会是什么？到目前为止，Chuck和我所在的行业是关于创造工具的。我们一直在螺丝刀锤子行业。我们的整个生活都是关于创造螺丝刀和锤子的。这是历史上第一次，我们将创造人们所说的劳动力，增强劳动。给你一个例子。什么是自动驾驶汽车？**什么是数字司机？数字司机的价值是多少？很多。比汽车多得多。原因是因为在数字司机的生命周期中，数字司机的经济学比汽车多得多。**

**[37:48] Jensen Huang:** Well, what's the opportunity? So far, the industry that Chuck and I have been part of is about creating tools. We have been in the screwdriver hammer business. Our entire life has been about creating screwdrivers and hammers. For the first time in history, we are going to create what people call labor, but augmented labor. Give you an example. What is a self-driving car? What's a digital chauffeur? What's a digital chauffeur valued at? A lot. A lot more than the car. And the reason for that is because in the lifetime of the digital chauffeur, the economics of the digital chauffeur is a lot more than the car.

**[38:33] Jensen Huang:** 这是第一次，我们暴露于大100倍的TAM。字面上在数学上是真的。**IT行业大约是一万亿美元，对吧？或者差不多正负几个。然而世界经济大约是一百万亿美元。这是第一次，我们将暴露于所有那个（数字）。**所以情况是你们所有人——今天这个房间里的每个人——你们有机会应用这项技术成为一家技术公司。

**[38:33] Jensen Huang:** For the very first time, we are exposed to a TAM that is 100 times larger. Literally mathematically true. The IT industry is about a trillion dollars, right? Or so, plus or minus a couple. And yet the economy of the world is about a hundred trillion dollars. For the very first time, we're going to be exposed to all of that. So it is the case that all of you— everybody in this room today— you have the opportunity to apply this technology to become a technology company.

**[39:18] Jensen Huang:** 让我给你一些例子。我真的相信——尽管我——看，**我爱迪士尼，我喜欢与迪士尼合作。我很确定他们宁愿成为Netflix。我爱梅赛德斯。我坐梅赛德斯来的。我确信他们宁愿成为特斯拉。我爱沃尔玛。我确信他们宁愿成为亚马逊。**你们到目前为止同意吗？我是三中三吗？你们所有人都是那样。

**[39:18] Jensen Huang:** Let me give you some examples. I really believe— as much as I— look, I love Disney and I love working with Disney. I'm pretty sure they'd rather be Netflix. I love Mercedes. I came in a Mercedes. I am certain they'd rather be Tesla. I love Walmart. I am certain they'd rather be Amazon. Do you guys agree so far? Am I three for three? All of you are that way.

**[39:50] Jensen Huang:** 我相信我们有机会帮助将每一家公司转变为技术公司。技术第一。技术是你的超能力，领域是你的应用，而不是相反——领域是你是谁，你在寻求技术。**原因是因为技术优先的公司，你在处理电子，而不是原子。电子，有更多的它们。原子，你受质量限制，这就是为什么当他们从CD-ROM转到电子时，公司的价值爆炸了一千倍。你需要像我们一样，成为电子公司、电子公司，这是说技术公司的另一种方式。所以我认为你的机会在这里。**

**[39:50] Jensen Huang:** I believe that we have an opportunity to help transform every single company into a technology company. Technology first. Technology is your superpower and the domain is your application, versus the other way— which is the domain is who you are and you're seeking for technology. And the reason that's so is because companies who are technology first, you're dealing with electrons, not atoms. And electrons, there's a lot more of them. Atoms, you're limited by mass, which is the reason why the moment they went from CD-ROMs to electrons, the value of the company exploded by a thousand times. You need to be like us, an electronics company, electron company, which is another way of saying a technology company. And so I think the opportunity for you is here.

**<center>隐式编程：领域专业知识的力量</center>**

**<center>Implicit Programming: The Power of Domain Expertise</center>**

**[41:05] Jensen Huang:** 思考这一点的另一种方式是AI——我们刚才说过。甚至Chuck，他只知道如何用希伯来语编程，

**[41:05] Jensen Huang:** Another way to think about that is AI— and we just said it earlier. Even Chuck, who only knows how to program in Hebrew,

**[41:12] Chuck Robbins:** [笑声] 这是一种天赋。

**[41:12] Chuck Robbins:** [laughter] It's a gift.

**[41:18] Jensen Huang:** 他的工具选择是从右到左。[笑声]

**[41:18] Jensen Huang:** His instrument choice is a right to left. [laughter]

**[41:32] Chuck Robbins:** 因为你知道否则会弄脏。这实际上相当聪明。

**[41:32] Chuck Robbins:** Because as you know it smears otherwise. It is pretty smart actually.

**[41:38] Jensen Huang:** 聪明的人做聪明的事情。所以美好的事情是，你知道世界的编程语言——对于你们所有的公司，你们有点觉得，哦我的天，软件不是我们的强项。但**知识、直觉、领域专业知识是你的强项**。好吧，你现在第一次可以用你的语言向计算机准确解释你想要什么。你记得我们从哪里开始——从显式编程到隐式编程？**这是历史上第一次，你可以隐式地编程计算机。只要告诉它你想要什么。告诉它你的意思，计算机会写代码，因为事实证明编码只是打字。**事实证明打字是一种商品。这就是你的大机会。你们所有人都可以被提升到你以前受限的原子限制之上。你们所有人都可以逃脱这个限制——我们没有足够的软件工程师——因为事实证明打字是一种商品。你们所有人都有非常有价值的东西，那就是领域专业知识——理解客户，理解问题。这就是最终价值。这就是最终价值——理解意图。

**[41:38] Jensen Huang:** Smart people do smart things. And so the beautiful thing is that as you know the programming language of the world— and for all of your companies you kind of feel like, oh my gosh, software is not our strength. But knowledge, intuition, domain expertise is your strength. Well, you now for the first time can explain exactly what you want to a computer in your language. Do you remember where we started— from explicit programming to implicit programming? For first time in history, you could program a computer implicitly. Just tell it what you want. Tell it what you mean and the computer will write the code because coding as it turns out is just typing. And typing as it turns out is a commodity. And that's the great opportunity for you. All of you could be levitated above the atomic limitations that you were limited by before. All of you could escape from this limitation— we don't have enough software engineers— because as it turns out typing is a commodity. And all of you have something of great value which is domain expertise— to understand the customer, understand the problem. And that is the ultimate value. That is the ultimate value— to understand the intent.

**[43:04] Jensen Huang:** 你知道，当你从大学毕业时，你可以是一个超级程序员，但你不知道客户想要什么。你不知道要解决什么问题。但这就是你们所有人知道的。你知道客户想要什么。你知道要解决什么问题。编码部分很容易。**只要告诉AI去做。所以这就是你的超能力。**所以Chuck和我在这里帮助你做到这一点。那个结束语是在我喝了五杯酒的情况下完成的。[笑声]

**[43:04] Jensen Huang:** You know, when you graduate from college, you could be a super programmer, but you have no idea what customers want. You have no idea what problems to solve. But that's what all of you know. You know what customers want. You know what problems to solve. The coding part of it is easy. Just tell the AI to do it. And so that's your superpower. So Chuck and I are here to enable you to do that. That closing was done with five glasses of wine in me. [laughter]

**[43:49] Chuck Robbins:** 所以，嘿，听着——这确实是一个奇迹——这是一个在桌子上工作的人——人工智能的真实代表。[掌声]

**[43:49] Chuck Robbins:** So, hey, listen— it's a miracle indeed— this is somebody who works off— a table— true representation of artificial intelligence. [applause]

**[44:02] Jensen Huang:** 也许那是增强的。我只想告诉你，与你们所有人合作是一种巨大的乐趣。正如你所知，Cisco在计算重塑的两个非常重要的支柱上拥有极端的专业知识。没有Cisco，就没有现代计算。其中一个当然是网络，另一个是安全。这两个支柱都在AI世界中被重塑了。我们非常了解的部分——即计算部分——在很多方面是一种商品，Cisco知道的东西是深刻有价值的。在我们两个之间，我们将很高兴帮助你们所有人参与AI世界。

**[44:02] Jensen Huang:** Maybe that's enhanced. I just want to tell you that it's a great pleasure working with all of you. Cisco as you know has extreme expertise and two very important pillars of the reinvention of computing. Without Cisco, there is no modern computing. One of them is of course networking and the other one's security. And both of those pillars have been reinvented in the world of AI. And the part that we know very well— which is the computing part of it— in a lot of ways is a commodity, and the stuff that Cisco knows is deeply valuable. And between the two of us, we'll be delighted to help all of you engage the world of AI.

**<center>建造你自己的AI：问题比答案更宝贵</center>**

**<center>Build Your Own AI: Questions Are More Valuable Than Answers</center>**

**[44:51] Jensen Huang:** 然后有人早些时候问我——我认为值得重复。有人早些时候问我，你应该只是租用云还是你应该甚至努力建造你自己的计算机？这是我会告诉你的。我会建议你做我建议我的孩子做的完全相同的事情。**建造一台计算机。**即使PC无处不在，即使它成熟了，即使技术发展了，看在上帝的份上，建造一个。知道为什么所有组件都存在。如果你要进入汽车、汽车行业、运输行业的世界，不要只使用Uber。**看在上帝的份上，抬起引擎盖，换机油，理解所有组件。看在上帝的份上，理解它是如何工作的。这至关重要。这项技术对未来如此重要。你必须对它有一些触觉理解。抬起引擎盖，换机油，建造一些东西。不必很大。建造一些东西。**

**[44:51] Jensen Huang:** And then somebody asked me earlier— I think it's worth repeating. Somebody asked me earlier, should you just rent the cloud or should you even make the effort to build your own computer? Here's what I would tell you. I would advise you to do exactly the same thing I advise my children. Build a computer. Even though the PC is everywhere, even though it's mature, even though technology is developed, for God's sakes, build one. Know why all the components exist. If you were to be in the world of automotive, the automobile industry, the transportation industry, don't just use Uber. For God's sakes, lift the hood, change the oil, understand all the components. For God's sakes, understand how it works. It is vital. This technology is so important to the future. You must have some tactile understanding of it. Lift the hood, change the oil, build something. Doesn't have to be large. Build something.

**[46:05] Jensen Huang:** 你可能发现你实际上非常擅长它。你可能发现你需要那种技能。你可能发现世界不是全部租用与全部拥有——**你想要租用一些并拥有一些，因为你公司的某些部分应该建立在本地。例如，主权和专有信息**——只是，你不愿意与每个人分享你的问题。你知道，当你去看治疗师时，你不想让问题在线。[笑声] 你知道我在说什么吗？

**[46:05] Jensen Huang:** You might discover you're actually insanely good at it. You might discover that you need that skill. You might discover that the world is not about all rent versus all own— that you want to rent some and own some because some part of your company should be built on prem. For example, sovereignty and proprietary information— and just, you're not comfortable sharing your questions with everybody. You know, when you go see a therapist, you don't want the questions to be online. [laughter] You know what I'm saying?

**[46:52] Chuck Robbins:** 好的，我只是——我在想象这个。[笑声] 假设地。

**[46:52] Chuck Robbins:** Okay, I'm just— I'm imagining this one. [laughter] Hypothetically.

**[46:57] Jensen Huang:** 所以，假设地，我认为你有很多问题，你有很多对话，很多对话，很多不确定性应该保持私密。公司也是一样。我不自信。我对**将Nvidia的所有对话放在云中不安全，这就是为什么我们在本地建造它。**我们在本地建造了一个超级AI系统，因为我只是不自信分享那个对话。因为事实证明，**对我来说最有价值的IP不是我的答案。是我的问题。你跟上我了吗？我的问题是对我来说最有价值的IP。我在思考的是我的问题。答案是一种商品。如果我只是知道要问什么——我在识别什么是重要的。我不想让人们知道我认为什么是重要的。我希望那在一个小房间里。我希望那在本地。我希望那是我自己。我想创造我自己的AI。**

**[46:57] Jensen Huang:** And so, hypothetically, I think that a lot of questions you have, a lot of conversations you have, a lot of dialogue, a lot of uncertainties you have ought to be kept private. Companies are the same way. I am not confident. I am not secure about putting all of Nvidia's conversations in the cloud, which is the reason why we built it locally. We've built a super AI system locally because I'm just not confident to share that conversation. Because as it turns out, the most valuable IP to me is not my answers. It's my questions. Are you following me? My questions are the most valuable IP to me. What I'm thinking about are my questions. The answers are a commodity. If I simply knew what to ask— I'm identifying what's important. And I don't want people to know what I think is important. And I want that to be in a small room. I want that to be on prem. I want that to be by myself. And I want to create my own AI.

**<center>AI在环中：未来公司的知识产权</center>**

**<center>AI in the Loop: The Intellectual Property of Future Companies</center>**

**[48:08] Jensen Huang:** 然后最后一个想法，因为已经11点了。[笑声] 最后一个想法。有一个想法认为AI应该总是有人在环中。这正好是错误的想法。它是向后的。每个公司都应该有AI在环中。原因是因为我们希望我们的公司每天都变得更好、更有价值、更有知识。我们永远不想倒退。我们永远不想变平。我们永远不想从头开始。这意味着如果我们有AI在环中，它将捕获我们的生活经验。未来每个员工都将有AI，很多AI在环中。这些AI将成为公司的知识产权。这就是未来公司。因此，我认为你们所有人立即打电话给Chuck是明智的。

**[48:08] Jensen Huang:** And then one last thought since it's already 11 o'clock. [laughter] One last thought. There was an idea that AI should always have human in the loop. It's exactly the wrong idea. It's backwards. Every company should have AI in the loop. And the reason for that is because we want our company to be better and more valuable and more knowledgeable every single day. We never want to go backwards. We never want to go flat. We never want to start from the beginning. Which means that if we have AI in the loop, it will capture our life experience. Every single employee in the future will have AI, lots of AIs in the loop. And those AIs will become the company's intellectual property. That's the future company. And therefore, I think it sensible for all of you to call Chuck immediately.

**[49:13] Chuck Robbins:** 我打给了Jensen。[笑声]

**[49:13] Chuck Robbins:** I called Jensen. [laughter]

**[49:20] Jensen Huang:** 总之，这是我的结束语。

**[49:20] Jensen Huang:** Anyhow, that's my closing.

**[49:25] Chuck Robbins:** 听着——在路上两周。Jensen飞到这里，在他第一次长时间睡在自己床上之前，与我们度过了他的最后一晚、最后一个晚上。我们永远感激。感谢你来到这里。谢谢。

**[49:25] Chuck Robbins:** Listen— two weeks on the road. Jensen flew here, spent his last night, last evening with us before he gets to sleep in his bed for the first time in a long time. We're forever grateful. Appreciate you being here. Thank you.

**[49:36] Jensen Huang:** 非常感谢。而且——[掌声] 谢谢，伙计。而且——[掌声] 从我的眼角，有所有这些串烧。有人还在那里。Fritos的袋子在哪里？[笑声]

**[49:36] Jensen Huang:** Thank you very much. And— [applause] Thank you, man. And— [applause] from the corner of my eye, there were all these skewers. Somebody was still there. Where's the bag of Fritos? [laughter]

**[49:58] Chuck Robbins:** 好吧，我们走吧。谢谢。谢谢大家。

**[49:58] Chuck Robbins:** All right, let's go. Thank you. Thank you, everybody.
