import Link from "next/link";

export default function MainHeader() {
    return (<header id="main-header">
        <div id="logo">
            <Link href="/">NextNews</Link>
        </div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/news">News</Link></li>
        </ul>
    </header>);
}