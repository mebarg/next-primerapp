import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."



const navItems = [
    {
        path: '/pricing',
        text: 'Precios'
    },
    {
        path: '/contact',
        text: 'Contactos'
    },
    {
        path: '/about',
        text: 'About'
    },
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 rounded p-2 m-2">

            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex-1"></div>

            {navItems.map((item) =>
                <ActiveLink key={item.path} {...item} />
            )}

            {/*   <Link className="mr-2" href="/pricing">Precios</Link>
            <Link className="mr-2" href="/contact">Contacto</Link>
            <Link className="mr-2" href="/about">Sobre</Link> */}

        </nav>
    )
}
