---
layout: post
title:  "Telegram创始人帕维尔·杜罗夫2025年10月播客实录 | 中英文完整版精译 Part2"
categories: podcast 
tags: thinking
author: LZN
---

_书童按：本篇是帕维尔·杜罗夫（Pavel Durov）于2025年10月接受Lex Fridman的播客采访实录，Pavel是端到端加密通信软件Telegram的创始人兼CEO。其采访中涉及精简团队、高度自动化、法国被捕、审查、企业家的困境等话题，精彩绝伦，令人击节称赞。初稿采用AI机器翻译，经自动化中英混排，书童仅做简单校对及批注。原稿中英文混排近7万字，书童将分为Part1-4发出，本篇是第二部分，以飨诸君。_

![](https://i.imgur.com/9LrwSRj.jpeg)

**Telegram: 精简哲学、隐私与地缘政治**

**Telegram: Lean philosophy, privacy, and geopolitics**

**Lex Fridman (00:41:26)** 好的。我们休息了一下，现在回来了。我得问问你关于 Telegram 这家公司的事情。我有幸见到了一些在那里工作的杰出工程师。与其他达到 Telegram 这样规模的科技公司相比，Telegram 的运行很精简。它的员工非常少。那么，核心团队有多少人？比如说核心工程团队。

**Lex Fridman (00:41:26)** All right. We took a break and now we’re back. I got to ask you about Telegram, the company. I got to meet some of the brilliant engineers that worked there. Telegram runs lean relative to other technology companies that achieve the scale that Telegram does. It has very few employees. So, how many people are on the core team? Let’s say the core engineering team.

**Pavel Durov (00:41:48)** 核心工程团队大约有 40 人。这包括后端、前端、设计师、系统管理员。

**Pavel Durov (00:41:48)** The core engineering team is about 40 people. This includes back-end, front-end, designers, system administrators.

**Lex Fridman (00:42:02)** 你能谈谈用如此少的员工运营一家公司背后的哲学吗？

**Lex Fridman (00:42:02)** Can you speak to the philosophy behind running a company with so few employees?

**Pavel Durov (00:42:10)** 嗯，我们很早就意识到，员工的数量并不等同于他们生产的产品质量。在很多情况下，情况恰恰相反。如果人太多，他们必须协调彼此的工作，不断沟通，他们 90% 的时间将花在相互协调他们负责的那一小部分工作上。员工太多的另一个问题是，有些人会没有足够的工作可做，而如果他们没活干，他们仅仅存在就会让其他所有人失去动力。他们还在那里，仍然领着薪水，但他们什么都不做。

**Pavel Durov (00:42:10)** Well, what we realized really early is that quantity of employees doesn’t translate the quality of the product they produce. In many cases, it’s the opposite. If you have too many people, they have to coordinate their efforts, constantly communicate, and 90% of their time will be spent on coordinating the small pieces of work they’re responsible for between each other. The other problem with having too many employees is that some of them won’t get enough work to do, and if they don’t get enough work to do, they demotivate everybody else by their mere existence. They’re still there, they’re still getting the salary, but they don’t do anything.

**(00:43:01)** 如果他们什么都不做，他们多半会开始尝试在其他地方寻找自己的存在价值，也许是在你的团队内部，但不是通过做有成效的工作，而是通过寻找团队中并不存在的问题。这会进一步破坏团队和团队内的氛围。此外，当你故意不允许某些团队成员雇佣更多人来帮助他们时，他们将被迫实现自动化。在我们的案例中，我们在全球有数万台服务器，接近 10 万台，分布在几个大洲和数据中心。

**(00:43:01)** If they don’t do anything, more often than not, they will start trying to find their purpose elsewhere, maybe inside your team, but not by doing productive work, but by finding problems that don’t exist within the team. That can disrupt the team and the mood inside it even further. Also, when you intentionally don’t allow some of your team members to hire more people to help them, they’ll be forced to automate things. In our case, we have tens of thousands of servers around the world, almost 100,000 distributed across several continents and data centers.

**(00:44:02)** 如果你试图在没有自动化的情况下手动管理这个系统，你最终可能需要雇佣数千人，甚至数万人。但如果你依赖算法，并且团队被迫整合算法来管理它，那么它就变得更具可扩展性，更高效，而且有趣的是，也可靠得多。

**(00:44:02)** If you try to manage this system manually without automation, you will probably end up hiring thousands of people, tens of thousands of people. But if you rely on algorithms and the team is forced to put together algorithms in order to manage it, then it becomes much more scalable, much more efficient, and interestingly, much more reliable as well.

**Lex Fridman (00:44:31)** 并且对不断变化的地缘政治、不断变化的技术等等更具韧性。因为如果你将数据存储和所有计算的分布式方面自动化，那么它就能抵御世界向你抛来的一切。我想如果你让人来管理所有这一切，它很快就会变得僵化。

**Lex Fridman (00:44:31)** And more resilient to the changing geopolitics, to the changing technology, all of that. Because if you automate the distributed aspect of the data storage and all the compute, then that’s going to be resilient to everything the world throws at you. I suppose if you have people managing all of it, it becomes stale quickly.

**Pavel Durov (00:44:54)** 是的，人类是攻击载体，如果你有一个自动运行的分布式系统，你就有机会提高服务的速度安全性和速度，这就是我们在 Telegram 所做的，同时也使其更加可靠。因为如果网络的某部分出现故障，你仍然可以切换到其他部分。

**Pavel Durov (00:44:54)** Yes, humans are attack vectors, and if you have a distributed system that runs itself automatically, you have a chance at increasing the security of speed and speed of your service, this is what we did with Telegram, while also making it much more reliable. Because if some part of the network goes down, you can still switch to the other parts of it.

**Lex Fridman (00:45:25)** 是的。你保护用户隐私的一个重要方式是你存储数据的方式。Telegram 的基础设施端分布在许多法律管辖区，并且解密密钥也是分散的。所以，数据在云端是加密的。解密密钥被分割并保存在不同的位置，这样没有任何单一政府或实体能够访问数据。你能解释一下这种方法的好处吗？

**Lex Fridman (00:45:25)** Yeah. One of the big ways you protect user privacy is that you store the data. The infrastructure side of Telegram is distributed across many legal jurisdictions with the decryption keys. So, it’s encrypted in cloud. The decryption keys are split and kept in different locations so that no single government or entity can access the data. Can you explain the strength of this approach?

**Pavel Durov (00:45:55)** 我们设计 Telegram 的方式是，我们从不希望任何人类、任何员工能够访问私人消息数据。这就是为什么自 2012 年以来，当我们试图构思这个设计时，我们总是投入大量精力来确保没有人能够破坏它。即使你雇佣了一个员工，或者现有的任何员工，都无法以允许他们访问用户消息的方式破坏系统。然后当然我们推出了端到端加密消息，这种消息受到更多保护，但它有一定的局限性。所以，你仍然必须依赖加密的云端。因此，一个有趣的工程挑战是如何确保在你的团队内部或外部不会产生任何单点故障。

**Pavel Durov (00:45:55)** The way we designed Telegram is we never wanted to have any humans, any employees have any access to private messaging data. That’s why since 2012 when we’ve been trying to come up with this design, we always invested a lot of effort into making sure that nobody can mess with it. If you hire an employee or any of the existing employee, it can’t break the system in a way that would allow them to access messages of users. Then of course we launched end-to-end encrypted messaging that is even more protected, but it has certain limitations. So, you still have to rely on an encrypted cloud. So, an interesting engineering challenge was how you make sure that no point of failure can be created within your team or outside.

**Lex Fridman (00:46:58)** 所以没有任何员工能够访问用户消息。就是这样。我们谈论加密，谈论隐私，谈论安全，所有这些事情。我认为人们最关心的事情，同时也是存在很多错误信息的，就是关于私人消息。所以，Telegram 对用户的私人消息保护得非常非常严密。你说员工永远无法访问私人消息。过去是否有任何政府或情报机构曾访问过用户的私人消息？

**Lex Fridman (00:46:58)** So no employee can even access user messages. So, that’s the thing. We talk about encryption, we talk about privacy, we talk about security, all these kinds of things. I think the number one thing that people are concerned about, about which there’s also misinformation, is about private messages. So, Telegram is very, very protective of the private messages of users. So, you’re saying employees never can access the private messages. Have any governments or intelligence agencies ever accessed private user messages in the past?

**Pavel Durov (00:47:38)** 没有，从来没有。Telegram 从未与任何人，包括政府和情报机构，分享过任何一条私人消息。如果你试图访问任何数据中心位置的任何服务器，所有数据都是加密的。你可以取出所有硬盘并进行分析，但你什么也得不到。所有数据都以无法破译的方式加密。这对我们来说非常重要。这就是为什么我们可以自信地说，从未发生过数据泄露，任何来自 Telegram 的数据泄露。无论是私人消息，还是联系人列表。

**Pavel Durov (00:47:38)** No, never. Telegram has never shared a single private message with anyone, including governments and intelligence services. If you try to access any server in any of the data center locations, it’s all encrypted. You can extract all the hard drives and analyze it, but you won’t get anything. It’s all encrypted in the way that is undecipherable. That was very important for us. That’s why we can say with confidence, there hasn’t been ever a leakage of data, any leak of data from Telegram. Not in terms of private messages, not in terms of say contact lists.

**Lex Fridman (00:48:28)** 你是否预见到未来可能出现某种情况，你可能会与政府或情报机构分享用户的私人消息？

**Lex Fridman (00:48:28)** Do you see in the future a possible scenario where you might share user private messages with governments or with intelligence agencies?

**Pavel Durov (00:48:39)** 不会。我们设计的系统使得这不可能实现。这需要我们改变系统，而我们不会那样做，因为我们对用户做出了承诺。我们宁愿在某个国家关闭 Telegram，也不会那样做。

**Pavel Durov (00:48:39)** No. We designed a system in a way that’s impossible. It’ll require us to change the system and we won’t do that because we made a promise to our users. We would rather shut Telegram down in a certain country than do that.

**Lex Fridman (00:48:56)** 所以这是你运营所遵循的原则之一，即保护用户隐私。

**Lex Fridman (00:48:56)** So that’s one of the principles you operate under is you go into protect user privacy.

**Pavel Durov (00:49:03)** 我认为这是根本。没有隐私权，人们就无法感到完全自由和受保护。

**Pavel Durov (00:49:03)** I think it’s fundamental. Without the right to privacy, people can’t feel fully free and protected.

**Lex Fridman (00:49:11)** 我的意思是，这是个好地方来问这个问题。我相信你受到各种各样的人、各种各样的组织的压力，要求分享私人数据。你从哪里获得力量和无所畏惧的精神，对所有人说不，包括强大的情报机构，包括强大的政府，有影响力的、有权势的人？

**Lex Fridman (00:49:11)** I mean, this is a good place to ask. I’m sure you’re pressured by all kinds of people, all kinds of organizations to share private data. Where do you find the strength and the fearlessness to say no to everybody, including powerful intelligence agencies, including powerful governments, influential, powerful people?

**Pavel Durov (00:49:33)** 我想部分原因只是我就是我。我从小就开始捍卫自己和自己的价值观。我总是和我的老师们有矛盾，因为我会在课堂上指出他们的错误。归根结底，重要的是提醒自己，你没有什么可失去的。他们可能认为可以用某些东西勒索你，可以用某些东西威胁你，但他们到底能对你做什么呢？最坏的情况，他们可以杀了你，但这又把我们带回到讨论的第一部分。活在恐惧中是毫无意义的。

**Pavel Durov (00:49:33)** I guess part of it is just me being me. I stood up for myself and for my values since I was a little kid. I always had issues with my teachers because I would point out their mistakes during classes. At the end of the day, what’s important is to remind yourself that you have nothing to lose. They can think they blackmail you with something, they can threaten you with something, but what is it they really can really do to you? Worst case, they can kill you, but that brings us back to the first part of our discussion. There’s no point living your life in fear.

**(00:50:21)** 至于 Telegram，它非常成功，但如果我们失去一个市场或两个市场，或者几乎所有的市场，我并不那么在意。这不会影响我，不会以任何方式影响我的生活方式。我仍然会做我的俯卧撑。所以，如果你不喜欢加密，不喜欢隐私，认为你应该在你的国家禁止加密，就像欧盟现在试图为其所有成员国做的那样，好吧，尽管去做。我们只会退出这个市场。我们不会在那里运营。这没那么重要。他们都以为我们 somehow 从他们的公民那里获利，科技公司唯一的目标就是榨取收入。没错，大多数科技公司都是这样的，但也有像 Telegram 这样有点不同的项目，我不确定他们是否意识到这一点。

**(00:50:21)** As for Telegram, it’s incredibly successful, but if we lose one market or two markets or pretty much all of the markets, I don’t care that much. It won’t affect me, it won’t affect my lifestyle in any way. I’ll still be doing my pushups. So, you don’t like encryption, you don’t like privacy, you think you should ban encryption in your country, like the European Union is trying to do now for all the member states, well, go ahead and do that. We’ll just quit this market. We won’t operate there. It’s not that important. They all think that somehow we profit from their citizens, and the only goal tech companies have is extracting revenues. It’s true, most tech companies are like this, but there are projects like Telegram which are a bit different and I’m not sure they realize that.

**Lex Fridman (00:51:23)** 所以对你来说，在原则方面保持你的正直，其价值比任何其他事情都重要。当然，我们应该说，你也完全有能力并且有控制权来做到这一点，因为你，Pavel Durov，拥有 Telegram 100% 的股份。所以，在这个问题上没有其他人有发言权。

**Lex Fridman (00:51:23)** So for you, the value of maintaining your integrity in relation to your principles is more important than anything else. Of course, we should say that you also have full ability and control to do just that because you, Pavel Durov, own 100% of Telegram. So, there’s no anybody with a say on this question.

**Pavel Durov (00:51:47)** 没有股东，这是相当独特的。

**Pavel Durov (00:51:47)** There are no shareholders, which is quite unique.

**Lex Fridman (00:51:52)** 非常独特。我认为在任何大型科技公司中，甚至没有接近这种情况的。

**Lex Fridman (00:51:52)** Very unique. I don’t think there’s anything even close to that in any major tech company.

**Pavel Durov (00:51:56)** 这使我们能够以我们自己的方式运营，基于某些基本原则来构建和维护这个项目，顺便说一句，我认为每个人都相信这些原则。我认为隐私权被包括在大多数国家的宪法中，至少大多数西方国家，但它几乎每周都受到攻击。它通常始于善意的提议。哦，我们必须打击犯罪，我们必须这样做，我们必须保护儿童。但归根结底，结果是一样的。人们失去了像隐私这样基本的东西的权利。他们有时会失去表达自己、集会的权利。

**Pavel Durov (00:51:56)** And this allows us to operate the way we operate, to build this project and maintain it based on certain fundamental principles, which by the way, I think everybody believes in. I think the right to privacy is included in the constitution of most countries, at least most Western countries, but it’s still under attack almost every week. It often starts with well-meaning proposals. Oh, we have to fight crime, we have to do that, we have to protect the children. But at the end of the day, the result is the same. People lose their right to such fundamental thing as privacy. They sometimes lose their right to express themselves, to assemble.

**(00:52:47)** 这是一个我们在几乎每一个专制国家，或者曾经自由后来变得专制的国家都目睹的滑坡。世界上没有一个独裁者说过："让我们剥夺你们的权利，因为我想为自己攫取更多权力，我想让你们痛苦。" 他们都用听起来非常合理的理由来证明其正当性，然后分阶段逐渐推进。几年后，人们会发现自己处于无助的境地。他们无法抗议。他们发送的每一条信息都被监控。他们无法集会。一切都完了。

**(00:52:47)** This is a slippery slope that we witnessed in pretty much every autocratic country or country that used to be free and then became autocratic. No dictator in the world ever said, “Let’s just strip you away from your rights because I want more power to myself and I want you to be miserable.” They all justified it with very reasonable sounding justifications and then it came in stages gradually. After a few years, people would find themselves in a position when they’re helpless. They can’t protest. Every message they sent is monitored. They can’t assemble. It’s over.

**Lex Fridman (00:53:39)** 所以你视 Telegram 为一个来自各行各业、每个国家的人都能畅所欲言、发出声音的地方。在地缘政治背景下，你提到政府当其变得专制时，自然而然地，这是世界的方式。人性和政府的本质，它们变得更具审查性。它们开始审查，并且总是在心里证明其合理性，或许假设自己在做好事。

**Lex Fridman (00:53:39)** So you see Telegram as a place that people from all walks of life, from every nation can have a place to speak their mind, have a voice in. In the geopolitical context, you’re mentioning that government when they become autocratic naturally is the way of the world. Human nature and the nature of governments, they become more censorious. They begin to censor and always justifying it in their minds perhaps assuming that they’re doing good.

**Pavel Durov (00:54:08)** 也许他们中的一些人认为自己在做好事，但有趣的是，其结果总是国家以牺牲个人为代价积累更多权力。那么它在哪里停止呢？我们人类不太擅长找到正确的平衡，在这种情况下，就是在混乱与秩序、自由与结构之间找到正确的平衡。我们往往走向极端。

**Pavel Durov (00:54:08)** Perhaps some of them assume they’re doing good, but interestingly, it always results in the state accumulating more power at the expense of the individual. Then where does it stop? We humans are not very good at finding the right balance, and in this case, the right balance between chaos and order, between freedom and structure. We tend to go to extremes.

**Lex Fridman (00:54:44)** 我认为你仍然认为自己是自由主义者。关于政府，总有某种东西会随着时间的推移，自然而然地建立起越来越庞大的官僚机构。在那个官僚机构的机器中，它积累了越来越多的权力。并不总是那个官僚机构中的某个个体成员腐蚀了政府建立之初的原则，而只是随着时间的推移，某些东西被遗忘了。你开始审查。你开始限制个人的自由，限制个人发言、表达意见、投票的能力。事情就这样逐渐发生了。

**Lex Fridman (00:54:44)** I think you still consider yourself a libertarian. There is something about government that always over time naturally builds a larger and larger bureaucracy. In that machine of bureaucracy, it accumulates more and more power. It’s not always that one individual member of that bureaucracy is the one that corrupts the initial principles on which the government was founded, but just something over time, you forget. You begin to censor. You begin to limit the freedoms of the individual, the ability of the individuals to speak, to have a voice, to vote. It just gradually happens that way.

**Pavel Durov (00:55:29)** 而政府并不是某种抽象的概念。政府是由人组成的，这些人有目标。他们自然会倾向于增加影响力，拥有更多的下属，拥有更多的资源。这就是你最终陷入一个无限循环的原因：不断增加的税收，不断增加的监管，这最终扼杀了自由市场、自由企业和言论自由。所以，你确实希望对政府能够以牺牲公民为代价来增加其权力的程度进行非常、非常严格的限制。讽刺的是，你并没有那些限制。

**Pavel Durov (00:55:29)** And the government is not some abstract notion. The government consists of people and these people have goals. They would naturally be inclined to increase the level of influence, to have more subordinates, to have more resources. That’s how you end up in an endless loop of ever-increasing taxes, ever-increasing regulation, which ultimately suffocates free market, free enterprise, and free speech. So, you do want to have very, very strict limitations on the extent the government can increase its powers at the expense of citizens. Ironically, you don’t have those limitations.

**(00:56:22)** 在所有被认为是自由的国家里，本应是宪法保护每个人，但有趣的是，事情并不总是这样运作。他们能够找到非常狡猾的措辞来 carve out 例外，然后例外就成了规则。

**(00:56:22)** You’re supposed in all countries, which are considered to be free. It’s supposed to be the constitution that protects everybody, but interestingly, it doesn’t work always this way. They are able to find very tricky phrasings in order to carve out exceptions and then the exception becomes the rule.

**在法国被捕**

**Arrest in France**

**Lex Fridman (00:56:49)** 关于这个话题，我很想和你谈谈最近的一段经历，关于你去年八月在法国被捕的事。我认为我应该说，这是我近期乃至整个历史上所见过的对科技领袖最严重的权力过度扩张之一。所以，这是悲剧性的，但我觉得它说明了我们一直在谈论的事情。那么，也许你能讲述一下整个事件的经过？你到达了法国。

**Lex Fridman (00:56:49)** On this topic, I’d love to talk to you about the recent saga of you being arrested in the August of last year in France. I think I should say that it’s one of the worst overreaches of power I’ve seen as applied to a tech leader in recent history, in all history. So, it’s tragic, but I think speaks to the thing that we’ve been talking about. So, maybe can you tell the full saga what happened? You arrived in France.

**Pavel Durov (00:57:24)** 我去年八月抵达法国，只是一个短暂的两天行程，然后我看到十几个武装警察迎接我，并要求我跟着他们。他们向我宣读了一份清单，上面列出了大约 15 项我被指控的严重罪行，这令人难以置信。起初，我以为一定是搞错了。然后我意识到他们是认真的，他们指控我犯了 Telegram 用户据称犯下的所有可能的罪行，或者是一些用户，他们认为我应该对此负责，这又像你说的，是这个星球历史上从未发生过的事情。没有一个国家，甚至不是专制国家，曾对任何科技领袖这样做过，至少不是这种规模。

**Pavel Durov (00:57:24)** I arrived in France last year in August just for a short two-day trip and then I see a dozen of armed policemen greeting me and asked me to follow them. They read me a list of something like 15 serious crimes that I’m accused of, which was mind-boggling. At first, I thought there must be some mistake. Then I realized they’re being serious and they’re accusing me of all possible crimes that the users of Telegram have allegedly committed or some users and they think I should be responsible for this, which again, like you said, it’s something that never happened in the history of this planet. No country, not even an authoritarian one did that to any tech leader, at least at this scale.

**(00:58:37)** 这样做有充分理由，因为通过向商业和科技界传递这些信息，你是在牺牲经济增长的很大一部分。于是，他们把我放进警车，我发现自己被警方拘留。小房间，没有窗户，只有一张狭窄的混凝土床。我在那里呆了将近四天。在这个过程中，我必须回答警察的一些问题。他们对 Telegram 的运作方式感兴趣。反正大部分都是公开的，令我震惊的是，发起这项调查的人对技术如何运作、加密如何工作、社交媒体如何运作的理解非常有限，或者我该说甚至缺乏理解。

**(00:58:37)** There are good reasons for that because you are sacrificing a big part of your economic growth by sending these messages to the business and tech community. So, they put me in a police car and I found myself in police custody. Small room, no windows, just a narrow bed made of concrete. I spent almost four days there. In the process, I had to answer some questions of the policemen. They were interested in how Telegram operates. Most of it is public anyway, and I was struck by very limited understanding or should I say even lack of understanding on behalf of the people who initiated this investigation against me by how technology works, how encryption works, how social media work.

**Lex Fridman (00:59:57)** 我的意思是，这有一种黑暗的诗意：一个拥有十亿人在上面交流的平台的科技创始人，你却待在混凝土床上，几天没有枕头，没有窗户。我是弗朗茨·卡夫卡的忠实粉丝，他写过关于这类情况的荒谬性，因此有了"卡夫卡式"的故事。他写过一个故事，也许预言了， literally 就是这种情况，叫做《审判》，其中一个人被捕，原因无人能解释，并且长时间困在司法系统中，有趣的是，在那个故事里，无论是被捕的人还是系统内的任何个体成员，都没有完全理解正在发生什么。

**Lex Fridman (00:59:57)** I mean, there’s something darkly poetic about a tech founder of a platform where a billion people are communicating with each other and you’re on concrete, no pillow for days, no windows. I’m a huge fan of Franz Kafka and he’s written about the absurdity of these kinds of situations, hence the Kafkaesque stories. There’s a story literally about the situation that he wrote, perhaps predicted, called The Trial, where a person is arrested for no reason that anybody can explain and is stuck in the judicial system for a long time, that nobody fascinatingly in that story, neither the person arrested nor any individual member of the system itself fully understand what is happening.

**(01:00:45)** 没有人能真正回答这些问题，最终，这个人——剧透警告——被整个系统精神摧垮，这就是官僚机构在其最荒谬形式下所能做到的。它摧垮了精神，我们所有人身上承载的人类精神。这就是官僚机构的负面影响。

**(01:00:45)** Nobody can truly answer the questions and eventually the person, spoiler alert, is mentally broken by the whole system, which is what bureaucracy can do in its most absurd form. It breaks the spirit, the human spirit laden in all of us. That’s the negative side of bureaucracy.

**Pavel Durov (01:01:05)** 我同意你关于这件事的荒谬性，因为如果这是一个善意地试图解决问题的尝试，有那么多种方式可以联系 Telegram，联系我本人，表达他们的关切，并以常规和外交的方式解决任何所谓的问题，就像这个星球上其他每个国家解决这些问题的方式一样，包括与 Telegram。我们这样做过几十次。

**Pavel Durov (01:01:05)** I agree with you on the absurdity of this thing because if this was a good faith attempt to fix an issue, there were so many ways to reach out to Telegram, to reach out to me personally, voice their concerns, and solve any alleged problem in a way that is conventional and diplomatic the way every other country on this planet solves these problems, including with Telegram. We did it dozens of times.

**Lex Fridman (01:01:43)** 是的，你们有一个很好的页面展示了这一点，就像大多数人不怎么考虑的细节，但 Telegram 处于打击 CSAM 和恐怖组织的最前沿。有一个很好的页面，telegram.org/moderation，显示了参与恐怖活动和 CSAM 活动的群组和频道的惊人数量，这些都被 Telegram 主动发现并封禁。就像你说的，由于自动化，很多这项工作是通过机器学习完成的，其规模是巨大的。

**Lex Fridman (01:01:43)** Yeah, you have a nice page showing this is like details that most people don’t really think about, but Telegram is at the forefront of moderating CSAM and terrorist groups. There’s a nice page, telegram.org/moderation that shows just the incredible amount of groups and channels that are engaged in terrorist activity and CSAM activity that are actively blocked, found and blocked by Telegram. A lot of this work, like you said, because of the automation is done with machine learning, just the scale is insane.

**(01:02:22)** 这是大多数像我这样只是在 Telegram 上聊天的新手不会想到的事情，但那里确实有大量的人 essentially 在做违法的事情，而你必须立即找到并制止它们。我想所有平台都必须处理这个问题。Telegram 在处理这些内容方面做得很好。你说的是法国政府根本不知道。他们甚至知道机器学习是什么吗？

**(01:02:22)** This is stuff that most noobs like me who are just chatting it up on Telegram don’t think about, but there’s just an immense number of people essentially doing things that violate the law on there and you have to find them immediately and catch it. I guess all platforms have to deal with it. Telegram was doing a great job of dealing with that content. What you’re saying is the French government had no idea. Do they even know what machine learning is?

**Pavel Durov (01:02:53)** 这是一个向他们解释起来很有挑战的概念，但我认为到这次调查结束时，他们会学到更多关于它的知识。这是我的希望。无论如何，你是对的。如果你看看 Telegram，我们从 10 年前就开始打击在我们的平台上公开传播的有害内容，实际上从我们在 Telegram 上推出公共频道的时候就开始了。大约从八年前开始，我们就有每日透明度报告，说明我们每天删除了多少与虐待儿童或恐怖主义宣传相关的频道。

**Pavel Durov (01:02:53)** It’s a concept that is challenging to explain to them, but I think they will learn much more about it by the end of this investigation. That’s my hope. In any case, you’re right. If you look at Telegram, we’ve been fighting harmful content that is publicly distributed on our platform since 10 years ago, actually since the time we launched public channels on Telegram. Since something like eight years ago, we had daily transparency reports on how many channels related to child abuse or terrorist propaganda we’ve taken down daily.

**(01:03:41)** 每天我们可能会删除数百个，如果包括我们移除的所有类型的内容，所有账户、群组、频道、帖子，那每周将达到数百万条内容，每天数十万条。然后有人会读到报纸，因为读到一些关于儿童色情的内容而愤怒。这是一个非常情绪化的话题，然后开始做一些不是基于数据、逻辑思考和法律，而是基于从不准确信息中产生的情绪驱动的事情。

**(01:03:41)** Every day we’ve taken maybe we’d take down hundreds of them, and if you include all kinds of content that we remove, all the accounts, groups, channels, posts, that would amount to millions of pieces of content every week, hundreds of thousands every day. Then somebody would read the newspaper, get enraged because they would read something about child porn. This is a subject that is very emotionally charged and start doing something not based on data and logical thinking and laws, but based on emotions driven from inaccurate input.

**Lex Fridman (01:04:36)** 是的，我认为我们应该非常清楚地表明，没有任何理由，法国政府本不应该逮捕你，但现实就是这样。这就是你所处的境地。那么，明确地说，你必须定期出庭面对法官。所有这一切都荒谬得可笑。如果不是极其严重的话，这会很滑稽。你必须每隔一段时间就出庭面对法官。那是什么样的经历？

**Lex Fridman (01:04:36)** Yeah, I think we should make pretty clear that there’s no world, no reason that the French government should have arrested you, but here we are. That’s the situation you’re in. So, to be clear, you have to show up in front of a judge. All of this is beautifully absurd. It would be hilarious if it wasn’t extremely serious. You have to show up in front of a judge every certain amount of time. What is that experience like?

**Pavel Durov (01:05:01)** 在法国，他们有调查法官这个角色。我认为世界上很多其他地方没有这个角色。这意味着我还没有受审，我还在被调查。在法国，不仅仅是警察或检察官问我问题。是一位法官，根据我的经验，这更像仍然是一个检察官，但被称为法官。这使得上诉更加困难。所以，如果你在可以旅行的国家受到限制，那么上诉这种限制会花费你很多时间。调查本身根本就不应该启动。对于像监管社交媒体这样复杂的问题，这是一种荒谬且有害的解决方式。这完全是错误的工具。所以，我们对调查本身提出了反对和上诉。我们去年就做了，我相信。

**Pavel Durov (01:05:01)** In France, they have this role of investigative judge. I don’t think you have it in many other places in the world. It means I’m not on trial, I’m being investigated. In France, it’s not just the police or prosecutor asking me questions. It’s a judge, which in my experience is more like still a prosecutor, but it’s called a judge. That makes it harder to appeal. So, if you are limited in say, countries where you can travel, then to appeal that restriction will take you a lot of time. The investigation itself should have never been started. It’s an absurd and harmful way of solving an issue such as complicated as regulating social media. It is just the wrong tool. So, we objected and appealed the investigation itself. We did last year, I believe.

**(01:06:14)** 我们甚至还没有得到上诉的听证日期，因为过程缓慢得令人痛苦，不仅对我，对每个人都是如此，这让我意识到这个系统可能在多个层面都出了问题。还有其他受法国司法系统影响的企业家告诉我他们经历的恐怖故事，他们的业务被调查法官非常不必要的行动所瘫痪，而这些行动最终被证明是不合理和有偏见的。最终，也许当你到达更高一级法院时，你可以解决它，得到公正，但在这个过程中你会失去大量的时间和精力。所以，这是唯一一件，我希望，与你在卡夫卡故事中讲述的情况不同并且将会不同的地方。

**(01:06:14)** We’re still not even given a hearing date for the appeal because the process is painfully slow, not just for me but for everybody, which made me realize the system may be broken in many levels. You have other entrepreneurs affected by the French justice system telling me horror stories about their experiences where businesses got paralyzed by very unnecessary actions of investigative judges that ended up being unjustified and biased. In the end, you can perhaps solve it when you reach a higher court and you’ll get justice, but you’ll lose a lot of time and energy in the process. So, this is the only thing that is, I hope, different and will be different in this case compared to the story you told from Kafka.

**Lex Fridman (01:07:31)** 我的意思是，但正如卡夫卡所描述的那样，它确实随着时间的推移摧垮了很多人。所以我们应该说，你有很长一段时间不被允许离开法国旅行。现在你可以去迪拜了。我们现在就在迪拜，有幸见到了许多在 Telegram 工作的人。Telegram 总部设在迪拜，但你不被允许去任何其他地方旅行。你觉得什么时候能来德克萨斯州和我一起聚聚？

**Lex Fridman (01:07:31)** I mean, but it does as Kafka describes break a lot of people with time. So, we should say that you’re for a long time not allowed to travel out of France. Now you can travel to Dubai. We’re now in Dubai, got to meet many of the people that work at Telegram. Telegram is headquartered in Dubai, but you’re not allowed to travel anywhere else. When do you think you’re coming to Texas to hang out with me over there?

**Pavel Durov (01:08:01)** 这是个很难回答的问题，因为它不仅仅取决于我的行动。我只能这么说，我有耐心。我不会让这种对我自由的限制支配我的行动。如果有任何影响，我只会加倍努力捍卫自由，因为我亲身经历了失去自由的感觉，至少在那四天被警方拘留期间，当你被困住，无法与对你重要的人交流，甚至不知道世界上关于你个人发生了什么。所以，我没有水晶球可以告诉我未来。我不能说我悲观。我认为我们已经能够逐步解除去年八月最初施加在我自由上的大部分限制。

**Pavel Durov (01:08:01)** That’s a hard question to answer because it doesn’t depend on just my actions. I can just say this, I’m patient. I will not let this limitation on my freedom dictate my actions. I will, if anything, double down on defending freedoms because I experienced firsthand what the absence of freedom feels like at least during these four days in police custody when you are just stuck, unable to communicate with people that are important to you, when you don’t even know what’s going on in the world in relation to you personally. So, I have no crystal ball that would tell me the future. I can’t say that I am pessimistic. I think we’ve been able to gradually remove most of the restrictions initially imposed on my freedom last August.

**Lex Fridman (01:09:23)** 如果法国政府或法国情报机构想要一个后门，或者想要访问用户的私人消息，你会对他们说什么？他们有什么办法可以获取用户的私人消息吗？

**Lex Fridman (01:09:23)** If the French government or the French intelligence agency want to have a back door or want to access private user messages, what would you say to them? Is there anything they can do to get access to the private user messages?

**Pavel Durov (01:09:42)** 没有。我的回应会非常明确，但不会很礼貌。所以，我不确定。

**Pavel Durov (01:09:42)** Nothing. My response would be very clear, but it won’t be very polite. So, I’m not sure.

**Lex Fridman (01:09:52)** 在这里说很好。

**Lex Fridman (01:09:52)** It’s good to say here.

**Pavel Durov (01:09:53)** 在这里说很好，因为你打着领带。

**Pavel Durov (01:09:53)** It’s good to say because you are wearing a tie.

**Lex Fridman (01:09:57)** 是的，这是一个严肃的、成人般的、绅士风格的节目。是的，但这是人们的一个担忧。

**Lex Fridman (01:09:57)** Yeah, this is a serious adult gentleman-like program. Yeah, but that is a concern.

**Lex Fridman (01:10:00)** ……一个绅士风格的节目，是的。但这是人们的一个担忧，当你面临来自政府的如此大的压力时，随着时间的推移，他们会拖垮你，然后你就会屈服。然后，当然，其他地方会利用这一点作为宣传来攻击你，你基本上受到每个国家的攻击。所以，这是一个难以运作的媒介。做你这样的人很难，要为自由而战，要为保护人们的隐私而战。但是，你能否说些什么来向人们保证，你不会牺牲你刚刚表达的任何原则，即使法国政府不断拖垮你？

**Lex Fridman (01:10:00)** … a gentleman-like program, yeah. But that is a concern that people have is when you have so much pressure from governments that, over time, they’ll wear you down and you’ll give in. And then, of course, other places use that as propaganda to try to attack you, you get attacked by basically every nation. So, it’s a difficult medium in which to operate. It’s difficult to be you fighting for freedom, fighting to preserve people’s privacy. But is there something you could say to reassure people that you’re not going to sacrifice any of the principles that you’ve just expressed if the French government just keeps wearing you down?

**Pavel Durov (01:10:42)** 我认为法国政府正在输掉这场战斗，这场战斗是错误的。我受到的压力越大，我就变得越有韧性和反抗精神。而且我想在过去的几个月里，当有人试图利用我困在法国的处境，接近我并要求我在其他国家做一些事情，封锁某些频道，改变 Telegram 的运作方式时，我已经证明了这一点。我不仅拒绝了，我还告诉了全世界，并且我将继续告诉全世界每一次，任何政府，特别是法国政府，试图强迫我做任何事情的实例。我宁愿失去我所拥有的一切，也不愿屈服于这种压力，因为，如果你屈服于这种压力，同意一些根本错误并且也侵犯他人权利的事情，你在内心就垮掉了，在深刻的生物和精神层面上，你变成了从前自我的空壳。

**Pavel Durov (01:10:42)** I think the French government is losing this battle, this battle is wrong. The more pressure I get, the more resilient and defiant I become. And I think I have proven that in the last several months when there were attempts to use my situation being stuck here in France by approaching me and asking me to do things in other countries, blocking certain channels, changing the way Telegram works. And not only I refused, I told the world about it and I’m going to keep telling the world about every instance, any government, in this case in particular, the French government, tries to force me to do anything. And I would rather lose everything I have than yield to this pressure because, if you submit to this pressure and agree with something that is fundamentally wrong and violates rights of other people as well, you become broken inside, you become a shell of your former self on a deep biological and spiritual level.

**(01:12:10)** 所以，我不会那样做。世界上可能还有其他人会考虑那样做，我不在乎。Telegram 消失成一些人们不理解的东西，包括这些情报机构或政府，我不在乎，我会没事的。如果他们把我关进监狱 20 年——让我们明确一点，我不认为这是现实的，但让我们只是把它当作一个假设情况来考虑——我宁愿在那里绝食而死，重启整个游戏，也不愿做蠢事。

**(01:12:10)** So, I wouldn’t do that. There are probably other people in the world that would consider that, I don’t care. Telegram disappears to something people don’t understand, including in this intelligence services or governments, I don’t care, I’ll be fine. If they put me into prison for 20 years which, let’s be clear, it’s not something that I think is realistic but let’s just think about it as a hypothetical situation. I would rather starve myself to death and die there, reboot the whole game than do something stupid.

**罗马尼亚选举**

**Romanian elections**

**Lex Fridman (01:12:59)** 让我问你一个你谈论的事情的例子。讲讲 Telegram 在罗马尼亚选举中的那段经历。那么，在所有这些之中，你仍然在为保护言论自由而战。发生了什么？你不得不做出哪些决定？

**Lex Fridman (01:12:59)** Let me ask you about an example of the thing you’re talking about. Tell the saga of Telegram in the Romanian election. So, amidst all this, you are still fighting to preserve the freedom of speech. What happened and what were some of the decisions you had to make?

**Pavel Durov (01:13:16)** 所以，当我被困在法国，几个月无法离开这个国家时，有人提出让我通过一个我相当熟悉的人会见国家外国情报部门的负责人，他实际上是法国一位知名的科技企业家，人脉很广，他说："这个人想见你。" 我说："好吧，行，见就见，但我不承诺任何事。" 我参加了那次会面，在那次会面中，我被要求限制我所认为的罗马尼亚的言论自由。我不知道你是否关注了罗马尼亚选举的整个事件，他们去年举行了总统选举，结果被取消了。现在，罗马尼亚，在我进行那次会面时，正在准备新的总统选举，保守派候选人不是法国政府支持的人，所以他们问我是否愿意关闭或准备关闭 Telegram 上支持保守派候选人或抗议亲欧候选人的频道，所以他们称他们喜欢的那个人为亲欧的。

**Pavel Durov (01:13:16)** So, when I got stuck in France unable to leave the country for a few months, I was offered to meet the head of state foreign intelligence services through a person I know quite well, he’s actually a well-known tech entrepreneur in France and he’s well-connected and he said, “This guy wants to meet you.” I said, “Okay, fine, let’s do that but I’m not promising anything.” I took the meeting and, in this meeting, I was asked to restrict what I see as restriction of freedom of speech in Romania. I don’t know if you followed the whole saga with the Romanian elections, they had a presidential elections last year, the results got canceled. Now, Romania, at that point when I had this meeting, was preparing for a new presidential elections, the conservative candidate was not somebody who the French government was supportive of so they asked me whether I would be shutting down or ready to shut down channels on Telegram. Let’s support the conservative candidate or protest against the pro-European candidates so they called the guy they liked.

**(01:14:49)** 我说："听着，如果没有违反 Telegram 的规则——这些规则相当明确，你不能呼吁暴力。但如果是和平示威，如果是和平辩论，我们不能这样做，那将是政治审查。我们在世界上许多国家保护了言论自由，包括在亚洲、东欧和中东，我们不会开始在欧洲进行审查，无论谁要求我们。" 我对那个法国情报负责人说得非常清楚，我说："如果你认为，因为我被困在这里，你就可以告诉我该做什么，那你就大错特错了。我宁愿每次都反其道而行之，" 而且在某种程度上我就是这么做的。我和他就这整件事的道德性进行了一场小辩论，然后，在某个时间点，就把这次谈话的全部内容公之于众，因为我从未签署过保密协议。我从不与任何那样的人签署保密协议，我希望能够告诉世界发生了什么。

**(01:14:49)** I said, “Look, if there is no violation of the rules of Telegram which are quite clear, you can’t call to violence. But if it’s a peaceful demonstration, if it’s a peaceful debate, we can’t do this, it would be political censorship. We protected freedom of speech in many countries in the world, put it in Asia and Eastern Europe and Middle East, we’re not going to start engaging in censorship in Europe no matter who is asking us.” I was very clear to the guy who was the head of French intelligence, I said, “If you think that, because I’m stuck here, you can tell me what to do, you are very wrong. I would rather do the opposite every time,” and in a way that’s what I did. I had a small debate with him about the morality of this whole thing and then, at a certain point, just disclose the content of this entire conversation because I never signed an NDA. I don’t ever sign NDAs with any people like that, I want to be able to tell the world what’s going on.

**(01:16:12)** 这让我相当震惊，法国政府里会有人试图利用这种情况。当然，如果他们与这项调查本身的启动无关，并且利用它来达到他们的政治或地缘政治目标，我认为这是企图 personally 羞辱我个人，并 collectively 羞辱数百万 Telegram 用户。而且相当奇怪的是，同一个机构也要求我们在摩尔多瓦做一些事情。所以，甚至在那之前，我想是去年十月或九月，我于八月底在巴黎被捕，然后再次通过中间人接洽，被问到："你介意在摩尔多瓦删除一些频道吗？因为那里正在进行选举，我们担心这些选举会受到一些干扰。你能请联系摩尔多瓦政府的代表并处理一下吗？" 我们说："我们很乐意看一看，看看那里是否有违反我们规则的内容。"

**(01:16:12)** And that’s quite shocking to me that you would have people in the French government trying to get advantage of this situation. Of course, if they had nothing to do with the start of this investigation itself and use it to reach their political or geopolitical goals, I consider it an attempt to humiliate myself personally and millions of Telegram users collectively. And it’s quite strange that the same agency asked us to do certain things in Moldova as well. So, even before that, I think it was October last year or September, I was arrested in Paris in late August and then again approached through an intermediary and asked, “Would you mind taking down some channels in Moldova because there is an election going on and we’re afraid there’re going to be some interference with these elections. Could you please connect with representatives of the government of Moldova and take care of it?” We said, “We’re happy to take a look at it and see if there is content there that is in violation of our rules.”

**(01:17:50)** 他们给我们发了一份频道和机器人的列表，其中一些是……所以，那是一份很短的列表，其中一些频道和机器人确实违反了我们的规则，我们删除了它们，只有少数几个，其余的没问题。然后他们说了谢谢，又给我们发了几十个频道的列表，很多很多频道。我们查看了这些频道，我们意识到没有充分的理由来证明封禁它们是合理的，我们拒绝这样做。但有趣的是，要求我们在摩尔多瓦这样做的法国情报部门，通过联系人让我知道，在 Telegram 封禁了摩尔多瓦少数几个违反我们规则的频道之后，他们与我的法官，也就是对我启动调查的调查法官谈了话，并向法官说了关于我的好事，我发现这非常令人困惑，而且在某种程度上，令人震惊，因为这两件事毫无共同之处。

**(01:17:50)** And they sent us a list of channels and bots, some of them were … So, it was a very short list and some of these channels and bots were in violation indeed of our rules and we took them down, only a few of them, the rest were okay. Then they said thank you and sent us another list of dozens of channels, many, many channels. We looked at these channels, we realized that there is no solid foundation to justify banning them and we refused to do that. But interestingly enough, the French intelligence services that were asking us to do this in Moldova, let me know through the contact that, after Telegram banned the few channels that were in violation of our rules in Moldova, they talked to my judge, the investigative judge in this investigation that has been started against me, and told the judge could things about me which I have found very confusing and, in a way, shocking because these two matters have nothing in common.

**(01:19:27)** 为什么有人会跟一个试图查明 Telegram 在删除法国非法内容方面是否做得足够好的调查法官谈话，摩尔多瓦跟这有什么关系？那一刻我变得非常怀疑。记住，这件事发生在我们封禁了少数几个违反我们规则的频道之后，但在我们拒绝封禁一长串其他完全没问题的频道之前，那些只是人们表达政治观点，我可能不同意，但他们有权表达。不是极端观点，不是呼吁暴力的观点。那是极其令人警觉的，那一刻我告诉自己，这里可能还有比我最初想象的更多的事情。最初我以为，是的，有些人对技术运作方式感到困惑，而在摩尔多瓦这件事之后，我变得怀疑得多。所以，等到情报部门负责人见我，要求关于罗马尼亚的事情，帮助他们压制罗马尼亚的保守派声音时，我已经对接下来可能发生的事情警惕了。

**(01:19:27)** Why would anyone talk to an investigative judge that is trying to find out whether Telegram did a good enough job in removing illegal content in France, what does Moldova have to do with it? I got very suspicious at that moment. Remember, it happened after we blocked a few channels that violated our rules but before we refused to block a long list of other channels that were completely fine which is people expressing political views which I may not agree with but it’s their right to express them. Not extreme views, not views that call to violence. That was extremely alarming, that was a moment when I told myself that there may be more going on here that I initially thought. Initially I thought, yeah, some people are confused about how technology works and, after this case in Moldova, I got much more suspicious. So, by the time the head of intelligence services met me to ask about Romania to help them silencing conservative voices in Romania, I was already wary of what can be going on next.

**Lex Fridman (01:21:18)** 是的。所以，很明显，这是一个系统性的企图，向你施压，要求你审查法国政府不同意的政治声音。我们应该说，你曾为左翼团体和右翼团体的言论自由而战，这真的不重要。所以，并不是说你没有政治立场、政治意识形态，你为之奋斗，你正在创建一个平台，只要他们不呼吁暴力，就允许来自各行各业、所有意识形态的人畅所欲言，这才是重点。而在罗马尼亚选举中，碰巧是保守派的声音是法国政府想要审查的，因为目前法国政府偏左。但如果你把一切都翻转过来，政府是右翼的，你也会为反对审查左翼声音而战，而且你过去已经做过很多次了。

**Lex Fridman (01:21:18)** Yeah. So, clearly, this was a systematic attempt to pressure you to censor political voices that the French government doesn’t agree with. And we should say that you have fought for freedom of speech for left-wing groups and right-wing groups, it really doesn’t matter. So, it’s not you don’t have a political affiliation, political ideology that you fight for, you’re creating a platform that, as long as they don’t call for violence, allows people from all walks of life, from all ideologies to speak their mind, that’s the whole point. And it happens to be conservative voices in the Romania election that the French government wanted to censor because, currently, the French government leans left. But if you flip everything around and the government would be right wing, you’d be fighting against censorship of left-wing voices and you have in the past many times.

**Pavel Durov (01:22:13)** 完全正确。讽刺的是，我们收到了法国警方要求删除 Telegram 上一个法国极左抗议者频道的请求。我们拒绝这样做。我们查看了那个频道，是和平抗议者。对我们来说，我们是在捍卫偏右还是偏左人士的言论自由，这并不重要。在 COVID 期间，我们保护了组织"黑人的命也是命"活动的活动人士，也保护了另一边的反封锁抗议者。我们保护每一个人，只要他们不越界，不开始呼吁暴力或煽动破坏公共财产。集会是一项基本权利。有趣的是，那些没有在不自由国家生活过经历的人，并不总是意识到逐渐妥协你的价值观、原则、自由、权利是多么危险，因为他们不明白利害关系是什么。

**Pavel Durov (01:22:13)** Exactly. Ironically, we received a request from the French police to take down a channel of far left protesters on Telegram in France. We refused to do that. We looked at the channel, peaceful protesters. It doesn’t matter for us whether we are defending the freedom of speech of people leaning right or leaning left. During COVID, we were protecting activists that were organizing the Black Lives Matter events and the other side, the protesters against lockdowns. We protect everybody as long as they are not crossing the lines and not starting to call to violence or incite damage to public property. It’s a fundamental right to assemble. It’s interesting that people who haven’t had this experience of living in countries that don’t have freedoms don’t always realize how dangerous it is to gradually compromise your values, your principles, your freedoms, your rights because they don’t understand what’s at stake.

**权力与腐败**

**Power and corruption**

**Lex Fridman (01:23:56)** 是的，这些事情会变成一个滑坡。所以，你很多很多年，包括现在，都高度赞扬法国，你热爱法国历史，法国文化。我认为这种情况，这个历史上犯下的错误，简单地说，对法国来说只是一个巨大的公关错误。没有任何有抱负成为下一个 Pavel Durov、创造下一个 Telegram 的企业家，在看到这一切之后，还想在法国运营。这次逮捕没有任何正当理由，是法律的误用，各种压力，各种似乎出于政治动机的行为，所有那种事情，所有过度的监管和官僚主义，对于梦想创造对世界有影响和积极意义的东西的企业家来说是一场噩梦。

**Lex Fridman (01:23:56)** Yeah, these things become a slippery slope. So, you’ve, for many, many years, including currently, have spoken very highly of France, you love French history, French culture. I think this situation, this historic wrong that’s been done is, put simply, is just a gigantic PR mistake for France. There’s no entrepreneur that sees, that aspires to be the next Pavel Durov to create the next Telegram, sees this and wants to operate in France after seeing this. There is no justification for this arrest, there’s a misapplication of the law, all kinds of pressures, all kinds of behavior that seems politically motivated, all that kind of stuff, all the excessive regulation and the bureaucracy, a nightmare for entrepreneurs that dream to create something impactful and positive for the world.

**(01:24:50)** 那么，你认为法国政府、法国体系需要修复什么？然后，放大来看，因为你在欧洲也看到类似的事情，有什么可以促使企业家发展，可以扭转我们在欧洲似乎看到的、对企业家越来越不友好的趋势？什么可以被修复？应该修复什么？

**(01:24:50)** So, what do you think needs to be fixed about the French government, the French system and then, zooming out, because you see similar kinds of things in Europe, that could enable entrepreneurs, that could reverse the trend that we seem to be seeing in Europe that is becoming less and less friendly to entrepreneurs? What can be fixed? What should be fixed?

**Pavel Durov (01:25:20)** 我认为欧洲社会必须决定他们希望其不断增长的公共部门停止增长的位置，他们认为政府的合适规模应该是多大。因为今天，如果你以法国为例，这是一个拥有大量人才的美好国家，但公共支出占该国 GDP 的 58%，这 maybe 比苏联最后阶段还要多。所以，你存在这种不平衡，代表国家的人远远多于试图通过创造伟大产品和伟大公司来推动国家经济发展的人。

**Pavel Durov (01:25:20)** I think the European society must decide where they want their ever-increasing public sector to stop increasing, what they think should be the right size of government. Because today, if you take France for example which is a beautiful country with a lot of talented people, but public expenses are 58% of the country’s GDP, it’s maybe as much more than in the latest stage of the Soviet Union. So, you have this disbalance where you have many more people representing the state as opposed to people trying to bring the country’s economy forward by creating great products and great companies.

**(01:26:26)** 初创领域和我所在的领域，社交媒体领域，受到了巨大的影响。过去 10 年里，法国在这个领域有一家伟大的初创公司，是一个基于位置的社交网络，最终卖给了 Snapchat。但在它被出售之前，创始人问我他是否应该卖掉，我告诉他："永远不要卖。你正在做一件伟大的事情。你拥有大量用户，在许多国家都有有机增长，这是法国首个此类成功故事。" 但几周后他还是卖掉了。

**(01:26:26)** The start-up field and my field, social media field has been affected by it immensely. There was one great start-up in this realm in France in the last 10 years, it was this location-based social network, it was eventually sold to Snapchat. But before it was sold, the founder asked me whether he should sell, I told him, “Never sell. You have a great thing going. You have lots of users, you have organic traction in many countries and the first of this kind of success story in France.” But then he sold anyway in a couple of weeks.

**(01:27:12)** 后来我遇见了他，他现在正尝试做新的事情，我遇见他时问他，我试图理解哪里出了问题，他告诉我的一件事是，当他试图经营他的公司，与 Facebook、Instagram、Snapchat 竞争，承受来自投资者的所有压力，试图雇佣最优秀的人并说服他们去巴黎时——顺便说一句，他做得很好——但当他努力做这些的时候，他也受到了一些愚蠢调查的攻击， again，涉及数据保护问题，这些调查持续了很长时间，逐渐吸干了他的团队和公司的血液，不断的审讯、披露请求。

**(01:27:12)** And later I met him, he’s trying to do a new thing now, I met him and I asked him, I was trying to understand what went wrong and one of the things he told me about is that, while he was trying to run his company, competing with Facebook, Instagram, Snapchat, having all this pressure from investors, trying to hire the best people and persuade them to go to Paris, and he did a great job by the way, but while he was trying to do that, he got also attacked by some silly investigation, again, involving the data protection issues which lasted forever and was gradually sucking blood of his team and his company, constant interrogations, disclosure requests.

**(01:28:14)** 而这是一家年轻的公司，这显著增加了压力水平，在某个时刻，我认为压力太大了，他决定，again，干脆卖掉它。最终结果证明没有问题，据我了解，调查以没有指控结束，但是，这样的调查是有代价的，有成本的。

**(01:28:14)** And this is a young company, it significantly increases the level of stress and, at some point, I think the pressure was too much, he decided to, again, just sell it. Eventually it turned out that there was no issue, the investigation ended as far as I understand with no charges but, such investigations, they have a price, they have a cost.

**(01:28:45)** 除非社会意识到那些从未被创建、或者在非常早期就卖给美国或其他国家、导致经济增长放缓的项目、公司、初创公司的成本，否则事情不会改变。我想我们几天前刚和一个家伙谈过，他离开了法国，在迪拜创业，他不得不离开法国的原因之一是政府开始调查他的公司，并冻结了他的银行账户，这项涉及税收的调查持续了很多很多年，我相信他说是八年。

**(01:28:45)** And unless the society realizes the cost of projects, of companies, of start-ups that are never created or sold to the United States at the very early stage or other countries resulting in decreased economic growth, things won’t change. I think we just talked to a guy a few days ago who left France and started a business here in Dubai and one of the reasons he had to leave France is that the government started an investigation on his company and they frozen his bank accounts and this investigation that involved taxes lasted for many, many years, I believe he said eight years.

**(01:29:36)** 在这八年结束时，政府得出结论，没有任何问题，他很好，没事。与此同时，他的公司银行账户被冻结，他的业务死了。他之所以能够保持理智，唯一的原因是他搬到了迪拜，开了一家新公司，这家公司非常成功，现在他正用他伟大的想法和创造力丰富着我们所在的这个城市。

**(01:29:36)** And at the end of this eight years, the government reached to the conclusion that there was nothing wrong, he’s good, it’s okay. In the meantime, his corporate bank accounts were frozen, his business died. The only reason why he was able to retain sanity is because he moved to Dubai and started a new company which is incredibly successful and now he’s enriching this city which we’re in right now with his great ideas and creativity.

**Lex Fridman (01:30:17)** 顺便说一下，与他接触过，他眼里有火，那种推动创业精神的人类精神。不管那是什么，他不必这么做，他已经赚了很多钱。他可能什么都不用做，但他仍然想要创造，那火焰正是滋养伟大国家的东西。建设，建设，建设，建设新东西，扩张，所有这一切，而监管窒息了这些。

**Lex Fridman (01:30:17)** And by the way, having interacted with him, there’s a fire in his eyes, the human spirit that fuels entrepreneurship. Whatever that is, he doesn’t have to do it, he’s made a lot of money. He probably doesn’t have to do anything but he still wants to create and that fires what fuels great nations. Build, build, build, build new stuff, expand, all of that and regulation suffocates that.

**Pavel Durov (01:30:40)** 你必须珍惜这些人。

**Pavel Durov (01:30:40)** You have to cherish this people.

**Lex Fridman (01:30:41)** 是的。

**Lex Fridman (01:30:41)** Yeah.

**Pavel Durov (01:30:42)** 但我想法国公众或部分法国公众被误导了，我不知道从什么时候开始，也许从法国大革命时代起，就认为企业家 somehow 是他们的敌人。他们是邪恶的富人，是所有问题的根源，仿佛只要你能让富人把他们非法获得的财富与其余人口分享，那么所有问题都会神奇地解决。然而在现实中，很多这样眼里有火、创办这类公司的人，正在牺牲他们的生活、他们的生计。

**Pavel Durov (01:30:42)** But I guess the French public or some part of the French public was misled and I don’t know when, perhaps since the time of the French Revolution, to believe that entrepreneurs are somehow their enemies. They’re the evil rich people that are the cause of all problems as if only you could make the rich share their ill-gotten wealth with the rest of the population then every problem will be magically solved. In reality though, a lot of these people that are starting such companies with fire in their eyes are sacrificing their lives, their livelihood.

**(01:31:27)** 他们每天工作 20 小时，承受着巨大的压力，以实现愿景，为他们周围的社会带来价值和好处。他们创造就业，创造伟大的服务，创造伟大的商品，他们让你的国家增长，让你的人民感到自豪，你必须珍惜他们。但体制对他们做了什么？它把他们挤走了，因为也许税务当局里有人决定推进自己的职业生涯，也许太野心勃勃而不够聪明，结果，一家公司被摧毁了。

**(01:31:27)** They’re working 20 hours a day, they’re experiencing immense stress in order to fulfill the vision and bring value and good to the society around them. They create jobs, they create great services, they create great goods, they make your country grow, they make your people proud, you have to cherish them. But what does the system do to them? It squeezes them out because perhaps there was somebody in the tax authority that decided to advance their career and perhaps was too ambitious and not too smart so, as a result, a company was destroyed.

**(01:32:17)** 而现在，顺便说一下，我们谈论的同一个企业家，被邀请回到法国。他们向他提供了非常好的条件，他说他们将在香榭丽舍大街开设这个新场所，我们会给你最好的位置，我们会资助一部分，还有税收减免，他说："绝不。忘了这个吧，不可能。我不会回法国。" 他对这段经历有心理创伤，他是法国人，他在那里出生，他持有法国护照。所以，除非这样的事情发生变化，否则法国和欧洲其他地区将继续与经济停滞、预算赤字、失业以及所有其他相关的社会和经济指标作斗争。

**(01:32:17)** And now the same entrepreneur, by the way, who we talked to is invited to come back to France. He’s been offered really good terms, he said they’re going to open this new venue on Champs-Élysées, we’re going to give you the best location, we’re going to fund part of it, tax breaks and he said, “Never. Just forget about this, it’s impossible. I’m not coming back to France.” He’s traumatized by the experience and he’s French, he was born there, he has a French passport. So, unless things like this change, France and the rest of Europe will keep struggling with economic growth, with budget deficits, with unemployment and all the other relevant social and economic metrics.

**Lex Fridman (01:33:06)** 是的，这令人心碎。这些国家中的许多，我欣赏其历史和文化的价值，我希望欧洲和法国繁荣，但这不是繁荣所需的要素。快速暂停一下，我需要去下洗手间。

**Lex Fridman (01:33:06)** Yeah, it’s heartbreaking. Many of these nations, I appreciate the historic and the culture of value and I hope Europe and France flourish but this is not the components that are required for flourishing. Quick pause, I need a bathroom break.