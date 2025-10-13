import { Brain, Shield, Code, Activity } from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: 1,
    title: "AI-Powered Smart Contract Audits",
    description:
      "Detect vulnerabilities in smart contracts before deployment. Real-time AI analysis for secure transactions.",
    icon: Brain,
  },
  {
    id: 2,
    title: "Automated Blockchain Insights",
    description:
      "AI-driven analytics to optimize decision-making. Predict trends and improve operational efficiency.",
    icon: Activity,
  },
  {
    id: 3,
    title: "Security & Risk Detection",
    description:
      "Identify and mitigate threats using AI-powered security monitoring. Protect against scams, hacks, and fraud in real-time.",
    icon: Shield,
  },
  {
    id: 4,
    title: "AI-Driven Development Tools",
    description:
      "AI-assisted code generation & optimization. Seamless integration with multiple blockchain networks.",
    icon: Code,
  },
];

export default function BlockChainSolutionSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center text-white">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">About Us</h2>
        <h3 className="text-2xl font-semibold text-white/90 mb-6">
          About SIMPLE AI
        </h3>
        <p className="text-white/70 max-w-3xl mx-auto">
          SIMPLE AI leverages artificial intelligence to enhance blockchain
          security, automate workflows, and create smarter decentralized
          applications.
        </p>
      </div>

      {/* Features List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
        {features.map(({ id, title, description, icon: Icon }) => (
          <li
            key={id}
            className="flex flex-col items-center gap-4 p-6 bg-[#0B1820]/40 border border-white/10 rounded-2xl hover:bg-[#0B1820]/60 transition"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20">
              <Icon className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
            <p className="text-sm text-white/70">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
