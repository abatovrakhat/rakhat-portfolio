const experience = [
  {
    role: 'Data Analyst',
    company: 'ТОО «АктауЭнергоСбыт»',
    period: 'Март 2024 — Май 2025',
    points: [
      'Проектировал и поддерживал витрины данных для управленческой и финансовой аналитики.',
      'Разрабатывал ETL-логику трансформации данных с использованием SQL и Python для расчёта ключевых бизнес-метрик.',
      'Оптимизировал сложные SQL-запросы с CTE, оконными функциями и агрегатами при работе с 300K+ записями.',
      'Выстроил процесс обновления агрегированных таблиц и автоматизированной отчётности.',
      'Проводил сегментацию пользователей и анализ факторов оттока.',
      'Разработал систему уведомлений на основе анализа пользовательских данных, что позволило снизить просрочку платежей на 43%.',
      'Документировал источники данных, логику расчёта метрик и взаимосвязи между таблицами для прозрачности аналитики.'
    ]
  }
];

const projects = [
  {
    title: 'LMS with AI — Web & Product Analytics',
    stack: 'PostgreSQL, Python, Google Analytics (GA4), Power BI',
    points: [
      'Анализировал поведение пользователей и event-based данные: 1 500+ пользователей и 9K+ событий.',
      'Проектировал SQL-воронки и витрины данных для расчёта Conversion Rate, Retention и Drop-off analysis.',
      'Настраивал продуктовую аналитику на событийной модели: user journey, funnels, engagement metrics.',
      'Создавал дашборды в Power BI для мониторинга KPI продукта и эффективности ключевых фич.',
      'Исследовал влияние качества AI-ответов на вовлечённость и конверсию, формировал продуктовые рекомендации.'
    ]
  },
  {
    title: 'Flower Shop Assistant',
    stack: 'Python, PostgreSQL',
    points: [
      'Провёл pre/post analysis после внедрения чат-бота и оценил влияние на conversion и выручку.',
      'Сегментировал пользователей по активности и вероятности покупки.',
      'Проанализировал связь времени активности и вероятности совершения покупки.',
      'Интерпретировал результаты анализа для улучшения продуктовых показателей.'
    ]
  },
  {
    title: 'Blind-Klavish — Assistive Technology',
    stack: 'Data & Business Analysis',
    points: [
      'Участвовал в разработке assistive-решения для людей с нарушением зрения.',
      'Провёл анализ рынка и конкурентной среды, оценил объём и потенциал сегментов.',
      'Разработал Business Model Canvas и финансовую модель продукта.',
      'Построил BPMN-диаграммы бизнес-процессов для моделирования пользовательских сценариев и операционной логики.',
      'Подготовил аналитические материалы и финансовые прогнозы для презентации инвесторам.'
    ]
  }
];

const skills = {
  SQL: ['PostgreSQL', 'CTE', 'оконные функции', 'JOIN', 'агрегаты', 'оптимизация запросов', 'витрины данных'],
  Python: ['Pandas', 'NumPy', 'Matplotlib', 'обработка данных', 'автоматизация расчётов', 'SQL-коннекторы'],
  BI: ['Power BI', 'Excel', 'дашборды', 'визуализация KPI'],
  Analytics: ['Funnel Analysis', 'Retention', 'Cohort Analysis', 'User Behavior Analysis', 'A/B Testing', 'Unit-экономика', 'Uplift-анализ'],
  Data: ['ETL-логика', 'агрегированные таблицы', 'документирование метрик', 'транзакционные и event-based данные']
};

const awards = [
  'Республиканская олимпиада по математике — Бронзовый призёр',
  'Международная Иранская Олимпиада — Бронзовый призёр',
  'Международный конкурс Caspian Startup — Топ-3 из 100+ команд',
  'IEEEDuino Hardware Hackathon — 2 место среди 25+ команд'
];

const stats = [
  ['1+ год', 'коммерческого опыта'],
  ['300K+', 'записей в аналитических задачах'],
  ['43%', 'снижение просрочки платежей']
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__inner container">
          <div>
            <span className="badge">Product / Data Analyst</span>
            <h1>Рахат Абатов</h1>
            <p className="lead">
              Product / Data Analyst с коммерческим опытом в анализе данных, ETL, продуктовой аналитике и построении витрин данных.
              Работаю с транзакционными и event-based данными, рассчитываю продуктовые метрики и превращаю данные в решения для бизнеса.
            </p>
            <div className="actions">
              <a className="button button--primary" href="mailto:rakhat.abatov@nu.edu.kz">Написать</a>
              <a className="button button--ghost" href="https://linkedin.com/in/rakhat-abatov-b61265250" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <aside className="card info-card">
            <div>
              <p className="muted">Телефон</p>
              <p className="strong">+7 707 237 44 68</p>
            </div>
            <div>
              <p className="muted">Email</p>
              <p className="strong">rakhat.abatov@nu.edu.kz</p>
            </div>
            <div>
              <p className="muted">Образование</p>
              <p className="strong">Nazarbayev University</p>
              <p>Бакалавр Computer Science, 2022 — 2026</p>
            </div>
            <div>
              <p className="muted">Фокус</p>
              <p>Product analytics, ETL, SQL optimization, dashboards, user behavior analysis</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container stats">
        {stats.map(([value, label]) => (
          <div key={value} className="card stat-card">
            <div className="stat-value">{value}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </section>

      <section className="container section">
        <h2>Опыт работы</h2>
        <div className="stack">
          {experience.map((item) => (
            <article key={item.company} className="card panel">
              <div className="row-between">
                <div>
                  <h3>{item.role}</h3>
                  <p className="subtitle">{item.company}</p>
                </div>
                <p className="muted">{item.period}</p>
              </div>
              <ul className="list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Проекты</h2>
        <div className="grid grid-3">
          {projects.map((project) => (
            <article key={project.title} className="card panel">
              <p className="accent-text">{project.stack}</p>
              <h3>{project.title}</h3>
              <ul className="list compact">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Навыки</h2>
        <div className="grid grid-2">
          {Object.entries(skills).map(([category, items]) => (
            <article key={category} className="card panel">
              <h3>{category}</h3>
              <div className="chips">
                {items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Награды</h2>
        <div className="grid grid-2">
          {awards.map((award) => (
            <div key={award} className="card award-card">{award}</div>
          ))}
        </div>
      </section>

      <section className="container section footer-cta">
        <div className="card cta-card">
          <h2>Контакты</h2>
          <p>
            Открыт к стажировкам, full-time ролям и проектам в сфере data analytics, product analytics и BI.
          </p>
          <div className="actions">
            <a className="button button--light" href="mailto:rakhat.abatov@nu.edu.kz">rakhat.abatov@nu.edu.kz</a>
            <a className="button button--ghost" href="https://linkedin.com/in/rakhat-abatov-b61265250" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
  );
}
