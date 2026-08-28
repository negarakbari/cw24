import { BookOpen} from 'lucide-react';
import Link  from 'next/link';


const Header = () => {
    return (
        <header className="flex justify-between border-gray-100 bg-white px-5 p-2">
            {/*logo*/}
            <div className='flex items-center gap-4'>
                <BookOpen className='text-purple-800 ' />
                <span className='text-xl'>MyBlog</span>
            </div>
            {/*navigation*/}
            <nav className='flex items-center gap-8 text-sm '>
                <Link className='hover:text-purple-400' href='/'>تماس با ما</Link>

                <Link className='hover:text-purple-400' href="/">
                    درباره ما
                </Link>
                <Link className='hover:text-purple-400' href="/">
                    وبلاگ ها
                </Link>
                <Link className='hover:text-purple-400' href="/">
                    خانه
                </Link>
               
            </nav>
             <Link className='border bg-purple-800 text-amber-50 rounded-lg p-4 '  href='/add-weblog'>
                    افزودن وبلاگ+
                </Link>

        </header>
    )

}
export default Header