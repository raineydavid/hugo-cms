/** @jsx jsx */
import { useColorMode, jsx } from "theme-ui"

const ScreenMode = () =>{
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = (e: any) => {
      setColorMode(isDark ? `light` : `dark`)
    }
return (
    <button
    sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
    onClick={toggleColorMode}
    type="button"
    aria-label="Toggle light and dark mode to change the screen contrast"
  >
    {isDark ? `Light Mode` : `Dark Mode`}
  </button>

)
}

export default ScreenMode;