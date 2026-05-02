// This component acts as the parent layout for the Movies section.
// In the finished version it will render a <Subnav> and an <Outlet>
// so that NowShowing and ComingSoon are nested inside it.
export default function Movies() {
  return (
    <div className="page">
      <p className="page__eyebrow">Browse</p>
      <h1 className="page__title">Movies</h1>
      <p className="page__lead">
        Explore our full catalogue. Choose a category below to see what is playing now or
        what is coming up next.
      </p>
    </div>
  );
}
