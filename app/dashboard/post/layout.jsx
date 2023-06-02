import PostNav from "@/components/PostNav"

export default function postLayout({ children }) {


    return (
        <>
            <div className="">
                <div className="max-w-screen-2xl mx-auto">

                    <PostNav />

                    {children}


                </div>
            </div>

        </>
    )
}