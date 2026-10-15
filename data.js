// data.js
const SITE_DATA = {
  "Open Textbooks": [
    // LibreTexts Main Hubs & Specialized Bookshelves
    "https://chem.libretexts.org",
    "https://bio.libretexts.org",
    "https://phys.libretexts.org",
    "https://math.libretexts.org",
    "https://stats.libretexts.org",
    "https://eng.libretexts.org",
    "https://geo.libretexts.org",
    "https://med.libretexts.org",
    // Open Monograph & Book Platforms (JupyterBook / Bookdown / Pressbooks / HTML)
    "https://openstax.org/subjects/science",
    "https://openstax.org/subjects/math",
    "https://open.umn.edu/opentextbooks",
    "https://open.bccampus.ca",
    "https://www.feynmanlectures.caltech.edu",
    "https://greenteapress.com/wp/",
    "https://natureofcode.com/book/",
    "https://eloquentjavascript.net",
    "https://r4ds.hadley.nz",
    "https://clauswilke.com/dataviz/",
    "https://otexts.com/fpp3/",
    "https://www.statlearning.com",
    "https://mml-book.github.io",
    "https://probml.github.io/pml-book/",
    "https://patterns.eecs.berkeley.edu",
    "https://book.cds101.com",
    "https://inferentialthinking.com",
    "https://neuralnetworksanddeeplearning.com",
    "https://www.deeplearningbook.org"
  ],

  "Open Courseware": [
    // University Open Courseware & Interactive Curricula
    "https://ocw.mit.edu",
    "https://oyc.yale.edu",
    "https://see.stanford.edu",
    "https://oli.cmu.edu",
    "https://open.umich.edu",
    "https://www.open.edu/openlearn/",
    "https://missing.csail.mit.edu",
    "https://computationalthinking.mit.edu",
    "https:// www.complexityexplorer.org",
    "https://www.saylor.org",
    "https://www.oercommons.org",
    "https://www.merlot.org/merlot/index.htm",
    "https://nptel.ac.in",
    "https://www.leanprover-community.github.io"
  ],

  "Chemistry & Toxicology": [
    // Structure Viewers, Periodic Tables & Cheminformatics Hubs
    "https://molview.org",
    "https://ptable.com",
    "https://pubchem.ncbi.nlm.nih.gov",
    "https://comptox.epa.gov/dashboard/",
    "https://www.ebi.ac.uk/chebi/",
    "https://www.ebi.ac.uk/chembl/",
    "https://massbank.eu/MassBank/",
    "https://webbook.nist.gov/chemistry/",
    "https://www.chemspider.com",
    "https://zinc15.docking.org",
    "https://www.hmdb.ca",
    "https://www.lipidmaps.org",
    "https://www.drugbank.com",
    
    // Cheminformatics Calculators, Descriptors & Property Predictors
    "https://www.vcclab.org/lab/alogps/",
    "https://www.swissadme.ch",
    "https://www.swisstargetprediction.ch",
    "https://admetmesh.scbdd.com",
    "https://toxric.bioinfotech.org",
    "https://www.way2drug.com/passonline/",
    "https://www.way2drug.com/tlc/",
    "https://ochem.eu",
    "https://qsar.food.dtu.dk",
    "https://niwa.anat.dk/niwa/",
    "https://www.toxplanet.com",

    // Toxicity, Pathways & Environmental Fate
    "https://aopwiki.org",
    "https://ctdbase.org",
    "https://www.epa.gov/tsca-screening-tools/epi-suitetm-estimation-program-interface",
    "https://hmp2.org",

    // Open Chemistry Literature & Sims
    "https://chem.libretexts.org/Bookshelves/Environmental_Chemistry",
    "https://chem.libretexts.org/Bookshelves/Organic_Chemistry",
    "https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps",
    "https://www.organic-chemistry.org",
    "https://masterorganicchemistry.com",
    "https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html",
    "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
    "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_en.html",
    "https://en.m.wikipedia.org/wiki/Portal:Chemistry"
  ],

  "Computer Science, Data & ML": [
    // Interactive Machine Learning, Stats & Visual Explainers
    "https://distill.pub",
    "https://d2l.ai",
    "https://spinningup.openai.com",
    "https://seeing-theory.brown.edu",
    "https://playground.tensorflow.org",
    "https://poloclub.github.io/cnn-explainer/",
    "https://poloclub.github.io/transformer-explainer/",
    "https://bbycroft.net/llm",
    "https://udlbook.github.io/udlbook/",
    "https://gnn.seas.upenn.edu",
    "https://geometricdeeplearning.com",
    "https://course.fast.ai",
    "https://karpathy.github.io",
    "https://colah.github.io",
    "https://lilianweng.github.io",
    "https://jayalammar.github.io",
    "https://visualgo.net/en",
    "https://algorithm-visualizer.org",
    "https://www.redblobgames.com",
    "https://immersivemath.com/ila/index.html",
    "https://explained.ai",
    "https://www.jmlr.org",
    "https://paperswithcode.com"
  ],

  "Physics & Interactive Labs": [
    // Direct HTML5 PhET Simulations & Physics Visualizers
    "https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_en.html",
    "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html",
    "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
    "https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html",
    "https://phet.colorado.edu/sims/html/gas-properties/latest/gas-properties_en.html",
    "https://phet.colorado.edu/sims/html/blackbody-spectrum/latest/blackbody-spectrum_en.html",
    "https://phet.colorado.edu/sims/html/rutherford-scattering/latest/rutherford-scattering_en.html",
    // Open Physics Engines & Explainers
    "https://www.myphysicslab.com",
    "https://www.falstad.com/mathphysics.html",
    "https://www.falstad.com/circuit/circuitjs.html",
    "https://www.falstad.com/ripple/",
    "https://ciechanow.ski/archives/",
    "https://quantum.country",
    "https://qiskit.org/learn",
    "https://hyperphysics.phy-astr.gsu.edu/hbase/index.html",
    "https://physics.info",
    "https://en.m.wikipedia.org/wiki/Portal:Physics"
  ],

  "Astronomy & Space": [
    "https://apod.nasa.gov/apod/astropix.html",
    "https://eyes.nasa.gov/apps/solar-system/#/home",
    "https://eyes.nasa.gov/apps/exo/",
    "https://eyes.nasa.gov/apps/asteroids/",
    "https://stellarium-web.org",
    "https://www.solarsystemscope.com",
    "https://skyandtelescope.org/interactive-sky-chart/",
    "https://www.zooniverse.org",
    "https://exoplanets.nasa.gov",
    "https://webbtelescope.org",
    "https://en.m.wikipedia.org/wiki/Portal:Astronomy"
  ],

  "Biology, Bioinformatics & Earth": [
    // Structural Biology, Genomics & Biodiversity
    "https://www.rcsb.org",
    "https://alphafold.ebi.ac.uk",
    "https://www.uniprot.org",
    "https://www.ncbi.nlm.nih.gov/books/",
    "https://www.genome.jp/kegg/",
    "https://reactome.org",
    "https://www.onezoom.org",
    "https://eol.org",
    "https://www.gbif.org",
    "https://www.inaturalist.org",
    "https://learn.genetics.utah.edu",
    "https://www.biointeractive.org",
    // Earth, Ocean & Climate Visualizers
    "https://earth.nullschool.net",
    "https://earthobservatory.nasa.gov",
    "https://climate.nasa.gov",
    "https://www.globalcarbonatlas.org",
    "https://ourworldindata.org",
    "https://bio.libretexts.org/Bookshelves/Ecology",
    "https://bio.libretexts.org/Bookshelves/Biochemistry",
    "https://en.m.wikipedia.org/wiki/Portal:Biology",
    "https://en.m.wikipedia.org/wiki/Portal:Earth_sciences"
  ],

  "Mathematics & Logic": [
    "https://www.desmos.com/calculator",
    "https://www.geogebra.org/classic",
    "https://mathworld.wolfram.com",
    "https://ncatlab.org/nlab/show/HomePage",
    "https://stacks.math.columbia.edu",
    "https://oeis.org",
    "https://www.lmfdb.org",
    "https://projecteuler.net",
    "https://artofrussell.com",
    "https://betterexplained.com/cheatsheet/",
    "https://www.3blue1brown.com",
    "https://math.libretexts.org/Bookshelves/Linear_Algebra",
    "https://math.libretexts.org/Bookshelves/Differential_Equations",
    "https://en.m.wikipedia.org/wiki/Portal:Mathematics"
  ],

  "Preprints & Science Journalism": [
    "https://arxiv.org",
    "https://www.biorxiv.org",
    "https://chemrxiv.org",
    "https://essopenarchive.org",
    "https://elifesciences.org",
    "https://plos.org",
    "https://www.quantamagazine.org",
    "https://nautil.us",
    "https://aeon.co/science",
    "https://arstechnica.com/science/"
  ]
};
