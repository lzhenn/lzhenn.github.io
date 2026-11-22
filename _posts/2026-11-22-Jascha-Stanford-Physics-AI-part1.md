---
layout: post
title: "给年轻研究者的建议（上）：模型离通用人工智能还有多远｜Jascha Sohl-Dickstein 斯坦福演讲"
categories: podcast
tags: [thinking, AI]
author: LZN
description: "在斯坦福物理与人工智能大会上，贾沙·索尔-迪克斯坦讨论了如何衡量模型能力，怎样看待通用人工智能的时间表。"
---

_书童按：本篇是贾沙·索尔-迪克斯坦（Jascha Sohl-Dickstein）2026 年 6 月 12 日在斯坦福大学物理与人工智能大会上的演讲《在人类世的开端与终章，给年轻研究者的建议》（Advice for a Young Investigator in the First and Last Days of the Anthropocene）实录。索尔-迪克斯坦是 Anthropic 研究员，也是扩散模型的早期研究者。他把训练算力、软件任务的时间跨度和数学研究摆在一起，追问这些证据究竟能把我们带到多远。台下随即有人追问，算力资源会不会先耗尽，又有谁能用得起这些模型。译稿由 Luna 初译，DeepSeek 与 Qwen 校审。全文分上下两篇，此为上篇，以飨诸君。_

[演讲录像](https://www.youtube.com/watch?v=3LZN2UUxDos) · [斯坦福大学会议页](https://events.stanford.edu/event/2026-conference-on-physics-and-ai-pai26)。原演讲及录像版权归各自权利人所有。本中英文对照翻译稿件，仅作为交流学习之用。

英文保留所附字幕的措辞。时间标记对应每个意群首句所在的字幕，同一条字幕内换人时沿用该条时间。中文据上下文辨认明显误听的专名；个别现场提问在字幕中仅有片语。

## 从人类世谈起

<!-- T001P01 -->
**主持人（00:07）** 今天很高兴请到 Jascha Sohl-Dickstein。他有一些建议，不只是给年轻人的，我想也是给我们所有人的。让我们热烈欢迎他。

**Moderator (00:07)** It's a great pleasure um to have Yashon Dixon here today. He has some advice, not just for young people, I think for all of us. Um and let's give him a warm welcome.

<!-- T001P02 -->
**现场（00:20）** [掌声]

**Room (00:20)** [applause]

<!-- T001P03 -->
**索尔-迪克斯坦（00:25）** 大家好。我很高兴，也很感激能来到这里。我想 Tom 刚才已经告诉我，他不同意这些建议。所以我想，这场演讲应该会很顺利。

**Jascha Sohl-Dickstein (00:25)** Um hey there. I'm I'm um excited and and and grateful to be here. Um I I think uh Tom was already telling me that he disagrees with the advice. So I think I think this is going to go well. Um,

<!-- T001P04 -->
**现场（00:37）** [笑声]

**Room (00:37)** [laughter]

<!-- T001P05 -->
**索尔-迪克斯坦（00:39）** 这场演讲的标题借用了圣地亚哥·拉蒙-卡哈尔（英文字幕转写作 Ramoni Kahal）的一本书；他是现代神经科学的奠基者之一、诺贝尔奖得主，那本书观点鲜明，也很务实。为了帮大家进入状态，请看右边这张图。这是 GDP 随时间变化的图。你就站在这条曲线上，心想：“我生活在一个相当正常的世界里，有些事情也许会变，但未来大体上会是现在的线性外推。”这张图或许是在提醒我们，这并不是看待未来的正确视角。顺带一提，若把 Y 轴改为对数刻度，这张图看起来也出奇地相似。直到大约 1950 年，我们才稳定在目前这种指数增长速度。

**Jascha Sohl-Dickstein (00:39)** so the the title for this talk is a play on a very maybe like opinionated and pragmatic book by by Ramoni Kahal who is like a one of the founders like Nobel Prize winner um of of modern neuroscience. uh to get you in the right mindset. On the right here, we have a plot of GDP versus time. And that is you standing on top of that curve. And and you're thinking to yourself, you know, I live in in a pretty normal world, like some things are maybe going to change, but the future is going to look mostly like a linear extrapolation of of the present. And the plot should maybe suggest that this is not the right perspective on on the future. Um, this this plot by the way looks surprisingly similar if you plot it like semi-log y. Um, we did not settle on our current rate of like exponential growth until like around 1950. Um,

<!-- T001P06 -->
**索尔-迪克斯坦（01:45）** 好，这场演讲的目的，是说服大家未来可能与现在非常不同。AI 正在改变世界，而且目前还只是早期阶段；这场转变不太可能很小。如果你相信这一点，就应该根据 AI 将如何改变世界，来决定自己的职业道路、研究项目，甚至个人生活。我还想强调，在场的各位对未来如何演变有着巨大的影响力。我们可能觉得这是某种庞然大物，正在发生、超出个人控制；这种想法完全错了。最后，我会提出几条实用建议，谈谈如何选择研究项目和思考职业发展。好，我们来谈地质世。

**Jascha Sohl-Dickstein (01:45)** okay. So the purpose of this talk is to convince you that the future may be very different than than the present. Um AI is in the process of transforming the world early stages still and it's not likely to be a small transformation. And if you believe this, you should make decisions about like your career and your research projects, maybe even your personal life that are like motivated by the ways in which AI is going to change the world. Um, I also am going to try to emphasize that you have like really immense like you in this room have like really immense leverage on on how the future unrolls. I think I think this can feel like some kind of like monolithic thing that's happening that's beyond our our individual control and that is just like completely wrong. Um and finally I'm going to end with a few practical suggestions um for how to choose choose research projects and think about career. Okay, let's talk about geologic epochs.

<!-- T001P07 -->
**索尔-迪克斯坦（02:52）** 地质世是对深时的划分，依据的是岩层中可观察到的生物、气候和地质过程的显著变化。人类开始对地球产生地质影响：我们正在造成地球历史上的第六次大灭绝；核武器试验产生的放射性同位素正在岩层中留下痕迹，数十亿年后仍能看出我们曾经存在。未来的人会知道我们曾经存在。有人提议把当前这个由人类驱动全球变化的时期命名为“人类世”。聚焦人类驱动的变化很有意思，因为人类可能正接近这样一个时期的尾声：人类是推动全球变化的主要智能主体。这场演讲的核心想法——部分也是因为我很喜欢这个标题——是，人类世究竟会怎样，很大程度取决于 AI 的发展；它可能会是一个非常非常短暂的地质世。

**Jascha Sohl-Dickstein (02:52)** Um they are measures of of deep time divided by distinct changes in in life forms, climate and and geological processes that that we can observe in rock strata. Humans are starting to have a geologic impact on on the world. Um we're causing the like sixth mass extinction in the history of the earth. uh radioisotopes from nuclear weapons tests are are getting captured in in rockst strata like billions of years in the future. You are going to be able to tell that we were here. There's there's a proposal to name this current period of human-driven global change the the anthroposine epoch. And that this focus on human-driven change is interesting because we are perhaps near the end of the period of humans being the primary intellects driving driving driving global change. Um the the like central conceit of this talk um and and partially because I really like the title is that very much depending on the way in which AI plays out this could be a very very short um geologic epoch.

## 训练算力和模型能独立完成的任务

<!-- T001P08 -->
**索尔-迪克斯坦（04:06）** 这张图展示了自人类世开端、约 1950 年以来，用于训练重要 AI 模型的计算量。你也可以看到这里斜率发生了变化：AI 模型从学术上有趣，转向商业上有用。纵轴每一格都比下一格高两个数量级。过去十年，训练最大模型所用的计算量增长了约一千万倍。右上角圈出的是人类大脑一生所完成计算量的一个粗略、合理的估计范围。我的粗略估算是：如果每个突触每毫秒执行一次浮点运算，那么人脑一生大约完成 10²⁷ 次浮点运算。按这个估算，人类一生的计算量会比图中最大模型高出一个网格刻度的一小部分。也就是说，模型训练的计算规模已经接近人脑一生的计算量。这还不足以让 AI 接近人类智能水平，而且这可能也不是达到该水平所必需的条件，但多少让这种比较显得更可信。顺便说一下，我打算在演讲中停下来回答问题，刚才应该一开始就讲。如果你想反驳，尽管举手，我会请你发言；后面还有更多值得反驳的内容。

**Jascha Sohl-Dickstein (04:06)** Okay. So here's a plot of compute used to train notable AI models starting at the very beginning of the anthroposine around around 1950. Um you can see by the way a a change in in slope here um when AI models transitioned from from being like academically interesting to to being commercially relevant. um each tick on the y-axis here is two orders of magnitude larger than the one below it. The compute used to train the biggest models has increased about 10 millionfold in in the last decade. Um in the upper right I've circled a very rough plausible range for the the compute performed by a human brain in in an entire lifetime. um my own like back of the envelope estimate if you imagine that every signapse does like one flop per per millisecond then you get about one trillion pedlops of like compute in the human brain over a lifetime. Um and that would put um lifetime human compute like a fraction of a grid division above the the biggest model on on this chart. Um so we are getting to scales of model training compute similar to those in a human brain across a lifetime. Um this is like not sufficient and and probably not even necessary to to approach like human levels of intelligence but it maybe makes the the comparison somehow a little bit more plausible. Um I am by the way going to try to pause and get questions during the talk. I should have said at the very beginning. So, so if you want to like disagree with something, there'll be more disagreeable stuff to come, but if you want to disagree with something, um, feel free to raise your hand and I'll I'll I'll call on you. Um, okay.

<!-- T001P09 -->
**索尔-迪克斯坦（06:02）** 增长的不只是 AI 计算规模。这是 METR 最近的一项研究，考察 AI 模型在无人协助时，以 50% 的成功概率完成不同软件任务的任务时间跨度（按人类独立完成任务所需时间衡量）。这个时间跨度不是 AI 做任务要花多久，而是把同一任务交给人类，观察人类不用 AI 要多久。横轴是模型发布年份，纵轴是任务时间跨度。关键是它呈指数增长。我第一次讲这场演讲是在不到一年前，当时我会告诉大家，预计到 2026 或 2027 年，模型就能完成整整一天的软件工作。不到一年后，能力已经增长了十倍，越过了那个水平。更高成功率的曲线斜率相同，只是截距不同。所以，如果你希望模型有 80% 或 90% 的概率成功完成任务，时间预期大概要再加一两年。

**Jascha Sohl-Dickstein (06:02)** It's not just the scale of of AI compute that has been increasing. Um here's a recent study from an organization called beater um looking at the time scale of diverse software tasks that AI models can perform unaded um with 50% probability of success. Um the time scale is not how long it takes the AI to do the task. The time scale is um done is figured out by like assigning the task to humans and seeing how long it takes human beings to perform the same task without AI. Um, and here on the x- axis we have the year the model was released and here on the y- axis we have the time scale and the key thing to observe is that it is increasing exponentially. Um I gave this talk first roughly less than a year ago and at that time I would tell people that we expect models to be able to perform a full day's work in software in like 2026 or 2027 and we are now like less than a year later already like increased by a factor of 10 and like past that point. Um the curves for higher success rates have the same slope. um just a different intercept. So if you want to have a model that's like 80% likely to do the task successfully or like 90% you'd add like a year or two years to to your timeline.

<!-- T001P10 -->
**索尔-迪克斯坦（07:36）** 有人有时会说，AI 只能解决训练数据中出现过的问题。这显然不是字面意义上的事实：只要你给模型输入几个词以上，它生成的序列就会落在训练数据序列的凸包之外。因此，模型做的一切都涉及泛化。不过，人们似乎认为存在某种神奇、不同类型的泛化，是模型做不到的。或许这可以作为证据，说明不存在某种所谓“神奇”的泛化尺度——我不该用这个词——也不会有某个界限，跨过之后才出现一种性质截然不同、但 AI 模型能够实现的泛化。我们可以看看 AI 开始解决人类留下的开放问题。数学家保罗·埃尔德什极其多产，留下许多开放猜想和问题；他去世后，这些问题被形式化并汇集起来，数学家一直尝试求解。过去大约七个月里，AI 模型也开始解出这些问题。AI 现在解决的问题正在拓展数学知识的前沿。我想肯定有人对此有意见。

**Jascha Sohl-Dickstein (07:36)** People sometimes say that AI can only solve problems that are in it training data. Um and and like this isn't like obviously this is not literally true. like if you type more than a few words into an AI model, then then you're like sequences out of the convex hall of like sequences in the training data. So, so everything they do is generalization, but there's somehow this notion that there's this like magic type of generalization which is is different that the models can't achieve. Um and um maybe as a piece of evidence towards there not being some like magical I shouldn't use this word there not being some scale of generalization um beyond which at which some qualitatively different type of generalization that AI models can achieve. Um we can start looking at AI solving problems that were like open problems left by by by humans. Um Paul Erdos um was this like super prolific mathematician who left behind like many many open conjectures um and questions um which have been like formalized and gathered since his death and um real mathematicians try to solve these problems and in the last like roughly seven months u AI models have started to to solve these these problems as well. So AI models are now solving things that um you can that push out the frontier of of what is known about about math. Um I'm sure someone has a complaint about this. So

<!-- T001P11 -->
**索尔-迪克斯坦（09:08）** 请说。

**Jascha Sohl-Dickstein (09:08)** so please Yeah.

*编者注：这里的字幕跳到了讲者谈医疗评测的答话，未收录听众的问题。* [回看现场](https://www.youtube.com/watch?v=3LZN2UUxDos&t=548s)

<!-- T001P12 -->
**索尔-迪克斯坦（09:21）** 我能说的是，只要有人提出一个可量化的 AI 性能基准，我们基本都会看到该基准上的快速进步。医疗领域也有这类基准，只是我这里没有相关幻灯片。好，我继续。

**Jascha Sohl-Dickstein (09:21)** Uh so um what I can say is is that um like basically any time someone comes up with like a quantifiable benchmark for AI performance you see like rapid improvement on that benchmark and and those benchmarks exist in healthcare although I don't have slide slide for it here. All right, I'm gonna keep on going.

## 预测 AGI 与检验预测

<!-- T001P13 -->
**索尔-迪克斯坦（09:45）** 不到一年前，我在哈佛讲过这个演讲的一个版本，收到一封不请自来、让我印象深刻的邮件，全文只有一句：“这摘要也太他妈疯狂了。”这里有个概念叫“奥弗顿之窗”，指的是被认为可以公开表达或持有的观念范围。表面上看，这封邮件是在说，预测通用人工智能超出了奥弗顿之窗；或者至少，称这些预测“疯狂”还在可接受范围内。我觉得现在这种情况比一年前少多了。尽管如此，这场演讲的主要目的之一，仍是鼓励大家认真看待这些事情，或者说，给大家这样做的许可。我讲的这些观点，受尊敬且知名的人士和机构也在讲，他们仍然受人尊敬。你可以讨论，也可以相信。你不必自我审查自己的担忧或顾虑。

**Jascha Sohl-Dickstein (09:45)** Um, I gave a version of this talk at Harvard less than a year ago and I got this like fascinated unsolicited email where the entire message was like, "What a batshit crazy abstract." Um, there's this concept called the Overton window. The Overton window is the set of ideas that are like considered acceptable to express or or publicly hold. And at least on the surface, this email is a statement that like predicting AGI is outside the Overton window or at least that it's like inside the Overton window to call to call those predictions crazy. Um and um I think this is actually much less true than it was a year ago. But nonetheless, like a primary purpose of this talk is to like urge you slash give you permission to take this stuff seriously. Um what I am saying in this talk is like normal like respected and well-known people and institutions say the same things and they're like still respected. You're allowed to discuss it. You're allowed to think it. You don't have to like like censor censor your worries or or or your concerns. Um, and um, [laughter]

<!-- T001P14 -->
**索尔-迪克斯坦（10:59）** 举例来说，我来读几段受尊敬、知名的人士和机构说过的话，他们说了这些话，照样受人尊敬。英国前首相里希·苏纳克说：“争夺通用人工智能——也就是在所有认知任务上都超越人类的 AI——具有根本性的地缘政治重要性。”巴拉克·奥巴马说：“手机技术的影响已经很深远，但 AI 的影响会更大，而且来得更快。我们现在开始看到这些模型和平台能够完成真正高水平的智力工作，也就是我们认为属于高水平的工作。”接下来是埃里克·施密特。他去年说：“我们相信，明年绝大多数程序员将被 AI 取代。三到五年内，我们会看到与最优秀人类一样聪明的通用人工智能系统；六年内，会出现比我们所有人加起来都聪明的人工超级智能。这一切发生得很快，社会还没准备好。”

**Jascha Sohl-Dickstein (10:59)** to illustrate this, I'm just going to like read some quotes from respected and well-known people and institutions um, saying these things and remaining respected. Um, here's like Rishi Sunnak, the UK prime minister, like the competition for AGI, AI that surpasses humans at all cognitive tasks is a fundamental geopolitical importance. Here we have like Barack Obama, as profound as as cell phone technology has been, AI will be more impactful and it's going to come faster. We are now starting to see these models, these platforms be able to perform really high level, what we consider to be really high level intellectual work. And then there's Eric Schmidt. Um, we believe that in the next year, um, this was actually a statement he made last year. We believe that in the next year, the vast majority of programmers will be replaced by AI. Within three to five years, we'll see AGI systems as smart as the best humans. and in six years artificial super intelligence smarter than all of us can combine. This is happening fast and society isn't ready.

<!-- T001P15 -->
**索尔-迪克斯坦（11:55）** 这段话或许很有意思，因为距这番话大概已经一年了。AI 模型确实已经能做程序员过去做的大部分事情，但程序员工作的其他部分也扩大了；除了一些例外，大多数程序员并没有失业。好，表达这些想法的不只有个人，新闻界也开始试探性地谈论这些想法。《经济学人》谈经济超级智能，《纽约时报》用措辞强烈的标题刊出一篇访谈，受访者是曾任拜登政府白宫 AI 顾问的本·布坎南。

**Jascha Sohl-Dickstein (11:55)** This one is maybe interesting um in that it has probably been about a year since that statement and it is true that AI models do most of what programmers used to do but it's also true that that the other parts of programmers jobs have like expanded and with exceptions most programmers do not find themselves out of out of work. Um okay. Um, and it's not just individuals. Journalists also flirting with ideas. The economist talking about the economic super intelligence. The New York Times with like a strongly worded title for an interview. Um, and um with with Ben Buchanan who used to be the the like AISAR for for Biden White House.

<!-- T001P16 -->
**索尔-迪克斯坦（12:37）** 模型进步很快。我刚才通过谈人类世的开端和终结，营造了或令人不安、或充满希望的气氛。我也谈到，如今通用人工智能这个想法已经足够常见，大家可以相信它、与人讨论它。那么，我们预计它什么时候到来？模型什么时候能在不同事情上达到人类水平或超越人类？尤其是，它们什么时候能自动化完成构成我们工作核心的智力任务？如果你生活在我所处的旧金山 AI 圈，主流答案就是几年内。聚会上有人自称对 AI 发展持长期时间线，你稍微追问一下，所谓“长期”通常就是十年。我觉得光是这一点就不寻常。我妻子在生物科技行业。你若和业内人士谈到第一世界的癌症发病率正以指数速度下降、我们会不会治愈癌症，接下来十分钟通常都在解释治癌有多难、要比预期久得多。但如果你问模型研究者，他们会说：“我们看不到从现在到超级智能模型之间有什么障碍。”最接近这项技术的人，通常最能看见眼前的障碍，却看不到这些障碍。这一点很重要。前几页我展示了一些对数图上的直线，类似的图还很多，足够讲一整场演讲。

**Jascha Sohl-Dickstein (12:37)** Okay. So models are getting better very fast and I've set either an ominous or a a promising tone um by talking about the start and end of a geologic epoch. Um I've talked about how the idea of AGI is normal enough now that you're like allowed to believe it and play company, but but when can we expect it to happen? Um, when can we expect models to be like human or or superhuman on on different different things? Especially when can we expect them to automate the kind of like intellectual tasks that make up the like core part of our of our work. Um, if you live in the SFAI bubble um that I live in, the consensus answer is is just a few years. Um, if you go to like a party and someone describes themselves as having a long timeline and you like push them a little bit on it, it turns out they mean it's going to take 10 years. Like this is actually I think unusual in and of itself. Um, my wife is in biotech and if you talk with people in biotech about how like cancer rates in the first world are like exponentially dropping and like are we going to cure cancer? the ne the next 10 minutes are spent with like a explanation of all the ways that curing cancer is really really really hard and it's going to take way longer than than you would predict. Um if you talk to people that work on these models, they're just like, "Yeah, we don't we don't see a barrier between where we are and and and super intelligent models." Um so the people that are closest to the thing that usually are the ones that see the most immediate barriers don't don't see those barriers. This is an important thing to realize. Um we I showed some like straight lines on log plots on the previous slides. There's a lot more of those. You could do an entire talk on like straight lines and log plots.

<!-- T001P17 -->
**索尔-迪克斯坦（14:22）** 如果你认为有某项尚未测量的能力显示 AI 正在停滞，请把它操作化、量化，做成基准。大家会很欢迎这项贡献，你也会得到很多引用。不过我也要提醒大家，过去几乎所有此类尝试都是这样发展的：有人提出基准。如果你在 1990 年代提出基准，花了二十年，才有人造出能在你的基准上达到人类水平表现的 AI。图里这条是随机猜测水平，这条是人类水平表现。所以，如今提出基准，几个月到几年内就能在这个基准上达到人类水平的成绩，而且这种情况相当可靠、一致。我几年前是 Big-Bench 基准的共同创建者之一；甚至在论文发表之前，就已经有论文在其中一些部分刷新了最佳成绩。

**Jascha Sohl-Dickstein (14:22)** Um if you think there is something that we're not measuring that shows that AI is plateauing in some capability that we care about, I like urge you to like operationalize that, quantify it, make a benchmark. Um people will be very very happy for your contribution. you'll get lots of citations. Um, I should also warn you though, the way in which almost all past attempts to do this have gone, which is that someone makes a benchmark and if you made a benchmark in like the 1990s, it took 20 years before people were able to to build AI that could that could achieve human level performance on your benchmark. So, this is like um basically chance and this is human level performance. um if you make a benchmark now it takes like a few months to a few years before um human level achievement is achieved in this benchmark and this is like fairly reliable and and consistent. I was like one of the co-creators of this benchmark called big bench um a few years ago and like we had like papers getting state-of-the-art on like portions of it before the paper was even our paper was even published.

<!-- T001P18 -->
**索尔-迪克斯坦（15:31）** 我每天都和 Claude 一起工作。感觉就像在和一位热切投入、执行能力极强的研究生合作。幸运的是，目前这位研究生虽然聪明绝顶，研究品味却出奇地差。所以我仍然觉得自己能做点事。但一年前还不是这样。一年前，我没法把一个高层次问题交给 Claude，让它生成几张图，再由我查看；那时我必须深入掌握每一个细节。一年后情况也不会再是这样，模型会更强。

**Jascha Sohl-Dickstein (15:31)** Um, personally I work with Claude every day. Uh, it feels like working with an eager and like utterly gifted at execution like grad student. Um, luckily at the moment a grad student who's like brilliant but has surprisingly poor research tastes. So I still feel like I'm doing something. Um, but this wasn't true a year ago. like a year ago like I wouldn't be able to give Claude a highle problem and then have it generate some plots and then look at the plots. I would have had to be like deep in the every little bit of it. And this isn't going to be true a year from now either. Um the models are going to be better.

## 现场提问：资源、技术瓶颈与获取机会

<!-- T001P19 -->
**索尔-迪克斯坦（16:19）** 好，如果我们接受这个……我刚才想说什么来着？好，我想在这里稍作停顿。我想问问大家：现在这已经是普遍接受的看法了吗？

**Jascha Sohl-Dickstein (16:19)** Okay. If we take the I should go I should Okay, I was going to pause. I should pause here for a moment. Like do people people this is like now now just the accepted norm norm belief.

<!-- T001P20 -->
**现场发言（身份未明）（16:33）** 嗯，嗯。嗨，谢谢……wonder……models。（现场发言，片段及说话人不确定；按字幕保留残句）

**Unidentified voice (16:33)** Yeah. Yeah. Hey, thanks so wonder models.

<!-- T001P21 -->
**索尔-迪克斯坦（17:05）** 我认为我们会同时拥有通用模型和专用模型。不过我对 Yan 的提议不够熟悉，无法发表看法。

**Jascha Sohl-Dickstein (17:05)** Uh I um I think that we are going to have both general purpose and specialized models but I am not familiar enough with with Yan's proposal to to have a have a take.

<!-- T001P22 -->
**现场听众（17:20）** 我觉得很有意思的是，我们能用于这些模型的资源在指数增长，而且我们知道这些资源终究会到位。所以我觉得，最终可能会落在同一个点上——

**Audience (17:20)** Yeah I think it's very interesting all those one which exponentially is the resources we can spend on those models. We know they will be delivered at some point. So for me it's I have the feeling that it's almost going to be the same point that we just

<!-- T001P23 -->
**索尔-迪克斯坦（17:44）** 我不知道，如果某个趋势已经发展了 11、13……如果一条趋势持续了 21 个数量级，而我们离某种类似人类的终点只差一两个数量级——或者说差一个左右的数量级——偏偏这时就遇到资源限制，那会很奇怪。我们生活在物理世界里，指数增长不可能永远持续；但如果曲线此处转向、停下并变平，我会非常惊讶。对我来说，这会很不寻常。

**Jascha Sohl-Dickstein (17:44)** I don't know it's kind of it's kind of a coincidence if something has like proceeded for 11 13 if something if a trend has continued for 21 orders of magnitude it'll be really weird if we're like one twoish orders of magnitude away from you know one-ish order magnitude away from it like reaching like some kind of like humanlike endpoint but that just happens to be when we hit the resource constraints. I mean we live in a physical world right like no exponential can go on forever but I will be shocked if this plot turns right here and stops and this goes flat like that that would be that would be unusual to me.

<!-- T001P24 -->
**提问者（18:26）** 嗯，你刚才提到没有平台期。抱歉。

**Questioner (18:26)** Um yeah, you mentioned no plateau. Sorry.

<!-- T001P25 -->
**现场发言（身份未明）（18:30）** 抱歉，遗憾的是录音里收不到。

**Unidentified voice (18:30)** Sorry. Unfortunately, we won't get it on the recording.

<!-- T001P26 -->
**索尔-迪克斯坦（18:33）** 如果你愿意，可以到麦克风这边来。

**Jascha Sohl-Dickstein (18:33)** Yeah, you could come to the microphone uh if you want.

<!-- T001P27 -->
**提问者（18:38）** 你提到，在通往通用人工智能的过程中还没观察到平台期。能否更详细说明，要达到通用人工智能还需要怎样的支撑结构？我们都大致有个概念——毕竟每天都在用 Claude Code（字幕转写作 cloud code）——但具体来说，从现在到通用人工智能，我们还缺什么？是的，具体需要发生什么？

**Questioner (18:38)** Maybe um you mentioned no plateaus observed until the route to AGI. Would you be able to give a more detailed breakdown into what the latter the scaffolding needed to reach AGI? where we are now that's not AGI like loosely everybody kind of has a sense as we all use cloud code every day but in detail from here to what what are we missing or what yeah exactly what what needs to happen

<!-- T001P28 -->
**索尔-迪克斯坦（19:02）** 嗯，我想我不会在这里花太多时间，因为这更像是个技术问题，而不是“这意味着什么”的问题。但我首先想说，我一再感到震惊、失望，又惊叹于：把朴素的方法扩大到高一个数量级的规模，它竟然还能继续奏效。我认为我们目前的做法效率低得离谱。人脑的数据效率大概比我们当前的方法高四个数量级。显然我们的做法有问题，但这不代表它们行不通，只说明效率低。所以我不认为还缺某个关键东西，也不认为存在会阻止我们实现目标的硬性障碍。我认为缺的只是一些东西——其实就是我们现在的做法低效得简直不像话。

**Jascha Sohl-Dickstein (19:02)** yeah um I I think that um I'm probably not going to spend too much on this because I think that's more of like a technical question than than than like a like a what does it mean question um but Um I think that to first order like I have been repeatedly shocked and disappointed and amazed at how well doing the naive thing at like one order magnitude more scale keeps on working. I think we are doing things that are massively inefficient. I think the brain is like you know four orders of magnitude more data efficient than than our current approaches. Like clearly we're doing things that are wrong but I don't think that means they don't work. it just means they're inefficient. Um, so I actually don't think there is something missing in that. I don't think there's a hard blocker that will prevent us from getting there. I think there are just things missing that are like we're doing things that are woefully embarrassingly inefficient.

<!-- T001P29 -->
**索尔-迪克斯坦（20:04）** 好，再来一个，然后继续。好，请说。

**Jascha Sohl-Dickstein (20:04)** Um, all right. I'm going to do one more and then move on. Okay. Yeah.

<!-- T001P30 -->
**提问者（20:15）** 接着 Dennis 关于资源的问题，你怎么看人们获得这些资源的机会？我担心会出现能获得 token 的人和无法获得 token 的人。也许这正好引出你下一张关于我们该做什么的幻灯片，但我很想知道，你怎么看这种日益扩大的不平等：有人能大量消耗资源，有人却不能。

**Questioner (20:15)** Following on on Dennis's question about resources, how do you think about um people getting access to those resources? I think one of the concerns are um there'll be the halves and the have nots of access to tokens. Um maybe that's teeing up your your next slide about what what we should do, but I'm really curious about this kind of growing inequity of those who can burn and those who can't.

<!-- T001P31 -->
**索尔-迪克斯坦（20:39）** 我认为，确保我们将创造的巨大财富得到分配，显然非常重要。其中一部分是，智能会以指数速度变得越来越便宜，这既令人惊叹，也有点吓人。我个人认为，社会上还需要某些再分配机制，比如对 AI 公司征收一笔与智能相关的大额税，再将收入重新分配。我这样认为是因为我们的政府制度。我猜这在美国会运作得不错，因为人们会失去工作，也会积极为自己争取权益。我可能更担心全球层面的问题，不过我们之后可以再深入谈。

**Jascha Sohl-Dickstein (20:39)** Yeah, I I think making sure that the vast wealth that we're going to create gets like distributed is like clearly very important. Um I think like part of that is like intelligence is just going to get exponentially cheaper which is like amazing and also kind of scary. But I think also like socially, well, I personally believe that socially we're going to want mechanisms that look like redistribution that look like a large tax on on like intelligence on AI companies and that redistribute that. Um, I think that's because of our government system. I suspect that's going to work pretty well in the US because I think people are going to lose jobs and be like, you know, they're going to advocate very well for themselves. I'm I'm maybe more worried globally, but this is we can have a longer discussion later. Yeah.

**译注**

讲者以“人类世”讨论人类改变地球的能力。2024 年，国际地质科学联合会与国际地层委员会确认了否决将其列为正式地质年代单位的表决结果。[联合声明](https://stratigraphy.org/news/152)

字幕中的“beater”据上下文译作 METR。其指标以人类专家完成同一任务所需的时间衡量任务长度。讲者举的百分数指模型成功完成任务的概率。[METR 指标说明](https://metr.org/time-horizons/)

08:08 起，讲者几次中断并重说有关泛化的句子。结合随后的数学例子和现场问答，他质疑的是：是否真有一条界线，模型能够在界线以下泛化，却无论如何也跨不过去。[回看这段演讲](https://www.youtube.com/watch?v=3LZN2UUxDos&t=488s)
