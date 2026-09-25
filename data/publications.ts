import type { Publication } from '@/types';

interface JournalPublicationInput {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  isFeatured?: boolean;
}

function journalPublication({
  id,
  title,
  authors,
  venue,
  year,
  isFeatured,
}: JournalPublicationInput): Publication {
  return {
    id,
    title,
    authors: [authors],
    venue,
    year,
    type: 'journal',
    isFeatured,
  };
}

export const publications: Publication[] = [
  journalPublication({
    id: 'street-2026-graphene-copper-nanoparticles',
    title:
      'Formation mechanism of few-layer graphene adjacent to nanoscale zero-valent copper nanoparticles synthesized using kraft lignin as a sustainable aromatic-rich carbon resource',
    authors:
      'Guo, S., Yan, Q., Kim, Y., Mlsna, T. E., Street, J. T., Cai, Z., Zhang, J.',
    venue: 'Journal of Materials Chemistry A',
    year: 2026,
    isFeatured: true,
  }),
  journalPublication({
    id: 'street-2026-moistvit',
    title:
      'MoistViT: A vision transformer model for moisture content prediction of wood chips',
    authors:
      'Marulanda, D. E., Rahman, A., Street, J. T., Marufuzzaman, M., Wang, H., Gude, V. G., Buchanan, R.',
    venue: 'Systems and Soft Computing',
    year: 2026,
    isFeatured: true,
  }),
  journalPublication({
    id: 'street-2026-explainable-moisture-regression',
    title:
      'Explainable artificial intelligence (AI)–based regression models for predicting moisture content in wood chips through transfer learning',
    authors:
      'Neupane, T., Street, J. T., Wang, H., Rahman, A., Marufuzzaman, M.',
    venue: 'Biomass Futures',
    year: 2026,
    isFeatured: true,
  }),
  journalPublication({
    id: 'street-2025-cyclodextrin-wood-preservative',
    title:
      'Influence of incorporating beta-cyclodextrin/essential oil-based wood preservative on the bonding strength of wood composite products',
    authors:
      'Olayiwola, H., Entsminger, E. D., Bedics, C. A., Street, J. T., Kundu, S., Kim, Y.',
    venue: 'Carbohydrates Polymers 348(Part A, 15 January 2025):122820',
    year: 2025,
  }),
  journalPublication({
    id: 'street-2025-particleboard-distillers-grains',
    title:
      'Southern yellow pine particle board manufactured with the inclusion of distillers dried grains with solubles and microcrystalline cellulose',
    authors:
      'Street, J. T., Rahman, A., Berry, M., Turo, E., Pandya, T., Nanjundaswamy, A., Waliullah, S.',
    venue: 'Industrial Crops and Products 235(121767)',
    year: 2025,
  }),
  journalPublication({
    id: 'street-2025-interpretable-wood-chip-moisture',
    title:
      'Interpretable wood chip moisture content prediction through texture analysis',
    authors:
      'Street, J. T., Rahman, A., Wooten, J. R., Marufuzzaman, M., Wang, H., Gude, V. G., Buchanan, R.',
    venue: 'Expert Systems with Applications 275(126989)',
    year: 2025,
  }),
  journalPublication({
    id: 'street-2024-hammer-excitation-biocomposites',
    title:
      'Hammer Excitation Vibration Technique on Southern Yellow Pine Bio-Composites',
    authors:
      'Breedlove, B., Dave, M. J., Pandya, T., Street, J. T., Nanjundaswamy, A.',
    venue:
      'International Journal of Darshan Institute on Engineering Research and Emerging Technologies 13(1):6-11',
    year: 2024,
  }),
  journalPublication({
    id: 'street-2024-crop-residue-sandwich-panels',
    title:
      'From Crop Residue to Corrugated Core Sandwich Panels as a Building Material',
    authors:
      'Lamichhane, A., Vasudevan, A. K., Mohammadabadi, M., Ragon, K., Street, J. T., Seale, R. D.',
    venue: 'Materials, MDPI 18(1)',
    year: 2024,
  }),
  journalPublication({
    id: 'street-2024-wood-dimensional-stability',
    title:
      'Wood dimensional stability enhancement by multivalent metal-cation-induced lignocellulosic microfibrils crosslinking',
    authors: 'Nayanathara, R., Leng, W., Street, J. T., Zhang, X.',
    venue: 'International Journal of Biological Macromolecules 269(131877):6',
    year: 2024,
  }),
  journalPublication({
    id: 'street-2024-hardwood-handrail-connectors',
    title:
      'Structural Performance of Connectors in a Hardwood Stairway Handrail Guard System',
    authors: 'Quin, F., França, T., Street, J. T., Lim, H., Shmulsky, R.',
    venue: 'BioResources 19(1):1410-1432',
    year: 2024,
  }),
  journalPublication({
    id: 'street-2024-wood-chip-moisture-review',
    title:
      'A comprehensive review on wood chip moisture content assessment and prediction',
    authors:
      'Rahman, A., Marufuzzaman, M., Street, J. T., Wooten, J. R., Gude, V. G., Buchanan, R., Wang, H.',
    venue: 'Renewable and Sustainable Energy Reviews 189:113843',
    year: 2024,
  }),
  journalPublication({
    id: 'street-2024-moistnet',
    title:
      'MoistNet: Machine vision-based deep learning models for wood chip moisture content measurement',
    authors:
      'Rahman, A., Street, J. T., Wooten, J. R., Marufuzzaman, M., Gude, V. G., Buchanan, R., Wang, H.',
    venue: 'Expert Systems with Applications',
    year: 2024,
  }),
  journalPublication({
    id: 'street-2023-wood-corrugated-panels',
    title:
      'Wood-based Corrugated Core Sandwich Panels Manufactured Using a Wooden Mold',
    authors: 'Mohammadabadi, M., Miller, J., Street, J. T., Kim, Y., Ragon, K.',
    venue: 'BioResources 18(2):3033-3043',
    year: 2023,
  }),
  journalPublication({
    id: 'street-2023-clt-physical-barriers',
    title:
      'Field evaluation of physical barriers against subterranean termites and ambrosia beetles in a CLT wall envelope system',
    authors:
      'Neupane, K., Tang, J., Lim, H., Street, J. T., Kim, Y., Gasparrii, E.',
    venue: 'Wood and Fiber Science 55(2):116-130',
    year: 2023,
  }),
  journalPublication({
    id: 'street-2023-cold-formed-corrugated-panels',
    title:
      'Development of a High-Performance Building Material Using Wood-Based Corrugated Panels Manufactured via Cold-Forming Technique',
    authors:
      'Pradhan, S., Mohammadabadi, M., Entsminger, E. D., Ragon, K., Khademibami, L., Street, J. T.',
    venue: 'BioResources 18(3):4666-4675',
    year: 2023,
  }),
  journalPublication({
    id: 'street-2022-bio-oil-epoxy-osb',
    title:
      'Fast Pyrolysis Bio-Oil-Based Epoxy as an Adhesive in Oriented Strand Board Production',
    authors:
      'Asafu-Adjaye, O. A., Street, J. T., Bansode, A., Auad, M. L., Peresin, M. S., Adhikari, S., Liles, T.',
    venue: 'Polymers 14(6):13',
    year: 2022,
  }),
  journalPublication({
    id: 'street-2022-particleboard-rubber-acoustics',
    title:
      'Acoustic and Strength Characterization of Particleboard and Micronized Rubber Powder Composites',
    authors: 'Cole, J. T., Street, J. T., Blake, C. D.',
    venue: 'Forest Products Journal 72(1):37-43',
    year: 2022,
  }),
  journalPublication({
    id: 'street-2022-concrete-wood-rubber-composites',
    title:
      'Mechanical Properties of Concrete Composites Consisting of Southern Pine Wood Chips and Micronized Rubber Powder',
    authors: 'Cole, J., Street, J. T., Seale, R. D.',
    venue:
      'Journal of the American Society of Agricultural and Biological Engineers 65(1):437-451',
    year: 2022,
  }),
  journalPublication({
    id: 'street-2022-low-velocity-impact',
    title: 'The Low-Velocity Impact Response of Bio-Composites',
    authors: 'Dave, M. J., Pandya, T. S., Ukyam, S. B., Street, J. T.',
    venue: 'Wood Research 67(1):2729-8906',
    year: 2022,
  }),
  journalPublication({
    id: 'street-2022-wood-pellets-bio-oil',
    title:
      'Wood Pellet Production with the Inclusion of Rich Hull Derived Bio-Oil',
    authors:
      'Lowe, T., Street, J. T., Smith, B., Wooten, J., Mitchell, B., Hassan, E., Elsayed, I.',
    venue: 'Applied Engineering in Agriculture 38(6):903-915',
    year: 2022,
  }),
  journalPublication({
    id: 'street-2021-biochar-wood-vinegar-poultry',
    title:
      'Effects of Loblolly Pine Biochar and Wood Vinegar on Poultry Litter Nutrients and Microbial Abundance',
    authors:
      'Mohammadi-Aragh, M., Stokes, C. E., Street, J. T., Linhoss, J. E.',
    venue: 'Animals 11(8):2209',
    year: 2021,
  }),
  journalPublication({
    id: 'street-2021-co-pyrolysis-pine-rubber',
    title:
      'Co-Pyrolysis of Southern Pine and Micronized Rubber Powder with Nickel Oxide and Sodium Carbonate Catalysts',
    authors:
      'Wainscott, C., Edwards, A., Street, J., Mitchell, B., Elsayed, I., Hassan, E. M., Hassan, E. B.',
    venue: 'Industrial & Engineering Chemistry Research 60:11915−11926',
    year: 2021,
  }),
  journalPublication({
    id: 'street-2021-bamboo-char-epoxy-coatings',
    title:
      'Anticorrosive epoxy coatings containing ultrafine bamboo char and zinc particles',
    authors:
      'Wang, X., Zhang, X., Caldona, E. B., Leng, W., Street, J. T., Wang, G., Zhang, Z.',
    venue: 'Journal of Environmental Chemical Engineering 9(4):105707',
    year: 2021,
  }),
  journalPublication({
    id: 'street-2020-biocomposite-natural-frequencies',
    title:
      'Study of variation in natural frequencies of bio-composites due to structural damage',
    authors: 'Shah, A. J., Pandya, T. S., Street, J. T.',
    venue: 'International Wood Products Journal 11(4):1-7',
    year: 2020,
  }),
  journalPublication({
    id: 'street-2019-industrial-pelletization-additives',
    title:
      'Industrial-scale palletization of southern pine energy pellets with various additives',
    authors: 'Blake, C., Street, J., Wooten, J. R., Mitchell, B., Owens, F. C.',
    venue: 'Applied Engineering in Agriculture 35(6):889-901',
    year: 2019,
  }),
  journalPublication({
    id: 'street-2019-clt-knots-rolling-shear',
    title:
      'Evaluation of the effect of knots on rolling shear strength of cross laminated timber (CLT)',
    authors: 'Cao, Y., Street, J. T., Li, M., Lim, H.',
    venue: 'Construction and Building Materials 222:579-587',
    year: 2019,
  }),
  journalPublication({
    id: 'street-2019-southern-pine-multiple-knots',
    title:
      'The effect of multiple knots in close proximity on southern pine lumber properties',
    authors: 'Cordeiro Barbosa, M., Street, J., Owens, F. C., Shmulsky, R.',
    venue: 'Forest Products Journal 69(4):278-282',
    year: 2019,
  }),
  journalPublication({
    id: 'street-2019-biochar-poultry-litter',
    title:
      'Evaluation of biochar as a litter amendment for commerical broiler production',
    authors: 'Linhoss, J. E., Purswell, J. L., Street, J. T., Rowland, M. R.',
    venue: 'Journal of Applied Poultry Research 28(4):1089-1098',
    year: 2019,
  }),
  journalPublication({
    id: 'street-2019-high-strain-rate-biocomposites',
    title:
      'High strain rate response of bio-composites using split Hopkinson pressure bar and digital image correlation technique',
    authors: 'Pandya, T., Dave, M., Street, J. T., Blake, C., Mitchell, B.',
    venue: 'International Wood Products Journal 10(1):22-30',
    year: 2019,
  }),
  journalPublication({
    id: 'street-2018-knots-horizontal-shear',
    title:
      'Effect of Knots on Horizontal Shear Strength in Southern Yellow Pine',
    authors:
      'Cao, Y., Street, J. T., Mitchell, B., To, S. D., DuBien, J. L., Seale, R. D., Shmulsky, R.',
    venue: 'BioResources 13(2):4509-4520',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-dynamic-biocomposite-characterization',
    title:
      'Dynamic characterization of biocomposites under high strain rate compression loading with split Hopkinson pressure bar and digital image correlation technique',
    authors: 'Dave, M. J., Pandya, T. S., Stoddard, D., Street, J. T.',
    venue: 'International Wood Products Journal 9(3):115-121',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-damping-biocomposites',
    title:
      'Dynamic and Damping Properties of Novel Bio-Composites using the Hammer Excitation Vibration Technique',
    authors:
      'Dave, M. J., Pandya, T., Stoddard, D., Street, J. T., Blake, C., Ly, P.',
    venue: 'Wood Research 63(2):215-226',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-zinc-doped-carbon-dots',
    title:
      'Photoluminescence mechanism and applications of Zn-doped carbon dots',
    authors:
      'Xu, Q., Cai, W., Zhang, M., Su, R., Ye, Y., Li, Y., Zhang, L., Guo, Y., Yu, Z., Li, S., Lin, X., Chen, Y., Luo, Y., Street, J. T., Xu, M.',
    venue: 'RSC Advances 8(31):17254-17262',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-mxene-quantum-dots',
    title:
      'High Photoluminescence Quantum Yield of 18.7% by Nitrogen-Doped Ti3C2 MXene Quantum Dots',
    authors:
      'Xu, Q., Ding, L., Wen, Y., Yang, W., Zhou, H., Chen, X., Street, J. T., Zhou, A., Ong, W., Li, N.',
    venue: 'Journal of Materials Chemistry C 2018(6):6360-6369',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-sulfur-resistant-scr-catalysts',
    title:
      'Sulfur resistance of Ce-Mn/TiO2 catalysts for low-temperature NH3--SCR',
    authors: 'Xu, Q., Yang, W., Cui, S., Street, J. T., Luo, Y.',
    venue: 'Royal Society Open Science 5(3):171846',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-lignin-polyurethane-foams',
    title:
      'Effect of Surface Functionalization of Lignin on Synthesis and Properties of Rigid Bio-Based Polyurethanes Foams',
    authors:
      'Zhang, X., Jeremic Nikolic, D., Kim, Y., Street, J. T., Shmulsky, R.',
    venue: 'Polymers 10(706):15',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2018-food-waste-carbon-nanodots',
    title:
      'Multicolor carbon nanodots from food waste and their heavy metal ion detection application',
    authors:
      'Zhou, Y., Liu, Y., Li, Y., He, Z., Xu, Q., Chen, Y., Street, J. T., Guo, H., Nelles, M.',
    venue: 'RSC Advances 8(42):23657--23662',
    year: 2018,
  }),
  journalPublication({
    id: 'street-2017-nimgal-dry-reforming',
    title:
      'Insight into the phase evolution of a NiMgAl catalyst from the reduction stage to the post-reaction stage during the dry reforming of methane',
    authors: 'Bao, Z., Zhan, Y., Street, J. T., Xu, W., To, S. D., Yu, F.',
    venue: 'Chemical Communications 53(44):6001-6004',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-biomass-gasification-aspen',
    title:
      'Modeling downdraft biomass gasification process by restricting chemical reaction equilibrium with Aspen Plus',
    authors:
      'Han, J., Liang, Y., Hu, J., Qin, L., Street, J. T., Lu, Y., Yu, F.',
    venue: 'Energy Conversion and Management 153:641-648',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-natural-gas-carbon-dioxide-reforming',
    title:
      'Natural gas reforming of carbon dioxide for syngas over Ni--Ce--Al catalysts',
    authors: 'Han, J., Zhan, Y., Street, J. T., To, S. D., Yu, F.',
    venue: 'International Journal of Hydrogen Energy 42(29):18364-18374',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-pyrolysis-gas-biogas',
    title:
      'Pyrolysis gas as a carbon source for biogas production via anaerobic digestion',
    authors:
      'Li, Y., Su, D., Luo, S., Jiang, H., Qian, M., Zhou, H., Street, J. T., Luo, Y., Xu, Q.',
    venue: 'RSC Advances 7(66):41889-41895',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-fischer-tropsch-biomass-syngas',
    title:
      'Fischer–Tropsch synthesis of olefin-rich liquid hydrocarbons from biomass-derived syngas over carbon-encapsulated iron carbide/iron nanoparticles catalyst',
    authors: 'Lu, Y., Yan, Q., Han, J., Cao, B., Street, J. T., Yu, F.',
    venue: 'Fuel 193:369-384',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-high-strain-compression',
    title:
      'Dynamic Response of Wood Based Bio-Composites under High-Strain Rate Compressive Loading',
    authors:
      'Shah, A. J., Pandy, T. S., Stoddard, D., Ukyam, S. B., Street, J. T., Wooten, J. R., Mitchell, B.',
    venue: 'Wood and Fiber Science 49(4):444-452',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-nitrogen-phosphorus-carbon-dots',
    title:
      'Synthesis, mechanical investigation, and application of nitrogen and phosphorus co-doped carbon dots with a high photoluminescent quantum yield',
    authors:
      'Xu, Q., Li, B., Ye, Y., Cai, W., Li, W., Yang, C., Chen, Y., Xu, M., Li, N., Zheng, X., Street, J. T., Luo, Y., Cai, L.',
    venue: 'Nano Research 11:3691-3701',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-fe-doped-scr-catalysts',
    title:
      'Facile preparation of high-performance Fe-doped Ce--Mn/TiO2 catalysts for the low-temperature selective catalytic reduction of NOx with NH3',
    authors:
      'Xu, Q., Su, R., Cao, L., Li, Y., Yang, C., Luo, Y., Street, J. T., Jiao, P., Cai, L.',
    venue: 'RSC Advances 7(77):48785-48792',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2017-biogas-carbon-dioxide-reforming',
    title:
      'Biogas reforming of carbon dioxide to syngas production over Ni-Mg-Al catalysts',
    authors:
      'Zhan, Y., Han, J., Bao, Z., Cao, B., Li, Y., Street, J. T., Yu, F.',
    venue: 'Molecular Catalysis 436:248-258',
    year: 2017,
  }),
  journalPublication({
    id: 'street-2016-pinewood-activated-carbon',
    title:
      'Activated carbon derived from pyrolyzed pinewood char using elevated temperature, KOH, H3PO4, and H2O2',
    authors:
      'Luo, Y., Street, J. T., Steele, P. H., Entsminger, E. D., Guda, V. K.',
    venue: 'BioResources 11(4):10433-10447',
    year: 2016,
  }),
  journalPublication({
    id: 'street-2016-gas-to-liquid-biomass',
    title:
      'Pilot-plant production of gas-to-liquid synthetic fuel using gasified biomass over a novel biochar-supported catalyst',
    authors:
      'Street, J. T., Yu, F., Yan, Q., Wooten, J. R., Columbus, E. P., Hassan, E. M.',
    venue:
      'Transactions of the American Society of Agricultural and Biological Engineers 59(6):1485-1496',
    year: 2016,
  }),
  journalPublication({
    id: 'street-2015-carbon-encapsulated-iron',
    title:
      'Synthesis of carbon-encapsulated iron nanoparticles from wood derived sugars by hydrothermal carbonization (HTC) and their application to convert bio-syngas into liquid hydrocarbons',
    authors: 'Yan, Q., Street, J. T., Yu, F.',
    venue: 'Biomass and Bioenergy 83:85-95',
    year: 2015,
  }),
];

export const featuredPublications = publications.filter(
  (publication) => publication.isFeatured,
);
