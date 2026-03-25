import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Cpu,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Recycle,
  Settings,
  ShieldCheck,
  Sprout,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Agriculture", href: "#agriculture" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Cpu,
    title: "IT & Digital Services",
    desc: "End-to-end information technology solutions, digital transformation strategies, and software advisory to keep your business future-ready.",
  },
  {
    icon: Briefcase,
    title: "Business & Management Consulting",
    desc: "Strategic consulting across business planning, organisational design, governance frameworks, and performance optimisation.",
  },
  {
    icon: Settings,
    title: "Process Optimisation",
    desc: "Identify inefficiencies and streamline workflows using proven methodologies to drive productivity and reduce operational costs.",
  },
  {
    icon: TrendingUp,
    title: "IT-Enabled Services",
    desc: "Leveraging technology to deliver scalable back-office and support services, enabling your core business to focus on growth.",
  },
  {
    icon: BookOpen,
    title: "Training & Skill Development",
    desc: "Customised training programmes, workshops, and upskilling initiatives tailored to your workforce and industry domain.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Management",
    desc: "Professional leasing, renting, and property management services combining legal expertise with market-driven insights.",
  },
  {
    icon: Sprout,
    title: "Agriculture & Agri-Allied Operations",
    desc: "Organic cultivation, agri-business consulting, and allied agricultural operations grounded in sustainable practices.",
  },
];

const PRODUCE = [
  {
    emoji: "🥭",
    name: "Alphonso Mango",
    desc: "The king of mangoes — exceptionally sweet with a rich, creamy texture and a mesmerising aroma.",
    tag: "Premium",
  },
  {
    emoji: "🥭",
    name: "Kesar Mango",
    desc: "Renowned for its deep saffron colour and intensely sweet flavour, cultivated with care in our orchards.",
    tag: "Popular",
  },
  {
    emoji: "🥭",
    name: "Sonpari Mango",
    desc: "A premium green-skinned variety with a distinctively sweet, fibre-free pulp and extended shelf life.",
    tag: "Seasonal",
  },
  {
    emoji: "🍌",
    name: "Banana",
    desc: "Naturally ripened, organically grown bananas bursting with natural sweetness and nutritional goodness.",
    tag: "Year Round",
  },
  {
    emoji: "🥥",
    name: "Coconut",
    desc: "Fresh tender coconuts and mature ones, harvested from tall palms in our tropical groves.",
    tag: "Fresh",
  },
  {
    emoji: "🍈",
    name: "Guava",
    desc: "Crisp, aromatic guavas with a signature sweet-tart balance, packed with Vitamin C and antioxidants.",
    tag: "Nutritious",
  },
  {
    emoji: "🍦",
    name: "Custard Apple",
    desc: "Naturally creamy sitaphal with a sweet, custard-like flesh cherished across India.",
    tag: "Seasonal",
  },
  {
    emoji: "🌿",
    name: "Fig",
    desc: "Succulent, honey-sweet figs — a superfood staple from our sun-drenched farms.",
    tag: "Superfood",
  },
  {
    emoji: "🍇",
    name: "Mulberry",
    desc: "Juicy, antioxidant-rich mulberries harvested at peak ripeness, available in season from our groves.",
    tag: "Antioxidant",
  },
];

const VALUES = [
  {
    icon: Star,
    title: "Deep Expertise",
    desc: "Decades of combined experience in IT consulting, project management, and sustainable organic farming.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    desc: "Transparent practices, honest advisory, and unwavering commitment to our clients' goals.",
  },
  {
    icon: Recycle,
    title: "Sustainability First",
    desc: "Eco-friendly cultivation methods that protect soil health and biodiversity for future generations.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    desc: "Rigorous quality checks at every stage — from farm to delivery and milestone to milestone.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "We partner with you through every phase — from strategy to execution and beyond.",
  },
];

type ProductKey = "alphonso" | "kesar" | "sonpari" | "banana";

const PRODUCTS: Record<
  ProductKey,
  { label: string; unit: string; price: number; note: string }
> = {
  alphonso: {
    label: "Alphonso Mango (Box)",
    unit: "box",
    price: 1100,
    note: "1 box = 2.5 dozen",
  },
  kesar: {
    label: "Kesar Mango (Box)",
    unit: "box",
    price: 1100,
    note: "1 box = 2.5 dozen",
  },
  sonpari: {
    label: "Sonpari Mango (Box)",
    unit: "box",
    price: 1100,
    note: "1 box = 2.5 dozen",
  },
  banana: {
    label: "Organic Banana (Dozen)",
    unit: "dozen",
    price: 150,
    note: "price per dozen",
  },
};

const EMPTY_ORDER = {
  name: "",
  email: "",
  phone: "",
  address: "",
  product: "alphonso" as ProductKey,
  quantity: 1,
};

const EMPTY_CONTACT = { name: "", email: "", message: "" };

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Order form state
  const [order, setOrder] = useState(EMPTY_ORDER);
  const [orderDone, setOrderDone] = useState(false);

  // Contact form state
  const [contact, setContact] = useState(EMPTY_CONTACT);
  const [contactDone, setContactDone] = useState(false);

  const selectedProduct = PRODUCTS[order.product];
  const orderTotal = selectedProduct.price * order.quantity;

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderDone(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactDone(true);
    setContact(EMPTY_CONTACT);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* ─── HEADER ─── */}
      <header
        id="home"
        className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 select-none"
            data-ocid="nav.link"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "oklch(var(--brand-green))" }}
            >
              <Leaf size={16} className="text-white" />
            </div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ color: "oklch(var(--brand-green))" }}
            >
              Praanvee{" "}
              <span className="font-medium text-muted-foreground text-sm">
                LLP
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button
                data-ocid="nav.primary_button"
                className="rounded-full font-semibold px-5 text-white"
                style={{ backgroundColor: "oklch(var(--brand-green))" }}
              >
                Get a Quote
              </Button>
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="block py-2.5 text-sm font-medium text-foreground/70 hover:text-foreground border-b border-border last:border-0"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-4 w-full font-semibold rounded-full text-white"
              data-ocid="nav.primary_button"
              style={{ backgroundColor: "oklch(var(--brand-green))" }}
              onClick={() => {
                closeMenu();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get a Quote
            </Button>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 155) 0%, oklch(0.32 0.09 155) 50%, oklch(0.28 0.07 145) 100%)",
        }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 35%, oklch(0.9 0.1 72) 0%, transparent 55%), radial-gradient(circle at 75% 70%, oklch(0.5 0.1 155) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: "oklch(var(--brand-amber) / 0.15)",
                color: "oklch(var(--brand-amber))",
                border: "1px solid oklch(var(--brand-amber) / 0.3)",
              }}
            >
              Consultancy · Agriculture · Excellence
            </span>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              style={{ color: "oklch(0.97 0 0)" }}
            >
              Innovation in IT.{" "}
              <span style={{ color: "oklch(var(--brand-amber))" }}>
                Excellence in Agriculture.
              </span>
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
              style={{ color: "oklch(0.82 0.02 155)" }}
            >
              Praanvee LLP bridges corporate excellence and nature's abundance.
              We deliver strategic IT and management consulting while
              cultivating premium organic produce across our farms in India.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="font-semibold text-base px-8 rounded-full"
                  style={{
                    backgroundColor: "oklch(var(--brand-amber))",
                    color: "oklch(0.12 0 0)",
                  }}
                >
                  Explore Services
                </Button>
              </a>
              <a href="#order">
                <Button
                  data-ocid="hero.secondary_button"
                  size="lg"
                  variant="outline"
                  className="font-semibold text-base px-8 rounded-full border-white/50 text-white hover:bg-white/10 hover:text-white"
                >
                  Order Organic Produce
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-xs" style={{ color: "oklch(0.65 0.02 155)" }}>
            scroll
          </span>
          <div
            className="w-0.5 h-8 rounded-full"
            style={{ backgroundColor: "oklch(0.65 0.02 155)" }}
          />
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--brand-green))" }}
            >
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A diverse portfolio of services spanning technology, consulting,
              and agriculture — united by our commitment to quality and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((svc, idx) => (
              <Card
                key={svc.title}
                data-ocid={`services.item.${idx + 1}`}
                className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border rounded-xl"
              >
                <CardContent className="p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    }}
                  >
                    <svc.icon
                      size={22}
                      style={{ color: "oklch(var(--brand-green))" }}
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-base mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AGRICULTURE ─── */}
      <section
        id="agriculture"
        className="py-24"
        style={{ backgroundColor: "oklch(var(--brand-sage))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--brand-green))" }}
            >
              From Our Farms
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Organic Agriculture Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Praanvee cultivates a rich variety of premium organic fruits,
              grown without chemicals, harvested with care, and delivered fresh
              to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {PRODUCE.map((item, idx) => (
              <div
                key={item.name}
                data-ocid={`agriculture.item.${idx + 1}`}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <span
                  className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2"
                  style={{
                    backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    color: "oklch(var(--brand-green))",
                  }}
                >
                  {item.tag}
                </span>
                <h3 className="font-bold text-foreground text-sm mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ORDER ─── */}
      <section id="order" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--brand-green))" }}
            >
              Direct From Farm
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Order Fresh Organic Produce
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Order directly from Praanvee's organic farm. Chemical-free,
              hand-picked, and delivered fresh.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {/* Mangoes */}
            <div
              className="rounded-2xl p-6 border-2"
              style={{
                borderColor: "oklch(var(--brand-green) / 0.3)",
                backgroundColor: "oklch(var(--brand-sage))",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-3xl">🥭</span>
                  <h3 className="font-bold text-foreground text-lg mt-2">
                    Organic Mangoes
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Alphonso · Kesar · Sonpari
                  </p>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(var(--brand-amber))",
                    color: "oklch(0.12 0 0)",
                  }}
                >
                  Premium Hand-picked
                </span>
              </div>
              <div
                className="h-px my-4"
                style={{ backgroundColor: "oklch(var(--brand-green) / 0.15)" }}
              />
              <div className="space-y-1">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "oklch(var(--brand-green))" }}
                >
                  ₹1,100
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    / box
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  1 box = 2.5 dozen mangoes
                </p>
              </div>
            </div>

            {/* Bananas */}
            <div
              className="rounded-2xl p-6 border-2"
              style={{
                borderColor: "oklch(var(--brand-amber) / 0.4)",
                backgroundColor: "oklch(0.97 0.01 85)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-3xl">🍌</span>
                  <h3 className="font-bold text-foreground text-lg mt-2">
                    Organic Bananas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Naturally ripened · Chemical-free
                  </p>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "oklch(var(--brand-green) / 0.12)",
                    color: "oklch(var(--brand-green))",
                  }}
                >
                  Year Round
                </span>
              </div>
              <div
                className="h-px my-4"
                style={{ backgroundColor: "oklch(var(--brand-amber) / 0.2)" }}
              />
              <div className="space-y-1">
                <p
                  className="text-2xl font-bold"
                  style={{ color: "oklch(var(--brand-green))" }}
                >
                  ₹150
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    / dozen
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Minimum order: 1 dozen
                </p>
              </div>
            </div>
          </div>

          {/* Order form */}
          <div className="max-w-2xl mx-auto">
            {orderDone ? (
              <Card
                className="shadow-card border border-border rounded-2xl"
                data-ocid="order.success_state"
              >
                <CardContent className="p-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    }}
                  >
                    <CheckCircle2
                      size={32}
                      style={{ color: "oklch(var(--brand-green))" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Order Placed Successfully!
                  </h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Your order has been placed! We will contact you shortly to
                    confirm delivery.
                  </p>
                  <Button
                    className="mt-6"
                    variant="outline"
                    data-ocid="order.secondary_button"
                    onClick={() => {
                      setOrderDone(false);
                      setOrder(EMPTY_ORDER);
                    }}
                  >
                    Place Another Order
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card border border-border rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="font-bold text-foreground text-lg mb-6">
                    Your Order Details
                  </h3>
                  <form onSubmit={handleOrderSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label
                          htmlFor="order-name"
                          className="text-sm font-medium mb-1.5 block"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="order-name"
                          data-ocid="order.input"
                          placeholder="Your full name"
                          value={order.name}
                          onChange={(e) =>
                            setOrder((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="order-phone"
                          className="text-sm font-medium mb-1.5 block"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="order-phone"
                          data-ocid="order.input"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={order.phone}
                          onChange={(e) =>
                            setOrder((p) => ({ ...p, phone: e.target.value }))
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="order-email"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="order-email"
                        data-ocid="order.input"
                        type="email"
                        placeholder="you@example.com"
                        value={order.email}
                        onChange={(e) =>
                          setOrder((p) => ({ ...p, email: e.target.value }))
                        }
                        required
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <Label
                        htmlFor="order-address"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        Delivery Address{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="order-address"
                        data-ocid="order.textarea"
                        placeholder="Enter your complete delivery address..."
                        rows={3}
                        value={order.address}
                        onChange={(e) =>
                          setOrder((p) => ({ ...p, address: e.target.value }))
                        }
                        required
                      />
                    </div>

                    {/* Product + Quantity */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <Label className="text-sm font-medium mb-1.5 block">
                          Select Product{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={order.product}
                          onValueChange={(val) =>
                            setOrder((p) => ({
                              ...p,
                              product: val as ProductKey,
                              quantity: 1,
                            }))
                          }
                          required
                        >
                          <SelectTrigger
                            data-ocid="order.select"
                            className="w-full"
                          >
                            <SelectValue placeholder="Choose a product" />
                          </SelectTrigger>
                          <SelectContent>
                            {(
                              Object.entries(PRODUCTS) as [
                                ProductKey,
                                (typeof PRODUCTS)[ProductKey],
                              ][]
                            ).map(([key, prod]) => (
                              <SelectItem key={key} value={key}>
                                {prod.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground mt-1">
                          {selectedProduct.note} · ₹
                          {selectedProduct.price.toLocaleString("en-IN")} per{" "}
                          {selectedProduct.unit}
                        </p>
                      </div>
                      <div>
                        <Label
                          htmlFor="order-qty"
                          className="text-sm font-medium mb-1.5 block"
                        >
                          Quantity ({selectedProduct.unit}s){" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="order-qty"
                          data-ocid="order.input"
                          type="number"
                          min={1}
                          value={order.quantity}
                          onChange={(e) =>
                            setOrder((p) => ({
                              ...p,
                              quantity: Math.max(1, Number(e.target.value)),
                            }))
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Order Total */}
                    <div
                      className="rounded-xl p-4 flex items-center justify-between"
                      style={{ backgroundColor: "oklch(var(--brand-sage))" }}
                    >
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Order Total
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {order.quantity} {selectedProduct.unit}(s) × ₹
                          {selectedProduct.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <p
                        className="text-2xl font-bold"
                        style={{ color: "oklch(var(--brand-green))" }}
                        data-ocid="order.panel"
                      >
                        ₹{orderTotal.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <Button
                      type="submit"
                      data-ocid="order.submit_button"
                      size="lg"
                      className="w-full font-semibold text-white rounded-full"
                      style={{ backgroundColor: "oklch(var(--brand-green))" }}
                    >
                      Place Order
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* ─── WHY PRAANVEE ─── */}
      <section
        className="py-24"
        style={{ backgroundColor: "oklch(var(--brand-sage))" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "oklch(var(--brand-green))" }}
              >
                Our Promise
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
                Why Partner with Praanvee?
              </h2>
              <div
                className="w-16 h-1 rounded mb-6"
                style={{ backgroundColor: "oklch(var(--brand-amber))" }}
              />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Praanvee LLP stands at the intersection of two worlds — the
                structured discipline of modern technology and business
                consulting, and the nurturing patience of organic farming. We
                bring both together with equal rigour and passion.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're seeking a trusted IT and management partner or
                looking to source premium organic produce, Praanvee is committed
                to excellence, transparency, and lasting relationships.
              </p>
              <a href="#contact">
                <Button
                  data-ocid="about.primary_button"
                  size="lg"
                  className="font-semibold text-white rounded-full px-8"
                  style={{ backgroundColor: "oklch(var(--brand-green))" }}
                >
                  Get in Touch
                </Button>
              </a>
            </div>

            <div className="space-y-5">
              {VALUES.map((v, idx) => (
                <div
                  key={v.title}
                  data-ocid={`about.item.${idx + 1}`}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-card"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    }}
                  >
                    <v.icon
                      size={20}
                      style={{ color: "oklch(var(--brand-green))" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-0.5">
                      {v.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: "oklch(var(--brand-green))" }}
            >
              Let's Connect
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind, need consulting support, or want to order
              organic produce? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-foreground text-xl mb-2">
                  Praanvee LLP
                </h3>
                <div
                  className="w-12 h-1 rounded mb-5"
                  style={{ backgroundColor: "oklch(var(--brand-amber))" }}
                />
                <p className="text-muted-foreground leading-relaxed">
                  Bridging excellence in IT, consulting, and organic
                  agriculture. We're here to help with all your needs.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    }}
                  >
                    <MapPin
                      size={18}
                      style={{ color: "oklch(var(--brand-green))" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">
                      Address
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Tower No. 8, Amanora Aspire Towers,
                      <br />
                      Hadapsar, Pune 411028, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "oklch(var(--brand-green))" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+917069553814"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      +91 7069553814
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: "oklch(var(--brand-green) / 0.1)",
                    }}
                  >
                    <Mail
                      size={18}
                      style={{ color: "oklch(var(--brand-green))" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:bkdesai16@gmail.com"
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      bkdesai16@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              {contactDone ? (
                <Card
                  className="shadow-card border border-border rounded-2xl"
                  data-ocid="contact.success_state"
                >
                  <CardContent className="p-10 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        backgroundColor: "oklch(var(--brand-green) / 0.1)",
                      }}
                    >
                      <CheckCircle2
                        size={32}
                        style={{ color: "oklch(var(--brand-green))" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Message Received!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Our team will get back to you
                      within 1–2 business days.
                    </p>
                    <Button
                      className="mt-6"
                      variant="outline"
                      onClick={() => setContactDone(false)}
                      data-ocid="contact.secondary_button"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-card border border-border rounded-2xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleContactSubmit} className="space-y-5">
                      <div>
                        <Label
                          htmlFor="c-name"
                          className="text-sm font-medium mb-1.5 block"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="c-name"
                          data-ocid="contact.input"
                          placeholder="Your full name"
                          value={contact.name}
                          onChange={(e) =>
                            setContact((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="c-email"
                          className="text-sm font-medium mb-1.5 block"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="c-email"
                          data-ocid="contact.input"
                          type="email"
                          placeholder="you@example.com"
                          value={contact.email}
                          onChange={(e) =>
                            setContact((p) => ({ ...p, email: e.target.value }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="c-message"
                          className="text-sm font-medium mb-1.5 block"
                        >
                          Message
                        </Label>
                        <Textarea
                          id="c-message"
                          data-ocid="contact.textarea"
                          placeholder="Tell us about your project or enquiry..."
                          rows={5}
                          value={contact.message}
                          onChange={(e) =>
                            setContact((p) => ({
                              ...p,
                              message: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        data-ocid="contact.submit_button"
                        size="lg"
                        className="w-full font-semibold text-white rounded-full"
                        style={{ backgroundColor: "oklch(var(--brand-green))" }}
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        style={{ backgroundColor: "oklch(var(--brand-footer))" }}
        className="pt-16 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b"
            style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
          >
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "oklch(var(--brand-amber) / 0.2)" }}
                >
                  <Leaf
                    size={16}
                    style={{ color: "oklch(var(--brand-amber))" }}
                  />
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ color: "oklch(var(--brand-amber))" }}
                >
                  Praanvee{" "}
                  <span className="font-medium text-white/60 text-base">
                    LLP
                  </span>
                </span>
              </div>
              <p
                className="text-sm leading-relaxed max-w-sm"
                style={{ color: "oklch(0.65 0.02 155)" }}
              >
                Innovation in IT. Excellence in Agriculture. Praanvee LLP brings
                together technology consulting and organic farming under one
                trusted partnership.
              </p>
              <div className="mt-5 flex items-start gap-3">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--brand-amber))" }}
                />
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.02 155)" }}
                >
                  Tower No. 8, Amanora Aspire Towers, Hadapsar, Pune 411028,
                  India
                </p>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4
                className="font-semibold mb-4 text-xs uppercase tracking-widest"
                style={{ color: "oklch(var(--brand-amber))" }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "oklch(0.62 0.02 155)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="font-semibold mb-4 text-xs uppercase tracking-widest"
                style={{ color: "oklch(var(--brand-amber))" }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 items-center">
                  <Phone
                    size={13}
                    style={{ color: "oklch(var(--brand-amber))" }}
                  />
                  <a
                    href="tel:+917069553814"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "oklch(0.62 0.02 155)" }}
                  >
                    +91 7069553814
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail
                    size={13}
                    style={{ color: "oklch(var(--brand-amber))" }}
                  />
                  <a
                    href="mailto:bkdesai16@gmail.com"
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "oklch(0.62 0.02 155)" }}
                  >
                    bkdesai16@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs" style={{ color: "oklch(0.45 0.01 155)" }}>
              © {new Date().getFullYear()} Praanvee LLP. All rights reserved.
            </p>
            <p className="text-xs" style={{ color: "oklch(0.45 0.01 155)" }}>
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
