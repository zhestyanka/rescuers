import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, Award, Target, Heart, Star } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Александр Петров",
      role: "Руководитель службы",
      experience: "20 лет",
      image: "/images/team-leader.jpg",
    },
    {
      name: "Мария Сидорова",
      role: "Старший спасатель",
      experience: "15 лет",
      image: "/images/team-maria.jpg",
    },
    {
      name: "Дмитрий Козлов",
      role: "Инструктор по водолазным работам",
      experience: "12 лет",
      image: "/images/team-dmitry.jpg",
    },
    {
      name: "Елена Морозова",
      role: "Координатор волонтеров",
      experience: "8 лет",
      image: "/images/team-elena.jpg",
    },
  ]

  const achievements = [
    { year: "2024", title: "Награда МЧС за выдающиеся заслуги", icon: Award },
    { year: "2023", title: "Лучшая спасательная служба региона", icon: Star },
    { year: "2022", title: "Благодарность от администрации города", icon: Heart },
    { year: "2021", title: "Сертификат качества ISO 9001", icon: Shield },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">О нашей службе</h1>
            <p className="text-xl text-blue-100">
              Мы — команда профессиональных спасателей, посвятивших свою жизнь защите и спасению людей. Наша миссия —
              обеспечить безопасность каждого гражданина.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Защита жизни</h3>
                    <p className="text-gray-600">
                      Обеспечение безопасности граждан в чрезвычайных ситуациях и предотвращение несчастных случаев.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Обучение населения</h3>
                    <p className="text-gray-600">
                      Повышение уровня знаний граждан в области безопасности и первой помощи.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Профилактика ЧС</h3>
                    <p className="text-gray-600">Предупреждение чрезвычайных ситуаций и минимизация их последствий.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/rescue-team.jpg"
                alt="Команда спасателей в полном составе"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">История создания</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Наша спасательная служба была основана в 2009 году группой энтузиастов, объединенных общей целью —
                помогать людям в критических ситуациях. Начав с небольшой команды из 5 человек, мы выросли в
                профессиональную организацию с более чем 200 сотрудниками и волонтерами.
              </p>
              <p className="text-gray-600 mb-6">
                За 15 лет работы мы спасли более 1500 жизней, провели тысячи обучающих мероприятий и стали неотъемлемой
                частью системы безопасности региона. Наша служба аккредитована МЧС России и имеет все необходимые
                лицензии для ведения спасательной деятельности.
              </p>
              <p className="text-gray-600">
                Сегодня мы продолжаем развиваться, внедряя новые технологии и методы спасения, расширяя географию нашей
                деятельности и привлекая новых специалистов в нашу команду.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary">Опыт: {member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Наши достижения</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{achievement.year}</div>
                    <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  </div>
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
