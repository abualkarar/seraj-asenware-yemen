import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check, Download, Share2 } from "lucide-react";
import { useParams } from "wouter";
import { Link } from "wouter";

const productDetails: Record<string, any> = {
  "1": {
    name: "Digital Type Linear Heat Detection System",
    nameAr: "نظام كشف حرارة خطي رقمي",
    category: "Linear Heat Detectors",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663373014594/DvewxaQFTvqJUCuexAQaZ7/product-showcase-bg-CgBZBBPGAv3fyLckz5UkRJ.webp",
    description: "Advanced digital linear heat detection system for fire alarm applications",
    descriptionAr: "نظام متطور لكشف الحرارة الخطية بتقنية رقمية متقدمة لتطبيقات أنظمة الإنذار",
    specifications: [
      { label: "Temperature Range", labelAr: "نطاق درجة الحرارة", value: "-10°C to +60°C" },
      { label: "Detection Speed", labelAr: "سرعة الكشف", value: "< 1 second" },
      { label: "Cable Length", labelAr: "طول الكابل", value: "Up to 3000m" },
      { label: "Power Supply", labelAr: "مصدر الطاقة", value: "24V DC" },
      { label: "Certification", labelAr: "الشهادات", value: "UL/LPCB" }
    ],
    features: [
      "High sensitivity digital detection",
      "Real-time temperature monitoring",
      "UL/LPCB certified",
      "Wide temperature range",
      "Fast response time",
      "Long cable support"
    ],
    featuresAr: [
      "كشف رقمي عالي الحساسية",
      "مراقبة درجة الحرارة في الوقت الفعلي",
      "معتمد من UL/LPCB",
      "نطاق درجة حرارة واسع",
      "وقت استجابة سريع",
      "دعم كابل طويل"
    ],
    applications: [
      "Industrial facilities",
      "Data centers",
      "Warehouses",
      "Tunnels",
      "Cable trays",
      "Power plants"
    ],
    applicationsAr: [
      "المنشآت الصناعية",
      "مراكز البيانات",
      "المستودعات",
      "الأنفاق",
      "مجاري الكابلات",
      "محطات الكهرباء"
    ]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id || "1";
  const product = productDetails[productId];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">المنتج غير موجود</h1>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              العودة إلى المنتجات
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container py-6 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/">
            <a className="hover:text-foreground transition-colors">الرئيسية</a>
          </Link>
          <span>/</span>
          <Link href="/products">
            <a className="hover:text-foreground transition-colors">المنتجات</a>
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.nameAr}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="sticky top-24 bg-card rounded-lg overflow-hidden border border-border">
                <img
                  src={product.image}
                  alt={product.nameAr}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.nameAr}
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.descriptionAr}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white flex-1">
                  اطلب الآن
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Share2 className="w-4 h-4 ml-2" />
                  شارك
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <Download className="w-4 h-4 ml-2" />
                  تحميل
                </Button>
              </div>

              {/* Specifications */}
              <Card className="p-6 border-border mb-8">
                <h3 className="text-xl font-bold text-foreground mb-6">المواصفات التقنية</h3>
                <div className="space-y-4">
                  {product.specifications.map((spec: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-start pb-4 border-b border-border last:border-0">
                      <span className="text-muted-foreground font-medium">{spec.labelAr}</span>
                      <span className="text-foreground font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">المميزات الرئيسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.featuresAr.map((feature: string, idx: number) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent/10">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12">التطبيقات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applicationsAr.map((app: string, idx: number) => (
              <Card key={idx} className="p-6 border-border hover:border-accent transition-colors">
                <div className="text-4xl mb-3">🏭</div>
                <p className="text-foreground font-medium">{app}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            هل تريد معرفة المزيد؟
          </h2>
          <p className="text-lg text-white/90 mb-8">
            تواصل مع فريقنا المتخصص للحصول على استشارة مجانية وعرض سعري مخصص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              اطلب عرض سعري
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
