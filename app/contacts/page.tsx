import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react"

export default function ContactsPage() {
  const contacts = [
    {
      icon: Phone,
      title: "Экстренная служба",
      info: "112",
      description: "Круглосуточно",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Phone,
      title: "Общий телефон",
      info: "+7 (495) 123-45-67",
      description: "Пн-Пт: 9:00-18:00",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@spasservice.ru",
      description: "Ответ в течение 24 часов",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: MapPin,
      title: "Адрес",
      info: "г. Москва, ул. Спасательная, 1",
      description: "Главный офис",
      color: "text-purple-600 bg-purple-100",
    },
  ]

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "9:00 - 18:00" },
    { day: "Суббота", hours: "10:00 - 16:00" },
    { day: "Воскресенье", hours: "Выходной" },
    { day: "Экстренная служба", hours: "24/7" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-blue-100">
              Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и прийти на помощь.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${contact.color}`}
                  >
                    <contact.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                  <p className="text-xl font-bold text-gray-900 mb-1">{contact.info}</p>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                        <Input placeholder="Ваше имя" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Тема обращения</label>
                      <Input placeholder="Кратко опишите суть вопроса" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение *</label>
                      <Textarea placeholder="Подробно опишите ваш вопрос или предложение..." rows={5} />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Режим работы</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {workingHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="font-medium text-gray-700">{schedule.day}</span>
                          <span className="text-gray-600">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-red-50 rounded-lg">
                      <div className="flex items-center space-x-2 text-red-700">
                        <Phone className="h-5 w-5" />
                        <span className="font-semibold">Экстренные ситуации: 112</span>
                      </div>
                      <p className="text-sm text-red-600 mt-1">
                        Служба экстренного реагирования работает круглосуточно
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Мы в социальных сетях</h3>
                <div className="flex space-x-4">
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                    <Facebook className="mr-2 h-5 w-5" />
                    Facebook
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                    <Youtube className="mr-2 h-5 w-5" />
                    YouTube
                  </Button>
                </div>
              </div>

              {/* Emergency Notice */}
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Важно!</h3>
                  <p className="text-red-700">
                    В случае экстренной ситуации не тратьте время на заполнение формы — звоните немедленно по номеру{" "}
                    <strong>112</strong> или
                    <strong>+7 (495) 123-45-67</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как нас найти</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Интерактивная карта</p>
              <p className="text-sm text-gray-500">г. Москва, ул. Спасательная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
