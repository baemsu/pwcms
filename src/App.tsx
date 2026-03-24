import { 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Zap, 
  Users, 
  BarChart3, 
  Calendar, 
  FileText,
  Search,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Printer,
  Layout,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [viewMode, setViewMode] = useState<'web' | 'brochure' | 'detailed'>('web');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handlePrint = () => {
    window.print();
  };

  if (viewMode === 'detailed') {
    return (
      <div className="min-h-screen bg-[#f4f7fb] py-8 px-4 font-sans text-[#162033]">
        <div className="max-w-[1200px] mx-auto bg-white border border-[#e7edf5] rounded-[30px] shadow-2xl overflow-hidden">
          {/* Topbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-7 bg-white border-b border-[#e7edf5]">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="h-[54px] min-w-[164px] px-4 py-2 border border-[#e7edf5] rounded-2xl flex items-center gap-3 bg-gradient-to-b from-white to-[#fafcff]">
                <div className="flex items-center gap-1.5">
                  <svg width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0">
                    <rect x="0" y="40" width="30" height="20" fill="#f7931e" />
                    <rect x="35" y="20" width="30" height="20" fill="#e85d04" />
                    <rect x="70" y="0" width="30" height="20" fill="#d7263d" />
                  </svg>
                  <div className="text-2xl font-extrabold tracking-tighter text-[#162033]">pwc</div>
                </div>
              </div>
              <div className="h-[54px] min-w-[164px] px-4 py-2 border border-[#e7edf5] rounded-2xl flex items-center gap-3 bg-gradient-to-b from-white to-[#fafcff]">
                <div className="grid grid-cols-2 grid-rows-2 gap-0.5">
                  <span className="w-2.5 h-2.5 bg-[#f25022]"></span>
                  <span className="w-2.5 h-2.5 bg-[#7fba00]"></span>
                  <span className="w-2.5 h-2.5 bg-[#00a4ef]"></span>
                  <span className="w-2.5 h-2.5 bg-[#ffb900]"></span>
                </div>
                <div className="text-xl font-bold text-slate-600 tracking-tighter">Microsoft</div>
              </div>
            </div>
            <div className="flex items-center gap-4 print:hidden">
              <div className="text-xs text-slate-500 font-semibold">고객 설명용 브로셔 · 1 Page Overview</div>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-[#0f62fe] text-white rounded-lg text-xs font-bold hover:bg-[#0b4ec2] transition-all shadow-lg shadow-blue-100"
              >
                <Printer size={14} /> PDF 저장 / 인쇄
              </button>
              <button 
                onClick={() => setViewMode('web')}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-200 transition-all"
              >
                돌아가기
              </button>
            </div>
          </div>

          {/* Hero */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-[#0b1324] via-[#12244b] to-[#153e91] text-white print:bg-none print:bg-slate-900">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-extrabold tracking-widest uppercase mb-4">
                  AI Envisioning + Deployment
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.15] mb-4 tracking-tight">
                  AI 과제를 찾고,<br />직접 적용해 보고,<br />ROI까지 확인하는 가장 빠른 방법
                </h1>
                <p className="text-lg leading-relaxed text-white/90">
                  Microsoft Copilot, Copilot Studio, Power Platform 기반으로 귀사에 맞는 AI 전환 과제를 도출하고, Pilot 적용과 사용자 정착, ROI 보고서까지 하나의 흐름으로 제공합니다.
                </p>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-md print:bg-slate-800 print:border-slate-700">
                <h3 className="text-lg font-bold mb-4">이 브로셔에서 바로 이해할 수 있는 것</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 min-h-[92px] print:bg-slate-700">
                    <strong className="block text-2xl mb-1.5">무엇을</strong>
                    <span className="text-sm leading-relaxed text-white/90">우리 회사에 맞는 AI 과제를 정의합니다</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 min-h-[92px]">
                    <strong className="block text-2xl mb-1.5">어떻게</strong>
                    <span className="text-sm leading-relaxed text-white/90">Envisioning → Deployment로 단계적으로 실행합니다</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 min-h-[92px]">
                    <strong className="block text-2xl mb-1.5">결과는</strong>
                    <span className="text-sm leading-relaxed text-white/90">Pilot, 교육, 정착, ROI 보고서로 이어집니다</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 min-h-[92px]">
                    <strong className="block text-2xl mb-1.5">왜 지금</strong>
                    <span className="text-sm leading-relaxed text-white/90">작게 시작해도 실제 성과를 빠르게 확인할 수 있습니다</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Questions */}
          <div className="p-8 md:p-12 border-b border-[#e7edf5]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              고객이 가장 먼저 겪는 3가지 질문
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-[#e7edf5] rounded-3xl p-6 shadow-sm">
                <span className="inline-block mb-3 px-2.5 py-1.5 rounded-full bg-[#eef5ff] text-[#0f62fe] text-xs font-extrabold">Question 1</span>
                <h3 className="text-lg font-bold mb-2.5 tracking-tight">무엇부터 시작해야 하나요?</h3>
                <p className="text-sm text-slate-500 leading-relaxed">아이디어는 많지만 어떤 AI 과제가 실제 적용 가치가 높은지 판단하기 어렵습니다.</p>
              </div>
              <div className="bg-white border border-[#e7edf5] rounded-3xl p-6 shadow-sm">
                <span className="inline-block mb-3 px-2.5 py-1.5 rounded-full bg-[#eef5ff] text-[#0f62fe] text-xs font-extrabold">Question 2</span>
                <h3 className="text-lg font-bold mb-2.5 tracking-tight">우리 회사에도 실제로 되나요?</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Copilot이나 Agent가 우리 업무와 연결되는지, 보안과 운영은 가능한지 궁금합니다.</p>
              </div>
              <div className="bg-white border border-[#e7edf5] rounded-3xl p-6 shadow-sm">
                <span className="inline-block mb-3 px-2.5 py-1.5 rounded-full bg-[#eef5ff] text-[#0f62fe] text-xs font-extrabold">Question 3</span>
                <h3 className="text-lg font-bold mb-2.5 tracking-tight">성과는 어떻게 증명하나요?</h3>
                <p className="text-sm text-slate-500 leading-relaxed">경영진 보고와 다음 단계 확산을 위해 ROI와 사용량 기반 근거가 필요합니다.</p>
              </div>
            </div>
          </div>

          {/* Section 2: Flow */}
          <div className="p-8 md:p-12 border-b border-[#e7edf5]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              한눈에 이해되는 전체 구조
            </h2>
            <div className="bg-gradient-to-b from-[#fbfdff] to-white border border-[#e7edf5] rounded-3xl p-6 print:bg-none">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="flex-1 w-full bg-gradient-to-b from-[#eef5ff] to-white border border-[#e7edf5] rounded-3xl p-6 min-h-[170px] shadow-sm print:bg-white">
                  <div className="inline-block px-2.5 py-1.5 rounded-full bg-[#dbeafe] text-[#1d4ed8] text-xs font-extrabold mb-3 uppercase">STEP 1 · ENVISIONING</div>
                  <h3 className="text-xl font-bold mb-2">무엇을 할지 정합니다</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>현황 진단</li>
                    <li>경영진 세미나 / 인터뷰</li>
                    <li>1일 워크숍</li>
                    <li>우선 과제 도출</li>
                    <li>PoC Agent 구축 (1개 이상)</li>
                  </ul>
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-indigo-100 print:bg-blue-600 print:shadow-none">→</div>
                <div className="flex-1 w-full bg-gradient-to-b from-[#f5f0ff] to-white border border-[#e7edf5] rounded-3xl p-6 min-h-[170px] shadow-sm print:bg-white">
                  <div className="inline-block px-2.5 py-1.5 rounded-full bg-[#ede9fe] text-[#6d28d9] text-xs font-extrabold mb-3 uppercase">STEP 2 · DEPLOYMENT</div>
                  <h3 className="text-xl font-bold mb-2">실제로 적용합니다</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>Pilot 계획/배포</li>
                    <li>테넌트/보안/거버넌스 정비</li>
                    <li>교육 및 챔피온 육성</li>
                    <li>Pilot과제 도출</li>
                    <li>Agent/Flow 구축</li>
                  </ul>
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] flex items-center justify-center text-white text-2xl font-extrabold shadow-lg shadow-indigo-100 print:bg-blue-600 print:shadow-none">→</div>
                <div className="flex-1 w-full bg-gradient-to-b from-[#ecfeff] to-white border border-[#e7edf5] rounded-3xl p-6 min-h-[170px] shadow-sm print:bg-white">
                  <div className="inline-block px-2.5 py-1.5 rounded-full bg-[#ccfbf1] text-[#0f766e] text-xs font-extrabold mb-3 uppercase">STEP 3 · BUSINESS VALUE</div>
                  <h3 className="text-xl font-bold mb-2">성과를 확인합니다</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    <li>사용량 점검</li>
                    <li>업무 효과 검토</li>
                    <li>ROI 보고서 제공</li>
                    <li>확산 로드맵 제안</li>
                    <li>다음 투자 판단 지원</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Values */}
          <div className="p-8 md:p-12 border-b border-[#e7edf5]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              고객이 얻게 되는 핵심 가치
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { id: 1, title: "AI 과제 도출", desc: "인터뷰와 워크숍으로 실제 시작 가능한 우선 과제를 정리합니다." },
                { id: 2, title: "구현 방안 구체화", desc: "Microsoft 기술 스택으로 어떤 구조로 만들지 구체화합니다." },
                { id: 3, title: "직접 적용과 교육", desc: "Pilot 적용과 사용자 교육으로 실제 사용이 이어지게 합니다." },
                { id: 4, title: "ROI와 확산 근거", desc: "성과를 정리해 다음 단계 투자와 확산 판단을 지원합니다." }
              ].map((item) => (
                <div key={item.id} className="bg-white border border-[#e7edf5] rounded-3xl p-5 shadow-sm print:shadow-none">
                  <span className="inline-block mb-3 px-2.5 py-1.5 rounded-full bg-[#eef5ff] text-[#0f62fe] text-xs font-extrabold">{item.id}</span>
                  <h4 className="text-lg font-bold mb-2.5 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Table */}
          <div className="p-8 md:p-12 border-b border-[#e7edf5]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              무엇을 해주나를 쉽게 보는 표
            </h2>
            <div className="overflow-hidden border border-[#e7edf5] rounded-3xl bg-white shadow-sm">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f8fbff] text-slate-600 text-xs uppercase font-bold">
                    <th className="p-4 text-left border-b border-[#e7edf5] w-[18%]">구분</th>
                    <th className="p-4 text-left border-b border-[#e7edf5] bg-[#f9fcff] w-[41%]">Envisioning</th>
                    <th className="p-4 text-left border-b border-[#e7edf5] bg-[#fcfaff] w-[41%]">Deployment</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700">
                  <tr>
                    <td className="p-4 border-b border-[#e7edf5] font-bold">목적</td>
                    <td className="p-4 border-b border-[#e7edf5] bg-[#f9fcff]">우리 회사에 맞는 AI 과제를 찾고, 무엇부터 시작할지 정함</td>
                    <td className="p-4 border-b border-[#e7edf5] bg-[#fcfaff]">선정된 과제를 실제로 적용하고, 사용자 정착과 성과 검증까지 수행</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#e7edf5] font-bold">주요 활동</td>
                    <td className="p-4 border-b border-[#e7edf5] bg-[#f9fcff]">사전 인터뷰, 경영진 세미나, 1일 워크숍, 우선 과제 도출, PoC Agent 구축</td>
                    <td className="p-4 border-b border-[#e7edf5] bg-[#fcfaff]">Pilot 배포, 테넌트/보안/거버넌스 정비, 교육 및 챔피온 육성, Agent/Flow 구축, ROI 보고</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-[#e7edf5] font-bold">고객이 얻는 것</td>
                    <td className="p-4 border-b border-[#e7edf5] bg-[#f9fcff]">AI 과제 목록, 우선순위, KPI/ROI 가설, PoC 범위 정의</td>
                    <td className="p-4 border-b border-[#e7edf5] bg-[#fcfaff]">실제 적용 결과, 교육 체계, 운영 가이드, ROI 보고서, 확산 로드맵</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">종료 시점</td>
                    <td className="p-4 bg-[#f9fcff]">“무엇을 먼저 검증할지”가 경영진 수준에서 명확해진 상태</td>
                    <td className="p-4 bg-[#fcfaff]">“실제로 효과가 있었는지”를 수치와 사례로 설명할 수 있는 상태</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Deliverables */}
          <div className="p-8 md:p-12 border-b border-[#e7edf5]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              주요 산출물
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#e7edf5] rounded-3xl overflow-hidden shadow-sm">
                <div className="p-4 bg-[#eef5ff] text-[#1d4ed8] font-extrabold text-lg border-b border-[#e7edf5]">Envisioning 종료 후</div>
                <div className="p-6 space-y-4">
                  <div className="pb-4 border-b border-dashed border-[#e7edf5]">
                    <strong className="block text-base mb-1">AI 과제 목록 및 우선순위표</strong>
                    <span className="text-sm text-slate-500">어떤 과제를 먼저 적용할지 경영진과 합의할 수 있습니다.</span>
                  </div>
                  <div className="pb-4 border-b border-dashed border-[#e7edf5]">
                    <strong className="block text-base mb-1">현황 및 준비도 진단 결과</strong>
                    <span className="text-sm text-slate-500">보안, 운영, 데이터, 업무 관점의 시작 수준을 정리합니다.</span>
                  </div>
                  <div className="pb-4 border-b border-dashed border-[#e7edf5]">
                    <strong className="block text-base mb-1">PoC Agent 결과물 (1개 이상)</strong>
                    <span className="text-sm text-slate-500">우리가 직접 구축한 Agent를 통해 실제 작동 여부를 즉시 확인합니다.</span>
                  </div>
                  <div>
                    <strong className="block text-base mb-1">PoC 보고서 및 Deployment 제안</strong>
                    <span className="text-sm text-slate-500">무엇을 어떻게 시범 적용할지 명확한 방향을 제시합니다.</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#e7edf5] rounded-3xl overflow-hidden shadow-sm">
                <div className="p-4 bg-[#f4efff] text-[#6d28d9] font-extrabold text-lg border-b border-[#e7edf5]">Deployment 종료 후</div>
                <div className="p-6 space-y-4">
                  <div className="pb-4 border-b border-dashed border-[#e7edf5]">
                    <strong className="block text-base mb-1">Pilot 결과 및 Agent/Flow 설계서</strong>
                    <span className="text-sm text-slate-500">적용 범위와 운영 구조를 문서화해 후속 확산 기반을 만듭니다.</span>
                  </div>
                  <div className="pb-4 border-b border-dashed border-[#e7edf5]">
                    <strong className="block text-base mb-1">교육자료 및 챔피온 가이드</strong>
                    <span className="text-sm text-slate-500">사용자 교육, FAQ, 활용 확산 자료까지 포함해 안착을 돕습니다.</span>
                  </div>
                  <div>
                    <strong className="block text-base mb-1">ROI 보고서 및 확산 로드맵</strong>
                    <span className="text-sm text-slate-500">사용량 및 LPI 모니터링을 통한 성과 검증과 향후 확대 방향을 제시합니다.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Schedule */}
          <div className="p-8 md:p-12 border-b border-[#e7edf5]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              예시 일정
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative pt-12 p-6 bg-gradient-to-b from-white to-[#fbfcff] border border-[#e7edf5] rounded-3xl shadow-sm print:bg-white print:shadow-none">
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-extrabold">1~2주차</div>
                <h4 className="text-lg font-bold mb-2">진단 및 워크숍</h4>
                <p className="text-sm text-slate-500 leading-relaxed">현황 파악, 대상 부서 선정, 주요 과제 후보 수집</p>
              </div>
              <div className="relative pt-12 p-6 bg-gradient-to-b from-white to-[#fbfcff] border border-[#e7edf5] rounded-3xl shadow-sm print:bg-white print:shadow-none">
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-extrabold">3주차</div>
                <h4 className="text-lg font-bold mb-2">PoC Agent 구축</h4>
                <p className="text-sm text-slate-500 leading-relaxed">우선순위 확정 및 1개 이상의 PoC Agent 직접 구축</p>
              </div>
              <div className="relative pt-12 p-6 bg-gradient-to-b from-white to-[#fbfcff] border border-[#e7edf5] rounded-3xl shadow-sm print:bg-white print:shadow-none">
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1.5 rounded-lg bg-[#D04A02] text-white text-xs font-extrabold">4~7주차</div>
                <h4 className="text-lg font-bold mb-2">Pilot 및 교육</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Pilot 배포, 거버넌스 정비, 사용자 교육 및 챔피언 육성</p>
              </div>
              <div className="relative pt-12 p-6 bg-gradient-to-b from-white to-[#fbfcff] border border-[#e7edf5] rounded-3xl shadow-sm print:bg-white print:shadow-none">
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1.5 rounded-lg bg-[#D04A02] text-white text-xs font-extrabold">8주차</div>
                <h4 className="text-lg font-bold mb-2">ROI 및 로드맵</h4>
                <p className="text-sm text-slate-500 leading-relaxed">사용량 분석, 성과 검증, ROI 보고서 및 확산 로드맵 제공</p>
              </div>
            </div>
          </div>

          {/* Section 7: Impact */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0f62fe] to-[#7c3aed] shadow-[0_0_0_8px_rgba(15,98,254,0.08)]"></span>
              브로셔에서 강조해야 할 한 문장
            </h2>
            <div className="grid lg:grid-cols-2 gap-5 items-stretch">
              <div className="border border-[#e7edf5] rounded-3xl p-6 bg-gradient-to-b from-white to-[#fbfcff] print:bg-white">
                <div className="text-2xl font-extrabold leading-[1.4] tracking-tight mb-3">“AI를 설명하는 서비스가 아니라, 실제로 시작하게 만드는 서비스입니다.”</div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  고객은 기술 설명보다 “우리 회사에서 무엇을 할 수 있는가”를 알고 싶어합니다. 이 브로셔는 그 질문에 가장 짧고 강하게 답하도록 설계했습니다.
                </p>
              </div>
              <div className="border border-[#e7edf5] rounded-3xl p-6 bg-gradient-to-b from-white to-[#fbfcff] print:bg-white">
                <h3 className="text-xl font-bold mb-3">추천 핵심 메시지 3개</h3>
                <p className="text-sm text-slate-500 leading-relaxed space-y-1">
                  • AI 과제를 도출해 드립니다<br />
                  • 직접 적용할 수 있게 도와드립니다<br />
                  • ROI까지 보고드립니다
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-8 mb-8 p-8 rounded-[28px] bg-gradient-to-br from-[#0b1324] via-[#1e3a8a] to-[#4f46e5] text-white grid lg:grid-cols-[1.1fr_.9fr] gap-6 items-center print:bg-none print:bg-slate-900 print:text-white">
            <div>
              <h3 className="text-3xl font-bold mb-2.5 tracking-tight">어디서부터 시작할지 정하지 못하셨다면</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                먼저 Envisioning으로 귀사에 맞는 AI 과제를 발굴하고, 가장 효과적인 과제를 Deployment로 연결해 보십시오. “무엇을 할 것인가”와 “어떻게 정착시킬 것인가”를 한 번에 제안드립니다.
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-5 space-y-2 print:bg-slate-800">
              <div className="text-sm">• 경영진 대상 AI 세미나</div>
              <div className="text-sm">• 1일 워크숍 기반 우선 과제 도출</div>
              <div className="text-sm">• PoC 과제 선정 및 제안</div>
              <div className="text-sm">• Pilot 적용, 교육, ROI 보고까지 연계</div>
            </div>
          </div>

          <div className="px-8 pb-6 text-xs text-slate-400">
            본 시안은 단순하고 눈에 잘 들어오는 1페이지 브로셔 레이아웃으로 재구성한 상세 소개서입니다.
          </div>
        </div>
      </div>
    );
  }

  if (viewMode === 'brochure') {
    return (
      <div className="min-h-screen bg-slate-100 py-12 px-4 print:bg-white print:p-0">
        {/* View Controls (Hidden in Print) */}
        <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setViewMode('web')}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 transition-all"
            >
              <Layout size={16} /> 웹 페이지로 보기
            </button>
            <div className="text-sm text-slate-500 font-medium">
              인쇄용 브로셔 모드 (A4 최적화)
            </div>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-2 bg-[#D04A02] text-white rounded-lg text-sm font-bold hover:bg-[#b03e02] shadow-lg shadow-orange-200 transition-all"
          >
            <Printer size={16} /> PDF로 저장 / 인쇄하기
          </button>
        </div>

        {/* Brochure Layout (A4 Style) */}
        <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none min-h-[297mm] p-[20mm] relative overflow-hidden">
          {/* PwC & MS Logos */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 100 100">
                <rect x="0" y="40" width="30" height="20" fill="#f7931e" />
                <rect x="35" y="20" width="30" height="20" fill="#e85d04" />
                <rect x="70" y="0" width="30" height="20" fill="#d7263d" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-[#162033]">pwc <span className="font-light text-slate-500">Consulting</span></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              <span className="font-semibold text-slate-700">Microsoft</span>
            </div>
          </div>

          {/* Title Section */}
          <div className="mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-widest mb-4">
              AI Transformation Program
            </div>
            <h1 className="text-4xl font-bold leading-tight mb-6 text-slate-900">
              Microsoft 기반 AI 전환,<br />
              <span className="text-[#D04A02]">아이디어 발굴부터 ROI 검증까지</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Copilot, Copilot Studio, Power Platform 기반으로 귀사에 맞는 AI 과제를 발굴하고, 직접 적용해 보고, 실제 사용과 성과까지 연결합니다.
            </p>
          </div>

          {/* Section A: Problem Statement */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <div className="col-span-1 border-l-4 border-orange-500 pl-6 py-2">
              <h2 className="text-lg font-bold text-slate-900 mb-2">왜 필요한가</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                AI 도입의 핵심은 기술이 아니라, 무엇을 먼저 적용하고 어떻게 성과를 낼지 정하는 것입니다.
              </p>
            </div>
            <div className="col-span-2 bg-slate-50 p-6 rounded-2xl">
              <p className="text-sm text-slate-700 leading-relaxed">
                많은 기업이 AI의 필요성은 공감하지만, 어떤 과제를 우선 적용해야 하는지, 보안과 운영은 준비되어 있는지, 실제로 성과가 나는지 판단하기 어렵습니다. 저희는 인터뷰와 워크숍을 통해 우선 과제를 정의하고, 실행 가능한 Microsoft 기반 AI 전환 방안을 제시합니다.
              </p>
            </div>
          </div>

          {/* Section B: Values */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-600"></div>
              고객이 얻게 되는 4가지 핵심 가치
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "우리 회사에 맞는 AI 과제 도출", desc: "인터뷰와 워크숍을 통해 실행 가능한 AI 과제를 발굴합니다." },
                { title: "Microsoft 기반 실현 방안 구체화", desc: "Copilot, Copilot Studio, Power Platform 기반 설계." },
                { title: "직접 적용과 사용자 내재화", desc: "실제 사용자 교육, 배포, 변화관리까지 연결합니다." },
                { title: "ROI와 확산 방향 제시", desc: "사용량·효과·확산 로드맵까지 명확히 정리합니다." }
              ].map((item, i) => (
                <div key={i} className="p-5 border border-slate-100 bg-slate-50/50 rounded-xl">
                  <h4 className="font-bold text-sm mb-2 text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Program Structure */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-600"></div>
              2단계 AI 전환 프로그램 구성
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-900 p-4 text-white text-center font-bold text-sm">Phase 01. Envisioning</div>
                <div className="p-5 space-y-2">
                  {[
                    "현황 및 준비도 진단", "인터뷰 기반 과제 발굴", "우선순위 및 PoC 과제 확정", 
                    "PoC Agent 구축 (1개 이상)", "KPI/ROI 가설 수립", "경영진 보고서 제공"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 size={12} className="text-orange-600" /> {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-[#D04A02] p-4 text-white text-center font-bold text-sm">Phase 02. Deployment</div>
                <div className="p-5 space-y-2">
                  {[
                    "Pilot 계획 및 배포", "테넌트/보안/거버넌스 정비", "교육 및 챔피언 육성", 
                    "Pilot 과제 도출", "Agent/Flow 구축", "ROI 보고서 제공"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 size={12} className="text-orange-600" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="absolute bottom-[20mm] left-[20mm] right-[20mm] pt-8 border-t border-slate-100 flex justify-between items-end">
            <div>
              <p className="text-[10px] text-slate-400 font-medium mb-1">Contact for Inquiry</p>
              <p className="text-sm font-bold text-slate-800">PwC Consulting x Microsoft AI Transformation Team</p>
            </div>
            <div className="text-[10px] text-slate-300">© 2026 PwC & Microsoft</div>
          </div>
        </div>

        {/* Page 2 (Deliverables & Schedule) */}
        <div className="max-w-[210mm] mx-auto bg-white shadow-2xl print:shadow-none min-h-[297mm] p-[20mm] mt-12 print:mt-0 relative overflow-hidden">
           {/* PwC & MS Logos (Small) */}
           <div className="flex justify-between items-center mb-12 opacity-50">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 100 100">
                <rect x="0" y="40" width="30" height="20" fill="#f7931e" />
                <rect x="35" y="20" width="30" height="20" fill="#e85d04" />
                <rect x="70" y="0" width="30" height="20" fill="#d7263d" />
              </svg>
              <span className="font-bold text-sm tracking-tight text-[#162033]">pwc Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z"/><path fill="#81bc06" d="M12 1h10v10H12z"/><path fill="#05a6f0" d="M1 12h10v10H1z"/><path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              <span className="font-semibold text-xs text-slate-700">Microsoft</span>
            </div>
          </div>

          {/* Section D: Deliverables */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-600"></div>
              주요 산출물 (Deliverables)
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FileText size={16} className="text-orange-600" /> Envisioning
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "AI 과제 목록 및 우선순위표", "준비도 진단 결과 보고서", 
                    "PoC Agent 결과물 (1개 이상)", "KPI/ROI 가설 프레임워크", "경영진 보고자료"
                  ].map((item, i) => (
                    <div key={i} className="text-[11px] p-3 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <BarChart3 size={16} className="text-orange-600" /> Deployment
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Pilot 계획서 및 운영 가이드", "Agent/Flow 기술 설계서", 
                    "사용자 교육 및 챔피언 가이드", "사용량 리포트 및 ROI 보고서", "확산 로드맵"
                  ].map((item, i) => (
                    <div key={i} className="text-[11px] p-3 bg-slate-50 rounded-lg text-slate-600 border border-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section E: Schedule */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-orange-600"></div>
              표준 수행 일정 (8주 기준)
            </h3>
            <div className="relative pt-4">
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100"></div>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { week: "1~2주", title: "진단 및 워크숍", desc: "현황 분석 및 과제 도출" },
                  { week: "3주", title: "PoC Agent 구축", desc: "우선순위 및 PoC 과제 확정" },
                  { week: "4~7주", title: "Pilot 구축/교육", desc: "실제 적용 및 내재화" },
                  { week: "8주", title: "ROI 및 확산 제안", desc: "성과 검증 및 로드맵" }
                ].map((item, i) => (
                  <div key={i} className="relative pt-6">
                    <div className="absolute top-[-4px] left-0 w-3 h-3 rounded-full bg-orange-600"></div>
                    <div className="text-[10px] font-bold text-orange-600 mb-1">{item.week}</div>
                    <div className="text-sm font-bold text-slate-900 mb-1">{item.title}</div>
                    <div className="text-[10px] text-slate-500 leading-tight">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section G: Summary */}
          <div className="p-8 bg-slate-900 rounded-3xl text-white">
            <h4 className="text-lg font-bold mb-4">프로그램의 차별점</h4>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              단순한 AI 기술 도입을 넘어, 비즈니스 가치를 창출하는 과제를 발굴하고 현업 사용자가 실제로 활용할 수 있도록 정착시키는 전 과정을 지원합니다.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-orange-400 font-bold text-xl mb-1">01</div>
                <div className="text-[10px] font-medium">과제 도출</div>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold text-xl mb-1">02</div>
                <div className="text-[10px] font-medium">직접 적용</div>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold text-xl mb-1">03</div>
                <div className="text-[10px] font-medium">ROI 검증</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[20mm] left-[20mm] right-[20mm] pt-8 border-t border-slate-100 flex justify-center">
             <button className="flex items-center gap-2 px-8 py-3 bg-[#D04A02] text-white rounded-xl text-sm font-bold print:hidden">
               지금 바로 상담 신청하기 <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-100">
      {/* Header / Logos */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* PwC Logo Placeholder */}
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 100 100">
                <rect x="0" y="40" width="30" height="20" fill="#f7931e" />
                <rect x="35" y="20" width="30" height="20" fill="#e85d04" />
                <rect x="70" y="0" width="30" height="20" fill="#d7263d" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-[#162033]">pwc <span className="font-light text-slate-500">Consulting</span></span>
            </div>
            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            {/* Microsoft Logo Placeholder */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                <path fill="#f35325" d="M1 1h10v10H1z"/>
                <path fill="#81bc06" d="M12 1h10v10H12z"/>
                <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                <path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              <span className="font-semibold text-slate-700">Microsoft</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setViewMode('brochure')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all"
            >
              <Printer size={16} /> 인쇄용 브로셔 보기
            </button>
            <button className="hidden md:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              상담 신청하기
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                AI Transformation Program
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
                Microsoft 기반 AI 전환,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D04A02] to-orange-500">
                  아이디어 발굴부터 ROI 검증까지
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Copilot, Copilot Studio, Power Platform 기반으로 귀사에 맞는 AI 과제를 발굴하고, 직접 적용해 보고, 실제 사용과 성과까지 연결합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#D04A02] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b03e02] transition-all shadow-lg shadow-orange-200 flex items-center gap-2">
                  프로그램 문의하기 <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('detailed')}
                  className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
                >
                  상세 소개서 보기
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="300" cy="100" r="150" fill="url(#grad1)" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D04A02" />
                  <stop offset="100%" stopColor="#ffba08" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* Section A: Problem Statement */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                AI, 도입보다 더 어려운 것은<br />
                <span className="text-orange-400">“무엇부터 시작할지”</span> 정하는 일입니다
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  많은 기업이 AI의 필요성은 공감하지만, 어떤 과제를 우선 적용해야 하는지, 보안과 운영은 준비되어 있는지, 실제로 성과가 나는지 판단하기 어렵습니다.
                </p>
                <p className="text-white font-medium">
                  저희는 Microsoft 기반 AI 전환을 위해 과제 도출부터 시범 적용, 현업 정착, ROI 검증까지 하나의 흐름으로 지원합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section B: Core Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">고객이 얻게 되는 4가지 핵심 가치</h2>
              <div className="w-20 h-1.5 bg-[#D04A02] mx-auto"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Target className="text-orange-600" size={32} />,
                  title: "우리 회사에 맞는 AI 과제 도출",
                  desc: "인터뷰와 워크숍을 통해 실행 가능한 AI 과제를 발굴합니다."
                },
                {
                  icon: <Zap className="text-orange-600" size={32} />,
                  title: "Microsoft 기반 실현 방안 구체화",
                  desc: "Copilot, Copilot Studio, Power Platform 기반으로 최적의 구현 방식을 설계합니다."
                },
                {
                  icon: <Users className="text-orange-600" size={32} />,
                  title: "직접 적용과 사용자 내재화",
                  desc: "PoC와 Deployment를 통해 실제 사용자 교육, 배포, 변화관리까지 연결합니다."
                },
                {
                  icon: <TrendingUp className="text-orange-600" size={32} />,
                  title: "ROI와 확산 방향 제시",
                  desc: "단순 시범사업을 넘어 사용량·효과·확산 로드맵까지 명확히 정리합니다."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                >
                  <div className="mb-6 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-snug">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: Service Composition */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">2단계로 진행되는 AI 전환 프로그램</h2>
              <p className="text-slate-600">사전 기획부터 실제 정착과 성과 입증까지 체계적으로 지원합니다.</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Envisioning */}
              <motion.div {...fadeIn} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-orange-600 rounded text-xs font-bold uppercase">Phase 01</span>
                    <Search size={24} className="text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Envisioning</h3>
                  <p className="text-slate-400">AI 전환 방향 수립 및 우선 과제 선정</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      "현황 및 준비도 진단",
                      "인터뷰 및 워크숍 기반 과제 발굴",
                      "우선순위 및 PoC 과제 확정",
                      "PoC Agent 구축 (1개 이상)",
                      "KPI/ROI 가설 수립",
                      "경영진 보고서 제공"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Deployment */}
              <motion.div {...fadeIn} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-[#D04A02] p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-900/30 rounded text-xs font-bold uppercase">Phase 02</span>
                    <Rocket size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Deployment</h3>
                  <p className="text-orange-100">선정 과제의 실제 적용, 교육, 정착, 성과 검증</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      "Pilot 계획 및 배포",
                      "테넌트/보안/거버넌스 정비",
                      "교육 및 챔피언 육성",
                      "Pilot 과제 도출",
                      "Agent/Flow 구축",
                      "활용 확산 및 변화관리",
                      "사용량 및 LPI 모니터링",
                      "ROI 보고서 및 확산 로드맵 제공"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section D: Deliverables */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">프로그램 종료 후 제공되는 주요 산출물</h2>
              <p className="text-slate-600">실질적인 비즈니스 가치를 증명하는 전문적인 리포트를 제공합니다.</p>
            </motion.div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-bold mb-6 text-slate-900">
                    <FileText className="text-orange-600" /> Envisioning 산출물
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI 과제 목록", "우선순위표", "준비도 진단 결과", 
                      "PoC Agent 결과물", "KPI/ROI 가설", "경영진 보고자료"
                    ].map((tag, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-xl font-bold mb-6 text-slate-900">
                    <BarChart3 className="text-orange-600" /> Deployment 산출물
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pilot 계획서", "보안·거버넌스 가이드", "Agent/Flow 설계서", 
                      "교육 및 챔피언 가이드", "사용량 및 LPI 리포트", "ROI 보고서", "확산 로드맵"
                    ].map((tag, i) => (
                      <span key={i} className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section E & F: Process & Schedule */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeIn}>
                <h2 className="text-3xl font-bold mb-2">이렇게 진행됩니다</h2>
                <p className="text-slate-400 text-sm mb-8">* 주차는 규모 및 복잡도에 따라 변동 가능</p>
                
                <div className="space-y-10">
                  {/* Envisioning Group */}
                  <div className="relative pl-10 before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-0.5 before:bg-orange-600/30">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-orange-600 border-4 border-slate-900 z-10"></div>
                    <div className="mb-4">
                      <span className="text-orange-400 font-bold text-sm uppercase tracking-wider">Phase 01. Envisioning</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: "사전 인터뷰 및 현황 진단", desc: "1주차" },
                        { title: "1일 워크숍을 통한 AI 과제 도출", desc: "2주차" },
                        { title: "우선순위 및 PoC 과제 확정", desc: "3주차" },
                        { title: "PoC Agent 구축 (1개 이상)", desc: "3주차" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center gap-4">
                          <h4 className="font-medium text-slate-200">{item.title}</h4>
                          <span className="text-slate-500 font-mono text-xs whitespace-nowrap">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deployment Group */}
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-700 border-4 border-slate-900 z-10"></div>
                    <div className="mb-4">
                      <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">Phase 02. Deployment</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { title: "Pilot 계획 및 배포", desc: "4주차" },
                        { title: "테넌트/보안/거버넌스 정비", desc: "4주차" },
                        { title: "교육 및 챔피언 육성", desc: "5주차" },
                        { title: "Pilot 과제 도출 및 Agent/Flow 구축", desc: "6~7주차" },
                        { title: "활용 확산 및 변화관리", desc: "7주차" },
                        { title: "사용량 및 LPI 모니터링", desc: "8주차" },
                        { title: "ROI 보고서 및 확산 로드맵", desc: "8주차" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center gap-4">
                          <h4 className="font-medium text-slate-400">{item.title}</h4>
                          <span className="text-slate-600 font-mono text-xs whitespace-nowrap">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700"
              >
                <div className="flex items-center gap-3 mb-8">
                  <Calendar className="text-orange-500" />
                  <h3 className="text-2xl font-bold">예시 일정 요약</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <span className="text-slate-400">1~2주차</span>
                    <span className="font-bold">진단 및 워크숍</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <span className="text-slate-400">3주차</span>
                    <span className="font-bold">PoC 과제 정의</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                    <span className="text-slate-400">4~7주차</span>
                    <span className="font-bold">Pilot 구축 및 교육</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-600/20 rounded-xl border border-orange-600/30">
                    <span className="text-orange-300">8주차</span>
                    <span className="font-bold text-orange-100">ROI 정리 및 확산 제안</span>
                  </div>
                </div>
                <p className="mt-8 text-sm text-slate-500 italic">
                  * 고객사의 규모 및 과제 복잡도에 따라 일정은 조정될 수 있습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section G: Strengths */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-[3rem] p-12 md:p-20 border border-orange-100 relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  왜 이 프로그램이 필요한가
                </h2>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                  단순한 AI 설명회가 아닙니다. 귀사에 맞는 과제를 찾고, 직접 적용해 보고, 실제 사용과 효과까지 검증하는 <span className="text-[#D04A02] font-bold underline underline-offset-4">실전형 프로그램</span>입니다.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: <Search size={20} />, text: "AI 과제를 도출해 드립니다" },
                    { icon: <Zap size={20} />, text: "직접 적용할 수 있게 도와드립니다" },
                    { icon: <TrendingUp size={20} />, text: "ROI까지 보고드립니다" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-3 p-6 bg-white rounded-2xl shadow-sm border border-orange-100">
                      <div className="text-orange-600">{item.icon}</div>
                      <span className="font-bold text-slate-800">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative background icon */}
              <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
                <ShieldCheck size={400} />
              </div>
            </div>
          </div>
        </section>

        {/* Section H: CTA */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">다음 단계로 바로 연결해 보십시오</h2>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                귀사의 AI 전환 과제를 함께 정의하고, 가장 빠르게 성과를 확인할 수 있는 첫 번째 Pilot을 제안드립니다.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#D04A02] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#b03e02] transition-all shadow-xl shadow-orange-200">
                  AI Envisioning 워크숍 문의
                </button>
                <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all">
                  PoC / Deployment 상담 신청
                </button>
              </div>
              <button className="mt-8 text-slate-500 font-medium hover:text-slate-800 transition-colors underline underline-offset-4">
                맞춤형 AI 전환 진단 요청하기
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 100 100">
                <rect x="0" y="40" width="30" height="20" fill="#f7931e" />
                <rect x="35" y="20" width="30" height="20" fill="#e85d04" />
                <rect x="70" y="0" width="30" height="20" fill="#d7263d" />
              </svg>
              <span className="font-bold text-slate-800">pwc Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 23 23">
                <path fill="#f35325" d="M1 1h10v10H1z"/>
                <path fill="#81bc06" d="M12 1h10v10H12z"/>
                <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                <path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              <span className="font-semibold text-slate-600">Microsoft</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm">
            © 2026 PwC Consulting & Microsoft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
