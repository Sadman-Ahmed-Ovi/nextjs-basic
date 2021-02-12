import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/vercel.svg" width="120" height="80"/>
            </div>
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/ninjas">listing</Link>
        </nav>
    );
};

export default Navbar;