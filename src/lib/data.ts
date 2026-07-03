export interface Publication {
  slug: string;
  venue: string;
  title: string;
  blurb: string;
  status: string;
  color: string;
  abstract: string;
  methodology: string;
  contributions: string[];
  link?: string;
}

export interface Project {
  slug: string;
  title: string;
  org: string;
  stack: string[];
  body: string;
  features: string[];
  link?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    slug: "quantum-learning",
    venue: "AIMLSystems 2025 · IEEE Xplore",
    title: "Adaptive Quantum-Enhanced Learning (NISQ Era)",
    blurb: "Hybrid framework for robust QML; presented at the 5th Intl. Conf. on AI-ML-Systems.",
    status: "PUBLISHED",
    color: "bg-hot text-white",
    abstract: "This paper presents a hybrid classical-quantum framework designed for robust Quantum Machine Learning (QML) on Noisy Intermediate-Scale Quantum (NISQ) devices. By implementing adaptive error mitigation protocols and regularizing the parameter updates, we significantly reduce the effects of decoherence and gate noise, yielding a +14% relative performance improvement over standard QML baselines in classifying complex high-dimensional datasets.",
    methodology: "We leverage a Parameterized Quantum Circuit (PQC) coupled with real-time classical optimization. An adaptive error-mitigation layer computes expectations and adjusts classical optimizer parameters dynamically using hardware-specific noise models.",
    contributions: [
      "Real-time classical-quantum feedback loop for parameter tuning on noisy hardware.",
      "Novel noise-resilient cost-function formulation.",
      "Empirical validation on actual NISQ processors showing improved classification convergence."
    ],
    link: "https://ieeexplore.ieee.org/"
  },
  {
    slug: "pqc-quic-telemetry",
    venue: "SCI 2026",
    title: "Adaptive PQC Key-Encapsulation for Multipath QUIC Telemetry",
    blurb: "Quantum-resilient multipath QUIC with learning-based routing and adaptive FEC.",
    status: "ACCEPTED",
    color: "bg-cobalt text-white",
    abstract: "A quantum-resilient approach to multipath QUIC telemetry using adaptive Post-Quantum Cryptography (PQC). This work introduces dynamic key-encapsulation switching mechanisms based on network conditions and packet error rates. By combining Kyber key exchange with learning-based routing and adaptive forward error correction (FEC), the pipeline minimizes decryption latency overhead while ensuring absolute security against harvest-now-decrypt-later adversaries.",
    methodology: "We implemented an adaptive cryptographic selector within the multipath QUIC handshake. As telemetry links change, the system shifts between different PQC parameter strengths (Kyber-512/768/1024) while dynamically adapting FEC code rates to maintain performance.",
    contributions: [
      "Integration of post-quantum KEMs within multipath telemetry streams.",
      "Machine learning-driven routing policy minimizing packet re-ordering delay.",
      "40% reduction in handshake negotiation latency compared to static post-quantum QUIC."
    ]
  },
  {
    slug: "llm-courtroom-simulation",
    venue: "SCI 2026",
    title: "LLM-Based Courtroom Simulation for Indian Civil Law",
    blurb: "Multi-agent RAG framework using the Indian Kanoon corpus for adversarial legal proceedings.",
    status: "ACCEPTED",
    color: "bg-cobalt text-white",
    abstract: "An adversarial multi-agent RAG (Retrieval-Augmented Generation) framework designed to simulate Indian civil law courtroom proceedings. The system employs specialized agents modeling judges, defense lawyers, and prosecution lawyers, utilizing a vectorized index of the Indian Kanoon corpus. The agents dynamically cross-examine evidence, argue legal precedents, and draft judicial rulings aligned with Indian constitutional law.",
    methodology: "Constructed using LangGraph for multi-agent choreography. The legal documents are chunked and embedded via HuggingFace models, indexed in Pinecone, and dynamically queried during agent turns to generate contextually accurate arguments.",
    contributions: [
      "Multi-agent state machine modeling the adversarial legal process.",
      "Contextual retrieval template specifically tuned for Indian Civil Procedure Code (CPC).",
      "Rulings evaluated by legal experts with high concordance scores to actual judicial precedents."
    ]
  },
  {
    slug: "neural-ricci-flow",
    venue: "Preprint",
    title: "Neural Ricci Flow: Curvature-Constrained SSL Regularizer",
    blurb: "Sinkhorn OT regularizer prevents manifold collapse. +5.2% accuracy at low overhead.",
    status: "UNDER REVIEW",
    color: "bg-mustard text-ink",
    abstract: "Introduces a novel self-supervised learning (SSL) regularizer inspired by Riemannian geometry and Ricci flow. By modeling the latent embedding manifold's local curvature and dynamically smoothing high-curvature bottlenecks using Sinkhorn Optimal Transport, the regularizer prevents representation collapse. We show that curvature regularization yields a +5.2% accuracy improvement on low-resource downstream tasks.",
    methodology: "Computes local Ricci curvature tensors in mini-batch latent spaces. Smooths bottlenecks through curvature-driven flow equations, preventing collapse of distinct clusters into a single dimension.",
    contributions: [
      "Geometric formulation of manifold collapse in self-supervised representation learning.",
      "Sinkhorn optimal transport alignment driven by local manifold curvature.",
      "Extensive testing on ImageNet-1k downstream classification tasks showing state-of-the-art results on sparse labels."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    slug: "medical-image-gen",
    title: "Medical-to-Medical Image Generation",
    org: "Research · Jan 2026 – Present",
    stack: ["GANs", "PyTorch", "Diffusion"],
    body: "High-fidelity medical modality translation using generative deep learning. This project translates MRI scans to CT scans (and vice versa) utilizing dual-generator GANs and DDPMs (Denoising Diffusion Probabilistic Models), reducing scan times and costs while preserving pixel-perfect anatomical structures.",
    features: [
      "Modality translation (MRI <-> CT).",
      "Denoising Diffusion models optimized for volumetric medical imaging.",
      "Structural Similarity Index (SSIM) of > 0.94 achieved on clinical validation sets."
    ]
  },
  {
    slug: "simple-operator",
    title: "Simple Operator",
    org: "Rust · LZ4 · Nov–Dec 2025",
    stack: ["Rust", "PQC", "LZ4", "CRC32"],
    body: "An asynchronous secure file transfer pipeline built in Rust. It utilizes high-throughput LZ4 compression, post-quantum key encapsulation, and CRC32 payload verification to deliver lightweight, highly resilient secure data pipelines. The system yields +30% throughput, +40% network reliability, and 20–25% smaller secure payloads.",
    features: [
      "High performance async network protocols in Rust.",
      "Integrated post-quantum encryption for file payloads.",
      "Live CRC32 integrity verification and auto-recovery blocks."
    ]
  },
  {
    slug: "meddo",
    title: "MedDo",
    org: "Python · Pinecone · Aug–Oct 2025",
    stack: ["Pinecone", "RAG", "Python"],
    body: "A LeetCode-style interactive preparation platform for USMLE (United States Medical Licensing Examination) exams. Powered by Pinecone vector databases and RAG, it serves over 1,000+ interactive clinical cases, adapting dynamically to user weak points and reducing exam prep time by approximately 35%.",
    features: [
      "Real-time diagnostic RAG answering medical inquiries.",
      "Adaptive difficulty scaling based on history.",
      "Vector databases for case search."
    ]
  },
  {
    slug: "lex-orion",
    title: "Lex Orion",
    org: "LangGraph · RAG · Jan–Apr 2025",
    stack: ["LangGraph", "Agents", "RAG"],
    body: "An agentic AI courtroom simulator. Utilizing LangGraph for complex agent coordination, this system assigns autonomous judge and lawyer agent roles to analyze legal documents, automate argument extraction, cross-examine evidence, and draft briefs from 300+ civil lawsuit files.",
    features: [
      "Complex state machine mapping agent roles and legal turns.",
      "Auto-extraction of conflicting statements and precedents.",
      "RAG search engine over PDF directories."
    ]
  },
  {
    slug: "aura-iot",
    title: "AURA 1.0",
    org: "IoT · Aug 2024",
    stack: ["RL", "DHT11", "MQ135"],
    body: "An IoT-driven environmental risk analyzer. Built with hardware sensors (DHT11 temperature/humidity, MQ135 air quality) connected to a reinforcement learning model that analyzes real-time ambient hazards and predicts fire or air quality threats.",
    features: [
      "Embedded hardware sensor processing loop.",
      "Local RL model running on microcontrollers.",
      "Threat mitigation and alerts dispatch pipeline."
    ]
  }
];
