import { SectionHeader } from '../components/brand/SectionHeader';
import { TestimonialCarousel } from '../components/brand/TestimonialCarousel';
import { CTABlock } from '../components/brand/CTABlock';
import { CheckCircle2, Search, TrendingUp, Users, Briefcase, Target, Zap } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      number: '01',
      title: 'Сонгон шалгаруулалт',
      description: 'Central Test-ийн сэтгэл зүйн үнэлгээг AI-аар тайлбарлаж, нэр дэвшигчийн ажлын байранд таарах эсэхийг секундын дотор үнэлнэ.',
      bullets: [
        'Нэр дэвшигчийн Big Five болон MBTI профайлын автомат тайлбар',
        'Ажлын байрны шаардлагатай харьцуулалт',
        'Өрөөдөл биш үндэслэлтэй сонголт'
      ],
      icon: Search
    },
    {
      number: '02',
      title: 'Авьяас чадварын менежмент',
      description: 'Ажилчдын сэтгэл зүйн профайлд үндэслэн ур чадварын хөгжлийг хянаж, персональчлагдсан сургалтын замнал санал болгоно.',
      bullets: [
        'Competency gap analysis',
        'Хувь хүний хөгжлийн замнал',
        'Big Five-д үндэслэсэн learning style таних'
      ],
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Багийн динамик шинжилгээ',
      description: 'Багийн гишүүдийн сэтгэл зүйн хослолыг үнэлж, хамтын ажиллагааны асуудлыг урьдчилан таамаглана.',
      bullets: [
        'Багийн найрлагын оновчлол',
        'Зөрчилдөөний урьдчилсан таамаглал',
        'Харилцааны шинжилгээ'
      ],
      icon: Users
    },
    {
      number: '04',
      title: 'Хөгжлийн замнал',
      description: 'Ажилчдын сэтгэл зүйн онцлогт тохирсон ажил мэргэжлийн замналыг төлөвлөх зөвлөгөө өгнө.',
      bullets: [
        'Career path mapping',
        'Succession planning',
        'Удирдагчийн нөөц бэлтгэх'
      ],
      icon: Briefcase
    }
  ];

  const advantages = [
    { letter: 'A', title: 'Баталгаажсан мэдлэг', desc: 'Central Test өгөгдөл дээр суурилсан', icon: CheckCircle2 },
    { letter: 'B', title: 'Контекст ойлголт', desc: 'GraphRAG технологи', icon: Target },
    { letter: 'C', title: 'Шийдвэр хурдасгах', desc: 'Секундын дотор хариулт', icon: Zap },
    { letter: 'D', title: 'Skill-Mapping', desc: 'Математик таарах харьцаа', icon: TrendingUp },
    { letter: 'E', title: 'Цаг хэмнэх', desc: 'HR багийн ажлын цагийг 70% хэмнэнэ', icon: CheckCircle2 },
    { letter: 'F', title: '24/7 боломжтой', desc: 'Хаанаас ч асууж болно', icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">ҮЙЛЧИЛГЭЭ</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1A0F3E] mb-6 max-w-4xl">
            Сэтгэл зүйн дата таны HR-ын чимэг бус, цөм болно
          </h1>
          <p className="text-xl text-[#6B6485] mb-8 max-w-2xl leading-relaxed">
            UMC Talent AI нь Central Test-ийн баталгаажсан сэтгэл зүйн үнэлгээг GraphRAG технологиор тайлбарлаж,
            HR шийдвэр гаргалтыг хурдасгаж, үндэслэлтэй болгоно.
          </p>
          <a
            href="#chat"
            className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors"
          >
            Чат туршиж үзэх →
          </a>
        </div>
      </section>

      {/* SERVICE BLOCKS */}
      {services.map((service, idx) => (
        <section
          key={service.number}
          id={`service-${idx + 1}`}
          className={idx % 2 === 0 ? 'bg-white py-24' : 'bg-[#FAFAFC] py-24'}
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-6xl italic text-[#E63995] font-bold mb-4">{service.number}</div>
                <h2 className="text-4xl font-bold text-[#1A0F3E] mb-6">{service.title}</h2>
                <p className="text-lg text-[#6B6485] mb-8 leading-relaxed">{service.description}</p>

                <ul className="space-y-4 mb-8">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#E63995] flex-shrink-0 mt-1" />
                      <span className="text-[#1A0F3E]">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <a href="#learn-more" className="text-[#E63995] font-semibold hover:underline">
                  Дэлгэрэнгүй унших →
                </a>
              </div>

              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-[#E9E2FA] rounded-xl p-12 flex items-center justify-center aspect-square">
                  <service.icon className="w-48 h-48 text-[#5B3FBC] opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ADVANTAGES */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowText="ҮНДСЭН ДАВУУ ТАЛУУД"
            title="Яагаад UMC Talent AI-г сонгох вэ?"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ letter, title, desc, icon: Icon }) => (
              <div key={letter} className="bg-white border border-[#EBE7F4] rounded-xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl italic text-[#5B3FBC] font-bold">{letter}</div>
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-2">{title}</h3>
                <p className="text-[#6B6485] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
