import React from "react";
import "./toolkits.css"; // ← import the stylesheet

export default function Table() {
  return (
    <table className="table-auto">
      {getHeader()}
      {getBody()}
    </table>
  );
}

function getHeader() {
  const header = (
    <>
      <tr className="text-left">
        <th>Reference</th>
        <th key="year">Year</th>
        <th title="Document Type">Type</th>
        <th>Venue</th>
        <th title="Conference Paper Type">Paper Type</th>
        <th>Artifact</th>
        <th title="Application Domain">App. Domain</th>

        <th className="text-center min-w-[150px]" title="Input Modalities" colSpan={4}>Modalities</th>
        <th className="text-center min-w-[150px]" colSpan={4}>CASE</th>
        <th className="min-w-[150px]">Fusion type</th>
        <th>Fusion level</th>

        <th title="Programming approach">Prog. App.</th>
        <th className="text-center" colSpan={2}>Language</th>
        <th>Coupling</th>
        <th>Licence</th>
        <th title="Last Commit Date">Last Commit</th>
      </tr>
      <tr>
        <th colSpan={7} />

        <th className="text-center text-sm">NO</th>
        <th className="text-center text-sm">V</th>
        <th className="text-center text-sm">A</th>
        <th className="text-center text-sm">K</th>

        <th className="text-center text-sm">C</th>
        <th className="text-center text-sm">A</th>
        <th className="text-center text-sm">S</th>
        <th className="text-center text-sm">E</th>

        <th colSpan={3} />

        <th className="text-center text-sm">Programming</th>
        <th className="text-center text-sm">Description</th>

        <th colSpan={3} />
      </tr>
    </>
  );

  return <thead>{header}</thead>;
}

function getBody() {
  const getFusionSupport = (
    tool: Toolkit,
    key: keyof Toolkit["fusionSupport"],
  ) => {
    const value = tool.fusionSupport[key];
    if (value === true) return "x";
    if (value === false) return "";
    return <span className="text-xs">N/A</span>;
  };

  const body = toolkits.map((tool, index) => (
    <tr key={index} className="hover:bg-zinc-200">
      <td className="max-w-max" title={tool.reference}>
        {tool.reference}
      </td>
      <td className="text-center" title={String(tool.year)}>
        {tool.year}
      </td>
      <td className="text-center" title={tool.docType}>
        {tool.docType}
      </td>
      <td title={tool.venue}>{tool.venue}</td>
      <td title={tool.confPaperType ?? ""}>{tool.confPaperType}</td>
      <td title={tool.artifact ?? ""}>{tool.artifact}</td>
      <td title={tool.applicationDomain}>{tool.applicationDomain}</td>

      {/* modalities columns (second table) */}
      <td className="text-center">{tool.inputModalities.NO ? "x" : ""}</td>
      <td className="text-center">{tool.inputModalities.V ? "x" : ""}</td>
      <td className="text-center">{tool.inputModalities.A ? "x" : ""}</td>
      <td className="text-center">{tool.inputModalities.K ? "x" : ""}</td>

      {/* fusion support columns (second table) */}
      <td className="text-center">{getFusionSupport(tool, "C")}</td>
      <td className="text-center">{getFusionSupport(tool, "A")}</td>
      <td className="text-center">{getFusionSupport(tool, "S")}</td>
      <td className="text-center">{getFusionSupport(tool, "E")}</td>

      <td>{tool.fusionType.join(", ")}</td>
      <td>{tool.fusionLevel.join(", ")}</td>

      <td title={tool.programmingApproach}>{tool.programmingApproach}</td>
      <td title={tool.programmingLanguage ?? ""}>{tool.programmingLanguage}</td>
      <td title={tool.descriptionLanguage ?? ""}>{tool.descriptionLanguage}</td>
      <td title={tool.coupling ?? ""}>{tool.coupling}</td>
      <td title={tool.licence ?? ""}>{tool.licence}</td>
      <td title={tool.lastCommitDate ?? ""}>{tool.lastCommitDate}</td>
    </tr>
  ));
  return <tbody>{body}</tbody>;
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
    C: boolean | undefined;
    A: boolean | undefined;
    S: boolean | undefined;
    E: boolean | undefined;
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
    reference: "Vidakis2017Multimodal",
    year: 2017,
    docType: "CP",
    venue: "ArtsIT/DLI",
    confPaperType: "FP",
    artifact: undefined,
    applicationDomain: "Blended learning",

    inputModalities: { NO: false, V: false, A: true, K: true, T: true },
    fusionSupport: { C: undefined, A: undefined, S: undefined, E: undefined },
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
