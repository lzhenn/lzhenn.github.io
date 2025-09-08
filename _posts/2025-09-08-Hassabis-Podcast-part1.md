---
layout: post
title:  "进化、低维流形、开放世界、生命模拟：Deepmind创始人哈萨比斯2025年7月播客实录 | 中英文完整版精译（上）"
categories: science
tags: thinking
author: LZN
---

__书童按：本篇是德米斯·哈萨比斯（Demis Hassabis）爵士于2025年7月接受Lex Fridman的播客采访实录，他完全可被视为全世界最懂人工智能的寥寥数人其中之一。其采访中涉及进化系统、低维流形可学习性、信息比物质和能量更基本、开放世界游戏等观点，精彩绝伦，令人击节称赞。初稿采用Deepseek翻译，经书童校对及简单批注，中文全部译文多达4万余字，将分上、中、下三个部分发出，以飨诸君。__

**Lex Fridman  (00:00:00)**： 对我们人类来说，要对高度非线性的动力系统做出任何清晰的预测都是困难的。但是，再次回到你的观点，我们可能会非常惊讶于经典学习系统、甚至流体（等复杂系统）所能做到的事情。

**Lex Fridman (00:00:00)** It’s hard for us humans to make any kind of clean predictions about highly nonlinear dynamical systems. But again, to your point, we might be very surprised what classical learning systems might be able to do about even fluid.

**Demis Hassabis  (00:00:12)**： 是的，完全正确。我的意思是，流体动力学、纳维-斯托克斯方程，这些传统上被认为是经典系统上非常非常难以处理的棘手问题。它们需要巨大的计算量，比如天气预报系统。这类事情都涉及流体动力学计算。

**Demis Hassabis (00:00:12)** Yes, exactly. I mean, fluid dynamics, Navier-Stokes equations, these are traditionally thought of as very, very difficult intractable problems to do on classical systems. They take enormous amounts of compute, weather prediction systems. These kinds of things all involve fluid dynamics calculations.

(00:00:27) 但是，再次说明，如果你看看像 Veo（我们的视频生成模型）这样的东西，它可以相当好地模拟液体，好得令人惊讶。还有材料、镜面光照，我喜欢那些人们生成的视频，里面有清澈的液体流经液压机然后被挤压出来。我早期在游戏行业时写过物理引擎和图形引擎，我知道要构建能够做到这一点的程序是多么的艰辛。然而不知何故，这些系统仅仅通过观看 YouTube 视频就在进行逆向工程。因此，推测起来，正在发生的是它正在提取关于这些材料行为方式的一些底层结构。所以，也许存在某种低维流形可以被学习，如果我们真正完全理解其内部运作原理的话。这对于现实世界的大部分事物来说可能都是成立的。

(00:00:27) But again, if you look at something like Veo, our video generation model, it can model liquids quite well, surprisingly well. And materials, specular lighting, I love the ones where there’s people who generate videos where there’s clear liquids going through hydraulic presses and then it’s being squeezed out. I used to write physics engines and graphics engines in my early days in gaming, and I know it’s just so painstakingly hard to build programs that can do that. And yet somehow these systems are reverse engineering from just watching YouTube videos. So presumably what’s happening is it’s extracting some underlying structure around how these materials behave. So perhaps there is some kind of lower dimensional manifold that can be learned if we actually fully understood what’s going on under the hood. That’s maybe true of most of reality.

引子

**Lex Fridman  (00:01:22)** ：以下是与 Demis Hassabis 的对话，这是他第二次做客播客。他是 Google DeepMind 的领导者，并且现在是一位诺贝尔奖获得者。Demis 是当今世界上最具才华和魅力的人物之一，致力于理解和构建智能，并探索我们宇宙的重大奥秘。这对我来说真是一种荣誉和乐趣。

(00:01:51) 这里是 Lex Fridman 播客。如需支持，请查看描述中的赞助商信息，并考虑订阅本频道。现在，亲爱的朋友们，有请 Demis Hassabis。

**Lex Fridman (00:01:22)** The following is a conversation with Demis Hassabis, his second time on the podcast. He is the leader of Google DeepMind and is now a Nobel Prize winner. Demis is one of the most brilliant and fascinating minds in the world today working on understanding and building intelligence and exploring the big mysteries of our universe. This was truly an honor and a pleasure for me.

(00:01:51) This is the Lex Fridman Podcast. To support it, please check out our sponsors in the description and consider subscribing to this channel. And now, dear friends, here’s Demis Hassabis.

自然界中可学习的模式

**Lex Fridman  (00:02:06)**： 在你的诺贝尔奖讲座中，你提出了一个我认为超级有趣的猜想：“任何能在自然界中产生或发现的模式，都能被经典学习算法有效地发现和建模。” 哪些类型的模式或系统可能包含在其中？生物学、化学、物理学，也许还有宇宙学、神经科学？我们在谈论什么？

**Lex Fridman (00:02:06)** In your Nobel Prize lecture, you propose what I think is a super interesting conjecture that “any pattern that can be generated or found in nature can be efficiently discovered and modeled by a classical learning algorithm.” What kind of patterns or systems might be included in that? Biology, chemistry, physics, maybe cosmology, neuroscience? What are we talking about?

**Demis Hassabis  (00:02:32)**： 当然。嗯，你看，我觉得这有点像诺贝尔奖讲座的传统，你应该有点挑衅性，我想遵循那个传统。我在那里谈论的是，如果你退后一步，看看我们所做的所有工作，尤其是 Alpha X 项目，我想到的是 AlphaGo，当然还有 AlphaFold，它们真正做的是，我们正在构建那些组合性极高、高维空间的模型，如果你试图暴力破解解决方案，找到最佳围棋落子点，或者找到蛋白质的确切形状，如果你枚举所有可能性，宇宙存在的时间都不够用。

**Demis Hassabis (00:02:32)** Sure. Well, look, I felt that it’s sort of a tradition, I think, of Nobel Prize lectures that you’re supposed to be a little bit provocative and I wanted to follow that tradition. What I was talking about there is if you take a step back and you look at all the work that we’ve done, especially with the Alpha X projects, so I’m thinking AlphaGo, of course, AlphaFold, what they really are is we are building models of very combinatorially, high dimensional spaces that if you try to brute force a solution, find the best move and go, or find the exact shape of a protein, and if you enumerated all the possibilities, there wouldn’t be enough time in the time of the universe.

(00:03:08) 所以你必须做得更聪明。我们在围棋AI和模拟蛋白质折叠中，所做的是构建那些环境的模型，并以一种聪明的方式引导搜索，这使得问题变得可处理。所以，如果你考虑蛋白质折叠，这显然是一个自然系统，为什么这应该是可能的？物理学是如何做到这一点的？蛋白质在我们体内毫秒内折叠，所以不知何故，物理环境塑造了整个过程，而我们现在也在计算上解决了它。我认为这之所以可能，是因为在自然界中，自然系统具有结构，因为它们经历了塑造它们的进化过程。如果这是真的，那么你也许可以学习到那种结构是什么。

(00:03:08) So you have to do something much smarter. And what we did in both cases was build models of those environments and that guided the search in a smart way and that makes it tractable. So if you think about protein folding, which is obviously a natural system, why should that be possible? How does physics do that? Proteins fold in milliseconds in our bodies, so somehow physics solves this problem that we’ve now also solved computationally. And I think the reason that’s possible is that in nature, natural systems have structure because they were subject to evolutionary processes that shape them. And if that’s true, then you can maybe learn what that structure is.

**Lex Fridman  (00:03:49)** ：我认为这个视角真的很有趣。你已经暗示过这一点，这几乎可以粗略地表述为：任何能够进化出来的东西都可以被有效地建模。你觉得这有道理吗？

**Lex Fridman (00:03:49)** This perspective I think is a really interesting one. You’ve hinted it at it, which is almost like crudely stated, anything that can be evolved can be efficiently modeled. Think there’s some truth to that?

**Demis Hassabis  (00:04:03)**： 是的。我有时称之为“最稳定者生存”之类的东西，因为当然有生命的进化，但如果你考虑地质时间，那么山的形状，那是经过数千年风化过程塑造的，但你甚至可以把它推到宇宙学尺度，行星的轨道、小行星的形状。这些都经历了某种过程的作用许多许多次而留存下来。

**Demis Hassabis (00:04:03)** Yeah. I sometimes call it survival of the stablest or something like that because of course there’s evolution for life, living things, but there’s also, if you think about geological times, so the shape of mountains, that’s been shaped by weathering processes over thousands of years, but then you can even take it cosmological, the orbits of planets, the shapes of asteroids. These have all been survived kind of processes that have acted on them many, many times.

(00:04:31) 如果那是真的，那么应该存在某种你可以反向学习的模式，实际上是一种流形（manifold），它帮助你搜索到正确的解决方案，找到正确的形状，并允许你以有效的方式预测关于它的事情，因为它不是一个随机的模式。所以对于人造事物或抽象事物，比如分解大数因子，可能就不行，因为除非数字空间中存在模式（也许存在），但如果不存在并且是均匀的，那么就没有可学习的模式，没有可学习的模型来帮助你搜索。所以你必须进行暴力计算。因此，在这种情况下，你可能需要量子计算机之类的东西。但我们感兴趣的大多数自然界事物并非如此。它们具有结构，这些结构是出于某种原因进化而来并随着时间的推移而存续的。如果这是真的，我认为神经网络有可能学习到这些结构。

(00:04:31) If that’s true, then there should be some sort of pattern that you can kind of reverse learn and a kind of manifold really that helps you search to the right solution, to the right shape and actually allow you to predict things about it in an efficient way because it’s not a random pattern. So it may not be possible for man-made things or abstract things like factorizing large numbers because unless there’s patterns in the number space, which there might be, but if there’s not and it’s uniform, then there’s no pattern to learn, there’s no model to learn that will help you search. So you have to do brute force. So in that case you maybe need a quantum computer, something like this. But in most things in nature that we’re interested in are not like that. They have structure that evolved for a reason and survived over time. And if that’s true, I think that’s potentially learnable by a neural network.

**Lex Fridman  (00:05:21)**： 这就像大自然在进行一个搜索过程，而非常吸引人的是，在这个搜索过程中，它正在创造可以被有效建模的系统。

**Demis Hassabis  (00:05:31)**：没错。是的。

**Lex Fridman  (00:05:32)**： 太有趣了。

**Demis Hassabis  (00:05:33)**： 所以它们可以被有效地重新发现或恢复，因为大自然不是随机的。我们周围看到的一切，包括更稳定的元素，所有这些东西，它们都受到某种选择过程的压力。

**Lex Fridman (00:05:21)** It’s like nature is doing a search process and it’s so fascinating that in that search process, it’s creating systems that could be efficiently modeled.

**Demis Hassabis (00:05:31)** That’s right. Yeah.

**Lex Fridman (00:05:32)** So interesting.

**Demis Hassabis (00:05:33)** So they can be efficiently rediscovered or recovered because nature’s not random. Everything that we see around us, including the elements that are more stable, all of those things, they’re subject to some kind of selection process pressure.

计算与 P/NP问题

**Lex Fridman  (00:05:47)** ：因为你也是理论计算机科学和复杂性的粉丝，你是否认为我们可以提出一个复杂性类，就像复杂性动物园（complexity zoo）那样的类，也许它是可学习系统的集合，可学习的自然系统的集合，LNS。这是一个 Demis Hassabis 的新系统类别，实际上可以被经典系统以这种方式学习，即可以被有效建模的自然系统。

**Lex Fridman (00:05:47)** Do you think because you’re also a fan of theoretical computer science and complexity, do you think we can come up with a complexity class, like a complexity zoo type of class where maybe it’s the set of learnable systems, the set of learnable natural systems, LNS. This is a Demis Hassabis new class of systems that could be actually learnable by classical systems in this kind of way, natural systems that can be modeled efficiently.

**Demis Hassabis  (00:06:17)** ：是的，我的意思是我一直对 P 等于 NP 的问题以及什么是经典系统（即非量子系统，实际上是图灵机）可以建模的感到着迷。这实际上正是我和几位同事在有限的空闲时间里正在研究的问题，是否应该有一个新的类别或问题，可以通过这种类型的神经网络过程解决，并映射到这些自然系统上，即存在物理学所允许的实际结构。所以我认为这可能是思考这个问题的一个非常有趣的新方式。这与我整体上思考物理学的方式相吻合，即我认为信息是首要的，信息是宇宙中最基本的单位，比能量和物质更基本。我认为它们都可以相互转化，但我把宇宙看作是一种信息系统。

**Demis Hassabis (00:06:17)** Yeah, I mean I’ve always been fascinated by the P equals NP question and what is model-able by classical systems, i.e. non-quantum systems, Turing machines in effect. And that’s exactly what I’m working on actually in my few moments of spare time with a few colleagues about should there be maybe a new class or problem that is solvable by this type of neural network process and kind of mapped onto these natural systems, so the things that exist in physics and have structure. So I think that could be a very interesting new way of thinking about it. And it sort of fits with the way I think about physics in general, which is that I think information is primary, information is the most sort of fundamental unit of the universe, more fundamental than energy and matter. I think they can all be converted into each other, but I think of the universe as a kind of informational system.

**Lex Fridman  (00:07:07)** ：所以当你把宇宙看作一个信息系统时，那么 P 等于 NP 的问题就是一个物理学问题。

**Demis Hassabis  (00:07:14)** 没错。

**Lex Fridman  (00:07:15)** 并且是一个可以帮助我们实际解决这整个事情的问题。

**Demis Hassabis  (00:07:20)**： 是的，我认为如果你把物理学看作是信息化的，那么这实际上是最基本的问题之一，我认为这个问题的答案将会非常有启发性。

**Lex Fridman (00:07:07)** So when you think of the universe as an informational system, then the P equals NP question is a physics question.

**Demis Hassabis (00:07:14)** That’s right.

**Lex Fridman (00:07:15)** And is a question that can help us actually solve the entirety of this whole thing going on.

**Demis Hassabis (00:07:20)** Yeah, I think it’s one of the most fundamental questions actually if you think of physics as informational and the answer to that, I think it’s going to be very enlightening.

**Lex Fridman  (00:07:29)**： 更具体到 P 和 NP 问题，再次说明，我们所说的一些东西现在听起来有点疯狂，就像 Christian Anfinsen 的诺贝尔奖演讲，他说的有争议的事情听起来很疯狂，然后你和 John Jumper 因此获得了诺贝尔奖，解决了这个问题。所以让我坚持讨论 P 等于 NP。你认为在我们谈论的这件事中，是否有可能表明，如果你能事先进行多项式时间或常数时间计算并构建这个巨大的模型，那么你就能以理论计算机科学的方式解决一些极其困难的问题？

**Lex Fridman (00:07:29)** More specific to the P and MP question, again, some of the stuff we’re saying is kind of crazy right now just like the Christian Anfinsen Nobel Prize speech, controversial thing that he said sounded crazy and then you went and got a Nobel Prize for this with John Jumper, solved the problem. So let me just stick to the P equals NP. Do you think there’s something in this thing we’re talking about that could be shown if you can do something like a polynomial time or constant time compute ahead of time and construct this gigantic model, then you can solve some of these extremely difficult problems in a theoretical computer science kind of way?

**Demis Hassabis  (00:08:12)** ：是的，我认为实际上有大量的问题可以用这种方式来表述，就像我们做 AlphaGo 和 AlphaFold 的方式一样，即你建模系统的动力学、该系统的特性、你试图理解的环境，然后这使得对解决方案的搜索或对下一步的预测变得高效。基本上是多项式时间，所以对于经典系统（神经网络就是）是可处理的。它运行在普通计算机上，对吧？实际上是经典计算机，图灵机。我认为最有趣的问题之一是，这种范式能走多远？

**Demis Hassabis (00:08:12)** Yeah, I think that there are actually a huge class of problems that could be couched in this way, the way we did AlphaGo and the way we did AlphaFold, where you model what the dynamics of the system is, the properties of that system, the environment that you are trying to understand, and then that makes the search for the solution or the prediction of the next step efficient. Basically polynomial times, so tractable by a classical system, which a neural network is. It runs on normal computers, right? Classical computers, Turing machines in effect. And I think it’s one of the most interesting questions there is, is how far can that paradigm go?

(00:08:53) 我认为我们已经证明，以及整个 AI 社区已经证明，经典系统、图灵机可以比我们之前认为的走得更远。它们可以做一些事情，比如模拟蛋白质的结构，下围棋达到超过世界冠军的水平。许多人在 10、20 年前可能会认为这还需要几十年，或者可能需要某种量子机器、量子系统才能做到像蛋白质折叠这样的事情。所以我认为我们甚至还没有触及所谓经典系统所能做的事情的表面。

(00:08:53) I think we’ve proven, and the AI community in general that classical systems, Turing machines can go a lot further than we previously thought. They can do things like model the structures of proteins and play go to better than world champion level. And a lot of people would’ve thought maybe 10, 20 years ago that was decades away, or maybe you would need some sort of quantum machines to quantum systems to be able to do things like protein folding. And so I think we haven’t really even sort of scratched the surface yet of what classical systems so-called could do.

(00:09:28) 当然，AGI 建立在一个神经网络系统之上，而神经网络系统又建立在经典计算机之上，这将是这一点的终极体现。我认为这种系统的极限，它的边界，它能做什么，是一个非常有趣的问题，并且直接关系到 P 等于 NP 的问题。

(00:09:28) And of course, AGI being built on a neural network system on top of a neural network system on top of a classical computer would be the ultimate expression of that. And I think the limit, what the bounds of that kind of system, what it can do, it’s a very interesting question and directly speaks to the P equals NP question.

**Lex Fridman  (00:09:47)** ：你认为，再次假设，什么可能超出这个极限？也许是涌现现象？如果你看看元胞自动机，你有极其简单的系统，然后出现了一些复杂性。也许那会超出极限，或者你甚至猜测那也可能适合被经典机器有效建模？

**Lex Fridman (00:09:47)** ：What do you think, again, hypothetical, might be outside of this? Maybe emergent phenomena? If you look at cellular automata, you have extremely simple systems and then some complexity emerges. Maybe that would be outside or even would you guess even that might be amenable to efficient modeling by a classical machine?

**Demis Hassabis  (00:10:09)** ：是的，我认为那些系统将正好处于边界上。所以我认为大多数涌现系统，元胞自动机，诸如此类的东西，都可以被经典系统建模。你只需要对它进行前向模拟，可能就足够高效了。当然，还有像混沌系统这样的问题，初始条件真的很重要，然后你会得到一些不相关的最终状态。那些可能很难建模。所以我认为这些是悬而未决的问题，但我认为当你退一步看我们利用这些系统所做的事情以及我们解决的问题，然后你看看像 Veo 3 这样的东西在视频生成方面渲染物理和光照等等，这些都是物理学中真正核心的基本东西，这是相当有趣的。我认为这告诉我们一些关于宇宙结构方式的基本原理，在我看来。所以在某种程度上，这就是我想构建 AGI 的原因，帮助我作为科学家回答像 P 等于 NP 这样的问题。

**Demis Hassabis (00:10:09)** Yeah, I think those systems would be right on the boundary. So I think most emergent systems, cellular automata, things like that could be model-able by a classical system. You just sort of do a forward simulation of it and it’d probably be efficient enough. Of course there’s the question of things like chaotic systems where the initial conditions really matter and then you get to some uncorrelated end state. Now those could be difficult to model. So I think these are kind of the open questions, but I think when you step back and look at what we’ve done with the systems and the problems that we’ve solved, and then you look at things like Veo 3 on video generation sort of rendering physics and lighting and things like that, really core fundamental things in physics, it’s pretty interesting. I think it’s telling us something quite fundamental about how the universe is structured in my opinion. So in a way that’s what I want to build AGI for is to help us as scientists answer these questions like P equals NP.

**Lex Fridman  (00:11:09)**： 是的，我认为我们可能会不断惊讶于经典计算机可以建模的东西。我的意思是 AlphaFold 3 在相互作用方面令人惊讶，你竟然能在那个方向上取得进展。AlphaGenome 也令人惊讶，你可以将遗传密码映射到功能上。有点像玩弄涌现现象，你认为有那么多组合可能性，然后你瞧，你可以找到可以有效建模的核心。

**Lex Fridman (00:11:09)** Yeah, I think we might be continuously surprised about what is model-able by classical computers. I mean AlphaFold 3 on the interaction side is surprising that you can make any kind of progress on that direction. AlphaGenome is surprising that you can map the genetic code to the function. Kind of playing with the emergent kind of phenomena, you think there’s so many combinatorial options and then here you go, you can find the kernel that is efficiently model-able.

**Demis Hassabis  (00:11:36)**： 是的，因为存在某种结构，在能量景观或无论什么东西中存在某种你可以遵循的路径，某种你可以遵循的梯度。当然，神经网络非常擅长遵循梯度。所以，如果存在一个可以遵循的梯度，并且你能正确指定目标函数，你就不必处理所有的复杂性，我认为这是我们几十年来可能天真地思考这些问题的方式。如果你只是枚举所有的可能性，它看起来完全无法处理，并且有很多很多类似的问题。

**Demis Hassabis (00:11:36)** Yes, because there’s some structure, there’s some landscape in the energy landscape or whatever it is that you can follow, some gradient you can follow. And of course what neural networks are very good at is following gradients. And so if there’s one to follow and you can specify the objective function correctly, you don’t have to deal with all that complexity, which I think is how we maybe have naively thought about it for decades, those problems. If you just enumerate all the possibilities, it looks totally intractable and there’s many, many problems like that.

(00:12:06) 然后你想，“嗯，这就像有 10 的 300 次方种可能的蛋白质结构，10 的 170 次方种可能的围棋局面。所有这些都远远超过宇宙中的原子数量，那么怎么可能找到正确的解决方案或预测下一步呢？”但事实证明这是可能的。当然，现实中的自然界确实做到了。蛋白质确实会折叠。所以这给了你信心，必须存在某种方式，如果我们理解了物理学在某种意义上是如何做到这一点的，并且我们可以模仿那个过程，即建模那个过程，那么在我们的经典系统上应该是可能的，这基本上就是这个猜想的内容。

(00:12:06) And then you think, “Well, it’s like 10 to 300 possible protein structures, 10 to the 170 possible go positions. All of these are way more than atoms in the universe, so how could one possibly find the right solution or predict the next step?” But it turns out that it is possible. And of course reality in nature does do it. Proteins do fold. So that gives you confidence that there must be, if we understood how physics was doing that in a sense and we could mimic that process, i.e. model that process, it should be possible on our classical systems is basically what the conjecture is about.

**Lex Fridman  (00:12:44)** ：当然还有非线性动力系统，高度非线性的动力系统，一切涉及流体的东西。我最近和陶哲轩（Terence Tao）进行了一次对话，他在数学上处理系统的一个非常困难的方面，这些系统内部有一些奇点会破坏数学，对我们人类来说，对高度非线性的动力系统做出任何清晰的预测都是困难的。但是，再次回到你的观点，我们可能会非常惊讶于经典学习系统甚至对于流体所能做到的事情。

**Lex Fridman (00:12:44)** And of course there’s nonlinear dynamical systems, highly nonlinear dynamical systems, everything involving fluid. I recently had a conversation with Terence Tao who mathematically contends with a very difficult aspect of systems that have some singularities in them that break the mathematics, and it’s just hard for us humans to make any kind of clean predictions about highly nonlinear dynamical systems. But again, to your point, we might be very surprised what classical learning systems might be able to do about even fluid.

**Demis Hassabis  (00:13:16)**： 是的，完全正确。我的意思是，流体动力学、纳维-斯托克斯方程，这些传统上被认为是在经典系统上非常非常困难、难以处理的问题。它们需要巨大的计算量，比如天气预报系统。这类事情都涉及流体动力学计算。但是，再次说明，如果你看看像 Veo 这样的东西，我们的视频生成模型，它可以相当好地模拟液体，好得令人惊讶。还有材料、镜面光照，我喜欢那些人们生成的视频，里面有清澈的液体流经液压机然后被挤压出来。我早期在游戏行业时写过物理引擎和图形引擎，我知道要构建能够做到这一点的程序是多么的艰辛。然而不知何故，这些系统仅仅通过观看 YouTube 视频就在进行逆向工程。因此，推测起来，正在发生的是它正在提取关于这些材料行为方式的一些底层结构。所以，也许存在某种低维流形可以被学习，如果我们真正完全理解其内部运作原理的话。这对于现实世界的大部分事物来说可能都是成立的。

**Demis Hassabis (00:13:16)** Yes, exactly. I mean fluid dynamics, Navier-Stokes equations, these are traditionally thought of as very, very difficult, intractable kind of problems to do on classical systems. They take enormous amounts of compute, weather prediction systems. These kind of things all involve fluid dynamics calculations. But again, if you look at something like Veo, our video generation model, it can model liquids quite well, surprisingly well. And materials, specular lighting, I love the ones where there’s people who generate videos where there’s clear liquids going through hydraulic presses and then it’s being squeezed out. I used to write physics engines and graphics engines in my early days in gaming, and I know it’s just so painstakingly hard to build programs that can do that. And yet somehow these systems are reverse engineering from just watching YouTube videos. So presumably what’s happening is it’s extracting some underlying structure around how these materials behave. So perhaps there is some kind of lower dimensional manifold that can be learned if we actually fully understood what’s going on under the hood. That’s maybe true of most of reality.

Veo 3 与理解现实

**Lex Fridman  (00:14:26)**： 是的，我一直被 Veo 3 的这个方面持续打动。我认为很多人强调不同的方面，包括喜剧性的、刻薄的等等之类的东西。然后是捕捉人类的超真实能力，以一种非常棒且接近现实的方式，感觉上很逼真，然后将其与原生音频结合起来。所有这些都是关于 Veo 3 的非凡之处，但正是你提到的这一点，即物理学。

**Lex Fridman (00:14:26)** Yeah, I’ve been continuously precisely by this aspect of Veo 3. I think a lot of people highlight different aspects including the comedic and the mean and all that kind of stuff. And then the ultra realistic ability to capture humans in a really nice way that’s compelling and feels close to reality, and then combine that with native audio. All of those are marvelous things about Veo 3, but exactly the thing you’re mentioning, which is the physics.

**Demis Hassabis  (00:14:52)** 是的。

**Lex Fridman  (00:14:53)**: 它并不完美，但已经非常非常好了。然后真正有趣的科学问题是，它为了能够做到这一点，对我们的世界理解了什么？因为如果持怀疑态度，认为扩散模型什么都不理解，但我认为你不可能在不理解的情况下生成那种视频。然后我们自己对“理解”意味着什么的哲学概念就被摆到了台面上。你认为 Veo 3 在多大程度上理解了我们的世界？

**Demis Hassabis (00:14:52)** Yeah.

**Lex Fridman (00:14:53)** It’s not perfect, but it’s pretty damn good. And then the really interesting scientific question is what is it understanding about our world in order to be able to do that? Because if the cynical, take with diffusion models, there’s no way to understands anything. But I don’t think you can generate that kind of video without understanding. And then our own philosophical notion of what it means to understand then is brought to the surface. To what degree do you think Veo 3 understands our world?

**Demis Hassabis  (00:15:25)** :我认为，就其能够以连贯的方式预测下一帧而言，这就是一种理解的形式，不是拟人化的版本，不是对正在发生的事情有某种深刻的哲学理解，我不认为这些系统有那种理解，但它们肯定已经足够地模拟了动力学，这么说吧，以至于它们可以相当准确地生成任何东西，八秒钟的一致视频，至少在乍一看之下，很难区分出问题所在。

**Demis Hassabis (00:15:25)** I think to the extent that it can predict the next frames in a coherent way, that is a form of understanding, not in the anthropomorphic version of, it’s not some kind of deep philosophical understanding of what’s going on, I don’t think these systems have that, but they certainly have modeled enough of the dynamics, put it that way, that they can pretty accurately generate whatever it is, eight seconds of consistent video that by eye, at least at a glance, is quite hard to distinguish what the issues are.

(00:15:57) 想象一下在两三年后，那正是我在思考的事情，考虑到我们从一两年前的早期版本发展而来，那将会看起来多么不可思议。所以进展的速度是惊人的。我想我和你一样，很多人都喜欢所有的单口喜剧演员，那确实很好地捕捉了很多人类动态和肢体语言，但实际上最让我印象深刻和着迷的是物理行为、光照、材料和液体。它能做到这一点真是太神奇了。我认为这表明它至少有一些直观物理的概念，事物应该如何凭直觉运作，也许就像人类小孩理解物理学的方式，对吧，而不是像博士生那样真正能够解开所有方程。它更像是一种直观的物理理解。

(00:15:57) And imagine that in two or three more years’ time, that’s the thing I’m thinking about and how incredible that will look given where we’ve come from the early versions of that one or two years ago. And so the rate of progress is incredible. And I think I’m like you is like a lot of people love all of the stand-up comedians and that actually captures a lot of human dynamics very well and body language, but actually the thing I’m most impressed with and fascinated by is the physics behavior, the lighting and materials and liquids. And it’s pretty amazing that it can do that. And I think that shows that it has some notion of at least intuitive physics, how things are supposed to work intuitively, maybe the way that a human child would understand physics, right, as opposed to a PhD student really being able to unpack all the equations. It’s more of an intuitive physics understanding.

**Lex Fridman  (00:16:53)** ：嗯，那种直观的物理理解，那是基础层，是人们有时称之为常识的东西。它确实理解了某些东西。我认为这真的让很多人感到惊讶。它让我震惊，我原本认为不可能在不理解的情况下生成那种水平的真实感。有一种观念认为，只有通过拥有具身 AI 系统，一个与那个世界互动的机器人，才能理解物理世界。那是构建对那个世界理解的唯一方式。但 Veo 3 感觉像是在直接挑战这一点。

**Lex Fridman (00:16:53)** Well, that intuitive physics understanding, that’s the base layer, that’s the thing people sometimes call a common-sense. It really understands something. I think that really surprised a lot of people. It blows my mind that I just didn’t think it would be possible to generate that level of realism without understanding. There’s this notion that you can only understand the physical world by having an embodied AI system, a robot that interacts with that world. That’s the only way to construct an understanding of that world. But Veo 3 is directly challenging that it feels like.

**Demis Hassabis  (00:17:27)**： 是的，这非常有趣，即使你在五年前或十年前问我，尽管我沉浸在所有这一切中，我可能会说，“嗯，是的，你可能需要理解直观物理学。如果我把这个玻璃杯推下桌子，它可能会摔碎，液体会洒出来。所以我们知道所有这些东西。”但我曾经认为，并且神经科学中有很多理论，这被称为感知中的行动，你需要在世界中行动才能真正深刻地感知它。有很多理论认为你需要具身智能或机器人技术之类的东西，或者至少是模拟行动，这样你才能理解像直观物理学这样的东西。

**Demis Hassabis (00:17:27)** Yes, and it’s very interesting, even if you were to ask me five, 10 years ago, I would’ve said, even though I was immersed in all of this, I would’ve said, “Well, yeah, you probably need to understand intuitive physics. If I push this off the table, this glass, it will maybe shatter and the liquid will spill out. So we know all of these things.” But I thought that, and there’s a lot of theories in neuroscience, it’s called action in perception where you need to act in the world to really, truly perceive it in a deep way. And there was a lot of theories about you’d need embodied intelligence or robotics or something, or maybe at least simulated action so that you would understand things like intuitive physics.

(00:18:06) 但似乎你可以通过被动观察来理解它，这让我相当惊讶。再次说明，我认为这暗示了关于现实本质的某些底层东西，在我看来，超越了它生成的酷炫视频。当然，下一阶段也许是甚至让这些视频具有交互性，这样人们实际上可以步入其中并在其中移动，这将真正令人震撼，尤其是考虑到我的游戏背景。所以你可以想象。然后我认为我们开始接近我所说的世界模型，一个关于世界如何运作的模型，世界的机制，世界的物理学，以及那个世界中的事物。当然，这就是你为一个真正的 AGI 系统所需要的东西。

(00:18:06) But it seems like you can understand it through passive observation, which is pretty surprising to me. And again, I think hints at something underlying about the nature of reality in my opinion, beyond just the cool videos that it generates. And of course there’s next stages is maybe even making those videos interactive so one can actually step into them and move around them, which would be really mind-blowing, especially given my games background. So you can imagine. And then I think we’re starting to get towards what I would call a world model, a model of how the world works, the mechanics of the world, the physics of the world, and the things in that world. And of course that’s what you would need for a true AGI system.

电子游戏

**Lex Fridman  (00:18:50)** :我必须和你谈谈电子游戏。所以你有点在开玩笑。我觉得你在 Twitter（X）上越来越有趣了，看到这个很好。所以一个叫 Jimmy Apples 的人发推说，“让我已经可以玩我的 Veo 3 视频游戏了。谷歌做得太棒了。什么时候能有可玩的世界模型？”然后你转推了那条推文，说“现在，那会不会很了不起？”那么用 AI 构建游戏世界有多难？也许你能展望一下电子游戏未来 5 到 10 年的功能？你认为那会是什么样子？

**Lex Fridman (00:18:50)** I have to talk to you about video games. So you are being a bit trolley. I think you’re having more and more fun on Twitter, on X, which is great to see. So a guy named Jimmy Apples tweeted, “Let me play a video game of my Veo 3 videos already. Google cooked so good. Playable world models wen?” And then you co-tweeted that with, “Now, wouldn’t that be something?” So how hard is it to build game worlds with AI? Maybe can you look out into the future feature of video games five, 10 years out? What do you think that looks like?

**Demis Hassabis  (00:19:27)** :嗯，游戏确实是我的初恋。为游戏做 AI 是我十几岁时职业生涯中做的第一件事，也是我构建的第一个主要 AI 系统，我一直想有一天重新拾起这个爱好，回到那方面。我想我会的，我常常梦想，如果我当时能接触到我们今天拥有的这种 AI 系统，我在九十年代会做些什么？我认为你可以构建绝对令人震撼的游戏。

**Demis Hassabis (00:19:27)** Well, games were my first love really. And doing AI for games was the first thing I did professionally in my teenage years and with the first major AI systems that I built and I always want to scratch that itch one day and come back to that. And I will do, I think, and I think I sort of dream about what would I have done back in the nineties if I’d had access to the kind of AI systems we have today? And I think you could build absolutely mind-blowing games.

(00:19:55) 我认为下一阶段是——我一直喜欢制作，我制作的所有游戏都是开放世界游戏，所以这些游戏中有模拟，然后有 AI 角色，然后玩家与那个模拟互动，模拟根据玩家的玩法进行调整。我一直认为它们是最酷的游戏，因为，就像我参与过的《主题公园》（Theme Park）这样的游戏，每个人的游戏体验都是独一无二的，因为你在某种程度上是共同创造游戏。我们设定了参数，我们设定了初始条件，然后你作为玩家沉浸其中，然后你与模拟共同创造它。但当然，编程开放世界游戏非常困难。你必须能够创造内容，无论玩家选择哪个方向，并且你希望无论玩家选择什么，它都引人入胜。（书童注：可以参考帕米·奥尔森著《SUPREMACY: AI, ChatGPT, and the Race That Will Change the World》，2025年7月刚发行简中译本《至高无上》）所以构建像元胞自动机这样的东西总是相当困难，实际上是那种经典系统，它们产生了一些涌现行为，但它们总是有点脆弱，有点有限。现在，我们也许在未来几年，5 到 10 年内，即将拥有能够真正围绕你的想象力进行创造的 AI 系统，能够动态地改变故事和叙述，使其充满戏剧性，无论你最终选择什么。所以这就像终极的“选择你自己的冒险”类型的游戏。我想也许我们触手可及，如果你想象一个交互版的 Veo，然后向前推进 5 到 10 年，想象一下它将会变得多么好。

(00:19:55) And I think the next stage is I always used to love making, all the games I’ve made are open world games, so they’re games where there’s a simulation and then there’s AI characters, and then the player interacts with that simulation and the simulation adapts to the way the player plays. And I always thought they were the coolest games because, so games like Theme Park that I worked on where everybody’s game experience would be unique to them because you’re kind of co-creating the game. We set up the parameters, we set up initial conditions, and then you as the player immersed in it, and then you are co-creating it with the simulation. But of course it’s very hard to program open world games. You’ve got to be able to create content whichever direction the player goes in, and you want it to be compelling no matter what the player chooses. And so it was always quite difficult to build things like cellular automata actually, type of those kind of classical systems, which created some emergent behavior, but they’re always a little bit fragile, a little bit limited. Now we are maybe on the cusp in the next few years, five, 10 years of having AI systems that can truly create around your imagination, can dynamically change the story and storytell the narrative around and make it dramatic no matter what you end up choosing. So it’s like the ultimate choose your own adventure sort of game. And I think maybe we are within reach, if you think of a kind of interactive version of Veo and then wind that forward five to 10 years and imagine how good it’s going to be.

**Lex Fridman  (00:21:24)**: 是的。你在那里说了很多超级有趣的东西。所以第一，开放世界，内置其中的是你所说的深度个性化。所以不仅仅是它是开放世界，你可以打开任何门，那里都会有东西，你选择打开哪扇门将以一种不受约束的方式定义你所看到的世界。所以有些游戏试图这样做，它们给你选择，但那真的只是选择的幻觉，因为你只有，比如《史丹利的寓言》（Stanley Parable），一个我实际上玩过的游戏，它真的，只有几扇门，它真的只是带你走一条叙事线。《史丹利的寓言》是一个伟大的电子游戏。我推荐人们玩它，它以一种元方式嘲笑了选择的幻觉，并且涉及自由意志等等哲学概念。

**Lex Fridman (00:21:24)** Yeah. So you said a lot of super interesting stuff there. So one, the open world, built into that is a deep personalization the way you’ve described it. So it’s not just that it’s open world, that you can open any door and there’ll be something there, it’s that it’s the choice of which door you open in an unconstrained way defines the worlds you see. So some games try to do that, they give you choice, but it’s really just an illusion of choice because you only, like Stanley Parable, a game I actually played, it’s really, there’s a couple of doors and it really just takes you down a narrative. Stanley Parable is a great video game. I recommend people play it, that in a meta way, mocks the illusion of choice, and there’s philosophical notions of free will and so on.

(00:22:12) 但是，我确实，我最喜欢的《上古卷轴》游戏之一是《匕首雨》（Daggerfall），我相信，他们真的尝试了地牢的随机生成，如果你能踏入其中，它们会给你一种开放世界的感觉。在那里你提到了交互性。你不需要交互。那是第一步，因为你不需要那么多交互。你只是，当你打开门时，你看到的任何东西都是为你随机生成的。那已经是一种不可思议的体验，因为你可能是唯一一个看到那个东西的人。

(00:22:12) But I do, one of my favorite games of Elder Scrolls is Daggerfall I believe, that they really played with a random generation of the dungeons of if you can step in and they give you this feeling of an open world. And there you mentioned interactivity. You don’t need to interact. That’s the first step because you don’t need to interact that much. You just, when you open the door, whatever you see is randomly generated for you. And that’s already an incredible experience because you might be the only person to ever see that.

**Demis Hassabis  (00:22:46)**： 是的，完全正确。但你想要的比仅仅是某种随机生成要好一点。所以你希望，并且也比简单的 A/B 硬编码选择更好，对吧？正如你所说，那并不是真正的开放世界。它只是给你选择的幻觉。你想要能够做的是在那个游戏环境中潜在地做任何事情。我认为你能做到这一点的唯一方法是拥有生成系统，能够即时生成这些内容的系统。当然，你不可能创造无限多的游戏资产。如今 3A 游戏的制作已经足够昂贵了。这在我们九十年代从事所有这些游戏时对我们来说就很明显了。

**Demis Hassabis (00:22:46)** Yeah, exactly. But what you’d like is a little bit better than just sort of a random generation. So you’d like, and also better than a simple AB hard coded choice, right? That’s not really open world, as you say. It’s just giving you the illusion of choice. What you want to be able to do is potentially anything in that game environment. And I think the only way you can do that is to have generated systems, systems that will generate that on the fly. Of course, you can’t create infinite amounts of game assets. It’s expensive enough already how AAA games are made today. And that was obvious to us back in the nineties when I was working on all these games.

(00:23:25) 我想也许《黑与白》（Black & White）是我早期参与的那个游戏，它可能仍然拥有其中最好的 AI，学习型 AI。它是一个早期的强化学习系统，你照顾这个神话生物，培育它，养育它。根据你对待它的方式，它会以同样的方式对待那个世界里的村民。所以如果你对它刻薄，它就会刻薄。如果你善良，它就会具有保护性。所以它实际上是你玩游戏方式的一种反映。所以实际上，所有……我职业生涯初期就通过游戏媒介研究模拟和 AI，今天我做的所有事情，仍然是那些早期更硬编码的 AI 实现方式的延续，（尽管）到现在我们试图实现完全通用的学习系统。

(00:23:25) I think maybe Black & White was the game that I worked on early stages of that, that had still probably the best AI, learning AI, in it. It was an early reinforcement learning system that you were looking after this mythical creature and growing it and nurturing it. And depending how you treated it, it would treat the villagers in that world the same way. So if you were mean to it, it would be mean. If you were good, it would be protective. And so it was really a reflection of the way you played it. So actually all of the, I’ve been working on simulations and AI through the medium of games at the beginning of my career, and really the whole of what I do today, it’s still a follow on from those early more hard coded ways of doing the AI to now fully general learning systems that are trying to achieve the same thing.

**Lex Fridman  (00:24:12)** 是的，看着你和 Elon（马斯克）显然都渴望创造游戏，因为你们都是游戏玩家，这一直很有趣、很搞笑，也很有趣。你们在科学等诸多领域取得了令人难以置信的成功，比如严肃的成人事务，这其中一个可悲的方面是，你们可能没有时间真正去创造一款游戏，你们最终可能只能创造工具，让别人来创造游戏。你们不得不看着别人创造你们一直梦想的东西。你认为有没有可能，在你极其繁忙的日程中，实际上找到时间创造一些像《黑与白》这样的东西，一个真正的电子游戏，让你童年的梦想成为现实？

**Lex Fridman (00:24:12)** Yeah, it is been interesting, hilarious, and fun to watch you and Elon obviously itching to create games because you’re both gamers. And one of the sad aspects of your incredible success in so many domains of science, like serious adult stuff, that you might not have time to really create a game, you might end up creating the tooling that others will create the game. You have to watch others create the thing you’ve always dreamed of. Do you think it’s possible you can somehow in your extremely busy schedule actually find time to create something like Black & White, an actual video game where you could make the childhood dream become reality?

**Demis Hassabis  (00:24:58)** 嗯，关于这个我有两件事在想，也许随着 vibe coding（一种AI辅助编程方式）变得更好，存在一种可能性，我实际上可以在空闲时间做这件事。所以我对这个感到很兴奋，如果我有时间做一些 vibe coding，（写游戏）将是我要做的项目。我实际上很渴望做这个。然后另一件事是，也许是在 AGI 被安全地管理并交付给世界之后的一次休假。那，然后就像我们一开始谈到的，研究我的物理学理论，那些将是我的两个后 AGI 项目，姑且这么说吧。

**Demis Hassabis (00:24:58)** Well, there’s two things where I think about that is maybe with vibe coding as it gets better and there’s a possibility that I could, one could do that actually in your spare time. So I’m quite excited about that as that would be my project if I got the time to do some vibe coding. I’m actually itching to do that. And then the other thing is maybe it’s a sabbatical after AGI has been safely stewarded into the world and delivered into the world. That, and then working on my physics theory as we talked about at the beginning, those would be my two post-AGI projects, let’s call it that way.

**Lex Fridman  (00:25:28)**： 我很想看看你选择哪一个，解决一些人类历史上最聪明的人所面对的问题，P 等于 NP，或者创造一个很酷的电子游戏。

**Lex Fridman (00:25:28)** I would love to see which you choose, solving the problem that some of the smartest people in human history contended with, P equals NP, or creating a cool video game.

**Demis Hassabis  (00:25:44)** ：但在我的世界里，它们会是相关的，因为它会是一个尽可能逼真的开放世界模拟游戏。那么宇宙是什么？这谈的是同一个问题，和 P 等于 NP 一样。我认为所有这些东西都是相关的，至少在我心里是这样。

**Demis Hassabis (00:25:44)** But in my world, they’d be related because it would be an open world simulated game as realistic as possible. So what is the universe? That’s speaking to the same question and P equals NP. I think all these things are related, at least in my mind.

**Lex Fridman  (00:25:59)** ：我的意思是从一个非常严肃的角度来说，电子游戏有时被贬低为只是一种有趣的副业活动。但特别是当 AI 做越来越多困难、枯燥的任务时，我们在现代世界称之为工作的东西，电子游戏可能是我们找到意义的地方，可能是我们找到如何度过时间的地方。你可以创造极其丰富、有意义的体验。这就是人类生活的意义。然后在电子游戏中，你可以创造更复杂、更多样化的生活方式。对吧？重点是这个吗？

**Lex Fridman (00:25:59)** I mean in a really serious way, video games sometimes are looked down upon as just this fun side activity. But especially as AI does more and more of the difficult, boring tasks, something we in modern world called work, video games is the thing in which we may find meaning, in which we may find what to do with our time. You could create incredibly rich, meaningful experiences. That’s what human life is. And then in video games, you can create more sophisticated, more diverse ways of living. Right? That’s the point?

**Demis Hassabis  (00:26:41)** ：我想是的。我的意思是，我们这些热爱游戏的人，我仍然热爱，是因为它几乎可以让你的想象力肆意奔涌，对吧？我曾经非常热爱游戏和从事游戏工作，因为它是融合，尤其是在九十年代和两千年代初，也许是八十年代，游戏产业的黄金时期。一切都在被发现。新的类型正在被发现。我们不仅仅是在制作游戏，我们觉得我们正在创造一种前所未有的新娱乐媒介。尤其是这些开放世界游戏和模拟游戏，你作为玩家，是共同创造故事的人。没有其他娱乐媒体能做到这一点，你作为观众实际上共同创造故事。

**Demis Hassabis (00:26:41)** I think so. I mean, those of us who love games and I still do is it’s almost can let your imagination run wild, right? I used to love games and working on games so much because it’s the fusion, especially in the nineties and early two thousands, the sort of golden era and maybe the eighties of the games industry. And it was all being discovered. New genres were being discovered. We weren’t just making games, we felt we were creating a new entertainment medium that never existed before. Especially with these open world games and simulation games where you, as the player, were co-creating the story. There’s no other media, entertainment media, where you do that, where you as the audience actually co-create the story.

(00:27:23) 当然，现在有了多人游戏，它也可以是一项非常社交的活动，并且可以探索其中各种有趣的世界。但另一方面，享受和体验物理世界也非常重要。但问题在于，我想我们将不得不再次面对这个问题：现实的基本本质是什么？这些日益逼真的模拟和多人游戏，以及其中涌现的事物，与我们在现实世界中所做的事情，将会有什么不同？

(00:27:23) And of course now with multiplayer games as well, it can be a very social activity and can explore all kinds of interesting worlds in that. But on the other hand, it’s very important to also enjoy and experience the physical world. But the question is then I think we’re going to have to confront the question again of what is the fundamental nature of reality? What is going to be the difference between these increasingly realistic simulations and multiplayer ones and emergent and what we do in the real world?

**Lex Fridman  (00:27:55)** ：是的，体验现实世界、大自然显然有巨大的价值。直接亲自体验其他人，就像我们今天坐在这里这样，也有巨大的价值，但我们需要真正科学、严谨地回答为什么，以及其中的哪些方面可以映射到虚拟世界中。

**Demis Hassabis  (00:28:17)** 正是。

**Lex Fridman (00:27:55)** Yeah, there’s clearly a huge amount of value to experiencing the real world, nature. There’s also a huge amount of value in experiencing other humans directly in person the way we’re sitting here today, but we need to really scientifically rigorously answer the question why and which aspect of that can be mapped into the virtual world.

**Demis Hassabis (00:28:17)** Exactly.

**Lex Fridman  (00:28:18)**： 光说“是的，你应该去接触自然，在大自然中消磨时间”是不够的。就像，为什么那是有价值的？

**Demis Hassabis  (00:28:25)**： 是的。我猜这可能是从我职业生涯开始就一直困扰着我或让我着迷的事情。如果你想想我做过所有不同的事情，它们都是相关联的。模拟、现实的本质，以可建模的极限在何处。

**Lex Fridman (00:28:18)** It’s not enough to say, “Yeah, you should go touch grass and hang out in nature.” It’s like why exactly is that valuable?

**Demis Hassabis (00:28:25)** Yes. And I guess that’s maybe the thing that’s been haunting me or obsessing me from the beginning of my career. If you think about all the different things I’ve done, they’re all related in that way. The simulation, nature of reality, and what is the bounds of what can be modeled.

**Lex Fridman  (00:28:40)** ：抱歉问这个荒谬的问题，但到目前为止，有史以来最伟大的电子游戏是什么？有哪些名列前茅？

**Demis Hassabis  (00:28:45)** ：嗯，我最喜欢的永远是《文明》（Civilization），我不得不这么说。那是《文明 I》和《文明 II》，是我有史以来最喜欢的游戏。

**Lex Fridman (00:28:40)** Sorry for the ridiculous question, but so far, what is the greatest video game of all time? What’s up there?

**Demis Hassabis (00:28:45)** Well, my favorite one of all time is Civilization, I have to say. That was the Civilization I and Civilization II, my favorite games of all time.

**Lex Fridman  (00:28:54)** ：我只能假设你避开了最近的那一版，因为它可能会，那会成为你的休假项目。你会消失的。（书童注：最近一版为《文明6》，作为策略类游戏，玩一局的时间可以非常之长）

**Demis Hassabis  (00:29:03)** ：是的，完全正确。这些《文明》游戏很花时间，所以我必须小心对待它们。

**Lex Fridman (00:28:54)** I can only assume you’ve avoided the most recent one because it would probably, that would be your sabbatical. You would disappear.

**Demis Hassabis (00:29:03)** Yes, exactly. They take a lot of time, these Civilization games, so I’ve got to be careful with them.

**Lex Fridman  (00:29:08)**： 问个有趣的问题。你和 Elon 似乎都是铁杆游戏玩家。擅长游戏和成为 AI 公司的伟大领导者之间有什么联系吗？

**Demis Hassabis  (00:29:20)**： 我不知道。这是个有趣的问题。我的意思是，我们都热爱游戏，有趣的是，他也是从写游戏开始的。可能，尤其是我成长的那个时代，家用电脑在八十年代末和九十年代刚刚兴起，特别是在英国，我有一台 Spectrum，然后是一台 Commodore Amiga 500，那是我最喜欢的电脑。那就是我学习所有编程的原因。当然，游戏编程是一件非常有趣的事情。所以我认为这是学习编程的一个好方法，可能现在仍然是。然后当然，我立即把它带向了 AI 和模拟的方向，所以我能够同时表达我对游戏的兴趣和我更广泛的科学兴趣。

**Lex Fridman (00:29:08)** Fun question. You and Elon seem to be somehow solid gamers. Is there a connection between being great at gaming and being great leaders of AI companies?

**Demis Hassabis (00:29:20)** I don’t know. It’s an interesting one. I mean, we both love games and it’s interesting, he wrote games as well to start off with. Probably, especially in the era I grew up in where home computers just became a thing in the late eighties and nineties, especially in the UK, I had a spectrum and then a Commodore Amiga 500, which was my favorite computer ever. And that’s why I learned all my programming. And of course, it’s a very fun thing to program, is to program games. So I think it’s a great way to learn programming, probably still is. And then of course, I immediately took it in directions of AI and simulations, so I was able to express my interest in games and my wider scientific interests all together.

**Demis Hassabis  (00:30:00)** ：以及我更广泛的科学兴趣。然后我认为游戏最棒的最后一点是，它融合了艺术设计、艺术与最前沿的编程。所以再次，在九十年代，所有最有趣的技术进步都发生在游戏领域，无论是 AI、图形、物理引擎、硬件，甚至 GPU 最初也是为游戏设计的。所以九十年代推动计算向前发展的一切都归功于游戏。所以有趣的是，那里是研究前沿正在进行的地方，并且是与艺术的惊人融合。图形，还有音乐，以及整个讲故事的新媒体。我热爱那个。对我来说，这种多学科的努力再次是我一生都享受的东西。

**Demis Hassabis (00:30:00)** And my sort of wider scientific interests all together. And then the final thing I think that’s great about games is it fuses artistic design, art, with the most cutting edge programming. So again, in the nineties, all of the most interesting technical advances were happening in gaming, whether that was AI, graphics, physics engines, hardware, even GPUs of course were designed for gaming originally. So everything that was pushing computing forward in the nineties was due to gaming. So interestingly, that was where the forefront of research was going on and it was this incredible fusion with art. Graphics, but also music, and just the whole new media of storytelling. And I love that. For me, it’s this sort of multidisciplinary kind of effort is again something I’ve enjoyed my whole life.

AlphaEvolve

**Lex Fridman  (00:30:52)** ：我必须问你，我几乎忘记了最近众多令人难以置信的事情之一，而且我会说是最令人难以置信的事情之一，那就是 AlphaEvolve。我们稍微谈了一下进化，但它是 Google DeepMind 的系统，可以进化算法。这类类似进化的技术作为未来超级智能系统的组成部分有前途吗？所以对于不了解的人来说，这有点，我不知道是否公平地说它是 LLM 引导的进化搜索，因为进化算法在进行搜索，而 LLM 在告诉你方向。

**Lex Fridman (00:30:52)** I have to ask you, I almost forgot about one of the many, and I would say one of the most incredible things recently that somehow didn’t yet get enough attention is AlphaEvolve. We talked about Evolution a little bit, but it’s the Google DeepMind system that evolves algorithms. Are these kinds of Evolution-like techniques promising as a component of future super intelligence systems? So for people who don’t know, it’s kind of, I don’t know if it’s fair to say it’s LLM guided Evolution search because Evolution algorithms are doing the search and LLMs are telling you where.

**Demis Hassabis  (00:31:28)**： 是的。是的，完全正确。所以 LLM 在提出一些可能的解决方案，然后你在上面使用进化计算来找到搜索空间的某些新颖部分。所以实际上我认为这是一个非常有前途的方向的例子，你将 LLM 或基础模型与其他计算技术结合起来。进化方法是其中之一，但你也可以想象蒙特卡洛树搜索。基本上，许多类型的搜索算法或推理算法运行在基础模型之上。所以我实际上认为，用这些混合系统（我们姑且这么称呼它们）可能还有很多有趣的东西有待发现。

**Demis Hassabis (00:31:28)** Yes. Yes, exactly. So LLMs are kind of proposing some possible solutions and then you use evolutionary computing on top to find some novel part of the search space. So actually I think it’s an example of very promising directions where you combine LLMs or foundation models with other computational techniques. Evolutionary methods is one, but you could also imagine Monte Carlo tree search. Basically many types of search algorithms or reasoning algorithms sort of on top of or using the foundation models as a basis. So I actually think there’s quite a lot of interesting things to be discovered probably with these sort of hybrid systems, let’s call them.

**Lex Fridman  (00:32:10)**： 但不要浪漫化进化。

**Demis Hassabis  (00:32:12)**： 是的。

**Lex Fridman (00:32:10)** But not to romanticize Evolution.

**Demis Hassabis (00:32:12)** Yeah.

**Lex Fridman  (00:32:12)** ：我只是个凡人，但你认为那个机制有什么价值吗？因为我们已经讨论过自然系统。你认为我们在理解、能够建模、能够模拟进化方面有很多唾手可得的成果吗？然后利用无论我们理解了多少，那个受自然启发的机制，来然后越来越好地进行搜索？

**Lex Fridman (00:32:12)** I’m only human, but you think there’s some value in whatever that mechanism is? Because we already talked about natural systems. Do you think where there’s a lot of low-hanging fruit of us understanding, being able to model, being able to simulate Evolution and then using that, whatever we understand about that nature-inspired mechanism, to then do search better and better and better?

**Demis Hassabis  (00:32:36)** ：是的。所以如果你再想想，把我们构建的（复杂）系统分拆到它们真正的内核，你已经获得了（构建）系统底层动力学的模型。然后，如果你想发现新的、以前从未见过的东西，那么你需要某种顶层的搜索过程，带你到搜索空间的新颖部分。你可以用多种方式做到这一点。进化计算是一种。对于 AlphaGo，我们只使用了蒙特卡洛树搜索，那就是发现了第 37 手，围棋中前所未有的新策略。这就是你如何能够潜在地超越已知事物的方式。所以这个模型可以模拟你目前所知的一切，你目前拥有的所有数据。但是你如何超越那个呢？所以这开始谈到创造力的理念。

**Demis Hassabis (00:32:36)** Yes. So if you think about, again, breaking down the solar systems we’ve built to their really fundamental core, you’ve got the model of the underlying dynamics of the system. And then if you want to discover something new, something novel that hasn’t been seen before, then you need some kind of search process on top to take you to a novel of the search space. And you can do that in a number of ways. Evolutionary computing is one. With AlphaGo, we just use Monte Carlo Tree Search and that’s what found move 37, the new never seen before strategy in Go. And so that’s how you can go beyond potentially what is already known. So the model can model everything that you currently know about, all the data that you currently have. But then how do you go beyond that? So that starts to speak about the ideas of creativity.

(00:33:28) 这些系统如何创造新的东西？事实上是发现新的东西？显然，这对于科学发现或推动科学和医学前进超级相关，这也是我们想用这些系统做的事情。你实际上可以在这些模型之上附加一些相当简单的搜索系统，让你进入空间的一个新区域。当然，你还必须确保你不是完全随机地搜索那个空间。那会太大。所以你必须有一个你试图优化的目标函数，并朝着它进行爬山（优化），从而引导那个搜索。

(00:33:28) How can these systems create something new? In fact discover something new? Obviously this is super relevant for scientific discovery or pushing met science and medicine forward, which we want to do with these systems. And you can actually bolt on some fairly simple search systems on top of these models and get you into a new region of space. Of course, you also have to make sure that you’re not searching that space totally randomly. It would be too big. So you have to have some objective function that you’re trying to optimize and hill climb towards and that guides that search.

**Lex Fridman  (00:34:00)** ：但是进化的一些机制在程序空间可能很有趣。然后程序空间是一个极其重要的空间，因为你可能可以推广到所有事情。但例如，变异（Mutation）。所以它不仅仅是蒙特卡洛树搜索那样的搜索。你可以偶尔——

**Demis Hassabis  (00:34:21)** ：组合东西。

**Lex Fridman  (00:34:22)** ：组合东西？

**Demis Hassabis  (00:34:23)** ：是的。

**Lex Fridman  (00:34:23)**： 东西，像一个事物的组成部分。

**Demis Hassabis  (00:34:26)**： 是的。

**Lex Fridman (00:34:00)** But there’s some mechanism of Evolution that are interesting maybe in the space of programs. But then the space of programs an extremely important space, because you can probably generalize to everything. But for example, mutation. So it’s not just Monte Carlo Tree Search where it’s like a search. You could every once in a while-

**Demis Hassabis (00:34:21)** Combine things.

**Lex Fridman (00:34:22)** Combine things?

**Demis Hassabis (00:34:23)** Yeah.

**Lex Fridman (00:34:23)** Things, like the components of a thing.

**Demis Hassabis (00:34:26)** Yes.

**Lex Fridman  (00:34:26)** ：所以进化真正擅长的不仅仅是自然选择，它擅长组合东西并构建日益复杂的层次系统。所以那个组成部分超级有趣，尤其是对于 AlphaEvolve 和程序空间。

**Lex Fridman (00:34:26)** So then what Evolution is really good at is not just the natural selection, it’s combining things and building increasingly complex hierarchical systems. So that component is super interesting, especially with AlphaEvolve and the space of programs.

**Demis Hassabis  (00:34:43)** ：是的，完全正确。所以你可以从进化系统中获得一点额外的特性，那就是可能会出现一些新的涌现能力，对吧？当然就像生命发生的那样，有趣的是，没有 LLM 和现代 AI 的、朴素的传统进化计算方法，它们在九十年代和两千年代初被充分研究过，并取得了一些有希望的结果，但问题是它们永远无法弄清楚如何进化出新的特性、新的涌现特性。你总是拥有你放入系统的特性的一个子集，但也许如果我们将它们与这些基础模型结合起来，也许我们可以克服那个限制。

**Demis Hassabis (00:34:43)** Yeah, exactly. So you can get a bit of an extra property out of evolutionary systems, which is some new emerging capability may come about, right? Of course like happened with life, interestingly with naive, traditional evolutionary computing methods without LLMs and the modern AI, the problem with them, they were very well studied in the nineties and early two thousands and some promising results, but the problem was they could never work out how to evolve new properties, new emerging properties. You always had a sort of subset of the properties that you put into the system, but maybe if we combine them with these foundation models, perhaps we can overcome that limitation.

(00:35:21) 显然自然进化确实做到了。它确实进化出了新的能力。从细菌到我们现在所在的位置。所以很明显，进化系统必须能够产生新的模式，回到我们最初谈论的东西，以及新的能力和涌现特性，也许我们正处于发现如何做到这一点的风口浪尖。

(00:35:21) Obviously naturally evolution clearly did. It did evolve new capabilities. So bacteria to where we are now. So clearly that it must be possible with evolutionary systems to generate new patterns, going back to the first thing we talked about and new capabilities and emerging properties, and maybe we’re on the cusp of discovering how to do that.

**Lex Fridman  (00:35:44)**： 是的，听着，AlphaEvolve 是我见过的最酷的东西之一。我家里书桌上的大部分时间都花在那台电脑上，就是编程。三个屏幕旁边是一个提塔利克鱼（Tiktaalik）的头骨，它是一种早期从水里爬到陆地上的生物。我只是看着那个小家伙。就像无论进化的竞争机制是什么，它都相当不可思议。

**Lex Fridman (00:35:44)** Yeah, listen, AlphaEvolve is one of the coolest things I’ve ever seen. I’ve on my desk at home, most of my time is spent on that computer is just programming. And next to the three screens is a skull of a Tiktaalik, which is one of the early organisms that crawled out of the water onto land. And I just kind of watch that little guy. It’s like whatever the competition mechanism of Evolution is, it’s quite incredible.

**Demis Hassabis  (00:36:16)** 是的。

**Demis Hassabis (00:36:16)** Yes.

**Lex Fridman  (00:36:17)** ：它真的，真的不可思议。现在，无论那是否正是我们需要进行搜索的东西，但永远不要低估自然的力量，以及它在这里所做的事情。

**Lex Fridman (00:36:17)** It’s truly, truly incredible. Now whether that’s exactly the thing we need to do to do our search, but never dismiss the power of nature, what it did here.

**Demis Hassabis  (00:36:27)** ：而且这很神奇，它是一个相对简单的算法，对吧？实际上，它运行了超过 40 亿年的时间，显然产生了所有这些巨大的复杂性。但你可以把它看作是一个搜索过程，它在宇宙的物理基质上运行了很长一段计算时间，然后它产生了所有这种令人难以置信的丰富多样性。

**Demis Hassabis (00:36:27)** And it’s amazing, which is a relatively simple algorithm, right? Effectively, and it can generate all of this immense complexity emerges obviously running over 4 billion years of time. But you can think about that as again, a search process that ran over the physics substrate of the universe for a long amount of computational time, but then it generated all this incredible rich diversity.

AI 研究

**Lex Fridman  (00:36:54)**： 我有太多问题想问你了。所以第一，你确实有一个梦想，你想要尝试建模的自然系统之一是一个细胞。那是一个美丽的梦想。所以有一篇来自 Daniel Cocotaglio、Scott Alexander 和其他人的文章，关于通往 ASI（人工超级智能）的步骤，里面有很多有趣的想法，其中之一包括一个超人类编码器和一个超人类 AI 研究员。在那里面有一个“研究品味”的术语非常有趣。所以在你所见的一切中，你认为 AI 系统有可能拥有研究品味来帮助你，就像 AI 合作科学家那样，帮助引导人类杰出的科学家，然后 靠自己找出方向，产生真正新颖的想法？这似乎是如何做出伟大科学的一个非常重要的组成部分？

**Lex Fridman (00:36:54)** So many questions I want to ask you. So one, you do have a dream, one of the natural systems you want to try to model is a cell. That’s a beautiful dream. I could ask you about that. I also just for that purpose on the AI scientist front just broadly, so there’s a essay from Daniel Cocotaglio, Scott Alexander and others that online steps along the way to get to ASI and it has a lot of interesting ideas in it, one of which is including a superhuman coder and a superhuman AI researcher. And in that there’s a term of research taste that’s really interesting. So in everything you’ve seen, do you think it’s possible for AI systems to have research taste to help you in the way that AI co-scientist does, to help steer human brilliant scientists and then potentially by itself to figure out what are the directions where you want to generate truly novel ideas? That seems to be a really important component of how to do great science?

**Demis Hassabis  (00:38:03)** ：是的，我认为这将是最难模仿或建模的事情之一，就是这个品味或判断力的概念。我认为这是伟大科学家与优秀科学家的区别所在。所有职业科学家在技术上都是好的，否则他们不会在学术界走那么远。但是你是否拥有嗅出正确方向、正确实验、正确问题的品味？所以挑选正确的问题、做出正确的假设是科学中最难的部分。这是今天的系统肯定做不到的。所以我常说，提出一个猜想，一个真正好的猜想，比解决它更难。所以我们可能很快就会有系统可以解决相当困难的猜想。数学奥林匹克问题，去年我们的 Alpha Proof 系统在那些非常难的问题上获得了银牌。也许最终我们会更好地解决千禧年大奖难题之类的问题。但是一个系统能提出一个值得研究的猜想吗，像陶哲轩那样的人会去研究的？“你知道，那是一个关于数学本质或数字本质或物理本质的非常深刻的问题。”那是更难的一种创造力。我们真的不知道。今天的系统显然做不到。我们也不太确定那会是什么机制。这种想象力的飞跃，就像爱因斯坦凭借他当时所拥有的知识，提出狭义相对论然后广义相对论时那样。

**Demis Hassabis (00:38:03)** Yeah, I think that’s going to be one of the hardest things to mimic or model is this idea of taste or judgment. I think that’s what separates the great scientists from the good scientists. All professional scientists are good technically, otherwise they wouldn’t have made it that far in academia and things like that. But then do you have the taste to sniff out what the right direction is, what the right experiment is, what the right question is? So picking the right question is the hardest part of science and making the right hypothesis. And that’s what today’s systems definitely they can’t do. So I often say it’s harder to come up with a conjecture, a really good conjecture than it is to solve it. So we may have systems soon that can solve pretty hard conjectures. A maths Olympiad problems, where Alpha Proof last year our system got silver medal in that really hard problems. Maybe eventually we’ll better solve a Millennium Prize kind of problem. But could a system have come up with a conjecture worthy of study that someone like Terence Tao would’ve gone? “You know what, that’s a really deep question about the nature of maths or the nature of numbers or the nature of physics.” And that is far harder type of creativity. And we don’t really know. Today’s systems clearly can’t do that. And we’re not quite sure what that mechanism would be. This kind of leap of imagination like Einstein had when he came up with special relativity and then general relativity with the knowledge he had at the time.

**Lex Fridman  (00:39:33)** ：对于猜想，你想提出一个有趣的东西，它是易于证明的？

**Demis Hassabis  (00:39:41)**： 是的。

**Lex Fridman  (00:39:42)** ：所以提出一个极其困难的东西很容易。提出一个极其容易的东西也很容易，但在那个非常边缘——

**Demis Hassabis  (00:39:48)**： 那个最佳点，理想情况下，基本上是推动科学前进，并将假设空间一分为二。对吧？无论它是真还是假，你都学到了一些真正有用的东西，这很难。并且做出一些也是可证伪的，并且在你当前可用的技术范围内的东西。所以这实际上是一个非常具有创造性的过程。一个高度创造性的过程，我认为仅仅在模型之上进行一种朴素的搜索对于那是不够的。

**Lex Fridman (00:39:33)** For conjecture, you want to come up with a thing that’s interesting, it’s amenable to proof?

**Demis Hassabis (00:39:41)** Yes.

**Lex Fridman (00:39:42)** So it’s easy to come up with a thing that’s extremely difficult. It’s easy to come up with a thing that’s extremely easy, but at that very edge-

**Demis Hassabis (00:39:48)** That sweet spot of basically advancing the science and splitting the hypothesis space into two, ideally. Right? Whether if it’s true or not true, you’ve learned something really useful and that’s hard. And making something that’s also falsifiable and within the technologies that you currently have available. So it’s a very creative process, actually. A highly creative process that I think just a kind of naive search on top of a model won’t be enough for that.

**Lex Fridman  (00:40:21)**： 将假设空间一分为二的想法超级有趣。所以我听你说过，如果你构建的问题正确，如果你构建的实验正确，如果你设计正确，无论失败还是成功，都是有价值的，所以也许因为它基本上将假设一分为二，就像二分搜索？

**Lex Fridman (00:40:21)** The idea of splitting the hypothesis space in two is super interesting. So I’ve heard you say that there’s basically no failure or failure is extremely valuable if you construct the questions right, if you construct the experiments right, if you design them right, that failure or success are both useful, so perhaps because it splits the hypothesis basically in two, it’s like a binary search?

**Demis Hassabis  (00:40:44)** ：是的，没错。所以当你做真正的蓝天研究（基础研究）时，真的没有失败这回事。只要你挑选的实验和假设有意义地分割了假设空间，并且你学到了东西。你可以从一个不起作用的实验中学到同样有价值的东西。那应该告诉你，如果你设计好了实验并且你的假设有趣，它应该告诉你很多关于下一步该去哪里的信息。然后你实际上是在进行一个搜索过程，并以非常有用的方式利用这些信息。

**Demis Hassabis (00:40:44)** Yes, that’s right. So when you do real Blue Sky research, there’s no such thing as failure really. As long as you are picking experiments and hypotheses that meaningfully split the hypothesis space and you learn something. You can learn something kind of equally valuable from an experiment that doesn’t work. That should tell you if you’ve designed the experiment well and your hypotheses are interesting, it should tell you a lot about where to go next. And then you’re effectively doing a search process and using that information in very helpful ways.

模拟生物有机体

**Lex Fridman  (00:41:17)** ：那么说到你模拟细胞的梦想，摆在我们面前实现这一目标的重大挑战是什么？我们也许应该强调一下，在 AlphaFold 中，我的意思是有太多的飞跃。所以 AlphaFold 解决了，如果可以这么说的话，蛋白质折叠问题。那里有太多不可思议的事情我们可以谈论，包括开源，你们发布的所有东西，AlphaFold 3 正在做蛋白质、RNA、DNA 相互作用，这是超级复杂和迷人的。它适合建模。AlphaGenome 预测小的遗传变化，如果我们考虑单点突变，它们如何与实际功能联系起来。所以看起来它正在逐渐发展到更复杂的东西，比如一个细胞。但是一个细胞有很多非常复杂的组成部分。

**Lex Fridman (00:41:17)** So to go to your dream of modeling a cell, what are the big challenges that lay ahead for us to make that happen? We should maybe highlight that in AlphaFold, I mean there’s just so many leaps. So AlphaFold solved, if it’s fair to say, protein folding. And there’s so many incredible things we could talk about there, including the open sourcing, everything you’ve released AlphaFold 3 is doing protein, RNA, DNA interactions, which is super complicated and fascinating. It’s amenable to modeling. AlphaGenome predicts how small genetic changes if we think about single mutations, how they link to actual function. So it seems like it’s creeping along to sophisticated to much more complicated things like a cell. But a cell has a lot of really complicated components.

**Demis Hassabis  (00:42:11)**： 所以我整个职业生涯试图做的是，我有这些非常宏大的梦想，然后我尝试，如你所注意到的，我尝试将它们分解。拥有一个疯狂雄心勃勃的梦想很容易，但诀窍在于你如何将其分解成可管理的、可实现的、有意义的、并且本身就有用的中间步骤？所以“虚拟细胞”（Virtual Cell），我称之为模拟细胞的项目，我有这个想法也许已经有 25 年了。

**Demis Hassabis (00:42:11)** So what I’ve tried to do throughout my career is I have these really grand dreams and then I try to, as you’ve noticed, but I try to break them down. It’s easy to have a kind of crazily ambitious dream, but the trick is how do you break it down into manageable, achievable, interim steps that are meaningful and useful in their own right? And so Virtual Cell, which is what I call the project of modeling a cell, I’ve had this idea of wanting to do that for maybe more like 25 years.

(00:42:41) 我曾经和 Paul Nurse 谈论过，他是我在生物学方面的一位导师。他创立了克里克研究所（Crick Institute）并在 2001 年获得了诺贝尔奖。我们从九十年代就开始谈论这个，我过去每五年都会回到这个问题上。就像，模拟一个细胞的全部内部结构需要什么，这样你就可以在虚拟细胞上做实验。那些在硅基中进行的模拟实验和预测，可以为你节省大量时间，而不必（亲自采用真实细胞）在实验室操作。这是梦想般的存在。

(00:42:41) And I used to talk with Paul Nurse, who is a bit of a mentor of mine in biology. He runs the founded the Crick Institute and won the Nobel Prize in 2001. We’ve been talking about it since the nineties, and I used to come back to it every five years. It’s like, what would you need to model the full internals of a cell so that you could do experiments on the virtual cell and what those experiment in silico and those predictions would be useful for you to save you a lot of time in the wet lab. That would be the dream.

(00:43:13) 也许你可以通过主要在计算机中进行搜索，然后将验证步骤放在真实实验室中来完成，从而将实验速度提高一百倍。梦想一般的存在。现在终于，我试图构建这些组件，AlphaFold 是其中之一，这将允许你最终模拟完整的相互作用，一个细胞的完整模拟，我可能会从酵母细胞开始。部分原因是 Paul Nurse 研究的就是酵母细胞，因为酵母细胞就像一个完整的生物体，是单细胞生物。所以它不仅仅是一个细胞，它是一个完整的生物体。

(00:43:13) Maybe you could a hundred x speed up experiments by doing most of it in silico the search in silico, and then you do the validation step in the wet lab. That’s the dream. But maybe now, finally, so I was trying to build these components, AlphaFold being one, that would allow you eventually to model the full interaction, a full simulation of a cell, and I’d probably start with a yeast cell. And partly that’s what Paul Nurse studied because the yeast cell is like a full organism, that’s a single cell. So it’s the kind of simplest single cell organism. And so it’s not just a cell, it’s a full organism.

(00:43:49) 而且酵母被理解得非常好。所以那将是一个进行完整模拟模型的好候选者。现在 AlphaFold 是解决蛋白质 3D 结构看起来像什么的静态图片的算法。一个它的静态快照。但我们知道，生物学中所有有趣的事情都发生在动力学、相互作用中，而 AlphaFold 3 就是迈向建模那些相互作用的第一步。所以首先，蛋白质与蛋白质的配对，蛋白质与 RNA 和 DNA 的配对。但那之后的下一步将是建模也许一个完整的通路，比如涉及癌症的 tour 通路或类似的东西。然后最终你可能能够建模整个细胞。

(00:43:49) And yeast is very well understood. And so that would be a good candidate for a kind of full simulated model. Now AlphaFold is the solution to the kind of static picture of what does a 3D structure protein look like? A static picture of it. But we know that biology, all the interesting things happen with the dynamics, the interactions, and that’s what AlphaFold 3 is, the first step towards is modeling those interactions. So first of all, pair wise proteins with proteins, proteins with RNA and DNA. But then the next step after that would be modeling maybe a whole pathway, maybe like the tour pathway that’s involved in cancer or something like this. And then eventually you might be able to model a whole cell.

**Lex Fridman  (00:44:31)**： 另外，这里还有另一个复杂性，细胞中的东西发生在不同的时间尺度上。这很棘手吗？蛋白质折叠超级快。我不知道所有的生物机制，但有些需要很长时间。所以相互作用的水平有不同的时间尺度，你必须能够建模。

**Lex Fridman (00:44:31)** Also, there’s another complexity here that stuff in a cell happens at different time scales. Is that tricky? Protein folding is super fast. I don’t know all the biological mechanisms, but some of them take a long time. And so the levels of interaction has a different temporal scale that you have to be able to model.

**Demis Hassabis  (00:44:54)**： 所以那会很困难。所以你可能需要几个模拟系统，可以在这些不同的时间动力学上相互作用，或者至少可能是一个层次系统，这样你可以在不同的时间阶段上下跳跃。

**Demis Hassabis (00:44:54)** So that would be hard. So you’d probably need several simulated systems that can interact at these different temporal dynamics, or at least maybe it’s like a hierarchical system so you can jump up or down the different temporal stages.

**Lex Fridman  (00:45:07)** ：所以你能避免……这里的挑战之一不是避免模拟，例如，这其中任何方面的量子力学层面，对吧？你不想过度建模。你可以跳过，只模拟真正高层次的东西，让你对将要发生的事情有一个很好的估计。

**Lex Fridman (00:45:07)** So can you avoid… One of the challenges here is not avoid simulating, for example, the quantum mechanical aspects of any of this, right? You want to not over model. You can skip ahead to just model the really high level things that get you a really good estimate of what’s going to happen.

**Demis Hassabis  (00:45:27)** ：是的。所以当你模拟任何自然系统时，你必须做出一个决定，你要建模到何种粒度水平？然后它捕捉到你感兴趣的动力学。所以对于一个细胞，我希望那将是蛋白质水平，这样就不必深入到原子水平。当然，这就是 AlphaFold 发挥作用的地方。所以那将是基础，然后你将在那些作为构建块的基础上构建这些更高层次的模拟，然后你得到涌现行为。

**Demis Hassabis (00:45:27)** Yes. So you got to make a decision when you’re modeling any natural system, what is the cutoff level of the granularity that you’re going to model it to? And then it captures the dynamics that you’re interested in. So probably for a cell I would hope that would be the protein level, and that one wouldn’t have to go down to the atomic level. So of course that’s where AlphaFold stock kicks in. So that would be kind of the basis, and then you’d build these higher level simulations that take those as building blocks and then you get the emergent behavior.

（上篇完）
