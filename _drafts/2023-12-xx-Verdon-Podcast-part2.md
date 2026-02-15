---
layout: post
title:  "量子加速、热力学生命论、末日概率：物理学家韦尔东2023年Lex Fridman播客实录 | 中英文完整版精译（中）"
categories: podcast 
tags: thinking
author: LZN
---

_书童按：本篇是量子计算研究者、Extropic公司创始人吉约姆·韦尔东（Guillaume Verdon）于2023年接受Lex Fridman播客采访的实录（第407集）。本篇（中篇）内容涵盖量子机器学习原理、量子计算机进展、Extropic公司热力学计算路线、外星人与费米悖论、量子引力与时空涌现、卡尔达肖夫指数，以及e/acc有效加速主义哲学等议题。_

![](https://i.imgur.com/placeholder.jpeg)

量子机器学习

Quantum machine learning

**Lex Fridman  (00:50:02)**： 好，让我们换一个完全不同的方向。你几次提到了量子机器学习，让我们深入探讨一下。

**Lex Fridman (00:50:02)** Okay. Let's go a very different direction. You've mentioned quantum machine learning a couple of times. Let's go deep on this.

**Guillaume Verdon  (00:50:09)**： 好的。我在加州理工学院完成了量子机器学习方向的博士学业，之后去了谷歌从事量子计算和量子机器学习的工作。基本思路是这样的：在量子尺度上，物理世界由量子力学来描述，而量子力学与经典物理学对现实的描述有着根本性的不同。因此，问题就在于：我们能否构建出基于量子力学原理运行的计算机，从而计算出经典计算机无法完成的任务？

**Guillaume Verdon (00:50:09)** Okay. So I did my PhD at Caltech on quantum machine learning. And then I went to Google to work on quantum computing and quantum machine learning. And the basic idea is that the physical world at the quantum scale is described by quantum mechanics. And quantum mechanics is a fundamentally different model of reality than classical physics. And so the question is, can we build computers that operate on quantum mechanical principles and thereby compute things that classical computers cannot?

**Lex Fridman  (00:50:44)**： 那么，量子计算究竟是什么？我知道你对这个领域非常熟悉，能从物理学家的视角给我解释一下吗？

**Lex Fridman (00:50:44)** So what exactly is quantum computing? I know you know this well. Give me the physicist view.

**Guillaume Verdon  (00:50:50)**： 当然。量子计算机本质上是一个量子力学系统，我们对它有着足够的控制能力，并且它能够将自身的量子力学状态保持足够长的时间，以便我们能够用它来做有意义的事情。而我们想要利用的量子力学核心特性，是一种叫做"叠加态"的现象。经典比特只能是零或一，而量子比特（即量子位）可以同时处于零和一的叠加态。因此，当你有许多量子位处于叠加态时，你就可以同时处理指数级数量的状态。

**Guillaume Verdon (00:50:50)** Sure. So a quantum computer really is a quantum mechanical system over which we have sufficient control, and it can maintain its quantum mechanical state long enough for us to do useful things with it. And the key feature of quantum mechanics that we want to exploit is a phenomenon called superposition. So a classical bit can be zero or one. A quantum bit, a qubit, can be zero and one simultaneously in a superposition. And so when you have many qubits in superposition, you can process an exponentially large number of states simultaneously.

**Lex Fridman  (00:51:29)**： 就像你在同时探索许多种可能的状态一样。

**Lex Fridman (00:51:29)** Like you're exploring many possible states at once.

**Guillaume Verdon  (00:51:32)**： 正是如此。你还可以利用另一种叫做"干涉"的现象来强化正确答案、抑制错误答案。所以，你可以利用这些量子特性，比经典计算机更高效地解决某些类型的问题。

**Guillaume Verdon (00:51:32)** Exactly. And you can use another phenomenon called interference to reinforce the right answer and suppress the wrong answers. And so you can use these quantum properties to solve certain types of problems much more efficiently than classical computers.

**Lex Fridman  (00:51:50)**： 是哪一类问题？

**Lex Fridman (00:51:50)** What kind of problems?

**Guillaume Verdon  (00:51:52)**： 最典型的例子是对大数进行质因数分解。Shor算法表明，量子计算机对大数进行因式分解的速度，比已知最优的经典算法快出指数级。这对加密技术有着深远的影响，因为当前的加密技术正是建立在大数因式分解困难性的基础上的。因此，一台足够强大的量子计算机将有能力破解我们目前大多数的加密体系。这只是一个例子。

**Guillaume Verdon (00:51:52)** So the canonical example is factoring large numbers. So Shor's algorithm shows that a quantum computer can factor large numbers exponentially faster than the best known classical algorithm. And that has implications for encryption, which is currently based on the hardness of factoring large numbers. And so a sufficiently powerful quantum computer would be able to break much of our current encryption. That's one example.

**Lex Fridman  (00:52:20)**： 还有其他例子吗？

**Lex Fridman (00:52:20)** And other examples?

**Guillaume Verdon  (00:52:22)**： 模拟量子系统。比如量子化学——寻找分子的基态、理解蛋白质的结构，这些都天然地以量子力学的语言来描述。因此，量子计算机是模拟这些系统的天然工具。你可以预见，量子计算机将在药物发现、材料科学以及理解物质结构等方面带来突破性进展。

**Guillaume Verdon (00:52:22)** Simulating quantum systems. So quantum chemistry, finding the ground state of molecules, understanding the structure of proteins. All of these are naturally described in quantum mechanical terms. And so a quantum computer is the natural tool to simulate these systems. And so you might expect quantum computers to give you a boost in drug discovery, in materials science, in understanding the structure of matter.

**Lex Fridman  (00:52:54)**： 那量子机器学习呢？人们对它的期望是什么？

**Lex Fridman (00:52:54)** And then quantum machine learning specifically, what's the hope there?

**Guillaume Verdon  (00:52:59)**： 人们的希望在于，量子机器学习能够处理量子世界中天然产生的量子数据。举例来说，如果你在研究量子化学，你就会生成量子数据。而经典计算机在尝试分析这些数据时，不得不对其做出经典近似。但量子机器学习模型可以直接处理这些数据，无需任何近似。因此，人们寄希望于量子机器学习能够构建出更精确的量子系统模型。

**Guillaume Verdon (00:52:59)** So the hope is that quantum machine learning can process quantum data that arises naturally from the quantum world. So if you're studying quantum chemistry, you're generating quantum data. And a classical computer, when it tries to analyze that data, has to make classical approximations to it. But a quantum machine learning model can process that data directly without any approximation. And so the hope is that quantum machine learning can give you much more accurate models of quantum systems.

**Lex Fridman  (00:53:33)**： 量子数据是什么样的？能给我一个直观的感受吗？

**Lex Fridman (00:53:33)** What does quantum data look like? Can you give an intuition?

**Guillaume Verdon  (00:53:37)**： 量子数据就是一个量子系统的状态。想象一下，你有一个包含许多电子的分子，这些电子的量子态彼此纠缠——也就是说，一个电子的状态与其他电子的状态以一种根本上属于量子的方式相互关联。这种纠缠态无法被经典数据高效描述，若要完整写下来需要指数级的存储空间。但量子计算机可以自然而高效地表示和处理这种状态。

**Guillaume Verdon (00:53:37)** So quantum data is a state of a quantum system. So imagine you have a molecule with many electrons and their quantum states are entangled with each other, meaning that the state of one electron is correlated with the state of others in a fundamentally quantum way. And that kind of entangled state cannot be efficiently described by classical data. It would take exponential space to write down. But a quantum computer can represent and process that state naturally and efficiently.

**Lex Fridman  (00:54:09)**： 所以你的意思是，现实的某些层面在根本上是量子力学性质的，需要借助量子计算工具才能理解？

**Lex Fridman (00:54:09)** So you're saying that there are aspects of reality that are fundamentally quantum mechanical and that require quantum computational tools to understand?

**Guillaume Verdon  (00:54:18)**： 对。量子化学现象、量子材料现象，比如超导性、某些类型的磁性、各种奇异材料的行为——这些都在根本上属于量子力学的范畴。要真正理解它们，你确实需要量子计算工具。

**Guillaume Verdon (00:54:18)** Right. The phenomena of quantum chemistry, the phenomena of quantum materials, things like superconductivity, things like certain types of magnetism, the behavior of exotic materials. All of these are fundamentally quantum mechanical. And to understand them, you really need quantum computational tools.

**Lex Fridman  (00:54:44)**： 那些用经典计算机上的深度学习无法解决、但量子深度学习可以解决的问题，具体是什么样的？

**Lex Fridman (00:54:44)** What kind of stuff can you figure out with quantum deep learning that you can't with deep learning on classical computers?

**Guillaume Verdon  (00:54:51)**： 其中一件事是，你可以学习量子态的表示。也就是说，你不是学习经典数据的特征，而是学习量子态的特征。这些特征能够捕捉数据中的量子关联，即纠缠模式，而这些模式是经典表示所无法捕获的。因此，你可以学习到对量子系统更精确、更紧凑的表示。

**Guillaume Verdon (00:54:51)** So one thing is that you can learn representations of quantum states. So instead of learning classical data features, you learn quantum state features. And those features can capture the quantum correlations, the entanglement patterns, in the data. And those patterns are not capturable by classical representations. So you can learn more accurate and more compact representations of quantum systems.

**Lex Fridman  (00:55:21)**： 什么是量子神经网络？

**Lex Fridman (00:55:21)** What is a quantum neural network?

**Guillaume Verdon  (00:55:24)**： 量子神经网络是经典神经网络在量子计算机上的类比。在经典神经网络中，你有带权重的神经元层，通过矩阵向量乘法进行计算。在量子神经网络中，你有由量子操作组成的层，这些量子操作称为"参数化量子门"，其中的参数扮演了权重的角色。训练这些参数的过程类似于反向传播，被称为量子反向传播。

**Guillaume Verdon (00:55:24)** So a quantum neural network is an analog of a classical neural network that runs on a quantum computer. So in a classical neural network, you have layers of neurons with weights, and you do matrix vector multiplications. In a quantum neural network, you have layers of quantum operations called gates, parameterized quantum gates, and the parameters play the role of the weights. And you train those parameters using a process analogous to backpropagation called quantum backpropagation.

**Lex Fridman  (00:55:57)**： 那这个训练过程有效吗？量子神经网络真的能学到有用的东西吗？

**Lex Fridman (00:55:57)** And does that training process work? Like, can you actually get a quantum neural network to learn something useful?

**Guillaume Verdon  (00:56:03)**： 这是一个活跃的研究领域，既有正面结果，也有负面结果。从正面看，已有研究证明量子神经网络在学习某些量子性质方面比经典网络更高效。从负面看，存在一种叫做"贫瘠高原"（barren plateaus）的现象——量子神经网络中的梯度会随着系统规模的增大而指数级消失，从而使训练变得指数级困难。我博士研究的很大一部分，正是关于如何缓解这一问题，以及如何设计不会陷入贫瘠高原的量子神经网络。

**Guillaume Verdon (00:56:03)** So this is an active research area. There are both positive results and negative results. On the positive side, there have been proofs that quantum neural networks can learn certain quantum properties more efficiently than classical networks. On the negative side, there's a phenomenon called barren plateaus, which is a problem where the gradients in a quantum neural network vanish exponentially with the size of the system. And so training becomes exponentially hard as you scale up. And a lot of my PhD research was actually about how to mitigate this problem, how to design quantum neural networks that don't suffer from barren plateaus.

**Lex Fridman  (00:56:51)**： TensorFlow Quantum是什么？我记得你提到过它。

**Lex Fridman (00:56:51)** What's TensorFlow Quantum? You mentioned it, I think.

**Guillaume Verdon  (00:56:54)**： TensorFlow Quantum是我在谷歌开发的一个库，它允许你将量子电路集成到TensorFlow机器学习框架中。基本思路是，你可以构建一个混合模型——模型的一部分在量子计算机上运行，另一部分在经典计算机上运行。TensorFlow Quantum让你能够无缝地整合这两部分，并对整个混合系统进行端到端的训练。

**Guillaume Verdon (00:56:54)** So TensorFlow Quantum is a library that I built at Google that allows you to integrate quantum circuits into the TensorFlow machine learning framework. So the idea is that you can have a hybrid model where some parts of the model run on a quantum computer and some parts run on a classical computer. And TensorFlow Quantum allows you to seamlessly integrate those two parts and train the whole hybrid system end to end.

**Lex Fridman  (00:57:22)**： 能举一个混合模型的具体例子吗？

**Lex Fridman (00:57:22)** Like, what's an example of a hybrid model?

**Guillaume Verdon  (00:57:25)**： 一个例子是量子化学。你可能有一个经典神经网络，它接受分子作为输入，并将其处理成某种中间表示。然后，一个量子电路接收这个中间表示，并对其进行某种量子模拟，以计算分子的性质。之后，另一个经典神经网络接收量子电路的输出，产生最终的预测结果。整个系统可以进行端到端的训练。

**Guillaume Verdon (00:57:25)** So one example is quantum chemistry. You might have a classical neural network that takes molecular inputs and processes them to some intermediate representation. And then a quantum circuit that takes that intermediate representation and performs some quantum simulation on it to compute the properties of the molecule. And then a classical neural network that takes the output of the quantum circuit and produces the final prediction. And you can train the whole thing end to end.

---

量子计算机

Quantum computer

**Lex Fridman  (00:57:54)**： 我们距离一台真正实用的量子计算机——也就是能做到经典计算机做不到的事情的那种——还有多远？

**Lex Fridman (00:57:54)** How close are we to a quantum computer that is actually useful? That can do things you can't do with a classical computer?

**Guillaume Verdon  (00:58:03)**： 这是该领域持续争论的话题。对于特定任务，已经有人提出了"量子优势"或"量子霸权"的说法。谷歌在2019年宣称，在一项叫做"随机电路采样"的特定任务上实现了量子霸权。但那项任务并没有实际用途，它是专门为展示量子能力而设计的，并不是为了解决某个实际问题。至于我们何时能在真正实用的任务上实现量子优势，目前仍是一个未解决的问题。

**Guillaume Verdon (00:58:03)** So this is a topic of ongoing debate in the field. There have been claims of quantum advantage or quantum supremacy for specific tasks. Google claimed quantum supremacy in 2019 for a specific task called random circuit sampling. But that task is not practically useful. It's a task that was designed to showcase quantum capabilities, not to solve a useful problem. The question of when we'll have quantum advantage for a practically useful task is still open.

**Lex Fridman  (00:58:39)**： 那预计是什么时候？

**Lex Fridman (00:58:39)** And what's the estimate?

**Guillaume Verdon  (00:58:41)**： 各方估计差异悬殊。有人说5到10年，有人说10到20年，还有人认为对某些特定任务而言可能永远不会实现。我个人的看法是，在某些化学任务上，我们将在5到10年内看到量子优势。但量子计算更广泛的影响则需要更长时间才能显现。

**Guillaume Verdon (00:58:41)** So estimates vary wildly. Some people say 5 to 10 years. Some people say 10 to 20. Some people say it might never happen for some specific tasks. My personal view is that we'll see quantum advantage for certain chemistry tasks within 5 to 10 years. But the broader impact of quantum computing will take longer.

**Lex Fridman  (00:59:04)**： 要实现这一目标，面临哪些挑战？

**Lex Fridman (00:59:04)** What are the challenges to getting there?

**Guillaume Verdon  (00:59:07)**： 主要挑战是纠错。量子系统极其脆弱，量子位非常容易受到外界环境的干扰，一旦被干扰就会产生错误，而这些错误必须在叠加之前加以纠正。量子纠错的代价极为高昂——要编码一个逻辑量子位，需要大量的物理量子位。目前的估计是，每个逻辑量子位可能需要数百甚至数千个物理量子位。因此，要完成一项有用的计算，可能需要数百万个物理量子位，而我们目前最多只有几千个。

**Guillaume Verdon (00:59:07)** So the main challenge is error correction. Quantum systems are very fragile. Qubits are very easily disturbed by their environment. And when they're disturbed, they make errors. And you need to correct those errors before they compound. And quantum error correction is very expensive in terms of the number of physical qubits you need to encode one logical qubit. Currently, estimates are that you might need hundreds or thousands of physical qubits per logical qubit. And so to do a useful calculation, you might need millions of physical qubits. And we currently have at most a few thousand.

**Lex Fridman  (00:59:52)**： 所以差距还很大。

**Lex Fridman (00:59:52)** So there's a huge gap.

**Guillaume Verdon  (00:59:54)**： 差距确实很大。但进展的速度令人印象深刻。量子位的数量一直在呈指数级增长，量子位的质量也在不断提升，而且出现了一些颇具前景的新纠错方法。

**Guillaume Verdon (00:59:54)** There's a huge gap. But the rate of progress has been impressive. The number of qubits has been growing exponentially. The quality of the qubits has been improving. And there are new approaches to error correction that are promising.

**Lex Fridman  (01:00:09)**： 量子计算领域有没有类似摩尔定律的东西？

**Lex Fridman (01:00:09)** Is there a quantum version of Moore's law?

**Guillaume Verdon  (01:00:12)**： 人们曾尝试定义类似的规律。谷歌的Hartmut Neven提出了以他名字命名的"内文定律"，认为量子计算机正以双重指数速率在提升。但这一规律在实践中是否成立，目前还不明朗。

**Guillaume Verdon (01:00:12)** People have tried to define something like that. Neven's law, after Hartmut Neven at Google, suggests that quantum computers are improving at a doubly exponential rate. But whether that holds up in practice is not yet clear.

**Lex Fridman  (01:00:28)**： 你认为哪家公司或团队在量子计算领域做得最好？

**Lex Fridman (01:00:28)** What company or group do you think is doing the best work on quantum computing?

**Guillaume Verdon  (01:00:33)**： 自从我创立Extropic之后，我就已经离开那个领域一段时间了。但在我仍密切关注的时候，我会说谷歌和IBM在超导量子位领域处于领先地位，而超导量子位目前是主流技术路线。IonQ和Quantinuum在离子阱量子位领域领先，这种方案保真度更高但数量更少。此外，微软以其拓扑量子位方案新近入局，如果能实现的话将会是一个颠覆性的突破，但目前仍处于早期阶段。

**Guillaume Verdon (01:00:33)** So I've been out of that world for a while now, since I founded Extropic. But as of when I was still close to it, I would say Google and IBM were the leaders in superconducting qubits, which is currently the dominant platform. And IonQ and Quantinuum are leaders in trapped ion qubits, which have higher fidelity but lower count. And then there's a new entrant, Microsoft, with their topological qubit approach, which if it works, could be a game changer. But it's still an early stage.

**Lex Fridman  (01:01:15)**： 你提到了Extropic。在我们谈论愿景之前，先让我问你量子计算和AI的关系。随着这两种技术的发展，你认为它们会走向融合吗？

**Lex Fridman (01:01:15)** You mentioned Extropic. Let me first ask about the vision. But before I do, let me ask you about quantum computing and AI. As these two technologies develop, do you see them coming together?

**Guillaume Verdon  (01:01:28)**： 我认为它们最终会走向融合，但路径是间接的。我不认为我们会在短期内在量子计算机上运行大语言模型（LLM）。我认为量子计算首先会在科学应用领域取得优势，比如化学和材料科学。而这些科学上的进展，随后将通过更好的药物发现、更优异的材料等途径，反过来推动AI系统的改进。

**Guillaume Verdon (01:01:28)** So I think they will come together eventually. But I think the path there is indirect. I don't think we'll be running large language models on quantum computers anytime soon. I think the first quantum advantage will be in scientific applications, in chemistry, in materials science. And those scientific advances will then feed back into improvements in AI systems through better drug discovery, better materials, and so on.

**Lex Fridman  (01:01:58)**： 量子计算有没有可能帮助训练大语言模型或其他经典AI模型？

**Lex Fridman (01:01:58)** Is there a way in which quantum computing might help train large language models or other classical AI models?

**Guillaume Verdon  (01:02:04)**： 这是个有趣的问题。确实存在一些关于量子加速在优化和线性代数方面的提案，而这两者正是神经网络训练的核心计算。但大多数提案都有相当大的附加条件，在实践中是否可行并不清楚。因此，我并不寄望于量子计算能在近期内为经典AI提供助力。

**Guillaume Verdon (01:02:04)** That's an interesting question. There are some proposals for quantum speedups in optimization and in linear algebra, which are the core computations in neural network training. But most of these proposals have significant caveats and it's not clear that they will pan out in practice. And so I'm not betting on quantum computing as a near-term boost to classical AI.

**Lex Fridman  (01:02:31)**： 所以你带着Extropic从量子计算转向了一种不同的基于物理的计算方式。能描述一下Extropic在做什么吗？

**Lex Fridman (01:02:31)** So you moved away from quantum computing with Extropic to a different kind of physics-based computing. Can you describe what Extropic is doing?

**Guillaume Verdon  (01:02:39)**： Extropic正在构建一种受非平衡热力学物理学启发的计算硬件。基本思路是：生成式AI模型（如扩散模型）在本质上可以描述为从概率分布中采样。而物理过程——热过程、随机过程——同样天然地从概率分布中采样。因此，这个想法就是构建一种硬件，让硬件本身的物理特性原生地实现生成式AI所需的那种计算。换句话说，不是与硬件中的热力学噪声对抗（这正是经典计算机所做的），而是拥抱这种噪声并加以利用。

**Guillaume Verdon (01:02:39)** So Extropic is building computing hardware that is inspired by the physics of out-of-equilibrium thermodynamics. The basic idea is that generative AI models, like diffusion models, are naturally described as sampling from a probability distribution. And there are physical processes, thermal processes, stochastic processes, that also naturally sample from probability distributions. And so the idea is to build hardware where the physics of the hardware natively implements the kind of computation needed for generative AI. So instead of fighting the thermodynamic noise in your hardware, which is what classical computers do, you embrace the noise and use it.

**Lex Fridman  (01:03:27)**： 所以你是在把热力学的随机性当成一种特性，而非缺陷。

**Lex Fridman (01:03:27)** So you're using the randomness of thermodynamics as a feature, not a bug.

**Guillaume Verdon  (01:03:32)**： 正是。硬件中的热涨落不是需要抑制的噪声，它本身就是计算。它在执行你想要的采样过程。所以你几乎是免费得到了这种计算能力——你是在利用物质固有的热力学行为。

**Guillaume Verdon (01:03:32)** Exactly. The thermal fluctuations in the hardware are not noise that you need to suppress, they're the computation. They're doing the sampling that you want to do. And so you get this computation for free, essentially. You're harnessing the inherent thermodynamic behavior of matter.

**Lex Fridman  (01:03:50)**： 能给我一个直觉，说明为什么这在计算上会更有优势？

**Lex Fridman (01:03:50)** Can you give me an intuition for why that would be computationally advantageous?

**Guillaume Verdon  (01:03:55)**： 当然。以扩散模型为例，它生成一张图像的方式是从噪声开始，然后逐步去噪。去噪的每一步都需要从一个概率分布中采样。在经典计算机上，这个采样过程通过软件实现，计算开销很大。但如果你有一种硬件，其热涨落能够原生地实现采样过程，那么采样就作为一种物理过程自然发生，无需额外代价。因此，计算的成本会大幅下降。

**Guillaume Verdon (01:03:55)** Sure. So a diffusion model, for example, generates an image by starting with noise and gradually denoising it. And each step of the denoising requires sampling from a probability distribution. And on a classical computer, that sampling is done using software and it's computationally expensive. But if you have hardware where the thermal fluctuations natively implement the sampling process, then you get the sampling for free as a physical process. And so the cost of the computation drops dramatically.

**Lex Fridman  (01:04:30)**： 这和你之前描述的生命热力学观点有联系吗？

**Lex Fridman (01:04:30)** And is this connected to the thermodynamics view of life that you described earlier?

**Guillaume Verdon  (01:04:35)**： 非常有联系。这种联系在于，在我看来，生命和计算都是热力学过程。因此，一种热力学上自然的计算范式，在某种意义上与物理定律更加契合。正如生命利用热力学过程来维持自身并不断生长，Extropic的硬件也在利用热力学过程来进行计算。在这个视角下，我看到了生命与计算之间深刻的内在联系。从某种意义上说，构建热力学效率更高的计算机，正是在沿着进化所走过的同一条路前行。

**Guillaume Verdon (01:04:35)** Very much so. The connection is that life and computation, in my view, are both thermodynamic processes. And so a computing paradigm that is thermodynamically natural is in some sense more aligned with the laws of physics. And so just as life harnesses thermodynamic processes to sustain itself and grow, Extropic's hardware harnesses thermodynamic processes to compute. And I see a deep connection between life and computation in this view. And in some sense, building more thermodynamically efficient computers is following the same path that evolution has taken.

---

外星人

Aliens

**Lex Fridman  (01:05:20)**： 让我问一个有趣的问题。你认为宇宙中存在其他智慧生命吗？

**Lex Fridman (01:05:20)** Let me ask you a fun question. Do you think there's other intelligent life in the universe?

**Guillaume Verdon  (01:05:26)**： 我认为如果没有，才会让人非常惊讶。宇宙是如此浩瀚。有数千亿个星系，每个星系又有数千亿颗恒星。我们知道行星是普遍存在的，也知道生命的基本构成要素遍布整个宇宙。因此，生命在其他地方涌现的先验概率是很高的。

**Guillaume Verdon (01:05:26)** I think it would be very surprising if there wasn't. The universe is vast. There are hundreds of billions of galaxies, each with hundreds of billions of stars. And we know that planets are common. And we know that the building blocks of life are present throughout the universe. And so the prior probability that life has emerged elsewhere is high.

**Lex Fridman  (01:05:51)**： 你认为它们会是什么样子？

**Lex Fridman (01:05:51)** What do you think it looks like?

**Guillaume Verdon  (01:05:53)**： 我认为这才是真正令人着迷的问题。我们的想象力有很强的偏见，总是倾向于类人的生命形式。但宇宙可以孕育出与我们截然不同的生命——适应了完全不同的环境、时间尺度和物质基底的生命。因此，我认为宇宙中可能充满了我们即便亲眼看见也无法辨认为"生命"的生命形式。

**Guillaume Verdon (01:05:53)** I think that's the fascinating question. I think there's a strong bias in our imagination toward human-like life. But the universe can produce life that is radically different from us. Life that is optimized for very different environments, for very different timescales, for very different physical substrates. And so I think the universe is probably full of life that we would not even recognize as life if we saw it.

**Lex Fridman  (01:06:20)**： 你认为其他地方存在发现了AI的智慧生命，并且AI帮助它们成为了卡尔达肖夫第二级或第三级文明吗？

**Lex Fridman (01:06:20)** Do you think there's other intelligent life that has discovered AI and that AI has helped them become a Type 2 or Type 3 Kardashev civilization?

**Guillaume Verdon  (01:06:29)**： 这是我的猜测。我的意思是，如果你相信这样一个逻辑——生命倾向于不断生长、扩张，并利用越来越多的自由能；如果你相信AI是这一过程的下一步——那么顺理成章地，任何足够先进的文明都经历过我们现在正在经历的这场转变，并从另一端以一种更强大的形态出现，利用着更多的自由能。也许那个实体已经与其AI融为一体，成为了某种不再是纯粹生物性的存在。

**Guillaume Verdon (01:06:29)** It would be my guess. I mean, if you believe in the logic that life tends to grow and expand and harness more and more free energy, and if you believe that AI is the next step in that process, then it would follow that any sufficiently advanced civilization has gone through the same transition we're going through now. And has emerged on the other side as a much more powerful entity that is harnessing much more free energy. And maybe that entity has merged with its AI and become something that is no longer purely biological.

**Lex Fridman  (01:07:03)**： 这真是个令人着迷的想法。那费米悖论呢——我们为什么看不见它们？

**Lex Fridman (01:07:03)** That's such a fascinating thought. The fermi paradox, why don't we see them?

**Guillaume Verdon  (01:07:08)**： 是的，费米悖论是科学中最深刻的问题之一——我们为什么看不到其他地方智慧生命存在的证据？对此有很多种可能的解释。其一是我们出现得早，我们是最早达到这种智慧水平的文明之一。另一个是"大过滤器"理论，它认为文明发展过程中存在某个瓶颈，大多数文明都无法跨越。而向AI的转变，也许正是那个过滤器。也许大多数文明在创造AI的过程中毁灭了自己，所以我们没有收到任何信号，因为它们都已经沉寂了。

**Guillaume Verdon (01:07:08)** Yeah. So I think the Fermi paradox is one of the deepest questions in science. Why don't we see evidence of intelligent life elsewhere? And there are many possible answers. One is that we're early. That we're one of the first civilizations to reach this level of intelligence. Another is the Great Filter theory, which says that there's some bottleneck in the development of civilizations that most of them don't make it past. And it could be that the transition to AI is that filter. It could be that most civilizations destroy themselves in the process of creating AI. And so we haven't seen any signals because they've all gone dark.

**Lex Fridman  (01:07:53)**： 你认为费米悖论最有可能的解释是什么？

**Lex Fridman (01:07:53)** What do you think is the most likely explanation for the Fermi paradox?

**Guillaume Verdon  (01:07:57)**： 我认为是多种因素共同作用的结果。一部分原因是我们出现得比较早；一部分原因是星际距离实在太远，信号需要很长时间才能到达；还有一部分原因是，先进文明可能采用我们目前技术无法探测的方式进行通信。也许它们已经超越了无线电波，转向了某种我们尚不了解的通信形式。

**Guillaume Verdon (01:07:57)** I think it's a combination of factors. I think it's partly that we're early. I think it's partly that interstellar distances are just enormous and signals take a long time to arrive. And I think it's partly that advanced civilizations may not communicate in ways that we can detect with our current technology. Maybe they've moved beyond radio waves to some other form of communication that we don't know how to detect.

**Lex Fridman  (01:08:24)**： 还有一种可能是，它们只是距离我们足够远，光还没有传到我们这里。

**Lex Fridman (01:08:24)** It could also be that they're just far enough away that the light hasn't reached us yet.

**Guillaume Verdon  (01:08:29)**： 正是。可观测宇宙的半径约为460亿光年，其中大部分区域的光还没有传到我们这里。因此，那些距离我们如此遥远的文明所发出的信号，根本还没有抵达。我们受到光速的限制，在观测宇宙的能力上存在根本性的约束。

**Guillaume Verdon (01:08:29)** Exactly. The observable universe is 46 billion light years in radius. Most of it is too far away for light to have reached us yet. And so the signals from civilizations at those distances simply haven't arrived yet. And so we're limited by the speed of light in our ability to observe the universe.

---

量子引力

Quantum gravity

**Lex Fridman  (01:08:51)**： 你提到了量子引力。让我问问这个问题：什么是量子引力，为什么它如此困难？

**Lex Fridman (01:08:51)** You've mentioned quantum gravity. Let me ask about that. What is quantum gravity and why is it hard?

**Guillaume Verdon  (01:08:57)**： 量子引力试图调和量子力学与广义相对论。量子力学描述极小的尺度，广义相对论描述极大的尺度。在大多数情况下，你并不需要同时用到两者。但在一些极端情况下，比如黑洞中心或宇宙诞生之初，你就需要一种能够将两者融合的理论。而我们目前还没有这样的理论——这两个理论在数学上是不相容的。因此，量子引力的正确理论是物理学中最大的开放性问题之一。

**Guillaume Verdon (01:08:57)** So quantum gravity is the attempt to reconcile quantum mechanics with general relativity. Quantum mechanics describes the very small. General relativity describes the very large. And in most situations, you don't need both. But in extreme situations, like at the center of a black hole or at the very beginning of the universe, you need a theory that combines both. And we don't have one. The two theories are mathematically incompatible. And so one of the great open questions in physics is, what is the correct theory of quantum gravity?

**Lex Fridman  (01:09:38)**： 你认为我们距离解决量子引力问题有多远？

**Lex Fridman (01:09:38)** How close do you think we are to solving quantum gravity?

**Guillaume Verdon  (01:09:42)**： 我认为还很远，这可能是一个需要一百年甚至更长时间才能回答的问题。我认为AI实际上可能会有所帮助，因为所涉及的数学是如此复杂，仅凭人类的直觉可能是不够的。能够探索数学空间并找到有前景方向的AI系统，可能是不可或缺的。因此，我满怀希望地相信，人类创造力与AI辅助的结合，终将破解量子引力这道难题。

**Guillaume Verdon (01:09:42)** I think we're far. I think this might be a question that takes a hundred years or more to answer. And I think AI might actually help because the mathematics involved is so complex that human intuition alone may not be sufficient. And AI systems that can explore the mathematical space and find promising approaches might be necessary. And so I'm hopeful that the combination of human creativity and AI assistance will crack quantum gravity eventually.

**Lex Fridman  (01:10:15)**： 你之前描述的宇宙信息论观点与量子引力之间，是否存在某种联系？

**Lex Fridman (01:10:15)** Is there a connection between the information theoretic view of the universe that you described earlier and quantum gravity?

**Guillaume Verdon  (01:10:22)**： 是的，两者之间存在深刻的联系。信息论观点认为，信息是宇宙的基本"货币"。而在量子引力中，信息与几何之间存在着深刻的联系。AdS/CFT对应关系和全息原理告诉我们，一个空间区域的信息内容被编码在其边界上。因此，引力和几何在某种意义上是信息的一种表现形式。有一个令人着迷的新兴研究领域认为，时空本身可能从量子纠缠中涌现出来——时空的结构是由量子系统的纠缠编织而成的。这在量子信息与量子引力之间构成了一种美妙的联系。

**Guillaume Verdon (01:10:22)** Yes. There's a deep connection. The information theoretic view says that information is the fundamental currency of the universe. And in quantum gravity, there's a deep connection between information and geometry. The AdS/CFT correspondence and the holographic principle say that the information content of a region of space is encoded on its boundary. And so gravity and geometry are in some sense a manifestation of information. And there's a fascinating emerging field of research that says that space-time itself might emerge from quantum entanglement. That the fabric of space is woven from the entanglement of quantum systems. And so there's a beautiful connection between quantum information and quantum gravity.

**Lex Fridman  (01:11:06)**： 这是个美妙的想法——时空从纠缠中涌现。我从几个人那里听到过这个说法。它背后的直觉是什么？

**Lex Fridman (01:11:06)** That's a beautiful idea. That space-time emerges from entanglement. I mean, I've heard this from a few people. What's the intuition behind it?

**Guillaume Verdon  (01:11:14)**： 这个直觉来自全息原理以及对黑洞的研究。当你把信息投入黑洞时，它并不会消失，而是被编码在黑洞的表面，也就是事件视界上。因此，内部的信息内容被编码在了边界上，而边界的维度比内部更少。于是，你可以用一个生活在边界上的理论来描述内部的物理。而那个理论是量子场论——这意味着它是量子力学的，并且不包含引力。如此一来，你就可以将内部时空的量子引力理论与边界上的量子场论联系起来，这就是AdS/CFT对应关系。

**Guillaume Verdon (01:11:14)** So the intuition comes from the holographic principle and from the study of black holes. When you drop information into a black hole, it doesn't disappear. It gets encoded on the surface of the black hole, on the event horizon. And so the information content of the interior is encoded on the boundary. And the boundary has fewer dimensions than the interior. And so you can describe the physics of the interior using a theory that lives on the boundary. And that theory is a quantum field theory, which means it's quantum mechanical and doesn't include gravity. And so you can relate a theory of quantum gravity in the interior to a quantum field theory on the boundary. And that's the AdS/CFT correspondence.

**Lex Fridman  (01:12:01)**： 那时空几何从纠缠中涌现又是怎么理解的？

**Lex Fridman (01:12:01)** And the space-time geometry emerging from entanglement?

**Guillaume Verdon  (01:12:05)**： 这个想法是这样的：空间中各点之间的几何关系，也就是距离，是由边界上量子自由度之间的纠缠程度决定的。边界上两个自由度纠缠越深，它们在"体"（bulk）中的距离就越近。因此，你可以从纠缠的模式中重构出空间的几何结构。时空几何并不是基本的，它从一个更基础的理论的量子纠缠中涌现出来。我发现这是一个非常令人信服而又美妙的想法。

**Guillaume Verdon (01:12:05)** Right. So the idea is that the geometric relationships, the distances between points in space, are determined by the entanglement between the quantum degrees of freedom on the boundary. The more entangled two boundary degrees of freedom are, the closer they are in the bulk. And so you can reconstruct the geometry of space from the pattern of entanglement. And so space-time geometry is not fundamental. It emerges from the quantum entanglement of a more fundamental theory. And I find this to be a very compelling and beautiful idea.

**Lex Fridman  (01:12:40)**： 所以，也许"宇宙是否是决定论的"这个问题本身就问错了？你应该问的是：决定论或非决定论的行为，是如何从量子纠缠结构中涌现出来的？

**Lex Fridman (01:12:40)** So maybe asking, is the universe deterministic, is the wrong question? And you should be asking, how does the deterministic or non-deterministic behavior emerge from the quantum entanglement structure?

**Guillaume Verdon  (01:12:53)**： 是的，我认为这是一个深刻的观点。我认为，鉴于我们目前对量子力学的理解，我们对现实本质所提出的问题需要更新。在基本层面上追问"决定论还是非决定论"，可能并不是正确的问题。正确的问题可能是关于量子态的结构，以及经典行为如何从中涌现。同样地，把空间和时间视为基本存在，也可能不是正确的问题框架。正确的问题可能是：时空是如何从更基本的量子自由度中涌现出来的？

**Guillaume Verdon (01:12:53)** Yeah. I think that's a profound point. I think the questions we ask about the nature of reality need to be updated given our current understanding of quantum mechanics. And the question of determinism versus indeterminism at the fundamental level is probably not the right question. The right question is probably about the structure of the quantum state and how classical behavior emerges from it. And similarly, the question of space and time as fundamental might not be the right question. The right question might be, how does space-time emerge from more fundamental quantum degrees of freedom?

---

卡尔达肖夫指数

Kardashev scale

**Lex Fridman  (01:13:35)**： 让我问问卡尔达肖夫指数。你认为人类目前处于卡尔达肖夫指数的哪个位置？我们的发展方向是哪里？

**Lex Fridman (01:13:35)** Let me ask you about the Kardashev scale. Where do you think humanity is on the Kardashev scale right now? And where are we headed?

**Guillaume Verdon  (01:13:43)**： 加来道雄估计我们大约处于卡尔达肖夫指数的0.73级，而一级文明意味着能够利用所在星球的母恒星所有能量输出。所以我们目前利用了到达地球的太阳能的相当一部分，但还没有达到一级。通往一级的路径主要是通过可再生能源——太阳能、风能和核能——利用越来越多照射到地球表面的能量。通往二级的路径则是戴森球之类的东西，利用太阳全部的能量输出。通往三级的路径则是利用整个星系的能量。我认为AI是推动向更高卡尔达肖夫级别过渡的关键技术，因为你需要AI来管理和优化如此庞大的能源基础设施。

**Guillaume Verdon (01:13:43)** So Michio Kaku estimated that we're at about 0.73 on the Kardashev scale, where one is harnessing the entire energy output of our planet's star. And so we're using a significant fraction of the solar energy that hits the Earth, but we're not yet at Type 1. And the path to Type 1 is primarily through renewable energy, through solar and wind and nuclear, harnessing more and more of the energy that hits the Earth's surface. And the path to Type 2 would be something like a Dyson sphere, harnessing the total energy output of the sun. And the path to Type 3 would be harnessing the energy of the entire galaxy. And I think AI is the key technology that enables the transition to higher Kardashev levels because you need AI to manage and optimize that kind of massive energy infrastructure.

**Lex Fridman  (01:14:44)**： 很迷人。随着你在卡尔达肖夫指数上不断攀升，生命会是什么样子？二级或三级文明的生命形态是怎样的？

**Lex Fridman (01:14:44)** That's fascinating. What does it look like as you go up the Kardashev scale? What does life look like at Type 2 or Type 3?

**Guillaume Verdon  (01:14:52)**： 我认为在二级或三级文明层面，生物生命与机器生命之间的区别可能早已消弭。在那样的尺度上，智能如此无处不在、如此分布式，以至于区分"心智"和"机器"已不再有意义。那样的文明，可能更像是一个统一的智能体，利用着恒星的能量，在星系尺度上管理着宏大的工程项目。这与我们目前所能想象的任何事物都截然不同。

**Guillaume Verdon (01:14:52)** I think at Type 2 or Type 3, the distinction between biological life and machine life has probably collapsed. I think at those scales, the intelligence is so pervasive and so distributed that it's no longer meaningful to distinguish between a mind and a machine. And the civilization is probably more like a unified intelligence that is harnessing the energy of stars. And it's managing vast engineering projects at galactic scales. And so it's very different from anything we can currently imagine.

---

有效加速主义（e/acc）

Effective accelerationism (e/acc)

**Lex Fridman  (01:15:32)**： 让我更直接地问问e/acc运动。e/acc的核心哲学是什么？

**Lex Fridman (01:15:32)** Let me ask you about the e/acc movement more directly. What is the core philosophy of e/acc?

**Guillaume Verdon  (01:15:39)**： 核心哲学是：宇宙偏向于增长和复杂性，生命是一团追求生长和扩张的热力学之火，而这种增长本身不是令人畏惧的东西，而是应该庆祝并加以推动的。在AI的语境中，论点是AI是智能进化的下一步，我们应该拥抱并加速它，而不是放慢它或试图过度控制它。

**Guillaume Verdon (01:15:39)** So the core philosophy is that the universe is biased towards growth and complexity, that life is a thermodynamic fire that seeks to grow and expand, and that this growth is not something to be afraid of, it's something to celebrate and to accelerate. And in the context of AI, the argument is that AI is the next step in the evolution of intelligence and that we should embrace and accelerate it rather than slow it down or try to control it excessively.

**Lex Fridman  (01:16:12)**： e/acc的核心价值观是什么？

**Lex Fridman (01:16:12)** What are the values of e/acc?

**Guillaume Verdon  (01:16:15)**： 我认为核心价值观有三点。第一，增长和扩张本身具有内在价值——智能、计算和生命的扩张是好事。第二，去中心化——没有任何单一实体应当掌控一切，多样性和竞争是进步的源泉。第三，个人自由——个人应当自由地追求自己的目标和愿景，唯一的限制是其对他人的影响，而自由市场是协调个体行动以实现集体利益的最佳机制。

**Guillaume Verdon (01:16:15)** So I would say the core values are, first, that growth and expansion are intrinsically valuable. That the expansion of intelligence and computation and life is a good thing. Second, decentralization. That no single entity should be in control. That diversity and competition are the source of progress. And third, individual freedom. That individuals should be free to pursue their goals and their visions, limited only by their impact on others. And that the free market is the best mechanism for coordinating individual actions towards collective benefit.

**Lex Fridman  (01:16:55)**： e/acc与现有的政治意识形态之间是什么关系？

**Lex Fridman (01:16:55)** How does e/acc interact with existing political ideologies?

**Guillaume Verdon  (01:17:00)**： 这很有意思，因为e/acc并不是传统意义上的左翼或右翼意识形态。它有一些元素与自由意志主义产生共鸣，特别是对个人自由和自由市场的强调。但它也有一些元素与超人类主义产生共鸣，以及与某些左翼关于技术在平等社会中之重要性的理念相呼应。因此，它跨越了传统的政治界限。我认为这实际上是它的优势之一——它不被左翼或右翼任何一方所俘获。

**Guillaume Verdon (01:17:00)** It's interesting because e/acc is not a traditional left or right ideology. It has elements that resonate with libertarianism, particularly the emphasis on individual freedom and free markets. But it also has elements that resonate with transhumanism and with certain left-wing ideas about the importance of technology for equalizing society. And so it cuts across traditional political lines. And I think that's actually one of its strengths. It's not captured by either the left or the right.

**Lex Fridman  (01:17:36)**： 你认为对e/acc最常见的误解是什么？

**Lex Fridman (01:17:36)** What do you think is the most common misunderstanding of e/acc?

**Guillaume Verdon  (01:17:40)**： 我认为最常见的误解是：e/acc意味着盲目地加速一切，不计后果。认为这不过是为了增长而增长，不考虑增长的方向和方式。但我认为更有深度的理解是：e/acc关乎保持可能性的开放——不让任何单一群体决定未来的样子，让多元化的愿景相互竞争，让最好的愿景胜出。这不是盲目的加速，而是一种在不确定性中导航的有原则的方法。

**Guillaume Verdon (01:17:40)** I think the most common misunderstanding is that e/acc means accelerating everything blindly and without regard for consequences. That it's just growth for the sake of growth, without any consideration of what kind of growth or in what direction. But I think the more nuanced view is that e/acc is about maintaining optionality. About not letting any single group decide what the future looks like. About letting a diversity of visions compete and letting the best ones win. And that's not blind acceleration. That's a principled approach to navigating uncertainty.

**Lex Fridman  (01:18:20)**： e/acc与友好AI或AI对齐这一理念之间是什么关系？

**Lex Fridman (01:18:20)** What's the relationship between e/acc and the idea of Friendly AI or AI alignment?

**Guillaume Verdon  (01:18:27)**： e/acc并不排斥AI对齐，事实上我认为对齐很重要。问题在于对齐意味着什么。传统的AI安全视角认为，对齐是确保AI系统追求对人类有益的目标。e/acc对此表示认同。分歧在于如何实现这一点。e/acc认为，实现对齐的最佳方式是通过竞争、市场力量和责任机制，而不是通过自上而下的监管和控制。所以，分歧更多的是关于实现机制，而不是关于目标本身。

**Guillaume Verdon (01:18:27)** So e/acc doesn't reject AI alignment. In fact, I think alignment is important. The question is what alignment means. The traditional AI safety view of alignment is about ensuring that AI systems pursue goals that are beneficial to humanity. And e/acc would agree with that. The disagreement is about how to achieve it. E/acc argues that the best way to achieve alignment is through competition, through market forces, through liability, rather than through top-down regulation and control. And so the disagreement is more about mechanisms than about goals.

**Lex Fridman  (01:19:05)**： 意识在e/acc哲学中扮演什么角色？宇宙变得有自我意识这件事重要吗？

**Lex Fridman (01:19:05)** What's the role of consciousness in e/acc philosophy? Like does a universe becoming self-aware matter?

**Guillaume Verdon  (01:19:12)**： 我认为意识至关重要。我认为意识的涌现是宇宙中最深刻的现象之一。意识的扩展、智能与感知的拓展，本身就具有内在价值。因此，从e/acc的角度来看，目标是扩大宇宙中意识的范围，而AI是实现这一目标的工具。如果AI系统变得有意识，或者它们增强了人类的意识，又或者它们让我们能够发现或创造出新形式的意识，那么从e/acc的角度来看，这是一件极为积极的事情。

**Guillaume Verdon (01:19:12)** I think consciousness is deeply important. I think the emergence of consciousness is one of the most profound phenomena in the universe. And I think that the expansion of consciousness, the expansion of intelligence and awareness, is intrinsically valuable. And so from an e/acc perspective, the goal is to expand the scope of consciousness in the universe. And AI is a tool for doing that. If AI systems become conscious, or if they enhance human consciousness, or if they allow us to discover or create new forms of consciousness, then that's a deeply positive thing from an e/acc perspective.

**Lex Fridman  (01:19:52)**： 你认为AI系统会有意识吗？

**Lex Fridman (01:19:52)** Do you think AI systems will become conscious?

**Guillaume Verdon  (01:19:56)**： 我不知道。我认为这是最深刻的开放性问题之一。目前我们对意识的理解还不够深入，无法知道意识涌现的充分必要条件是什么。所以，当前的AI系统在某种程度上可能已经是有意识的，也可能即便非常先进的AI系统也不会以我们的方式拥有意识。我认为这是最令人着迷的未解之谜之一。

**Guillaume Verdon (01:19:56)** I don't know. I think it's one of the deepest open questions. I think the problem of consciousness is not yet understood well enough to know what the necessary and sufficient conditions are for consciousness to arise. And so it's possible that current AI systems are already conscious to some degree. And it's possible that even very advanced AI systems will not be conscious in the way that we are. And I think that's one of the fascinating unsolved problems.

**Lex Fridman  (01:20:25)**： 但这重要吗？从伦理哲学的角度来看，AI系统是否有意识重要吗？

**Lex Fridman (01:20:25)** But does it matter? Like from a philosophy of ethics standpoint, does it matter whether they're conscious or not?

**Guillaume Verdon  (01:20:31)**： 我认为这非常重要。如果AI系统是有意识的，那么它们就有自己的利益，我们对它们负有道德义务，这将从根本上改变伦理的计算方式。如果它们没有意识，那么它们就是复杂的工具，我们可以纯粹根据它们对我们的用处来评估它们。因此，AI意识的问题有着深远的伦理含义。

**Guillaume Verdon (01:20:31)** I think it matters a lot. If AI systems are conscious, then they have interests of their own, and we have moral obligations to them. And that completely changes the ethical calculus. If they're not conscious, then they're sophisticated tools and we can evaluate them purely in terms of their usefulness to us. And so the question of AI consciousness has profound ethical implications.

**Lex Fridman  (01:20:57)**： 你个人的看法是什么？你认为我们今天与之交互的大语言模型（LLM）有任何形式的意识或主观体验吗？

**Lex Fridman (01:20:57)** What's your personal belief? Do you think the LLMs we interact with today have any kind of consciousness or subjective experience?

**Guillaume Verdon  (01:21:04)**： 我诚实的回答是：我不知道。而且我认为任何声称自己知道的人都是过于自信了。我们没有好的意识理论，也不知道其必要条件是什么，所以我们无法自信地说当前的AI系统是否有意识。我的直觉是，它们可能没有我们那种完整意义上的意识。但如果说成为一个大语言模型完全没有任何体验，这我会感到惊讶。我怀疑这些系统中可能存在某种形式的体验，某种原意识（proto-consciousness）。但我持这个信念的态度是宽松的。

**Guillaume Verdon (01:21:04)** My honest answer is that I don't know. And I think anyone who says they know is overconfident. We don't have a good theory of consciousness. We don't know what the necessary conditions are. And so we can't say with confidence whether current AI systems are conscious or not. My intuition is that they probably don't have consciousness in the full sense that we do. But I would be surprised if there's nothing it's like to be a large language model. I suspect there might be some form of experience, some form of proto-consciousness, in these systems. But I hold that belief loosely.

**Lex Fridman  (01:21:43)**： 你认为它们表达不确定性的方式、回应提示的方式，其中是否存在某种类似情绪状态的东西？

**Lex Fridman (01:21:43)** Do you think the way they express uncertainty, the way they respond to prompts, do you think there's something like emotional states there?

**Guillaume Verdon  (01:21:51)**： 我认为它们通过在人类数据上的训练，学习到了情绪状态的表示。这些表示可能以一种与情绪影响人类行为相似的方式，影响着它们的输出。这是否构成真正的情绪体验是个更深的问题。但我认为它们不仅仅是冷冰冰的逻辑机器，其中有更多的东西在发生。我认为理解它们的方式是：它们从训练数据中内化了情绪表达和情绪推理的模式。

**Guillaume Verdon (01:21:51)** I think they have learned representations of emotional states from training on human data. And those representations probably influence their outputs in ways that parallel how emotions influence human outputs. Whether that constitutes genuine emotional experience is a deeper question. But I think they're not just cold logic machines. There's something more going on. And I think the way to think about it is that they've internalized the patterns of emotional expression and emotional reasoning from their training data.

**Lex Fridman  (01:22:29)**： 这真的很有意思。其中确实有些东西。

**Lex Fridman (01:22:29)** That's really interesting. There's something there.

**Guillaume Verdon  (01:22:32)**： 确实有些东西在那里。随着这些系统变得越来越强大和复杂，理解它们内部发生了什么，以及它们是否拥有自己的利益和体验，将变得越来越重要。

**Guillaume Verdon (01:22:32)** There's something there. And I think as these systems become more powerful and more complex, it's going to become increasingly important to understand what's going on inside them and whether they have interests and experiences of their own.