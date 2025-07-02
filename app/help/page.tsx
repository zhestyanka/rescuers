import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, Heart, Handshake, CreditCard, Gift, CheckCircle, ArrowRight } from "lucide-react"

export default function HelpPage() {
  const volunteerBenefits = [
    "Профессиональное обучение",
    "Сертификаты и удостоверения",
    "Страхование во время дежурств",
    "Форменная одежда",
    "Участие в важных операциях",
    "Развитие навыков и опыта",
  ]

  const donationOptions = [
    { amount: 500, description: "Средства защиты для одного спасателя" },
    { amount: 2000, description: "Комплект первой помощи" },
    { amount: 5000, description: "Спасательный жилет и снаряжение" },
    { amount: 15000, description: "Профессиональное водолазное оборудование" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Как помочь</h1>
            <p className="text-xl text-blue-100">
              Присоединяйтесь к нашей миссии спасения жизней. Каждый может внести свой вклад в обеспечение безопасности
              граждан.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Способы помощи</h2>
            <p className="text-xl text-gray-600">Выберите наиболее подходящий для вас способ поддержки</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Волонтерство</h3>
                <p className="text-gray-600 mb-6">Станьте частью команды спасателей и помогайте людям напрямую</p>
                <Button className="w-full">Стать волонтером</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Пожертвования</h3>
                <p className="text-gray-600 mb-6">Финансовая поддержка для закупки оборудования и обучения</p>
                <Button className="w-full bg-red-600 hover:bg-red-700">Сделать донат</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Партнерство</h3>
                <p className="text-gray-600 mb-6">Корпоративное сотрудничество и спонсорская поддержка</p>
                <Button className="w-full bg-transparent" variant="outline">
                  Стать партнером
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Волонтерство</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы всегда ищем неравнодушных людей, готовых посвятить свое время спасению жизней. Волонтеры — это основа
                нашей команды.
              </p>

              <h3 className="text-xl font-semibold mb-4">Что мы предлагаем:</h3>
              <ul className="space-y-3 mb-8">
                {volunteerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Требования:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Возраст от 18 лет</li>
                  <li>• Хорошая физическая подготовка</li>
                  <li>• Ответственность и дисциплина</li>
                  <li>• Готовность к обучению</li>
                </ul>
              </div>
            </div>

            <div>
              <Image
                src="/images/volunteer-training.jpg"
                alt="Волонтеры спасательной службы"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Заявка на волонтерство</h2>
              <p className="text-gray-600">Заполните форму, и мы свяжемся с вами для собеседования</p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия *</label>
                      <Input placeholder="Ваша фамилия" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Возраст *</label>
                    <Input type="number" placeholder="Полных лет" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Опыт и навыки</label>
                    <Textarea placeholder="Расскажите о своем опыте, навыках, мотивации..." rows={4} />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Поддержите нас финансово</h2>
            <p className="text-xl text-gray-600">
              Ваши пожертвования помогают нам закупать современное оборудование и обучать новых спасателей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {donationOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{option.amount.toLocaleString()} ₽</div>
                  <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                  <Button className="w-full" size="sm">
                    Пожертвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center">Произвольная сумма</h3>
                <div className="space-y-4">
                  <Input type="number" placeholder="Введите сумму в рублях" className="text-center text-lg" />
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Пожертвовать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/partnership-meeting.jpg"
                alt="Корпоративное партнерство"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Корпоративное партнерство</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы приглашаем компании к долгосрочному сотрудничеству. Партнерство с нами — это не только социальная
                ответственность, но и возможность повысить имидж вашей компании.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Варианты сотрудничества:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Спонсорство мероприятий и операций</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Предоставление оборудования и техники</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Обучение сотрудников безопасности</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Совместные PR-проекты</span>
                  </li>
                </ul>
              </div>

              <Button size="lg">
                Обсудить партнерство
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
