/* =============================================================================
   SITE CONTENT — the ONLY file you edit to add content.
   Home previews + full pages are generated from the data below.
   - Plain text goes in "double quotes"; multi-line text in `back-ticks`.
   - To add an item, copy a block, paste it, edit the values. Newest first.
   ============================================================================= */

window.SITE = {
  me: "Kishalay Das",
  meAliases: ["Kishalay Das*", "Kishalay Das"],

  /* SOCIAL LINKS — networks: email, github, googlescholar, linkedin, x,
     youtube, researchgate, orcid. Put "#" to grey one out. */
  socials: [
    { network: "email",         url: "mailto:kishalay.msit@gmail.com" },
    { network: "googlescholar", url: "https://scholar.google.com/citations?user=AMP0uJsAAAAJ&hl=en" },
    { network: "github",        url: "https://github.com/kdmsit" },
    { network: "linkedin",      url: "https://www.linkedin.com/in/kishalay-das-kd-309850143/" },
    { network: "researchgate",  url: "https://www.researchgate.net/profile/Kishalay-Das" },
    { network: "youtube",       url: "https://youtube.com/user/kishalaydas" },
  ],

  /* PUBLICATIONS (newest first). Buttons shown: Paper (uses `arxiv` if set, else `paper`),
     Code ("" = greyed out), Poster (only if set), and a Vlog or Video entry from `links`.
     Other fields (openreview, Slides, Blog…) are kept but not shown.
     Add `bibtex: \`...\`` to show a Cite button. */
  publications: [
    {
      year: 2026, badge: "UAI",
      title: "Model Agnostic Graph Prompt Learning for Crystal Property Prediction",
      authors: "Shrimon Mukherjee*, Kishalay Das*, Pawan Goyal, Partha Basuchowdhuri, Niloy Ganguly",
      venue: "Conference on Uncertainty in Artificial Intelligence (UAI)",
      paper: "https://arxiv.org/abs/2607.08996", arxiv: "https://arxiv.org/abs/2607.08996", openreview: "", code: "https://github.com/shrimonmuke0202/Prompt", poster: "",
    },
    {
      year: 2026, badge: "ICML",
      title: "Latent Diffusion Pretraining for Crystal Property Prediction",
      authors: "Shrimon Mukherjee*, Kishalay Das*, Pawan Goyal, Partha Basuchowdhuri, Niloy Ganguly",
      venue: "International Conference on Machine Learning (ICML) · also AI4Mat Workshop @ ICLR 2025",
      paper: "https://arxiv.org/abs/2606.00776", arxiv: "https://arxiv.org/abs/2606.00776", openreview: "", code: "https://github.com/shrimonmuke0202/CrysLDNet", poster: "",
    },
    {
      year: 2025, badge: "NeurIPS",
      title: "LLM Meets Diffusion: A Hybrid Framework for Crystal Material Generation",
      authors: "Subhojyoti Khastagir*, Kishalay Das*, Pawan Goyal, Seung-Cheol Lee, Satadeep Bhattacharjee, Niloy Ganguly",
      venue: "Neural Information Processing Systems (NeurIPS)",
      paper: "https://arxiv.org/pdf/2510.23040",
      arxiv: "https://arxiv.org/pdf/2510.23040",
      openreview: "https://openreview.net/forum?id=E6gwPtWjb1",
      code: "https://github.com/kdmsit/crysllmgen",
      poster: "assets/pdf/NeurIPS2025/CrysLLMGen.pdf",
    },
    {
      year: 2025, badge: "ICLR",
      title: "Periodic Materials Generation using Text-Guided Joint Diffusion Model",
      authors: "Kishalay Das, Subhojyoti Khastagir, Pawan Goyal, Seung-Cheol Lee, Satadeep Bhattacharjee, Niloy Ganguly",
      venue: "International Conference on Learning Representations (ICLR)",
      paper: "https://arxiv.org/abs/2503.00522",
      arxiv: "https://arxiv.org/abs/2503.00522",
      openreview: "https://openreview.net/forum?id=AkBrb7yQ0G",
      code: "https://github.com/kdmsit/TGDMat",
      poster: "assets/pdf/ICLR2025/ICLR_2025_Poster.pdf",
      links: [{ label: "Vlog", url: "https://youtu.be/u0BFqDiOoVs" }],
    },
    {
      year: 2023, badge: "UAI",
      title: "CrysMMNet: Multimodal Representation for Crystal Property Prediction",
      authors: "Kishalay Das, Pawan Goyal, Seung-Cheol Lee, Satadeep Bhattacharjee, Niloy Ganguly",
      venue: "Conference on Uncertainty in Artificial Intelligence (UAI)",
      paper: "https://proceedings.mlr.press/v216/das23a.html",
      arxiv: "https://arxiv.org/pdf/2307.05390.pdf",
      openreview: "https://openreview.net/forum?id=06jLJiUAKX",
      code: "https://github.com/kdmsit/crysmmnet",
      poster: "assets/pdf/UAI2023/605_das.pdf",
      links: [{ label: "Vlog", url: "https://youtu.be/dJSCCG31mEI" }],
    },
    {
      year: 2023, badge: "AAAI",
      title: "CrysGNN: Distilling Pre-trained Knowledge to Enhance Property Prediction for Crystalline Materials",
      authors: "Kishalay Das, Bidisha Samanta, Pawan Goyal, Seung-Cheol Lee, Satadeep Bhattacharjee, Niloy Ganguly",
      venue: "AAAI Conference on Artificial Intelligence · also ML4Materials Workshop @ ICLR 2023",
      paper: "https://ojs.aaai.org/index.php/AAAI/article/view/25892",
      arxiv: "https://arxiv.org/abs/2301.05852",
      openreview: "",
      code: "https://github.com/kdmsit/crysgnn.git",
      poster: "assets/pdf/AAAI2023/CrysGNN_AAAI2023_poster.pdf",
      links: [
        { label: "Slides", url: "assets/pdf/AAAI2023/CrysGNN_Slides.pdf" },
        { label: "Video",  url: "https://youtu.be/J8rXFUlDrLk" },
      ],
    },
    {
      year: 2022, badge: "npj Comput. Mater.",
      title: "CrysXPP: An Explainable Property Predictor for Crystalline Material",
      authors: "Kishalay Das, Bidisha Samanta, Pawan Goyal, Seung-Cheol Lee, Satadeep Bhattacharjee, Niloy Ganguly",
      venue: "npj Computational Materials (Nature) · Impact Factor 13.2",
      paper: "https://www.nature.com/articles/s41524-022-00716-8.pdf",
      arxiv: "", openreview: "",
      code: "https://github.com/kdmsit/crysxpp.git",
      poster: "",
      links: [
        { label: "Slides", url: "assets/pdf/CRYSXPP.pdf" },
        { label: "Video", url: "https://www.youtube.com/watch?v=Kyrpj9cSkkM" },
        { label: "Blog", url: "https://medium.com/@cnerg.iitkgp/crysxpp-an-explainable-property-predictor-for-crystalline-materials-28d90cef13f3" },
        { label: "Project Page", url: "https://cnerg-iitkgp.github.io/ml/crysxpp/" },
      ],
    },
    {
      year: 2020, badge: "IEEE BigData",
      title: "Hypergraph Attention Isomorphism Network by Learning Line Graph Expansion",
      authors: "Sambaran Bandyopadhyay, Kishalay Das, M. Narasimha Murty",
      venue: "IEEE International Conference on Big Data",
      paper: "https://ieeexplore.ieee.org/abstract/document/9378335",
      arxiv: "", openreview: "",
      code: "https://github.com/kdmsit/HAIN.git",
      poster: "",
      links: [
        { label: "Slides", url: "assets/pdf/HAIN.pdf" },
        { label: "Video", url: "https://www.youtube.com/watch?v=33XLw6LyoVU" },
      ],
    },
    {
      year: 2020, badge: "arXiv",
      title: "Line Hypergraph Convolution Network: Applying Graph Convolution for Hypergraphs",
      authors: "Sambaran Bandyopadhyay, Kishalay Das, M. Narasimha Murty",
      venue: "Preprint",
      paper: "https://arxiv.org/pdf/2002.03392.pdf",
      arxiv: "https://arxiv.org/pdf/2002.03392.pdf",
      openreview: "",
      code: "https://github.com/kdmsit/LHCN.git",
      poster: "",
    },
  ],

  /* NEWS (newest first). "year" groups items on news.html. */
  news: [
    { date: "May 2026", year: 2026, html: `🎉 <strong>CrysPrompt</strong> accepted at <a href="https://www.auai.org/uai2026/" target="_blank" rel="noopener">UAI 2026</a>.` },
    { date: "Apr 2026", year: 2026, html: `🎉 <strong>CrysLDNet</strong> accepted at <a href="https://icml.cc/" target="_blank" rel="noopener">ICML 2026</a>.` },
    { date: "Apr 2026", year: 2026, html: `Joined the <a href="https://krishnaswamylab.org/" target="_blank" rel="noopener">Smita Krishnaswamy Lab</a> at <strong>Yale University</strong> as a Postdoctoral Associate.` },
    { date: "Jan 2026", year: 2026, html: `🎓 Defended my Ph.D. thesis — officially <strong>Dr. Kishalay Das</strong>!` },
    { date: "Sep 2025", year: 2025, html: `🎉 <strong>CrysLLMGen</strong> accepted at <a href="https://neurips.cc/" target="_blank" rel="noopener">NeurIPS 2025</a>.` },
    { date: "Apr 2025", year: 2025, html: `Attended ICLR 2025 and presented <strong>TGDMat</strong> [<a href="assets/pdf/ICLR2025/ICLR_2025_Poster.pdf" target="_blank" rel="noopener">Poster</a>] [<a href="https://youtu.be/u0BFqDiOoVs" target="_blank" rel="noopener">Vlog</a>].` },
    { date: "Jan 2025", year: 2025, html: `🎉 <strong>TGDMat</strong> accepted at <a href="https://iclr.cc/" target="_blank" rel="noopener">ICLR 2025</a>.` },
  ],

  /* ACADEMIC SERVICE — shown on the home page. */
  service: [
    { role: "Program Committee", items: ["IJCAI 2025", "AAAI 2025", "AAAI 2026"] },
    { role: "Reviewer", items: ["ICML 2026", "ICLR 2025, 2026, 2027", "KDD 2024, 2026", "NeurIPS 2025, 2026", "LoG 2024, 2025", "AAAI 2024"] },
  ],

  /* JOURNEY (newest first) — education and positions on one timeline. */
  journey: [
    {
      period: "Apr 2026 – Present", kind: "Postdoc",
      role: "Postdoctoral Associate",
      org: "Krishnaswamy Lab, Yale University", location: "New Haven, CT, USA",
      points: [
        "Advisor: Prof. Smita Krishnaswamy.",
        "Research at the intersection of geometric deep learning, generative modeling, and AI for medicine.",
      ],
    },
    {
      period: "Jul 2020 – Jan 2026", kind: "Ph.D. · PMRF",
      role: "Ph.D. in Computer Science & Engineering (Prime Minister's Research Fellow)",
      org: "Complex Networks Research Group (CNeRG), IIT Kharagpur", location: "Kharagpur, India",
      points: [
        "Advisors: Prof. Niloy Ganguly & Prof. Pawan Goyal · CGPA 9.5 / 10.",
        "Thesis: \"Robust & Efficient AI Frameworks for Scalable Materials Design and Property Prediction\".",
        "Developed explainable property predictors for crystalline materials using graph neural networks.",
        "Built generative models for periodic crystal structure generation (ICLR, NeurIPS, UAI, ICML).",
        "Explored low-resource and self-supervised learning strategies for materials property prediction.",
      ],
    },
    {
      period: "2018 – 2020", kind: "M.Tech",
      role: "M.Tech in Computer Science & Automation",
      org: "Indian Institute of Science (IISc)", location: "Bangalore, India",
      points: [
        "Advisor: Prof. M. Narasimha Murty · CGPA 8.8 / 10.",
        "Thesis: \"Graph Neural Network for Embedding Hypergraphs by Learning Line Graph Expansion\".",
      ],
    },
    {
      period: "May 2017 – Jul 2018", kind: "Industry",
      role: "Scientist / Engineer – SC",
      org: "ISRO Telemetry Tracking and Command Network (ISTRAC), ISRO", location: "Bangalore, India",
      points: [
        "Supported launch activities for Cartosat-2E, Cartosat-2F / Microsat-1 / INS-1C missions.",
        "Conducted pre-launch simulations, flight dynamics reviews, and LEOP special activities.",
        "Developed web interfaces and Android applications for spacecraft control and monitoring.",
      ],
    },
    {
      period: "Apr 2015 – Mar 2017", kind: "GATE",
      role: "GATE Preparation",
      org: "GATE CSE", location: "",
      points: ["Secured All India Rank (AIR) 37 in GATE CSE 2017."],
    },
    {
      period: "Mar 2013 – Apr 2015", kind: "Industry",
      role: "Systems Engineer",
      org: "Tata Consultancy Services (TCS)", location: "Kolkata, India",
      points: ["Web developer (ASP.NET & MS SharePoint) · Client: Philips Morris International, Peabody."],
    },
    {
      period: "Jul 2012 – Feb 2013", kind: "Industry",
      role: "Associate Software Developer",
      org: "Accenture Pvt. Ltd.", location: "Hyderabad, India",
      points: ["Developer in SAP Basis & SAP ABAP for client DuPont."],
    },
    {
      period: "2008 – 2012", kind: "B.Tech",
      role: "B.Tech in Computer Science & Engineering",
      org: "Meghnad Saha Institute of Technology (WBUT)", location: "Kolkata, India",
      points: ["CGPA 8.37 / 10."],
    },
  ],

  teaching: [],
};
