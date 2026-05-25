import { useState } from 'react';
import { CTABlock } from '../components/brand/CTABlock';
import { Building2, Code, Factory, GraduationCap, TrendingUp } from 'lucide-react';

export function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('Идэвхтэй кейс');
  const [industryFilter, setIndustryFilter] = useState('Бүгд');

  const caseStudies = [
    {
      industry: 'Банк',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "Монголын томоохон банк",
      description: "Talent AI ашиглаж нэр дэвшигчдийн psychological profile-тай үндэслэн ажлын байранд таарах эсэхийг урьдчилан таамаглаж, сургалтын хөрөнгө оруулалтыг оновчтой болгосон.",
      metric: "85% илүү оновчтой хөлслөлт",
      icon: Building2
    },
    {
      industry: 'Дижитал',
      status: 'ДУУССАН КЕЙС',
      title: "Tech scale-up компани",
      description: "Багийн динамик шинжилгээгээр хамтын ажиллагааг сайжруулж, turnover 40%-иар бууруулсан.",
      metric: "40% бага turnover",
      icon: Code
    },
    {
      industry: 'Үйлдвэрлэл',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "Олон улсын үйлдвэрлэлийн компани",
      description: "Авьяасын менежментээр ажилчдын skill gap илрүүлж, зорилтот сургалт өгснөөр бүтээмж 30% нэмэгдсэн.",
      metric: "30% өссөн бүтээмж",
      icon: Factory
    },
    {
      industry: 'Боловсрол',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "Их сургууль",
      description: "Багш нарын хөгжлийн замнал төлөвлөхөд Talent AI-г ашиглаж, succession planning-ийг 6 сараар богиносгосон.",
      metric: "6 сар хэмнэсэн",
      icon: GraduationCap
    },
    {
      industry: 'Банк',
      status: 'ДУУССАН КЕЙС',
      title: "Зээлийн салбар",
      description: "Борлуулалтын багийн найрлагыг оновчлож, багийн бүтээмжийг 2 дахин нэмэгдүүлсэн.",
      metric: "2x багийн бүтээмж",
      icon: TrendingUp
    },
    {
      industry: 'Дижитал',
      status: 'ИДЭВХТЭЙ КЕЙС',
      title: "Startup компани",
      description: "Анхны 20 ажилчаа сонгон шалгаруулахад Talent AI-г ашиглаж, culture fit-ийг 95%-иар нэмэгдүүлсэн.",
      metric: "95% culture fit",
      icon: Code
    }
  ];

  const industries = ['Бүгд', 'Банк', 'Дижитал', 'Үйлдвэрлэл', 'Боловсрол'];

  const filteredCases = caseStudies.filter(
    (cs) =>
      (activeFilter === 'Идэвхтэй кейс' ? cs.status === 'ИДЭВХТЭЙ КЕЙС' : cs.status === 'ДУУССАН КЕЙС') &&
      (industryFilter === 'Бүгд' || cs.industry === industryFilter)
  );

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4 text-[#E63995]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">КЕЙС СУДАЛГАА</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-[#1A0F3E] mb-6 max-w-4xl">
            Бодит үр дүн гаргасан байгууллагууд
          </h1>
          <p className="text-xl text-[#6B6485] max-w-3xl leading-relaxed">
            UMC Talent AI хэрхэн ашиглаж hiring, retention, багийн бүтээмжийг сайжруулсан бодит кейсүүд.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="bg-[#FAFAFC] py-6 sticky top-20 z-40 border-b border-[#EBE7F4]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Status Tabs */}
            <div className="flex gap-2">
              {['Идэвхтэй кейс', 'Дууссан кейс'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                    activeFilter === tab
                      ? 'bg-[#E63995] text-white'
                      : 'bg-white text-[#6B6485] hover:bg-[#E9E2FA]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Industry Filter */}
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-4 py-2 rounded-full border border-[#EBE7F4] bg-white text-[#1A0F3E] font-medium"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* CASE GRID */}
      <section className="bg-[#FAFAFC] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBE7F4] rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD6E8] flex items-center justify-center">
                    <caseStudy.icon className="w-6 h-6 text-[#E63995]" />
                  </div>
                  <span className="bg-[#E9E2FA] text-[#5B3FBC] text-xs font-semibold px-3 py-1 rounded-full">
                    {caseStudy.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1A0F3E] mb-3 group-hover:text-[#E63995] transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-[#6B6485] text-sm mb-4 leading-relaxed">{caseStudy.description}</p>

                <div className="border-t border-[#EBE7F4] pt-4 mb-4">
                  <div className="text-2xl font-bold text-[#E63995]">{caseStudy.metric}</div>
                </div>

                <a href="#" className="text-[#E63995] font-semibold text-sm hover:underline">
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CASE */}
      <section className="bg-[#E9E2FA] py-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-8 text-[#5B3FBC]">
            <span>★</span>
            <span className="font-semibold text-xs tracking-[0.15em] uppercase">ОНЦГОЙ КЕЙС</span>
          </div>

          <div className="bg-white rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-12">
              <div className="w-32 h-12 bg-[#E9E2FA] rounded mb-6 flex items-center justify-center text-[#5B3FBC] font-bold">
                LOGO
              </div>

              <h2 className="text-3xl font-bold text-[#1A0F3E] mb-6">
                Монголын томоохон банкны дижитал хувьсгал
              </h2>

              <p className="text-[#6B6485] mb-6 leading-relaxed">
                2024 онд банк дижитал багаа өргөжүүлж, 50 шинэ ажилтан авахдаа Talent AI-г ашигласан.
                Уламжлалт CV шүүлт, 3 давтан интервьюгийн оронд, нэр дэвшигчдийн Big Five болон MBTI
                профайлыг AI тайлбарлаж, culture fit болон collaboration style-ийг урьдчилан үнэлсэн.
              </p>

              <p className="text-[#6B6485] mb-6 leading-relaxed">
                Үр дүн нь гайхалтай: хөлслөлтийн дараах 6 сард ганц л 1 ажилтан гарсан (retention 98%),
                багийн бүтээмж төлөвлөснөөс 40% давсан, сургалтын зардал 60%-иар буурсан.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E63995]">98%</div>
                  <div className="text-sm text-[#6B6485]">Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E63995]">40%</div>
                  <div className="text-sm text-[#6B6485]">Давсан бүтээмж</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#E63995]">60%</div>
                  <div className="text-sm text-[#6B6485]">Буурсан зардал</div>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#E63995] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2A1466] transition-colors"
              >
                Бүтэн кейс унших →
              </a>
            </div>

            <div className="lg:col-span-2 bg-[#2A1466] flex items-center justify-center p-12">
              <div className="text-center text-white">
                <div className="text-7xl font-bold mb-4">50</div>
                <div className="text-xl">Шинэ ажилтан</div>
                <div className="text-sm opacity-70 mt-2">6 сард хөлслөсөн</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
}
