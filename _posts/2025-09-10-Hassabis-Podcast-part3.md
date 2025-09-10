---
layout: post
title:  "化学诺奖得主、Deepmind创始人哈萨比斯2025年7月播客实录 | 中英文完整版精译（下）"
categories: science
tags: thinking
author: LZN
---

_书童按：本篇是德米斯·哈萨比斯（Demis Hassabis）爵士于2025年7月接受Lex Fridman的播客采访实录，他完全可被视为全世界最懂人工智能的寥寥数人其中之一。本篇（下篇）采访中涉及等观点，精彩绝伦，令人击节称赞。初稿采用Deepseek翻译，经自动化中英混排，书童仅做简单校对及批注，中文全部译文多达4万余字，分为上、中、下三个部分发出，以飨诸君。_

![](https://i.imgur.com/whTurLj.jpeg)

**本文系采访实录之下篇，上篇请移步[此链接](https://lzhenn.github.io/2025/09/08/Hassabis-Podcast-part1/)，中篇请移步[此链接](https://lzhenn.github.io/2025/09/09/Hassabis-Podcast-part2/)。**

**谷歌与AGI竞赛**

**Google and the race to AGI**

**Lex Fridman (01:17:55)** 所以商业、领导力方面令人难以置信的故事之一是谷歌过去一年所做的事情。所以我认为可以公平地说，一年前，谷歌在 LLM 产品方面正在失利，Gemini 1.5。而现在它正在获胜，这……我是乔·拜登（开玩笑）。你接手了领导工作，并领导了这项努力。从所谓的失利到所谓的获胜，需要付出什么，在一年之内？

(01:17:55) So one of the incredible stories on the business, on the leadership side is what Google has done over the past year. So I think it’s fair to say that Google was losing on the LLM product side a year ago with Gemini 1.5 And now it’s winning, which… I’m Joe Biden. And you took the helm and you led this effort. What did it take to go from let’s say quote-unquote losing to quote-unquote winning, in the span of a year?

**Demis Hassabis  (01:18:22)** 是的，嗯，首先，我们拥有绝对不可思议的团队，由 Corey、Jeff Dean、Oriole 以及我们在 Gemini 上的出色团队领导。绝对地。所以没有最优秀的人才，你无法做到。当然我们也有大量出色的计算资源。但然后是我们创造的研究文化，基本上是把谷歌的不同团体聚集在一起，那是世界级的 Google Brain 团队，然后是原来的 DeepMind，聚集所有最优秀的人和最好的想法，团结起来制造我们所能制造的最伟大的系统。

**Demis Hassabis (01:18:22)** Yeah, well firstly it’s absolutely incredible team that we have led by Corey and Jeff Dean and Oriole and the amazing team we have on Gemini. Absolutely. So you can’t do it without the best talent. And of course we have a lot of great compute as well. But then it’s the research culture we’ve created and basically coming together both different groups in Google that was Google Brain, World-class team, and then the old DeepMind, and pulling together all the best people and the best ideas and gathering around to make the absolute greater system we could.

(01:18:59) 这很艰难，但我们都非常有竞争力，并且我们热爱研究。做这件事太有趣了，看到我们的发展轨迹很高兴。这不是必然的，但我们对我们所处的位置和进展速度非常满意。所以如果你看看我们从两年前到一年前再到现在的历程，我认为我们称之为 relentless progress（无情进展）。连同 relentless shipping（无情发布）的进展，一直非常成功，并且竞争激烈得难以置信，整个 AI 领域，与世界上一些最伟大的企业家、领导者和公司都在竞争，因为每个人都意识到了 AI 的重要性。看到这种进展对我们来说非常令人高兴。

(01:18:59) And it was been hard, but we’re all very competitive and we love research. This is so fun to do, and it’s great to see our trajectory. It wasn’t a given, but we’re very pleased with where we are and the rate of progress is the most important thing. So if you look at where we’ve come to from two years ago to one year ago to now, I think we call it relentless progress. Along with relentless shipping of that progress is being very successful and it’s unbelievably competitive, the whole space, the whole AI space, with some of the greatest entrepreneurs and leaders and companies in the world, all competing now because everyone’s realized how important AI is. And it’s very been pleasing for us to see that progress.

**Lex Fridman  (01:19:47)** 谷歌是一家巨型公司。你能谈谈在这种情况下自然发生的事情吗，就是出现的官僚主义？你希望小心自然，有会议，有经理，等等。从领导力的角度来看，为了达到，就像你说的，发布（产品），突破这些的一些挑战是什么？像过去几年发布的 Gemini 相关产品的数量是疯狂的。

**Lex Fridman (01:19:47)** Google’s a gigantic company. Can you speak to the natural things that happen in that case is the bureaucracy that emerges? You want to be careful the natural, there’s meetings and there’s managers and that. What are some of the challenges from a leadership perspective, breaking through that in order to, like you said, ship? Like the number of products, Gemini related products that has been shipped over the past years is insane.

**Demis Hassabis  (01:20:14)** 对吧？是的，正是。这就是 relentlessness（无情）的样子。我认为问题是任何大公司最终都会有很多管理层次之类的事情，这是其运作方式的本质。但我仍然运作，并且我一直以初创公司的方式运作旧的 DeepMind。一个大的，但仍然像初创公司一样。

**Demis Hassabis (01:20:14)** Right? Yeah, exactly. That’s what relentlessness looks like. I think it’s a question of any big company ends up having a lot of layers of management and things like that is sort of the nature of how it works. But I still operate and I was always operating with old DeepMind as a start-up still. A large one, but still as a start-up.

(01:20:37) 这就是我们今天在 Google DeepMind 仍然采取的行动方式。以决断力和最好的小型组织所具有的能量行动。我们试图两全其美，我们拥有这不可思议的、数十亿用户的界面和可信的产品，我们可以用我们的 AI 和研究来赋能，这太棒了，世界上很少有地方你能得到那个，一方面做不可思议的世界级研究，然后第二天就将其接入并改善数十亿人的生活。这是一个相当惊人的组合。

(01:20:37) And that’s what we still act like today with Google DeepMind. And acting with decisiveness and the energy that you get from the best smaller organizations. And we try to get the best of both worlds where we have this incredible, billions of users surfaces and credible products that we can power up with our AI and our research and that’s amazing and that’s very few places in the world you can get that, do incredible world-class research on the one hand and then plug it in and improve billions of people’s lives the next day. That’s a pretty amazing combination.

(01:21:10) 我们不断地斗争和削减官僚主义，以让研究文化和无情发布的文化蓬勃发展。我认为我们取得了相当好的平衡，同时对其负责，作为一个大公司你必须这样做，并且我们也拥有大量巨大的产品界面。

(01:21:10) And we’re continually fighting and cutting away bureaucracy to allow the research culture and the relentless shipping culture to flourish. And I think we’ve got a pretty good balance, whilst being responsible with it, as you have to be as a large company and also with a number of huge product surfaces that we have.

**Lex Fridman  (01:21:30)** 所以你提到的一个有趣的事情是关于拥有数十亿用户的界面，我和一个叫 Irvin Finkel 的杰出家伙在这里大英博物馆进行了一次对话。他是楔形文字的世界专家，那是一种写在石板上的古代文字，他不知道 ChatGPT 或 Gemini，他甚至不知道 AI，但他第一次接触这个 AI 是谷歌上的 AI 模式。

**Lex Fridman (01:21:30)** So a funny thing you mentioned about the surface with the billion, I had a conversation with a guy named, brilliant guy here at the British Museum, called Irvin Finkel. He’s a world expert at cuneiforms, which is a ancient writing on tablets and he doesn’t know about ChatGPT or Gemini, he doesn’t even know about AI, but this first encounter with this AI is AI mode on Google.

**Demis Hassabis  (01:21:57)** 是的。

**Demis Hassabis (01:21:57)** Yes.

**Lex Fridman  (01:21:58)** 他就像，这就是你们在谈论的 AI 模式吗？这只是提醒，世界上有很大一部分人不知道这个 AI 东西。

**Lex Fridman (01:21:58)** He’s like, is that what you’re talking about, this AI mode? And it’s just a reminder that there’s a large part of the world that doesn’t know about this AI thing.

**Demis Hassabis  (01:22:08)** 是的，我知道。很有趣。如果你生活在 X 和 Twitter 上，至少我的 feed 是，全是 AI。在某些地方，在硅谷和一些小圈子里，每个人都在，他们想的全是 AI，但很多普通世界还没有遇到过它。

**Demis Hassabis (01:22:08)** Yeah, I know. It’s funny. If you live on X and Twitter and I mean it’s sort of at least my feed, it’s all AI. And there’s certain places where in the valley and certain pockets where everyone’s just, all they’re thinking about is AI, but a lot of the normal world hasn’t come across it yet.

**Lex Fridman  (01:22:24)** 而那是他们第一次互动的巨大责任。农村的宏大范围，印度或世界任何地方，你都能到达……

**Lex Fridman (01:22:24)** And that’s a great responsibility to their first interaction. The grand scale of the rural, India or anywhere across the world you get to…

**Demis Hassabis  (01:22:34)** 我们希望它尽可能好，并且在很多情况下，它只是在幕后赋能，让像地图或搜索这样的东西工作得更好。理想情况下，对很多人来说，这应该是无缝的。它只是让他们的生活更高效、帮助他们的新技术。

**Demis Hassabis (01:22:34)** And we want it to be as good as possible and in a lot of cases it’s just under the hood powering, making something like maps or search work better. And ideally for a lot of those people should just be seamless. It’s just new technology that makes their lives more productive and helps them.

**Lex Fridman  (01:22:50)** Gemini 产品和工程团队的一群人对你的另一个维度评价极高，我几乎没想到。我有点认为你是深度科学家，关心这些重大的研究科学问题。但他们也说你是伟大的产品人，比如如何创造一个很多人会使用并喜欢使用的东西。所以你能也许谈谈创建一个很多人喜欢使用的基于 AI 的产品需要什么吗？

**Lex Fridman (01:22:50)** A bunch of folks on the Gemini product and engineering teams spoken extremely highly of you on another dimension, that I almost didn’t even expect. I kind of think of you as the deep scientists and caring about these big research scientific questions. But they also said you’re a great product guy, like how to create a thing that a lot of people would use and enjoy using. So can you maybe speak to what it takes to create a AI based product that a lot of people enjoy using?

**Demis Hassabis  (01:23:18)** 是的。嗯，我的意思是，再次，那来自于我的游戏设计时代，我过去为数百万游戏玩家设计游戏。人们会忘记那一点。我在产品中拥有尖端技术的经验，那就是九十年代游戏的样子。

**Demis Hassabis (01:23:18)** Yeah. Well, I mean, again, that comes back from my game design days where I used to design games for millions of gamers. People would forget about that. I’ve had experience with cutting edge technology in product that is how games was in the nineties.

(01:23:31) 所以我实际上热爱尖端研究和然后应用于产品并为新体验提供动力的结合。所以，我认为这真的是同样的技能，即想象使用它会是什么样子， viscerally，并且拥有好的品味，回到早些时候。在科学中有用的同样东西，我认为在产品设计中也有用。

(01:23:31) And so I love actually the combination of cutting edge research and then being applied in a product and to power a new experience. And so, I think it’s the same skill really of imagining what it would be like to use it viscerally, and having good taste coming back to earlier. The same thing that’s useful in science, I think can also be useful in product design.

(01:23:57) 我只是一个非常，一直是一个多学科的人，所以我真的看不到艺术与科学、或产品与研究之间的界限。对我来说这是一个连续体。我喜欢研究尖端的产品。如果它们只是普通的产品，没有尖端技术 underneath the hood，我就不会对它们感到兴奋。它需要这种发明、创造力、能力。

(01:23:57) And I’ve just had a very, always been a sort of multidisciplinary person, so I don’t see the boundaries really between arts and sciences, or product and research. It’s a continuum for me. I like working on products that are cutting edge. I wouldn’t be able to have cutting edge technology under the hood. I wouldn’t be excited about them if they were just run-of-the-mill products. It requires this invention, creativity, cap capability.

**Lex Fridman  (01:24:23)** 你学到的一些具体东西是什么，即使是在 LLM 方面，你与 Gemini 互动时？这感觉不像，布局，界面，也许在延迟之间的权衡，如何呈现给用户，等待多长时间以及如何显示那种等待或原因能力。有一些有趣的事情，因为就像你说的，它是非常尖端的。我们不知道如何正确地呈现它。所以有什么具体的东西你学到了吗？

**Lex Fridman (01:24:23)** What are some specific things you learned about when you, even on the LLM side, you’re interacting with Gemini? This doesn’t feel like, the layout, the interface, maybe the trade-off between the latency, how to present to the user, how long to wait and how that waiting is shown or the reason capabilities. There are some interesting things because like you said, it’s the very cutting edge. We don’t know how to present it correctly. So is there some specific things you’ve learned?

**Demis Hassabis  (01:24:55)** 我的意思是这是一个如此快速发展的空间，一直在评估这个，但我们今天所处的位置是，你希望不断简化事情，无论是界面还是你在模型之上构建的东西，你有点想摆脱模型的阻碍。模型训练正在轨道上下行，并且它以难以置信的速度改进。我们之前谈到的无情进展。

**Demis Hassabis (01:24:55)** I mean it’s such a false evolving space, evaluating this all the time, but where we are today is that you want to continually simplify things, whether that’s the interface or what you build on top of the model, you kind of want to get out of the way of the model. The model train is coming down the track and it’s improving unbelievably fast. This relentless progress we talked about earlier.

(01:25:17) 你看看 2.5 对 1.5，那只是一个巨大的改进，我们预计未来的版本还会再次如此。所以模型正在变得更有能力。

(01:25:17) You look at 2.5 versus 1.5 and it’s just a gigantic improvement, and we expect that again for the future versions. And so the models are becoming more capable.

(01:25:26) 所以你在今天世界的设计空间中有趣的事情是，这些 AI 优先的产品是，你必须不是为今天的东西能做什么，技术今天能做什么而设计，而是为一年后的情况而设计。所以你实际上必须是一个非常技术性的产品人，因为你必须对和感觉有很好的直觉，好吧，我现在梦想的东西今天做不到，但研究轨道是否按计划基本上在六个月或一年内拦截那个。

(01:25:26) So you’ve got, the interesting thing about the design space in today’s world, these AI first products is you’ve got to design not for what the thing can do today, the technology can do today, but in a year’s time. So you actually have to be a very technical product person, because you’ve got to have a good intuition for and feel for, okay, that thing that I’m dreaming about now can’t be done today, but is the research track on schedule to basically intercept that in six months or a year’s time.

(01:25:55) 所以你有点必须拦截这个高度变化的技术将要去的地方，以及新的能力一直在上线，这些是我们以前没有意识到的，可以让这些研究工作的能力。或者现在我们有了视频生成，我们用它做什么，这种多模态的东西。

(01:25:55) So you’ve kind of got to intercept where this highly changing technology’s going, as well as the new capabilities are coming online all the time that we didn’t realize before that can allow these research to work. Or now we’ve got video generation, what do we do with that, this multimodal stuff.

(01:26:13) 一个问题我有，它真的会是今天我们拥有的当前 UI 吗，这些文本框聊天？一旦你想到这些超级多模态系统，似乎非常不可能。难道不应该是更像《少数派报告》（Minority Report）那样的东西吗，你在那里以一种协作的方式与它 vibe（共鸣）？今天看起来非常受限。我认为我们回顾今天的界面、产品和系统时，会认为它们在也许仅仅几年内就相当过时了。

(01:26:13) Is it, one question I have is it really going to be the current UI that we have today, these text box chats? Seems very unlikely once you think about these super multimodal systems. Shouldn’t it be something more like Minority Report where you are sort of vibing with it in a kind of collaborative way? It seems very restricted today. I think we’ll look back on today’s interfaces and products and systems as quite archaic in maybe in just a couple of years.

(01:26:41) 所以我认为实际上在产品方面以及研究方面都有很大的创新空间。

(01:26:41) So I think there’s a lot of space actually for innovation to happen on the product side as well as the research side.

**Lex Fridman  (01:26:47)** 然后我们离线谈论了键盘是，悬而未决的问题是我们何时以及多大程度上将转向音频作为与我们周围机器交互的主要方式，而不是输入东西？

**Lex Fridman (01:26:47)** And then we are offline talking about the keyboard is, the open question is how, when and how much will we move to audio as the primary way of interacting with the machines around us versus typing stuff?

**Demis Hassabis  (01:27:00)** 是的，我的意思是输入是一种非常低带宽的方式，即使你是一个非常快的打字员。我认为我们将不得不开始利用其他设备，无论是智能眼镜、音频耳塞，最终也许是某种神经设备，在那里我们可以增加输入和输出带宽到也许是今天的 100 倍。

**Demis Hassabis (01:27:00)** Yeah, I mean typing is a very low bandwidth way of doing it, even if you’re a very fast typer. And I think we’re going to have to start utilizing other devices, whether that’s smart glasses, audio earbuds, and eventually maybe some sorts of neural devices, where we can increase the input and the output bandwidth to something maybe a 100x of what is today.

**Lex Fridman  (01:27:24)** 我认为未被充分欣赏的艺术形式是界面设计，因为我认为如果你没有正确的界面，你就无法解锁系统智能的力量。界面是你解锁其力量的方式。如何做到这一点是一个如此有趣的问题。所以你如何思考摆脱阻碍是一门真正的艺术形式。

**Lex Fridman (01:27:24)** I think that underappreciated art form is the interface design because I think you can not unlock the power of the intelligence of a system if you don’t have the right interface. The interface is really the way you unlock its power. It’s such an interesting question of how to do that. So how you would think getting out of the way isn’t real art form.

**Demis Hassabis  (01:27:46)** 是的。那是我想史蒂夫·乔布斯总是谈论的东西，对吧？我们想要的是简单、美丽和优雅。还没有人做到那一点，在我看来。而那是我希望我们达到的。

**Demis Hassabis (01:27:46)** Yes. It’s the sort of thing that I guess Steve Jobs always talked about, right? It’s simplicity, beauty, and elegance that we want. And we’re not that nobody’s there yet, in my opinion. And that’s what I would like us to get to.

(01:27:58) 再次，这有点像围棋，最优雅、最美丽的游戏。你能制作一个像那样美丽的界面吗？实际上，我认为我们将进入一个 AI 生成界面的时代，这些界面可能是个性化的，适合你，你的审美，你的感觉，你的大脑工作方式，AI 根据任务生成那种界面。感觉那可能是我们最终会走的方向。

(01:27:58) Again, it sort of speaks to Go again as a game, the most elegant, beautiful game. Can you make an interface as beautiful as that? Actually, I think we’re going to enter an era of AI-generated interfaces that are probably personalized to you, so it fits the way that you, your aesthetic, your feel, the way that your brain works and the AI kind of generates that depending on the task. That feels like that’s probably the direction we’ll end up in.

**Lex Fridman  (01:28:25)** 因为有些人是高级用户，他们想要屏幕上的每一个参数，一切都基于也许是我用键盘导航，并为一切设置快捷键。而有些人喜欢极简主义。

**Lex Fridman (01:28:25)** Because some people are power users and they want every single parameter on the screen, everything based perhaps me with a keyboard-based navigation and to have shortcuts for everything. And some people like the minimalism.

**Demis Hassabis  (01:28:37)** 只是隐藏所有那种复杂性。是的，正是。

**Demis Hassabis (01:28:37)** Just hide all of that complexity. Yeah, exactly.

**Lex Fridman  (01:28:39)** 是的。嗯，我很高兴你身上也有史蒂夫·乔布斯模式。这太棒了。爱因斯坦模式，史蒂夫·乔布斯模式。

**Lex Fridman (01:28:39)** Yeah. Well, I’m glad you have a Steve Jobs mode in you as well. This is great. Einstein mode, Steve Jobs mode.

(01:28:47) 好吧，让我试着骗你回答一个问题。Gemini 3 什么时候出来？是在 DTS-6 之前还是之后？世界都在等待两者。

(01:28:47) All right, let me try to trick you into answering a question. When will Gemini 3 come up? Is it before or after DTS-6? The world waits for both.

(01:28:56) 从 2.5 到 3.0 需要什么？因为似乎已经发布了很多 2.5 的版本，这些版本在性能上已经有了飞跃。所以升级到一个新版本甚至意味着什么？是关于性能吗？是关于一种完全不同的体验风味吗？

(01:28:56) And what does it take to go from 2.5 To 3.0? Because it seems like there’s been a lot of releases of 2.5, which are already leaps in performance. So what does it even mean to go to a new version? Is it about performance? Is it about a completely different flavor of an experience?

**Demis Hassabis  (01:29:16)** 是的，嗯，所以不同版本号的工作方式是我们试图收集，所以也许做一个新类型的完整运行和新版本的完整产品化大约需要六个月左右的时间。

**Demis Hassabis (01:29:16)** Yeah, well, so the way it works with our different version numbers is we try to collect, so maybe it takes roughly six months or something to do a new kind of full run and the full productization of a new version.

(01:29:32) 在那段时间里，很多新的有趣的研究迭代和想法出现，我们 sort of 将它们全部收集起来，你可以想象过去六个月在架构方面的有趣想法，也许是在数据方面，就像许多不同的可能事情。我们将所有那些打包，测试哪些可能对下一次迭代有用，然后将所有那些捆绑在一起。然后我们开始新的巨型英雄训练运行。然后当然那会被监控。

(01:29:32) And during that time, lots of new interesting research iterations and ideas come up, and we sort of collect them all together that you could imagine the last six months worth of interesting ideas on the architecture front, maybe it’s on the data front, it’s like many different possible things. And we package that all up, test which ones are likely to be useful for the next iteration, and then bundle that all together. And then we start the new giant hero training run. And then of course that gets monitored.

**Demis Hassabis  (01:30:00)** ...运行，对吧？然后当然那会被监控，然后在预训练结束时，还有所有的后训练，有很多不同的方式做那个，不同的修补它的方式。所以那里有一个完整的实验阶段，你也可以从中获得很多收益。那就是你通常看到版本号指的是基础模型，预训练模型，然后是 2.5 的临时版本和不同的大小以及不同的小添加。它们通常是补丁或后训练的想法，可以在之后基于相同的基本架构完成。然后当然在那之上，我们还有不同的大小，Pro 和 Flash 以及 Flashlight，这些通常是从最大的那些，Flash 模型从 Pro 模型中蒸馏出来的。那意味着我们有一系列不同的选择。如果你是开发者，你是想优先考虑性能还是速度和成本？

**Demis Hassabis (01:30:00)** … run, right? And then of course that gets monitored and then at the end of the pre-training, then there’s all the post-training, there’s many different ways of doing that, different ways of patching it. So there’s a whole experimental phase there which you can also get a lot of gains out. And that’s where you see the version numbers usually referring to the base model, the pre-trained model, and then the interim versions of 2.5 and the different sizes and the different little additions. They’re often patches or post-training ideas that can be done afterwards off the same basic architecture. And then of course on top of that, we also have different sizes, Pro and Flash and Flashlight that are often distilled from the biggest ones, the Flash model from the Pro model. And that means we have a range of different choices. If you’re the developer, do you want to prioritize performance or speed and cost?

(01:30:51) 我们喜欢把它想成帕累托前沿（Pareto frontier），一方面，Y 轴像是性能，然后 X 轴是成本或延迟和速度 basically。我们有完全定义前沿的模型。所以无论你作为个体用户或开发者想要什么权衡，你应该找到我们的一个模型满足那个约束。

(01:30:51) And we like to think of this Pareto frontier of on the one hand, the Y-axis is like performance, and then the X- axis is cost or latency and speed basically. And we have models that completely define the frontier. So whatever your trade-off is that you want as an individual user or as a developer, you should find one of our models satisfies that constraint.

**Lex Fridman  (01:31:17)** 所以 behind the version changes，有一个大的运行，然后还有一个产品化的 insane complexity。然后有沿着那个帕累托前沿的不同大小的蒸馏。然后随着你走的每一步，你意识到可能有一个很酷的产品。有支线任务。

**Lex Fridman (01:31:17)** So behind the version changes, there is a big run and then there’s just an insane complexity of productization. Then there’s the distillation of the different sizes along that Pareto front. And then as with each step you take, you realize there might be a cool product. There’s side quests.

**Demis Hassabis  (01:31:39)** 是的，正是。

**Demis Hassabis (01:31:39)** Yes, exactly.

**Lex Fridman  (01:31:41)** 然后你也不想接太多支线任务，因为那样你会有数百万个版本和数百万个产品。

**Lex Fridman (01:31:41)** And then you also don’t want to take too many side quests because then you have a million versions and a million products.

**Demis Hassabis  (01:31:45)** 是的，正是。

**Demis Hassabis (01:31:45)** Yes, precisely.

**Lex Fridman  (01:31:46)** 非常不清楚，但你也超级兴奋，因为它超级酷。甚至怎么看 VLs？非常酷。它如何融入更大的事物？

**Lex Fridman (01:31:46)** It’s very unclear, but you also get super excited because it’s super cool. How does even look at VLs? Very cool. How does it fit into the bigger Thing?

**Demis Hassabis  (01:31:55)** 是的，正是。正是。然后你不断地这个过程，我们称之为从产品界面或从后训练甚至更下游的想法上游，然后你将这些上游到下一次运行的核心模型训练中。所以然后主模型，主要的 Gemini 轨道变得越来越通用，并最终，AGI。

**Demis Hassabis (01:31:55)** Yes, exactly. Exactly. And then you’re constantly this process of converging upstream, we call it ideas from the product surfaces or from the post-training and even further downstream and that, you upstream that into the core model training for the next run. So then the main model, the main Gemini track becomes more and more general and eventually, AGI.

**Lex Fridman  (01:32:20)** 一次英雄运行。

**Lex Fridman (01:32:20)** One hero run.

**Demis Hassabis  (01:32:21)** 是的，正是。几次英雄运行之后。

**Demis Hassabis (01:32:21)** Yes, exactly. A few hero runs later.

**Lex Fridman  (01:32:23)** 是的。所以有时当你发布这些新版本或每个版本时，基准测试对于显示模型性能是有益的还是适得其反的？

**Lex Fridman (01:32:23)** Yeah. So sometimes when you release these new versions or every version, really, are benchmarks productive or counterproductive for showing the performance of a model?

**Demis Hassabis  (01:32:36)** 你需要它们，但重要的是你不要过度拟合它们。所以它们不应该是终极目标。所以有 LMArena，或者它曾经叫 LEMSYS，那是其中之一，结果有机地成为人们喜欢测试这些系统的主要方式之一，至少是聊天机器人。显然有很多学术基准测试数学和编码能力、一般语言能力、科学能力等等。然后我们有自己的内部基准，我们关心。

**Demis Hassabis (01:32:36)** You need them, but it’s important that you don’t overfit to them. So they shouldn’t be the be all and end all. So there’s LMArena, or it used to be called LEMSYS, that’s one of them that turned out organically to be one of the main ways people like to test these systems, at least the chatbots. Obviously there’s loads of academic benchmarks that test mathematics and coding ability, general language ability, science ability and so on. And then we have our own internal benchmarks that we care about.

(01:33:04) 这是一个多目标优化问题。你不想只擅长一件事。我们试图构建在各个方面都好的通用系统，并且你尝试进行无遗憾的改进。所以你在编码方面改进，但不会降低你在其他领域的性能。所以那是困难的部分，因为当然你可以放入更多编码数据或者你可以放入更多，我不知道，游戏数据，但那会不会让你的语言系统或你的翻译系统以及其他你关心的事情变得更糟？所以你必须不断监控这个越来越大、越来越大的基准测试套件。并且当你将这些模型放入产品中时，你也关心直接使用情况和直接统计数据以及你从最终用户那里得到的信号，无论他们是编码者还是使用聊天界面的普通人。

(01:33:04) It’s a multi objective optimization problem. You don’t want to be good at just one thing. We’re trying to build general systems that are good across the board, and you try and make no-regret improvements. So where you improve in coding, but it doesn’t reduce your performance in other areas. So that’s the hard part because of course you could put more coding data in or you could put more, I don’t know, gaming data in, but then does it make worse your language system or your translation systems and other things that you care about? So you’ve got to continually monitor this increasingly larger and larger suite of benchmarks. And also when you stick them into products, these models, you also care about the direct usage and the direct stats and the signals that you’re getting from the end users, whether they’re coders or the average person using the chat interfaces.

**Lex Fridman  (01:34:00)** 因为最终，你想要衡量有用性，但将其转化为一个数字是如此困难。它真的是跨大量用户的 vibe-based benchmarks（基于感觉的基准）。而且很难知道，这对我来说只是可怕，你知道有一个聪明得多的模型，但只是 vibe-based 的东西。它不太工作。那真是太可怕了，以及你刚才说的一切。它必须在这么多领域既聪明又有用。所以你突然变得超级兴奋，解决了你以前从未解决过的编程问题，但现在它的诗歌更烂了之类的，只是，我不知道，那是一种压力。那太难了——

**Lex Fridman (01:34:00)** Because ultimately, you want to measure the usefulness, but it’s so hard to convert that into a number. It’s really vibe based benchmarks across a large number of users. And it’s hard to know and it would be just terrifying to me, you know have a much smarter model, but it’s just something vibe based. It’s not quite working. That’s such a scary and everything you just said. It has to be smart and useful across so many domains. So you get super excited all of a sudden solving programming problems you’ve never been able to solve before, but now it’s crappier poetry or something and it’s just, I don’t know, that’s a stressful. That’s so difficult-

**Demis Hassabis  (01:34:43)** 去平衡。

**Demis Hassabis (01:34:43)** To balance.

**Lex Fridman  (01:34:44)** 去平衡，并且因为你不能真正信任基准测试，你真的必须信任最终用户。

**Lex Fridman (01:34:44)** To balance and because you can’t really trust the benchmarks, you really have to trust the end users.

**Demis Hassabis  (01:34:48)** 是的。然后其他更晦涩的事情开始起作用，比如系统的风格、角色，它是否冗长？是否简洁？是否幽默？不同的人喜欢不同的东西。所以这非常有趣。这几乎是心理学研究或人格研究的前沿部分。我过去在我的博士研究中做过那个，比如五因素人格，我们实际上希望我们的系统是什么样子的？不同的人也会喜欢不同的东西。所以这些都是产品空间中所有的新问题，我认为以前从未真正解决过，但我们现在将不得不迅速处理。

**Demis Hassabis (01:34:48)** Yeah. And then other things that are even more esoteric come into play, like the style of the persona of the system, is it verbose? Is it succinct? Is it humorous? And different people like different things. So it’s very interesting. It’s almost like cutting edge part of psychology research or personality research. I used to do that in my PhD, like five factor personality, what do we actually want our systems to be like? And different people will like different things as well. So these are all just new problems in product space that I don’t think I’ve ever really been tackled before, but we’re going to rapidly have to deal with now.

**Lex Fridman  (01:35:27)** 我认为这是一个超级迷人的空间，发展事物的性格，在这样做的过程中，它给我们自己竖起了一面镜子，我们喜欢什么样的东西？因为提示工程允许你控制那些元素的很多方面，但产品能否让你更容易控制那些体验的不同风味，你与之交互的不同角色？

**Lex Fridman (01:35:27)** I think it’s a super fascinating space, developing the character of the thing and in so doing, it puts a mirror to ourselves, what are the kind of things that we like? Because prompt engineering allows you to control a lot of those elements, but can the product make it easier for you to control the different flavors of those experiences, the different characters that you interact with?

**Demis Hassabis  (01:35:51)** 是的，正是。

**Demis Hassabis (01:35:51)** Yeah, exactly.





竞争与AI人才

Competition and AI talent

**Lex Fridman  (01:35:52)** 那么 Google DeepMind 获胜的概率是多少？

**Lex Fridman (01:35:52)** So what’s the probability of Google DeepMind winning?

**Demis Hassabis  (01:35:56)** 嗯，我认为获胜是看待它的错误方式，考虑到我们正在构建的东西的重要性和后果性。所以有趣的是，即使那是我很多心态的一部分，我尽量不把它看作游戏或竞争。在我看来，是关于我们所有处于前沿的人或有责任将这个不可思议的、可以用于不可思议的益处但也有风险的技术，安全地管理到世界上，为了人类的利益。那一直是我梦想的，也是我们一直试图做的。我希望那最终是社区，也许国际社会，当随着我们越来越接近 AGI 变得明显时，将会团结 around 的东西。

**Demis Hassabis (01:35:56)** Well, I see it as winning. I think winning is the wrong way to look at it given how important and consequential what it is we’re building. So funny enough, I try not to view it like a game or competition even though that’s a lot of my mindset. It’s about in my view, all of us or those of us at the leading edge or have a responsibility to steward this unbelievable technology that could be used for incredible good but also has risks, steward it safely into the world for the benefit of humanity. That’s always what I’ve dreamed about and what we’ve always tried to do. And I hope that’s what eventually the community, maybe the international community will rally around when it becomes obvious that as we get closer and closer to AGI, that’s what’s needed.

**Lex Fridman  (01:36:43)** 我同意你的观点。我认为那说得很好。你说过你和这些实验室的一些负责人交谈并且关系良好。随着竞争加剧，维持这些关系有多难？

**Lex Fridman (01:36:43)** I agree with you. I think that’s beautifully put. You’ve said that you talk to and are on good terms with the leads of some of these labs. As the competition heats up, how hard is it to maintain those relationships?

**Demis Hassabis  (01:36:58)** 到目前为止还好。我尽量以合作为荣。我是一个合作的人。研究是一项合作事业。科学是一项合作事业。如果你治愈了可怕的疾病并想出了不可思议的治疗方法，这最终对人类都是好事。能源也一样，所有我感兴趣用 AI 帮助解决的事情。所以我只是希望那项技术存在于世界上并被用于正确的事情，并且那项好处的生产力好处被分享给每个人受益。所以我尽量与所有领先的实验室人员保持良好的关系。他们是非常有趣的人物，正如你可能期望的，他们中的许多人。

**Demis Hassabis (01:36:58)** It’s been okay so far. I try to pride myself in being collaborative. I’m a collaborative person. Research is a collaborative endeavor. Science is a collaborative endeavor. It’s all good for humanity in the end if you cure terrible diseases and you come up with an incredible cure, this is net win for humanity. And the same with energy, all of the things that I’m interested in helping solve with AI. So I just want that technology to exist in the world and be used for the right things and the benefits of that, the productivity benefits of that being shared for the benefit of everyone. So I try to maintain good relations with all the leading lab people. They’re very interesting characters, many of them as you might expect.

**Lex Fridman  (01:37:40)** 是的。

**Lex Fridman (01:37:40)** Yep.

**Demis Hassabis  (01:37:41)** 但是的，我希望我和他们几乎所有的人都关系良好。我认为当事情变得比现在更严重时，那将很重要，有那些沟通渠道，那将促进合作或协作，如果那是需要的话，特别是在安全之类的事情上。

**Demis Hassabis (01:37:41)** But yeah, I’m on good terms I hope with pretty much all of them. And I think that’s going to be important when things get even more serious than they are now, that there are those communication channels and that’s what will facilitate cooperation or collaboration if that’s what is required, especially on things like safety.

**Lex Fridman  (01:38:00)** 是的，我希望在风险较小的事情上有一些合作，在这样做的过程中，作为维持友谊和关系的机制。所以例如，我认为互联网会喜欢如果你和 Elon 以某种方式合作创建一个电子游戏，那种事情。我认为那能促进友情和良好关系。而且你们俩都是真正的游戏玩家，所以只是创造一些很有趣——

**Lex Fridman (01:38:00)** Yeah, I hope there’s some collaboration on stuff that’s less high stakes and in so doing, serves as a mechanism for maintaining friendships and relationships. So for example, I think the internet would love it if you and Elon somehow collaborate on creating a video game, that kind of thing. I think that enables camaraderie and good terms. And also you two are legit gamers, so it’s just fun to to create some-

**Demis Hassabis  (01:38:22)** 是的，那太棒了。我们过去谈过那个，那可能是一件我们可以做的很酷的事情。我同意你的观点，有支线项目会很好，在某种程度上，一个人可以只专注于合作的方面，那对双方是双赢的，并且能建立起合作的能力。

**Demis Hassabis (01:38:22)** Yeah, that would be awesome. And we’ve talked about that in the past and it may be a cool thing that we can do. And I agree with you, it’d be nice to have side projects in a way where one can just lean into the collaboration aspect of it and it’s a a win-win for both sides and it builds up that collaborative muscle.

**Lex Fridman  (01:38:44)** 我把科学努力看作是人类的那个支线项目，我认为 Google DeepMind 一直在真正推动那个。我很想看到其他实验室做更多的科学事情，然后合作，因为似乎更容易在大的科学问题上合作。

**Lex Fridman (01:38:44)** I see the scientific endeavor as that side project for humanity and I think Google DeepMind has been really pushing that. I would love to see other labs do more scientific stuff and then collaborate because it just seems like it’s easier to collaborate on the big scientific questions.

**Demis Hassabis  (01:39:01)** 我同意，我很想看到很多人，所有其他实验室谈论科学，但我认为我们确实是唯一将其用于科学并做那件事的人。这就是为什么像 AlphaFold 这样的项目对我如此重要。我认为对我们的使命也是如此，是展示 AI 如何能以一种非常具体的方式明显用于人类的利益。而且，我们像 Isomorphic 这样的公司从 AlphaFold 中分拆出来做药物发现，进展非常顺利，你可以想见构建额外的 AlphaFold 类型系统进入化学空间，帮助加速药物设计。我认为我们需要展示的例子，社会需要理解的，是 AI 能在哪里带来这些巨大的好处。

**Demis Hassabis (01:39:01)** I agree and I would love to see a lot of people, all of the other labs talk about science, but I think we’re really the only ones using it for science and doing that. And that’s why projects like AlphaFold are so important to me. And I think to our mission is to show how AI can be clearly used in a very concrete way for the benefit of humanity. And also, we spun out companies like Isomorphic off the back of Alpha Fold to do drug discovery and it’s going really well and you can think of build additional AlphaFold type systems to go into chemistry space to help accelerate drug design. And the examples I think we need to show and society needs to understand are where AI can bring these huge benefits.

**Lex Fridman  (01:39:42)** 嗯，从心底里，感谢你以严谨、有趣、谦逊等一切方式推动科学努力向前发展。我就是喜欢看，并且还在谈论 P 等于 NP，这太不可思议了。所以我喜欢它。似乎一直有一场人才战争。其中一些是 meme，我不知道。你对 Meta 用高薪收购人才以及这场人才争夺战的白热化有什么看法？我应该说，很多人认为 DeepMind 是一个做尖端工作的好地方，原因你已经概述了。那里有充满活力的科学文化。

**Lex Fridman (01:39:42)** Well, from the bottom of my heart, thank you for pushing the scientific efforts forward with rigor, with fun, with humility, all of it. I just love to see and still talking about P equals NP, it’s just incredible. So I love it. There’s been seemingly a war for talent. Some of it is meme, I don’t know. What do you think about Meta buying up talent with huge salaries and the heating up of this battle for talent? I should say that I think a lot of people see DeepMind as a really great place to do cutting-edge work for the reasons that you’ve outlined. There’s this vibrant scientific culture.

**Demis Hassabis  (01:40:21)** 嗯，看，当然 Meta 现在正在采取一种策略。我认为至少从我的角度来看，我认为那些真正相信 AGI 使命及其所能做的事情，并理解其真正后果，无论是好是坏，以及那项责任 entails 的人，他们这样做 mostly 是为了像我自己一样，处于那项研究的前沿，这样他们可以帮助影响其发展方式，并将那项技术安全地管理到世界上。而 Meta 目前并不在前沿。也许他们会设法回到那里，从他们的角度来看，他们正在做的事情可能是理性的，因为他们落后了，需要做点什么。但我认为有比金钱更重要的东西。当然必须支付人们市场价以及所有这些东西，并且那继续上涨。我预料到了这个，因为越来越多的人终于意识到，公司的领导者们，我 30 多年来一直知道的事情，那就是 AGI 可能是将要发明的最重要的技术。所以在某种意义上，这样做是理性的。但我也认为有一个更大的问题。如今在 AI 领域的人薪酬很高。

**Demis Hassabis (01:40:21)** Yeah. Well look, of course there’s a strategy that Meta is taking right now. I think that from my perspective at least, I think the people that are real believers in the mission of AGI and what it can do and understand the real consequences, both good and bad from that and what that responsibility entails, I think they’re mostly doing it to be like myself, to be on the frontier of that research so they can help influence the way that goes and steward that technology safely into the world. And Meta right now are not at the frontier. Maybe they’ll manage to get back on there and it’s probably rational what they’re doing from their perspective because they’re behind and they need to do something. But I think there’s more important things than just money. Of course one has to pay people their market rates and all of these things and that continues to go up. And I was expecting this because more and more people are finally realizing, leaders of companies, what I’ve always known for 30 plus years now, which is that AGI is the most important technology probably that’s ever going to be invented. So in some senses, it’s rational to be doing that. But I also think there’s a much bigger question. People in AI these days are very well paid.

(01:41:32) 我记得当我们 2010 年开始的时候，我有几年甚至不付自己工资，因为钱不够。我们筹不到任何钱，而现在，实习生拿的工资相当于我们第一轮整个种子轮融资的金额。所以很有趣。我记得过去我不得不免费工作，几乎自费做实习的日子。现在，一切都反过来了，但就是这样。这是新世界。但我认为我们一直在讨论后 AGI 时代会发生什么，能源系统解决了等等，钱甚至意味着什么？所以我认为在经济中，我们将有更大的问题需要解决，以及公司如何在那样的世界中运作。所以我认为关于今天薪水和类似事情的问题有点次要。

(01:41:32) I remember when we were starting out back in 2010, I didn’t even pay myself a couple of years because it wasn’t enough money. We couldn’t raise any money, and these days, interns are being paid the amount that we raised as our first entire seed round. So it’s pretty funny. And I remember the days where I used to have to work for free and almost pay my own way to do an internship. Right now, it’s all the other around, but that’s just how it is. It’s the new world. But I think that we’ve been discussing what happens post- AGI and energy systems are solved and so on, what is even money going to mean? So I think in the economy and we’re going to have much bigger issues to work through and how does the economy function in that world and companies? So I think it’s a little bit of a side issue about salaries and things like that today.

**Lex Fridman  (01:42:19)** 是的，当你面对如此巨大的后果和巨大、迷人的科学问题时——

**Lex Fridman (01:42:19)** Yeah, when you’re facing such gigantic consequences and gigantic, fascinating scientific questions-

**Demis Hassabis  (01:42:25)** 可能只有几年之遥。

**Demis Hassabis (01:42:25)** Which may be only a few years away.

编程的未来

Future of programming

**Lex Fridman  (01:42:27)** 所以实际上，务实地说，如果我们关注工作，我们可以看看程序员，因为似乎 AI 系统目前在编程方面做得非常好，并且越来越如此。所以很多以编程为生、热爱编程的人担心他们会失去工作。你认为他们应该有多担心，以及适应新现实并确保你作为人类在编程世界中生存和繁荣的正确方式是什么？

**Lex Fridman (01:42:27)** So the practicals, the pragmatic sense, if we zoom in on jobs, we can look at programmers because it seems like AI systems are currently doing incredibly well at programming and increasingly so. So A lot of people that program for a living, love programming are worried they will lose their jobs. How worried should they be do you think, and what’s the right way to adjust to the new reality and ensure that you survive and thrive as a human in the programming world?

**Demis Hassabis  (01:42:58)** 嗯，有趣的是编程，并且再次违反了我们几年前可能认为的直觉，也许我们认为的一些更难技能的结果可能由于各种原因更容易。但编码和数学，因为你可以创建很多合成数据并验证那些数据是否正确。所以由于那种性质，更容易制作像合成数据这样的东西来训练。那当然也是我们都感兴趣的领域，因为作为程序员帮助我们并在这方面更快、更高效。

**Demis Hassabis (01:42:58)** Well, it’s interesting that programming, and it’s again counterintuitive to what we thought years ago, maybe that some of the skills that we think of as harder skills are turned out maybe to be the easier ones for various reasons. But coding and maths, because you can create a lot of synthetic data and verify if that data’s correct. So because of that nature of that, it’s easier to make things like synthetic data to train from. It’s also an area of course we’re all interested in because as programmers to help us and get faster at it and more productive.

(01:43:27) 所以我认为对于下一个时代，比如未来五到十年，我认为我们会发现，拥抱这些技术的人变得几乎与它们合为一体，无论是在创意产业还是技术产业，将变得超人类地高效，我认为。所以伟大的程序员会变得更好，但甚至会比今天高效 10 倍。因为在那里，你将能够利用你的技能来最大限度地利用这些工具，最大限度地利用它们。所以我认为那是我们在下一个领域将看到的。所以那将引起很多变化。所以那就要来了。很多人从中受益。

(01:43:27) So I think for the next era, like the next five, 10 years, I think what we’re going to find is people who embrace these technologies become almost at one with them, whether that’s in the creative industries or the technical industries will become superhumanly productive, I think. So the great programmers will be even better, but there’ll be even 10X even what they are today. And because there, you’ll be able to use their skills to utilize the tools to the maximum, exploit them to the maximum. And so I think that’s what we’re going to see in the next domain. So that’s going to cause quite a lot of change. And so that’s coming. A lot of people benefit from that.

(01:44:05) 所以我认为那的一个例子是，如果编码变得更容易，它对许多创意人员来说变得可用，可以做更多。但我认为顶级程序员在指定方面仍然有巨大优势，回到指定架构应该是什么方面。问题应该是如何以有用的方式指导这些编码助手，并检查它们产生的代码是否良好。所以我认为在可预见的未来几年里，那里还有很大的空间。

(01:44:05) So I think one example of that is if coding becomes easier, it becomes available to many more creatives to do more. But I think the top programmers will still have huge advantages as terms of specifying, going back to specifying what the architecture should be. The question should be how to guide these coding assistants in a way that’s useful and check whether the code they produce is good. So I think there’s plenty of headroom there for the foreseeable next few years.

**Lex Fridman  (01:44:36)** 所以我认为那里有几件有趣的事情。一个是仅仅为了变得越来越好，持续地使用这些工具，这样他们就在 riding the wave of the improving models，而不是与它们竞争。但可悲的是，但这就是地球上的生命本质，某些类型的编程在尖端可能有巨大的价值，而其他类型的价值更少。例如，前端网页设计可能更适合，如你提到的，由 AI 系统生成，而 maybe 例如，游戏引擎设计或类似的东西，或后端设计，或在高性能情况、高性能编程类型的设计决策中指导系统，那可能极其有价值。但它将转移人类最需要的地方，这对人们来说应对是可怕的。

**Lex Fridman (01:44:36)** So I think there’s several interesting things there. One is there’s a lot of imperative to just get better and better consistently of using these tools so they’re riding the wave of the improving models versus competing against them. But sadly, but that’s the nature of life on earth, there could be a huge amount of value to certain kinds of programming at the cutting edge and less value to other kinds. For example, it could be front-end web design might be more amenable to, as you’ve mentioned, to generation by AI systems and maybe for example, game engine design or something like this or back-end design or guiding systems in high-performance situations, high-performance programming type of design decisions, that might be extremely valuable. But it will shift where the humans are needed most and that’s scary for people to address.

**Demis Hassabis  (01:45:37)** 是的，我认为那是对的。任何时候有很多颠覆和变化，我们都经历过，不仅仅是这次。我们在互联网、移动时代经历过很多次，但在此之前显然是工业革命，这将是一个那样的时代，将会有很多变化。我认为将会有我们今天甚至无法想象的新工作，就像互联网创造的那样。然后那些拥有合适技能集来 riding that wave 的人将变得 incredibly valuable，那些技能。但也许人们将不得不重新学习或稍微适应他们当前的技能。而这次更难应对的是，我认为我们将看到的东西可能像工业革命影响的 10 倍，但速度也快 10 倍。所以不是 100 年，而是 10 年，所以那将 combined 产生 100 倍的影响和速度。

**Demis Hassabis (01:45:37)** Yeah, I think that’s right. Anytime where there’s a lot of disruption and change, and we’ve had this, it’s not just this time. We’ve had this in many times in human history with the internet, mobile, but before that obviously, the Industrial Revolution and it’s going to be one of those eras where there will be a lot of change. I think there’ll be new jobs we can’t even imagine today, just like the internet created. And then those people with the right skill sets to ride that wave will become incredibly valuable, those skills. But maybe people will have to relearn or adapt a bit, their current skills. And the thing that’s going to be harder to deal with this time around is that I think what we’re going to see is something like probably 10 times the impact the Industrial Revolution had, but 10 times faster as well. So instead of a 100 years, it takes 10 years and so that’s going to make, it’s like a 100X, the impact and the speed combined.

(01:46:31) 所以我认为这将使社会更难应对，并且有很多需要思考，我认为我们现在就需要讨论那一点。我鼓励世界顶级经济学家和哲学家开始思考社会将如何受到这个的影响，以及我们应该做什么？包括像普遍基本保障（universal basic provision）或类似的东西，那里增加的生产力被分享和分配给社会，也许以服务和其他东西的形式，如果你想要超过那个，你仍然去获得一些极其罕见的技能和类似的东西，并使你自己独特。但有一个提供的基本保障。

(01:46:31) So I think going to make it more difficult for society to deal with and there’s a lot to think through and I think we need to be discussing that right now. And I encourage top economists in the world and philosophers to start thinking about how is society going to be affected by this and what should we do? Including things like universal basic provision or something like that where a lot of the increased productivity gets shared out and distributed to society and maybe in the form of services and other things where if you want more than that, you still go and get some incredibly rare skills and things like that and make yourself unique. But there’s a basic provision that is provided.

**Lex Fridman  (01:47:19)** 如果你把政府看作一种技术，也有有趣的问题，不仅仅是在经济学中，还有政治。你如何设计一个响应快速变化时代的系统，这样你就能代表不同群体感受到的不同痛苦，以及你如何以一种不导致分裂的方式重新分配资源来解决那种痛苦并代表不同人的希望、痛苦和恐惧？因为政治家通常非常擅长煽动分裂并利用那一点来当选，定义他者然后说那是坏的。基于那一点，我认为那通常不利于利用快速变化的技术来帮助世界繁荣。所以我们几乎也需要改进我们的政治系统，如果你把它们看作一种技术的话。

**Lex Fridman (01:47:19)** And if you think of government as a technology, there’s also interesting questions, not just in the economics, but just politics. How do you design a system that’s responding to the rapidly changing times such that you can represent the different pain that people feel from the different groups and how do you reallocate resources in a way that addresses that pain and represents the hope and the pain and the fears of different people in a way that doesn’t lead to division? Because politicians are often really good at fueling the division and using that to get elected, defining the other and then saying that’s bad. And based on that, I think that’s often counterproductive to leveraging a rapidly changing technology to help the world flourish. So we almost need to improve our political systems as well rapidly, if you think of them as a technology.

**Demis Hassabis  (01:48:19)** 肯定。我认为我们将需要新的治理结构、机构可能来帮助这个转型。所以我认为政治哲学和政治科学将对那至关重要。但我认为第一件事，首先是创造更多的资源充裕。所以那是第一件事。提高生产力，获得更多资源，也许最终摆脱零和 situation。然后第二个问题是如何使用那些资源和分配那些资源。但是的，没有那种充裕 first，你就无法做到那一点。

**Demis Hassabis (01:48:19)** Definitely. And I think we’ll need new governance structures, institutions probably to help with this transition. So I think political philosophy and political science is going to be key to that. But I think the number one thing, first of all is to create more abundance of resources. So that’s the number one thing. Increase productivity, get more resources, maybe eventually get out of the zero-sum situation. Then the second question is how to use those resources and distribute those resources. But yeah, you can’t do that without having that abundance first.

约翰·冯·诺依曼

John von Neumann

**Lex Fridman  (01:48:54)** 你向我提到了这本书，Benjamin Labatut 的《狂人》（The Maniac），一本首先关于你的书。有一本关于你的传记。

**Lex Fridman (01:48:54)** You mentioned to me the book, The Maniac by Benjamin Labatut, a book on first of all about you. There’s a bio about you.

**Demis Hassabis  (01:49:05)** 奇怪，是的。

**Demis Hassabis (01:49:05)** Strange, yeah.

**Lex Fridman  (01:49:06)** 是的，当然。不清楚有多少是小说，多少是现实。但我认为中心人物是约翰·冯·诺依曼（John von Neumann），我会说那是对疯狂和天才的一种萦绕心头且美丽的探索，以及让我们说发现的双刃剑。对于不了解的人，约翰·冯·诺依曼是一个传奇人物。他对量子力学有贡献。他参与了曼哈顿计划。他被广泛认为是现代计算机和 AI 等的之父或先驱。所以很多人说他是最聪明的人类之一，这很迷人。

**Lex Fridman (01:49:06)** Yes, sure. It’s unclear how much is fiction, how much is reality. But I think the central figure that is John von Neumann, I would say it’s a haunting and beautiful exploration of madness and genius and let’s say the double-edged sword of discovery. And for people who don’t know, John von Neumann is a legendary mind. He contributed to quantum mechanics. He was on the Manhattan Project. He is widely considered to be the father of or pioneer the modern computer and AI and so on. So many people say he’s one of the smartest humans ever, which is fascinating.

(01:49:45) 而同样迷人的是，他是一个亲眼看到核科学和物理学成为原子弹的人，所以你看到了想法变成对世界有巨大影响的东西。他也预见了计算同样的事情，而那又是这本书美丽又令人萦绕的方面。然后向前飞跃，看看这个，至少是所有 AlphaZero，AlphaGo AlphaZero 的重大时刻，也许约翰·冯·诺依曼的思想被带入了现实。所以我想问题是，如果你现在能和约翰·冯·诺依曼 hang out，你认为他会对正在发生的事情说什么？

(01:49:45) And what’s also fascinating is he’s a person who saw nuclear science and physics become the atomic bomb, so you got to see ideas become a thing that has a huge amount of impact on the world. He also foresaw the same thing for computing, and that’s a little bit again, beautiful and haunting aspect of the book. Then taking a leap forward and looking at this, at least it all AlphaZero, AlphaGo AlphaZero big moment that maybe John von Neumann’s thinking was brought to reality. So I guess the question is what do you think if you got to hang out with John von Neumann now, what would he say about what’s going on?

**Demis Hassabis  (01:50:35)** 嗯，那将是一次惊人的经历。他是一个 fantastic mind。我也喜欢他在普林斯顿高等研究院（Institute of Advanced Studies）度过很多时间的方式，那是一个思考的非常特别的地方。令人惊讶的是他是一个多么博学的人，以及他帮助发明的东西的范围，包括当然所有现代计算机所基于的冯·诺依曼架构。他有惊人的远见。我认为他会热爱我们今天所处的位置，并且我认为他会非常享受 AlphaGo being，他研究过博弈论。我认为他预见到了很多学习机器、系统的事情，我认为他称之为成长而非编程的系统。我不确定甚至 maybe 他不会那么惊讶。我认为他早在 1950 年代就已经预见到了那一点的成果。

**Demis Hassabis (01:50:35)** Well, that would be an amazing experience. He’s a fantastic mind. And I also love the way he spent a lot of his time at Princeton at the Institute of Advanced Studies, a very special place for thinking. And it’s amazing how much of a polymath he was and the spread of things he helped invent, including of course the Von Neumann architecture that all the modern computers are based on. And he had amazing foresight. I think he would’ve loved where we are today, and I think he would’ve really enjoyed AlphaGo being, he did game theory. I think he foresaw a lot of what would happen with learning machines, systems that are grown, I think he called it rather than programmed. I’m not sure how even maybe he wouldn’t even be that surprised. There’s the fruition of what I think he already foresaw in the 1950s.

**Lex Fridman  (01:51:25)** 我想知道他会给出什么建议。他亲眼目睹了原子弹的制造与曼哈顿计划。我敢肯定有一些有趣的事情可能没有被充分讨论，也许是一些官僚方面的，也许是政治家的影响，也许没有足够地拿起电话与那些被所谓政治家称为敌人的人交谈。可能有一些深刻的智慧，我们实际上可能已经从那个时代失去了。

**Lex Fridman (01:51:25)** I wonder what advice he would give. He got to see the building of the atomic bomb with the Manhattan Project. I’m sure there’s interesting stuff that maybe is not talked about enough, maybe some bureaucratic aspect, maybe the influence of politicians, maybe not enough of picking up the phone and talking to people that are called enemies by the said politicians. There might be some deep wisdom that we just may have lost from that time actually.

**Demis Hassabis  (01:51:48)** 是的，我肯定有。我也读了很多关于那个时代的书，《年代记》（Chronicle Time）和一些 brilliant people involved。但我同意你的观点。我认为也许需要更多的对话和理解。我希望我们能从那些时代吸取教训。我认为这里的区别在于 AI 有如此多的，它是一种多用途技术。显然我们正试图做像解决所有疾病、帮助能源和稀缺这样的事情，这些不可思议的事情。这就是我们所有人以及我自己，我 30 多年前开始这段旅程的原因。但当然也有风险。可能冯·诺依曼，我的猜测是他预见到了两者。我认为他说过，我认为是对他的妻子，计算机将对世界产生更大的影响。正如我们刚才讨论的，我认为那是正确的。我认为那至少是工业革命的 10 倍。所以我认为他是对的。所以我认为他会，我想象，对我们现在的位置着迷。

**Demis Hassabis (01:51:48)** Yeah, I’m sure there is. I read a lot of books for that time as well, Chronicle Time and some brilliant people involved. But I agree with you. I think maybe there needs to be more dialogue and understanding. I hope we can learn from those times. I think the difference here is that the AI has so many, it’s a multi-use technology. Obviously we’re trying to do things like solve all diseases, help with energy and scarcity, these incredible things. This is why all of us and myself, I started on this journey 30 plus years ago. But of course there are risks too. And probably Von Neumann, my guess is he foresaw both. And I think he said, I think it’s to his wife, that computers would be even more impactful in the world. And as we just discussed, I think that’s right. I think it’s going to be 10 times at least of the Industrial Revolution. So I think he’s right. So I think he would’ve been, I imagine, fascinated by where we are now.

**Lex Fridman  (01:52:53)** 我认为其中之一，也许你可以纠正我，但从这本书中得到的一个启示是，正如书中所说，“理性的疯狂梦想”（Mad Dreams of Reason），它不足以指导人类在我们构建这些超级强大技术时。还有别的东西。还有一个宗教成分，无论上帝，无论宗教给予什么，它拉扯了人类精神中的某些东西，而原始冰冷的理性没有给我们。

**Lex Fridman (01:52:53)** And I think one of the, maybe you can correct me, but one of the takeaways from the book is that reason, as said in the book, Mad Dreams of Reason, it’s not enough for guiding humanity as we build these super powerful technology. That there’s something else. There’s also a religious component, whatever God, whatever religion gives, it pulls at something in the human spirit that raw cold reason doesn’t give us.

**Demis Hassabis  (01:53:22)** 我同意那一点。我认为我们需要以无论你想称之为精神维度还是人文维度来对待它。不一定与宗教有关，而是灵魂的理念，是什么让我们成为人类，我们拥有的这种火花，也许它与意识有关，当我们最终理解那一点时，我认为那必须成为努力的核心。而技术，我一直把技术看作推动者，使我们能够繁荣并更多理解世界的工具。我和费曼（Feynman）在这点上一致，他总是谈论科学和艺术是伴侣。你可以从两方面理解它，一朵花的美丽，它有多美丽，也能理解为什么花的颜色像那样进化。那只是让它更美丽，只是花的内在美。

**Demis Hassabis (01:53:22)** And I agree with that. I think we need to approach it with whatever you want to call it, a spiritual dimension or humanist dimension. Doesn’t have to be to do with religion, but this idea of a soul, what makes us human, this spark that we have, perhaps it’s to do with consciousness when we finally understand that, I think that has to be at the heart of the endeavor. And technology, I’ve always seen technology as the enabler, the tools that enable us to flourish and to understand more about the world. And I’m with Feynman on this, and he used to always talk about science and art being companions. You can understand it from both sides, the beauty of a flower, how beautiful it is, and also understand why the colors of the flower evolve like that. That just makes it more beautiful, just the intrinsic beauty of the flower.

(01:54:10) 我一直那样看它。也许在文艺复兴时期，那时的伟大发现者，像达·芬奇那样的人，我认为他看不到科学和艺术以及也许宗教之间的任何区别。一切都只是，只是作为人类和被我们周围世界启发的一部分。那就是我试图采取的哲学。我最喜欢的哲学家之一是斯宾诺莎（Spinoza）。我认为他非常好地结合了那一切，试图理解宇宙并理解我们在其中的位置的想法。那是他理解宗教的方式。我认为那相当美丽。对我来说，所有这些东西都是相关的，相互关联的，技术以及作为人类的意义。

(01:54:10) I’ve always seen it like that. And maybe in the Renaissance times, the great discoverers then, people like Da Vinci, I don’t think he saw any difference between science and art and perhaps religion. Everything was, it’s just part of being human and being inspired about the world around us. And that’s the philosophy I tried to take. And one of my favorite philosophers is Spinoza. And I think he combined that all very well, this idea of trying to understand the universe and understanding our place in it. And that was his way of understanding religion. And I think that’s quite beautiful. And for me, all of these things are related, interrelated, the technology and what it means to be human.

(01:54:53) 但我认为非常重要的是，当我们沉浸在技术和研究中时，要记住那一点，我认为我在我们领域看到的很多研究人员有点太狭隘，只理解技术。我认为那也是为什么这被社会广泛讨论很重要。我非常支持像将要发生的 AI 峰会这样的事情，以及政府理解它。我认为聊天机器人时代和 AI 的产品时代的一件好事是，普通人可以实际感受和互动尖端 AI，并亲自感受它。

(01:54:53) And I think it’s very important though that we remember that as when we’re immersed in the technology and the research, I think a lot of researchers that I see in our field are a little bit too narrow and only understand the technology. And I think also that’s why it’s important for this to be debated by society at large. I’m very supportive of things like the AI summits that will happen and governments understanding it. And I think that’s one good thing about the chatbot era and the product era of AI is that everyday person can actually feel and interact with cutting edge AI and feel it for themselves.

**Lex Fridman  (01:55:30)** 是的，因为他们迫使技术人员进行人类对话。是的，当然。

**Lex Fridman (01:55:30)** Yeah, because they force the technologists to have the human conversation. Yeah, for sure.

**Demis Hassabis  (01:55:30)** 是的。

**Demis Hassabis (01:55:30)** Yeah.

**Lex Fridman  (01:55:35)** 那是它有希望的一面，就像你说的，它是一种双重用途技术，我们强制将全人类融入其中，融入关于 AI 的讨论，因为最终 AI，AGI 将被用于国家使用技术的用途，即冲突等等。我们越多地通过与他们聊天将人类融入这幅图景，我们就越能引导。

**Lex Fridman (01:55:35)** That’s the hopeful aspect of it, like you said, it’s a dual use technology that we’re forcefully integrating the entire humanity into it, into the discussion about AI because ultimately AI, AGI will be used for things that states use technologies for, which is conflict and so on. And the more we integrate humans into this picture by having chats with them, the more we will guide.

**Demis Hassabis  (01:56:01)** 是的，能够适应，社会将能够适应这些技术，我们过去总是用我们过去发明的不可思议的技术做到这一点。

**Demis Hassabis (01:56:01)** Yeah, be able to adapt, society will be able to adapt to these technologies we’ve always done in the past with the incredible technologies we’ve invented in the past.

**Lex Fridman  (01:56:10)** 你认为会有像曼哈顿计划那样的东西吗，这种技术的力量会升级，国家以他们的旧思维方式，会试图将其用作武器技术，并且会有这种升级？

**Lex Fridman (01:56:10)** Do you think there will be something like a Manhattan Project where there will be an escalation of the power of this technology and states in their old way of thinking, we’ll try to use it as weapons technologies and there will be this escalation?

**Demis Hassabis  (01:56:27)** 我希望不会。我认为那样做会非常危险。我也认为不是技术的正确用途。我希望我们最终会得到更协作的东西，如果需要的话，更像一个 CERN 项目，那里以研究为重点，世界上最好的头脑聚集在一起，仔细完成最后的步骤，并在部署到世界之前确保负责任地完成。我们会看到。在当前的地缘政治气候下，我认为很难看到合作，但事情可以改变。我认为至少在科学层面上，研究人员保持联系并至少在那些话题上保持亲密很重要。

**Demis Hassabis (01:56:27)** I hope not. I think that would be very dangerous to do. And I think also not the right use of the technology. I hope we’ll end up with something more collaborative if needed, more like a CERN project where it’s research-focused and the best minds in the world come together to carefully complete the final steps and make sure it’s responsibly done before deploying it to the world. We’ll see. It’s difficult with the current geopolitical climate, I think, to see cooperation, but things can change. And I think at least on the scientific level, it’s important for the researchers to keep in touch and keep close to each other at least on those kinds of topics.

**Lex Fridman  (01:57:17)** 我个人相信，在教育和移民方面，如果双向，西方的人移民到中国，中国的人移民回来，那将是非常好的。只是有些人际家庭方面的人只是相互混合，从而那些联系变得牢固。所以你无法按照旧的思维方式相互对立。所以多元文化、多学科的研究团队致力于科学问题，那就像希望。不要让好战的领导人分裂我们。我认为科学是最终真正美丽的连接器。

**Lex Fridman (01:57:17)** And I personally believe on the education side and immigration side, it would be great if both directions, people from the West immigrated to China and China, back. There is some family human aspect of people just intermixing and thereby those ties grow strong. So you can’t divide against each other, this old school way of thinking. And so multicultural, multidisciplinary research teams working on scientific questions, that’s like the hope. Don’t let the leaders that are warmongers divide us. I think science is the ultimately really beautiful connector.

**Demis Hassabis  (01:57:55)** 是的，科学一直是，我认为，相当合作的事业，科学家知道它也是一项集体事业，我们都可以互相学习。所以也许它可以成为一个载体，获得一点合作。

**Demis Hassabis (01:57:55)** Yeah, science has always been, I think, quite a very collaborative endeavor and scientists know that it’s a collective endeavor as well, and we can all learn from each other. So perhaps it could be a vector to get a bit of cooperation.

p(厄运)

p(doom)

**Lex Fridman  (01:58:08)** 荒谬的问题，你的 P(厄运)（P-doom）是多少？人类文明自我毁灭的概率？

**Lex Fridman (01:58:08)** Ridiculous question, what’s your P-Doom? Probability of the human civilization destroys itself?

**Demis Hassabis  (01:58:14)** 嗯，看，我没有一个 P(厄运) 数字。原因是我认为那会暗示一种不存在的精确水平。所以我不知道人们是如何得到他们的 P(厄运) 数字的。我认为这是一个有点荒谬的概念，因为我要说的是它肯定非零，并且可能不可忽略。所以那本身就很发人深省。我的观点是，这些技术将能够做什么，它们将以多快的速度起飞，它们将有多可控，是极其不确定的。有些东西可能结果，并且希望比我们想的容易得多，但可能有一些真正困难的问题比我们今天猜想的更难，我认为我们不确定那一点。所以在很多不确定性但 stakes 巨大的条件下，两方面都是。

**Demis Hassabis (01:58:14)** Well, look, I don’t have a P-Doom number. The reason I don’t is because I think it would imply a level of precision that is not there. So I don’t know how people are getting their P-Doom numbers. I think it’s a little bit of ridiculous notion because what I would say is it’s definitely non-zero and it’s probably non-negligible. So that in itself is pretty sobering. And my view is it’s just hugely uncertain what these technologies are going to be able to do, how fast are they going to take off, how controllable are they going to be. Some things may turn out to be, and hopefully way easier than we thought, but it may be there’s some really hard problems that are harder than we guessed today, and I think we don’t know that for sure. And so under those conditions of a lot of uncertainty, but huge stakes both ways.

(01:59:09) 一方面，我们可以解决所有疾病、能源问题、稀缺问题，然后走向星际，意识遍布星际，最大程度的人类繁荣。另一方面，是这些 P(厄运) scenario。所以考虑到围绕它的不确定性和它的重要性，对我来说很清楚，唯一理性、明智的方法是谨慎乐观地进行。所以我们当然想要好处，以及 AI 能带来的所有惊人东西。实际上，如果我不知道像 AI 这样的东西即将到来，考虑到我们面临的其他挑战，气候、老龄化、资源，所有那一切，我会真的很担心人类。我们将如何解决所有其他问题？我认为很难。所以我认为它对好事可能是惊人的变革性的。但另一方面，也有这些我们知道存在的风险。

(01:59:09) On the one hand, we could solve all diseases, energy problems, the scarcity problem, and then travel to the stars and conscious of the stars and maximum human flourishing. On the other hand, is these P-Doom scenarios. So given the uncertainty around it and the importance of it, it’s clear to me the only rational, sensible approach is to proceed with cautious optimism. So we want the benefits of course, and all of the amazing things that AI can bring. And actually, I would be really worried for humanity given the other challenges that we have, climate, aging, resources, all of that if I didn’t know something like AI was coming down the line. How would we solve all those other problems? I think it’s hard. So I think it could be amazingly transformative for good. But on the other hand, there are these risks that we know are there.

**Demis Hassabis  (02:00:00)** 但另一方面，也有这些我们知道存在的风险，但我们无法完全量化。所以最好的事情是使用科学方法做更多的研究，以更精确地定义那些风险，当然解决它们。我认为那正是我们在做的。我认为随着我们越来越接近 AGI 界线，可能需要比现在多 10 倍的努力。

**Demis Hassabis (02:00:00)** But on the other hand, there are these risks that we know are there, but we can’t quite quantify. So the best thing to do is to use the scientific method to do more research to try and more precisely define those risks and of course address them. And I think that’s what we’re doing. I think there probably needs to be 10 times more effort of that than there is now as we are getting closer and closer to the AGI line.

**Lex Fridman  (02:00:27)** 什么会更让你担心？是人类造成的还是 AI，AGI 造成的？是人类滥用那项技术 versus AGI 本身通过你谈论过的机制，这很迷人，欺骗或这种东西变得越来越好越来越好然后逃脱？

**Lex Fridman (02:00:27)** What would be the source of worry for you more? Would it be human-caused or AI, AGI caused? Are humans abusing that technology versus AGI itself through mechanism that you’ve spoken about, which is fascinating, deception or this kind of stuff getting better and better and better secretly and then escapes?

**Demis Hassabis  (02:00:45)** 我认为它们在不同的时间尺度上运作，并且同样重要需要解决。所以只是坏行为者使用新技术的常见情况，在这种情况下是通用技术，并将其重新用于有害目的。那是一个巨大的风险，我认为那有很多 complications，因为通常我非常支持开放科学和开源，事实上，我们对我们所有的科学项目如 AlphaFold 和所有那些东西都这样做了，为了科学界的利益。但如何限制坏行为者访问这些强大的系统，无论他们是个人甚至是流氓国家，但同时 enable access to good actors to maximally build on top of？这是一个相当棘手的问题，我没有听到明确的解决方案。所以有坏行为者用例问题，然后显然，随着系统变得更具代理性并更接近 AGI 和更自治，我们如何确保护栏以及它们坚持我们想要它们做的事情并在我们的控制之下？

**Demis Hassabis (02:00:45)** I think they operate over different timescales and they’re equally important to address. So there’s just the common garden variety of bad actors using new technology, in this case, general purpose technology and repurposing it for harmful end. And that’s a huge risk and I think that has a lot of complications because generally I’m in huge favor of open science and open source, and in fact, we did it with all our science projects like AlphaFold and all of those things for the benefit of the scientific community. But how does one restrict bad actors access to these powerful systems, whether they’re individuals or even rogue states, but enable access at the same time to good actors to maximally build on top of? It’s pretty tricky problem that I’ve not heard a clear solution to. So there’s the bad actor use case problem, and then there’s obviously, as the systems become more agentic and closer to AGI and more autonomous, how do we ensure the guardrails and they stick to what we want them to do and under our control?

**Lex Fridman  (02:01:52)** 是的，我倾向于，也许我的思维有限，更担心人类，所以是坏行为者。而那可能部分是如何不将破坏性技术交到坏行为者手中，但另一方面，从地缘政治技术角度来看，如何减少世界上的坏行为者数量？那也是一个有趣的人类问题。

**Lex Fridman (02:01:52)** Yeah, I tend to, maybe my mind is limited, worry more about the humans, so the bad actors. And there it could be in part how do you not put destructive technology in the hands of bad actors, but in another part from, again, geopolitical technology perspective, how do you reduce the number of bad actors in the world? That’s also an interesting human problem.

**Demis Hassabis  (02:02:14)** 是的，那是一个难题。我的意思是，看，我们也许也可以使用技术本身来帮助一些坏行为者用例的早期预警，对吧？无论是生物还是核或无论什么，AI 可能在那里有帮助，只要你使用的 AI 本身是可靠的，对吧？所以这是一种互锁的问题，那使得它非常棘手。再次，它可能需要国际上的一些协议，至少在中国和美国之间的一些基本标准。对。

**Demis Hassabis (02:02:14)** Yeah, it’s a hard problem. I mean, look, we can maybe also use the technology itself to help early warning on some of the bad actor use cases, right? Whether that’s bio or nuclear or whatever it is, AI could be potentially helpful there as long as the AI that you’re using is itself reliable, right? So it’s a sort of interlocking problem and that’s what makes it very tricky. And again, it may require some agreement internationally, at least between China and the U.S. of some basic standards. Right.

人性

Humanity

**Lex Fridman  (02:02:50)** 我必须问你关于这本书，《狂人》。有上帝之手时刻，李世石（Lee Sedol）的第 78 手，那也许是最后一次人类做出了纯粹人类天才的一手并击败了 AlphaGo 或打破了它的大脑。

**Lex Fridman (02:02:50)** I have to ask you about the book, The Maniac. There’s the hand of God moment, Lee Sedol’s move 78 that perhaps the last time a human did a move of pure human genius and beat AlphaGo or broke its brain.

**Demis Hassabis  (02:03:08)** 是的。

**Demis Hassabis (02:03:08)** Yes.

**Lex Fridman  (02:03:08)** 抱歉拟人化，但那是一个有趣的时刻，因为我认为在很多领域它会不断发生。

**Lex Fridman (02:03:08)** Sorry to anthropomorphize, but it’s an interesting moment because I think in so many domains it will keep happening.

**Demis Hassabis  (02:03:14)** 是的，那是一个特殊的时刻，对李世石来说太棒了。我认为在某种程度上他们互相启发。我们作为一个团队被李世石的才华和高尚所启发。然后也许他受到 AlphaGo 所做的事情的启发，从而 conjure 了这个不可思议的灵感时刻，在关于它的纪录片中捕捉得很好。我认为那将在许多领域继续，至少再次在可预见的未来，人类带来他们的聪明才智并提出正确的问题，让我们说，然后以某种方式利用这些工具，从而破解一个问题。

**Demis Hassabis (02:03:14)** Yeah, it’s a special moment and it was great for Lee Sedol. I think it’s in a way they were inspiring each other. We as a team were inspired by Lee Sedol’s brilliance and nobleness. Then maybe he got inspired by what AlphaGo was doing to then conjure this incredible inspirational moment, captured very well in the documentary about it. And I think that’ll continue in many domains where there’s this, at least again for the foreseeable future, of the humans bringing in their ingenuity and asking the right question, let’s say, and then utilizing these tools in a way that then cracks a problem.

**Lex Fridman  (02:03:58)** 是的。随着 AI 变得越来越聪明，我们可以问自己的一个有趣问题是什么让人类特别？感觉也许有偏见，我们人类是 deeply special。我不知道是否是我们的智力，可能是别的东西，那个在理性的疯狂梦想之外的东西。

**Lex Fridman (02:03:58)** Yeah. As the AI become smarter and smarter, one of the interesting questions we can ask ourselves is what makes humans special? It does feel perhaps biased that we humans are deeply special. I don’t know if it’s our intelligence, it could be something else, that other thing that’s outside the mad dreams of reason.

**Demis Hassabis  (02:04:20)** 我认为那正是我从小一直想象的，当我开始这段旅程时，我当然对像意识这样的东西着迷，做了一个神经科学博士来看大脑如何工作，特别是想象力和记忆。我专注于海马体，并且 sort of 会很有趣。我一直认为最好的方式，当然一个人可以哲学化并做思想实验，甚至可能做像你在神经科学中对真实大脑做的实际实验。但最终，我一直想象构建 AI，一种智能人造物，然后将其与人脑进行比较，看看差异是什么，将是揭示人脑特殊之处的最佳方式，如果确实有什么特殊之处的话。

**Demis Hassabis (02:04:20)** I think that’s what I’ve always imagined when I was a kid and starting on this journey of I was of course fascinated by things like consciousness, did a neuroscience PhD to look at how the brain works, especially imagination and memory. I focused on the hippocampus and it’s sort of going to be interesting. I always thought the best way, of course, one can philosophize about it and have thought experiments and maybe even do actual experiments like you do in neuroscience on real brains. But in the end, I always imagine that building AI, a kind of intelligent artifact, and then comparing that to the human mind and seeing what the differences were would be the best way to uncover what’s special about the human mind, if indeed there is anything special.

(02:05:00) 我怀疑很可能有，但很难……我认为我们正在进行的这段旅程将帮助我们理解那一点并定义那一点。碳基基质（我们是的）和硅基基质在处理信息时可能存在差异。我最喜欢的意识定义之一是，它是信息被处理时的感觉方式，对吧？

(02:05:00) And I suspect there probably is, but it’s going to be hard to… I think this journey we’re on will help us understand that and define that. And there may be a difference between carbon based substrates that we are and silicon ones when they process information. One of the best definitions I like of consciousness is it’s the way information feels when we process it, right?

**Lex Fridman  (02:05:22)** 是的。

**Lex Fridman (02:05:22)** Yeah.

**Demis Hassabis  (02:05:24)** 可能是。我的意思是，这不是一个非常有用的科学解释，但我认为它是一种有趣的直观解释。所以在这段旅程中，我们正在进行的科学旅程，我认为将帮助揭开那个谜团。

**Demis Hassabis (02:05:24)** It could be. I mean, it’s not a very helpful scientific explanation, but I think it’s kind of interesting intuitive one. And so on this journey, this scientific journey we’re on will I think help uncover that mystery.

**Lex Fridman  (02:05:36)** 是的。我不能创造的东西，我就不理解。那是你深深钦佩的人，理查德·费曼（Richard Feynman），就像你提到的。你也追求维格纳（Wigner）在受限领域中看到的普遍性梦想，但也在数学等方面 broadly generally。所以很多方面你在推动，不是为了在最后惹麻烦，而是罗杰·彭罗斯（Roger Penrose）。

**Lex Fridman (02:05:36)** Yeah. What I cannot create, I do not understand. That’s somebody you deeply admire, Richard Feynman, like you mentioned. You also reach for the Wigner’s dreams of universality that he saw in constrained domains, but also broadly generally in mathematics and so on. So many aspects on which you’re pushing towards not to start trouble at the end, but Roger Penrose.

意识与量子计算

Consciousness and quantum computation

**Demis Hassabis  (02:06:00)** 是的。好的。

**Demis Hassabis (02:06:00)** Yes. Okay.

**Lex Fridman  (02:06:04)** 所以你认为意识，有这个意识的难题，信息感觉如何。你认为意识，首先，是一种计算吗？如果是，如果它是信息处理，就像你说的，一切都是，它是可以被经典计算机建模的东西吗？

**Lex Fridman (02:06:04)** So do you think consciousness, there’s this hard problem of consciousness, how information feels. Do you think consciousness, first of all, is a computation? And if is, if it’s information processing, like you said, everything is, is it something that could be modeled by a classical computer?

**Demis Hassabis  (02:06:23)** 是的。

**Demis Hassabis (02:06:23)** Yeah.

**Lex Fridman  (02:06:24)** 或者它具有量子力学性质？

**Lex Fridman (02:06:24)** Or is it a quantum mechanical in nature?

**Demis Hassabis  (02:06:26)** 嗯，看，彭罗斯是一个惊人的思想家，现代最伟大的人物之一，我们对此进行了很多讨论。当然，我们礼貌地不同意，我觉得……我的意思是，他与很多优秀的神经科学家合作，看看是否能找到大脑中量子力学行为的机制。据我所知，他们还没有找到任何令人信服的东西。所以我的赌注是，大脑中发生的 mostly 只是经典计算，这表明所有现象都可以被经典计算机建模或模仿。但我们会看到。可能有这最后神秘的事情，意识的感觉，感质（qualia），这些哲学家争论的事情，那是基质独有的。

**Demis Hassabis (02:06:26)** Well, look, Penrose is an amazing thinker, one of the greatest of the modern era, and we’ve had a lot of discussions about this. Of course, we cordially disagree, which is I feel like… I mean, he collaborated with a lot of good neuroscientists to see if he could find mechanisms for quantum mechanics behavior in the brain. And to my knowledge, they haven’t found anything convincing yet. So my betting is that it’s mostly it is just classical computing that’s going on in the brain, which suggests that all the phenomena are modelable or mimicable by a classical computer. But we’ll see. There may be this final mysterious things of the feeling of consciousness, the qualia, these kinds of things that philosophers debate where it’s unique to the substrate.

(02:07:12) 我们甚至可能 towards understanding that when if we do things like neural link or have neural interfaces to the AI systems，我认为我们可能最终会，也许是为了跟上 AI 系统，我们可能实际上能够为自己感受在硅上计算是什么感觉，对吧？也许那会告诉我们。所以我认为那会很有趣。我曾经与已故的丹尼尔·丹尼特（Daniel Dennett）辩论过，为什么我们认为彼此有意识？好吧，所以有两个原因。一个是你表现出与我相同的行为。所以那是一件事。在行为上，你看起来像是一个有意识的存在，如果我是。

(02:07:12) We may even come towards understanding that when if we do things like neural link or have neural interfaces to the AI systems, which I think we probably will eventually, maybe to keep up with the AI systems, we might actually be able to feel for ourselves what it’s like to compute on silicon, right? And maybe that will tell us. So I think it’s going to be interesting. I had a debate once with the late Daniel Dennett about why do we think each other are conscious? Okay, so it’s for two reasons. One is you’re exhibiting the same behavior that I am. So that’s one thing. Behaviorally you seem like a conscious being if I am.

(02:07:49) 但第二件经常被忽视的事情是，我们运行在相同的基质上。所以如果你的行为方式相同，并且我们运行在相同的基质上，最简约的假设是你感觉到的体验与我感觉到的相同。但对于一个在硅上的 AI，我们将无法依赖第二部分，即使它表现出第一部分，那行为看起来像是一个有意识存在的行为。它甚至可能声称它是，但我们不会知道它实际感觉如何，它可能也不知道我们感觉如何，至少在最初阶段。也许当我们达到超级智能和它构建的技术时，也许我们将能够弥合那个。

(02:07:49) But the second thing which is often overlooked is that we’re running on the same substrate. So if you’re behaving in the same way and we’re running on the same substrate, it’s most parsimonious to assume you’re feeling the same experience that I’m feeling. But with an AI that’s on silicon, we won’t be able to rely on the second part, even if it exhibits the first part, that behavior looks like a behavior of a conscious being. It might even claim it is, but we wouldn’t know how it actually felt and it probably couldn’t know what we felt, at least in the first stages. Maybe when we get to superintelligence and the technologies that builds, perhaps we’ll be able to bridge that.

**Lex Fridman  (02:08:26)** 不，我的意思是那是对彻底共情（radical empathy）的巨大考验，是去共情一个不同的基质。

**Lex Fridman (02:08:26)** No, I mean that’s a huge test for radical empathy is to empathize with a different substrate.

**Demis Hassabis  (02:08:32)** 对。正是。我们以前从未不得不面对那个。

**Demis Hassabis (02:08:32)** Right. Exactly. We’ve never had to confront that before.

**Lex Fridman  (02:08:36)** 是的。所以也许通过脑机接口能够真正共情作为计算机、进行计算的感觉。

**Lex Fridman (02:08:36)** Yeah. So maybe through brain computer interfaces be able to truly empathize what it feels like to be a computer, to compute.

**Demis Hassabis  (02:08:42)** 嗯，对于信息被计算不是在碳系统上。

**Demis Hassabis (02:08:42)** Well, for information to be computed not on a carbon system.

**Lex Fridman  (02:08:46)** 我的意思是，那是 deeply……有些人有点用植物、其他生命形式来思考那个，它们是不同的。

**Lex Fridman (02:08:46)** I mean, that’s deeply… Some people kind of think about that with plants, with other life forms which are different.

**Demis Hassabis  (02:08:51)** 是的，可能正是。

**Demis Hassabis (02:08:51)** Yes, it could be exactly.

**Lex Fridman  (02:08:53)** 相似的基质，但在进化树上足够远，需要彻底的共情，但对计算机做那个。

**Lex Fridman (02:08:53)** Similar substrate, but sufficiently far enough on the evolutionary tree that it requires a radical empathy, but to do that with a computer.

**Demis Hassabis  (02:09:02)** 我的意思是，看，有关于这个的动物研究。当然，高等动物如虎鲸、海豚、狗和猴子，它们肯定有意识的某些方面，对吧？即使它们可能在智商意义上不那么聪明。所以我们已经可以共情那个，也许有一天我们的一些系统，比如我们构建了这个叫做 DolphinGemma 的东西，我们的一个系统版本在海豚和鲸鱼的声音上训练，也许我们能够在某个时候构建一个解释器或翻译器，那将非常酷。

**Demis Hassabis (02:09:02)** I mean, look, there are animal studies on this. Of course, higher animals like killer whales and dolphins and dogs and monkeys, they have some, and elephants, they have some aspects certainly of consciousness, right? Even though they might not be that smart on an IQ sense. So we can already empathize with that and maybe even some of our systems one day, like we built this thing called DolphinGemma, which a version of our system was trained on dolphin and whale sounds, and maybe we’ll be able to build an interpreter or translator at some point which would be pretty cool.

**Lex Fridman  (02:09:35)** 什么让你对人类文明的未来充满希望？

**Lex Fridman (02:09:35)** What gives you hope for the future of human civilization?

**Demis Hassabis  (02:09:38)** 嗯，让我充满希望的是我认为我们几乎无限的聪明才智，首先。我认为我们中最好的人以及最好的人类头脑是不可思议的。我热爱遇见和观看任何处于巅峰状态的人类，无论是体育、科学还是艺术，没有什么比那更美妙的了，看到他们处于他们的元素中，处于心流状态。我认为那几乎是无限的。我们的大脑是通用系统，智能系统，所以我认为我们用它 potentially 能做的事情几乎是无限的。然后另一件事是我们极强的适应性。我认为在 terms of 将会有很多变化的情况下，它会没事的，但看看我们现在在哪里，没有有效地我们的狩猎采集者大脑。

**Demis Hassabis (02:09:38)** Well, what gives me hope is that I think our almost limitless ingenuity, first of all. I think the best of us and the best human minds are incredible. And I love meeting and watching any human that’s the top of their game, whether that’s sport or science or art, it’s just nothing more wonderful than that, seeing them in their element in flow. I think it’s almost limitless. Our brains are general systems, intelligent systems, so I think it’s almost limitless what we can potentially do with them. And then the other thing is our extreme adaptability. I think it’s going to be okay in terms of there’s going to be a lot of change, but look where we are now without effectively our hunter-gatherer brains.

(02:10:24) 我们如何能应对现代世界，对吧？乘坐飞机，做播客，玩电脑游戏和虚拟模拟。我的意思是，考虑到我们的心智是为了在苔原上猎杀野牛而发展的，这已经令人 mind blowing。所以我认为这只是下一步，并且实际上看到社会已经适应了我们今天已经拥有的这种令人 mind blowing 的 AI 技术，这有点有趣。就像，“哦，我和聊天机器人聊天。完全没问题。”

(02:10:24) How is it we can cope with the modern world, right? Flying on planes, doing podcasts, playing computer games and virtual simulations. I mean, it’s already mind blowing given that our mind was developed for hunting buffaloes on the tundra. And so I think this is just the next step, and it’s actually kind of interesting to see how society’s already adapted to this mind blowing AI technology we have today already. It’s sort of like, “Oh, I talked to chat bots. Totally fine.”

**Lex Fridman  (02:10:54)** 而且很有可能这个播客活动，我在这里是为了这个，将完全被 AI 取代。我非常容易被取代，我在等待它。

**Lex Fridman (02:10:54)** And it’s very possible that this very podcast activity, which I’m here for, will be completely replaced by AI. I’m very replaceable and I’m waiting for it.

**Demis Hassabis  (02:11:02)** 达不到你能做的水平，Lex，我不认为。

**Demis Hassabis (02:11:02)** Not to the level that you can do it, Lex, I don’t think.

**Lex Fridman  (02:11:04)** 谢谢。这就是我们人类互相做的事情。我们恭维。

**Lex Fridman (02:11:04)** Thank you. That’s what we humans do to each other. We compliment.

**Demis Hassabis  (02:11:08)** 正是。

**Demis Hassabis (02:11:08)** Exactly.

**Lex Fridman  (02:11:09)** 好吧。我深深地感激我们人类拥有无限的好奇心、适应性，就像你说的，以及同情和爱的能力。

**Lex Fridman (02:11:09)** All right. And I’m deeply grateful for us humans to have this infinite capacity for curiosity, adaptability, like you said, and also compassion and ability to love.

**Demis Hassabis  (02:11:18)** 正是。

**Demis Hassabis (02:11:18)** Exactly.

**Lex Fridman  (02:11:19)** 所有那些 deeply human 的事情。

**Lex Fridman (02:11:19)** All of those human things.

**Demis Hassabis  (02:11:19)** 所有 deeply human 的事情。

**Demis Hassabis (02:11:19)** All the things that are deeply human.

**Lex Fridman  (02:11:21)** 嗯，这是巨大的荣誉，Demis。你是世界上真正特别的人类之一。非常感谢你所做的一切以及今天的交谈。

**Lex Fridman (02:11:21)** Well, this is a huge honor, Demis. You are one of the truly special humans in the world. Thank you so much for doing what you do and for talking today.

**Demis Hassabis  (02:11:29)** 嗯，非常感谢你，Lex。

**Demis Hassabis (02:11:29)** Well, thank you very much, Lex.

**Lex Fridman  (02:11:32)** 感谢收听与 Demis Hassabis 的对话。

**Lex Fridman (02:11:32)** Thanks for listening to this conversation with Demis Hassabis.

**（全文完）**