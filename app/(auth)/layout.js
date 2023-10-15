import AuthSidebar from "@/components/authSideBanner"

const AuthLayout = async ({children}) => {

    return (
        <div className="flex w-screen h-screen">
            <main>
                {children}            
            </main>
            <AuthSidebar />
        </div>
    )
}

export default AuthLayout