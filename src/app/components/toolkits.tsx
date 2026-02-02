export default function ToolkitsTable() {
  const header =
    toolkits.length > 0
      ? [
          <th className="border border-gray-400" key="reference">
            Reference
          </th>,
          <th className="border border-gray-400" key="year">
            Year
          </th>,
          <th className="border border-gray-400" key="docType">
            Doc. Type
          </th>,
          <th className="border border-gray-400" key="venue">
            Venue
          </th>,
          <th className="border border-gray-400" key="confPaperType">
            Conf. Paper Type
          </th>,
          <th className="border border-gray-400" key="artifact">
            Artifact
          </th>,
          <th className="border border-gray-400" key="applicationDomain">
            Application Domain
          </th>,
        ]
      : [];

  const body = toolkits.map((tool, index) => (
    <tr key={index}>
      <td>{tool.reference}</td>
      <td>{tool.year}</td>
      <td>{tool.docType}</td>
      <td>{tool.venue}</td>
      <td>{tool.confPaperType}</td>
      <td>{tool.artifact}</td>
      <td>{tool.applicationDomain}</td>
    </tr>
  ));

  return (
    <table className="table-auto border border-gray-400 bg-white">
      <thead>
        <tr>{header}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
}

type Toolkit = {
  reference: string;
  year: number;
  docType: string;
  venue: string;
  confPaperType: string | undefined;
  artifact: string | undefined;
  applicationDomain: string;
  inputModalities: {
    NO: boolean;
    V: boolean;
    A: boolean;
    K: boolean;
    T: boolean;
  };
  fusionSupport: {
    C: boolean | "N/A";
    A: boolean | "N/A";
    S: boolean | "N/A";
    E: boolean | "N/A";
  };
  fusionType: string[];
  fusionLevel: string[];
  programmingApproach: string;
  programmingLanguage: string | undefined;
  descriptionLanguage: string | undefined;
  coupling: string | undefined;
  licence: string | undefined;
  lastCommitDate: string | undefined;
};

// TODO - check the data integrity (transformed using a llm and our latex tables)
const toolkits: Toolkit[] = [
  {
    // --------------------------------------------------------------------
    reference: "Hoste2011Mudra",
    year: 2011,
    docType: "CP",
    venue: "ACM ICMI",
    confPaperType: "SP",
    artifact: "Mudra",
    applicationDomain: "No focus",

    // Fusion‑related columns (second table)
    inputModalities: { NO: false, V: false, A: false, K: true, T: true },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic", "statistical"],
    fusionLevel: ["early", "late"],

    // Implementation columns (third table)
    programmingApproach: "textual",
    programmingLanguage: undefined,
    descriptionLanguage: "Clips based",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Cutugno2012Multimodal",
    year: 2012,
    docType: "CP",
    venue: "ACM AVI",
    confPaperType: "FP",
    artifact: undefined,
    applicationDomain: "Mobile",

    inputModalities: { NO: false, V: false, A: true, K: false, T: true },
    fusionSupport: { C: true, A: true, S: true, E: false },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "Java",
    descriptionLanguage: "XML",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Hak2012Manitou",
    year: 2012,
    docType: "CP",
    venue: "IFIP WMNC",
    confPaperType: "FP",
    artifact: "Manitou",
    applicationDomain: "Web",

    inputModalities: { NO: false, V: false, A: true, K: false, T: true },
    fusionSupport: { C: true, A: false, S: false, E: true },
    fusionType: ["none"],
    fusionLevel: ["none"],

    programmingApproach: "textual",
    programmingLanguage: "Javascript",
    descriptionLanguage: "Emma",
    coupling: "dev's responsibility",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Lo2012IChameleon",
    year: 2012,
    docType: "CP",
    venue: "IEEE PerComW",
    confPaperType: "SP",
    artifact: "i*Chameleon",
    applicationDomain: "SmartEnv",

    inputModalities: { NO: false, V: false, A: false, K: false, T: false },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic*"],
    fusionLevel: ["late*"],

    programmingApproach: "textual",
    programmingLanguage: undefined,
    descriptionLanguage: "Custom (no name)",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Tan2012Extending",
    year: 2012,
    docType: "CP",
    venue: "ACM/IEEE HRI",
    confPaperType: "SP",
    artifact: undefined,
    applicationDomain: "Robotic",

    inputModalities: { NO: false, V: false, A: true, K: true, T: false },
    fusionSupport: { C: false, A: false, S: true, E: true },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "Shell Script languages",
    descriptionLanguage: "AIML",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Russ2013MMIR",
    year: 2013,
    docType: "CP",
    venue: "MoBe-13 (INFORMATIK 2013)",
    confPaperType: "SP",
    artifact: "Multimodal Mobile Interaction and Rendering (MMIR)",
    applicationDomain: "Mobile / web",

    inputModalities: { NO: false, V: false, A: true, K: true, T: true },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "Javascript",
    descriptionLanguage: "SCXML",
    coupling: "by design",
    licence: "MIT",
    lastCommitDate: "18/09/2024",
  },

  {
    // --------------------------------------------------------------------
    reference: "Shen2013HCI2",
    year: 2013,
    docType: "JA",
    venue: "IEEE Transactions on Cybernetics",
    confPaperType: undefined,
    artifact: "HCI² Framework",
    applicationDomain: "Desktop",

    inputModalities: { NO: false, V: true, A: false, K: true, T: false },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic", "statistical"],
    fusionLevel: ["early", "late"],

    programmingApproach: "textual ; visual",
    programmingLanguage: "C ; C++",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: undefined,
    lastCommitDate: "09/02/2012",
  },

  {
    // --------------------------------------------------------------------
    reference: "Takegoshi2014Development",
    year: 2014,
    docType: "CP",
    venue: "IIAI-AAI",
    confPaperType: "FP",
    artifact: "MrailsBuilder",
    applicationDomain: "Desktop",

    inputModalities: { NO: false, V: false, A: true, K: false, T: false },
    fusionSupport: { C: false, A: false, S: false, E: true },
    fusionType: ["none"],
    fusionLevel: ["none"],

    programmingApproach: "textual",
    programmingLanguage: "MrailScript ; Groovy",
    descriptionLanguage: "MrailScript",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Cuenca2015Hasselt",
    year: 2015,
    docType: "CP",
    venue: "ACM EICS",
    confPaperType: "SP",
    artifact: "Hasselt UIMS",
    applicationDomain: "Desktop",

    inputModalities: { NO: false, V: false, A: true, K: true, T: true },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual ; visual",
    programmingLanguage: ".NET languages",
    descriptionLanguage: "CEDL ; HMD2L ; SRDL",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Seiger2015Framework",
    year: 2015,
    docType: "CP",
    venue: "LMIS",
    confPaperType: "SP",
    artifact: "Connect",
    applicationDomain: "SmartEnv",

    inputModalities: { NO: true, V: true, A: false, K: true, T: true },
    fusionSupport: { C: true, A: false, S: false, E: true },
    fusionType: ["none"],
    fusionLevel: ["none"],

    programmingApproach: "textual ; visual",
    programmingLanguage: "Java",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: undefined,
    lastCommitDate: "21/03/2017",
  },

  {
    // --------------------------------------------------------------------
    reference: "Kazepis2016FIRMA",
    year: 2016,
    docType: "CP",
    venue: "ACHI",
    confPaperType: undefined,
    artifact: "FIRMA",
    applicationDomain: "SmartEnv / robotic",

    inputModalities: { NO: false, V: false, A: true, K: true, T: true },
    fusionSupport: { C: false, A: true, S: true, E: false },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "ACTA",
    descriptionLanguage: undefined,
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Bohus2017Rapid",
    year: 2017,
    docType: "CP",
    venue: "ACM ICMI",
    confPaperType: "SP",
    artifact: "Platform for Situated Intelligence (PSI)",
    applicationDomain: "No focus",

    inputModalities: { NO: false, V: false, A: true, K: true, T: false },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic", "statistical"],
    fusionLevel: ["early", "late"],

    programmingApproach: "textual ; visual",
    programmingLanguage: ".NET languages",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: "MIT",
    lastCommitDate: "24/03/2025",
  },

  {
    // --------------------------------------------------------------------
    reference: "Lee2017MIDASM",
    year: 2017,
    docType: "CP",
    venue: "DAPI (HCII)",
    confPaperType: "FP",
    artifact:
      "Mixing and matching heterogeneous Interaction Devices to Applications and Services (MIDAS-M)",
    applicationDomain: "Desktop",

    inputModalities: { NO: false, V: false, A: false, K: false, T: false },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "visual",
    programmingLanguage: undefined,
    descriptionLanguage: "XML",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Seo2017Unified",
    year: 2017,
    docType: "JA",
    venue: "IJAER",
    confPaperType: undefined,
    artifact: "Unified Input Processing Framework (UIPF)",
    applicationDomain: "Collaborative display",

    inputModalities: { NO: false, V: false, A: false, K: true, T: true },
    fusionSupport: { C: false, A: false, S: false, E: true },
    fusionType: ["none"],
    fusionLevel: ["none"],

    programmingApproach: "textual",
    programmingLanguage: undefined,
    descriptionLanguage: undefined,
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Vidakis2017Multimodal",
    year: 2017,
    docType: "CP",
    venue: "ArtsIT/DLI",
    confPaperType: "FP",
    artifact: undefined,
    applicationDomain: "Blended learning",

    inputModalities: { NO: false, V: false, A: true, K: true, T: true },
    fusionSupport: { C: "N/A", A: "N/A", S: "N/A", E: "N/A" },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: undefined,
    descriptionLanguage: "COAL",
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Sarmah2020Geno",
    year: 2020,
    docType: "CP",
    venue: "ACM UIST",
    confPaperType: "FP",
    artifact: "Geno",
    applicationDomain: "Web",

    inputModalities: { NO: false, V: false, A: true, K: false, T: true },
    fusionSupport: { C: false, A: false, S: true, E: false },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual ; visual",
    programmingLanguage: "Javascript",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: undefined,
    lastCommitDate: "01/09/2020",
  },

  {
    // --------------------------------------------------------------------
    reference: "Barz2021Multisensorpipeline",
    year: 2021,
    docType: "CP",
    venue: "ACM ICMI",
    confPaperType: "SP",
    artifact: "Multisensor-pipeline (MSP)",
    applicationDomain: "No focus",

    inputModalities: { NO: false, V: false, A: false, K: false, T: false },
    fusionSupport: { C: true, A: true, S: true, E: true },
    fusionType: ["symbolic", "statistical"],
    fusionLevel: ["early", "late"],

    programmingApproach: "textual",
    programmingLanguage: "Python",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: "CC BY-NC-SA 4.0",
    lastCommitDate: "23/05/2022",
  },

  {
    // --------------------------------------------------------------------
    reference: "Guedira2021Multimodal",
    year: 2021,
    docType: "CP",
    venue: "UAHCI (HCII)",
    confPaperType: "FP",
    artifact: undefined,
    applicationDomain: "SmartEnv",

    inputModalities: { NO: false, V: true, A: true, K: true, T: true },
    fusionSupport: { C: true, A: false, S: false, E: true },
    fusionType: ["none"],
    fusionLevel: ["none"],

    programmingApproach: "textual",
    programmingLanguage: undefined,
    descriptionLanguage: undefined,
    coupling: "by design",
    licence: undefined,
    lastCommitDate: undefined,
  },

  {
    // --------------------------------------------------------------------
    reference: "Septon2024Exploiting",
    year: 2024,
    docType: "CP",
    venue: "ACM EICS",
    confPaperType: "SP",
    artifact: "Ummi",
    applicationDomain: "Mixed Reality",

    inputModalities: { NO: false, V: false, A: true, K: true, T: true },
    fusionSupport: { C: false, A: false, S: true, E: true },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "C#",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: "MIT",
    lastCommitDate: "16/03/2023",
  },

  {
    // --------------------------------------------------------------------
    reference: "Yang2024ReactGenie",
    year: 2024,
    docType: "CP",
    venue: "ACM CHI",
    confPaperType: "FP",
    artifact: "ReactGenie",
    applicationDomain: "Mobile",

    inputModalities: { NO: false, V: false, A: true, K: false, T: true },
    fusionSupport: { C: false, A: false, S: true, E: false },
    fusionType: ["symbolic"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "Typescript",
    descriptionLanguage: undefined,
    coupling: "dev's responsibility",
    licence: "Apache-2.0",
    lastCommitDate: "15/05/2024",
  },

  {
    // --------------------------------------------------------------------
    reference: "Han2025Dynamic",
    year: 2025,
    docType: "CP",
    venue: "ACM IUI",
    confPaperType: "FP",
    artifact: undefined,
    applicationDomain: "Mixed Reality",

    inputModalities: { NO: false, V: true, A: false, K: false, T: true },
    fusionSupport: { C: false, A: false, S: true, E: false },
    fusionType: ["statistical"],
    fusionLevel: ["late"],

    programmingApproach: "textual",
    programmingLanguage: "Python",
    descriptionLanguage: undefined,
    coupling: undefined,
    licence: undefined,
    lastCommitDate: undefined,
  },
];
