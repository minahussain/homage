import NewEntryCard from '@/components/NewEntryCard'
import RightArrow from '@/components/icons/RightArrow'
import Search from '@/components/icons/Search'
import { UserButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }) => {
    return (
        <div className="h-screen w-screen relative">
            {/* <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-white/10"></aside> */}
            <div className="h-full">
                <header className="h-[72px] border-b border-white/10">
                    <nav className="flex justify-between items-center h-full w-full ">
                        <div className="flex px-6 items-center">
                            <div
                                className="flex items-center bg-transparent rounded-full h-[42px] w-[602px] p-[1px]
                                            duration-700 bg-gradient-to-r from-primary-400/40 via-primary-700/60 to-bg-primary-800/75 bg-size-200 bg-pos0 hover:bg-pos-100"
                            >
                                <>
                                    <div className="absolute ml-3 z-10">
                                        <Search />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search the archives"
                                        className="flex w-[600px] h-[40px] px-12 py-1 gap-1 self-stretch items-center font-mono
                                                    shadow-[inset_0_0px_24px_0px_rgba(38,13,4,0.32)]
                                                    rounded-full placeholder:text-light-100 
                                                    border-transparent
                                                    bg-gradient-to-r from-primary-900 via-amber-900 to-primary-800
                                                    duration-700 hover:shadow-lg
                                                    bg-size-200 bg-pos0 hover:bg-pos-100
                                                    focus:outline-none focus:border-transparent hover:border-transparent"
                                    />
                                    <div className="absolute ml-[568px] z-10">
                                        <RightArrow />
                                    </div>
                                </>
                            </div>
                            <div className="p-4 w-auto">
                                <NewEntryCard />
                            </div>
                        </div>
                        <div className="h-full w-auto px-6 gap-8 flex items-center justify-center">
                            <UserButton />
                        </div>
                    </nav>
                </header>
                <div className="h-[calc(100vh-72px)] w-full overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
