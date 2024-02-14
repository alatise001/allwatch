import SearchBar from "../components/searchbar"


export default function TvSeriesLayout({ children }) {
  return (
    <section className="gap">
      <SearchBar />
      {children}
    </section>
  )
}
