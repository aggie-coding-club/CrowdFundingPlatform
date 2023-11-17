import Image from 'next/image'

export default function Home() {
  return (
    <main data-theme="light">
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">CrowdFunding Platform</h1>
                    <p className="py-6">description.....</p>
                    <button className="btn">Campaigns</button>
                </div>
            </div>
        </div>
    </main>
  )
}