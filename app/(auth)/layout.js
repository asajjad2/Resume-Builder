import AuthSidebar from "@/components/authSideBanner"

const AuthLayout = async ({children}) => {

    return (
        <div className="flex max-w-screen max-h-screen" >
            <main>
                {children}            
            </main>
            <AuthSidebar />
        </div>
    )
}

export default AuthLayout