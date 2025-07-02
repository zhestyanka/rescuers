import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Waves, AlertTriangle, Users, Shield, Phone, Clock, MapPin, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Waves,
      title: "Спасение на воде",
      description: "Профессиональное спасение людей на акваториях",
      features: [
        "Спасение утопающих",
        "Водолазные работы",
        "Поиск пропавших под водой",
        "Подъем затонувших объектов",
        "Патрулирование акваторий",
      ],
      image: "/images/water-patrol.jpg",
      availability: "24/7",
      responseTime: "5-10 минут",
    },
    {
      icon: AlertTriangle,
      title: "Профилактика ЧС",
      description: "Предотвращение чрезвычайных ситуаций",
      features: [
        "Мониторинг опасных зон",
        "Установка предупреждающих знаков",
        "Патрулирование территорий",
        "Консультации по безопасности",
        "Разработка планов эвакуации",
      ],
      image: "/images/rescue-helicopter.jpg",
      availability: "Ежедневно",
      responseTime: "По запросу",
    },
    {
      icon: Users,
      title: "Обучение населения",
      description: "Повышение уровня знаний в области безопасности",
      features: [
        "Курсы первой помощи",
        "Обучение плаванию",
        "Семинары по безопасности",
        "Тренинги для детей",
        "Корпоративное обучение",
      ],
      image: "/images/children-safety-class.jpg",
      availability: "По расписанию",
      responseTime: "Запись заранее",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Направления работы</h1>
            <p className="text-xl text-blue-100">
              Комплексный подход к обеспечению безопасности граждан. Мы работаем по трем основным направлениям для
              максимальной эффективности.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>

                  <p className="text-xl text-gray-600 mb-6">{service.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Время отклика: {service.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">Доступность: {service.availability}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">Что мы делаем:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Экстренная ситуация?</h2>
          <p className="text-xl mb-8 text-red-100">Не теряйте время — звоните немедленно!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <Phone className="h-8 w-8" />
              <span>112</span>
            </div>
            <div className="text-red-100">или</div>
            <div className="flex items-center space-x-2 text-xl">
              <Phone className="h-6 w-6" />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Зона покрытия</h2>
            <p className="text-xl text-gray-600">Мы обслуживаем следующие районы и акватории</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Городские районы</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Центральный район</li>
                  <li>Северный район</li>
                  <li>Южный район</li>
                  <li>Восточный район</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Waves className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Акватории</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Река Волга</li>
                  <li>Городские пруды</li>
                  <li>Озеро Светлое</li>
                  <li>Водохранилище</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Особые объекты</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Пляжи и набережные</li>
                  <li>Спортивные комплексы</li>
                  <li>Детские лагеря</li>
                  <li>Промышленные зоны</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
