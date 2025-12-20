import { useAppStore } from "../store/appStore"

function Navbar() {
    const user = useAppStore((state) => state.user)
    const theme = useAppStore((state) => state.theme)
    const logout = useAppStore((state) => state.logout)
    const toggleTheme = useAppStore((state) => state.toggleTheme)

    return (
        <nav>
            <span>Theme : {theme}</span>
            <button onClick={toggleTheme}>Toggle Theme</button>

            {user ? (
                <div>
                    <span>{user.name}</span>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button>Login</button>
            )}
        </nav>
    )
}

export default Navbar