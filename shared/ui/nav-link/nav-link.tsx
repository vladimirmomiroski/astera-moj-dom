'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type PropsNavLink = {
    href: string,
    children: React.ReactNode,
}

const NavLink = ({ href, children }: PropsNavLink) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`${isActive ? 'text-gold' : 'text-black'
            }`}>
            {children}
        </Link>
    )
}

export default NavLink