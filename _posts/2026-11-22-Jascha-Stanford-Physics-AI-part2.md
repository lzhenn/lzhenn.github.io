---
layout: post
title: "给年轻研究者的建议（下）：年轻研究者该把时间花在哪里｜Jascha Sohl-Dickstein 斯坦福演讲"
categories: podcast
tags: [thinking, AI]
author: LZN
description: "在斯坦福物理与人工智能大会上，贾沙·索尔-迪克斯坦讨论了AI 时代怎样选研究课题，并回答了关于编程、研究品味和实验科学的现场提问。"
---

_书童按：本篇是贾沙·索尔-迪克斯坦（Jascha Sohl-Dickstein）2026 年 6 月 12 日在斯坦福大学物理与人工智能大会上的演讲《在人类世的开端与终章，给年轻研究者的建议》（Advice for a Young Investigator in the First and Last Days of the Anthropocene）实录。索尔-迪克斯坦是 Anthropic 研究员，也是扩散模型的早期研究者。他把演讲前半场对 AGI 的预测，化为研究者今天就要作的选择：怎样选课题，哪些工作值得交给 AI，又怎样判断自己的贡献。现场听众接着问起研究品味、学编程的价值，以及风洞实验和理论预测之间的距离。译稿由 Luna 初译，DeepSeek 与 Qwen 校审。全文分上下两篇，此为下篇，以飨诸君。_

[演讲录像](https://www.youtube.com/watch?v=3LZN2UUxDos) · [斯坦福大学会议页](https://events.stanford.edu/event/2026-conference-on-physics-and-ai-pai26)。原演讲及录像版权归各自权利人所有。本中英文对照翻译稿件，仅作为交流学习之用。

英文保留所附字幕的措辞。时间标记对应每个意群首句所在的字幕，同一条字幕内换人时沿用该条时间。中文据上下文辨认明显误听的专名；个别现场提问在字幕中仅有片语。

## 时间有限，怎样选课题

<!-- T002P01 -->
**索尔-迪克斯坦（21:28）** 如果我们认真看待这些时间线，作为个人我们该做些什么？这或许是我们最后还能在智识上大放异彩的时刻。首先，我们要确保自己的项目完成时仍然有意义。如今，只要向当前最好的基础模型发出提示，就能以极少的人力完成某种科学工作，而且能力还在不断提升。我们最该避免的情况是：你拼命工作两年，取得了显著的线性进展，可等你完成时，别人只要问基础模型一个问题，就能取得更好的成果。这意味着要和别人一起做目标明确的项目，以便快速推进、跑在指数增长前面。这不利于慢慢摸索、容许自己走弯路的研究。这真的很遗憾，因为我最喜欢做的恰恰就是这种科学。所以我很不愿意这么说，但我认为现实就是如此。

**Jascha Sohl-Dickstein (21:28)** Okay. If we take these timelines seriously, what should we as as individuals do? These are like plausibly our our last moments to to intellectually shine. Um first, we should make sure our our projects are are still going to be relevant when they're when they're completed. Um there is like some like improving curve of like science that can be done with like minimal human effort just by prompting the best best current foundation model. And one outcome that you really really want to avoid is that you work like super hard for two years and and make significant linear progress but by the time you're done someone can achieve something better like just by asking a a foundation model. Um this this suggests working like on targeted projects like with others so that you can go fast and and stay ahead of the exponential. Um it it discourages slow meandering exploration. Um which I which is like really unfortunate because that's like the kind of science I like love doing the most. So so so I hate saying this but I I think it is nonetheless like like as the world is.

<!-- T002P02 -->
**索尔-迪克斯坦（22:39）** 2019 年，理查德·萨顿（Richard Sutton）发表了一篇很棒的文章，名为《苦涩的教训》。他指出，利用计算能力的通用方法最终最有效。《苦涩的教训》或许有正反两面的启示：如果你做的项目会随着算力和智能规模的扩大而变得更有效，甚至能反过来推动这个过程，那么成果的影响力会远超预期。反过来说，千万别做那些只要规模扩大就终究会被解决的项目——可能在你完成之前就会如此。你得逼自己用上手边的 AI 工具。它们让你能做一些全新的事……哎呀。能做的事太多了。哦，还好，还好，那段时间是留给提问的。等一下，我一直看的是后墙上那只钟。好，好，我还有时间。刚才真吓了我一跳。嗯，得讲快点。好，我们继续。

**Jascha Sohl-Dickstein (22:39)** Um, in 2019, Richard Sutton published an a great essay called called the bitter lesson. Um, he observed that uh um he observed that general methods that leverage computation are ultimately the the most effective. Uh the bitter lesson has maybe a positive end and a negative takeaway. Um, if you work on projects that become more effective as compute and intelligence scales or even better feedback into that process, then the results will be like much higher impact than you than you would anticipate. The the negative is that you like really really don't want to work on projects that are going to be solved anyway with scale um like possibly before you even even finish the project. you should force yourself to use the AI tools available to you. Um, they provide like fundamentally new Oh, man. Okay. Massive affordances. Um, oh, good, good. That's the That's the question period. Wait, is the I've been watching the clock on the back wall. Okay. Okay. Okay. Good. I'm I'm good. I'm good. Okay. That was terrifying. Um, yeah. Much faster. Um, all right. Um,

<!-- T002P03 -->
**索尔-迪克斯坦（24:04）** AI 模型的用户体验往往还是很糟，就像早期那种“没有马的马车”。但这不重要，它们仍然很有用。你应该使用它们来构思和反复打磨研究想法，也可以听听它们对你文章的意见。请不要让它们替你写初稿，但请用它们指出你所有可能出错的地方。我现在一行代码都不亲手写了，几乎连看都不看，可我天天都在编程。你也可以用它们反复推进任何你想做的复杂分析。我只要对什么东西好奇，就会搭一个定制仪表板，让它生成好几页图表，效果惊人。这也部分回答了上一张幻灯片的问题：如果你身处指数增长之中，就不会落在指数增长后面，对吧？

**Jascha Sohl-Dickstein (24:04)** okay. AI models, the UX often still sucks. They're like a horseless carriage. Um, it doesn't matter. They they still provide a lot of benefit. Um, you should use them. You should use them to like brainstorm and iterate on research ideas. You should use them to like get feedback on your writing. Please don't use them to write the first draft, but but please do use them to to tell you all the ways you're wrong. Um, you should I I don't write any code at all anymore. I barely even look at code. Um, even though I like code every day. Um, you should use them to like iterate on like whatever complex analysis your heart desires. Like I I spin up a custom dashboard whenever I curious about something and it makes like you know pages of plots and it's amazing. Um, this is also partially an answer to the previous slide. You can't like fall behind the exponential if you are like on the exponential, right?

<!-- T002P04 -->
**索尔-迪克斯坦（24:59）** 和大语言模型合作，很像担任课题组负责人；做其中一件事，就是在为另一件事练手。它们都要求明确界定任务范围，并清楚沟通任务和预期。如果你想当课题组负责人，就练习告诉模型该做什么。如果你已经是课题组负责人，那你受过的训练正好对口，应该很擅长这件事。

**Jascha Sohl-Dickstein (24:59)** Um, working with LLM is a lot like being a PI. Like they're both great practice for each other. They require clear scoping and and communication of tasks um and and expectations. Um, so if you want to be a PI, like practice telling the models what to do. If you are a PI, you you should have very targeted training and you should be great at this.

<!-- T002P05 -->
**索尔-迪克斯坦（25:22）** 这场演讲的起因，是我和一位能力很强的研究生聊天。他说自己觉得三年后我们就会有通用人工智能。几分钟后，这位学生又说：“哦对，我再过几年就博士毕业，然后做博士后，再之后我想申请教职。”我当时就想：如果你脑子的一部分相信这种改变世界的技术即将到来，你也应该让脑子的其他部分相信这一点。我不知道十年或二十年后的学术工作会是什么样，也不知道任何工作会是什么样，但我非常确定，它会和今天大不相同。

**Jascha Sohl-Dickstein (25:22)** Um, this talk was motivated by a conversation I had with a with a very capable grad student and they were talking about how they thought we were going to have AGI in three years and then a few minutes later they were like, "Oh yeah, I'm going to finish my PhD in a couple years and then I'm going to get a posttock and then after that I figure I'll apply to faculty jobs and and I was if you believe in like one part of your brain that that this like world changing technology is coming, you should also So believe in other parts of your brain. Um I don't know what an academic job is going to look like in like 10 or 20 years. Um I I don't know what any job is going to look like in in 10 or 20 years, but I am like very sure it is going to look very different than it does today.

<!-- T002P06 -->
**索尔-迪克斯坦（26:10）** 所以你应该假设自己目前的职业道路并不稳定，并据此做规划。人们做人生决定时常常权衡风险和回报，对吧？你会选择稳妥的选项，而放弃那个一旦成功、回报可能更高的选项。但如果 AI 会造成大规模动荡，那么本来就存在很高的风险，谁也避不开。所谓稳妥的选项其实并不安全。所以你实际上是在牺牲潜在回报，却没有换来更多安全。撇开 AI 不谈，人们本来就过于厌恶风险；尤其在这种情况下，你应该做有意思的事，而不是安全的事。

**Jascha Sohl-Dickstein (26:10)** So you should be planning with an assumption that your current career path is like not a stable one. Um, people often make life decisions balancing risk and reward, right? Like you like choose the safe option over the one where where maybe the best possible outcome is like better. If AI is is going to cause large scale disruption, then there's like a high baseline level of unavoidable risk. The the the safe option is not actually the safe option. So what you're actually doing is you're just sacrificing potential reward um without actually buying like like more more safety. So you should be I mean totally separate from AI people are way too riskadverse but but especially in this context you should do the interesting thing instead of instead of the safe thing.

<!-- T002P07 -->
**索尔-迪克斯坦（27:10）** 如果你能贡献的时间有限、利害又如此重大，那就应该做一件让自己感到自豪的事。等你退休后住进戴森群里的别墅，你会希望自己能觉得曾帮助我们走向好的结果。你应该选择那些回头看确实有意义的项目。也就是说，优先选择能在通用人工智能出现后积极改变发展轨迹的项目，而不是只在短期内造成暂时变化的项目。右边的照片就是那个大揭晓：人类世之后的地质年代，可以通过观察岩层辨认，因为到那时，岩层已经散布在环绕太阳的戴森群里了。我认为这不太可能在未来五年内发生，不过话说回来……

**Jascha Sohl-Dickstein (27:10)** Um, if you have a limited time to contribute and and the stakes are high, um, you should do something that you're going to be proud of. Um, after you've like retired to your like villa in the Dyson swarm, um, you you want to feel somehow that you helped us get to the the good outcome. Um, you should like choose projects that looking back will have mattered. Um this means that you should um prefer projects that will like positively shift the trajectory post AGI rather than induce like a transient change in in the near term. Uh the photo on the right is is uh the the big reveal. Um the the geologic epoch after the anthroposine is is observable by examining rock strata because like it has the rock strata like distributed in a Dyson swarm around the sun. Um I think this is un unlikely in the next five years but but nonetheless

## 早期的小选择如何改变结果

<!-- T002P08 -->
**索尔-迪克斯坦（28:17）** 说到做让自己自豪的事，我有时觉得人们认为自己无法影响大局。AI 领域的进展似乎像是一个超出我们掌控的过程。这完全不对。尽管现在的能力发展非常惊人，AI 的指数增长才刚起步，比你想象的还要早。右边可以看到 Epoch AI 对 2030 年算力的外推。这张图的重要之处在于：到 2030 年，算力可能达到 2025 年的一万倍。回头看，我们今天的状态在线性刻度的算力图上几乎贴着零线。就投入 AI 的资源和算力而言，我们仍处在指数增长的极早期。好，所以我们还在指数增长的早期。

**Jascha Sohl-Dickstein (28:17)** on that point of like doing something that you're proud of sometimes I think people feel a lack of agency over over the big picture trajectory. Um the progress in the field of AI can like feel like some process that's beyond our our control. Um, this is like completely false. Despite like current like really dramatic capabilities, we are still like much earlier than you think in the AI exponential. Um, to the right you can see an extrapolation by epoch AI to to compute in in 2030. Um, the important part of this image is that compute has the potential to be 10,000 times larger like in 2030 than it was in in 2025. Um, looking back, our our state today is going to be like visually indistinguishable from zero on a linear access compute plot. We are still super early in the exponential in terms of resources and compute being spent on on AI. Um, okay. So, we're still in the early part of the exponential.

<!-- T002P09 -->
**索尔-迪克斯坦（29:28）** 这为什么重要？因为在指数增长的早期做出小小的干预，会产生巨大后果。科学、工程、政府和经济领域里有无数例子：过程早期的小决定，最终导致截然不同的结果。我们可以逐一讨论，但不如挑几个例子。大约在 1980 年，两位科学家提出了标准化的电子邮件交换协议，因此你们每个人都能给房间里的任何其他人发邮件。直到大约十年后，才有人给即时消息做同样的事。因此，你只能给使用同一款产品的人发聊天消息，这就乱成一团了。再比如哈伯—博施固氮法：一小组科学家开发了这项技术，让我们今天大体上有能力养活所有人。没有它，我们的粮食产量远不及现在；而它也是如今多数炸药得以生产的基础。

**Jascha Sohl-Dickstein (29:28)** Why does that matter? It matters because small interventions early and exponential growth have like huge consequences. There are like countless examples in science and engineering and government and economics where small decisions made early in the process led to to dramatically different outcomes. Um we could talk about like any of these but maybe maybe just go do a few. Um in like 1980 two scientists proposed a standardized protocol for exchanging emails and as a result of that every one of you can send emails to every other person in this room. No one did the same thing for like chat messages until like roughly a decade later. And as a result of that, you can only send chat messages to people that are using the same like product that you're using and it's like a mess. Um there's like the habush nitrogen fixation process where like a small team of scientists like develop technology that both like enables us to mostly feed everyone in the world today. Like we would have nowhere near our current food production without without this. Um, and also like powers most modern explosives.

<!-- T002P10 -->
**索尔-迪克斯坦（30:36）** 再看美国早年的医学界和法律界。美国医学会、美国律师协会，都是当时有人决定创办的。这些决定由少数人作出，如今却彻底塑造了我国的医疗和法律格局。学术界的同行评审大概也类似……嗯，“大概”可以拿掉，情况是相似的。无论它有多少缺点和优点，现行制度绝不是唯一可能的制度。如果几百年前有人稍作不同决定，今天科学界的激励结构可能会大不相同。

**Jascha Sohl-Dickstein (30:36)** Um, there's like decisions early in like American law or American medicine to create the AMA or the American Bar Association. These are like decisions that like small numbers of people made. Um, that now completely determine the medical and legal landscape in in our country. Um, similarly probably similar well not probably similarly for academic peerreview system. Our current peerreview system for all its like flaws and successes is like not at all the only way it could have gone. We could have a very very vastly different incentive structure in science today if people had made slightly different decisions like a couple centuries before.

<!-- T002P11 -->
**索尔-迪克斯坦（31:15）** 好，因为我们还处在指数增长的早期，而且你们能力出众、技能又高度相关，所以你们对 AI 的未来拥有巨大的力量和影响力。你们做出的微小个人选择，将决定我们所处的未来商业、社会和政治格局。你研究什么问题、在哪里工作、把某件事称为能力还是风险？你会提出可解释还是难以洞察的模型架构？会公开表达自己的伦理立场吗？你的项目会鼓励发展出怎样的技术路线，或让技术树长出怎样的分支？你们应该感到自己拥有很大的力量，这很好；也应该意识到这是一份责任，请认真对待。我恳请你们有意识、审慎地选择项目和做出其他决定。世界正在发生、也将发生惊人的变化，而你们每个人都有能力让结果好很多，或糟很多。

**Jascha Sohl-Dickstein (31:15)** Um, okay. So, because we are very early in the exponential and because you are like [snorts] highly capable people with highly relevant skills, you have like immense power and leverage over over the future of AI. Um, individual small choices you make will determine the future commercial, social and like political landscape that we that we live in. um like what pre research problem you work on, like where you work, do you call something a capability or a risk? Do you like propose model architectures that are like interpretable or inscrutable? Do you publicly share an ethical stance? Um what trajectory or tech tree does your your project like encourage to be developed? Um this is you should feel like you have a lot of power. This is great. Um you should also feel this is a responsibility. Please take that seriously. um plead to you to be like intentional and and thoughtful about your projects and and other choices. Um the world is going to change in like remarkable ways. Um is changing and you personally have the leverage to make that much better or or much worse.

<!-- T002P12 -->
**索尔-迪克斯坦（32:26）** 未来无从预知。但如果一定要我猜，在接下来一段时期里，你们靠自己的才智影响世界的能力，大致会这样变化：会有一段时期，你们的能力正好和庞大的 AI 智能体团队互补，有你们在，它们才能把本事使出来。你们一周内就能完成过去整个职业生涯都做不到的事。这将是令人惊叹的全球黄金时代。再后来，在 AI 擅长的方向上，你们不再有过人之处。有你们参与，AI 能完成的智力工作，和它独自能做的也就没有分别了。我认为你们应该尽情享受并充分利用这个黄金时代。使用这些工具，用赋予你们的力量做出惊人的成果。

**Jascha Sohl-Dickstein (32:26)** Um the future is unknowable. Of course, if I have to guess though, this is roughly what I think your intellectual leverage on the world is going to look like in in the medium-term future. Um, I think there will be a period where you are like [clears throat] complimentary to and unlock the ability of like vast teams of AI agents to do work. Um, you will be able to do in like a week what you would have been unable to do in your entire career. um it will be like an astounding global golden age and then I think sometime later than that there will come a period where you no longer stick out in a direction that AI is able to stick out in um where you no longer unlock intellectual work that it would be unable to do. Um and I think you should enjoy and make full use of this golden age as as as best as you can. Um, use the tools. Do something like amazing with with the power afforded to you.

## 哪些研究方向值得投入

<!-- T002P13 -->
**索尔-迪克斯坦（33:31）** 好，我告诉过你们，AI 很快就会到来。我认为这应该影响你们对个人、职业和研究的选择。我谈了几种它可能影响决策的具体方式，也承诺会给出一些具体建议。下面是我看好的几个项目领域。这份清单极不完整；最有影响力的事情或许是目前还没人想到的，不过我们先逐项聊聊。

**Jascha Sohl-Dickstein (33:31)** Um, okay. I told you AI is coming soon. Um, and I think this should motivate you as you make personal and professional and and research decisions. Uh, I've talked about a few specific ways it might feed into that decision-m process. Um, and I did promise I would give some specifics. So, here are like some particular project areas I like. Um, this list is like massively incomplete and the most impactful things to do are probably ones no one is thinking about yet, but just to like talk it through.

<!-- T002P14 -->
**索尔-迪克斯坦（34:01）** AI for Science（人工智能用于科学研究）。这应该让在座各位特别振奋。比如材料发现、蛋白质折叠、天气建模、聚变反应堆的等离子体监测。我认为，从预期效果看，加深对世界的理解通常是件明确的好事，而 AI 能让我们更有效地做到这一点。还有对 AI 模型开展科学研究：借用其他领域的技术，把 AI 本身作为研究对象。可解释性也许是最典型的例子，本质上就是拿研究大脑的方法研究模型。你还可以用统计物理研究模型的内部，也可以把模型当作心理学或经济学的研究对象。也许你可以花一个小时坐下来想一想，如何把你的专业知识用于研究 AI 模型本身，而不是像现在这样用于研究别的对象。

**Jascha Sohl-Dickstein (34:01)** Um, AI for science. This should actually make this particular crowd feel really good. Um I this is things like material discovery, protein folding, like weather modeling, fusion reactor, plasma monitoring like I think understanding the world better is typically in expectation is unambiguously positive and and AI enables us to do it much more effectively. Um there's doing science on the AI models. This is like taking techniques from another field and using it to treat AI as the object of study. um like interpretability is like maybe the canonical example of this which is basically doing neuroscience on AI models. Um you can also do like statistical physics on on um like the internals of AI models. You can do psychology on AI models. You can do economics on AI models. Um, it might be worth like sitting down for an hour and just brainstorming the ways in which your particular expertise could like be turned on AI models as the the object of study rather than the object that you it's currently applied to.

<!-- T002P15 -->
**索尔-迪克斯坦（35:03）** 还有直接开展 AI 安全研究。可怕的是，现在仍能从这个领域的起步阶段加入。许多值得提出的问题仍未得到清晰界定。这个领域发展得很快，但和问题的重要程度相比，投入其中的力量还是太少。还有能力预测与外推。更准确地了解即将发生什么，很可能有助于让事情朝更好的方向发展。另一个问题是谁用得上这项技术，获得使用机会是否公平。如果我们希望这项技术造福所有人，就必须非常努力才能做到。我认为这也可能是一个充满敌意、压力很大的子领域。所以，如果你能在别人骂你是糟糕的人时仍做务实决定，就能对世界产生巨大的积极影响。

**Jascha Sohl-Dickstein (35:03)** Um, there's like straight up AI safety research. Um, terrifyingly this is something you can get in on on the ground floor of. um many of the right questions to ask are still like poorly poorly defined. It's like importance relative it's growing rapidly but its importance relative to field size is still like vastly misscaled. Um there's prediction and extrapolation of capabilities. Um understanding what's coming more precisely is likely to make it go better. Um there's questions of access um like equity and and like um fairness. If we want this technology to benefit everyone, then we're going to have to work very hard to make this happen. Um I think this is also likely to be like a toxic and and very stressful sub like area to work in. So, so if you feel that you can make like pragmatic decisions where people are yelling at you that you're a terrible human being, then this is you can have amazing positive leverage on the world.

<!-- T002P16 -->
**索尔-迪克斯坦（36:01）** 同样，如果你在技术能力和个人特质上都适合从事政策与治理工作，就应该去做。政府极其迫切地需要有能力的技术人员，在政府着手监管 AI、制定政策时出谋划策。优秀的人才往往会离开，去找薪水更高、少一些政治纷争的工作。这是影响力极大的工作。对学者来说，这也是比较优势：至少政府对你的信任，和对实验室人员的信任有所不同。因此，你能以别人做不到的方式产生影响。好，我就讲到这里，你们还可以再吐槽我八分钟。

**Jascha Sohl-Dickstein (36:01)** Um, on that same note, um, if you are equipped in like technicality and personality to like do work on policy and governance, um, you should do it. Governments are like absolutely desperate for competent technical people to like advise them as they try to like regulate and and develop policy for for AI. Um the really good people keep on like leaving for bigger paychecks and like less politics. Um it's amazingly high leverage. Um this is also like a comparative advantage you have as an academic. um like governments will trust you at the very least in a different way than they they trust people from labs. So you you are a voice that can influence things in a way that that other people can't. Um cool. And I'm going to stop there and you can heckle me for another eight minutes.

<!-- T002P17 -->
**现场（37:02）** [掌声]

**Room (37:02)** [applause]

## 现场问答：研究品味、编程与实验科学

<!-- T003P01 -->
**主持人（37:08）** 好，我们还有几分钟提问时间。Missella。

**Moderator (37:08)** All right, we still have [clears throat] a few minutes for questions. Missella.

<!-- T003P02 -->
**提问者（37:11）** 是的。我想简单问一下研究品味。你觉得有没有好的评测基准？你觉得研究品味是否本质上就是缓慢而迂回，还是也可以变快？

**Questioner (37:11)** Yeah. Um, I just had a quick question about research taste. Um, do you think there are good benchmarks for it and do you think it's like slow and meandering by definition or do you think it can get faster?

<!-- T003P03 -->
**索尔-迪克斯坦（37:26）** 我觉得，我们为研究品味设计的任何评测基准，一旦被攻克，人们就会说它测量的不是研究品味。但我不知道该怎么解决这个问题。我觉得，部分办法是等模型做出某项几乎无可争议、意义重大的发现。比如，等模型提出一种新的概念方法，造出室温超导体。到那时，你知道，可以说它其实并没有真正展现出研究品味，不过……至于研究过程是否必须缓慢迂回，我觉得，如果你不知道什么会在未来带来好处——而这几乎总是如此——那么缓慢迂回是很好的。如果思考得足够快，或许可以保留迂回探索，而不必那么慢。好，谢谢。

**Jascha Sohl-Dickstein (37:26)** Um, I think that any benchmark we came up with for research taste that got solved, people would say it didn't measure research taste. Um, but I don't know how what to do about that. Um I think well part of what you do about that is you wait for the models to make some discovery which is kind of like inarguably like like significant like you wait till a model like comes up with some new conceptual approach and develops a room temperature superconductor and then you know you can say it it wasn't really demonstrating research taste but it's um and I think in terms of like does you have to be slow and meandering I think I think slow and meandering is great if you don't know what is going to have benefits in the future which is almost always true. Um I think you can probably do the meandering part without the slow part if you're think fast enough. Um but yeah great thank you.

<!-- T003P04 -->
**提问者（38:24）** 你好，谢谢精彩的演讲。作为研究生，我们写的大多数代码，只要有合适的指导，它都能写，对吧？那么，花几个小时自己写代码，哪怕只是作为学习练习，还有价值吗？还是说这毫无意义，因为编程代理只会越来越强？你怎么看自己投入时间动手写，和直接交给它做之间的取舍？

**Questioner (38:24)** Um hi thanks for the great talk. So um as graduate students like most of the codes we are writing uh cloth could write with the right guidance right so do you think there's still value to like spending the hours writing it ourselves as like an even like just an educational exercise or it's worthless because like coding agents are only getting better and like like where do you stand in an tradeoff of investing time doing it yourself versus just giving it to

<!-- T003P05 -->
**索尔-迪克斯坦（38:55）** 重要的是，你要理解代码的作用。这表示你需要有一些亲自编写代码的经验，但可能远少于你现在花的时间。你也可以用你导师大概会用的方式去理解代码的作用：请模型生成一些图表，再问它为什么图表不一致。我认为，这就像以前人们得用穿孔卡编程，而现在你可以用 Python 编程。你对计算机内部运作的理解，可能远不如当年用穿孔卡编程的人，但你是在更高的抽象层次上思考。这很好。你也可以用同样的方式，只要确保自己仍会追问和思考。我会建议你——尤其是研究生，可能觉得自己钱不多、收入不高，因而低估了自己的时间。你的时间很宝贵，应该使用最能善用时间的工具。请对着那支麦克风说。

**Jascha Sohl-Dickstein (38:55)** it is important that you understand what the code does. Um, which means you need to have some experience writing it, but probably a lot less than you have. Um, you can also understand what the code does the way your adviser probably does and like ask the model to generate some plots and like ask it why the plot isn't consistent and and so I think it's possible that in the same way you can code in Python when people used to have to code in like you know um punch cards um and you probably have a much weaker understanding of the internals of the computer than the person that was coding in punch cards but you're thinking at a higher level abstraction it's great um you can do that same thing you just need to make sure that you still interrogate and think. Um, I would encourage you like it's worth I think especially as a grad student, it can feel like you don't have a lot of money or you're not being paid a lot and like you can undervalue your time. Your time is worth a lot. You should you should like use use the tools that make the best use of your time. And on that microphone, please.

<!-- T003P06 -->
**提问者（39:58）** 谢谢精彩的演讲。我想深入问一下第一部分：你提到 AI 很擅长泛化一切；但第二部分你又说，我们甚至不能用它来给想写的东西起草初稿。这样看来，我们用它更像是把它当作助理，帮我们解决已经遇到的问题。这似乎离通用人工智能还很远，更像是 Microsoft Outlook：它让我们不必再去邮局给同事寄信。我觉得情况很相似，因此我认为我们离通用人工智能还很远。

**Questioner (39:58)** Thanks for the great talk. I want to dive a little bit deeper into the first part where you mentioned that AI is very good at generalizing everything. Um but then in the second part you say we cannot even use it to actually get a first draft for uh whatever thing you want to write. Then it doesn't then it seems to me that what we can use it for is more like an assistant to actually be able to help us solve all the problems that we already have. And it doesn't really look like we're anywhere close to AGI more is like what you have Microsoft Outlook for example it replaced us having to go to the post office and sending our uh letters to colleagues. I think in my opinion it's very similar there and AGI based on this I don't think we're anywhere close there.

<!-- T003P07 -->
**索尔-迪克斯坦（40:35）** 嗯，我想是的。先说第一点：建议不要让 AI 替你写，是为你好，并不是因为通用人工智能做不到写作。因为写作就是思考；如果把写作外包，实际上就是把思考也外包了，你就不会真正理解发生了什么。第二点，如果你认为它离人类能做的那些事还差得远，就把这个判断量化并操作化。不要只把它当成脑中模糊的想法。明确提出一项精确指标，说明通用人工智能还差在哪里。你不必发表出来，可以是私人评测基准。为某项能力给出一个数字，再观察这个数字随时间的变化。我认为，衡量你认为没有进展的那件事；如果你的测量显示它确实没有进展，我就会更相信这个判断。

**Jascha Sohl-Dickstein (40:35)** Uh I mean I think so okay so to your first point the advice about not having it right for you was was for your benefit not not because AGI couldn't couldn't write. Um it's because like writing is thinking and if you outsource your your writing then what you've actually done is you've outsourced your thinking and you won't actually understand what's going on. Um to the second point I think if you believe that it is not anywhere close to being able to do the kinds of things that humans can do like quantify and operationalize that. Don't just have that as like a vague idea in your head. Have like a here is a precise measure of the way in which AGI falls short. You don't have to publish it. This could be like a private benchmark. You just like you know my bench you put a number out for something and then watch what happens with that number with time. Like I think I think me measure the thing that you don't believe is making progress and then if if the your measurement shows it's not making progress I will believe it a lot more.

<!-- T003P08 -->
**提问者（41:30）** 是的。比如埃尔德什问题，那些是我们提出并用来让它作答的问题，对吧？它未必会自己提出并解决新的难题。

**Questioner (41:30)** Yeah. I guess there for example based on the Erdos's problems those are the ones that we came up with and that's the ones we were using it for right it's not necessarily coming up uh solving new difficult problems to solve.

<!-- T003P09 -->
**索尔-迪克斯坦（41:38）** 我想……我的意思是，我本来可以……问题是，我觉得我们没有……我选择埃尔德什问题的原因是……

**Jascha Sohl-Dickstein (41:38)** I think the uh I mean I could have the thing is I think we don't have a the reason I chose the Erdos problems.

<!-- T003P10 -->
**主持人（41:48）** 好，这之后再来一个问题。

**Moderator (41:48)** Okay, one more question after this.

<!-- T003P11 -->
**索尔-迪克斯坦（41:48）** 埃尔德什问题之所以有意思，或许是因为人们已经认同它们是好问题。我觉得，如果你能提出一个……那要怎么衡量一个问题是不是好问题？这或许就是挑战所在。真希望我有块白板。我认为你似乎假设泛化有很多不同层次。泛化可以是在句子里把一个词换成同义词，也可以是用不同数字套用加法算法，或应用某个逻辑步骤，或用微积分在不同问题上做积分。我认为，你可以这样想：泛化并不是沿着一座阶梯或层级结构，逐步发生在越来越高的尺度上。在我看来，完全不清楚这阶梯上是否存在一道断层：概念上比这更简单的事物，泛化起来很容易，而高于这一层的泛化却不可能。不过，我也不知道。好了，时间到了。

**Jascha Sohl-Dickstein (41:48)** Um the reason maybe the Erdos problems was was interesting is because like this is something that humans have already agreed are good questions. I think like if you can come up with a how do you how do you measure whether something's a good question and and this is maybe the challenge but I um I wish I had a whiteboard. Um I I think that you're kind of positing that like um that there's a lot of levels at which generalization can happen. Generalization can happen like I'm going to sub in like a synonym for this word in the sentence or generalization can be like I'm going to apply the addition algorithm with different numbers or I'm going to apply this like logical step or I'm going to like use calculus and you know do integration for like different problems. Um, and I think what you should imagine, it's not that like you should imagine there's like this like ladder or hierarchy where you generalize at higher and higher scales. And to me, it's not clear at all that there's some like break in this ladder where like somehow generalization at like things that are conceptually simpler than this is like easy and generalization things above it are like impossible. But um I don't know. All right. Um I'm time's up.

<!-- T003P12 -->
**主持人（43:00）** 那其实还有一位。啊，不好意思，Mira 已经先举手了。

**Moderator (43:00)** So we'll have one more actually. No, sorry. Mira had his hand up first.

<!-- T003P13 -->
**现场听众（43:08）** 我觉得 Charles 在前面。好。

**Audience (43:08)** I think Charles is ahead. Okay.

<!-- T003P14 -->
**提问者（43:11）** 我注意到，虽然 AI 在理论科学领域已经非常普遍，实验科学却较少受到它的影响。部分原因是，许多实验科学所研究的问题，既无法通过计算验证，也无法形式化验证。NASA 艾姆斯研究中心至今仍要使用实体风洞，因为计算流体力学往往不足以解决问题。每年发现的化学物质中，超过一半是偶然发现的，因为没人能预测当时会发生什么。我想知道，你是否能想象出这种差距弥合的前景？我很多材料科学和实验科学领域的同事都觉得大型语言模型只是炒作，对物理科学并没有真正帮助。

**Questioner (43:11)** So, something I've noticed is that um while like AI has been very prevalent in the theoretical sciences, um the experimental sciences have been fairly insulated from its effect. And um part of this reason is because a lot of the experimental sciences work in a domain where uh problems are neither computationally nor um formally verifiable. Right? So there's a reason NASA Ames still has to run physical um wind tunnels because computational fluid dynamics is not is often not sufficient. There's a reason that over half of all chemicals discovered every year were discovered accidentally because no one could predict what was happening. And so I was wondering if you see a vision where this kind of like gap gets bridged because a lot of my colleagues in like material science and the experimental sciences think that LLMs are all hype and not like really doing any benefit for the physical sciences.

<!-- T003P15 -->
**索尔-迪克斯坦（44:07）** 是的，这问题很有意思。有几点。首先，机器人终究会投入实际应用。我认为，机器人何时能做到这一点更难预测，但如果十年或十五年后还没有能替我们做实体实验的机器人，我会很惊讶。我还认为，理论对实验结果的预测能力如此有限，某种程度上反映了理论科学的不足。理论科学越强，就越能减少所需的实验次数；我认为这完全有可能。不过，这大概取决于你用它做什么，也取决于你是否找到了合适的用户体验，让互动成本不会高于所得收益，对吧？

**Jascha Sohl-Dickstein (44:07)** Yeah. So this is interesting. Um like a few a few things. Um one is eventually robots are going to work. Like I think the time scale line at which robots work is like much harder to predict but but like I will be surprised if like 15 years from now or 10 years from now we don't have robots that can do physical experiments for us. Um I think also the fact that like theory is so poorly predictive of experimental results is like something of a failure of the theoretical sciences right to the degree that you can strengthen those you can like reduce the number of experiments that you that you need to run. Um, and I think that is that is very much possible. Um, but but um, yeah, I think it probably depends what you're using it for and and also it probably depends if you figured out the right like UX to actually make its like interact in a way where the interaction cost is not larger than the gains, right?

<!-- T003P16 -->
**主持人（45:02）** 谢谢。很好。让我们再次感谢贾沙。

**Moderator (45:02)** Thank you. Very good. Let's thank Yash again.

<!-- T003P17 -->
**现场（45:07）** [掌声]

**Room (45:07)** [applause]

**译注**

41:48 的字幕把答话和“再收一个问题”的控场插话记在同一行。说话人按上下文区分。[回看这段问答](https://www.youtube.com/watch?v=3LZN2UUxDos&t=2508s)
