import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DemandsPage() {

  return (
    <div className="min-h-screen bg-white">
      {/* CNN-Style Header */}
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-red-600 px-4 py-2 rounded">
              <span className="font-bold text-sm tracking-wider">مطالبنا | DEMANDS</span>
            </div>
            <div className="h-0.5 w-16 bg-red-600"></div>
            <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">منصة سياسية | Policy Platform</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              مطالبنا التفصيلية | Our Detailed Demands
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              <strong>المطالب الأساسية التي تعطي الأولوية للرعاية الصحية والتعليم على البنية التحتية الرياضية</strong><br/>
              <em>Core demands prioritizing healthcare and education over sports infrastructure. We want hospitals, not stadiums.</em>
            </p>
            
            {/* Key Stats */}
            <div className="flex items-center gap-4 bg-red-600/20 border border-red-600/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-semibold text-sm">عاجل | URGENT</span>
              </div>
              <p className="text-white text-sm">
                <strong>حركة وطنية تطالب الحكومة بإعادة توجيه إنفاق كأس العالم إلى الخدمات الأساسية</strong><br/>
                <em>Nationwide movement demanding government reallocate World Cup spending to essential services</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4 max-w-7xl">

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Social Demands Column */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-green-600"></div>
              <h2 className="text-3xl font-bold text-green-800 uppercase tracking-wide">المطالب الاجتماعية | Social Demands</h2>
            </div>
            <p className="text-gray-600 text-lg">
              <strong>الخدمات الأساسية التي تؤثر مباشرة على الحياة اليومية ورفاهية المواطنين</strong><br/>
              <em>Essential services that directly impact citizens' daily lives and well-being</em>
            </p>
          </div>

          {/* Education Section - التعليم */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1">
                  أولوية 1 | PRIORITY 1
                </Badge>
                <span className="text-xs text-gray-500">التعليم | Education Reform</span>
              </div>
              <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-3">
                <span className="text-3xl">📚</span>
                التعليم | Education System Overhaul
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">الخلل الحالي | Current Problems:</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• مدارس قليلة في القرى والمناطق النائية | Few schools in rural and remote areas</li>
                  <li>• نقص الأساتذة والاكتظاظ في الأقسام | Teacher shortage and overcrowded classrooms</li>
                  <li>• مناهج قديمة وغير رقمية | Outdated and non-digital curricula</li>
                  <li>• ضعف فرص تعلم الإنجليزية | Weak English learning opportunities</li>
                </ul>
              </div>
              
              <h4 className="font-bold text-green-800 mb-4">شنو مطلوب | What We Demand:</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>بناء وتجهيز مدارس جديدة في المناطق النائية</strong><br/>
                    Build and equip new schools in remote areas
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>توظيف أساتذة لتقليص الاكتظاظ</strong><br/>
                    Hire teachers to reduce overcrowding in classrooms
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>تحديث المناهج ورقمنتها</strong><br/>
                    Modernize curricula and digitize education
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>دعم النقل المدرسي للطلاب</strong><br/>
                    Support school transportation for students
                  </span>
                </li>
                <li className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">🔥</span>
                    <div>
                      <div className="font-bold text-red-800 mb-1">إصلاح جذري | CRITICAL REFORM</div>
                      <span className="text-red-800 leading-relaxed">
                        <strong>اعتماد الإنجليزية كلغة ثانية</strong> بدلاً من الفرنسية لتحضير الشباب للفرص العالمية<br/>
                        <em>Adopt English as second language instead of French to prepare youth for global opportunities</em>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Public Health Section - الصحة العمومية */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1">
                  أولوية 1 | PRIORITY 1
                </Badge>
                <span className="text-xs text-gray-500">الصحة العمومية | Healthcare Crisis</span>
              </div>
              <CardTitle className="text-2xl font-bold text-red-800 flex items-center gap-3">
                <span className="text-3xl">🏥</span>
                الصحة العمومية | Public Health Emergency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">الخلل الحالي | Current Problems:</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• عدد الأطباء قليل مقابل عدد السكان | Few doctors compared to population</li>
                  <li>• المستشفيات ناقصة المعدات والمستلزمات | Hospitals lack equipment and supplies</li>
                  <li>• أسعار الأدوية مرتفعة | High medicine prices</li>
                  <li>• خدمات الإسعاف ضعيفة في المناطق النائية | Weak ambulance services in remote areas</li>
                  <li>• مواعيد المرضى طويلة بسبب نقص الرقمنة | Long patient appointments due to lack of digitization</li>
                </ul>
              </div>
              
              <h4 className="font-bold text-red-800 mb-4">شنو مطلوب | What We Demand:</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>رفع عدد الأطباء لكل 1000 نسمة</strong><br/>
                    Increase the number of doctors per 1000 citizens to international standards
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>توفير المستلزمات والمعدات الطبية</strong><br/>
                    Provide essential medical supplies and equipment to all healthcare facilities
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>دعم الإنتاج المحلي للأدوية لتخفيض الأسعار</strong><br/>
                    Support local pharmaceutical production to reduce medicine prices
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>تطوير الإسعاف والنقل الصحي في القرى</strong><br/>
                    Develop ambulance and medical transport services in rural areas
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>رقمنة المواعيد لتقليص الانتظار</strong><br/>
                    Digitize medical appointments to reduce waiting times
                  </span>
                </li>
                <li className="bg-black p-4 rounded-lg border-l-4 border-black mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-white mt-1 font-bold">🏟️</span>
                    <div>
                      <div className="font-bold text-white mb-1">أولوية عاجلة | URGENT PRIORITY</div>
                      <span className="text-white leading-relaxed">
                        <strong>المستشفيات أولى من الملاعب</strong> - توقيف إنفاق المليارات على ملاعب كأس العالم بينما المستشفيات تفتقر للمستلزمات الأساسية<br/>
                        <em>Hospitals before stadiums - Stop spending billions on World Cup stadiums while hospitals lack basic supplies</em>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Dignified Living & Human Rights Section - العيش الكريم وحقوق الإنسان */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-black to-gray-800"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-gray-100 text-black text-xs font-semibold px-3 py-1">
                  أساسي | ESSENTIAL
                </Badge>
                <span className="text-xs text-gray-500">العيش الكريم | Human Dignity</span>
              </div>
              <CardTitle className="text-2xl font-bold text-black flex items-center gap-3">
                <span className="text-3xl">🏡</span>
                العيش الكريم وحقوق الإنسان | Dignified Living & Human Rights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-gray-100 rounded-lg border-l-4 border-gray-500">
                <h4 className="font-bold text-gray-800 mb-2">الخلل الحالي | Current Problems:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• سكن غير لائق وغالي | Inadequate and expensive housing</li>
                  <li>• النقل العمومي ضعيف | Weak public transport</li>
                  <li>• القرى شبه معزولة والمناطق النائية مهمشة | Villages are semi-isolated and remote areas marginalized</li>
                  <li>• الماء الصالح للشرب غير متوفر على نطاق واسع | Safe drinking water not widely available</li>
                  <li>• البنية التحتية قديمة أو متدهورة | Old or deteriorating infrastructure</li>
                </ul>
              </div>
              
              <h4 className="font-bold text-black mb-4">شنو مطلوب | What We Demand:</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>توفير سكن بأسعار مناسبة</strong><br/>
                    Provide affordable, decent housing for all families
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>تحسين وسائل النقل العمومية</strong><br/>
                    Improve public transport infrastructure nationwide
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>فك العزلة عن القرى والمناطق شبه القروية</strong><br/>
                    Break isolation from villages and semi-rural areas
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>توفير ماء صالح للشرب وفق معايير عالمية</strong><br/>
                    Provide safe drinking water meeting international standards across the kingdom
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>ترميم الطرق والجسور وشبكات المياه والكهرباء</strong><br/>
                    Repair roads, bridges, water and electricity networks
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Economic Demands Column */}
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-red-600"></div>
              <h2 className="text-3xl font-bold text-red-800 uppercase tracking-wide">المطالب الاقتصادية | Economic Demands</h2>
            </div>
            <p className="text-gray-600 text-lg">
              <strong>إصلاحات اقتصادية لخلق الفرص وتحسين مستوى المعيشة لجميع المغاربة</strong><br/>
              <em>Economic reforms to create opportunities and improve living standards for all Moroccans</em>
            </p>
          </div>

          {/* Economic Demands Section - الاقتصاد والعمل */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1">
                  أولوية 1 | PRIORITY 1
                </Badge>
                <span className="text-xs text-gray-500">الاقتصاد والعمل | Economic Justice</span>
              </div>
              <CardTitle className="text-2xl font-bold text-red-800 flex items-center gap-3">
                <span className="text-3xl">💼</span>
                الاقتصاد والعمل | Economic Reform & Justice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-2">الخلل الحالي | Current Problems:</h4>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>• أسعار المواد الأساسية مرتفعة | High prices of basic goods</li>
                  <li>• الأجور ومعاشات التقاعد ضعيفة | Weak salaries and pensions</li>
                  <li>• البطالة عالية خصوصاً بين الشباب | High unemployment especially among youth</li>
                  <li>• الاحتكار منتشر وقليل المنافسة العادلة | Monopolies widespread, little fair competition</li>
                  <li>• الشركات الكبرى والمتعددة الجنسيات دون رقابة كافية | Large and multinational corporations without adequate oversight</li>
                  <li>• الخوصصة زادت من تفاقم المشاكل | Privatization has worsened problems</li>
                  <li>• ضعف الاستثمار في الشركات المغربية | Weak investment in Moroccan companies</li>
                  <li>• اعتماد كبير على القروض الدولية | Heavy dependence on international loans</li>
                </ul>
              </div>
              
              <h4 className="font-bold text-red-800 mb-4">شنو مطلوب | What We Demand:</h4>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>تخفيض أسعار المواد الأساسية ودعمها</strong><br/>
                    Reduce prices and support essential goods for families
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>تحسين الأجور ومعاشات التقاعد</strong><br/>
                    Improve salaries and pensions to match living costs
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>خلق فرص عمل للشباب وتقليص البطالة</strong><br/>
                    Create job opportunities for youth and reduce unemployment
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>محاربة الاحتكار وتشجيع المنافسة العادلة</strong><br/>
                    Fight monopolies and encourage fair competition
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>دعم المقاولات الصغيرة والمتوسطة</strong><br/>
                    Support small and medium enterprises (SMEs)
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>مراقبة الشركات الكبرى والمتعددة الجنسيات</strong><br/>
                    Strengthen oversight of large/multinational corporations
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>الحد من الخوصصة</strong><br/>
                    Limit excessive privatization of public services
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>الاستثمار في الشركات المغربية</strong><br/>
                    Invest in Moroccan companies and local economy
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>إعطاء الأولوية لتسديد القروض الدولية بطريقة مسؤولة</strong><br/>
                    Prioritize responsible repayment of international loans
                  </span>
                </li>
                <li className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1 font-bold">🏟️</span>
                    <div>
                      <div className="font-bold text-red-800 mb-1">أولوية عاجلة | URGENT PRIORITY</div>
                      <span className="text-red-800 leading-relaxed">
                        <strong>توقيف إنفاق المليارات على ملاعب كأس العالم</strong> بينما المستشفيات تفتقر للمستلزمات الأساسية<br/>
                        <em>Stop spending billions on World Cup stadiums while hospitals lack basic supplies</em>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="bg-black p-4 rounded-lg border-l-4 border-black mt-4">
                  <div className="flex items-start gap-3">
                    <span className="text-white mt-1 font-bold">💰</span>
                    <div>
                      <div className="font-bold text-white mb-1">أزمة الديون | DEBT CRISIS</div>
                      <span className="text-white leading-relaxed">
                        <strong>إعطاء الأولوية لتسديد قروض البنك الدولي</strong> لتقليص عبء الدين الوطني<br/>
                        <em>Prioritize repayment of World Bank loans to reduce national debt burden</em>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Summary Section - باختصار */}
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-green-500 via-red-500 to-black"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-gradient-to-r from-green-500 to-red-500 text-white text-xs font-semibold px-3 py-1">
                  الملخص | SUMMARY
                </Badge>
                <span className="text-xs text-gray-500">باختصار | In Summary</span>
              </div>
              <CardTitle className="text-2xl font-bold text-black flex items-center gap-3">
                <span className="text-3xl">📋</span>
                باختصار، المطلوب هو | In Summary, What We Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                  <span className="text-green-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>تحسين الخدمات الأساسية (تعليم، صحة، سكن، نقل، ماء)</strong><br/>
                    <em>Improve basic services (education, health, housing, transport, water)</em>
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <span className="text-red-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>دعم الاقتصاد المحلي وخلق فرص عمل للشباب</strong><br/>
                    <em>Support the local economy and create job opportunities for youth</em>
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-black mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>ضمان حقوق الإنسان والعيش الكريم لكل المواطنين</strong><br/>
                    <em>Ensure human rights and dignified living for all citizens</em>
                  </span>
                </li>
                <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                  <span className="text-blue-600 mt-1 font-bold">•</span>
                  <span className="leading-relaxed">
                    <strong>رقمنة وتحديث البنية التحتية والخدمات لتقليص الفوارق</strong><br/>
                    <em>Digitize and modernize infrastructure and services to reduce disparities</em>
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-black/5 rounded-lg border-l-4 border-red-500">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-1 font-bold text-2xl">🏟️</span>
                  <div>
                    <div className="font-bold text-red-800 mb-2">الرسالة الأساسية | CORE MESSAGE</div>
                    <p className="text-red-800 leading-relaxed text-lg">
                      <strong>المستشفيات أولى من الملاعب</strong><br/>
                      <em>Hospitals before stadiums - Healthcare and education must come before sports infrastructure</em>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

          {/* Call to Action - CNN Style */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-black to-gray-900 text-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-1 w-16 bg-red-600"></div>
                  <span className="text-red-400 font-semibold text-sm tracking-wider uppercase">Take Action</span>
                  <div className="h-1 w-16 bg-red-600"></div>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">
                  ادعم هذه المطالب | Support These Demands
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  <strong>هذه المطالب تمثل الصوت الجماعي للشعب المغربي</strong> من أجل مجتمع أكثر عدالة وإنصافاً وازدهاراً<br/>
                  <em>These demands represent the collective voice of the Moroccan people for a more just, equitable, and prosperous society. Join us in advocating for positive change.</em>
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">8+</div>
                    <div className="text-sm text-gray-400">مدن | Cities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">4</div>
                    <div className="text-sm text-gray-400">قطاعات | Sectors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">20+</div>
                    <div className="text-sm text-gray-400">مطالب | Demands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">سلمي | Peaceful</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="default" size="xl" className="flex items-center gap-3">
                    <span className="text-2xl">✊</span>
                    <div className="text-left">
                      <div className="font-bold text-lg">وقع العريضة | Sign the Petition</div>
                      <div className="text-sm opacity-90">ادعم حركتنا | Support our movement</div>
                    </div>
                  </Button>
                  <Button variant="success" size="xl" className="flex items-center gap-3">
                    <span className="text-2xl">📢</span>
                    <div className="text-left">
                      <div className="font-bold text-lg">انشر المطالب | Share These Demands</div>
                      <div className="text-sm opacity-90">انشر الوعي | Spread awareness</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}
