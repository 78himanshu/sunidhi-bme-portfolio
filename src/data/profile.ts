export type Experience = {
  company: string;
  group: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
  tags?: string[];
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  bullets: string[];
  tags: string[];
  images: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Sunidhi",
  title: "Biomedical Engineer - Medical Device Design",
  location: "Irvine, CA",
  email: "sunidhi.1@duke.edu",
  linkedinUrl: "https://www.linkedin.com/in/sunidhipandit08/",
  summary:
    "I’m a biomedical engineer driven by the challenge of turning complex healthcare problems into practical, scalable solutions. My experience spans the medical device lifecycle, from gathering clinical insights and developing concepts to engineering design, quality and validation, and manufacturing execution, with a focus on ensuring innovations are not only creative but also safe, reliable, and ready for real-world use. I bring a systems-level mindset and strong cross-functional collaboration to connect engineering rigor with clinical relevance, helping teams move ideas into production-ready technologies that can meaningfully improve patient care.",
  impactHighlights: [
    {
      label: "Cost Reduction",
      value: "$38K",
      detail: "Automated ablation testing with robotic actuator"
    },
    {
      label: "Measurement Precision",
      value: "+18%",
      detail: "New standard test method for ablation performance"
    },
    {
      label: "Repeatability",
      value: "+22%",
      detail: "Ablation performance STM improvement"
    },
    {
      label: "Traceability",
      value: "100%",
      detail: "Closed subsystem trace gaps to design evidence"
    }
  ],
  experiences: [
    {
      company: "Johnson & Johnson MedTech",
      group: "Electrophysiology",
      role: "NPD Quality Co-op",
      location: "Irvine, CA",
      dates: "Sep 2025-Jan 2026",
      bullets: [
        "Designed and validated a robotic ablation actuator interfaced with the TruePulse Generator to autonomously perform 100 PFA ablation cycles per cable; eliminated manual testing, leading to a $38K cost reduction and improved precision.",
        "Executed Design Verification Testing (DVT) for commercial catheter builds, analyzing functional/performance data against design inputs to validate reliability and ensure compliance with design control requirements before release.",
        "Authored a new standard test method (STM) for ablation performance testing, increasing measurement precision by 18% and repeatability by 22%, enabling consistent data generation across commercial catheter builds.",
        "Performed an in-depth failure investigation on catheter lots via fatigue-life testing; established thermal stress from repetitive pulsing as the root cause and suggested design improvements that reduced recurrence by 73% under worst-case conditions.",
        "Built end-to-end traceability for a subsystem from user needs -> design outputs -> verification evidence, closing 100% of trace gaps identified during internal review and accelerating design freeze readiness.",
        "Authored and maintained 18 risk management artifacts (DFMEA, hazard analyses); closed 14 high-severity items by converting mitigations into testable design requirements with verified evidence."
      ],
      tags: ["ISO 13485", "V&V", "DVT", "DFMEA", "Risk Management", "Traceability"]
    },
    {
      company: "Johnson & Johnson MedTech",
      group: "Electrophysiology",
      role: "R&D Quality Intern",
      location: "Irvine, CA",
      dates: "May 2025-Aug 2025",
      bullets: [
        "Developed and executed Test Method Validation (TMV) protocols for PFA ablation catheter deflection testing; performed blinded validation and Gage R&R studies on medium-risk systems, improving reproducibility by >15% and ensuring compliance with ISO 13485.",
        "Authored an engineering report on a catheter lot deviation labeled \"use-as-is\" by performing worst-case risk assessment and tolerance analyses, leading to regulatory acceptance and a specification revision that strengthened long-term quality control.",
        "Optimized polyurethane (PU) application process by designing controlled experiments to quantify material usage; updated SOPs to reduce process variability by ~20% and enhance manufacturing consistency.",
        "Detected process drift in catheter dimensions using Minitab control charting, normality testing, and Cp/Cpk analysis; drove targeted process changes improving capability by 0.2 and reducing variation by ~25%.",
        "Facilitated risk reviews across 3 subsystem iterations, converting failure modes into 9 design changes that lowered high-severity rankings and strengthened verification alignment before release.",
        "Co-led the CREDO Action Team and hosted a 150+ employee campus-wide event to strengthen cross-functional collaboration alignment."
      ],
      tags: ["TMV", "Gage R&R", "ISO 13485", "Risk Reviews", "Process Capability"]
    },
    {
      company: "Duke Simulation Centre",
      group: "Clinical R&D",
      role: "Clinical R&D Engineer",
      location: "Durham, NC",
      dates: "Oct 2024-Apr 2025",
      bullets: [
        "Conducted 40-plus hours of shadowing and 12 physician interviews, then translated clinical findings into 18 traceable design inputs and 32 measurable engineering specifications for a next-generation electrical cystoscope.",
        "Prototyped an ergonomic electrical cystoscope and engineered a study-ready clinical workflow with 2 data collection SOPs and an operator checklist, then analyzed results from 10 simulated use sessions to drive 6 design iterations and stabilize procedure steps",
        "Executed DFMEA and usability risk assessment across 15 failure modes, implemented risk controls, and applied DFM plus tolerance optimization to reduce injection molded defects by 15% and improve build consistency.",
        "Defined study-specific workflow requirements for cystoscopy simulation by mapping 8 procedural steps and converting them into setup, data capture, and troubleshooting checklists used across 10 sessions."  
      ],
      tags: ["TMV", "Gage R&R", "ISO 13485", "Risk Reviews", "Process Capability"]
    },

    {
      company: "S&M Industries",
      group: "Manufacturing",
      role: "Manufacturing and Operations Head",
      location: "India",
      dates: "May 2022-Jul 2024",
      bullets: [
        "Directed ISO-controlled Class I cleanroom manufacturing across 2 production lines and 4 SKUs; managed daily documentation review, in-process QC checks, and dispatch to deliver ~10,000 units/month with 98% OTIF and >97% FPY.",
        "Drove defect containment/disposition for line events; executed bracketing, initiated CAPA investigations, and implemented corrective actions with QC/Ops, reducing defect rate 35% and scrap/rework 25% in one quarter.",
        "Established SPC-based process controls and capability monitoring; deployed fixtures/manufacturing aids, reducing cycle time 18% and increasing equipment uptime 12%.",
        "Built and scaled a 14-person cross-functional floor team; implemented training certification and layered process audits, improving audit readiness and cutting escalations 30% while sustaining 98% OTIF."
      ],
      tags: ["Cleanroom", "CAPA", "SPC", "Manufacturing", "Ops"]
    }
  ],
  projects: [
    {
      title: "Spinal Biopsy and Aspiration Needle",
      slug: "spinal-biopsy-needle",
      description:
        "Electrically actuated spinal biopsy and aspiration needle to improve procedural support and stability with integrated controls for precise manipulation during image-guided sampling.",
      bullets: [
        "Motor + gearbox drive for controlled rotation (RPM/torque).",
        "Linear feed control for precise axial advancement and retraction.",
        "Concentric cannula-stylet architecture with modular removable inner shell.",
        "Torsionally stiff dual-grip housing with high-friction texture for anti-rotation stability."
      ],
      tags: ["Device Design", "Mechatronics", "Ergonomics"],
      images: ["/projects/spinal-biopsy-needle.png"]
    },
    {
      title: "Mitral Valve Reconstruction",
      slug: "mitral-valve-reconstruction",
      description:
        "Patient-specific mitral valve CAD built from imaging and virtually positioned to verify fit and alignment.",
      bullets: [
        "DICOM segmentation in 3D Slicer to clean STL anatomy model.",
        "Annulus-driven parametric CAD (AP/CC diameters + saddle profile).",
        "Virtual deployment and alignment to inflow axis and coaptation plane.",
        "Clearance and contact checks (leaflets/chordae/LVOT) for fit validation."
      ],
      tags: ["Medical Imaging", "CAD", "Patient-Specific Design"],
      images: ["/projects/mitral-valve-reconstruction.png"]
    },
    {
      title: "Cystoscope Redesign",
      slug: "cystoscope-redesign",
      description:
        "Fully electric cystoscope redesign with ergonomic handpiece and integrated fluid management controls.",
      bullets: [
        "Electromechanical actuation platform (motorized control of distal functions).",
        "Integrated inlet/outlet flow control valves embedded in the handle.",
        "Ergonomic pistol-grip geometry for improved torque control and reduced fatigue.",
        "Modular shaft-handle interface for assembly, serviceability, and sealing integrity."
      ],
      tags: ["Device Redesign", "Human Factors", "Fluid Control"],
      images: ["/projects/cystoscope-redesign.png"]
    },
    {
      title: "Clinical Tongue Stabiliser",
      slug: "clinical-tongue-stabiliser",
      description:
        "End-to-end Class I intraoral airway-visualization aid for awake, in-clinic UPPP under local anesthesia; depresses tongue and manages saliva pooling.",
      bullets: [
        "Anatomy-conforming mouthguard geometry with integrated tongue-depressor interface.",
        "Saliva management path (drainage channel/reservoir) to reduce pooling and regurgitation.",
        "Parametric sizing (multiple opening-angle variants) to cover anatomy and jaw-opening range.",
        "V&V-ready design with biocompatible, cleanable materials and tolerance-controlled CAD for repeatable fit and retention."
      ],
      tags: ["Class I Device", "Clinical Observations", "V&V", "DFM"],
      images: ["/projects/tongue-stabiliser-1.png", "/projects/tongue-stabiliser-2.png"]
    },
    {
      title: "Automated Ablation Fixture",
      slug: "automated-ablation-fixture",
      description:
        "Automated ablation test fixture with servo + DC motor actuation for repeatable swipe trajectories and controlled contact force.",
      bullets: [
        "Servo-driven angular positioning for programmable stroke profiles.",
        "DC motor drive for constant-speed linear and rotary motion during swipes.",
        "Adjustable linkage and slider mechanism to tune stroke length and attack angle.",
        "Rigid alignment-controlled frame to minimize backlash and improve repeatability."
      ],
      tags: ["Testing Automation", "Verification", "Mechatronics"],
      images: ["/projects/automated-ablation-fixture-1.png", "/projects/automated-ablation-fixture-2.png"]
    },
    {
      title: "Catheter Handle Rotation Fixture",
      slug: "catheter-handle-rotation-fixture",
      description:
        "Automated rotational cycling fixture to verify handle durability and torque-transmission integrity.",
      bullets: [
        "Motorized rotation with programmable cycle count and angular limits.",
        "Torque and rotation control to simulate worst-case user actuation loads.",
        "Rigid clamping interface to constrain handle and prevent slip.",
        "Repeatable alignment and low-backlash drivetrain for consistent fatigue profiles."
      ],
      tags: ["Fatigue Testing", "Verification", "Fixture Design"],
      images: ["/projects/catheter-handle-rotation-1.png", "/projects/catheter-handle-rotation-2.png"]
    },
    {
      title: "PLGA Nanoparticles for Brain Tumor",
      slug: "plga-nanoparticles",
      description:
        "Targeted brain-tumor drug delivery platform using PLGA nanoparticles engineered for controlled release and enhanced localization.",
      bullets: [
        "PLGA nano formulation with encapsulated small-molecule payload (sustained-release kinetics).",
        "Physicochemical characterization (size distribution, zeta potential, encapsulation efficiency).",
        "SEM-based morphology and porosity assessment to verify microstructure.",
        "In vitro performance testing: release profiling plus cytotoxicity and uptake assays in tumor-relevant cell models."
      ],
      tags: ["Drug Delivery", "Biomaterials", "Characterization"],
      images: ["/projects/plga-nanoparticles.png"]
    }
  ],
  skills: [
    {
      title: "CAD & Medical Imaging",
      skills: ["SolidWorks", "AutoCAD", "Fusion 360", "3D Slicer", "3D Printing"]
    },
    {
      title: "Quality, V&V, and Risk",
      skills: [
        "Design Control Framework",
        "ISO 13485",
        "TMV",
        "Gage R&R",
        "Verification & Validation",
        "DFMEA",
        "Hazard Analysis",
        "Risk Matrix"
      ]
    },
    {
      title: "Manufacturing & Ops",
      skills: [
        "SPC",
        "DFM",
        "LBM",
        "Process Capability (Cp/Cpk)",
        "Cleanroom Manufacturing"
      ]
    },
    {
      title: "Data & Analysis",
      skills: ["Minitab", "Six Sigma", "Regression Analysis", "SQL", "Pandas", "NumPy"]
    }
  ]
};

export type Profile = typeof profile;
