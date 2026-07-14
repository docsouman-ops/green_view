import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowRight, ShieldCheck, Sun, Grid, Droplets, CloudRain, Sprout } from "lucide-react";

interface ProjectSpecs {
  structureType: string;
  coveredArea: string;
  location: string;
  application: string;
  benefits: string;
  features: string;
}

interface Project {
  id: number;
  title: string;
  location: string;
  crop: string;
  area: string;
  subsidy: string;
  category: string;
  img: string;
  desc: string;
  specs?: ProjectSpecs;
}

const projectGallery: Project[] = [
  {
    id: 10,
    title: "High-Tech Multi-Span Polyhouse Installation",
    location: "Hooghly, West Bengal",
    crop: "Tomato & Capsicum Trellising",
    area: "1000 Sq. meters",
    subsidy: "MIDH State Scheme Approved",
    category: "Polyhouse",
    img: "/multispan_polyhouse.jpg",
    desc: "Successfully completed construction of a premium multi-span greenhouse structure optimized for vertical trellising. Equipped with multi-dome ventilation, temperature-moderating shading layers, and a robust micro-irrigation system for intensive high-yield cultivation.",
    specs: {
      structureType: "Multi-Span Polyhouse",
      coveredArea: "1000 sq mtr",
      location: "Hooghly",
      application: "Vertical Trellising (Tomato & Capsicum)",
      benefits: "Intensive High-Yield Cultivation, Climate Control",
      features: "Multi-Dome Ventilation, Shading Layers, Micro-Irrigation"
    }
  },
  {
    id: 11,
    title: "High-Tech Poly Greenhouse Nursery",
    location: "Nadia, West Bengal",
    crop: "Premium Vegetable Seedlings",
    area: "500 Sq. meters",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "/nursery_polyhouse.jpg",
    desc: "Installed a sophisticated high-tech nursery polyhouse tailored for premium seedling production. Features modern climate containment controls, optimized layout trays for high-density propagation, and uniform protective insect screens.",
    specs: {
      structureType: "Nursery Polyhouse",
      coveredArea: "500 sq mtr",
      location: "Nadia",
      application: "Premium Vegetable Seedlings",
      benefits: "High-Density Seedling Production, Pest Isolation",
      features: "Climate Containment, Optimized Tray Layout, Uniform Insect Screens"
    }
  },
  {
    id: 9,
    title: "Bankura Polyhouse Installation (Large-Scale)",
    location: "Bankura, West Bengal",
    crop: "Protected Cultivation",
    area: "4000 Sq. meters",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "/4000.jpeg",
    desc: "A 4000 sq mtr Polyhouse has been successfully installed to create a controlled environment for healthy crop cultivation. This setup helps in better growth, higher yield, and protects crops from adverse weather conditions.",
    specs: {
      structureType: "Polyhouse",
      coveredArea: "4000 sq mtr",
      location: "Bankura",
      application: "Protected Cultivation",
      benefits: "Better Growth, Higher Yield, Protection from Weather & Pests",
      features: "Strong Structure, UV Stabilized Cover, Proper Ventilation, Durable & Long Lasting"
    }
  },
  {
    id: 7,
    title: "Polyhouse Installation",
    location: "Birbhum",
    crop: "Protected Cultivation",
    area: "500 Sq. meters",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "/500.jpeg",
    desc: "A 500 sq mtr Polyhouse has been successfully installed to create a controlled environment for healthy crop cultivation and higher productivity.",
    specs: {
      structureType: "Polyhouse",
      coveredArea: "500 sq mtr",
      location: "Birbhum",
      application: "Protected Cultivation",
      benefits: "Better Growth, Higher Yield, Protection from Weather & Pests",
      features: "Strong Structure, UV Stabilized Cover, Proper Ventilation, Durable & Long Lasting"
    }
  },
  {
    id: 8,
    title: "Purulia Polyhouse Installation",
    location: "Purulia, West Bengal",
    crop: "Protected Cultivation",
    area: "300 Sq. meters",
    subsidy: "Govt Subsidy Supported",
    category: "Polyhouse",
    img: "/300.jpeg",
    desc: "A 300 sq mtr Polyhouse has been successfully installed in Purulia to provide a controlled environment for high-quality crop cultivation. It features a durable UV-stabilized cover, proper ventilation, and door/side vents for optimal growing conditions.",
    specs: {
      structureType: "Polyhouse",
      coveredArea: "300 sq mtr",
      location: "Purulia",
      application: "Protected Cultivation",
      benefits: "Better Growth, Higher Yield, Protection from Weather & Pests",
      features: "Strong Structure, UV Stabilized Cover, Proper Ventilation, Durable & Long Lasting"
    }
  },
  {
    id: 2,
    title: "Turnkey Protected Polyhouse Construction",
    location: "Hooghly, West Bengal",
    crop: "Coloured Capsicum & Gerbera",
    area: "1000 Sq. meters",
    subsidy: "MIDH State Link Scheme",
    category: "Polyhouse",
    img: "/polyhouse_construction.png",
    desc: "Erected a strong multi-span GI structure complete with UV-stabilized cladding polyethylene, automatic side roll-up ventilation, and fogger mist rings inside.",
    specs: {
      structureType: "Protected Polyhouse",
      coveredArea: "1000 sq mtr",
      location: "Hooghly",
      application: "Coloured Capsicum & Gerbera",
      benefits: "Off-Season Protected Cultivation, Premium Quality",
      features: "GI Structure, UV Cladding, Side Roll-Up Vent, Fogger Misting"
    }
  },
  {
    id: 3,
    title: "Solar Submersible Bore Pump Set",
    location: "Purulia District, West Bengal",
    crop: "Wheat & Mustard Brood",
    area: "3 HP Submersible Set",
    subsidy: "Under PM-KUSUM Component-B",
    category: "Solar Pumps",
    img: "/08.png",
    desc: "Fitted a heavy DC submersible pump into a deep tube-well grid powered by hot-dip galvanized array columns. Cut daily operational fuel and engine electricity bills to nil.",
    specs: {
      structureType: "Solar Submersible Pump",
      coveredArea: "3 HP Capacity",
      location: "Purulia District",
      application: "Wheat & Mustard Irrigation",
      benefits: "Zero Fuel Costs, Uninterrupted Daytime Power, Eco-Friendly",
      features: "High-Efficiency DC Motor, Hot-Dip Galvanized Mounting, PM-KUSUM Approved"
    }
  },
  {
    id: 4,
    title: "Large Overhead Sprinkler System Setup",
    location: "Bankura, West Bengal",
    crop: "Wheat & Groundnut Beds",
    area: "5 Acres Plot",
    subsidy: "PDMC Direct Subsidy Approved",
    category: "Irrigation",
    img: "/sprinkler_field.png",
    desc: "Assembled a robust network of quick-coupling sprinkler pipes and brass nozzles to provide uniform field rainfall emulation without dry spots.",
    specs: {
      structureType: "Overhead Sprinkler System",
      coveredArea: "5 Acres Plot",
      location: "Bankura",
      application: "Wheat & Groundnut Beds",
      benefits: "Water-Saving Rainfall Emulation, Even Distribution, Cost Savings",
      features: "Quick-Coupling Pipes, Heavy-Duty Brass Nozzles, High-Flow Submaster"
    }
  },
  {
    id: 5,
    title: "Automatic Protected Shade Net Green House",
    location: "Murshidabad, West Bengal",
    crop: "Premium Plant Seedlings",
    area: "800 Sq. meters",
    subsidy: "Private Installation",
    category: "Polyhouse",
    img: "/polyhouse_external.jpg",
    desc: "Created a protected shade structure using heavy green insect netting profiles to keep seedlings safe from severe pest vectors and direct midday sun baking.",
    specs: {
      structureType: "Shade Net Green House",
      coveredArea: "800 sq mtr",
      location: "Murshidabad",
      application: "Premium Plant Seedlings",
      benefits: "Protection from Direct Sun & Severe Pest Vectors",
      features: "Heavy Green Insect Netting, Sturdy Profiles, Modular Anchoring"
    }
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Irrigation", "Polyhouse", "Solar Pumps"];

  const filteredProjects = filter === "All" 
    ? projectGallery 
    : projectGallery.filter((p) => p.category === filter);

  return (
    <div className="pt-20 bg-[#fafbfa]">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1500" 
            alt="Farmland background" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-green-400 font-extrabold uppercase tracking-[0.2em] text-xs">Our Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-none text-white text-shadow">
            Work We've Done. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Farms We've Changed.
            </span>
          </h1>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mt-4 font-semibold">
            Every project here started with a farmer who had a problem — too much water loss, crop failure from weather, unreliable electricity, or no way to grow off-season.
          </p>
        </div>
      </section>

      {/* Interactivity Filters Menu */}
      <section className="py-12 bg-white border-b border-gray-150 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto py-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-2 py-2.5 px-6 rounded-full font-bold text-sm shrink-0 transition-all ${
                  filter === cat 
                    ? "bg-green-600 text-white shadow-lg" 
                    : "bg-gray-150 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat === "All" && <Grid className="w-4 h-4" />}
                {cat === "Irrigation" && <Droplets className="w-4 h-4" />}
                {cat === "Polyhouse" && <Sun className="w-4 h-4" />}
                {cat === "Solar Pumps" && <CloudRain className="w-4 h-4" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Display */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout 
            className="flex flex-col gap-10 sm:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3.5xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-350 flex flex-col lg:flex-row w-full"
                >
                  {/* Left Column: Image (Side-by-Side) */}
                  <div className="w-full lg:w-[38%] min-h-[300px] lg:min-h-full shrink-0 relative overflow-hidden bg-gray-50">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600/90 text-white backdrop-blur-sm shadow px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider block">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Case Study Details & Technical Specs Table */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6 w-full lg:w-[62%]">
                    {project.specs ? (
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                          <div className="space-y-2 flex-grow max-w-2xl">
                            <div className="flex items-center gap-2 text-green-700 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-none">
                              {project.title}
                            </h3>
                            
                            <p className="text-gray-650 text-sm sm:text-base leading-relaxed text-justify pt-1">
                              {project.desc}
                            </p>
                          </div>

                          <div className="flex shrink-0 items-center gap-4 border-t md:border-t-0 md:border-l border-gray-150 pt-4 md:pt-0 md:pl-8 w-full md:w-auto justify-center md:justify-start">
                            <div className="flex flex-col items-center text-center">
                              <div className="border border-green-600/30 p-3 rounded-full bg-green-50 mb-2">
                                {project.category === "Solar Pumps" ? (
                                  <Sun className="w-8 h-8 text-amber-600 animate-pulse" />
                                ) : project.category === "Irrigation" ? (
                                  <Droplets className="w-8 h-8 text-blue-600 animate-pulse" />
                                ) : (
                                  <Sprout className="w-8 h-8 text-green-700 animate-pulse" />
                                )}
                              </div>
                              <span className={`font-extrabold text-lg tracking-tight ${
                                project.category === "Solar Pumps" ? "text-amber-800" :
                                project.category === "Irrigation" ? "text-blue-800" :
                                "text-green-800"
                              }`}>
                                {project.specs.coveredArea.toUpperCase()}
                              </span>
                              <span className="text-gray-500 font-extrabold text-[10px] tracking-widest uppercase mt-0.5">
                                {project.category === "Solar Pumps" ? "Pump Rating" :
                                 project.category === "Irrigation" ? "Irrigation Area" :
                                 "Covered Area"}
                              </span>
                              <div className={`w-6 h-0.5 mt-2 rounded ${
                                project.category === "Solar Pumps" ? "bg-amber-500" :
                                project.category === "Irrigation" ? "bg-blue-500" :
                                "bg-green-600"
                              }`}></div>
                            </div>
                          </div>
                        </div>

                        {/* Technical Specs Table */}
                        <div className="border border-gray-150 rounded-2xl overflow-hidden mt-6 shadow-sm">
                          <div className="bg-[#3b592d] text-white px-6 py-3.5 flex justify-between font-bold text-xs sm:text-sm tracking-wider uppercase">
                            <span className="w-1/3">Item</span>
                            <span className="w-2/3">Description</span>
                          </div>
                          <div className="divide-y divide-gray-150">
                            <div className="px-6 py-3.5 flex justify-between text-xs sm:text-sm">
                              <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider">
                                {project.category === "Solar Pumps" ? "Pump Type" :
                                 project.category === "Irrigation" ? "Irrigation Type" :
                                 "Structure Type"}
                              </span>
                              <span className="w-2/3 text-gray-650">{project.specs.structureType}</span>
                            </div>
                            <div className="px-6 py-3.5 flex justify-between text-xs sm:text-sm bg-gray-50/50">
                              <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider">
                                {project.category === "Solar Pumps" ? "Pump Capacity" :
                                 project.category === "Irrigation" ? "Service Area" :
                                 "Covered Area"}
                              </span>
                              <span className="w-2/3 text-gray-650">{project.specs.coveredArea}</span>
                            </div>
                            <div className="px-6 py-3.5 flex justify-between text-xs sm:text-sm">
                              <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider">Location</span>
                              <span className="w-2/3 text-gray-650">{project.specs.location}</span>
                            </div>
                            <div className="px-6 py-3.5 flex justify-between text-xs sm:text-sm bg-gray-50/50">
                              <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider">Application</span>
                              <span className="w-2/3 text-gray-650">{project.specs.application}</span>
                            </div>
                            <div className="px-6 py-3.5 flex justify-between text-xs sm:text-sm">
                              <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider">Benefits</span>
                              <span className="w-2/3 text-gray-650 leading-relaxed">{project.specs.benefits}</span>
                            </div>
                            <div className="px-6 py-3.5 flex justify-between text-xs sm:text-sm bg-gray-50/50">
                              <span className="w-1/3 font-bold text-gray-800 uppercase tracking-wider">Features</span>
                              <span className="w-2/3 text-gray-650 leading-relaxed">{project.specs.features}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-green-700 text-xs font-extrabold uppercase tracking-wider">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight leading-snug">
                            {project.title}
                          </h3>
                          
                          <p className="text-gray-650 text-xs sm:text-sm leading-relaxed text-justify">
                            {project.desc}
                          </p>
                        </div>

                        <div className="border-t border-gray-100 pt-5 space-y-2.5">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400 font-bold uppercase">Crop Type:</span>
                            <span className="font-extrabold text-gray-800">{project.crop}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400 font-bold uppercase">Size Metric:</span>
                            <span className="font-extrabold text-gray-800">{project.area}</span>
                          </div>
                          <div className="flex justify-between text-xs items-center">
                            <span className="text-gray-400 font-bold uppercase">Subsidy note:</span>
                            <span className="font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg border border-green-150 text-[11px]">
                              {project.subsidy}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Sourcing Promise info box */}
      <section className="py-16 bg-[#fafbfa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white border border-gray-150 p-8 sm:p-12 rounded-3.5xl space-y-4">
          <h4 className="text-xl font-bold text-gray-950">Need more proof of results?</h4>
          <p className="text-gray-650 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We hold extensive lists of completed project references across nearly all West Bengal blocks and districts. Reach our local coordination team on WhatsApp to see live videos or local site permissions!
          </p>
          <div className="pt-2">
            <a 
              href="https://wa.me/917384854555" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-extrabold py-3.5 px-8 rounded-2xl text-sm transition-colors inline-block"
            >
              Request Custom Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
