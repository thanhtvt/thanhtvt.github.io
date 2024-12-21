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

I am Thanh Tran, an AI Resident at [FPT Software AI Center](https://fpt-aicenter.com/), under the supervision of [Dr. Van Nguyen](https://scholar.google.com/citations?user=rJe1704AAAAJ) and [Prof. Son Hy](https://scholar.google.com/citations?user=JiKBo6UAAAAJ). Before that, I obtained my B.S. degree in Computer Science from [University of Engineering and Technology, Vietnam National University](https://uet.vnu.edu.vn/en/). I used to intern at [VinBigData](https://vinbigdata.com/en), working on Automatic Speech Recognition.

My research interests focus on audio and speech synthesis, particularly their generation from other modalities like visual data and text. I also have experience in AI for Science, with two papers and one workshop published in the field of protein design. 

My attached [CV](https://drive.google.com/file/d/1tStwxQ5qdfPdOWf8xc0I_LcjllbG1sOg/view?usp=sharing) (*last updated: 2024 Dec*).

# 🔥 News
- *2024.12*: 🎉 One paper is accepted at **ICASSP 2025**!
- *2024.11*: 🎉 One paper is accepted at **KDD 2025**!
- *2024.10*: 🎉 One paper is accepted at **Machine Learning in Structural Biology (MLSB)** Workshop in NeurIPS 2024!
- *2024.08*: 🎉 One paper is accepted at **IEEE Transactions on Evolutionary Computation**!
- *2023.08*: I join FPT Software AI Center <img src='./images/AIC-x-FSOFT.png' style='width: 4em;'> as an AI Resident in Vietnam!
- *2021.10*: I join VinBigData <img src='./images/VinBigData.png' style='width: 4em;'> as a speech research intern in Vietnam!

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"><b>ICASSP 2025</b></div><img src='images/papers/ICASSP2025-ConxGNN.png' alt="ICASSP 2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Effective Context Modeling Framework for Emotion Recognition in Conversations]()

Cuong Tran Van\*, **Thanh V. T. Tran\***, Van Nguyen, Truong Son Hy

[**[Paper]**]() [**[Code]**]() 
- We design a GNN framework modeling both multiscale and multivariate interactions among modalities and utterances within conversations. 
- We address class imbalance with a re-weighting scheme in the loss function. 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"><b>KDD 2025</b></div><img src='images/papers/KDD2025-GROOT.png' alt="KDD 2025" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GROOT: Effective Design of Biological Sequences with Limited Experimental Data](https://arxiv.org/abs/2411.11265)

**Thanh V. T. Tran\***, Nhat Khang Ngo\*, Viet Anh Nguyen, Truong Son Hy

[**[Paper]**](https://arxiv.org/abs/2411.11265) [**[Code]**](https://github.com/Fsoft-AIC/GROOT) 
- We introduce a novel framework using graph-based smoothing to train a surrogate model, which is then used in the optimization process. 
- We theoretically and empirically show that our technique can expand into extrapolation regions while keeping a reasonable distance from the training data. 
- Our method can be applied on diverse tasks of different domains. 
</div>
</div>

- [LatentDE: Latent-based Directed Evolution accelerated by Gradient Ascent for Protein Sequence Design](https://www.mlsb.io/papers_2024/LatentDE:_Latent-based_Directed_Evolution_accelerated_by_Gradient_Ascent_for_Protein_Sequence_Design.pdf), Nhat Khang Ngo\*, **Thanh V. T. Tran\***, Viet Thanh Duy Nguyen, Truong Son Hy \| **[MLSB Workshop]** [**[Code]**](https://github.com/HySonLab/LatentDE)
- [Protein Design by Directed Evolution guided by Large Language Models](https://ieeexplore.ieee.org/document/10628050), **Thanh V. T. Tran**, Truong Son Hy \| **[IEEE Transactions on Evolutionary Computation]** [**[Code]**](https://github.com/HySonLab/Directed_Evolution) 

# 🎖 Honors and Awards
- University of Engineering and Technology's Scholarship
- Second prize in ASR Task 1, VLSP 2022 ([Certificate](https://drive.google.com/file/d/19ghduXlgazYgex_o71hjpz38DoQrviY2/view?usp=share_link))
- Third prize in ASR Task 2, VLSP 2022 ([Certificate](https://drive.google.com/file/d/1DhZGtwPI5Z-T_lenxscEITuodC67kHSJ/view?usp=share_link))
- Third prize in Scientific Research Contest, University of Engineering and Technology ([Certificate](https://drive.google.com/file/d/1wjWLX_DMIj1PX7ZbR2H1vagaNSFqwRrA/view?usp=sharing))

# 📖 Educations
- *2019.08 - 2023.06*, Undergraduate Student, [University of Engineering and Technology (UET), Vietnam National University](https://uet.vnu.edu.vn/en/) 

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Industry Experience
- *2023.08 - now*,     AI Resident, [FPT Software AI Center](https://fpt-aicenter.com), Hanoi, Vietnam
- *2021.10 - 2022.11*, Spoken Language Processing Department, [VinBigData](https://vinbigdata.com/en/), Hanoi, Vietnam.