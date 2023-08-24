import Title from '@/components/Head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000);
    }, [])

    return (
        <>
            <Title title="404" />
            <div className="content not-found">
                <h1>Ooops...</h1>
                <h2>That page cannot be found :(</h2>
                <p>Going back to the <Link href="/">Homepage</Link> in 5 seconds.....</p>
            </div>
        </>
    )
}