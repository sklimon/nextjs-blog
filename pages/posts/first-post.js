import Link from 'next/link'
import Image from 'next/image'

const MyComponent = () => (
    <Image
        src='/public/images/black-widow-1.png'
        height={400}
        width={200}
        alt='widow'
    />
)

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <MyComponent />
            <Link href="/">
                <button>Back to home</button>
            </Link>
        </>
    )


}