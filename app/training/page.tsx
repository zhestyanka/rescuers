import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GraduationCap, Users, Clock, Award, CheckCircle, Calendar, Phone } from "lucide-react"

export default function TrainingPage() {
  const courses = [
    {
      title: "Спасатели на акватории",
      duration: "120 часов",
      price: "25 000 ₽",
      description: "Полный курс подготовки спасателей для работы на водных объектах",
      features: [
        "Теоретическая подготовка",
        "Практические занятия на воде",
        "Первая помощь",
        "Использование спасательного оборудования",
        "Психология спасательных работ",
      ],
      certificate: "Удостоверение спасателя",
      image: "/images/water-rescue-training.jpg",
    },
    {
      title: "Судоводители маломерных судов",
      duration: "80 часов",
      price: "18 000 ₽",
      description: "Обучение управлению маломерными судами с получением прав",
      features: [
        "Правила судовождения",
        "Навигация и лоция",
        "Устройство судна",
        "Безопасность плавания",
        "Практическое вождение",
      ],
      certificate: "Права судоводителя",
      image: "/images/boat-training.jpg",
    },
    {
      title: "Водолазы 3 класса",
      duration: "200 часов",
      price: "45 000 ₽",
      description: "Профессиональная подготовка водолазов для подводных работ",
      features: [
        "Водолазная медицина",
        "Техника безопасности",
        "Подводные работы",
        "Использование снаряжения",
        "Аварийные ситуации",
      ],
      certificate: "Удостоверение водолаза",
      image: "/images/diving-equipment.jpg",
    },
    {
      title: "Первая помощь",
      duration: "16 часов",
      price: "5 000 ₽",
      description: "Базовый курс оказания первой помощи для всех желающих",
      features: [
        "Сердечно-легочная реанимация",
        "Остановка кровотечений",
        "Помощь при травмах",
        "Транспортировка пострадавших",
        "Практические навыки",
      ],
      certificate: "Сертификат о прохождении курса",
      image: "/images/medical-training.jpg",
    },
  ]

  const instructors = [
    {
      name: "Александр Петров",
      specialization: "Спасательные работы на воде",
      experience: "20 лет",
      image: "/images/instructor-alexander.jpg",
    },
    {
      name: "Дмитрий Козлов",
      specialization: "Водолазные работы",
      experience: "15 лет",
      image: "/images/instructor-dmitry.jpg",
    },
    {
      name: "Елена Морозова",
      specialization: "Первая помощь",
      experience: "12 лет",
      image: "/images/instructor-elena.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Учебный центр</h1>
            <p className="text-xl text-blue-100">
              Профессиональная подготовка спасателей, судоводителей и водолазов. Получите необходимые навыки и
              официальные документы.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Выпускников</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Направления</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Трудоустройство</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши курсы</h2>
            <p className="text-xl text-gray-600">Выберите подходящую программу обучения</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                    <Badge variant="secondary" className="ml-2">
                      {course.price}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{course.certificate}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Программа курса:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">Записаться на курс</Button>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши инструкторы</h2>
            <p className="text-xl text-gray-600">Опытные профессионалы с многолетним стажем</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={150}
                    height={150}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{instructor.specialization}</p>
                  <Badge variant="outline">Опыт: {instructor.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Как записаться</h2>
              <p className="text-xl text-gray-600">Простой процесс записи на обучение</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Свяжитесь с нами</h3>
                <p className="text-gray-600">Позвоните или напишите для консультации и выбора курса</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Подайте документы</h3>
                <p className="text-gray-600">Предоставьте необходимые документы и заключите договор</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Начните обучение</h3>
                <p className="text-gray-600">Приступайте к занятиям по утвержденному расписанию</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl mb-8 text-blue-100">Свяжитесь с нами для консультации и записи на курсы</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Позвонить
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Записаться онлайн
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
