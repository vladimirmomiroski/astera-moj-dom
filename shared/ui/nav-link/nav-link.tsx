'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
    href: string,
    children: React.ReactNode,
}

const NavLink = ({ href, children }: NavLinkProps) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`cursor-pointer hover:text-gold ${isActive ? 'text-gold' : 'text-black'
            }`}>
            {children}
        </Link>
    )
}

export default NavLink