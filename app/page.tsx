import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Phone, ArrowRight, AlertTriangle, Waves, GraduationCap } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Спасаем жизни каждый день</h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Профессиональная спасательная служба. Готовы прийти на помощь в любую минуту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Экстренный вызов
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 bg-transparent"
                >
                  Стать волонтером
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/water-rescue-hero.jpg"
                alt="Спасатели в действии"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Наши направления работы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексный подход к обеспечению безопасности и спасению людей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Спасение на воде</h3>
                <p className="text-gray-600 mb-4">Профессиональное спасение людей на акваториях, водолазные работы</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                  Подробнее <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Профилактика ЧС</h3>
                <p className="text-gray-600 mb-4">Предотвращение чрезвычайных ситуаций, обучение населения</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                  Подробнее <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Обучение</h3>
                <p className="text-gray-600 mb-4">Подготовка спасателей, судоводителей, курсы безопасности</p>
                <Link href="/training" className="text-blue-600 hover:text-blue-800 font-medium">
                  Подробнее <ArrowRight className="inline h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Присоединяйтесь к нашей команде</h2>
          <p className="text-xl mb-8 text-blue-100">Станьте частью команды профессионалов, которые спасают жизни</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Users className="mr-2 h-5 w-5" />
              Стать волонтером
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Heart className="mr-2 h-5 w-5" />
              Поддержать донатом
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Последние новости</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
              Все новости <ArrowRight className="inline h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: "/images/rescue-operation-winter.jpg", title: "Успешная спасательная операция на Волге" },
              { image: "/images/first-aid-training.jpg", title: "Новые методы обучения спасателей" },
              { image: "/images/news-conference.jpg", title: "Награждение лучших волонтеров" },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="Новость"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">15 декабря 2024</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">Наша команда провела сложную операцию по спасению рыбаков...</p>
                  <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
                    Читать далее
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
