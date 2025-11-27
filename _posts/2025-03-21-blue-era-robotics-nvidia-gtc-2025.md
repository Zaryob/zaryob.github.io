---
layout: post
title: "The “Blue” Era of Robotics: My NVIDIA GTC 2025 Notes"
date: 2025-03-21 10:02:34 +0300
categories: [genel]
tags: ["nvidia-newton", "robotics", "gtc-2025", "nvidia"]
lang: en
description: "I want to start by emphasizing this… At NVIDIA GTC 2025, NVIDIA CEO Jensen Huang’s keynote marked a significant milestone, indicating that we’ve entered th"
cover_image: "/assets/img/posts/medium-f97cf193efa199.webp"
medium_url: "https://medium.com/@zaryob/the-blue-era-of-robotics-my-nvidia-gtc-2025-notes-a59c80d4e84f"
---
<figure><img loading="lazy" decoding="async" width="1024" height="576" alt="" src="/assets/img/posts/medium-f97cf193efa199.webp" /><figcaption>şundanım olsun istiyorum…</figcaption></figure>

<p>I want to start by emphasizing this… At NVIDIA GTC 2025, NVIDIA CEO Jensen Huang’s keynote marked a significant milestone, indicating that we’ve entered the adolescence of robotics and artificial intelligence. They introduced an AI-powered research robot named “Blue,” inspired by Star Wars (though personally, it reminds me of WALL-E). This robot operates using “Newton,” a new physics engine collaboratively developed by NVIDIA, Google DeepMind, and Disney Research. But what do these developments truly signify?</p>

<p>In this article, I’ll first discuss the GTC event itself and then bridge the gap from past to future, drawing insights from robotics history since Isaac Asimov.</p>

<p><strong>Note: This article originally written in Turkish, I translate it as much as possible, maybe some of idioms differ from original post due to make it understable for English Readers</strong></p>

<h2>A Look at the “Blue” Part of the Event</h2>

<p>Undoubtedly, the highlight of GTC 2025 was Blue, the robot dramatically emerging onto the stage, reminiscent of a popstar’s entrance. Its cartoon-like gestures, ability to respond to voice commands, and real-time interactions marked a significant leap into the robotics era. Signs of this advancement had already appeared during GTC 2024, when Jensen Huang introduced the Gr00t model, demonstrating robots learning tasks virtually through NVIDIA’s Omniverse-based digital twin environment.</p>

<p>Of particular interest was the Newton framework, presented as an open-source physics engine enabling robots to learn complex tasks with greater accuracy. Built upon NVIDIA’s Warp framework, Newton helps simulate physical interactions realistically. Essentially, the Blue model integrates these advancements, allowing it to practice thousands of virtual trials and apply learned skills seamlessly in real-world situations.</p>

<p>These developments herald the beginning of foundational models for robotics — similar to GPT in language modeling. Such large-scale models allow robots to integrate image recognition, environmental perception, decision-making, and motion planning into a cohesive system.</p>

<p>However, operating robots of this caliber demands significant computational power and advanced hardware. Robots now house miniature data centers; indeed, it was casually mentioned that Blue contains two NVIDIA computers. NVIDIA’s expertise in GPUs and specialized chips positions it ideally for such innovations.</p>

<p>Another striking aspect is the collaboration among companies like NVIDIA, Disney Research, and Google DeepMind — uncommon in some regions where exclusivity dominates innovation. Disney’s expertise in animatronics and physical design contributed to Blue’s charming movements, while Google DeepMind provided advanced AI algorithms. Thus, Blue represents a delightful yet sophisticated blend of entertainment technology and advanced robotics.</p>

<p>Robotics did not suddenly appear; rather, it followed a trajectory from pre-programmed routines to advanced autonomous learning systems. Historically, robots operated using basic rule-based algorithms with limited perception and decision-making capabilities. Newton’s simulation capabilities now allow for unprecedented seamless transitions from simulation to real-world applications — a groundbreaking shift for robotics and AI integration.</p>

<p>This development paves the way for robots to become intelligent agents capable of perceiving their environment, making decisions, and adapting dynamically to situations.</p>

<h2>From Conceptual Robotics to the beyond of Asimov Era</h2>

<p>Mentioning Asimov immediately evokes thoughts of robotics and artificial intelligence. His renowned Three Laws of Robotics provided an ethical framework, envisioning a future with ubiquitous and intelligent robots — a prediction he had already made back in the 1960s. Today, we edge closer to his vision.</p>

<p>Robotics has captivated humanity since the 18th century with automata — self-moving machines that were popular attractions in royal courts. One humorous yet insightful saying from this era was, “Inside every sufficiently intelligent robot is a dwarf,” hinting at the hidden human operators inside seemingly autonomous machines.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="502" alt="" src="/assets/img/posts/medium-52114babbb06a4.webp" /></figure>

<p>This refers to the reality behind famous automatons like the historical automatic chess player, which concealed a chess-playing human operator. Claiming otherwise would suggest we had achieved the computational sophistication of DeepBlue in the 1700s, simply through gears and wheels.</p>

<p>Until the 1900s, robots were purely imaginary creations depicted in cinema as tin boxes, or humanoid “tin men” as envisioned by Asimov. By the mid-20th century, robotics transformed into practical tools focused on automating repetitive and dangerous industrial tasks. The robotics revolution began in earnest with American inventor George Devol, who patented a programmable mechanical arm called Unimate in 1954. Installed at General Motors’ New Jersey factory in 1961, Unimate took over hazardous tasks such as handling hot metal castings.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="717" alt="" src="/assets/img/posts/medium-c91fb3076722a5.webp" /></figure>

<p>This development mirrored Asimov’s ethical principles, prioritizing robotic usage in tasks dangerous to humans. Japan, recovering swiftly from nuclear devastation, turned to robotics in response to labor shortages. By the 1970s, Japan was producing humanoid robots, collaborating with American firms both as developers and users. Meanwhile, Europe advanced industrial robotics through companies like KUKA, known for their six-axis robotic arms showcased performing tasks from tennis to playing musical instruments with glass cups.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="575" alt="" src="/assets/img/posts/medium-a34a9ca5f095e6.webp" /></figure>

<p>Industrial robotics boomed in Japan during the 1980s, marking a period dubbed “Year One of Robotics,” driven by advancements such as Intel’s 8086 microprocessor. Enhanced sensor technology significantly increased robots’ precision and complexity in tasks such as welding, painting, and handling materials, significantly accelerating industrial production. Although robotic arms were initially planned for use in space station assembly in the 1990s, actual implementation occurred only in 2022, though by then, Mars had already seen its first robotic explorer, the Sojourner rover.</p>

<figure><img loading="lazy" decoding="async" width="1000" height="654" alt="" src="/assets/img/posts/medium-a8a28f40a2484e.webp" /></figure>

<p>Simultaneously, enthusiasts carrying Asimov’s legacy continued developing humanoid robots. Despite technical limitations in circuits, chips, and servos, prolonged research culminated in Honda’s groundbreaking ASIMO robot, introduced in 2000. Seen as a millennium milestone, ASIMO was among the first advanced humanoids capable of autonomous walking and stair-climbing.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="683" alt="" src="/assets/img/posts/medium-94d9278de56f03.webp" /></figure>

<p>In just a few years following ASIMO, companies like Boston Dynamics began showcasing increasingly agile prototypes capable of walking, running, and navigating challenging terrains autonomously. Boston Dynamics’ Atlas, known for agile movements and object manipulation, and robotic animals like their famous robotic dog exemplify this progress. Humorously, one wonders if the robotic dog’s creators ever envisioned it adorned with an artistic silicon head, wandering as contemporary art.</p>

<p>Today, robots benefit significantly from advanced sensors, cameras, lidar, and deep learning algorithms, enabling sophisticated abilities in visual recognition, environment perception, navigation, and even interpreting human facial expressions. These robotic advancements have permeated our daily lives, evident in modern vehicle technology such as lane-assist, autopilot, and self-parking systems.</p>

<p>AI-powered robots are also transforming industry, proving to be an ideal application domain for the once-celebrated concept of IoT, which some prematurely declared dead. Collaborative robots, or cobots, now replace traditional robots, working safely alongside humans thanks to their advanced sensory and AI-driven capabilities.</p>

<figure><img loading="lazy" decoding="async" width="1024" height="576" alt="" src="/assets/img/posts/medium-960bc23e85bfc0.webp" /></figure>

<p>While we’ve not entirely reached science-fiction standards, the journey over the past 60–70 years has been remarkable. Robots evolved from basic mechanical arms to sophisticated AI-integrated intelligent systems. NVIDIA’s Blue, the latest development following Devol’s Unimate, symbolizes this exciting transition into the AI era. Asimov may have been overly optimistic about reaching this point by 2014, but perhaps aiming for 2042 isn’t too ambitious. Why 42? Fans of “The Hitchhiker’s Guide” know the answer.</p>

<p>Indeed, small robots already share our homes, workplaces, and streets. Complex humanoid robots like NVIDIA’s Blue indicate that the future of intelligent robotic companions is now closer than ever.</p>

<p>So, what lies ahead?</p>

<h2>The Future Ahead: Goals for 2042</h2>

<p>I should clarify upfront: the year 2042 is my own invention — please don’t reference it elsewhere as authoritative. With the debut of NVIDIA’s Blue, the merging of AI and robotics seems poised to accelerate rapidly in the coming years. Humanoid robots like Boston Dynamics’ Atlas and Tesla’s Optimus exemplify numerous ongoing projects aimed at producing versatile robots for general use.</p>

<p>By the 2030s, robots designed for warehouse logistics, construction tasks, and domestic assistance are expected to become commonplace. Many similar robots are already operational, capable of lifting and cleaning tasks. More advanced humanoid versions capable of independent thinking and communication with peers appear imminent. By 2035, robots may not be as ubiquitous as smartphones or computers, yet a significant rise in their adoption is foreseeable, as demonstrated by the rapid success of robotic vacuum cleaners.</p>

<p>NVIDIA unquestionably plays a central role in this unfolding future — not merely as a graphics card manufacturer, but as a pivotal player in computing infrastructure integral to AI and robotics ecosystems. Startups today can leverage NVIDIA’s simulation environments, the Isaac platform for perception and control software development, and Jetson modules to rapidly prototype and deploy functioning robots. This ready-made infrastructure and ecosystem accelerate innovation, attracting further interest and investment.</p>

<p>NVIDIA’s Blue serves as a showcase for robotic intelligence, demonstrating what can be achieved through the integration of hardware, software, and AI. Moreover, collaborations with diverse expert organizations such as Disney and Google DeepMind highlight how partnerships can accelerate innovation.</p>

<p>Ultimately, as the boundaries between robotics and artificial intelligence continue to blur, the scenes envisioned by Isaac Asimov gradually become a reality.</p>

<p>Stay inspired, and remain curious about what lies ahead.</p>

<h2>Further Readings</h2>

<p>There is also a reading that I will recommend. We said that Deepmind took a role in developing this robot, he recently released the open source Robotics module for Gemini:</p>

<p><a href="https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/">Introducing Gemini Robotics and Gemini Robotics-ER, AI models designed for robots to understand, act and react to the physical world.</a></p>

<h2>Sources</h2>

<h3>Asimov’s Rule:</h3>

<ul><li>Asimov, Isaac (1950). “Runaround”. <em>I, Robot</em> (The Isaac Asimov Collection ed.). New York City: Doubleday. p. 40. ISBN 978–0–385–42304–5.</li></ul>

<h3>The aforementioned Blue introduction:</h3>

<p><a href="https://www.euronews.com/video/2025/03/19/nvidias-ai-robot-blue-stuns-with-live-interaction">Video. Nvidia&#39;s AI robot &#39;Blue&#39; stuns with live interaction</a></p>

<h3>Other Resources:</h3>

<ul><li><a href="https://www.edgeaifoundation.org/edgeai-content/the-robots-are-coming-physical-ai-and-the-edge-opportunity">The Robots Are Coming - Physical AI and the Edge Opportunity - tinyML</a></li><li><a href="https://bostondynamics.com/atlas/">Atlas | Boston Dynamics</a></li><li><a href="https://developer.nvidia.com/blog/announcing-newton-an-open-source-physics-engine-for-robotics-simulation/">Announcing Newton, an Open-Source Physics Engine for Robotics Simulation | NVIDIA Technical Blog</a></li><li><a href="https://developer.nvidia.com/isaac">NVIDIA Isaac Platform</a></li><li><a href="https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/European_Robotic_Arm">European Robotic Arm</a></li><li><a href="https://www.invent.org/blog/inventors/George-Devol-Industrial-Robot">The Invention of the Industrial Robot</a></li></ul>

<p><a href="https://www.automate.org/robotics/engelberger/joseph-engelberger-unimate">https://www.automate.org/robotics/engelberger/joseph-engelberger-unimate</a></p>
