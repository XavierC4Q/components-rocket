function TopNav({ children, ...props }) {
  return (
    <header className="sticky w-full px-4 h-16 flex content-center items-center">
      {children}
    </header>
  );
}

export default TopNav;
