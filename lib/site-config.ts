import type { IconName } from "@/components/icon";

export const company = {
  name: "O.MURPHIS GLOBAL LTD.",
  location:
    "Shop 4, No. 34 Coker Street, Beside Union Bank Plc, Coker Bus Stop, Abule Ijesha, Lagos State, Nigeria",
  mapsUrl:
    "https://www.google.com/maps/search/Shop+4,+No.+34+Coker+Street,+Beside+Union+Bank+Plc,+Coker+Bus+Stop,+Abule+Ijesha,+Lagos+State,+Nigeria/@6.4968075,3.3141946,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  contact: {
    phone: "",
    email: "",
    whatsappPhone: "+2348035812003",
  },
  // Set this to a verified form endpoint that accepts JSON POST requests.
  formEndpoint: "",
};

export const potentialServices = [
  {
    title: "Building and Civil Construction",
    description:
      "Potential support for building works and civil construction scopes.",
    icon: "building",
  },
  {
    title: "Heavy Machinery and Equipment",
    description:
      "Potential support for heavy machinery and construction equipment needs.",
    icon: "machine",
  },
  {
    title: "Earthmoving and Site Preparation",
    description:
      "Potential support for earthworks, ground preparation and site readiness.",
    icon: "earth",
  },
  {
    title: "Equipment Rental and Leasing",
    description:
      "Potential access to equipment through rental or leasing arrangements.",
    icon: "rental",
  },
  {
    title: "Construction Project Support",
    description:
      "Potential coordination and support for construction project requirements.",
    icon: "support",
  },
  {
    title: "Equipment Sourcing and Supply",
    description:
      "Potential sourcing support for equipment aligned to project needs.",
    icon: "supply",
  },
] as const satisfies readonly {
  title: string;
  description: string;
  icon: IconName;
}[];
