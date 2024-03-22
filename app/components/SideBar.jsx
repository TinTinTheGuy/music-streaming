import Link from 'next/link'

function SideBar() {
  return (
    <aside className="h-screen">
        <nav className="fixed h-full flex flex-col bg-gray-400 w-64">
            <div>Library</div>
            <Link href="#">Explore</Link>
        </nav>
    </aside>
  );
}

export default SideBar;
