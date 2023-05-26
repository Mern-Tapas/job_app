import Link from "next/link"

export default function productLayout({ children }) {
    return (
        <>
            <div className="">
                <div className="max-w-screen-2xl mx-auto">

                    <div className="bg-white pt-3 flex">
                        <div className="p-2 border-b-4 border-gray-600">
                            <Link href="/admin/product">Create</Link>
                        </div>
                        <div className="p-2">
                            <Link href="/admin/product/allproduct">Product</Link>
                        </div>
                    </div>


                    {children}


                </div>
            </div>

        </>
    )
}