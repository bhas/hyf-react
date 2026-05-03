import { useState } from 'react'

// Inline SVG icon — easy to swap for an MUI icon later
function SearchIcon() {
  return (
    <svg
      className="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

const CATEGORIES = ['All', 'Technology', 'Design', 'Business', 'Science', 'Culture']

const ARTICLES = [
  { id: 1, title: 'Getting Started with React', category: 'Technology', summary: 'An introduction to building UIs with React and component-based architecture.' },
  { id: 2, title: 'Design Systems at Scale', category: 'Design', summary: 'How large teams maintain consistency across products with shared design tokens.' },
  { id: 3, title: 'The Future of Remote Work', category: 'Business', summary: 'Exploring how distributed teams are reshaping the modern workplace.' },
  { id: 4, title: 'Quantum Computing Basics', category: 'Science', summary: 'A plain-language overview of qubits, superposition, and entanglement.' },
  { id: 5, title: 'Minimalism in Product Design', category: 'Design', summary: 'Why stripping things back often leads to better user experiences.' },
  { id: 6, title: 'Open Source Culture', category: 'Culture', summary: 'The values and community norms that keep open source software thriving.' },
]

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">Article Hub</h1>
        <p className="header-subtitle">Browse and search curated articles</p>
      </div>
    </header>
  )
}

function ArticleCard({ title, category, summary }) {
  return (
    <article className="card">
      <span className="card-category">{category}</span>
      <h2 className="card-title">{title}</h2>
      <p className="card-summary">{summary}</p>
    </article>
  )
}

export default function App() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = ARTICLES.filter((a) => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || a.category === category
    return matchesSearch && matchesCategory
  })

  function handleReset() {
    setSearch('')
    setCategory('All')
  }

  return (
    <div className="page">
      <Header />

      <main className="main">
        <section className="filters">
          {/* Text input */}
          <label className="field">
            <span className="field-label">Search</span>
            <div className="input-wrapper">
              <SearchIcon />
              <input
                className="input"
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </label>

          {/* Select input */}
          <label className="field">
            <span className="field-label">Category</span>
            <select
              className="input select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          {/* Button */}
          <button className="btn" onClick={handleReset}>
            Reset filters
          </button>
        </section>

        <p className="result-count">{filtered.length} article{filtered.length !== 1 ? 's' : ''} found</p>

        <div className="grid">
          {filtered.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
          {filtered.length === 0 && (
            <p className="empty">No articles match your filters.</p>
          )}
        </div>
      </main>
    </div>
  )
}
