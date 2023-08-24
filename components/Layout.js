import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/add-recipe">
            <h1>
                <span>Just Add</span>
                <span>Meal</span>
            </h1>
            <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className="page-content">
         { children }
      </div>

      <footer>
          <p>Copyright 2023 Just Add Meal :)</p>
      </footer>
    </div>
  )
}

