import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, Eye, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const featuredNews = {
    id: 1,
    title: "Крупная спасательная операция на Волге завершена успешно",
    excerpt:
      "Наша команда провела сложную многочасовую операцию по спасению группы рыбаков, оказавшихся в ледяной ловушке.",
    content:
      "Вчера в 14:30 поступил экстренный вызов о том, что группа из 4 рыбаков оказалась заблокирована на льдине в районе Саратовского моста...",
    date: "15 декабря 2024",
    author: "Александр Петров",
    views: 1250,
    image: "/images/rescue-operation-1.jpg",
    category: "Операции",
  }

  const news = [
    {
      id: 2,
      title: "Новое оборудование для водолазных работ",
      excerpt: "Служба получила современное водолазное оборудование для повышения эффективности подводных операций.",
      date: "12 декабря 2024",
      author: "Мария Сидорова",
      views: 890,
      image: "/images/safety-equipment.jpg",
      category: "Оборудование",
    },
    {
      id: 3,
      title: "Обучающий семинар для школьников",
      excerpt: "Проведен семинар по основам безопасности на воде для учащихся средних школ города.",
      date: "10 декабря 2024",
      author: "Елена Морозова",
      views: 654,
      image: "/images/children-safety-class.jpg",
      category: "Обучение",
    },
    {
      id: 4,
      title: "Награждение лучших волонтеров года",
      excerpt: "Состоялась церемония награждения волонтеров, показавших выдающиеся результаты в 2024 году.",
      date: "8 декабря 2024",
      author: "Дмитрий Козлов",
      views: 432,
      image: "/images/volunteer-award.jpg",
      category: "События",
    },
    {
      id: 5,
      title: "Профилактический рейд на городских пляжах",
      excerpt: "Проведена проверка состояния спасательных постов и оборудования на всех городских пляжах.",
      date: "5 декабря 2024",
      author: "Александр Петров",
      views: 321,
      image: "/images/water-patrol.jpg",
      category: "Профилактика",
    },
    {
      id: 6,
      title: "Международная конференция спасателей",
      excerpt: "Наши специалисты приняли участие в международной конференции по обмену опытом.",
      date: "3 декабря 2024",
      author: "Мария Сидорова",
      views: 567,
      image: "/images/news-conference.jpg",
      category: "События",
    },
    {
      id: 7,
      title: "Новые курсы первой помощи",
      excerpt: "Запущены расширенные курсы первой помощи для населения с практическими занятиями.",
      date: "1 декабря 2024",
      author: "Елена Морозова",
      views: 789,
      image: "/images/medical-training.jpg",
      category: "Обучение",
    },
  ]

  const categories = ["Все", "Операции", "Обучение", "События", "Оборудование", "Профилактика"]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Новости и события</h1>
            <p className="text-xl text-blue-100">
              Следите за нашей деятельностью, узнавайте о проведенных операциях и важных событиях в жизни спасательной
              службы.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Главная новость</h2>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2">
              <Image
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                width={800}
                height={400}
                className="w-full h-64 lg:h-full object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="secondary">{featuredNews.category}</Badge>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredNews.title}</h3>

                <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredNews.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredNews.views}</span>
                    </div>
                  </div>
                  <Button>
                    Читать полностью
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* News Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button key={category} variant={category === "Все" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Читать
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="outline">
            Загрузить еще новости
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
