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

<span class='anchor' id='about-me'></span>

I am Thanh Tran, an AI Resident / AI Research Engineer at the [FPT Software AI Center](https://fptsoftware.com/services/digital-technologies-and-platforms/artificial-intelligence), working under the supervision of [Dr. Van Nguyen](https://scholar.google.com/citations?user=rJe1704AAAAJ) and [Prof. Truong-Son Hy](https://scholar.google.com/citations?user=JiKBo6UAAAAJ). Previously, I earned my B.S. degree in Computer Science from the [VNU University of Engineering and Technology](https://uet.vnu.edu.vn/en/). I spent my sophomore year interning at [VinBigData](https://vinbigdata.com/en), where I worked on Automatic Speech Recognition.

My research centers on **multimodal learning** across a range of application scenarios. My past work spans visual-guided audio and speech generation, multisensory conversational emotion recognition, text-to-speech, and LLM agents. I also have experience in AI for Science (AI4Science), with three publications and a workshop paper in protein design.

My attached [CV](../resources/ThanhTVT_Resume.pdf) (*last updated: 2025 Nov*).

# 🔥 News
- *2025.05*: 🎉 One paper is accepted at **Interspeech 2025**!
- *2025.03*: 🎉 One paper is accepted at **Machine Learning: Science and Technology**!
- *2024.12*: 🎉 One paper is accepted at **ICASSP 2025**!
- *2024.11*: 🎉 One paper is accepted at **KDD 2025**!
- *2024.10*: 🎉 One paper is accepted at **Machine Learning in Structural Biology (MLSB)** Workshop in NeurIPS 2024!
- *2024.08*: 🎉 One paper is accepted at **IEEE Transactions on Evolutionary Computation**!
- *2023.08*: I join FPT Software AI Center <img src='./resources/AIC-x-FSOFT.png' style='width: 4em;'> as an AI Resident in Vietnam!
- *2021.10*: I join VinBigData <img src='./resources/VinBigData.png' style='width: 4em;'> as a speech research intern in Vietnam!

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"><b>ICASSP 2025</b></div><img src='resources/papers/ICASSP2025/ICASSP2025-ConxGNN.png' alt="ICASSP 2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Effective Context Modeling Framework for Emotion Recognition in Conversations](https://ieeexplore.ieee.org/document/10888112)

Cuong Tran Van\*, **Thanh V. T. Tran\***, Van Nguyen, Truong Son Hy

[**[Paper]**](https://ieeexplore.ieee.org/document/10888112) [**[Code]**](https://github.com/FSoft-AIC/ConxGNN/) [**[Poster]**](resources/papers/ICASSP2025/ConxGNN_ICASSP_Poster.pdf)
- We design a GNN framework modeling both multiscale and multivariate interactions among modalities and utterances within conversations. 
- We address class imbalance with a re-weighting scheme in the loss function. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"><b>KDD 2025</b></div><img src='resources/papers/KDD2025/KDD2025-GROOT.png' alt="KDD 2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GROOT: Effective Design of Biological Sequences with Limited Experimental Data](https://dl.acm.org/doi/10.1145/3690624.3709291)

**Thanh V. T. Tran\***, Nhat Khang Ngo\*, Viet Anh Nguyen, Truong Son Hy

[**[Paper]**](https://dl.acm.org/doi/10.1145/3690624.3709291) [**[Code]**](https://github.com/Fsoft-AIC/GROOT) [**[Poster]**](resources/papers/KDD2025/GROOT_KDD_Poster.pdf) [**[Slides]**](resources/papers/KDD2025/GROOT_KDD_Presentation.pdf)
- We introduce a novel framework using graph-based smoothing to train a surrogate model, which is then used in the optimization process. 
- We theoretically and empirically show that our technique can expand into extrapolation regions while keeping a reasonable distance from the training data. 
- Our method can be applied on diverse tasks of different domains. 
</div>
</div>
- [RESOUND: Speech Reconstruction from Silent Videos via Acoustic-Semantic Decomposed Modeling](https://www.isca-archive.org/interspeech_2025/pham25_interspeech.html), Long-Khanh Pham, **Thanh V. T. Tran**, Minh-Tan Pham, Van Nguyen \| **[Interspeech 2025]** [**[Project page]**](https://resound-l2s.github.io/)
- [LatentDE: Latent-based Directed Evolution for Protein Sequence Design](https://iopscience.iop.org/article/10.1088/2632-2153/adc2e2), **Thanh V. T. Tran**, Nhat Khang Ngo, Viet Thanh Duy Nguyen, Truong Son Hy \| **[Machine Learning: Science and Technology]** [**[Code]**](https://github.com/HySonLab/LatentDE)
- [Protein Design by Directed Evolution guided by Large Language Models](https://ieeexplore.ieee.org/document/10628050), **Thanh V. T. Tran**, Truong Son Hy \| **[IEEE Transactions on Evolutionary Computation]** [**[Code]**](https://github.com/HySonLab/Directed_Evolution) 

# 🎖 Honors and Awards
- Merit Scholarship (8 semesters), VNU University of Engineering and Technology
- Second prize in ASR Task 1, VLSP 2022 ([Certificate](https://drive.google.com/file/d/19ghduXlgazYgex_o71hjpz38DoQrviY2/view?usp=share_link))
- Third prize in ASR Task 2, VLSP 2022 ([Certificate](https://drive.google.com/file/d/1DhZGtwPI5Z-T_lenxscEITuodC67kHSJ/view?usp=share_link))
- Third prize in Scientific Research Contest, VNU University of Engineering and Technology ([Certificate](https://drive.google.com/file/d/1wjWLX_DMIj1PX7ZbR2H1vagaNSFqwRrA/view?usp=sharing))

# 📖 Educations
- *2019.08 - 2023.06*, Bachelor's Degree in Computer Science, [VNU University of Engineering and Technology](https://uet.vnu.edu.vn/en/) 

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Industry Experience
- *2023.08 - now*,     AI Resident & AI Research Engineer, [FPT Software AI Center](https://fptsoftware.com/services/digital-technologies-and-platforms/artificial-intelligence), Hanoi, Vietnam.
- *2021.10 - 2022.11*, Spoken Language Processing Department, [VinBigData](https://vinbigdata.com/en/), Hanoi, Vietnam.