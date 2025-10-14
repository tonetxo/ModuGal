import type { ui } from "../i18n/ui";

export type ModuleKey = keyof typeof ui.en;

export interface ModuleInfo {
  id: string;
  nameKey: ModuleKey;
  descriptionKey: ModuleKey;
}

export interface ModuleCategory {
  nameKey: ModuleKey;
  slug: string;
  modules: ModuleInfo[];
}

export const moduleCategories: ModuleCategory[] = [
  {
    nameKey: "module_group.initial_base_modules",
    slug: "initial-base-modules",
    modules: [
      {
        id: "keyboard",
        nameKey: "keyboard.subtitle",
        descriptionKey: "keyboard.description",
      },
      {
        id: "output",
        nameKey: "output.subtitle",
        descriptionKey: "output.description",
      },
    ],
  },
  {
    nameKey: "module_group.audio_and_control_modulators",
    slug: "audio-and-control-modulators",
    modules: [
      { id: "vco", nameKey: "vco.subtitle", descriptionKey: "vco.description" },
      { id: "vca", nameKey: "vca.subtitle", descriptionKey: "vca.description" },
      {
        id: "adsr",
        nameKey: "adsr.subtitle",
        descriptionKey: "adsr.description",
      },
      { id: "lfo", nameKey: "lfo.subtitle", descriptionKey: "lfo.description" },
      {
        id: "samplehold",
        nameKey: "samplehold.subtitle",
        descriptionKey: "samplehold.description",
      },
    ],
  },
  {
    nameKey: "module_group.audio_shapers_and_effects",
    slug: "audio-shapers-and-effects",
    modules: [
      { id: "vcf", nameKey: "vcf.subtitle", descriptionKey: "vcf.description" },
      {
        id: "ringmod",
        nameKey: "ringmod.subtitle",
        descriptionKey: "ringmod.description",
      },
      {
        id: "wavefolder",
        nameKey: "wavefolder.subtitle",
        descriptionKey: "wavefolder.description",
      },
      {
        id: "delay",
        nameKey: "delay.subtitle",
        descriptionKey: "delay.description",
      },
      {
        id: "reverb",
        nameKey: "reverb.subtitle",
        descriptionKey: "reverb.description",
      },
      {
        id: "compressor",
        nameKey: "compressor.subtitle",
        descriptionKey: "compressor.description",
      },
      {
        id: "stereowidener",
        nameKey: "stereowidener.subtitle",
        descriptionKey: "stereowidener.description",
      },
    ],
  },
  {
    nameKey: "module_group.analysis_and_utilities",
    slug: "analysis-and-utilities",
    modules: [
      {
        id: "spectrumanalyzer",
        nameKey: "spectrumanalyzer.subtitle",
        descriptionKey: "spectrumanalyzer.description",
      },
    ],
  },
  {
    nameKey: "module_group.sequencing_and_logic",
    slug: "sequencing-and-logic",
    modules: [],
  },
  {
    nameKey: "module_group.effects_modules",
    slug: "effects-modules-and-processors",
    modules: [],
  },
  {
    nameKey: "module_group.sequencing_modules",
    slug: "sequencing-and-control-modules",
    modules: [],
  },
  {
    nameKey: "module_group.audio_oscillators",
    slug: "audio-and-oscillator-modules",
    modules: [],
  },
  {
    nameKey: "module_group.logic_maths",
    slug: "logic-and-maths-modules",
    modules: [],
  },
];
