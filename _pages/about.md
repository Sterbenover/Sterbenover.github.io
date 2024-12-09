---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='-about-me'></span>

<!-- # 🔥 Research Interests -->

Lü Maobin is a professor at the School of Automation, Beijing Institute of Technology, and a doctoral supervisor. He is a recipient of the Youth Program of the 16th batch of the "Overseas High-level Talent Introduction Program" in China. His research mainly focuses on output regulation of complex dynamic systems, distributed estimation, cooperative control and game theory, and unmanned system control. He has published more than ten first-author papers in top-tier journals in the field of systems and control, such as IEEE Transactions on Automatic Control (IEEE TAC) and Automatica. Currently, he is leading projects such as the National Key Technology R&D Program for Next-generation Artificial Intelligence, the General Program of the National Natural Science Foundation of China, and key projects funded by the Beijing Natural Science Foundation-Xiaomi Innovation Joint Fund.

His research achievements have won several prestigious awards, including the IEEE ICCA Best Paper Award, the Zhang Siying (CCDC) Outstanding Young Paper Award at the Chinese Control and Decision Conference, the Shimemura Young Author Award at the Asian Control Conference, and the Best Paper Award at the World Congress on Intelligent Control and Automation (WCICA). He has also mentored students who have won multiple innovation and technology competition awards, such as the championship in the UAV Intelligent Perception Technology Competition, the grand prize in the International Smart Unmanned Systems Application Challenge (Flight Obstacle Avoidance) and the first prize in the Air-ground Coordination competition, the grand prize in the Capital Challenge Cup, and the runner-up in the RoboMaster Mech Master AI Challenge Elite Competition.

He currently serves as the Deputy Secretary-General of the Youth Work Committee of the Chinese Association of Automation and as a member of the Committee on Autonomous and Unmanned Systems of the Chinese Association for Artificial Intelligence.

<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

<span class='anchor' id='-personal-information'></span>

<!-- # 📖 Personal Information -->
# <i class="fa fa-vcard-o" aria-hidden="true"></i> Personal Information
- *Nov.2020 - Now*, Professor, Control Science and Engineering, Beijing Institute of Technology.
- *Sep.2018-Nov.2020*, Associate Professor, Control Science and Engineering, Beijing Institute of Technology.
- *Aug.2015-Sep.2018*, Postdoctoral Fellow, Automation Engineering, City University of Hong Kong.
- *Sep.2011-Aug.2015*, Ph.D., Mechanical and Automation Engineering, The Chinese University of Hong Kong.
- *Sep.2008-Jul.2011*, M.S., Mechanical Engineering, Beihang University.
- *Sep.2004-Jul.2008*, B.S., Mechanical Engineering, North China University of Technology.

<span class='anchor' id='-research-interestss'></span>

# 🔥 Research Interests
- Networked Control: Robot Systems, Vehicles, Spacecrafts
- Output Regulation: Linear Systems, Nonliear Systems, Time-Delay Systems

<span class='anchor' id='-research-awards'></span>

# 🎖 Research Awards
- Best Paper Award for ICCA, 2024
- Best Paper Award for WCICA, 2018
- Zhang Si-Ying (CCDC) Outstanding Youth Paper Award, 2018
- Shimemura Young Author Prize for ASCC, 2017
- Hong Kong Reaching Out Award 2014-2015, 2015

<span class='anchor' id='-publications'></span>

# 📝 Publications 

<h2>Journal Papers</h2>
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAC 2024</div><img src='images/1-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robust distributed nash equilibrium seeking subject to communication constraints](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2024.3476195&oq=)

L. Liu, **M. Lu**, S. Wang, F. Deng and J. Chen | 
[[Video]](https://github.com/maobinlu/Robot-Experiment/raw/refs/heads/main/Mobile%20robots%20experiment%20for%20a%20connectivity%20control%20game.mp4)
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- This paper addresses the robust distributed Nash equilibrium seeking problem of N -player games under switching networks and communication delays. The salient feature of this work is that the switching communication networks can be uniformly strongly connected, and the communication delays are allowed to be arbitrarily unknown, time-varying and bounded. We illustrate our proposed approach by its application to practical motion control of mobile robots with some experiments. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAC 2024</div><img src='images/2-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Distributed state estimation under jointly connected switching networks: Continuous-time linear systems and discrete-time linear systems](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2023.3279210&btnG=)

L. Zhang, **M. Lu**, F. Deng and J. Chen

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- In this article, we address the distributed state estimation problem for both continuous-time linear time-invariant (LTI) systems and discrete-time LTI systems under switching networks. The observed system is jointly observable, i.e., each agent can only access a part of the measurement output of the observed system and cannot recover the full state by itself. The full state estimation has to be achieved by network communication of neighboring agents. In contrast to existing works, the salient feature of this work is that the developed approach can deal with jointly connected switching networks and thus is more resilient to unreliable communication.  

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Automatica 2023</div><img src='images/3-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Output feedback control of uncertain Euler–Lagrange systems by internal model](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.automatica.2023.111189&btnG=)

X. He, **M. Lu** | 
[[Video]](https://github.com/maobinlu/ROS-simuf/raw/refs/heads/main/ROS-Simuf.mp4)
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- In this paper, we investigate the trajectory tracking control problem of a class of uncertain Euler–Lagrange systems subject to disturbances. We propose a class of dynamic output feedback control laws which depends on the tracking error of the position and that of the velocity. Specifically, by characterizing the reference trajectory and the disturbances with an exosystem, we design an internal model to learn the desired feedforward input such that the reference trajectory can be tracked in spite of unknown system parameters and disturbances. The effectiveness of the proposed approach is illustrated by its application to trajectory tracking control of a three-link cylindrical robot arm. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAC 2022</div><img src='images/4-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A sensory feedback based discrete distributed observer to cooperative output regulation](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2022.3162545&btnG=)

**M. Lu**

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- In some practical applications, only the sensor network can be established among all agents. To handle such cases, we propose a sensory feedback-based discrete distributed observer, which depends on the relative output of neighboring agents. In contrast to existing results, the design of the discrete distributed observer and cooperative output regulation analysis should be conducted simultaneously. Resorting to the small-gain theorem, we develop a small-gain condition-based approach and a low-gain-based approach, respectively. By these two approaches, we demonstrate that the discrete distributed observer holds and the cooperative output regulation problem of heterogeneous discrete-time linear multiagent systems can be solved. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAC 2020</div><img src='images/5-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Consensus of heterogeneous second-order nonlinear uncertain multi-agent systems under switching networks](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A10.1109%2FTAC.2020.3019737&btnG=)

**M. Lu**, L. Liu

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- The consensus problem of heterogeneous second-order nonlinear uncertain multiagent systems under switching networks is addressed by a distributed control approach. The network communication of all systems is subject to arbitrarily bounded and nonuniform time-varying delays. Based on the internal model principle, a nonlinear distributed dynamic controller is developed to solve the problem. By means of Lyapunov analysis, consensus of heterogeneous second-order nonlinear multiagent systems is achieved in the presence of system uncertainties, disturbances, and uniformly connected topologies as well as arbitrarily bounded and nonuniform time-varying communication delays.

</div>
</div>
<!-- [This paper addresses the robust distributed Nash equilibrium seeking problem of N -player games under switching networks and communication delays. The salient feature of this work is that the switching communication networks can be uniformly strongly connected, and the communication delays are allowed to be arbitrarily unknown, time-varying and bounded. To solve the problem, we construct a distributed estimator for each player to estimate all players' strategies through unreliable communication networks. Based on the gradient play technique, we design a distributed Nash equilibrium seeking law. Then, we obtain the closed-loop system, which is an interconnected system of a nonlinear subsystem and a linear time-delay subsystem. By constructing the Lyapunov-Krasovskii functional, and designing the controller parameter in the sense of the small gain theorem, we achieve robust Nash equilibrium seeking asymptotically in spite of unreliable communication networks. Finally, we illustrate our proposed approach by its application to practical motion control of mobile robots with some experiments.](https://github.com), A, B, C, **CVPR 2020** -->

<ol>
<!-- <li><p>L. Liu, <b>M. Lu</b>*, S. Wang, F. Deng and J. Chen, &ldquo;Robust distributed nash equilibrium seeking subject to communication constraints,&rdquo; <i>IEEE Transactions on Automatic Control</i>, <a href="https://ieeexplore.ieee.org/abstract/document/10707180"> </a> DOI:10.1109/TAC.2024.3476195.</p>
</li> -->
<li><p>Z. Bao, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Attitude tracking of uncertain flexible spacecraft systems subject to unknown external disturbances,&rdquo; <i>arXiv e-prints 2024</i>, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=+DOI%3A10.48550%2FarXiv.2403.12542&btnG=">DOI:10.48550/arXiv.2403.12542</a>.</p>
</li>
<!-- <li><p>L. Zhang, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Distributed state estimation under jointly connected switching networks: Continuous-time linear systems and discrete-time linear systems,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 69, no. 2, pp. 1104-1111, Feb. 2024, DOI:10.1109/TAC.2023.3279210. </p>
</li> -->
<!-- <li><p>X. He and  <b>M. Lu</b>*, &ldquo;Output feedback control of uncertain Euler–Lagrange systems by internal model,&rdquo; <i>Automatica</i>, vol. 156, Oct. 2023, DOI:10.1016/j.automatica.2023.111189.</p>
</li> -->
<li><p>J. Wu, <b>M. Lu</b>*, F. Deng and J. Chen, “Event-triggered cooperative robust output regulation of minimum-phase linear uncertain multi-agent systems,” <i>International Journal of Robust and Nonlinear Control</i>, vol. 34, no. 11, pp. 7390-7405, Jul. 2024, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1002%2Frnc.7349&btnG=">DOI:10.1002/rnc.7349</a>.</p>
</li>
<li><p>J. Wu, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Robust output regulation of a class of minimum-phase linear uncertain systems by event-triggered control,&rdquo; <i>IEEE Transactions on Control of Network Systems</i>, vol. 11, no. 2, pp. 989-998, Jun. 2024, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTCNS.2023.3330446&btnG=">DOI:10.1109/TCNS.2023.3330446</a>.</p>
</li>
<li><p>J. Wu, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Cooperative robust output regulation of linear uncertain multi-agent systems: A dynamic event-triggered approach,&rdquo; <i>International Journal of Robust and Nonlinear Control</i>, vol. 33, no. 18, pp. 11538-11552, 2023, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A10.1002%2Frnc.6957&btnG=">DOI:10.1002/rnc.6957</a>. </p>
</li>
<!-- <li><p><b>M. Lu</b>, &ldquo;A sensory feedback based discrete distributed observer to cooperative output regulation,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 67, no. 9, pp. 4762-4769, Sept. 2022, DOI:10.1109/TAC.2022.3162545.</p>
</li> -->
<li><p>J. Wu, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Robust output regulation of linear uncertain systems by dynamic event-triggered output feedback control,&rdquo; <i>IEEE Transactions on Cybernetics</i>, vol. 53, no. 11, pp. 7333-7341, Nov. 2023, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTCYB.2023.3235731&btnG=">DOI:10.1109/TCYB.2023.3235731</a>.</p>
</li>
<li><p>L. Liang, F. Deng, J. Wang, <b>M. Lu</b> and J. Chen, &ldquo;A reconnaissance penetration game with territorial-constrained defender,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 67, no. 11, pp. 6295-6302, Nov. 2022, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2022.3183034&btnG=">DOI:10.1109/TAC.2022.3183034</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;A low gain approach to output consensus of networked heterogeneous linear multi-agent systems,&rdquo; <i>SIAM Journal on Control and Optimization</i>, vol. 59,no. 6,pp. 4295-4313, Nov. 2021, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI.org%2F10.1137%2F19M1296458&btnG=">DOI.org/10.1137/19M1296458</a>.</p>
</li>
<!-- <li><p><b>M. Lu</b> and L. Liu, &ldquo;Consensus of heterogeneous second-order nonlinear uncertain multi-agent systems under switching networks,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 66, no. 7, pp. 3331-3338, July 2021, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A10.1109%2FTAC.2020.3019737&btnG=">DOI:10.1109/TAC.2020.3019737</a>.</p>
</li> -->
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Robust synchronization control of switched networked Euler–Lagrange systems,&rdquo; <i>IEEE Transactions on Cybernetics</i>, vol. 52, no. 7, pp. 6834-6842, July 2022, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTCYB.2020.3031009&btnG=">DOI:10.1109/TCYB.2020.3031009</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Quantized output regulation of minimum-phase linear uncertain systems,&rdquo; <i>International Journal of Robust and Nonlinear Control</i>, vol. 30, no. 17, pp. 7074 – 7088, Feb. 2020, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1002%2Frnc.5157&btnG=">DOI:10.1002/rnc.5157</a>.</p>
</li>
<li><p>L. Liang, F. Deng, <b>M. Lu</b> and J. Chen, &ldquo;Analysis of role switch for cooperative target defense differential game,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 66, no. 2, pp. 902-909, Feb. 2021, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2020.2987701&btnG=">DOI:10.1109/TAC.2020.2987701</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Leader-following attitude consensus of multiple rigid spacecraft systems under switching networks,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 65, no. 2, pp. 839 – 845, Feb. 2020, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2019.2920074&btnG=">DOI:10.1109/TAC.2019.2920074</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Leader-following consensus of multiple uncertain Euler-Lagrange systems with unknown dynamic leader,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 64, no. 10, pp. 4167 – 4173, Oct. 2019, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A10.1109%2FTAC.2019.2892384&btnG=">DOI:10.1109/TAC.2019.2892384</a>.</p>
</li>
<li><p><b>M. Lu</b>, L. Liu and G. Feng, &ldquo;Adaptive tracking control of uncertain Euler-Lagrange systems subject to external disturbances,&rdquo; <i>Automatica</i>, vol. 104, pp. 207 – 219, Mar. 2019, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.automatica.2019.02.048&btnG=">DOI:10.1016/j.automatica.2019.02.048</a>. (Regular paper)</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Leader-following consensus of second-order nonlinear multi-agent systems subject to disturbances,&rdquo; <i>Frontiers of Information Technology &amp; Electronic Engineering</i>, vol. 20, no. 1, pp. 88 – 94, Jan. 2019, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1631%2FFITEE.1800611&btnG=">DOI:10.1631/FITEE.1800611</a>. (Invited Paper)</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Leader-following consensus of multiple uncertain Euler-Lagrange systems,&rdquo; <i>International Journal of Robust and Nonlinear Control</i>, vol. 28, no. 14, pp. 4093 – 4104, Sep. 2018, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1002%2Frnc.4223&btnG=">DOI:10.1002/rnc.4223</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Robust output consensus of networked heterogeneous nonlinear systems by distributed output regulation,&rdquo; <i>Automatica</i>, vol. 94, pp. 186 – 193, Aug. 2018, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.automatica.2018.04.018&btnG=">DOI:10.1016/j.automatica.2018.04.018</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Leader-following consensus of multiple uncertain Euler-Lagrange systems subject to communication delays and switching networks,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 63, no. 8, pp. 2604 – 2611, Aug. 2018, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2017.2771318&btnG=">DOI:10.1109/TAC.2017.2771318</a>.</p>
</li>
<li><p><b>M. Lu</b>, &ldquo;Rendezvous with connectivity preservation of mobile agents subject to uniform time-delays,&rdquo; <i>Automatica</i>, vol. 88, pp. 31 – 37, Feb. 2018, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.automatica.2017.11.003&btnG=">DOI:10.1016/j.automatica.2017.11.003</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Internal model approach to cooperative robust output regulation for linear uncertain time-delay multi-agent systems,&rdquo; <i>International Journal of Robust and Nonlinear Control</i>, vol. 28, no. 6, pp. 2528 – 2542, Jan. 2018, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1002%2Frnc.4034&btnG=">DOI:10.1002/rnc.4034</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Cooperative output regulation of linear multi-agent systems by a novel distributed dynamic compensator,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 62, no. 12, pp. 6481 – 6488, Dec. 2017, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2017.2658026&btnG=">DOI:10.1109/TAC.2017.2658026</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Distributed feedforward approach to cooperative output regulation subject to communication delays and switching networks,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 62, no. 4, pp. 1999 – 2005, Apr. 2017, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2016.2594151&btnG=">DOI:10.1109/TAC.2016.2594151</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Consensus of linear multi-agent systems subject to communication delays and switching networks,&rdquo; <i>International Journal of Robust and Nonlinear Control</i>, vol. 27, no. 9, pp. 1379 – 1396, Jun. 2017, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1002%2Frnc.3750&btnG=">DOI:10.1002/rnc.3750</a>. <b>(Front Cover Paper)</b></p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Cooperative output regulation problem for linear time-delay multi-agent systems under switching network,&rdquo; <i>Neurocomputing</i>, vol. 190, pp. 132-139,May. 2016, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.neucom.2016.01.025&btnG=">DOI:10.1016/j.neucom.2016.01.025</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Cooperative global robust output regulation for a class of nonlinear multi-agent systems with a nonlinear leader,&rdquo; <i>IEEE Transactions on Automatic Control</i>, vol. 61, no. 11, pp. 3557 – 3562, Feb. 2016, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FTAC.2016.2527920&btnG=">DOI:10.1109/TAC.2016.2527920</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;A class of nonlinear internal models for global robust output regulation problem,&rdquo; <i>International Journal of Robust and Nonlinear Control</i>, vol. 25, no. 12, pp. 1831 – 1843, Aug. 2015, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1002%2Frnc.3180&btnG=">DOI:10.1002/rnc.3180</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Robust output regulation problem for linear time-delay systems,&rdquo; <i>International Journal of Control</i>, vol. 88, no. 6, pp. 1236 – 1245, Jan. 2015, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1080%2F00207179.2014.1002111&btnG=">DOI:10.1080/00207179.2014.1002111</a>.</p>
</li>
</ol>

<h2>Conference Papers</h2>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCA 2024(Best Paper Award)</div><img src='images/6-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Distributed Nash Equilibrium Seeking with Communication Delays](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FICCA62789.2024.10591839&btnG=)

L. Liu, **M. Lu**, S. Wang, F. Deng, L. Dou and J. Chen

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- This paper addresses the problem of distributed Nash equilibrium seeking in N-player games for single inte-grator dynamics subject to strongly connected networks and communication delays. We propose a distributed estimator for each player, enabling them to estimate the actions of all players. Next, we design a distributed Nash equilibrium seeking law using the gradient play technique. Then, we analyze the stability of the closed-loop system. By means of designing the Lyapunov-Krasovskii functional, we demonstrate that Nash equilibrium seeking is achieved at an exponential rate, even in the presence of unknown and bounded communication delays. Finally, we provide a simulation example to illustrate the effectiveness of our proposed approach.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">YAC 2023(Best Theoretical Paper Award)</div><img src='images/7-450_300.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Leader-Following Attitude Synchronization of Multiple Flexible Spacecraft Systems Subject to External Disturbance](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Leader-Following+Attitude+Synchronization+of+Multiple+Flexible+Spacecraft+Systems+Subject+to+External+Disturbance&btnG=)

Z. Bao, **M. Lu**, F. Deng

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- This paper investigates the leader-following attitude synchronization problem of multiple flexible spacecraft systems under external disturbances. Compared with existing works, the external disturbance with unbounded energy is compensated.Given that the leader system's state can be conveyed to each follower, we develop a distributed observer for the leader system. Finally, we develop a distributed control law to solve the problem. The effectiveness and robustness of the control law are illustrated by some numerical simulations.

</div>
</div>

<ol>
<!-- <li><p>L. Liu, <b>M. Lu*</b>, F. Deng, L. Dou and J. Chen, &ldquo;Distributed Nash Equilibrium Seeking with Communication Delays,&rdquo; in <i>Proceedings of the 2024 IEEE 18th International Conference on Control &amp; Automation (ICCA)</i>, Reykjavík, Iceland, 2024, pp. 6-11, DOI:10.1109/ICCA62789.2024.10591839. <b>(Best Paper Award)</b></p>
</li> -->
<li><p>Z. Bao, <b>M. Lu</b>* and F. Deng, &ldquo;Attitude Tracking Control of Uncertain Flexible Spacecraft Systems Subject to External Disturbances,&rdquo; in <i>Proceedings of the 2023 IFAC World Congress</i>, Yokohama, Japan, pp. 9239-9244, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.ifacol.2023.10.005&btnG=">DOI:10.1016/j.ifacol.2023.10.005</a>.</p>
</li>
<li><p>J. Wu, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Output Regulation of Nonlinear Systems by an Emulation-Based Approach,&rdquo; in <i>Proceedings of the 2023 American Control Conference</i>, San Diego, CA, USA, 2023, pp. 4779-4784, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.23919%2FACC55779.2023.10156239&btnG=">DOI:10.23919/ACC55779.2023.10156239</a>.</p>
</li>
<li><p>Y. Zhang, J. Wu, <b>M. Lu</b>* and F. Deng, &ldquo;Event-Triggered Practical Output Regulation of Linear Uncertain Systems Under Denial-of-Service Attacks,&rdquo; in <i>Proceedings of the 2023 42nd Chinese Control Conference</i>, Tianjin, China, 2023, pp. 1-6, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.23919%2FCCC58697.2023.10240140&btnG=">DOI:10.23919/CCC58697.2023.10240140</a>.</p>
</li>
<li><p>L. Zhang, <b>M. Lu</b>*, F. Deng and J. Chen, &ldquo;Distributed State Estimation of Linear Systems Under Uniformly Connected Switching Networks,&rdquo; in <i>Proceedings of the 2021 60th IEEE Conference on Decision and Control</i>, Austin, TX, USA, 2021, pp. 4008-4013, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FCDC45484.2021.9683045&btnG=">DOI:10.1109/CDC45484.2021.9683045</a>.</p>
</li>
<li><p>X. He, <b>M. Lu</b>* and F. Deng, &ldquo;Trajectory Tracking Control of Uncertain Euler-Lagrange Systems: A Robust Control Approach,&rdquo; in <i>Proceedings of the 2021 IEEE International Conference on Robotics and Biomimetics</i>, Sanya, China, 2021, pp. 1855-1860, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FROBIO54168.2021.9739471&btnG=">DOI:10.1109/ROBIO54168.2021.9739471</a>.</p>
</li>
<li><p><b>M. Lu</b>, F. Deng, and L. Liu, &ldquo;An Extension of Barbalat's Lemma with its Application to Synchronization of a Class of Switched Networked Nonlinear Systems,&rdquo; in <i>Proceedings of the 2020 IFAC World Congress</i>, Berlin, Germany, 2020, pp. 9778-9783, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.ifacol.2020.12.2659&btnG=">DOI:10.1016/j.ifacol.2020.12.2659</a>.</p>
</li>
<li><p><b>M. Lu</b>, F. Deng and L. Liu, &ldquo;Cooperative output regulation of linear multi-agent systems under communication delays,&rdquo; in <i>Proceedings of the 2019 IEEE 15th International Conference on Control and Automation</i>, Edinburgh, Scotland, July 16–19, 2019, pp. 1132 – 1137, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FICCA.2019.8900020&btnG=">DOI:10.1109/ICCA.2019.8900020</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Synchronization of a class of nonlinear multi-agent systems,&rdquo; in <i>Proceedings of the 2019 3rd International Symposium on Autonomous Systems</i>, Shanghai, China, May 29–31, 2019, pp. 429 – 433, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FISASS.2019.8757768&btnG=">DOI:10.1109/ISASS.2019.8757768</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Adaptive leader-following consensus of networked uncertain Euler-Lagrange systems with dynamic leader based on sensory feedback,&rdquo; in <i>Proceedings of the 2018 15th International Conference on Control</i>, Automation, Robotics and Vision (ICARCV), Singapore, Nov. 18–21, 2018, pp. 756 – 761, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FICARCV.2018.8581140&btnG=">DOI:10.1109/ICARCV.2018.8581140</a>.</p>
</li>
<li><p><b>M. Lu</b>, L. Liu and G. Feng, &ldquo;Adaptive leader-following consensus of multiple uncertain Euler-Lagrange systems based on sensory feedback,&rdquo; in <i>Proceedings of the 2018 IEEE International Conference on Real-time Computing and Robotics</i>, Kandima, Maldives, Aug. 1–5, 2018, pp. 302 – 303.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, (Invited) &ldquo;Leader-Following Consensus of Uncertain Euler-Lagrange Multi-Agent Systems with Communication Delays,&rdquo; in <i>Proceedings of the 37th Chinese Control Conference</i>, Wuhan, China, Jul. 25–27, 2018, pp. 7055 – 7060, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.23919%2FChiCC.2018.8482898&btnG=">DOI:10.23919/ChiCC.2018.8482898</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Stabilization of minimum-phase linear uncertain systems with quantized measurement output and disturbances,&rdquo; in <i>Proceedings of the 2018 World Congress on Intelligent Control and Automation</i>, Changsha, China, Jul. 4–8, 2018, pp. 234 – 239, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FWCICA.2018.8630533&btnG=">DOI:10.1109/WCICA.2018.8630533</a>. <b>(Best Paper Award)</b></p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Attitude consensus of switched networked spacecraft multi-agent systems,&rdquo; in <i>Proceedings of the 2018 IEEE 14th International Conference on Control and Automation</i>, Anchorage, Alaska, Jun. 12–15, 2018, pp. 312 – 317, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FICCA.2018.8444347&btnG=">DOI:10.1109/ICCA.2018.8444347</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Robust consensus of a class of heterogeneous nonlinear uncertain multi-agent systems subject to communication constraints,&rdquo; in <i>Proceedings of the 2018 Chinese Control and Decision Conference</i>, Shenyang, China, Jun. 9–11, 2018, pp. 74 – 81, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FCCDC.2018.8407109&btnG=">DOI:10.1109/CCDC.2018.8407109</a>. <b>(Zhang Si-Ying (CCDC) Outstanding Youth Paper Award)</b></p>
</li>
<li><p><b>M. Lu</b>, L. Liu and G. Feng, &ldquo;Output synchronization of heterogeneous linear multi-agent systems,&rdquo; in <i>Proceedings of the 2017 Asian Control Conference</i>, Gold Coast, Australia, Dec. 17–20, 2017, pp. 156 – 161, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FASCC.2017.8287159&btnG=">DOI:10.1109/ASCC.2017.8287159</a>. <b>(Shimemura Young Author Prize)</b></p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Cooperative global robust output regulation for a class of nonlinear multi-agent systems with communication delays,&rdquo; in <i>Proceedings of the 2017 American Control Conference</i>, Seattle, USA,May 24–26, 2017, pp. 2668 – 2673, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.23919%2FACC.2017.7963355&btnG=">DOI:10.23919/ACC.2017.7963355</a>.</p>
</li>
<li><p><b>M. Lu</b> and L. Liu, &ldquo;Consensus of linear multi-agent systems with communication delays under dynamic networks,&rdquo; in <i>Proceedings of the 2016 14th International Conference on Control, Automation, Robotics and Vision (ICARCV)</i>, Phuket, Thailand, Nov. 13–15, 2016, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FICARCV.2016.7838664&btnG=">DOI:10.1109/ICARCV.2016.7838664</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Cooperative robust output regulation for linear uncertain time-delay multi-agent systems,&rdquo; in <i>Proceedings of the 2016 International Conference on Information Science and Applications</i>, Ho Chi Minh City(Saigon), Vietnam, Feb. 15–18, 2016, pp. 299 – 307, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1007%2F978-981-10-0557-2_30&btnG=">DOI:10.1007/978-981-10-0557-2_30</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Cooperative robust output regulation for nonlinear multi-agent systems with unity relative degree subject to a nonlinear leader,&rdquo; in <i>Proceedings of the 2015 IEEE International Conference on Information and Automation</i>, Lijiang, China, Aug. 8–10, 2015, pp. 196 – 201, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FICInfA.2015.7279284&btnG=">DOI:10.1109/ICInfA.2015.7279284</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Robust output regulation problem for linear systems with both input and communication delays,&rdquo; in <i>Proceedings of the 2015 American Control Conference</i>, Chicago, USA, Jul. 1–3, 2015, pp. 4036 – 4041, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FACC.2015.7171960&btnG=">DOI:10.1109/ACC.2015.7171960</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Cooperative output regulation problem for linear time-delay multi-agent systems under switching network,&rdquo; in <i>Proceedings of the 33th Chinese Control Conference</i>, Nanjing, China, Jul. 28–30, 2014, pp. 3515 – 3520, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1016%2Fj.neucom.2016.01.025&btnG=">DOI:10.1016/j.neucom.2016.01.025</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;Output regulation problem for linear time-delay systems,&rdquo; <i>Proceedings of the 4th IEEE International Conference on Cyber Technology in Automation, Control and Intelligent Systems</i>, Hong Kong, China, Jun. 4–7, 2014, pp. 274 – 279, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FCYBER.2014.6917474&btnG=">DOI:10.1109/CYBER.2014.6917474</a>.</p>
</li>
<li><p><b>M. Lu</b> and J. Huang, &ldquo;<a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=A+class+of+nonlinear+internal+models+and+its+application&btnG=">A class of nonlinear internal models and its application</a>,&rdquo; in <i>Proceedings of the 32th Chinese Control Conference</i>, Xi’an, China, Jul. 26–28, 2013, pp. 1052 – 1057.</p>
</li>
<li><p>S. Yuan, <b>M. Lu</b> and X. Liu, &ldquo;The analysis of static and dynamic characteristics of motorized high-speed spindle based on sensitivity analysis of FEM model,&rdquo; <i>Applied Mechanics and Materials</i>, vol. 43, no. 12, pp. 376 – 381, Feb. 2011. <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0,5&q=DOI:+10.4028www.scientific.net+AMM.43.376">DOI:10.4028www.scientific.net AMM.43.376</a>.</p>
</li>
<li><p>Q. Liu, X. Liu, <b>M. Lu</b> and W. Wu, &ldquo;Dynamic analysis on linear motor drive unit for NC machine tool based on multi-modes motion,&rdquo; in <i>Proceedings of the 2010 International Conference on Computer,Mechatronics, Control and Electronic Engineering</i>, Changchun, China, Aug. 24–26, 2010, pp. 460 – 463, <a href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=DOI%3A+10.1109%2FCMCE.2010.5610103&btnG=">DOI:10.1109/CMCE.2010.5610103</a>.</p>
</li>
</ol>
<h2>Pending Patents and Software</h2>
<ol>
<li><p>S. Yuan, <b>M. Lu</b> and X. Liu, &ldquo;Topology optimization-based cobweb-like interlayer rib plate composite structure design method,&rdquo; <i>National Inventing Patents</i>, China, PN: CN101980222B, issued Dec. 2013.</p>
</li>
<li><p>S. Yuan and <b>M. Lu</b>, &ldquo;Design method of bionic spider web composite material structure,&rdquo; <i>National Inventing Patents</i>, PN: CN101950316B, issued Nov. 2012.</p>
</li>
<li><p>S. Yuan, Z. Zhan, and <b>M. Lu</b>, &ldquo;Dynamic property scaling type model researching method for large machine tool,&rdquo; <i>National Inventing Patents</i>, PN: CN102184303A, issued Sep. 2011.</p>
</li>
<li><p>S. Yuan and <b>M. Lu</b>, &ldquo;The analysis and optimization system for motorized spindle of NC machine tools,&rdquo; <i>Software Copyright</i>, China, register No.:2010SR027562.</p>
</li>
</ol>
<h2>Thesis</h2>
<ol>
<li><p><b>M. Lu</b>, &ldquo;The Output Regulation of Linear Time-Delay Systems and Complex Nonlinear Systems,&rdquo; Ph.D. Thesis, Department of Mechanical and Automation Engineering, CUHK, Hong Kong, China, Aug. 2015.</p>
</li>
<li><p><b>M. Lu</b>, &ldquo;Design, Analysis, and Dynamic Optimization of NC Machine Tool,&rdquo; M.S. Thesis, School of Mechanical Engineering and Automation, BUAA, Beijing, China, June, 2011.</p>
</li>
</ol>
<!-- <p><a href="publications.html" class="current">More</a></p> -->

<span class='anchor' id='-teaching'></span>

# 📖 Teaching
<!-- - *Nov.2020 - Now*,Professor,Control Science and Engineering,Beijing Institute of Technology.
- *Sep.2018-Nov.2020*,Associate Professor,Control Science and Engineering,Beijing Institute of Technology.
- *Aug.2015-Sep.2018*,Postdoctoral Fellow,Automation Engineering,City University of Hong Kong.
- *Sep.2011-Aug.2015*,Ph.D.,Mechanical and Automation Engineering,The Chinese University of Hong Kong.
- *Sep.2008-Jul.2011*,M.S.,Mechanical Engineering,Beihang University.
- *Sep.2004-Jul.2008*,B.S.,Mechanical Engineering,North China University of Technology. -->
<h2>Undergraduate Courses:</h2>
<ul>
<li><p>Operational Research, 32 class hours</p>
</li>
</ul>
<h2>Postgraduate Courses:</h2>
<ul>
<li><p>Optimization Theory and Methods, 32 class hours</p>
</li>
</ul>
<h2>Teaching Assistant(CUHK)</h2>
<ul>
<li><p>Engineering Mathematics, 2012-2014 spring</p>
</li>
<li><p>Control and Industrial Automation, 2012-2013 fall</p>
</li>
<li><p>Modern Control Systems Analysis and Design, 2012-2013 fall
<!-- <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br /> -->
</p>
</li>
</ul>


<span class='anchor' id='-group'></span>

# 💬 Research Group
<!-- - *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<p><a href="https://github.com/maobinlu/GroupMembers">Detailed Information</a></p>
<h2>Current Members</h2>
<h3>PhD Students</h3>
<div style="display: flex;">

  <!-- 左列 -->
  <div style="width: 50%; padding-right: 10px;"> 
    <ul>
      <li>Haizhou Yang (2020-2026)</li>
      <li>Lupeng Liu (2021-2025)</li>
      <li>Lan Zhang (2021-2025)</li>
      <li>Faqi Wang (2022-2026)</li>
      <li>Geyuan Liu (2022-2028)</li>
      <li>Qiang Wang (2023-2027)</li>
    </ul>
  </div>

  <!-- 右列 -->
  <div style="width: 50%; padding-left: 10px;">
    <ul>
      <li>Bowei Xie (2023-2027)</li>
      <li>Xianzhi Yang (2023-2029)</li>
      <li>Guanghui Sun (2024-2028)</li>
      <li>Fangzhe Xu (2024-2029)</li>
      <li>Xinrui Xie (2024-2030)</li>
    </ul>
  </div>

</div>

<!-- <ul>
<li><p>Haizhou Yang (2020-2026)</p>
</li>
<li><p>Lupeng Liu (2021-2025)</p>
</li>
<li><p>Lan Zhang (2021-2025)</p>
</li>
<li><p>Faqi Wang (2022-2026)</p>
</li>
<li><p>Geyuan Liu (2022-2028)</p>
</li>
<li><p>Qiang Wang (2023-2027)</p>
</li>
<li><p>Bowei Xie (2023-2027)</p>
</li>
<li><p>Xianzhi Yang (2023-2029)</p>
</li>
<li><p>Guanghui Sun (2024-2028)</p>
</li>
<li><p>Fangzhe Xu (2024-2029)</p>
</li>
<li><p>Xinrui Xie (2024-2030)</p>
</li>
</ul> -->
<h3>Master Students</h3>

<div style="display: flex;">

  <!-- 左列 -->
  <div style="width: 50%; padding-right: 10px;">
    <ul>
      <li>Jianyi Cai (2022-2025)</li>
      <li>Yulong Lin (2022-2025)</li>
      <li>Yufan Lu (2022-2025)</li>
      <li>Yuhan Bao (2023-2026)</li>
      <li>Hongzeng Li (2023-2026)</li>
    </ul>
  </div>

  <!-- 右列 -->
  <div style="width: 50%; padding-left: 10px;">
    <ul>
      <li>Qilin Yan (2023-2026)</li>
      <li>Fujian Sun (2024-2027)</li>
      <li>Zelong Xie (2024-2027)</li>
      <li>Shiduo Wang (2024-2027)</li>
      <li>Wei Nie (2024-2027)</li>
    </ul>
  </div>

</div>
<!-- <ul>
<li><p>Jianyi Cai (2022-2025)</p>
</li>
<li><p>Yulong Lin (2022-2025)</p>
</li>
<li><p>Yufan Lu (2022-2025)</p>
</li>
<li><p>Yuhan Bao (2023-2026)</p>
</li>
<li><p>Hongzeng Li (2023-2026)</p>
</li>
<li><p>Qilin Yan (2023-2026)</p>
</li>
<li><p>Fujian Sun (2024-2027)</p>
</li>
<li><p>Zelong Xie (2024-2027)</p>
</li>
<li><p>Shiduo Wang (2024-2027)</p>
</li>
<li><p>Wei Nie (2024-2027)</p>
</li>
</ul> -->
<h2>Graduated Members</h2>
<h3>PhD Students</h3>
<ul>
<li><p>Jieshuai Wu (2024)</p>
</li>
</ul>
<h3>Master Students</h3>
<ul>
<li><p>Xingxiu He (2022)</p>
</li>
<li><p>Yongjie Zhang (2023)</p>
</li>
<li><p>Ze'an Bao (2023)</p>
</li>
<li><p>Juan Dong (2024)</p>
</li>
</ul>
<!-- <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p> -->



<span class='anchor' id='-service'></span>

# 💻 Service
<!-- - *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->

<h2>Research Projects and Grants</h2>
<ul>
<li><p>Principal Investigator,&ldquo;Robust cooperative output regulation and its application&rdquo;,National Natural Science Foundation of China,2020.01-2023.12</p>
</li>
<li><p>Principal Investigator,&ldquo;Cooperative output regulation of multi-agent systems&rdquo;,Young Teachers Academic Startup Project of Beijing Institute of Technology,2018.09-2021.09</p>
</li>
<li><p>Participant,&ldquo;Basic theory and key technology of flexible wearable sensor network systems based on ubiquitous energy&rdquo;,Key Program of National Natural Science Foundation of China,2020.01-2024.12</p>
</li>
<li><p>Participant,&ldquo;Attachment and Cooperative control of complex flexible systems on asteroids&rdquo;,National Key R&D Program of China,2019.12-2024.11</p>
</li>
<li><p>Participant,&ldquo;Cooperative output regulation of nonlinear multi-agent systems and its applications&rdquo;,National Natural Science Foundation of China,2018.01-2021.12</p>
</li>
</ul>
<h2>Professional Activities</h2>
<h3>International Program Committee</h3>
<ul>
<li><p>Associate Editor: The 2020 IEEE International Conference on Control &amp; Automation, Sapporo, Hokkaido, Japan, Jul. 6–9, 2020</p>
</li>
<li><p>Associate Editor: The 2020 16th International Conference on Control, Automation, Robotics and Vision (ICARCV), Shenzhen, Dec. 13–15, 2020</p>
</li>
<li><p>Associate Editor and Session Chair: The 2019 IEEE International Conference on Control &amp; Automation, Edinburgh, Scotland, Jul. 16–19, 2019</p>
</li>
<li><p>Associate Editor: The 2018 15th International Conference on Control, Automation, Robotics and Vision (ICARCV), Singapore, Nov. 18–21, 2018</p>
</li>
<li><p>Associate Editor: The 2018 IEEE International Conference on Control &amp; Automation, Anchorage, Alaska, USA, Jun. 12–15, 2018</p>
</li>
<li><p>Publicity Chair and Associate Editor: The 2017 IEEE International Conference on Control &amp; Automation, Ohrid, Macedonia, Jul. 3–6, 2017</p>
</li>
<li><p>Associate Editor: The 2016 IEEE International Conference on Control &amp; Automation, Kathmandu, Nepal, Jun. 1–3, 2016</p>
</li>
</ul>
<h3>Journal Reviewer</h3>
<ul>
<li><p>IEEE Transactions on Automatic Control</p>
</li>
<li><p>Automatica</p>
</li>
<li><p>International Journal of Robust and Nonlinear Control</p>
</li>
<li><p>IEEE Transactions on Cybernetics <b>(Outstanding Reviewer Award)</b></p>
</li>
<li><p>IEEE Transactions on Control Systems Technology</p>
</li>
<li><p>IEEE Transactions on Control of Network Systems</p>
</li>
<li><p>IEEE Control Systems Letters</p>
</li>
<li><p>European Journal of Control</p>
</li>
<li><p>Control Engineering Practice</p>
</li>
<li><p>Nonlinear Analysis: Hybrid Systems</p>
</li>
<li><p>Unmanned Systems</p>
</li>
<li><p>Journal of Control Theory and Applications</p>
</li>
</ul>
<h2>Conference Presentations</h2>
<ul>
<li><p>The 2019 IEEE International Conference on Control &amp; Automation, Edinburgh, Scotland, Jul. 16–19, 2019 (20 mins)</p>
</li>
<li><p>The 2018 Chinese Control and Decision Conference, Shenyang, China, Jun. 9–11, 2018 (20 mins)</p>
</li>
<li><p>The 2018 Asian Control Conference, Gold Coast, Australia, Dec. 17–20, 2017 (20 mins)</p>
</li>
<li><p>The 2017 American Control Conference, Seattle, USA, May 24–26, 2017 (20 mins)</p>
</li>
<li><p>The 14th International Conference on Control, Automation, Robotics and Vision, Phuket, Thailand, Nov. 13–15, 2016 (20 mins)</p>
</li>
<li><p>The 2015 IEEE International Conference on Information and Automation, Li jiang, China, Aug. 8–10, 2015 (20 mins)</p>
</li>
<li><p>The 2015 American Control Conference, Chicago, USA, July 1–3, 2015 (20 mins)</p>
</li>
<li><p>The 33rd Chinese Control Conference, Nanjing, China, July 28–30, 2014 (20 mins)</p>
</li>
<li><p>The 4th IEEE International Conference on Cyber Technology in Automation, Control and Intelligent Systems, Hong Kong, China, June 4–7, 2014 (20 mins)</p>
</li>
<li><p>The 32nd Chinese Control Conference, Xi’an, China, July 26–28, 2013 (20 mins)</p>
</li>
</ul>
