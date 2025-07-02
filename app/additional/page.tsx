"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  HelpCircle,
  Camera,
  BookOpen,
  Play,
  Download,
  Eye,
  Calendar,
  User,
  Clock,
  Filter,
  Phone,
  Mail,
  MessageCircle,
  AlertTriangle,
  Heart,
  Shield,
  ArrowRight,
} from "lucide-react"

export default function AdditionalPage() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("Все")
  const [activeSection, setActiveSection] = useState("faq")

  // FAQ Data
  const faqCategories = [
    {
      title: "Экстренные ситуации",
      questions: [
        {
          question: "Когда нужно вызывать спасательную службу?",
          answer:
            "Вызывайте нас немедленно при любой угрозе жизни и здоровью людей на воде: утопление, провал под лед, авария на воде, потеря ориентации в тумане, поломка судна в опасной зоне.",
        },
        {
          question: "Как быстро вы прибываете на место?",
          answer:
            "Среднее время прибытия нашей команды составляет 5-10 минут в городской черте и до 20 минут в отдаленных районах. У нас есть несколько дежурных постов для максимально быстрого реагирования.",
        },
        {
          question: "Что делать до прибытия спасателей?",
          answer:
            "Сохраняйте спокойствие, не предпринимайте самостоятельных попыток спасения без специальной подготовки. Обеспечьте безопасность себе и окружающим, следуйте инструкциям диспетчера.",
        },
      ],
    },
    {
      title: "Обучение и курсы",
      questions: [
        {
          question: "Какие документы нужны для поступления на курсы?",
          answer:
            "Для записи на курсы необходимы: паспорт, медицинская справка о состоянии здоровья, фотографии 3x4 (2 шт.), документ об образовании. Для некоторых курсов могут потребоваться дополнительные справки.",
        },
        {
          question: "Есть ли возрастные ограничения?",
          answer:
            "Минимальный возраст для большинства курсов — 18 лет. Для курса 'Первая помощь' принимаем с 16 лет. Максимальных возрастных ограничений нет, главное — соответствие медицинским требованиям.",
        },
      ],
    },
    {
      title: "Волонтерство",
      questions: [
        {
          question: "Какие требования к волонтерам?",
          answer:
            "Основные требования: возраст от 18 лет, хорошая физическая подготовка, ответственность, готовность к обучению. Приветствуется опыт в спорте, медицине или технических специальностях.",
        },
        {
          question: "Нужно ли платить за обучение волонтеров?",
          answer:
            "Нет, обучение волонтеров проводится бесплатно. Мы также предоставляем форменную одежду, страховку и все необходимое снаряжение.",
        },
      ],
    },
  ]

  // Gallery Data
  const galleryCategories = ["Все", "Операции", "Обучение", "Оборудование", "События", "Инфографика"]

  const galleryItems = [
    {
      id: 1,
      type: "photo",
      title: "Зимняя спасательная операция",
      category: "Операции",
      date: "15 декабря 2024",
      image: "/images/rescue-operation-winter.jpg",
      views: 1250,
    },
    {
      id: 2,
      type: "video",
      title: "Тренировка водолазов",
      category: "Обучение",
      date: "12 декабря 2024",
      image: "/images/water-rescue-training.jpg",
      duration: "5:32",
      views: 890,
    },
    {
      id: 3,
      type: "infographic",
      title: "Правила безопасности на льду",
      category: "Инфографика",
      date: "10 декабря 2024",
      image: "/images/water-safety-infographic.jpg",
      views: 2100,
    },
    {
      id: 4,
      type: "photo",
      title: "Современное спасательное снаряжение",
      category: "Оборудование",
      date: "8 декабря 2024",
      image: "/images/safety-equipment.jpg",
      views: 654,
    },
    {
      id: 5,
      type: "video",
      title: "Патрулирование акватории",
      category: "Операции",
      date: "5 декабря 2024",
      image: "/images/water-patrol.jpg",
      duration: "12:45",
      views: 1800,
    },
    {
      id: 6,
      type: "photo",
      title: "Урок безопасности для детей",
      category: "Обучение",
      date: "3 декабря 2024",
      image: "/images/children-safety-class.jpg",
      views: 432,
    },
  ]

  // Blog Data
  const blogPosts = [
    {
      id: 1,
      title: "Безопасность на льду: что нужно знать каждому",
      excerpt:
        "Зимний период — время повышенной опасности на водоемах. Рассказываем о правилах безопасного поведения на льду.",
      date: "15 декабря 2024",
      author: "Александр Петров",
      readTime: "5 мин",
      views: 2340,
      image: "/images/ice-safety-infographic.jpg",
      category: "Зимняя безопасность",
    },
    {
      id: 2,
      title: "Первая помощь при утоплении: алгоритм действий",
      excerpt:
        "Пошаговая инструкция оказания первой помощи пострадавшему при утоплении. Знания, которые могут спасти жизнь.",
      date: "12 декабря 2024",
      author: "Мария Сидорова",
      readTime: "7 мин",
      views: 1890,
      image: "/images/cpr-infographic.jpg",
      category: "Первая помощь",
    },
    {
      id: 3,
      title: "Безопасность детей на воде: советы родителям",
      excerpt:
        "Как обеспечить безопасность детей во время отдыха у воды. Правила, которые должен знать каждый родитель.",
      date: "8 декабря 2024",
      author: "Елена Морозова",
      readTime: "4 мин",
      views: 2100,
      image: "/images/swimming-safety.jpg",
      category: "Детская безопасность",
    },
    {
      id: 4,
      title: "Что делать, если провалился под лед",
      excerpt:
        "Экстренная ситуация: провал под лед. Как действовать пострадавшему и как помочь другим в такой ситуации.",
      date: "1 декабря 2024",
      author: "Дмитрий Козлов",
      readTime: "6 мин",
      views: 3200,
      image: "/images/emergency-response.jpg",
      category: "Экстренные ситуации",
    },
  ]

  const filteredGalleryItems =
    activeGalleryFilter === "Все" ? galleryItems : galleryItems.filter((item) => item.category === activeGalleryFilter)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="h-6 w-6 text-white" />
      case "infographic":
        return <Download className="h-6 w-6 text-white" />
      default:
        return <Eye className="h-6 w-6 text-white" />
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "video":
        return <Badge className="bg-red-600">Видео</Badge>
      case "infographic":
        return <Badge className="bg-green-600">Инфографика</Badge>
      default:
        return <Badge className="bg-blue-600">Фото</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Дополнительно</h1>
            <p className="text-xl text-blue-100">
              Полезная информация, образовательные материалы и ответы на часто задаваемые вопросы. Все что нужно знать о
              безопасности и нашей деятельности.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <Button
              variant={activeSection === "faq" ? "default" : "outline"}
              onClick={() => setActiveSection("faq")}
              className="flex items-center space-x-2"
            >
              <HelpCircle className="h-4 w-4" />
              <span>FAQ</span>
            </Button>
            <Button
              variant={activeSection === "gallery" ? "default" : "outline"}
              onClick={() => setActiveSection("gallery")}
              className="flex items-center space-x-2"
            >
              <Camera className="h-4 w-4" />
              <span>Галерея</span>
            </Button>
            <Button
              variant={activeSection === "blog" ? "default" : "outline"}
              onClick={() => setActiveSection("blog")}
              className="flex items-center space-x-2"
            >
              <BookOpen className="h-4 w-4" />
              <span>Блог безопасности</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {activeSection === "faq" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
              <p className="text-xl text-gray-600">Ответы на самые популярные вопросы о нашей деятельности</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <HelpCircle className="mr-3 h-6 w-6 text-blue-600" />
                    {category.title}
                  </h3>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-gray-200 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="max-w-3xl mx-auto text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Не нашли ответ на свой вопрос?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Позвонить</h4>
                    <Button className="w-full">+7 (495) 123-45-67</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Написать</h4>
                    <Button className="w-full bg-transparent" variant="outline">
                      info@spasservice.ru
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Онлайн-чат</h4>
                    <Button className="w-full bg-transparent" variant="outline">
                      Открыть чат
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === "gallery" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Галерея</h2>
              <p className="text-xl text-gray-600">Фото и видеоматериалы нашей работы, обучающие материалы</p>
            </div>

            {/* Gallery Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Фотографий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Видеороликов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-gray-600">Инфографик</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100K+</div>
                <div className="text-gray-600">Просмотров</div>
              </div>
            </div>

            {/* Gallery Filter */}
            <div className="flex items-center justify-center space-x-2 flex-wrap gap-2 mb-8">
              <Filter className="h-5 w-5 text-gray-500" />
              {galleryCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeGalleryFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveGalleryFilter(category)}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGalleryItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {getTypeIcon(item.type)}
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">{getTypeBadge(item.type)}</div>

                    {item.type === "video" && item.duration && (
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                        {item.duration}
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Eye className="h-3 w-3" />
                        <span>{item.views.toLocaleString()}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        {item.type === "video" ? "Смотреть" : item.type === "infographic" ? "Скачать" : "Открыть"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {activeSection === "blog" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Блог по безопасности</h2>
              <p className="text-xl text-gray-600">
                Образовательные материалы и советы экспертов по безопасности на воде
              </p>
            </div>

            {/* Emergency Tips */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-red-800">Провал под лед</h3>
                  <p className="text-red-700 text-sm">
                    Не паникуйте! Широко раскиньте руки, зацепитесь за край льда, работайте ногами как при плавании.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-800">Остановка сердца</h3>
                  <p className="text-blue-700 text-sm">
                    Немедленно начинайте непрямой массаж сердца: 30 нажатий, 2 вдоха. Частота 100-120 в минуту.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Сильное течение</h3>
                  <p className="text-green-700 text-sm">
                    Не боритесь с течением! Плывите под углом к берегу, экономьте силы, зовите на помощь.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h3>

                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Читать
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Все статьи блога
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Emergency Notice */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Экстренная ситуация?</h2>
          <p className="text-lg mb-6 text-red-100">Не ищите информацию — звоните немедленно!</p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="mr-2 h-5 w-5" />
            112 - Экстренный вызов
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
