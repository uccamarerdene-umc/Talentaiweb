import { SectionHeader } from '../components/brand/SectionHeader';
import { TestimonialCarousel } from '../components/brand/TestimonialCarousel';
import { CTABlock } from '../components/brand/CTABlock';
import { Lightbulb, Eye, Handshake } from 'lucide-react';

export function AboutPage() {
  const leadership = [
    { name: 'Д. Батболд', role: 'Гүйцэтгэх захирал', initial: 'Б' },
    { name: 'С. Оюунчимэг', role: 'AI технологийн ахлах зөвлөх', initial: 'О' },
    { name: 'Ж. Энхтуяа', role: 'HR стратегийн захирал', initial: 'Э' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Ухаалаг шийдвэр',
      description: 'Бид AI технологийг зөвхөн автоматжуулалт биш, хүний шийдвэрийг илүү ухаалаг болгох зорилгоор ашигладаг. Тоон үндэслэл, сэтгэл зүйн шинжлэх ухаан хослуулан үр дүнг хамтдаа бий болгоно.'
    },
    {
      icon: Eye,
      title: 'Ил тод харилцаа',
      description: 'Манай AI хэрхэн ажилладаг, ямар өгөгдөл ашигладаг, яагаад ийм зөвлөгөө өгч байгааг бид үргэлж тайлбарладаг. Хар хайрцаг AI биш, ойлгомжтой систем.'
    },
    {
      icon: Handshake,
      title: 'Жинхэнэ түнш',
      description: 'Бид зүгээр нэг борлуулагч биш. HR багуудын амжилт бидний амжилт. Үйлчлүүлэгчдээ сургаж, дэмжиж, хамтдаа өсдөг.'
    }
  ];

  const timeline = [
    { year: '2022', title: 'Компани байгуулагдсан', desc: 'UMC Монголд анхны HR зөвлөх үйлчилгээ эхлүүлсэн' },
    { year: '2023', title: 'Central Test түншлэл', desc: 'Монголын цорын ганц Central Test албан ёсны түнш' },
    { year: '2024', title: 'AI хөгжүүлэлт эхэлсэн', desc: 'GraphRAG технологи дээр суурилсан Talent AI прототип бүтээсэн' },
    { year: '2025', title: 'Talent AI албан ёсоор нээгдсэн', desc: '50+ байгууллагад үйлчилж эхэлсэн' },
    { year: '2026', title: 'Өнөөдөр', desc: 'Монголын тэргүүлэх AI HR зөвлөх платформ' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">БИДНИЙ ТУХАЙ</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1A0F3E] mb-6 max-w-4xl">
            United Consulting Management
          </h1>
          <p className="text-xl text-[#6B6485] max-w-3xl leading-relaxed">
            UMC нь Монголын тэргүүлэх HR зөвлөх компани бөгөөд AI технологиор дэмжлэгдсэн сэтгэл зүйн үнэлгээг
            орон нутгийн зах зээлд нэвтрүүлж байна.
          </p>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowText="УДИРДЛАГА"
            title="Манай удирдах баг"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <div key={leader.name} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-[#E9E2FA] flex items-center justify-center text-6xl font-bold text-[#5B3FBC] group-hover:bg-[#5B3FBC] group-hover:text-white transition-colors">
                  {leader.initial}
                </div>
                <h3 className="text-xl font-bold text-[#1A0F3E] mb-2">{leader.name}</h3>
                <p className="text-[#6B6485] mb-4">{leader.role}</p>
                <a href="#" className="text-[#E63995] hover:underline">
                  <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowText="ҮНЭТ ЗҮЙЛС"
            title="Бидний зарчмууд"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                  <value.icon className="w-10 h-10 text-[#E63995]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A0F3E] mb-4">{value.title}</h3>
                <p className="text-[#6B6485] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#2A1466] py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#5B3FBC] rounded-full opacity-30 blur-3xl" />

        <div className="relative max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#FFD6E8]">
                <span>★</span>
                <span className="font-semibold text-xs tracking-[0.15em] uppercase">ЭРХЭМ ЗОРИЛГО</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Хүний нөөцийн шийдвэр гаргалтыг ардчилах
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Бид AI технологийг ашиглан сэтгэл зүйн мэдлэгийг бүх HR мэргэжилтэн, удирдагчдад хүртээмжтэй болгож,
                шийдвэр гаргалтыг илүү шинжлэх ухаанд суурилсан, өрөөдөлгүй болгох зорилготой.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#2A1466] transition-colors"
              >
                Үйлчилгээ үзэх →
              </a>
            </div>

            <div className="bg-[#E9E2FA] rounded-xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center text-[#5B3FBC]">
                <div className="text-6xl font-bold mb-2">50+</div>
                <div className="text-lg">Байгууллагад үйлчилж байна</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrowText="ТҮҮХ"
            title="Бидний аялал"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#EBE7F4]" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-20">
                  <div className="absolute left-5 top-1 w-6 h-6 rounded-full bg-[#E63995] border-4 border-white" />
                  <div className="bg-[#FAFAFC] rounded-xl p-6">
                    <div className="text-2xl font-bold text-[#E63995] mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-[#1A0F3E] mb-2">{item.title}</h3>
                    <p className="text-[#6B6485]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
