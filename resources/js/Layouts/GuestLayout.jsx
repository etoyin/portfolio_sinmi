import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="bg-[#121d30] flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div className=''>
                <Link href="/">
                    <ApplicationLogo className="h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
